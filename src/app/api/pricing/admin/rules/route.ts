import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { PricingRule } from '@/lib/types/pricing';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const productId = searchParams.get('productId');
    const isActive = searchParams.get('isActive') !== 'false';

    const rulesCollection = await getCollection('pricingRules');
    
    let query: any = {};
    if (category) {
      query.category = category;
    }
    if (productId) {
      query.productId = productId;
    }
    if (isActive) {
      query.isActive = true;
    }

    const rules = await rulesCollection.find(query).sort({ priority: 1, createdAt: -1 }).toArray();
    
    return NextResponse.json({
      success: true,
      data: rules
    });
  } catch (error) {
    console.error('Pricing rules fetch error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: Omit<PricingRule, '_id' | 'createdAt' | 'updatedAt'> = await request.json();
    
    const rulesCollection = await getCollection('pricingRules');
    const result = await rulesCollection.insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return NextResponse.json({
      success: true,
      data: { id: result.insertedId },
      message: 'Pricing rule created successfully'
    });
  } catch (error) {
    console.error('Pricing rule creation error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Rule ID is required for update'
      }, { status: 400 });
    }
    
    const rulesCollection = await getCollection('pricingRules');
    const { ObjectId } = await import('mongodb');
    const result = await rulesCollection.updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Pricing rule not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Pricing rule updated successfully'
    });
  } catch (error) {
    console.error('Pricing rule update error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Rule ID is required for deletion'
      }, { status: 400 });
    }
    
    const rulesCollection = await getCollection('pricingRules');
    const { ObjectId } = await import('mongodb');
    const result = await rulesCollection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Pricing rule not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Pricing rule deleted successfully'
    });
  } catch (error) {
    console.error('Pricing rule deletion error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}
