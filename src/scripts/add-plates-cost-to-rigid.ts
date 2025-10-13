/**
 * Migration Script: Add Plates Cost Section to Rigid Products
 * 
 * This script adds the new "Plates Cost" section (Section 3) to all existing rigid products.
 * It ONLY affects products with formulaType: 'rigid'
 * 
 * Run with: npx ts-node --project tsconfig.json src/scripts/add-plates-cost-to-rigid.ts
 */

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = 'boxypack';
const COLLECTION_NAME = 'pricingFormulas';

// Default plates cost configuration
const DEFAULT_PLATES_COST = {
  ranges: [
    { name: "0-18", dimensionMin: 0, dimensionMax: 18, cost: 2400 },
    { name: "18.1-25", dimensionMin: 18.1, dimensionMax: 25, cost: 4800 },
    { name: "25.1-30", dimensionMin: 25.1, dimensionMax: 30, cost: 10000 },
    { name: "30.1-40", dimensionMin: 30.1, dimensionMax: 40, cost: 16000 }
  ],
  multiplier: 2
};

async function migrateRigidProducts() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    console.log('🔗 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected successfully');
    
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    
    // Find all rigid products
    console.log('\n🔍 Finding rigid products...');
    const rigidProducts = await collection.find({ formulaType: 'rigid' }).toArray();
    
    console.log(`📦 Found ${rigidProducts.length} rigid products`);
    
    if (rigidProducts.length === 0) {
      console.log('⚠️  No rigid products found. Nothing to migrate.');
      return;
    }
    
    // Display products that will be updated
    console.log('\n📝 Products to update:');
    rigidProducts.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.productName} (${product.productId})`);
    });
    
    console.log('\n🚀 Starting migration...');
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const product of rigidProducts) {
      try {
        // Check if platesCost already exists
        if (product.platesCost) {
          console.log(`⏭️  Skipping ${product.productName} - already has platesCost`);
          continue;
        }
        
        // Add platesCost section
        const result = await collection.updateOne(
          { _id: product._id },
          {
            $set: {
              platesCost: DEFAULT_PLATES_COST,
              updatedAt: new Date()
            }
          }
        );
        
        if (result.modifiedCount > 0) {
          console.log(`✅ Updated: ${product.productName}`);
          successCount++;
        } else {
          console.log(`⚠️  No changes for: ${product.productName}`);
        }
        
      } catch (error) {
        console.error(`❌ Error updating ${product.productName}:`, error);
        errorCount++;
      }
    }
    
    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 Migration Summary:');
    console.log('='.repeat(50));
    console.log(`Total rigid products found: ${rigidProducts.length}`);
    console.log(`✅ Successfully updated: ${successCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`⏭️  Skipped (already had platesCost): ${rigidProducts.length - successCount - errorCount}`);
    console.log('='.repeat(50));
    
    // Verify the updates
    console.log('\n🔍 Verifying updates...');
    const updatedProducts = await collection.find({ 
      formulaType: 'rigid',
      platesCost: { $exists: true }
    }).toArray();
    
    console.log(`\n✅ Verification: ${updatedProducts.length}/${rigidProducts.length} rigid products now have platesCost`);
    
    updatedProducts.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.productName}`);
      console.log(`     - Plates ranges: ${product.platesCost.ranges.length}`);
      console.log(`     - Multiplier: ${product.platesCost.multiplier}`);
    });
    
    if (updatedProducts.length === rigidProducts.length) {
      console.log('\n✅ ✅ ✅ Migration completed successfully! All rigid products updated. ✅ ✅ ✅\n');
    } else {
      console.log('\n⚠️  Migration completed with warnings. Some products may not have been updated.\n');
    }
    
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    throw error;
  } finally {
    await client.close();
    console.log('🔌 Database connection closed');
  }
}

// Run the migration
if (require.main === module) {
  migrateRigidProducts()
    .then(() => {
      console.log('\n✅ Script completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Script failed:', error);
      process.exit(1);
    });
}

export { migrateRigidProducts };

