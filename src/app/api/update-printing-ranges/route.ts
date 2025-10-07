import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

// Updated ranges for plates and printing costs
const UPDATED_PLATES_RANGES = [
  {
    name: "Small",
    lengthMin: 0.1,
    lengthMax: 12.5,
    widthMin: 0.1,
    widthMax: 12.5,
    costs: { outside: 1200, inside: 1200, bothSide: 2400, none: 0 }
  },
  {
    name: "Medium",
    lengthMin: 12.6,
    lengthMax: 18,
    widthMin: 12.6,
    widthMax: 18,
    costs: { outside: 2400, inside: 2400, bothSide: 4800, none: 0 }
  },
  {
    name: "Large",
    lengthMin: 18.1,
    lengthMax: 25,
    widthMin: 18.1,
    widthMax: 25,
    costs: { outside: 5000, inside: 5000, bothSide: 10000, none: 0 }
  },
  {
    name: "Extra Large",
    lengthMin: 25.1,
    lengthMax: 40,
    widthMin: 25.1,
    widthMax: 40,
    costs: { outside: 8000, inside: 8000, bothSide: 16000, none: 0 }
  }
];

const UPDATED_PRINTING_RANGES = [
  {
    name: "Small",
    lengthMin: 0.1,
    lengthMax: 12.5,
    widthMin: 0.1,
    widthMax: 12.5,
    costs: { outside: 3500, inside: 3500, bothSide: 7000, none: 0 }
  },
  {
    name: "Medium",
    lengthMin: 12.6,
    lengthMax: 18,
    widthMin: 12.6,
    widthMax: 18,
    costs: { outside: 6000, inside: 6000, bothSide: 12000, none: 0 }
  },
  {
    name: "Large",
    lengthMin: 18.1,
    lengthMax: 25,
    widthMin: 18.1,
    widthMax: 25,
    costs: { outside: 8000, inside: 8000, bothSide: 16000, none: 0 }
  },
  {
    name: "Extra Large",
    lengthMin: 25.1,
    lengthMax: 40,
    widthMin: 25.1,
    widthMax: 40,
    costs: { outside: 10000, inside: 10000, bothSide: 20000, none: 0 }
  }
];

export async function POST(request: NextRequest) {
  try {
    const collection = await getCollection('productPricingFormulas');

    console.log('🔧 Updating printing and plates cost ranges while preserving custom values...');

    // Get all existing formulas
    const existingFormulas = await collection.find({ isActive: true }).toArray();
    console.log(`📦 Found ${existingFormulas.length} existing formulas to update`);

    let successCount = 0;
    let errorCount = 0;

    for (const formula of existingFormulas) {
      try {
        // Update only the plates and printing cost ranges
        const updateResult = await collection.updateOne(
          { _id: formula._id },
          {
            $set: {
              'platesCost.ranges': UPDATED_PLATES_RANGES,
              'printingCost.ranges': UPDATED_PRINTING_RANGES,
              updatedAt: new Date()
            }
          }
        );

        if (updateResult.modifiedCount > 0) {
          successCount++;
          console.log(`✅ Updated: ${formula.productName}`);
        } else {
          console.log(`⚠️  No changes needed: ${formula.productName}`);
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to update ${formula.productName}:`, error);
      }
    }

    console.log('\n📊 Update Summary:');
    console.log(`✅ Successfully updated: ${successCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log('🎉 All custom values preserved!');

    return NextResponse.json({
      success: true,
      message: `Successfully updated printing/plates ranges for ${successCount} products while preserving all custom values!`,
      data: {
        totalProducts: existingFormulas.length,
        successCount,
        errorCount,
        preservedCustomValues: true
      }
    });
  } catch (error) {
    console.error('❌ Error updating printing ranges:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Use POST method to update printing/plates ranges while preserving custom values'
  });
}
