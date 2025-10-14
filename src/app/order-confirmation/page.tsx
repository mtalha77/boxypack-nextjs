'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Package, Mail, Phone, MapPin, Calendar, FileText } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function OrderConfirmationPage() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [orderData, setOrderData] = useState<{
    orderNumber: string;
    orderDate: string;
    email: string;
    phone: string;
    fullName: string;
    companyName?: string;
    shippingAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    items: Array<{
      productName: string;
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
    }>;
    designFiles?: string[];
    additionalNotes?: string;
    totalAmount: number;
  } | null>(null);
  const [orderNumber, setOrderNumber] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run once on mount
    if (isInitialized) return;

    const storedOrder = sessionStorage.getItem('orderConfirmation');
    const shouldClearCart = sessionStorage.getItem('clearCartOnConfirmation');
    
    if (storedOrder) {
      const data = JSON.parse(storedOrder);
      setOrderData(data);
      setOrderNumber(data.orderNumber);
      sessionStorage.removeItem('orderConfirmation');
      
      if (shouldClearCart === 'true') {
        clearCart();
        sessionStorage.removeItem('clearCartOnConfirmation');
      }
      
      setIsInitialized(true);
    } else {
      // Only redirect if we haven't initialized yet and there's no data
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#0c6b76]"></div>
          </div>
          <p className="text-gray-600 text-lg">Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] px-6 py-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Order Received!
            </h1>
            <p className="text-lg text-white/90">
              Thank you for your order
            </p>
          </div>

          <div className="px-6 py-8">
            <div className="bg-blue-50 border-2 border-[#0ca6c2] rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-[#0c6b76] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Confirmation Email Sent
                  </h3>
                  <p className="text-gray-600 mb-3">
                    We&apos;ve sent a confirmation email to <span className="font-semibold text-[#0c6b76]">{orderData.email}</span> with your order details. 
                    Our team will review your order and contact you within 24 hours to confirm production details and finalize shipping arrangements.
                  </p>
                  <p className="text-gray-600">
                    A detailed invoice will be shared with you via email once your order is confirmed by our team.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0c6b76]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#0c6b76]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Number</p>
                    <p className="font-semibold text-gray-900">{orderNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0c6b76]/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#0c6b76]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(orderData.orderDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#0c6b76]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0c6b76]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{orderData.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#0c6b76]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#0c6b76]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{orderData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#0c6b76]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0c6b76]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Shipping Address</p>
                    <p className="font-medium text-gray-900">{orderData.fullName}</p>
                    {orderData.companyName && (
                      <p className="text-gray-700">{orderData.companyName}</p>
                    )}
                    <p className="text-gray-700">{orderData.shippingAddress}</p>
                    <p className="text-gray-700">
                      {orderData.city}, {orderData.state} {orderData.zipCode}
                    </p>
                    <p className="text-gray-700">{orderData.country}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-[#0c6b76]" />
                Order Items
              </h2>
              <div className="space-y-4">
                {orderData.items.map((item, index: number) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.productName}</h3>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Material:</span>
                            <span>{item.material}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Dimensions:</span>
                            <span>{item.length}&quot; × {item.width}&quot; × {item.height}&quot;</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Paper Thickness:</span>
                            <span>PT {item.pt}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Printing:</span>
                            <span>{item.printedSides}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Lamination:</span>
                            <span>{item.lamination}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Quantity:</span>
                            <span>{item.quantity} units</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-sm text-gray-500">Unit Price</p>
                        <p className="font-medium text-gray-900">${item.unitPrice.toFixed(2)}</p>
                        <p className="text-lg font-semibold text-green-600 mt-2">
                          ${item.subtotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-br from-[#0ca6c2]/10 to-blue-50 rounded-lg p-4 border-2 border-[#0ca6c2]/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-medium text-gray-900">${orderData.totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-700">Shipping</span>
                  <span className="text-sm text-gray-600">To be calculated</span>
                </div>
                <div className="border-t-2 border-[#0ca6c2] pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Estimated Total</span>
                    <span className="text-2xl font-bold text-green-600">
                      ${orderData.totalAmount.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-right">
                    Final amount will be confirmed with shipping costs
                  </p>
                </div>
              </div>
            </div>

            {orderData.designFiles && orderData.designFiles.length > 0 && (
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Design Files Uploaded</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-green-900">
                      {orderData.designFiles.length} file(s) uploaded successfully
                    </span>
                  </div>
                  <ul className="space-y-1 ml-7">
                    {orderData.designFiles.map((fileName: string, index: number) => (
                      <li key={index} className="text-sm text-green-700">
                        • {fileName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {orderData.additionalNotes && (
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Notes</h2>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-gray-700 whitespace-pre-wrap">{orderData.additionalNotes}</p>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-[#0c6b76]/5 to-[#0ca6c2]/5 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What Happens Next?</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                  <p className="text-gray-700 pt-0.5">
                    Our team will review your order and design files within 24 hours
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                  <p className="text-gray-700 pt-0.5">
                    You&apos;ll receive a detailed invoice via email for your records
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                  <p className="text-gray-700 pt-0.5">
                    We&apos;ll send you a production proof for approval before manufacturing
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                  <p className="text-gray-700 pt-0.5">
                    Once approved, production will begin with an estimated 8-10 day turnaround
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm font-semibold">5</span>
                  <p className="text-gray-700 pt-0.5">
                    You&apos;ll receive tracking information once your order ships
                  </p>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/')}
                className="flex-1 bg-[#0c6b76] hover:bg-[#0ca6c2] text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => window.print()}
                className="flex-1 bg-white border-2 border-[#0c6b76] text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white font-semibold py-4 px-6 rounded-lg transition-colors"
              >
                Print Order Details
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Questions about your order?{' '}
                <button
                  onClick={() => router.push('/contact-us')}
                  className="text-[#0c6b76] hover:text-[#0ca6c2] font-semibold underline"
                >
                  Contact us
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

