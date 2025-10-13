import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DEFAULT_PLATES_COST = {
  ranges: [
    { name: "0-18", dimensionMin: 0, dimensionMax: 18, cost: 2400 },
    { name: "18.1-25", dimensionMin: 18.1, dimensionMax: 25, cost: 4800 },
    { name: "25.1-30", dimensionMin: 25.1, dimensionMax: 30, cost: 10000 },
    { name: "30.1-40", dimensionMin: 30.1, dimensionMax: 40, cost: 16000 }
  ],
  multiplier: 2
};

export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db('boxypack');
    const collection = db.collection('pricingFormulas');

    // Find all rigid products without platesCost
    const rigidProducts = await collection.find({ 
      formulaType: 'rigid',
      platesCost: { $exists: false }
    }).toArray();

    if (rigidProducts.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No rigid products need updating. All already have platesCost.',
        updated: 0
      });
    }

    // Update each rigid product
    const updatePromises = rigidProducts.map(product =>
      collection.updateOne(
        { _id: product._id },
        {
          $set: {
            platesCost: DEFAULT_PLATES_COST,
            updatedAt: new Date()
          }
        }
      )
    );

    const results = await Promise.all(updatePromises);
    const successCount = results.filter(r => r.modifiedCount > 0).length;

    return NextResponse.json({
      success: true,
      message: `Successfully added plates cost to ${successCount} rigid products`,
      updated: successCount,
      productNames: rigidProducts.map(p => p.productName)
    });

  } catch (error) {
    console.error('Error adding plates cost:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to add plates cost to rigid products'
    }, { status: 500 });
  }
}

