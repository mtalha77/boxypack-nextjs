// Separate Collections Database Seeding Script
// This will seed Products and Industries collections separately with the correct data
// Run this with: node seed-separate-collections.js

const seedSeparateCollections = async () => {
  console.log('🎯 Starting Separate Collections Database Seeding...\n');
  console.log('📋 This will seed:');
  console.log('   1. Products Collection - ONLY dropdown menu products:');
  console.log('      - Main products (8 products)');
  console.log('      - Material products (4 categories + subcategories)');
  console.log('      - Mylar boxes (1 category + subcategories)');
  console.log('      - Shopping bags (1 category + subcategories)');
  console.log('      - Other products (1 category + subcategories)');
  console.log('   2. Industries Collection - ONLY industry dropdown products:');
  console.log('      - All industry categories + subcategories (21 categories + 200+ subcategories)');
  console.log('\n🎯 Total expected: ~100 products + ~200 industry products\n');
  
  try {
    // Test if server is running
    console.log('1️⃣ Checking if server is running...');
    const testResponse = await fetch('http://localhost:3000/api/products');
    
    if (!testResponse.ok) {
      console.log('❌ Server is not running or API is not accessible');
      console.log('   Please run: npm run dev');
      return;
    }
    
    console.log('✅ Server is running');
    
    // Step 1: Seed Products Collection (Dropdown Menu Products Only)
    console.log('\n📦 STEP 1: Seeding Products Collection (Dropdown Menu Products Only)...');
    const productsResponse = await fetch('http://localhost:3000/api/seed-products-only', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const productsData = await productsResponse.json();
    
    if (productsData.success) {
      console.log(`✅ Products collection seeded successfully!`);
      console.log(`📦 ${productsData.message}`);
      console.log(`📊 Products: ${productsData.count}`);
      
      if (productsData.breakdown) {
        console.log('📋 Products breakdown:');
        console.log(`   - Main products: ${productsData.breakdown.main}`);
        console.log(`   - Material products: ${productsData.breakdown.material}`);
        console.log(`   - Mylar products: ${productsData.breakdown.mylar}`);
        console.log(`   - Shopping bag products: ${productsData.breakdown.shoppingBags}`);
        console.log(`   - Other products: ${productsData.breakdown.other}`);
      }
    } else {
      console.log('❌ Products seeding failed:', productsData.error);
      return;
    }
    
    // Step 2: Seed Industries Collection (Industry Products Only)
    console.log('\n🏭 STEP 2: Seeding Industries Collection (Industry Products Only)...');
    const industriesResponse = await fetch('http://localhost:3000/api/seed-industries-only', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    const industriesData = await industriesResponse.json();
    
    if (industriesData.success) {
      console.log(`✅ Industries collection seeded successfully!`);
      console.log(`🏭 ${industriesData.message}`);
      console.log(`📊 Industry products: ${industriesData.count}`);
      
      if (industriesData.breakdown) {
        console.log('📋 Industries breakdown:');
        console.log(`   - Industry categories: ${industriesData.breakdown.categories}`);
        console.log(`   - Total industry products: ${industriesData.breakdown.total}`);
      }
    } else {
      console.log('❌ Industries seeding failed:', industriesData.error);
      return;
    }
    
    // Step 3: Verify both collections
    console.log('\n🔍 STEP 3: Verifying Separate Collections...');
    
    // Verify Products Collection
    const verifyProductsResponse = await fetch('http://localhost:3000/api/products');
    const verifyProductsData = await verifyProductsResponse.json();
    
    if (verifyProductsData.success) {
      console.log(`✅ Products collection verification: ${verifyProductsData.count} products`);
      
      // Show sample products by category
      const productsByCategory = verifyProductsData.data.reduce((acc, product) => {
        const category = product.category || 'main';
        if (!acc[category]) acc[category] = [];
        acc[category].push(product.name);
        return acc;
      }, {});
      
      console.log('📋 Products by category:');
      Object.entries(productsByCategory).forEach(([category, products]) => {
        console.log(`   ${category}: ${products.length} products`);
      });
    } else {
      console.log('❌ Products verification failed');
    }
    
    // Verify Industries Collection
    const verifyIndustriesResponse = await fetch('http://localhost:3000/api/industries');
    const verifyIndustriesData = await verifyIndustriesResponse.json();
    
    if (verifyIndustriesData.success) {
      console.log(`✅ Industries collection verification: ${verifyIndustriesData.count} industry products`);
      
      // Show sample industries
      console.log('📋 Sample industries:');
      verifyIndustriesData.data.slice(0, 5).forEach((industry, index) => {
        console.log(`   ${index + 1}. ${industry.name} (industry: ${industry.industry || 'main'})`);
      });
      if (verifyIndustriesData.data.length > 5) {
        console.log(`   ... and ${verifyIndustriesData.data.length - 5} more industry products`);
      }
    } else {
      console.log('❌ Industries verification failed');
    }
    
    // Step 4: Test specific endpoints
    console.log('\n🧪 STEP 4: Testing Specific Endpoints...');
    
    // Test products endpoint
    const mailerResponse = await fetch('http://localhost:3000/api/products/mailer-boxes');
    const mailerData = await mailerResponse.json();
    
    if (mailerData.success) {
      console.log(`✅ Products endpoint works: ${mailerData.data.name} (category: ${mailerData.data.category})`);
    }
    
    // Test industries endpoint
    const bakeryResponse = await fetch('http://localhost:3000/api/industries/bakery-boxes');
    const bakeryData = await bakeryResponse.json();
    
    if (bakeryData.success) {
      console.log(`✅ Industries endpoint works: ${bakeryData.data.name} (industry: ${bakeryData.data.industry})`);
    }
    
    // Test industry subcategory
    const donutResponse = await fetch('http://localhost:3000/api/industries/custom-donut-boxes');
    const donutData = await donutResponse.json();
    
    if (donutData.success) {
      console.log(`✅ Industry subcategory endpoint works: ${donutData.data.name} (industry: ${donutData.data.industry})`);
    }
    
    console.log('\n🎉 SEPARATE COLLECTIONS SEEDING SUCCESSFUL!');
    console.log('✅ Your database now contains:');
    console.log(`   📦 ${verifyProductsData.count} products in Products collection (dropdown menu products only)`);
    console.log(`   🏭 ${verifyIndustriesData.count} industry products in Industries collection (industry dropdown products only)`);
    console.log('\n🔗 Available endpoints:');
    console.log('   - GET /api/products - All dropdown menu products');
    console.log('   - GET /api/products/[slug] - Specific dropdown product');
    console.log('   - GET /api/industries - All industry products');
    console.log('   - GET /api/industries/[slug] - Specific industry product');
    console.log('\n🌐 Test your website:');
    console.log('   - Visit http://localhost:3000/test-db to see all products');
    console.log('   - Visit http://localhost:3000/admin to manage products');
    console.log('   - Visit http://localhost:3000/products/mailer-boxes to test product pages');
    console.log('   - Visit http://localhost:3000/api/industries to see industry products');
    console.log('   - Your dropdown menus will now fetch from the correct collections!');
    
  } catch (error) {
    console.log('❌ Separate collections seeding failed:', error.message);
    console.log('   Make sure your server is running: npm run dev');
  }
};

seedSeparateCollections();
