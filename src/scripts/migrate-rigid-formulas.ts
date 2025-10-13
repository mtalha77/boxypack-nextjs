import clientPromise from '../lib/mongodb';

/**
 * Migration Script: Update Rigid Pricing Formulas
 * 
 * Changes:
 * 1. Material Cost: Now sums ALL 4 costs (cardboard1 + cardboard2 + paper1 + paper2) / 100 × units
 * 2. Shipping Cost: Complete new formula with lengthCm, widthCm, heightCm, temp, temp2 calculations
 */

async function migrateRigidFormulas() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DATABASE || 'BoxyPack');
    const collection = db.collection('productPricingFormulas');

    console.log('🔄 Starting Rigid formulas migration...');

    // Find all Rigid products
    const rigidProducts = await collection.find({ 
      category: 'rigid',
      formulaType: 'rigid'
    }).toArray();

    console.log(`📦 Found ${rigidProducts.length} Rigid products to migrate`);

    let successCount = 0;
    let errorCount = 0;

    for (const product of rigidProducts) {
      try {
        // Note: We don't need to change the stored formula structure
        // The changes are in the CALCULATOR logic, not the stored data
        // But we'll update the updatedAt timestamp to mark as migrated

        await collection.updateOne(
          { _id: product._id },
          { 
            $set: { 
              updatedAt: new Date(),
              // Add migration marker
              migratedToV2: true,
              migrationDate: new Date()
            }
          }
        );

        successCount++;
        console.log(`✅ ${product.productName}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to migrate ${product.productName}:`, error);
      }
    }

    console.log('\n📊 Migration Summary:');
    console.log(`✅ Successfully migrated: ${successCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log('\n🎉 Migration completed!');

    console.log('\n📝 Note: The actual formula changes are in the calculator code.');
    console.log('   Material Cost: Now sums all 4 costs (C1 + C2 + P1 + P2) / 100 × units');
    console.log('   Shipping Cost: New formula with lengthCm, widthCm, heightCm, temp, temp2');

    return {
      success: true,
      migrated: successCount,
      failed: errorCount,
      total: rigidProducts.length
    };
  } catch (error) {
    console.error('❌ Migration error:', error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  migrateRigidFormulas()
    .then(() => {
      console.log('✅ Migration completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Migration failed:', error);
      process.exit(1);
    });
}

export { migrateRigidFormulas };

