import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { calculatePricing } from '@/lib/pricing/calculator';
import { calculateRigidPricing } from '@/lib/pricing/calculator-rigid';
import { PricingCalculationRequest, ProductPricingFormula } from '@/lib/types/pricing-formulas';
import { RigidPricingCalculationRequest, RigidProductPricingFormula } from '@/lib/types/pricing-formulas-rigid';

export async function POST(request: NextRequest) {
  try {
    const body: PricingCalculationRequest | RigidPricingCalculationRequest = await request.json();

    // Basic validation for all types
    if (!body.productId || !body.length || !body.width || !body.height || !body.requiredUnits) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: productId, length, width, height, requiredUnits'
      }, { status: 400 });
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

    // Fetch formula
    const formulasCollection = await getCollection('productPricingFormulas');
    const formula = await formulasCollection.findOne({ 
      productId: body.productId,
      isActive: true 
    });

    if (!formula) {
      return NextResponse.json({
        success: false,
        error: `Pricing formula not found for product: ${body.productId}`
      }, { status: 404 });
    }

    // Check formula type and validate accordingly
    if (formula.formulaType === 'rigid') {
      // Rigid formula validation
      const rigidBody = body as RigidPricingCalculationRequest;
      
      if (!rigidBody.lamination) {
        return NextResponse.json({
          success: false,
          error: 'Missing required field: lamination'
        }, { status: 400 });
      }

      const validLamination = ['glossy', 'softTouch', 'none'];
      if (!validLamination.includes(rigidBody.lamination)) {
        return NextResponse.json({
          success: false,
          error: `Invalid lamination type for Rigid. Must be one of: ${validLamination.join(', ')}`
        }, { status: 400 });
      }

      const result = await calculateRigidPricing(formula as RigidProductPricingFormula, rigidBody);
      
      return NextResponse.json({
        success: true,
        data: result
      });
    } else {
      // Standard formula validation (Kraft, Cardboard, Corrugated)
      const standardBody = body as PricingCalculationRequest;
      
      if (!standardBody.pt || !standardBody.printing || !standardBody.lamination) {
        return NextResponse.json({
          success: false,
          error: 'Missing required fields: pt, printing, lamination'
        }, { status: 400 });
      }

      const validPT = ['14', '16', '18', 'N/A'];
      if (!validPT.includes(standardBody.pt)) {
        return NextResponse.json({
          success: false,
          error: `Invalid PT value. Must be one of: ${validPT.join(', ')}`
        }, { status: 400 });
      }

      const validPrinting = ['outside', 'inside', 'bothSide', 'none'];
      if (!validPrinting.includes(standardBody.printing)) {
        return NextResponse.json({
          success: false,
          error: `Invalid printing type. Must be one of: ${validPrinting.join(', ')}`
        }, { status: 400 });
      }

      const validLamination = ['glossy', 'matt', 'softTouch', 'none'];
      if (!validLamination.includes(standardBody.lamination)) {
        return NextResponse.json({
          success: false,
          error: `Invalid lamination type. Must be one of: ${validLamination.join(', ')}`
        }, { status: 400 });
      }

      const result = await calculatePricing(formula as ProductPricingFormula, standardBody);
      
      return NextResponse.json({
        success: true,
        data: result
      });
    }

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
