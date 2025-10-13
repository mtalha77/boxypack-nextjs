import { NextRequest, NextResponse } from 'next/server';
import { cleanupAndSeedRigid } from '@/scripts/cleanup-and-seed-rigid';

export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Method not allowed. Use POST to cleanup and seed Rigid formulas.',
    usage: {
      method: 'POST',
      endpoint: '/api/admin/cleanup-rigid',
      description: 'Deletes ALL Rigid products and seeds 5 new ones with 8-section structure'
    }
  }, { status: 405 });
}

export async function POST(request: NextRequest) {
  try {
    console.log('🧹 Starting Rigid cleanup and seeding...');
    
    const result = await cleanupAndSeedRigid();
    
    console.log('✅ Rigid cleanup and seeding completed successfully!');
    
    return NextResponse.json({
      success: true,
      message: `Successfully cleaned up and seeded Rigid products!`,
      data: {
        deleted: result.deleted,
        seeded: result.successCount,
        failed: result.errorCount,
        breakdown: result.breakdown
      }
    });
  } catch (error) {
    console.error('❌ Error in Rigid cleanup:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

