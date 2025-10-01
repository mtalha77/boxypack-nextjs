import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { MaterialsApiResponse } from '@/lib/types/pricing';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const isActive = searchParams.get('isActive') !== 'false';

    const materialsCollection = await getCollection('materials');
    
    let query: any = {};
    if (type) {
      query.type = type;
    }
    if (isActive) {
      query.isActive = true;
    }

    const materials = await materialsCollection.find(query).sort({ name: 1 }).toArray();
    
    const response: MaterialsApiResponse = {
      success: true,
      data: materials
    };
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Materials fetch error:', error);
    
    const response: MaterialsApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    };
    
    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const materialsCollection = await getCollection('materials');
    const result = await materialsCollection.insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return NextResponse.json({
      success: true,
      data: { id: result.insertedId },
      message: 'Material created successfully'
    });
  } catch (error) {
    console.error('Material creation error:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    }, { status: 500 });
  }
}
