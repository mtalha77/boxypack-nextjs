import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { productByIndustryData } from '@/app/data/productByIndustryData';

// Helper function to generate industry product data from category/subcategory structure
const generateIndustryProductFromCategory = (category: {
  name: string;
  slug: string;
  description: string;
  image: string;
  modelPath: string;
  subcategories: Array<{name: string; slug: string; description?: string}>;
}, subcategory: {name: string; slug: string; description?: string} | null = null) => {
  const name = subcategory ? subcategory.name : category.name;
  const slug = subcategory ? subcategory.slug : category.slug;
  const description = subcategory?.description || category.description || `Premium ${name.toLowerCase()} packaging solutions designed to protect and showcase your products.`;

  return {
    slug,
    name,
    description,
    heroImage: category.image || '/img/products-box-img.png',
    modelPath: category.modelPath || 'Tuck_End_Auto_Bottom1_ttdsdf',
    features: [
      {
        icon: 'shield',
        title: 'Industry Specific',
        description: `Specialized packaging designed for your ${name.toLowerCase()} industry needs`
      },
      {
        icon: 'palette',
        title: 'Custom Design',
        description: 'Tailored designs that meet industry standards and requirements'
      },
      {
        icon: 'truck',
        title: 'Professional Quality',
        description: 'High-quality materials and construction for professional use'
      },
      {
        icon: 'check',
        title: 'Compliance Ready',
        description: 'Designed to meet industry regulations and standards'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Industry-Grade Cardboard' },
      { label: 'Thickness', value: '300-500 GSM' },
      { label: 'Printing', value: 'High-Resolution CMYK' },
      { label: 'Finish', value: 'Matte/Glossy Available' },
      { label: 'Assembly', value: 'Professional Assembly' },
      { label: 'Customization', value: 'Industry-Specific Branding' }
    ],
    sizes: [
      { name: 'Small', dimensions: '4×3×2 inches', price: '$0.55' },
      { name: 'Medium', dimensions: '8×6×3 inches', price: '$0.75' },
      { name: 'Large', dimensions: '12×9×4 inches', price: '$0.95' },
      { name: 'X-Large', dimensions: '16×12×6 inches', price: '$1.35' }
    ],
    galleryImages: [
      category.image || '/img/products-box-img.png',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Industry-specific design',
      'Custom branding',
      'Compliance features',
      'Professional finishes'
    ],
    ctaTitle: 'Ready for Industry-Specific Packaging?',
    ctaDescription: `Get a custom quote for your ${name.toLowerCase()} today. Let us help you create packaging that meets your industry's specific requirements.`,
    industry: subcategory ? category.slug : null,
    industrySubcategory: subcategory ? subcategory.slug : null,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};

// POST /api/seed-industries-only - Seed the database with ONLY industry products
export async function POST() {
  try {
    console.log('🏭 Starting INDUSTRIES COLLECTION seeding process...');
    console.log('🎯 This will seed ONLY the industries dropdown menu items');
    const db = await getDatabase();
    const industriesCollection = db.collection('Industries');
    
    const allIndustryProducts: Array<{
      slug: string;
      name: string;
      description: string;
      heroImage: string;
      modelPath: string;
      features: Array<{icon: string; title: string; description: string}>;
      specifications: Array<{label: string; value: string}>;
      sizes: Array<{name: string; dimensions: string; price: string}>;
      galleryImages: string[];
      customizationOptions: string[];
      ctaTitle: string;
      ctaDescription: string;
      industry: string | null;
      industrySubcategory: string | null;
      createdAt: Date;
      updatedAt: Date;
    }> = [];
    
    // Process productByIndustryData (categories + subcategories)
    console.log('🏭 Processing industry-based products...');
    let industryCount = 0;
    productByIndustryData.forEach(category => {
      // Add category as a product
      const categoryProduct = generateIndustryProductFromCategory(category);
      categoryProduct.industry = null;
      categoryProduct.industrySubcategory = null;
      allIndustryProducts.push(categoryProduct);
      industryCount++;
      
      // Add each subcategory as a product
      category.subcategories.forEach(subcategory => {
        const subcategoryProduct = generateIndustryProductFromCategory(category, subcategory);
        subcategoryProduct.industry = category.slug;
        subcategoryProduct.industrySubcategory = subcategory.slug;
        allIndustryProducts.push(subcategoryProduct);
        industryCount++;
      });
    });
    console.log(`   ✅ Added ${industryCount} industry-based products`);
    
    console.log(`\n📊 Total industry products prepared: ${allIndustryProducts.length}`);
    console.log('📋 Industry breakdown:');
    console.log(`   - Industry categories: ${productByIndustryData.length}`);
    console.log(`   - Total industry products: ${industryCount}`);
    
    // Clear existing industries
    console.log('\n🗑️ Clearing existing industries...');
    const deleteResult = await industriesCollection.deleteMany({});
    console.log(`🗑️ Deleted ${deleteResult.deletedCount} existing industries`);
    
    // Insert all industry products
    console.log('\n📥 Inserting all industry products into database...');
    const result = await industriesCollection.insertMany(allIndustryProducts);
    
    console.log(`\n✅ Successfully seeded ${result.insertedCount} industry products into INDUSTRIES collection!`);
    console.log('🎉 Industries collection seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.insertedCount} industry products into Industries collection`,
      count: result.insertedCount,
      breakdown: {
        categories: productByIndustryData.length,
        total: result.insertedCount
      }
    });
  } catch (error) {
    console.error('❌ Error seeding industries:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to seed industries',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
