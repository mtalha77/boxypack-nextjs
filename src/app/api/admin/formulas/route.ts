import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function GET() {
  try {
    const collection = await getCollection('pricingFormulas');
    
    // Get all pricing formulas
    const formulas = await collection.find({}).toArray();
    
    return NextResponse.json({
      success: true,
      data: formulas
    });
  } catch (error) {
    console.error('Error fetching pricing formulas:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formulaData = await request.json();
    
    const collection = await getCollection('pricingFormulas');
    
    const newFormula = {
      ...formulaData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(newFormula);
    
    return NextResponse.json({
      success: true,
      data: { _id: result.insertedId, ...newFormula }
    });
  } catch (error) {
    console.error('Error creating pricing formula:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { formulaId, updates } = await request.json();
    
    const collection = await getCollection('pricingFormulas');
    const { ObjectId } = await import('mongodb');
    
    const result = await collection.updateOne(
      { _id: new ObjectId(formulaId) },
      { 
        $set: {
          ...updates,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Formula not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Formula updated successfully'
    });
  } catch (error) {
    console.error('Error updating pricing formula:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
