import { NextResponse } from 'next/server';
import { getProductsCollection } from '@/lib/mongodb';
import { productData } from '@/app/data/productPagesData';
import { productByMaterialData } from '@/app/data/productByMaterialData';
import { mylarBoxesData } from '@/app/data/mylarBoxesData';
import { shoppingBagsData } from '@/app/data/shoppingBagsData';
import { otherData } from '@/app/data/otherData';

type ProductDataRecord = typeof productData;
type SeedableProduct = ProductDataRecord[keyof ProductDataRecord] & {
  specifications?: Array<{ label: string; value: string }>;
  sizes?: Array<{ name: string; dimensions: string; price?: string }>;
  galleryImages?: string[];
  customizationOptions?: string[];
};

// Helper function to generate product data from category/subcategory structure
const generateProductFromCategory = (category: {
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
        title: 'Premium Quality',
        description: `High-grade materials ensure superior protection for your ${name.toLowerCase()}`
      },
      {
        icon: 'palette',
        title: 'Custom Design',
        description: 'Full color printing and custom branding options available'
      },
      {
        icon: 'truck',
        title: 'Fast Delivery',
        description: 'Quick turnaround times to meet your business needs'
      },
      {
        icon: 'check',
        title: 'Eco-Friendly',
        description: 'Made from recyclable materials, sustainable packaging solution'
      }
    ],
    specifications: [
      { label: 'Material', value: 'Premium Cardboard' },
      { label: 'Thickness', value: '200-500 GSM' },
      { label: 'Printing', value: 'Full Color CMYK' },
      { label: 'Finish', value: 'Matte/Glossy Available' },
      { label: 'Assembly', value: 'Easy Assembly' },
      { label: 'Customization', value: 'Full Brand Integration' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6×4×2 inches', price: '$0.45' },
      { name: 'Medium', dimensions: '10×7×3 inches', price: '$0.65' },
      { name: 'Large', dimensions: '12×9×4 inches', price: '$0.85' },
      { name: 'X-Large', dimensions: '15×11×5 inches', price: '$1.15' }
    ],
    galleryImages: [
      category.image || '/img/products-box-img.png',
      '/img/product-box-2.jpg',
      '/img/Product-Packaging-Boxes.webp',
      '/img/shipping-box-2.webp'
    ],
    customizationOptions: [
      'Full color printing',
      'Custom logo placement',
      'Multiple finish options',
      'Various sizes available'
    ],
    ctaTitle: 'Ready to Get Started?',
    ctaDescription: `Get a custom quote for your ${name.toLowerCase()} today. Our team is ready to help you create the perfect packaging solution.`,
    category: subcategory ? category.slug : null,
    subcategory: subcategory ? subcategory.slug : null,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};

// POST /api/seed-products-only - Seed the database with ONLY dropdown menu products
export async function POST() {
  try {
    console.log('📦 Starting PRODUCTS COLLECTION seeding process...');
    console.log('🎯 This will seed ONLY the products dropdown menu items');
    const collection = await getProductsCollection();
    
    const allProducts: Array<{
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
      category: string | null;
      subcategory: string | null;
      createdAt: Date;
      updatedAt: Date;
    }> = [];
    
    // 1. Seed main productData (8 products)
    console.log('📦 Processing main product data...');
    const mainProducts = Object.entries(productData).map(([slug, product]) => {
      const seedable = product as SeedableProduct;

      const safeString = (value: unknown, fallback: string) =>
        typeof value === 'string' && value.trim().length > 0 ? value : fallback;

      const safeArray = <T>(value: unknown): T[] =>
        Array.isArray(value) ? (value as T[]) : [];

      const { cta } = seedable;

      const name = safeString(seedable.name, slug);
      const description = safeString(seedable.description, '');
      const heroImage = safeString(seedable.heroImage, 'products-box-img_x8vu4b');
      const modelPath = safeString(seedable.modelPath, 'Tuck_End_Auto_Bottom1_ttdsdf');
      const features = safeArray<{ icon: string; title: string; description: string }>(seedable.features);
      const specifications = safeArray<{ label: string; value: string }>(seedable.specifications);
      const sizes = safeArray<{ name: string; dimensions: string; price?: string }>(seedable.sizes).map(size => ({
        name: safeString(size.name, 'Standard'),
        dimensions: safeString(size.dimensions, 'Custom'),
        price: safeString(size.price, '')
      }));
      const galleryImages = safeArray<string>(seedable.galleryImages);
      const customizationOptions = safeArray<string>(seedable.customizationOptions);
      const ctaTitle = safeString(cta?.title, 'Ready to Get Started?');
      const ctaDescription = safeString(
        cta?.description,
        `Get a custom quote for your ${name.toLowerCase()} today. Our team is ready to help you create the perfect packaging solution.`
      );

      return {
        slug,
        name,
        description,
        heroImage,
        modelPath,
        features,
        specifications,
        sizes,
        galleryImages,
        customizationOptions,
        ctaTitle,
        ctaDescription,
        category: 'main',
        subcategory: null,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });
    allProducts.push(...mainProducts);
    console.log(`   ✅ Added ${mainProducts.length} main products`);
    
    // 2. Seed productByMaterialData (categories + subcategories)
    console.log('📦 Processing material-based products...');
    let materialCount = 0;
    productByMaterialData.forEach(category => {
      // Add category as a product
      const categoryProduct = generateProductFromCategory(category);
      categoryProduct.category = 'material';
      categoryProduct.subcategory = null;
      allProducts.push(categoryProduct);
      materialCount++;
      
      // Add each subcategory as a product
      category.subcategories.forEach(subcategory => {
        const subcategoryProduct = generateProductFromCategory(category, subcategory);
        subcategoryProduct.category = 'material';
        subcategoryProduct.subcategory = category.slug;
        allProducts.push(subcategoryProduct);
        materialCount++;
      });
    });
    console.log(`   ✅ Added ${materialCount} material-based products`);
    
    // 3. Seed mylarBoxesData
    console.log('📦 Processing mylar boxes...');
    let mylarCount = 0;
    // Add main category
    const mylarCategoryProduct = generateProductFromCategory(mylarBoxesData);
    mylarCategoryProduct.category = 'mylar';
    mylarCategoryProduct.subcategory = null;
    allProducts.push(mylarCategoryProduct);
    mylarCount++;
    
    // Add subcategories
    mylarBoxesData.subcategories.forEach(subcategory => {
      const subcategoryProduct = generateProductFromCategory(mylarBoxesData, subcategory);
      subcategoryProduct.category = 'mylar';
      subcategoryProduct.subcategory = mylarBoxesData.slug;
      allProducts.push(subcategoryProduct);
      mylarCount++;
    });
    console.log(`   ✅ Added ${mylarCount} mylar box products`);
    
    // 4. Seed shoppingBagsData
    console.log('📦 Processing shopping bags...');
    let bagCount = 0;
    // Add main category
    const bagCategoryProduct = generateProductFromCategory(shoppingBagsData);
    bagCategoryProduct.category = 'shopping-bags';
    bagCategoryProduct.subcategory = null;
    allProducts.push(bagCategoryProduct);
    bagCount++;
    
    // Add subcategories
    shoppingBagsData.subcategories.forEach(subcategory => {
      const subcategoryProduct = generateProductFromCategory(shoppingBagsData, subcategory);
      subcategoryProduct.category = 'shopping-bags';
      subcategoryProduct.subcategory = shoppingBagsData.slug;
      allProducts.push(subcategoryProduct);
      bagCount++;
    });
    console.log(`   ✅ Added ${bagCount} shopping bag products`);
    
    // 5. Seed otherData
    console.log('📦 Processing other products...');
    let otherCount = 0;
    // Add main category
    const otherCategoryProduct = generateProductFromCategory(otherData);
    otherCategoryProduct.category = 'other';
    otherCategoryProduct.subcategory = null;
    allProducts.push(otherCategoryProduct);
    otherCount++;
    
    // Add subcategories
    otherData.subcategories.forEach(subcategory => {
      const subcategoryProduct = generateProductFromCategory(otherData, subcategory);
      subcategoryProduct.category = 'other';
      subcategoryProduct.subcategory = otherData.slug;
      allProducts.push(subcategoryProduct);
      otherCount++;
    });
    console.log(`   ✅ Added ${otherCount} other products`);
    
    console.log(`\n📊 Total products prepared: ${allProducts.length}`);
    console.log('📋 Product breakdown:');
    console.log(`   - Main products: ${mainProducts.length}`);
    console.log(`   - Material products: ${materialCount}`);
    console.log(`   - Mylar products: ${mylarCount}`);
    console.log(`   - Shopping bag products: ${bagCount}`);
    console.log(`   - Other products: ${otherCount}`);
    
    // Clear existing products
    console.log('\n🗑️ Clearing existing products...');
    const deleteResult = await collection.deleteMany({});
    console.log(`🗑️ Deleted ${deleteResult.deletedCount} existing products`);
    
    // Insert all products
    console.log('\n📥 Inserting all products into database...');
    const result = await collection.insertMany(allProducts);
    
    console.log(`\n✅ Successfully seeded ${result.insertedCount} products into PRODUCTS collection!`);
    console.log('🎉 Products collection seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.insertedCount} products into Products collection`,
      count: result.insertedCount,
      breakdown: {
        main: mainProducts.length,
        material: materialCount,
        mylar: mylarCount,
        shoppingBags: bagCount,
        other: otherCount,
        total: result.insertedCount
      }
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
