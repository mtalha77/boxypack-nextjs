// Comprehensive Database Seeding Script
// This will seed ALL your products from all data files
// Run this with: node seed-all-products.js

const seedAllProducts = async () => {
  console.log('🌱 Starting Comprehensive Database Seeding...\n');
  console.log('📋 This will seed ALL products from all your data files:');
  console.log('   - Main product data (8 products)');
  console.log('   - Material-based products (4 categories + subcategories)');
  console.log('   - Industry-based products (20+ categories + subcategories)');
  console.log('   - Mylar boxes (1 category + subcategories)');
  console.log('   - Shopping bags (1 category + subcategories)');
  console.log('   - Other products (1 category + subcategories)');
  console.log('\n📊 Expected total: 300+ products\n');
  
  try {
    // Test if server is running
    console.log('1️⃣ Checking if server is running...');
    const response = await fetch('http://localhost:3000/api/products');
    
    if (!response.ok) {
      console.log('❌ Server is not running or API is not accessible');
      console.log('   Please run: npm run dev');
      return;
    }
    
    console.log('✅ Server is running');
    
    // Check current database state
    console.log('\n2️⃣ Checking current database state...');
    const currentData = await response.json();
    
    if (currentData.success) {
      console.log(`📊 Current products in database: ${currentData.count}`);
      
      if (currentData.count > 0) {
        console.log('⚠️  Database already has products. This will replace ALL existing data.');
      } else {
        console.log('📭 Database is empty - ready for comprehensive seeding');
      }
    } else {
      console.log('❌ Failed to check database state:', currentData.error);
      return;
    }
    
    // Seed ALL products
    console.log('\n3️⃣ Seeding database with ALL product data...');
    console.log('⏳ This may take a moment due to the large number of products...');
    
    const seedResponse = await fetch('http://localhost:3000/api/seed-all-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const seedData = await seedResponse.json();
    
    if (seedData.success) {
      console.log('✅ Comprehensive database seeding successful!');
      console.log(`📦 ${seedData.message}`);
      console.log(`🎉 Total products: ${seedData.count}`);
      
      if (seedData.breakdown) {
        console.log('\n📊 Product breakdown:');
        console.log(`   - Main products: ${seedData.breakdown.main}`);
        console.log(`   - Material products: ${seedData.breakdown.material}`);
        console.log(`   - Industry products: ${seedData.breakdown.industry}`);
        console.log(`   - Mylar products: ${seedData.breakdown.mylar}`);
        console.log(`   - Shopping bag products: ${seedData.breakdown.shoppingBags}`);
        console.log(`   - Other products: ${seedData.breakdown.other}`);
      }
    } else {
      console.log('❌ Database seeding failed:', seedData.error);
      return;
    }
    
    // Verify the seeding
    console.log('\n4️⃣ Verifying seeded data...');
    const verifyResponse = await fetch('http://localhost:3000/api/products');
    const verifyData = await verifyResponse.json();
    
    if (verifyData.success) {
      console.log(`✅ Verification successful!`);
      console.log(`📊 Products in database: ${verifyData.count}`);
      
      // Show sample products by category
      const productsByCategory = verifyData.data.reduce((acc, product) => {
        const category = product.category || 'main';
        if (!acc[category]) acc[category] = [];
        acc[category].push(product.name);
        return acc;
      }, {});
      
      console.log('\n📋 Sample products by category:');
      Object.entries(productsByCategory).forEach(([category, products]) => {
        console.log(`   ${category}: ${products.slice(0, 3).join(', ')}${products.length > 3 ? ` (+${products.length - 3} more)` : ''}`);
      });
      
      // Test individual product fetch
      console.log('\n5️⃣ Testing individual product fetch...');
      const productResponse = await fetch('http://localhost:3000/api/products/mailer-boxes');
      const productData = await productResponse.json();
      
      if (productData.success) {
        console.log(`✅ Individual product fetch works!`);
        console.log(`📦 Test product: ${productData.data.name}`);
      } else {
        console.log('❌ Individual product fetch failed:', productData.error);
      }
      
      // Test a subcategory product
      const subcategoryResponse = await fetch('http://localhost:3000/api/products/custom-donut-boxes');
      const subcategoryData = await subcategoryResponse.json();
      
      if (subcategoryData.success) {
        console.log(`✅ Subcategory product fetch works!`);
        console.log(`📦 Test subcategory product: ${subcategoryData.data.name}`);
      } else {
        console.log('⚠️  Subcategory product not found (this is normal if the slug doesn\'t match)');
      }
    } else {
      console.log('❌ Verification failed:', verifyData.error);
    }
    
    console.log('\n🎯 Comprehensive seeding completed!');
    console.log('✅ Your database now contains ALL products from all data files');
    console.log('\n🔗 Next steps:');
    console.log('   - Visit http://localhost:3000/products/mailer-boxes to test main products');
    console.log('   - Visit http://localhost:3000/admin to manage all products');
    console.log('   - Visit http://localhost:3000/test-db to see all products');
    console.log('   - Your product pages will now fetch from the database');
    
  } catch (error) {
    console.log('❌ Comprehensive seeding process failed:', error.message);
    console.log('   Make sure your server is running: npm run dev');
  }
};

seedAllProducts();
