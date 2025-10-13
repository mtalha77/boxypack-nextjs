import { NextRequest, NextResponse } from 'next/server';
import { migrateRigidFormulas } from '@/scripts/migrate-rigid-formulas';

export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Method not allowed. Use POST to run migration.',
    usage: {
      method: 'POST',
      endpoint: '/api/admin/migrate-rigid',
      description: 'Migrates Rigid formulas to V2 (new Material & Shipping calculations)'
    }
  }, { status: 405 });
}

export async function POST(request: NextRequest) {
  try {
    console.log('🔄 Starting Rigid formulas migration...');
    
    const result = await migrateRigidFormulas();
    
    console.log('✅ Rigid formulas migration completed!');
    
    return NextResponse.json({
      success: true,
      message: `Rigid formulas migrated successfully!`,
      data: {
        migrated: result.migrated,
        failed: result.failed,
        total: result.total
      }
    });
  } catch (error) {
    console.error('❌ Error in migration:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

