import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request: NextRequest) {
  try {
    const { updates, field, value } = await request.json();
    
    if (!updates || !Array.isArray(updates) || updates.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Updates array is required'
      }, { status: 400 });
    }

    const collection = await getCollection('csvProductPricing');
    
    // Prepare bulk operations
    const bulkOps = updates.map(update => {
      const filter = { _id: new ObjectId(update.productId) };
      const updateDoc = {
        $set: {
          [update.field]: update.value,
          updatedAt: new Date()
        }
      };
      return { updateOne: { filter, update: updateDoc } };
    });

    // Execute bulk update
    const result = await collection.bulkWrite(bulkOps);
    
    return NextResponse.json({
      success: true,
      message: `Successfully updated ${result.modifiedCount} products`,
      modifiedCount: result.modifiedCount,
      matchedCount: result.matchedCount
    });
  } catch (error) {
    console.error('Error in bulk update:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
