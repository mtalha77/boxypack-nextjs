import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function POST(request: NextRequest) {
  const client = new MongoClient('mongodb+srv://rankorbit1026_db_user:yokyklGhNigs1oNi@cluster0.pjhksks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    tls: true,
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true
  });

  try {
    console.log('🧹 Starting database cleanup...');
    
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db('BoxyPack');
    
    // Collections to keep (CSV-based system)
    const collectionsToKeep = [
      'csvProductPricing',  // Our new CSV pricing data
      'products',           // Basic product catalog
      'materials'           // Material specifications
    ];
    
    // Collections to remove (old pricing system)
    const collectionsToRemove = [
      'pricingRules',       // Old dynamic pricing rules
      'quantityTiers',      // Old quantity-based pricing
      'sizePricing',        // Old size-based pricing
      'locationPricing',    // Old location-based pricing
      'scanningPricing',    // Old individual pricing components
      'platesPricing',
      'printingPricing',
      'laminationPricing',
      'dieMakingPricing',
      'dieCuttingPricing',
      'pastingPricing',
      'vendorPricing',
      'Industries'          // Old industry data
    ];
    
    // Get all collections
    const allCollections = await db.listCollections().toArray();
    const collectionNames = allCollections.map(c => c.name);
    
    console.log('📋 Current collections:', collectionNames);
    
    // Remove old collections
    const removedCollections = [];
    for (const collectionName of collectionsToRemove) {
      if (collectionNames.includes(collectionName)) {
        await db.collection(collectionName).drop();
        removedCollections.push(collectionName);
        console.log(`🗑️ Removed collection: ${collectionName}`);
      }
    }
    
    // Verify remaining collections
    const remainingCollections = await db.listCollections().toArray();
    const remainingNames = remainingCollections.map(c => c.name);
    
    console.log('✅ Cleanup completed!');
    console.log('📋 Remaining collections:', remainingNames);
    
    return NextResponse.json({
      success: true,
      message: 'Database cleanup completed successfully!',
      removedCollections,
      remainingCollections: remainingNames,
      totalRemoved: removedCollections.length
    });
  } catch (error) {
    console.error('❌ Error during database cleanup:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}
