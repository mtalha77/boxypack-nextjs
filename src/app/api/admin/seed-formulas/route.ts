import { NextRequest, NextResponse } from 'next/server';
import { seedAllPricingFormulas } from '@/scripts/seed-pricing-formulas-complete';

export async function POST(request: NextRequest) {
  try {
    console.log('🌱 Starting comprehensive pricing formulas seeding...');
    
    const result = await seedAllPricingFormulas();
    
    console.log('✅ Pricing formulas seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.successCount} out of ${result.totalProducts} products!`,
      data: result
    });
  } catch (error) {
    console.error('❌ Error seeding pricing formulas:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

