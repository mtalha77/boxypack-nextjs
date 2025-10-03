import { MongoClient } from 'mongodb';
import { createDefaultProductFormula, MaterialType } from '../lib/types/pricing-formulas';

// Sample products to seed
const SAMPLE_PRODUCTS = [
  {
    productId: 'kraft-mailer-box',
    productName: 'Kraft Mailer Box',
    category: 'kraft' as MaterialType
  },
  {
    productId: 'kraft-box-with-lid',
    productName: 'Kraft Box with Lid',
    category: 'kraft' as MaterialType,
    twoPieceBoxEnabled: true
  },
  {
    productId: 'kraft-pillow-box',
    productName: 'Kraft Pillow Box',
    category: 'kraft' as MaterialType
  },
  {
    productId: 'kraft-gable-box',
    productName: 'Kraft Gable Box',
    category: 'kraft' as MaterialType
  },
  {
    productId: 'cardboard-display-box',
    productName: 'Cardboard Display Box',
    category: 'cardboard' as MaterialType,
    vendorPercentage: 50
  },
  {
    productId: 'cardboard-tuck-end-box',
    productName: 'Cardboard Tuck End Box',
    category: 'cardboard' as MaterialType,
    vendorPercentage: 50
  },
  {
    productId: 'cardboard-box-with-lid',
    productName: 'Cardboard Box with Lid',
    category: 'cardboard' as MaterialType,
    vendorPercentage: 50,
    twoPieceBoxEnabled: true
  },
  {
    productId: 'corrugated-mailer-box',
    productName: 'Corrugated Mailer Box',
    category: 'corrugated' as MaterialType,
    vendorPercentage: 50
  },
  {
    productId: 'corrugated-shipping-box',
    productName: 'Corrugated Shipping Box',
    category: 'corrugated' as MaterialType,
    vendorPercentage: 50
  }
];

async function seedPricingFormulas() {
  const mongoUrl = process.env.MONGODB_URI || 
    'mongodb+srv://rankorbit1026_db_user:yokyklGhNigs1oNi@cluster0.pjhksks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  
  const client = new MongoClient(mongoUrl, {
    tls: true,
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true
  });

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db('BoxyPack');
    const collection = db.collection('productPricingFormulas');
    
    // Clear existing formulas (optional - comment out if you want to keep existing)
    const deleteResult = await collection.deleteMany({});
    console.log(`🗑️  Cleared ${deleteResult.deletedCount} existing pricing formulas`);
    
    // Create formulas for each product
    const formulas = SAMPLE_PRODUCTS.map(product => {
      const formula = createDefaultProductFormula(
        product.productId,
        product.productName,
        product.category
      );

      // Apply custom overrides
      if (product.twoPieceBoxEnabled) {
        formula.twoPieceBox.enabled = true;
      }

      if (product.vendorPercentage) {
        formula.vendorPercentage.percentage = product.vendorPercentage;
      }

      return {
        ...formula,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });

    // Insert formulas
    const result = await collection.insertMany(formulas);
    console.log(`✅ Seeded ${result.insertedCount} pricing formulas`);
    
    // Log created products
    console.log('\n📋 Created pricing formulas for:');
    SAMPLE_PRODUCTS.forEach(product => {
      console.log(`  - ${product.productName} (${product.category})`);
    });

    console.log('\n✨ Seeding complete!');
    
  } catch (error) {
    console.error('❌ Error seeding pricing formulas:', error);
    throw error;
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the seeding
if (require.main === module) {
  seedPricingFormulas()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export { seedPricingFormulas };

