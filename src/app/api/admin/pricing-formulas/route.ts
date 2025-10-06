import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { ProductPricingFormula } from '@/lib/types/pricing-formulas';

// GET - List all pricing formulas with pagination and filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const category = searchParams.get('category') || '';
    const search = searchParams.get('search') || '';

    const collection = await getCollection('productPricingFormulas');
    
    // Build filter
    const filter: Record<string, unknown> = { isActive: true };
    if (category) filter.category = category;
    if (search) {
      filter.$or = [
        { productName: { $regex: search, $options: 'i' } },
        { productId: { $regex: search, $options: 'i' } }
      ];
    }

    // Get total count
    const total = await collection.countDocuments(filter);
    
    // Get paginated results
    const formulas = await collection
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ productName: 1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: {
        formulas,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching pricing formulas:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// POST - Create new pricing formula
export async function POST(request: NextRequest) {
  try {
    const formulaData: Omit<ProductPricingFormula, '_id' | 'createdAt' | 'updatedAt'> = await request.json();
    
    // Validate required fields
    if (!formulaData.productId || !formulaData.productName || !formulaData.category) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: productId, productName, or category'
      }, { status: 400 });
    }

    const collection = await getCollection('productPricingFormulas');
    
    // Check if product already has a formula
    const existing = await collection.findOne({ productId: formulaData.productId });
    if (existing) {
      return NextResponse.json({
        success: false,
        error: 'Pricing formula already exists for this product'
      }, { status: 409 });
    }
    
    const newFormula = {
      ...formulaData,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(newFormula);
    
    return NextResponse.json({
      success: true,
      data: { _id: result.insertedId, ...newFormula },
      message: 'Pricing formula created successfully'
    });
  } catch (error) {
    console.error('Error creating pricing formula:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

