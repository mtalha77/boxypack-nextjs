import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request: NextRequest) {
  const client = new MongoClient('mongodb+srv://rankorbit1026_db_user:yokyklGhNigs1oNi@cluster0.pjhksks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    tls: true,
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true
  });

  try {
    console.log('🌱 Starting pricing data seeding...');
    
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db('BoxyPack');

    // Seed Materials
    await seedMaterials(db);
    
    // Seed Products
    await seedProducts(db);
    
    // Seed Pricing Rules
    await seedPricingRules(db);
    
    // Seed Quantity Tiers
    await seedQuantityTiers(db);
    
    // Seed Size Pricing
    await seedSizePricing(db);
    
    // Seed Location Pricing
    await seedLocationPricing(db);
    
    console.log('✅ Pricing data seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully!'
    });
  } catch (error) {
    console.error('❌ Error seeding pricing data:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } finally {
    await client.close();
  }
}

async function seedMaterials(db: any) {
  console.log('📦 Seeding materials...');
  
  const materialsCollection = db.collection('materials');
  
  const materials = [
    // Cardboard Materials
    {
      name: 'Standard Cardboard',
      type: 'cardboard',
      baseCostPerSqFt: 0.15,
      thicknessFactor: 1.0,
      qualityMultiplier: 1.0,
      isPremium: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Heavy Duty Cardboard',
      type: 'cardboard',
      baseCostPerSqFt: 0.25,
      thicknessFactor: 1.5,
      qualityMultiplier: 1.2,
      isPremium: true,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Kraft Materials
    {
      name: 'Brown Kraft Paper',
      type: 'kraft',
      baseCostPerSqFt: 0.12,
      thicknessFactor: 0.8,
      qualityMultiplier: 1.0,
      isPremium: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'White Kraft Paper',
      type: 'kraft',
      baseCostPerSqFt: 0.18,
      thicknessFactor: 0.8,
      qualityMultiplier: 1.1,
      isPremium: true,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Corrugated Materials
    {
      name: 'Single Wall Corrugated',
      type: 'corrugated',
      baseCostPerSqFt: 0.20,
      thicknessFactor: 1.2,
      qualityMultiplier: 1.0,
      isPremium: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Double Wall Corrugated',
      type: 'corrugated',
      baseCostPerSqFt: 0.35,
      thicknessFactor: 1.8,
      qualityMultiplier: 1.3,
      isPremium: true,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Rigid Materials
    {
      name: 'Rigid Board',
      type: 'rigid',
      baseCostPerSqFt: 0.45,
      thicknessFactor: 2.0,
      qualityMultiplier: 1.5,
      isPremium: true,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Mylar Materials
    {
      name: 'Mylar Bag',
      type: 'mylar',
      baseCostPerSqFt: 0.08,
      thicknessFactor: 0.5,
      qualityMultiplier: 1.0,
      isPremium: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  await materialsCollection.insertMany(materials);
  console.log(`✅ Seeded ${materials.length} materials`);
}

async function seedProducts(db: any) {
  console.log('📦 Seeding products...');
  
  const productsCollection = db.collection('products');
  
  const products = [
    {
      name: 'Mailer Box',
      category: 'shipping',
      subcategory: 'mailer',
      basePrice: 2.50,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        minDimensions: { length: 3, width: 2, height: 1, unit: 'in' },
        maxDimensions: { length: 12, width: 9, height: 6, unit: 'in' },
        availableMaterials: ['Standard Cardboard', 'Heavy Duty Cardboard', 'Single Wall Corrugated'],
        availableFinishing: ['matte', 'glossy', 'satin'],
        availablePrinting: ['single_color', 'multi_color', 'full_color']
      }
    },
    {
      name: 'Rigid Box',
      category: 'luxury',
      subcategory: 'rigid',
      basePrice: 8.00,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        minDimensions: { length: 4, width: 3, height: 2, unit: 'in' },
        maxDimensions: { length: 16, width: 12, height: 8, unit: 'in' },
        availableMaterials: ['Rigid Board', 'Heavy Duty Cardboard'],
        availableFinishing: ['matte', 'glossy', 'satin'],
        availablePrinting: ['single_color', 'multi_color', 'full_color']
      }
    },
    {
      name: 'Kraft Box',
      category: 'eco-friendly',
      subcategory: 'kraft',
      basePrice: 1.80,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        minDimensions: { length: 2, width: 2, height: 1, unit: 'in' },
        maxDimensions: { length: 10, width: 8, height: 4, unit: 'in' },
        availableMaterials: ['Brown Kraft Paper', 'White Kraft Paper'],
        availableFinishing: ['matte', 'satin'],
        availablePrinting: ['single_color', 'multi_color']
      }
    },
    {
      name: 'Shipping Box',
      category: 'shipping',
      subcategory: 'standard',
      basePrice: 1.20,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        minDimensions: { length: 4, width: 3, height: 2, unit: 'in' },
        maxDimensions: { length: 24, width: 18, height: 12, unit: 'in' },
        availableMaterials: ['Single Wall Corrugated', 'Double Wall Corrugated'],
        availableFinishing: ['matte'],
        availablePrinting: ['single_color', 'multi_color']
      }
    },
    {
      name: 'Mylar Bag',
      category: 'packaging',
      subcategory: 'bag',
      basePrice: 0.30,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      specifications: {
        minDimensions: { length: 2, width: 1, height: 0.1, unit: 'in' },
        maxDimensions: { length: 8, width: 6, height: 0.5, unit: 'in' },
        availableMaterials: ['Mylar Bag'],
        availableFinishing: ['matte'],
        availablePrinting: ['single_color']
      }
    }
  ];

  await productsCollection.insertMany(products);
  console.log(`✅ Seeded ${products.length} products`);
}

async function seedPricingRules(db: any) {
  console.log('📋 Seeding pricing rules...');
  
  const rulesCollection = db.collection('pricingRules');
  
  const rules = [
    // Base pricing rules
    {
      category: 'base',
      conditionType: 'exact',
      conditionData: {},
      priceFormula: 'basePrice * quantity',
      baseValue: 1.0,
      multiplier: 1.0,
      isActive: true,
      priority: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Material pricing rules
    {
      category: 'material',
      conditionType: 'formula',
      conditionData: { formula: 'area * baseCostPerSqFt * thicknessFactor * qualityMultiplier' },
      priceFormula: 'area * materialCost * quantity',
      baseValue: 1.0,
      multiplier: 1.0,
      isActive: true,
      priority: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Size pricing rules
    {
      category: 'size',
      conditionType: 'range',
      conditionData: { minArea: 0, maxArea: 50 },
      priceFormula: 'area * 0.1',
      baseValue: 0.1,
      multiplier: 1.0,
      isActive: true,
      priority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'size',
      conditionType: 'range',
      conditionData: { minArea: 50, maxArea: 100 },
      priceFormula: 'area * 0.15',
      baseValue: 0.15,
      multiplier: 1.0,
      isActive: true,
      priority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'size',
      conditionType: 'range',
      conditionData: { minArea: 100, maxArea: 999999 },
      priceFormula: 'area * 0.2',
      baseValue: 0.2,
      multiplier: 1.0,
      isActive: true,
      priority: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Quantity discount rules
    {
      category: 'quantity',
      conditionType: 'range',
      conditionData: { minQuantity: 100, maxQuantity: 499 },
      priceFormula: 'totalPrice * 0.05',
      baseValue: 0.05,
      multiplier: -1, // Negative for discount
      isActive: true,
      priority: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'quantity',
      conditionType: 'range',
      conditionData: { minQuantity: 500, maxQuantity: 999 },
      priceFormula: 'totalPrice * 0.10',
      baseValue: 0.10,
      multiplier: -1,
      isActive: true,
      priority: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'quantity',
      conditionType: 'range',
      conditionData: { minQuantity: 1000, maxQuantity: 999999 },
      priceFormula: 'totalPrice * 0.15',
      baseValue: 0.15,
      multiplier: -1,
      isActive: true,
      priority: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
    // Rush order rules
    {
      category: 'customization',
      conditionType: 'exact',
      conditionData: { rushOrder: true },
      priceFormula: 'subtotal * 0.3',
      baseValue: 0.3,
      multiplier: 1.0,
      isActive: true,
      priority: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  await rulesCollection.insertMany(rules);
  console.log(`✅ Seeded ${rules.length} pricing rules`);
}

async function seedQuantityTiers(db: any) {
  console.log('📊 Seeding quantity tiers...');
  
  const quantityTiersCollection = db.collection('quantityTiers');
  
  // Get all products first
  const productsCollection = db.collection('products');
  const products = await productsCollection.find({}).toArray();
  
  const quantityTiers = [];
  
  for (const product of products) {
    const tiers = [
      { minQuantity: 1, maxQuantity: 99, discountPercentage: 0, pricePerUnit: product.basePrice },
      { minQuantity: 100, maxQuantity: 499, discountPercentage: 5, pricePerUnit: product.basePrice * 0.95 },
      { minQuantity: 500, maxQuantity: 999, discountPercentage: 10, pricePerUnit: product.basePrice * 0.90 },
      { minQuantity: 1000, maxQuantity: 4999, discountPercentage: 15, pricePerUnit: product.basePrice * 0.85 },
      { minQuantity: 5000, maxQuantity: 999999, discountPercentage: 20, pricePerUnit: product.basePrice * 0.80 }
    ];
    
    for (const tier of tiers) {
      quantityTiers.push({
        productId: product._id.toString(),
        minQuantity: tier.minQuantity,
        maxQuantity: tier.maxQuantity,
        discountPercentage: tier.discountPercentage,
        pricePerUnit: tier.pricePerUnit,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  await quantityTiersCollection.insertMany(quantityTiers);
  console.log(`✅ Seeded ${quantityTiers.length} quantity tiers`);
}

async function seedSizePricing(db: any) {
  console.log('📏 Seeding size pricing...');
  
  const sizePricingCollection = db.collection('sizePricing');
  
  // Get all products first
  const productsCollection = db.collection('products');
  const products = await productsCollection.find({}).toArray();
  
  const sizePricing = [];
  
  for (const product of products) {
    const sizeRules = [
      { minLength: 0, maxLength: 6, minWidth: 0, maxWidth: 6, minHeight: 0, maxHeight: 3, sizeMultiplier: 0.8, baseSurcharge: 0 },
      { minLength: 6, maxLength: 12, minWidth: 6, maxWidth: 12, minHeight: 3, maxHeight: 6, sizeMultiplier: 1.0, baseSurcharge: 0.5 },
      { minLength: 12, maxLength: 24, minWidth: 12, maxWidth: 24, minHeight: 6, maxHeight: 12, sizeMultiplier: 1.2, baseSurcharge: 1.0 },
      { minLength: 24, maxLength: 999, minWidth: 24, maxWidth: 999, minHeight: 12, maxHeight: 999, sizeMultiplier: 1.5, baseSurcharge: 2.0 }
    ];
    
    for (const rule of sizeRules) {
      sizePricing.push({
        productId: product._id.toString(),
        minLength: rule.minLength,
        maxLength: rule.maxLength,
        minWidth: rule.minWidth,
        maxWidth: rule.maxWidth,
        minHeight: rule.minHeight,
        maxHeight: rule.maxHeight,
        sizeMultiplier: rule.sizeMultiplier,
        baseSurcharge: rule.baseSurcharge,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }

  await sizePricingCollection.insertMany(sizePricing);
  console.log(`✅ Seeded ${sizePricing.length} size pricing rules`);
}

async function seedLocationPricing(db: any) {
  console.log('🌍 Seeding location pricing...');
  
  const locationPricingCollection = db.collection('locationPricing');
  
  const locations = [
    {
      location: 'United States',
      country: 'US',
      baseShippingCost: 5.00,
      weightMultiplier: 0.5,
      sizeMultiplier: 0.1,
      rushOrderMultiplier: 1.5,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      location: 'Canada',
      country: 'CA',
      baseShippingCost: 8.00,
      weightMultiplier: 0.7,
      sizeMultiplier: 0.15,
      rushOrderMultiplier: 1.8,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      location: 'United Kingdom',
      country: 'GB',
      baseShippingCost: 12.00,
      weightMultiplier: 1.0,
      sizeMultiplier: 0.2,
      rushOrderMultiplier: 2.0,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      location: 'Australia',
      country: 'AU',
      baseShippingCost: 15.00,
      weightMultiplier: 1.2,
      sizeMultiplier: 0.25,
      rushOrderMultiplier: 2.2,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  await locationPricingCollection.insertMany(locations);
  console.log(`✅ Seeded ${locations.length} location pricing rules`);
}
