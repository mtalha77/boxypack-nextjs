import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function GET(request: NextRequest) {
  try {
    // Get agentId from query parameters
    const { searchParams } = new URL(request.url);
    const agentId = searchParams.get('agentId');
    
    // Build URL with agentId if provided
    const url = agentId 
      ? `${BACKEND_URL}/api/chats?agentId=${agentId}`
      : `${BACKEND_URL}/api/chats`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Check if response is JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response received:', text.substring(0, 200));
      return NextResponse.json(
        {
          success: false,
          error: 'Backend server returned invalid response. Please ensure the backend server is running.',
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching chats:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch chats. Backend server may be down.',
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

