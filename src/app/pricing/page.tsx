import React from 'react';
import PricingForm from '@/app/components/pricing/PricingForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Pricing - Boxypack',
  description: 'Get instant pricing for your custom packaging needs. Calculate costs for mailer boxes, rigid boxes, kraft boxes, and more.',
  keywords: 'custom packaging pricing, instant quote, box pricing, packaging calculator',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Instant Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the exact cost for your custom packaging needs. Our advanced pricing engine 
            considers material, size, quantity, customization, and delivery location to give you 
            accurate pricing in seconds.
          </p>
        </div>
        
        <PricingForm />
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Pricing System?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Get accurate pricing in seconds with our advanced calculation engine that considers all factors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                See exactly what you&apos;re paying for with detailed breakdowns of all costs and fees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volume Discounts</h3>
              <p className="text-gray-600">
                Automatically apply volume discounts based on your quantity to get the best possible price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
