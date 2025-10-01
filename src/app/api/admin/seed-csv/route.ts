import { NextRequest, NextResponse } from 'next/server';
import { seedCSVPricingData } from '@/scripts/parse-csv-pricing';

export async function POST(request: NextRequest) {
  try {
    console.log('🌱 Starting CSV pricing data seeding...');
    
    await seedCSVPricingData();
    
    console.log('✅ CSV pricing data seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: 'CSV pricing data seeded successfully!'
    });
  } catch (error) {
    console.error('❌ Error seeding CSV pricing data:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
