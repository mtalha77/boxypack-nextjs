import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { createDefaultProductFormula, MaterialType } from '@/lib/types/pricing-formulas';

// Helper function to create slug from name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// All products from CSV
const products = [
  // Rigid Boxes
  { name: 'Magnetic Closure Rigid Boxes', category: 'rigid' as const },
  { name: 'Two Piece Rigid Boxes', category: 'rigid' as const },
  { name: 'Collapsible Foldable Rigid Boxes', category: 'rigid' as const },
  { name: 'Sliding Sleeve Rigid Boxes', category: 'rigid' as const },
  { name: 'Child Resistant Rigid Box', category: 'rigid' as const },
  { name: 'Custom Rigid Paper Tubes', category: 'rigid' as const },
  { name: 'Brief Case Style Rigid Box', category: 'rigid' as const },
  { name: 'Book Style Rigid Boxes', category: 'rigid' as const },
  { name: 'Hexagon Rigid Boxes', category: 'rigid' as const },
  { name: 'Round Shaped Rigid Boxes', category: 'rigid' as const },
  { name: 'Rigid Book Sleeves', category: 'rigid' as const },
  { name: 'Shoulder Rigid Boxes', category: 'rigid' as const },

  // Kraft Boxes  
  { name: 'Kraft Mailer Box', category: 'kraft' as const },
  { name: 'Kraft Box with Lid', category: 'kraft' as const },
  { name: 'Kraft Pillow Box', category: 'kraft' as const },
  { name: 'Kraft Gable Box', category: 'kraft' as const },
  { name: 'Kraft Bakery Cake Box', category: 'kraft' as const },
  { name: 'Kraft Sleeve Box', category: 'kraft' as const },
  { name: 'Kraft Tuck End Box', category: 'kraft' as const },
  { name: 'Kraft Five Panel Hanger Box', category: 'kraft' as const },
  { name: 'Kraft Side Lock Six Corner Box', category: 'kraft' as const },
  { name: 'Kraft Regular Six Corner Box', category: 'kraft' as const },
  { name: 'Kraft Seal End Auto Bottom Box', category: 'kraft' as const },
  { name: 'Kraft Single Wall Auto Bottom Tray', category: 'kraft' as const },
  { name: 'Kraft Two Piece Box', category: 'kraft' as const },
  { name: 'Kraft Cigarette Box', category: 'kraft' as const },
  { name: 'Kraft Bookend Box', category: 'kraft' as const },
  { name: 'Kraft Dispenser Box', category: 'kraft' as const },
  { name: 'Kraft Double Wall Frame Tray', category: 'kraft' as const },

  // Cardboard Boxes
  { name: 'Cardboard Display Box', category: 'cardboard' as const },
  { name: 'Cardboard Tuck End Box', category: 'cardboard' as const },
  { name: 'Cardboard Box with Lid', category: 'cardboard' as const },
  { name: 'Cardboard Gable Box', category: 'cardboard' as const },
  { name: 'Cardboard Cake Bakery Box', category: 'cardboard' as const },
  { name: 'Cardboard Sleeve Box', category: 'cardboard' as const },
  { name: 'Cardboard Dispenser Box', category: 'cardboard' as const },
  { name: 'Cardboard Five Panel Hanger', category: 'cardboard' as const },
  { name: 'Cardboard Mailer Box', category: 'cardboard' as const },
  { name: 'Cardboard Double Locked Wall Lid Box', category: 'cardboard' as const },
  { name: 'Cardboard Side Lock Six Corner Box', category: 'cardboard' as const },
  { name: 'Cardboard Regular Six Corner Box', category: 'cardboard' as const },
  { name: 'Cardboard Seal End Auto Bottom Box', category: 'cardboard' as const },
  { name: 'Cardboard Auto Bottom Tray', category: 'cardboard' as const },
  { name: 'Cardboard Two Piece Box', category: 'cardboard' as const },
  { name: 'Cardboard Cigarette Box', category: 'cardboard' as const },
  { name: 'Cardboard Bookend Box', category: 'cardboard' as const },
  { name: 'Cardboard Double Wall Frame Tray', category: 'cardboard' as const },

  // Corrugated Boxes
  { name: 'Corrugated Mailer Box', category: 'corrugated' as const },
  { name: 'Corrugated Gable Box', category: 'corrugated' as const },
  { name: 'Corrugated Double Locked Wall Lid Box', category: 'corrugated' as const },
  { name: 'Corrugated Seal End Auto Bottom Box', category: 'corrugated' as const },
  { name: 'Corrugated Auto Bottom Tray', category: 'corrugated' as const },
  { name: 'Corrugated Two Piece Box', category: 'corrugated' as const },
  { name: 'Corrugated Brief Case Style Box', category: 'corrugated' as const },
  { name: 'Corrugated Full Flap Shipping Box', category: 'corrugated' as const },
];

export async function POST(request: NextRequest) {
  try {
    const collection = await getCollection('productPricingFormulas');

    console.log('🌱 Starting pricing formulas reseeding with corrected ranges...');
    console.log(`📦 Total products to reseed: ${products.length}`);

    // Clear existing formulas
    console.log('🗑️  Clearing existing pricing formulas...');
    await collection.deleteMany({});

    // Insert all products with corrected ranges
    let successCount = 0;
    let errorCount = 0;

    for (const product of products) {
      try {
        const productId = createSlug(product.name);
        const formula = createDefaultProductFormula(productId, product.name, product.category as MaterialType);
        
        await collection.insertOne({
          ...formula,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        successCount++;
        console.log(`✅ ${product.category.toUpperCase()}: ${product.name}`);
      } catch (error) {
        errorCount++;
        console.error(`❌ Failed to seed ${product.name}:`, error);
      }
    }

    console.log('\n📊 Reseeding Summary:');
    console.log(`✅ Successfully reseeded: ${successCount} products`);
    console.log(`❌ Failed: ${errorCount} products`);
    console.log('\n🎉 Database reseeding completed with corrected ranges!');

    return NextResponse.json({
      success: true,
      message: `Successfully reseeded ${successCount} out of ${successCount + errorCount} products with corrected ranges!`,
      data: {
        totalProducts: products.length,
        successCount,
        errorCount
      }
    });
  } catch (error) {
    console.error('❌ Error reseeding pricing formulas:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Use POST method to reseed pricing formulas with corrected ranges'
  });
}
