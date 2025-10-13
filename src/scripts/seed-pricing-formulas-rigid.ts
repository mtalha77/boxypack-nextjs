import clientPromise from '../lib/mongodb';
import { createDefaultRigidFormula } from '../lib/types/pricing-formulas-rigid';

// Helper function to create slug from name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Rigid products (5 items as specified)
const rigidProducts = [
  'Magnetic Closure Rigid Box',
  'Two Piece Rigid Boxes',
  'Sliding / sleeve Rigid Boxes (Match Style Boxes)',
  'Brief Case Style',
  'Book Style Rigid Boxes'
];

export async function seedRigidPricingFormulas() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DATABASE || 'BoxyPack');
    const collection = db.collection('productPricingFormulas');

    console.log('🎁 Starting Rigid product seeding...');
    console.log(`📦 Total Rigid products to seed: ${rigidProducts.length}`);

    // Remove existing Rigid formulas only (keep Kraft, Cardboard, Corrugated)
    console.log('🗑️  Clearing existing Rigid pricing formulas...');
    const deleteResult = await collection.deleteMany({ 
      category: 'rigid',
      formulaType: 'rigid'
    });
    console.log(`   Deleted ${deleteResult.deletedCount} existing Rigid formulas`);

    // Insert all Rigid products
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
        console.log(`✅ RIGID: ${productName}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to seed ${productName}:`, error);
      }
    }

    console.log('\n📊 Rigid Seeding Summary:');
    console.log(`✅ Successfully seeded: ${successCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log('\n🎉 Rigid database seeding completed!');

    // Show total counts by category
    const kraftCount = await collection.countDocuments({ category: 'kraft' });
    const cardboardCount = await collection.countDocuments({ category: 'cardboard' });
    const corrugatedCount = await collection.countDocuments({ category: 'corrugated' });
    const rigidCount = await collection.countDocuments({ category: 'rigid', formulaType: 'rigid' });

    console.log('\n📦 Total Products by Category:');
    console.log(`   Kraft: ${kraftCount}`);
    console.log(`   Cardboard: ${cardboardCount}`);
    console.log(`   Corrugated: ${corrugatedCount}`);
    console.log(`   Rigid: ${rigidCount}`);

    return {
      success: true,
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
    console.error('❌ Error seeding Rigid pricing formulas:', error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  seedRigidPricingFormulas()
    .then(() => {
      console.log('✅ Rigid seeding completed successfully');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Rigid seeding failed:', error);
      process.exit(1);
    });
}

