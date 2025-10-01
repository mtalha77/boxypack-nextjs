import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

// GET /api/industries/[slug] - Fetch a specific industry by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      console.log('⚠️ MongoDB URI not configured, returning fallback data');
      return NextResponse.json({
        success: false,
        error: 'Database not configured',
        message: 'MongoDB connection not available'
      }, { status: 503 });
    }

    const { slug } = await params;
    console.log(`🏭 Fetching industry "${slug}" from database...`);
    const db = await getDatabase();
    const industriesCollection = db.collection('Industries');
    
    const industry = await industriesCollection.findOne({ slug });
    
    if (!industry) {
      console.log(`❌ Industry "${slug}" not found in database`);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Industry not found' 
        },
        { status: 404 }
      );
    }
    
    console.log(`✅ Successfully fetched industry "${industry.name}" from database`);
    return NextResponse.json({
      success: true,
      data: industry
    });
  } catch (error) {
    console.error('❌ Error fetching industry:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch industry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// PUT /api/industries/[slug] - Update a specific industry
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({
        success: false,
        error: 'Database not configured',
        message: 'MongoDB connection not available'
      }, { status: 503 });
    }

    const { slug } = await params;
    const body = await request.json();
    const db = await getDatabase();
    const industriesCollection = db.collection('Industries');
    
    const result = await industriesCollection.updateOne(
      { slug },
      { 
        $set: { 
          ...body, 
          updatedAt: new Date() 
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Industry not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Industry updated successfully'
    });
  } catch (error) {
    console.error('❌ Error updating industry:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update industry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE /api/industries/[slug] - Delete a specific industry
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({
        success: false,
        error: 'Database not configured',
        message: 'MongoDB connection not available'
      }, { status: 503 });
    }

    const { slug } = await params;
    const db = await getDatabase();
    const industriesCollection = db.collection('Industries');
    
    const result = await industriesCollection.deleteOne({ slug });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Industry not found' 
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Industry deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting industry:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to delete industry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
