import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const collection = await getCollection('productPricingFormulas');

    console.log('🔧 Updating shipping cost logic to per-kg calculation for 70+ kg...');

    // Get all existing formulas
    const existingFormulas = await collection.find({ isActive: true }).toArray();
    console.log(`📦 Found ${existingFormulas.length} existing formulas to update`);

    let successCount = 0;
    let errorCount = 0;
    let skippedCount = 0;

    for (const formula of existingFormulas) {
      try {
        const shippingCost = formula.shippingCost;
        
        if (!shippingCost || !shippingCost.shippingTiers) {
          console.log(`⚠️  Skipped (no shipping cost): ${formula.productName}`);
          skippedCount++;
          continue;
        }

        // Find the last tier (70+ kg tier)
        const tiers = shippingCost.shippingTiers;
        const lastTierIndex = tiers.length - 1;
        
        if (lastTierIndex < 0) {
          console.log(`⚠️  Skipped (no tiers): ${formula.productName}`);
          skippedCount++;
          continue;
        }

        // Check if last tier needs updating
        const lastTier = tiers[lastTierIndex];
        
        // If the last tier already has maxWeight as Infinity and cost as 2250, skip
        if (lastTier.maxWeight === Infinity && lastTier.cost === 2250) {
          console.log(`⚠️  Already updated: ${formula.productName}`);
          skippedCount++;
          continue;
        }

        // Update the last tier to have maxWeight as Infinity
        // and cost as the per-kg rate (2250)
        const updatedTiers = [...tiers];
        updatedTiers[lastTierIndex] = {
          minWeight: 70,
          maxWeight: Infinity,
          cost: 2250  // This is now per-kg rate, not fixed cost
        };

        // Update the formula
        const updateResult = await collection.updateOne(
          { _id: formula._id },
          {
            $set: {
              'shippingCost.shippingTiers': updatedTiers,
              updatedAt: new Date()
            }
          }
        );

        if (updateResult.modifiedCount > 0) {
          successCount++;
          console.log(`✅ Updated: ${formula.productName}`);
        } else {
          console.log(`⚠️  No changes needed: ${formula.productName}`);
          skippedCount++;
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to update ${formula.productName}:`, error);
      }
    }

    console.log('\n📊 Update Summary:');
    console.log(`✅ Successfully updated: ${successCount} products`);
    console.log(`⚠️  Skipped: ${skippedCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log('🎉 Shipping cost for 70+ kg now calculated as: totalWeight × $2250/kg');

    return NextResponse.json({
      success: true,
      message: `Successfully updated shipping logic for ${successCount} products!`,
      data: {
        totalProducts: existingFormulas.length,
        successCount,
        skippedCount,
        errorCount,
        change: 'For weights over 70kg: Changed from fixed $2250 to $2250 per kg'
      }
    });
  } catch (error) {
    console.error('❌ Error updating shipping logic:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Use POST method to update shipping cost logic for 70+ kg weights',
    info: {
      change: 'For weights over 70kg: Changed from fixed $2250 to $2250 per kg',
      formula: 'New calculation: totalWeight × $2250'
    }
  });
}
