import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const orderData = {
      orderNumber: body.orderNumber,
      orderDate: new Date(body.orderDate),
      
      customerInfo: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        companyName: body.companyName || '',
      },
      
      shippingAddress: {
        street: body.shippingAddress,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
        country: body.country,
      },
      
      items: body.items.map((item: {
        productName: string;
        productSlug: string;
        material: string;
        length: number;
        width: number;
        height: number;
        pt: string;
        printedSides: string;
        lamination: string;
        quantity: number;
        unitPrice: number;
        subtotal: number;
      }) => ({
        productName: item.productName,
        productSlug: item.productSlug,
        material: item.material,
        dimensions: {
          length: item.length,
          width: item.width,
          height: item.height,
        },
        pt: item.pt,
        printedSides: item.printedSides,
        lamination: item.lamination,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        subtotal: item.subtotal,
      })),
      
      designFiles: body.designFiles || [],
      additionalNotes: body.additionalNotes || '',
      
      pricing: {
        subtotal: body.totalAmount,
        shippingCost: 0,
        tax: 0,
        totalAmount: body.totalAmount,
      },
      
      orderStatus: 'pending',
      paymentStatus: 'pending',
      fulfillmentStatus: 'unfulfilled',
      
      timeline: [
        {
          status: 'received',
          timestamp: new Date(),
          note: 'Order received and awaiting review',
        }
      ],
      
      metadata: {
        source: 'website',
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      },
      
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const ordersCollection = await getCollection('Orders');
    const result = await ordersCollection.insertOne(orderData);

    return NextResponse.json({
      success: true,
      orderId: result.insertedId,
      orderNumber: orderData.orderNumber,
      message: 'Order placed successfully'
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const ordersCollection = await getCollection('Orders');
    const orders = await ordersCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      data: orders,
      count: orders.length
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

