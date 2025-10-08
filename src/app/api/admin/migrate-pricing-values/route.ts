import { NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

/**
 * Migration API Route - Update Plates & Printing Cost Values
 * 
 * This route updates ONLY the cost values for Plates and Printing sections.
 * It does NOT change the structure, only the values under outside, inside, bothSide, none.
 */

// Exact values specified by user
const PLATES_COSTS = [
  { name: "0-18", costs: { outside: 1200, inside: 1200, bothSide: 2400, none: 0 } },
  { name: "18.1-25", costs: { outside: 2400, inside: 2400, bothSide: 4800, none: 0 } },
  { name: "25.1-30", costs: { outside: 5000, inside: 5000, bothSide: 10000, none: 0 } },
  { name: "30.1-40", costs: { outside: 8000, inside: 8000, bothSide: 16000, none: 0 } }
];

const PRINTING_COSTS = [
  { name: "0-18", costs: { outside: 3500, inside: 3500, bothSide: 7000, none: 0 } },
  { name: "18.1-25", costs: { outside: 6000, inside: 6000, bothSide: 12000, none: 0 } },
  { name: "25.1-30", costs: { outside: 8000, inside: 8000, bothSide: 16000, none: 0 } },
  { name: "30.1-40", costs: { outside: 10000, inside: 10000, bothSide: 20000, none: 0 } }
];

export async function POST() {
  try {
    const collection = await getCollection('productPricingFormulas');
    
    // Get all formulas
    const allFormulas = await collection.find({}).toArray();
    
    console.log(`🔄 Starting cost values migration for ${allFormulas.length} products...`);
    
    let updatedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;
    const errors: Array<{ productId: string; error: string }> = [];

    for (const formula of allFormulas) {
      try {
        const productId = formula.productId;
        let needsUpdate = false;
        const updates: any = {};

        // Update Plates Cost values
        if (formula.platesCost?.ranges && Array.isArray(formula.platesCost.ranges)) {
          const platesRanges = formula.platesCost.ranges.map((range: any) => {
            // Find matching standard cost by name
            const standardCost = PLATES_COSTS.find(c => c.name === range.name);
            if (standardCost) {
              console.log(`  📦 Updating Plates costs for range "${range.name}" in ${productId}`);
              return {
                ...range,
                costs: standardCost.costs
              };
            }
            return range;
          });
          
          updates['platesCost.ranges'] = platesRanges;
          needsUpdate = true;
        }

        // Update Printing Cost values
        if (formula.printingCost?.ranges && Array.isArray(formula.printingCost.ranges)) {
          const printingRanges = formula.printingCost.ranges.map((range: any) => {
            // Find matching standard cost by name
            const standardCost = PRINTING_COSTS.find(c => c.name === range.name);
            if (standardCost) {
              console.log(`  🖨️  Updating Printing costs for range "${range.name}" in ${productId}`);
              return {
                ...range,
                costs: standardCost.costs
              };
            }
            return range;
          });
          
          updates['printingCost.ranges'] = printingRanges;
          needsUpdate = true;
        }

        if (needsUpdate) {
          // Update only the cost values
          await collection.updateOne(
            { _id: formula._id },
            { 
              $set: {
                ...updates,
                updatedAt: new Date()
              }
            }
          );
          updatedCount++;
          console.log(`  ✅ Updated cost values for: ${productId}`);
        } else {
          skippedCount++;
          console.log(`  ⏭️  Skipped (no ranges to update): ${productId}`);
        }
      } catch (error) {
        errorCount++;
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        errors.push({ productId: formula.productId, error: errorMessage });
        console.error(`  ❌ Error updating ${formula.productId}:`, errorMessage);
      }
    }

    console.log('\n📊 Cost Values Migration Summary:');
    console.log(`  ✅ Successfully updated: ${updatedCount} products`);
    console.log(`  ⏭️  Skipped: ${skippedCount} products`);
    console.log(`  ❌ Failed: ${errorCount} products`);

    if (errors.length > 0) {
      console.log('\n❌ Errors:');
      errors.forEach(err => {
        console.log(`  - ${err.productId}: ${err.error}`);
      });
    }

    console.log('\n✅ Cost Values:');
    console.log('Plates: 0-18 (1200), 18.1-25 (2400), 25.1-30 (5000), 30.1-40 (8000)');
    console.log('Printing: 0-18 (3500), 18.1-25 (6000), 25.1-30 (8000), 30.1-40 (10000)');

    return NextResponse.json({
      success: true,
      message: 'Cost values migration completed',
      summary: {
        total: allFormulas.length,
        updated: updatedCount,
        skipped: skippedCount,
        failed: errorCount
      },
      errors: errors.length > 0 ? errors : undefined
    }, { status: 200 });

  } catch (error) {
    console.error('❌ Migration error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 });
  }
}

