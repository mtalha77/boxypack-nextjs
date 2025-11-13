import { NextRequest, NextResponse } from 'next/server';
import { getProductsCollection } from '@/lib/mongodb';
import { productData } from '@/app/data/productPagesData';

// POST /api/seed-products - Seed the database with product data
export async function POST(request: NextRequest) {
  try {
    console.log('🌱 Starting database seeding process...');
    const collection = await getProductsCollection();
    
    // Convert the productData object to an array of products
    const products = Object.entries(productData).map(([slug, product]) => {
      const safeString = (value: unknown, fallback: string) =>
        typeof value === 'string' && value.trim().length > 0 ? value : fallback;

      const safeArray = <T>(value: unknown): T[] =>
        Array.isArray(value) ? (value as T[]) : [];

      const {
        name,
        description,
        heroImage,
        modelPath,
        features,
        keyFeatures,
        customization,
        overview,
        whyChooseUs,
        faq,
        cta,
        slug: _ignoredSlug
      } = product as Record<string, unknown>;

      return {
        slug,
        name: safeString(name, slug),
        description: safeString(description, ''),
        heroImage: safeString(heroImage, 'products-box-img_x8vu4b'),
        modelPath: safeString(modelPath, 'Tuck_End_Auto_Bottom1_ttdsdf'),
        features: safeArray<{ icon: string; title: string; description: string }>(features),
        keyFeatures: safeArray<string>(keyFeatures),
        customization,
        overview,
        whyChooseUs,
        faq,
        cta,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    
    console.log(`📦 Preparing to seed ${products.length} products...`);
    console.log('📋 Products to seed:', products.map(p => p.name).join(', '));
    
    // Clear existing products (optional - remove this if you want to keep existing data)
    console.log('🗑️ Clearing existing products...');
    const deleteResult = await collection.deleteMany({});
    console.log(`🗑️ Deleted ${deleteResult.deletedCount} existing products`);
    
    // Insert all products
    console.log('📥 Inserting products into database...');
    const result = await collection.insertMany(products);
    
    console.log(`✅ Successfully seeded ${result.insertedCount} products into database!`);
    console.log('🎉 Database seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.insertedCount} products`,
      count: result.insertedCount
    });
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to seed products',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
