import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const ordersCollection = await getCollection('Orders');
    const order = await ordersCollection.findOne({
      _id: new ObjectId(params.orderId)
    });

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const body = await request.json();
    const ordersCollection = await getCollection('Orders');

    const updateData: Record<string, unknown> = {
      updatedAt: new Date(),
    };

    if (body.orderStatus) {
      updateData.orderStatus = body.orderStatus;
      updateData.$push = {
        timeline: {
          status: body.orderStatus,
          timestamp: new Date(),
          note: body.statusNote || `Order status updated to ${body.orderStatus}`,
        }
      };
    }

    if (body.paymentStatus) {
      updateData.paymentStatus = body.paymentStatus;
    }

    if (body.fulfillmentStatus) {
      updateData.fulfillmentStatus = body.fulfillmentStatus;
    }

    if (body.trackingNumber) {
      updateData.trackingNumber = body.trackingNumber;
    }

    const result = await ordersCollection.updateOne(
      { _id: new ObjectId(params.orderId) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Order updated successfully'
    });
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

