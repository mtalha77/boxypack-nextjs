import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

// GET /api/industries - Fetch all industries
export async function GET(request: NextRequest) {
  try {
    console.log('🏭 Fetching industries from database...');
    const db = await getDatabase();
    const industriesCollection = db.collection('Industries');
    
    const industries = await industriesCollection.find({}).sort({ name: 1 }).toArray();
    
    console.log(`✅ Successfully fetched ${industries.length} industries from database`);
    console.log('🏭 Industries:', industries.map(i => i.name).join(', '));
    
    return NextResponse.json({
      success: true,
      data: industries,
      count: industries.length
    });
  } catch (error) {
    console.error('❌ Error fetching industries:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch industries',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST /api/industries - Create a new industry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const db = await getDatabase();
    const industriesCollection = db.collection('Industries');
    
    const result = await industriesCollection.insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return NextResponse.json({
      success: true,
      data: { _id: result.insertedId, ...body },
      message: 'Industry created successfully'
    });
  } catch (error) {
    console.error('❌ Error creating industry:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create industry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
