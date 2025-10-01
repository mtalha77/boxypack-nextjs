import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { ProductsApiResponse } from '@/lib/types/pricing';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const isActive = searchParams.get('isActive') !== 'false';

    const productsCollection = await getCollection('products');
    
    let query: any = {};
    if (category) {
      query.category = category;
    }
    if (isActive) {
      query.isActive = true;
    }

    const products = await productsCollection.find(query).sort({ name: 1 }).toArray();
    
    const response: ProductsApiResponse = {
      success: true,
      data: products
    };
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Products fetch error:', error);
    
    const response: ProductsApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    };
    
    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const productsCollection = await getCollection('products');
    const result = await productsCollection.insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return NextResponse.json({
      success: true,
      data: { id: result.insertedId },
      message: 'Product created successfully'
    });
  } catch (error) {
    console.error('Product creation error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}
