import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { ProductPricingFormula } from '@/lib/types/pricing-formulas';
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    const collection = await getCollection('productPricingFormulas');
    const formula = await collection.findOne({ 
      productId: productId,
      isActive: true 
    });

    if (!formula) {
      return NextResponse.json({
        success: false,
        error: 'Pricing formula not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: formula
    });
  } catch (error) {
    console.error('Error fetching pricing formula:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    const updateData: Partial<ProductPricingFormula> = await request.json();
    
    delete updateData._id;
    delete updateData.createdAt;
    delete (updateData as any).productId; // Product ID should not change
    
    const collection = await getCollection('productPricingFormulas');
    
    const result = await collection.updateOne(
      { productId: productId },
      { 
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Pricing formula not found'
      }, { status: 404 });
    }

    // Return updated formula
    const updatedFormula = await collection.findOne({ 
      productId: productId 
    });

    return NextResponse.json({
      success: true,
      data: updatedFormula,
      message: 'Pricing formula updated successfully'
    });
  } catch (error) {
    console.error('Error updating pricing formula:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    const collection = await getCollection('productPricingFormulas');
    
    const result = await collection.updateOne(
      { productId: productId },
      { 
        $set: {
          isActive: false,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        error: 'Pricing formula not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Pricing formula deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting pricing formula:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

