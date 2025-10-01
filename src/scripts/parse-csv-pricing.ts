import { MongoClient } from 'mongodb';
import { CSVProductPricing, MaterialSpec, ProductCategory, DieMakingSpec } from '../lib/types/pricing';

// Parse CSV data and convert to database format
function parseCSVPricingData(): CSVProductPricing[] {
  const products: CSVProductPricing[] = [];
  
  // Kraft Boxes (rows 33-54)
  const kraftProducts = [
    {
      productName: 'Kraft Mailer Box',
      category: 'kraft' as ProductCategory,
      moq: 10,
      url: 'https://www.thecustomboxes.com/kraft-mailer-boxes/',
      length: 6, width: 11, height: 2.5,
      materialSpec: { gsm: 14, kraft: 400, cardboard: 300, corrugated: 300 },
      weightOf100Units: 189875,
      materialCostOf100Units: 12.25,
      scanningCost: { outside: 200, inside: 200, bothside: 200, blank: 0 },
      platesCost: { outside: 1200, inside: 1200, bothside: 1200, blank: 0 },
      printingCost: { outside: 2400, inside: 2400, bothside: 2400, blank: 0 },
      laminationCost: { outside: 5000, inside: 5000, bothside: 5000, blank: 0 },
      dieMakingCost: { outside: 3500, inside: 3500, bothside: 3500, blank: 0 },
      dieCuttingCost: { outside: 6000, inside: 6000, bothside: 6000, blank: 0 },
      pastingCost: { outside: 8000, inside: 8000, bothside: 8000, blank: 0 },
      dieMakingSpec: { minCost: 1000, calculation: 'area', areaThreshold: 100 },
      twoPieceBoxMultiplier: 1,
      vendorPercentage: 25,
      bothSidePrintingMultiplier: 1.5,
      shippingWeight: 0.11025,
      shippingCost: 38043
    },
    {
      productName: 'Kraft Box with Lid',
      category: 'kraft' as ProductCategory,
      moq: 10,
      url: 'https://custompackagingpro.com/product/kraft-boxes-with-lids',
      length: 8, width: 6, height: 3,
      materialSpec: { gsm: 16, kraft: 400, cardboard: 300, corrugated: 300 },
      weightOf100Units: 101587.5,
      materialCostOf100Units: 6.55,
      scanningCost: { outside: 200, inside: 200, bothside: 200, blank: 0 },
      platesCost: { outside: 1200, inside: 1200, bothside: 1200, blank: 0 },
      printingCost: { outside: 2400, inside: 2400, bothside: 2400, blank: 0 },
      laminationCost: { outside: 5000, inside: 5000, bothside: 5000, blank: 0 },
      dieMakingCost: { outside: 3500, inside: 3500, bothside: 3500, blank: 0 },
      dieCuttingCost: { outside: 6000, inside: 6000, bothside: 6000, blank: 0 },
      pastingCost: { outside: 8000, inside: 8000, bothside: 8000, blank: 0 },
      dieMakingSpec: { minCost: 1000, calculation: 'area', areaThreshold: 100 },
      twoPieceBoxMultiplier: 2,
      vendorPercentage: 25,
      bothSidePrintingMultiplier: 1.5,
      shippingWeight: 0.059,
      shippingCost: 38043
    },
    {
      productName: 'Kraft Pillow Box',
      category: 'kraft' as ProductCategory,
      moq: 10,
      url: 'https://custompackagingpro.com/product/custom-kraft-pillow-soap-boxes',
      length: 4, width: 3, height: 1.5,
      materialSpec: { gsm: 18, kraft: 400, cardboard: 300, corrugated: 300 },
      weightOf100Units: 13650,
      materialCostOf100Units: 0.88,
      scanningCost: { outside: 200, inside: 200, bothside: 200, blank: 0 },
      platesCost: { outside: 1200, inside: 1200, bothside: 1200, blank: 0 },
      printingCost: { outside: 2400, inside: 2400, bothside: 2400, blank: 0 },
      laminationCost: { outside: 5000, inside: 5000, bothside: 5000, blank: 0 },
      dieMakingCost: { outside: 3500, inside: 3500, bothside: 3500, blank: 0 },
      dieCuttingCost: { outside: 6000, inside: 6000, bothside: 6000, blank: 0 },
      pastingCost: { outside: 8000, inside: 8000, bothside: 8000, blank: 0 },
      dieMakingSpec: { minCost: 1000, calculation: 'area', areaThreshold: 100 },
      twoPieceBoxMultiplier: 1,
      vendorPercentage: 25,
      bothSidePrintingMultiplier: 1.5,
      shippingWeight: 0.008,
      shippingCost: 9103
    }
  ];

  // Cardboard Boxes (rows 58-86)
  const cardboardProducts = [
    {
      productName: 'Cardboard Display Box',
      category: 'cardboard' as ProductCategory,
      moq: 0,
      length: 12, width: 4, height: 5,
      materialSpec: { gsm: 0, kraft: 0, cardboard: 300, corrugated: 0 },
      weightOf100Units: 241200,
      materialCostOf100Units: 15.56,
      scanningCost: { outside: 200, inside: 200, bothside: 200, blank: 0 },
      platesCost: { outside: 1200, inside: 1200, bothside: 1200, blank: 0 },
      printingCost: { outside: 2400, inside: 2400, bothside: 2400, blank: 0 },
      laminationCost: { outside: 5000, inside: 5000, bothside: 5000, blank: 0 },
      dieMakingCost: { outside: 3500, inside: 3500, bothside: 3500, blank: 0 },
      dieCuttingCost: { outside: 6000, inside: 6000, bothside: 6000, blank: 0 },
      pastingCost: { outside: 8000, inside: 8000, bothside: 8000, blank: 0 },
      dieMakingSpec: { minCost: 1000, calculation: 'area', areaThreshold: 100 },
      twoPieceBoxMultiplier: 1,
      vendorPercentage: 50,
      bothSidePrintingMultiplier: 1.5,
      shippingWeight: 0.14,
      shippingCost: 47078
    },
    {
      productName: 'Cardboard Tuck End Box',
      category: 'cardboard' as ProductCategory,
      moq: 0,
      length: 3, width: 2, height: 5,
      materialSpec: { gsm: 0, kraft: 0, cardboard: 300, corrugated: 0 },
      weightOf100Units: 36225,
      materialCostOf100Units: 2.34,
      scanningCost: { outside: 200, inside: 200, bothside: 200, blank: 0 },
      platesCost: { outside: 1200, inside: 1200, bothside: 1200, blank: 0 },
      printingCost: { outside: 2400, inside: 2400, bothside: 2400, blank: 0 },
      laminationCost: { outside: 5000, inside: 5000, bothside: 5000, blank: 0 },
      dieMakingCost: { outside: 3500, inside: 3500, bothside: 3500, blank: 0 },
      dieCuttingCost: { outside: 6000, inside: 6000, bothside: 6000, blank: 0 },
      pastingCost: { outside: 8000, inside: 8000, bothside: 8000, blank: 0 },
      dieMakingSpec: { minCost: 1000, calculation: 'area', areaThreshold: 100 },
      twoPieceBoxMultiplier: 1,
      vendorPercentage: 50,
      bothSidePrintingMultiplier: 1.5,
      shippingWeight: 0.021,
      shippingCost: 14512
    }
  ];

  // Corrugated Boxes (rows 89-101)
  const corrugatedProducts = [
    {
      productName: 'Corrugated Mailer Box',
      category: 'corrugated' as ProductCategory,
      moq: 0,
      length: 6, width: 11, height: 2.5,
      materialSpec: { gsm: 0, kraft: 0, cardboard: 0, corrugated: 300 },
      weightOf100Units: 379750,
      materialCostOf100Units: 24.5,
      scanningCost: { outside: 200, inside: 200, bothside: 200, blank: 0 },
      platesCost: { outside: 1200, inside: 1200, bothside: 1200, blank: 0 },
      printingCost: { outside: 2400, inside: 2400, bothside: 2400, blank: 0 },
      laminationCost: { outside: 5000, inside: 5000, bothside: 5000, blank: 0 },
      dieMakingCost: { outside: 3500, inside: 3500, bothside: 3500, blank: 0 },
      dieCuttingCost: { outside: 6000, inside: 6000, bothside: 6000, blank: 0 },
      pastingCost: { outside: 8000, inside: 8000, bothside: 8000, blank: 0 },
      dieMakingSpec: { minCost: 1000, calculation: 'area', areaThreshold: 100 },
      twoPieceBoxMultiplier: 1,
      vendorPercentage: 50,
      bothSidePrintingMultiplier: 1.5,
      shippingWeight: 0.22,
      shippingCost: 68349
    }
  ];

  // Combine all products
  const allProducts = [...kraftProducts, ...cardboardProducts, ...corrugatedProducts];
  
  // Convert to CSVProductPricing format
  return allProducts.map((product, index) => ({
    _id: undefined,
    productName: product.productName,
    category: product.category,
    subcategory: undefined,
    moq: product.moq,
    url: product.url || undefined,
    length: product.length,
    width: product.width,
    height: product.height,
    materialSpec: product.materialSpec,
    weightOf100Units: product.weightOf100Units,
    materialCostOf100Units: product.materialCostOf100Units,
    scanningCost: product.scanningCost,
    platesCost: product.platesCost,
    printingCost: product.printingCost,
    laminationCost: product.laminationCost,
    dieMakingCost: product.dieMakingCost,
    dieCuttingCost: product.dieCuttingCost,
    pastingCost: product.pastingCost,
    dieMakingSpec: product.dieMakingSpec,
    twoPieceBoxMultiplier: product.twoPieceBoxMultiplier,
    vendorPercentage: product.vendorPercentage,
    bothSidePrintingMultiplier: product.bothSidePrintingMultiplier,
    shippingWeight: product.shippingWeight,
    shippingCost: product.shippingCost,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }));
}

async function seedCSVPricingData() {
  const client = new MongoClient('mongodb+srv://rankorbit1026_db_user:yokyklGhNigs1oNi@cluster0.pjhksks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    tls: true,
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true
  });

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db('BoxyPack');
    const collection = db.collection('csvProductPricing');
    
    // Clear existing data
    await collection.deleteMany({});
    console.log('🗑️ Cleared existing CSV pricing data');
    
    // Parse and insert new data
    const products = parseCSVPricingData();
    await collection.insertMany(products);
    console.log(`✅ Seeded ${products.length} CSV pricing products`);
    
    // Log sample products
    console.log('\n📋 Sample products:');
    products.slice(0, 3).forEach(product => {
      console.log(`- ${product.productName} (${product.category})`);
    });
    
  } catch (error) {
    console.error('❌ Error seeding CSV pricing data:', error);
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the seeding
if (require.main === module) {
  seedCSVPricingData();
}

export { seedCSVPricingData, parseCSVPricingData };
