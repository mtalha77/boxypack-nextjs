import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

/**
 * Migration Route: Add Cost Margin Section
 * 
 * This route adds the new Section 13 (Cost Margin Percentage) to all existing pricing formulas.
 * Default value: 50%
 * 
 * Usage: POST http://localhost:3001/api/add-cost-margin
 */
export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db('boxypack');
    const collection = db.collection('pricing_formulas');

    console.log('🔄 Starting Cost Margin migration...');

    // Update all documents that don't have costMargin field
    const result = await collection.updateMany(
      { costMargin: { $exists: false } },
      {
        $set: {
          costMargin: {
            percentage: 50  // Default: 50%
          },
          updatedAt: new Date()
        }
      }
    );

    console.log(`✅ Migration complete! Updated ${result.modifiedCount} formulas.`);

    // Get count of all formulas for verification
    const totalCount = await collection.countDocuments({});
    const withCostMargin = await collection.countDocuments({ costMargin: { $exists: true } });

    return NextResponse.json({
      success: true,
      message: 'Cost Margin section added successfully',
      details: {
        updatedCount: result.modifiedCount,
        matchedCount: result.matchedCount,
        totalFormulas: totalCount,
        formulasWithCostMargin: withCostMargin,
        defaultPercentage: 50
      }
    });

  } catch (error) {
    console.error('❌ Migration error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

