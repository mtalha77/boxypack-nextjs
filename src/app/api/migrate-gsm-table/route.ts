import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const collection = await getCollection('productPricingFormulas');

    console.log('🔧 Migrating GSM tables to simplified structure...');

    // Get all existing formulas
    const existingFormulas = await collection.find({ isActive: true }).toArray();
    console.log(`📦 Found ${existingFormulas.length} existing formulas to migrate`);

    let successCount = 0;
    let errorCount = 0;
    let skippedCount = 0;

    for (const formula of existingFormulas) {
      try {
        // Check if formula has old GSM table structure
        const oldGsmTable = formula.materialCost?.gsmTable;
        
        if (!oldGsmTable || oldGsmTable.length === 0) {
          console.log(`⚠️  Skipped (no GSM table): ${formula.productName}`);
          skippedCount++;
          continue;
        }

        // Convert old GSM table to new simplified structure
        // Use the 'gsm' column value directly for all entries
        const newGsmTable = oldGsmTable.map((entry: any) => ({
          pt: entry.pt,
          gsm: entry.gsm
        }));

        // Update only the GSM table
        const updateResult = await collection.updateOne(
          { _id: formula._id },
          {
            $set: {
              'materialCost.gsmTable': newGsmTable,
              updatedAt: new Date()
            }
          }
        );

        if (updateResult.modifiedCount > 0) {
          successCount++;
          console.log(`✅ Migrated: ${formula.productName}`);
        } else {
          console.log(`⚠️  No changes needed: ${formula.productName}`);
          skippedCount++;
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to migrate ${formula.productName}:`, error);
      }
    }

    console.log('\n📊 Migration Summary:');
    console.log(`✅ Successfully migrated: ${successCount} products`);
    console.log(`⚠️  Skipped: ${skippedCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log('🎉 All other custom values preserved!');

    return NextResponse.json({
      success: true,
      message: `Successfully migrated GSM tables for ${successCount} products!`,
      data: {
        totalProducts: existingFormulas.length,
        successCount,
        skippedCount,
        errorCount,
        preservedCustomValues: true
      }
    });
  } catch (error) {
    console.error('❌ Error migrating GSM tables:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Use POST method to migrate GSM tables to simplified structure',
    info: {
      whatItDoes: 'Removes kraft/cardboard/corrugated columns from GSM table',
      whatItPreserves: 'All other pricing formula values remain unchanged'
    }
  });
}
