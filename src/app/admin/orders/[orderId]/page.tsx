'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Package, User, MapPin, Phone, Mail, Calendar, DollarSign, FileText, Truck, Download, ExternalLink } from 'lucide-react';

interface Order {
  _id: string;
  orderNumber: string;
  orderDate: string;
  customerInfo: {
    fullName: string;
    email: string;
    phone: string;
    companyName?: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  items: Array<{
    productName: string;
    productSlug: string;
    material: string;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
    pt: string;
    printedSides: string;
    lamination: string;
    quantity: number;
    unitPrice: number;
    subtotal: number;
  }>;
  designFiles: string[];
  additionalNotes: string;
  pricing: {
    subtotal: number;
    shippingCost: number;
    tax: number;
    totalAmount: number;
  };
  orderStatus: string;
  paymentStatus: string;
  fulfillmentStatus: string;
  timeline: Array<{
    status: string;
    timestamp: string;
    note: string;
  }>;
}

export default function OrderDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState('');

  useEffect(() => {
    if (params.orderId) {
      fetchOrder();
    }
  }, [params.orderId]);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/orders/${params.orderId}`);
      const data = await response.json();
      
      if (data.success) {
        setOrder(data.data);
        setSelectedStatus(data.data.orderStatus);
        setSelectedPaymentStatus(data.data.paymentStatus);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async () => {
    if (!order) return;

    setUpdating(true);
    try {
      const response = await fetch(`/api/orders/${params.orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderStatus: selectedStatus,
          paymentStatus: selectedPaymentStatus,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Order updated successfully');
        fetchOrder();
      }
    } catch (error) {
      console.error('Error updating order:', error);
      alert('Failed to update order');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0ca6c2]"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Order not found</h3>
          <button
            onClick={() => router.push('/admin/orders')}
            className="text-[#0c6b76] hover:text-[#0ca6c2] font-medium"
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
      processing: 'bg-purple-100 text-purple-800 border-purple-200',
      shipped: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      delivered: 'bg-green-100 text-green-800 border-green-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${styles[status] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <button
            onClick={() => router.push('/admin/orders')}
            className="flex items-center gap-2 text-[#0c6b76] hover:text-[#0ca6c2] font-medium transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Orders
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Order Details</h1>
              <p className="text-gray-600 mt-1">Order #{order.orderNumber}</p>
            </div>
            {getStatusBadge(order.orderStatus)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#0c6b76]" />
                  Order Items
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.productName}</h3>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                            <div><span className="font-medium">Material:</span> {item.material}</div>
                            <div><span className="font-medium">PT:</span> {item.pt}</div>
                            <div><span className="font-medium">Dimensions:</span> {item.dimensions.length}&quot; × {item.dimensions.width}&quot; × {item.dimensions.height}&quot;</div>
                            <div><span className="font-medium">Printing:</span> {item.printedSides}</div>
                            <div><span className="font-medium">Lamination:</span> {item.lamination}</div>
                            <div><span className="font-medium">Quantity:</span> {item.quantity} units</div>
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
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-medium">${order.pricing.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-medium">
                        {order.pricing.shippingCost > 0 ? `$${order.pricing.shippingCost.toFixed(2)}` : 'TBD'}
                      </span>
                    </div>
                    <div className="border-t-2 border-[#0ca6c2] pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-green-600">
                          ${order.pricing.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <User className="w-5 h-5 text-[#0c6b76]" />
                  Customer Information
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">{order.customerInfo.fullName}</p>
                    {order.customerInfo.companyName && (
                      <p className="text-sm text-gray-600">{order.customerInfo.companyName}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{order.customerInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{order.customerInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Shipping Address</p>
                    <p className="font-medium text-gray-900">{order.shippingAddress.street}</p>
                    <p className="text-gray-700">
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                    </p>
                    <p className="text-gray-700">{order.shippingAddress.country}</p>
                  </div>
                </div>
              </div>
            </div>

            {order.designFiles && order.designFiles.length > 0 && (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#0c6b76]" />
                    Design Files ({order.designFiles.length})
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {order.designFiles.map((file, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200 hover:border-[#0ca6c2] transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 bg-[#0c6b76] rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate" title={file}>
                              {file}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {file.split('.').pop()?.toUpperCase() || 'FILE'} Document
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={() => {
                              // If file is a URL, open it
                              if (file.startsWith('http://') || file.startsWith('https://')) {
                                window.open(file, '_blank');
                              } else {
                                alert(`File: ${file}\n\nNote: File upload integration needed. Currently storing filenames only.`);
                              }
                            }}
                            className="p-2 text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white rounded-lg transition-colors"
                            title="View file"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => {
                              // If file is a URL, download it
                              if (file.startsWith('http://') || file.startsWith('https://')) {
                                const link = document.createElement('a');
                                link.href = file;
                                link.download = file.split('/').pop() || 'download';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                              } else {
                                alert(`File: ${file}\n\nNote: File upload integration needed. Currently storing filenames only.\n\nTo enable downloads:\n1. Integrate Cloudinary or AWS S3\n2. Upload files during checkout\n3. Store URLs in database`);
                              }
                            }}
                            className="p-2 text-white bg-[#0c6b76] hover:bg-[#0ca6c2] rounded-lg transition-colors"
                            title="Download file"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-900">File Upload Note</p>
                        <p className="text-xs text-yellow-700 mt-1">
                          Currently, only filenames are stored. To enable file downloads, integrate cloud storage (Cloudinary/AWS S3) in the checkout process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {order.additionalNotes && (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Additional Notes</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 whitespace-pre-wrap">{order.additionalNotes}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Update Status</h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Status
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2]"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Status
                  </label>
                  <select
                    value={selectedPaymentStatus}
                    onChange={(e) => setSelectedPaymentStatus(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2]"
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="failed">Failed</option>
                    <option value="refunded">Refunded</option>
                  </select>
                </div>

                <button
                  onClick={updateOrderStatus}
                  disabled={updating}
                  className="w-full bg-[#0c6b76] hover:bg-[#0ca6c2] text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {updating ? 'Updating...' : 'Update Order'}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#0c6b76]" />
                  Order Timeline
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {order.timeline.map((event, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0c6b76] rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 capitalize">{event.status}</p>
                        <p className="text-sm text-gray-600">{event.note}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(event.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

