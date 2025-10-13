import clientPromise from '../lib/mongodb';
import { createDefaultRigidFormula } from '../lib/types/pricing-formulas-rigid';

// Note: Uses the new flexible formula structure with individual multipliers

// Helper function to create slug from name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Only 5 Rigid products as specified (matching productByMaterialData.ts)
const rigidProducts = [
  'Magnetic Closure Rigid Box',
  'Two Piece Rigid Boxes',
  'Sliding / sleeve Rigid Boxes (Match Style Boxes)',
  'Brief Case Style',
  'Book Style Rigid Boxes'
];

export async function cleanupAndSeedRigid() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DATABASE || 'BoxyPack');
    const collection = db.collection('productPricingFormulas');

    console.log('🧹 Starting Rigid products cleanup and seeding...');
    console.log(`📦 Target Rigid products: ${rigidProducts.length}`);

    // Step 1: DELETE ALL RIGID PRODUCTS (both old 13-section and new 8-section)
    console.log('\n🗑️  Deleting ALL Rigid category products...');
    const deleteResult = await collection.deleteMany({ 
      category: 'rigid'
      // No formulaType check - deletes ALL rigid products
    });
    console.log(`   ✅ Deleted ${deleteResult.deletedCount} existing Rigid products`);

    // Step 2: Seed ONLY the 5 specified products with 8-section structure
    console.log('\n🌱 Seeding 5 new Rigid products with 8-section structure...');
    
    let successCount = 0;
    let errorCount = 0;

    for (const productName of rigidProducts) {
      try {
        const productId = createSlug(productName);
        const formula = createDefaultRigidFormula(productId, productName);
        
        await collection.insertOne({
          ...formula,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        successCount++;
        console.log(`   ✅ ${productName}`);
      } catch (error) {
        errorCount++;
        console.error(`   ❌ Failed to seed ${productName}:`, error);
      }
    }

    console.log('\n📊 Cleanup & Seeding Summary:');
    console.log(`🗑️  Deleted: ${deleteResult.deletedCount} old products`);
    console.log(`✅ Successfully seeded: ${successCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log('\n🎉 Rigid products cleanup and seeding completed!');

    // Show final counts by category
    const kraftCount = await collection.countDocuments({ category: 'kraft' });
    const cardboardCount = await collection.countDocuments({ category: 'cardboard' });
    const corrugatedCount = await collection.countDocuments({ category: 'corrugated' });
    const rigidCount = await collection.countDocuments({ category: 'rigid', formulaType: 'rigid' });

    console.log('\n📦 Total Products by Category:');
    console.log(`   Kraft: ${kraftCount}`);
    console.log(`   Cardboard: ${cardboardCount}`);
    console.log(`   Corrugated: ${corrugatedCount}`);
    console.log(`   Rigid (8-section): ${rigidCount}`);

    return {
      success: true,
      deleted: deleteResult.deletedCount,
      totalProducts: rigidProducts.length,
      successCount,
      errorCount,
      breakdown: {
        kraft: kraftCount,
        cardboard: cardboardCount,
        corrugated: corrugatedCount,
        rigid: rigidCount
      }
    };
  } catch (error) {
    console.error('❌ Error in cleanup and seeding:', error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  cleanupAndSeedRigid()
    .then(() => {
      console.log('✅ Cleanup and seeding completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Cleanup and seeding failed:', error);
      process.exit(1);
    });
}

