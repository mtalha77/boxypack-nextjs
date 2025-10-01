// Database Seeding Script
// Run this with: node seed-database.js

const seedDatabase = async () => {
  console.log('🌱 Starting database seeding process...\n');
  
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
        console.log('📦 Existing products:', currentData.data.map(p => p.name).join(', '));
        console.log('\n⚠️  Database already has products. Seeding will replace them.');
      } else {
        console.log('📭 Database is empty - ready for seeding');
      }
    } else {
      console.log('❌ Failed to check database state:', currentData.error);
      return;
    }
    
    // Seed the database
    console.log('\n3️⃣ Seeding database with product data...');
    const seedResponse = await fetch('http://localhost:3000/api/seed-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const seedData = await seedResponse.json();
    
    if (seedData.success) {
      console.log('✅ Database seeded successfully!');
      console.log(`📦 ${seedData.message}`);
      console.log(`🎉 Total products: ${seedData.count}`);
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
      console.log('📦 Seeded products:', verifyData.data.map(p => p.name).join(', '));
      
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
    } else {
      console.log('❌ Verification failed:', verifyData.error);
    }
    
    console.log('\n🎯 Database seeding completed!');
    console.log('   - Your products are now in the database');
    console.log('   - Visit http://localhost:3000/products/mailer-boxes to test');
    console.log('   - Visit http://localhost:3000/admin to manage products');
    
  } catch (error) {
    console.log('❌ Seeding process failed:', error.message);
    console.log('   Make sure your server is running: npm run dev');
  }
};

seedDatabase();
