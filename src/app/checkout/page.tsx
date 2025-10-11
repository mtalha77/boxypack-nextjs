'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../contexts/CartContext';
import { Upload, Package, Trash2, X } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart, removeItem } = useCart();
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    shippingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    additionalNotes: '',
    designFiles: [] as File[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadedFileNames, setUploadedFileNames] = useState<string[]>([]);

  useEffect(() => {
    if (items.length === 0 && !orderPlaced && !submitting) {
      router.push('/');
    }
  }, [items, router, orderPlaced, submitting]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setFormData(prev => ({
        ...prev,
        designFiles: [...prev.designFiles, ...files]
      }));
      setUploadedFileNames(prev => [...prev, ...files.map(f => f.name)]);
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      designFiles: prev.designFiles.filter((_, i) => i !== index)
    }));
    setUploadedFileNames(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.shippingAddress.trim()) newErrors.shippingAddress = 'Shipping address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = async () => {
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setOrderPlaced(true);

    try {
      const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      
      const orderData = {
        orderNumber,
        ...formData,
        designFiles: uploadedFileNames,
        items: items,
        totalAmount: getTotalPrice(),
        orderDate: new Date().toISOString(),
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to place order');
      }

      sessionStorage.setItem('orderConfirmation', JSON.stringify(orderData));
      sessionStorage.setItem('clearCartOnConfirmation', 'true');

      setTimeout(() => {
        router.push('/order-confirmation');
      }, 500);
    } catch (error) {
      console.error('Order submission error:', error);
      alert('Failed to submit order. Please try again.');
      setOrderPlaced(false);
      setSubmitting(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-[#0c6b76] hover:text-[#0ca6c2] font-medium flex items-center gap-2 transition-colors"
          >
            ← Back to Shopping
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-3xl font-bold text-[#0c6b76] mb-2">Checkout</h1>
              <p className="text-gray-600 mb-6">Complete your order details below</p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none ${
                          errors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.shippingAddress}
                        onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none ${
                          errors.shippingAddress ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="123 Main Street"
                      />
                      {errors.shippingAddress && <p className="text-red-500 text-xs mt-1">{errors.shippingAddress}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none ${
                            errors.city ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="New York"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none ${
                            errors.state ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="NY"
                        />
                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none ${
                            errors.zipCode ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="10001"
                        />
                        {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none"
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Design Files
                  </h2>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0ca6c2] transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <label className="cursor-pointer">
                        <span className="text-[#0c6b76] font-semibold hover:text-[#0ca6c2]">
                          Click to upload
                        </span>
                        <span className="text-gray-600"> or drag and drop</span>
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          accept=".pdf,.ai,.eps,.psd,.jpg,.jpeg,.png"
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        PDF, AI, EPS, PSD, JPG, PNG (max 10 files)
                      </p>
                    </div>

                    {uploadedFileNames.length > 0 && (
                      <div className="space-y-2">
                        {uploadedFileNames.map((fileName, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <Package className="w-5 h-5 text-[#0c6b76]" />
                              <span className="text-sm text-gray-900">{fileName}</span>
                            </div>
                            <button
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#0c6b76] text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Additional Notes
                  </h2>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none"
                    placeholder="Any special requirements or instructions..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{item.productName}</h3>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.material} • {item.length}&quot; × {item.width}&quot; × {item.height}&quot;
                        </p>
                        <p className="text-xs text-gray-600">
                          PT: {item.pt} • {item.printedSides} • {item.lamination}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Qty: {item.quantity} × ${item.unitPrice.toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-green-600">
                        ${item.subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-300 pt-4 space-y-2 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Calculated at confirmation</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-green-600">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSubmitOrder}
                disabled={submitting}
                className="w-full bg-[#0c6b76] hover:bg-[#0ca6c2] text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Processing...' : 'Place Order'}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing your order, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

