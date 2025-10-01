import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { CSVProductPricing } from '@/lib/types/pricing';
import { ObjectId } from 'mongodb';

// GET - List all CSV products with pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category') || '';
    const search = searchParams.get('search') || '';

    const collection = await getCollection('csvProductPricing');
    
    // Build filter
    const filter: any = { isActive: true };
    if (category) filter.category = category;
    if (search) {
      filter.$or = [
        { productName: { $regex: search, $options: 'i' } },
        { subcategory: { $regex: search, $options: 'i' } }
      ];
    }

    // Get total count
    const total = await collection.countDocuments(filter);
    
    // Get paginated results
    const products = await collection
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ productName: 1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: {
        products,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching CSV products:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// POST - Create new CSV product
export async function POST(request: NextRequest) {
  try {
    const productData: Omit<CSVProductPricing, '_id'> = await request.json();
    
    const collection = await getCollection('csvProductPricing');
    
    const newProduct = {
      ...productData,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(newProduct);
    
    return NextResponse.json({
      success: true,
      data: { _id: result.insertedId, ...newProduct }
    });
  } catch (error) {
    console.error('Error creating CSV product:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
