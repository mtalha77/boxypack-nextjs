import { NextRequest, NextResponse } from 'next/server';
import { seedRigidPricingFormulas } from '@/scripts/seed-pricing-formulas-rigid';

export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Method not allowed. Use POST to seed Rigid formulas.',
    usage: {
      method: 'POST',
      endpoint: '/api/admin/seed-formulas-rigid',
      description: 'Seeds all Rigid product pricing formulas (12 products)'
    }
  }, { status: 405 });
}

export async function POST(request: NextRequest) {
  try {
    console.log('🎁 Starting Rigid pricing formulas seeding...');
    
    const result = await seedRigidPricingFormulas();
    
    console.log('✅ Rigid pricing formulas seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: `Successfully seeded ${result.successCount} Rigid products (out of ${result.totalProducts})!`,
      data: result
    });
  } catch (error) {
    console.error('❌ Error seeding Rigid pricing formulas:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

