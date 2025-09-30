import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { productByIndustryData } from '@/app/data/productByIndustryData';

// Helper function to generate industry product data
const generateIndustryProduct = (industry: {
  name: string;
  slug: string;
  description: string;
  image: string;
  modelPath: string;
  subcategories: Array<{name: string; slug: string; description?: string}>;
}, subcategory: {name: string; slug: string; description?: string} | null = null) => {
  const name = subcategory ? subcategory.name : industry.name;
  const slug = subcategory ? subcategory.slug : industry.slug;
  const description = subcategory?.description || industry.description || `Premium ${name.toLowerCase()} packaging solutions designed to protect and showcase your products.`;

  return {
    slug,
    name,
    description,
    heroImage: industry.image || '/img/products-box-img.png',
    modelPath: industry.modelPath || '/models/Tuck End Auto Bottom1.glb',
    features: [
      {
        icon: 'shield',
        title: 'Industry Specific',
        description: `Specialized packaging designed for your ${name.toLowerCase()} needs`
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
      industry.image || '/img/products-box-img.png',
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
    industry: subcategory ? industry.slug : null,
    industrySubcategory: subcategory ? subcategory.slug : null,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};

// POST /api/seed-industries - Seed the database with industry data
export async function POST() {
  try {
    console.log('🏭 Starting industry data seeding process...');
    const db = await getDatabase();
    const industriesCollection = db.collection('Industries');
    
    const allIndustries: Array<{
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
    
    // Process each industry category and its subcategories
    console.log('📦 Processing industry-based products...');
    productByIndustryData.forEach(industry => {
      // Add main industry category as a product
      const industryProduct = generateIndustryProduct(industry);
      industryProduct.industry = null; // Main category has no parent
      industryProduct.industrySubcategory = null;
      allIndustries.push(industryProduct);
      
      // Add each subcategory as a product
      industry.subcategories.forEach(subcategory => {
        const subcategoryProduct = generateIndustryProduct(industry, subcategory);
        subcategoryProduct.industry = industry.slug; // Parent industry
        subcategoryProduct.industrySubcategory = subcategory.slug;
        allIndustries.push(subcategoryProduct);
      });
    });
    
    console.log(`📦 Prepared to seed ${allIndustries.length} industry products...`);
    console.log(`🏭 Industries: ${productByIndustryData.map(i => i.name).join(', ')}`);
    
    // Clear existing industries
    console.log('🗑️ Clearing existing industries...');
    const deleteResult = await industriesCollection.deleteMany({});
    console.log(`🗑️ Deleted ${deleteResult.deletedCount} existing industries`);
    
    // Insert all industries
    console.log('📥 Inserting industries into database...');
    const result = await industriesCollection.insertMany(allIndustries);
    
    console.log(`✅ Successfully seeded ${result.insertedCount} industry products into database!`);
    console.log('🎉 Industry seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.insertedCount} industry products`,
      count: result.insertedCount,
      breakdown: {
        industries: productByIndustryData.length,
        subcategories: allIndustries.length - productByIndustryData.length,
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
