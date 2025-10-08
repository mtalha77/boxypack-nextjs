import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { calculatePricing } from '@/lib/pricing/calculator';
import { PricingCalculationRequest, ProductPricingFormula } from '@/lib/types/pricing-formulas';

export async function POST(request: NextRequest) {
  try {
    const body: PricingCalculationRequest = await request.json();

    const requiredFields: (keyof PricingCalculationRequest)[] = [
      'productId', 'length', 'width', 'height', 'pt', 'requiredUnits', 'printing', 'lamination'
    ];

    for (const field of requiredFields) {
      if (body[field] === undefined || body[field] === null) {
        return NextResponse.json({
          success: false,
          error: `Missing required field: ${field}`
        }, { status: 400 });
      }
    }

    if (body.length <= 0 || body.width <= 0 || body.height <= 0) {
      return NextResponse.json({
        success: false,
        error: 'Dimensions must be greater than 0'
      }, { status: 400 });
    }

    if (body.requiredUnits <= 0) {
      return NextResponse.json({
        success: false,
        error: 'Required units must be greater than 0'
      }, { status: 400 });
    }

    const validPT = ['14', '16', '18', 'N/A'];
    if (!validPT.includes(body.pt)) {
      return NextResponse.json({
        success: false,
        error: `Invalid PT value. Must be one of: ${validPT.join(', ')}`
      }, { status: 400 });
    }

    const validPrinting = ['outside', 'inside', 'bothSide', 'none'];
    if (!validPrinting.includes(body.printing)) {
      return NextResponse.json({
        success: false,
        error: `Invalid printing type. Must be one of: ${validPrinting.join(', ')}`
      }, { status: 400 });
    }

    const validLamination = ['glossy', 'matt', 'softTouch', 'none'];
    if (!validLamination.includes(body.lamination)) {
      return NextResponse.json({
        success: false,
        error: `Invalid lamination type. Must be one of: ${validLamination.join(', ')}`
      }, { status: 400 });
    }

    const formulasCollection = await getCollection('productPricingFormulas');
    const formula = await formulasCollection.findOne({ 
      productId: body.productId,
      isActive: true 
    }) as ProductPricingFormula | null;

    if (!formula) {
      return NextResponse.json({
        success: false,
        error: `Pricing formula not found for product: ${body.productId}`
      }, { status: 404 });
    }

    const result = await calculatePricing(formula, body);

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Pricing calculation API error:', error);
    
    // Check if dimensions exceed limit
    if (error instanceof Error && error.message === 'DIMENSIONS_EXCEED_LIMIT') {
      return NextResponse.json({
        success: false,
        requiresCustomQuote: true,
        error: 'Calculated dimensions exceed 40 inches. Please contact us for a custom quotation.'
      }, { status: 400 });
    }
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: false,
    error: 'Method not allowed. Use POST to calculate pricing.'
  }, { status: 405 });
}
