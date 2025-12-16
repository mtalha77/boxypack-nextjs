import { NextRequest, NextResponse } from 'next/server';

const CHAT_SERVER_URL = process.env.NEXT_PUBLIC_CHAT_SERVER_URL || 'http://localhost:5001';

export async function GET() {
  try {
    const response = await fetch(`${CHAT_SERVER_URL}/api/queue/status`, {
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
          error: 'Chat server returned invalid response. Please ensure the chat server is running on port 5001.',
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching queue status:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch queue status. Chat server may be down.',
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

