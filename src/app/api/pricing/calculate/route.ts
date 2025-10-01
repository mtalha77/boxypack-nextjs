import { NextRequest, NextResponse } from 'next/server';
import { pricingEngine } from '@/lib/pricing-engine';
import { PricingRequest, PricingApiResponse } from '@/lib/types/pricing';

export async function POST(request: NextRequest) {
  try {
    const body: PricingRequest = await request.json();
    
    // Validate required fields
    if (!body.productId || !body.material || !body.dimensions || !body.quantity) {
      const response: PricingApiResponse = {
        success: false,
        error: 'Missing required fields: productId, material, dimensions, and quantity are required'
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Calculate pricing
    const result = await pricingEngine.calculatePrice(body);
    
    const response: PricingApiResponse = {
      success: true,
      data: result,
      message: 'Pricing calculated successfully'
    };
    
    return NextResponse.json(response);
  } catch (error) {
    console.error('Pricing calculation error:', error);
    
    const response: PricingApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    };
    
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Method not allowed. Use POST to calculate pricing.'
  }, { status: 405 });
}
