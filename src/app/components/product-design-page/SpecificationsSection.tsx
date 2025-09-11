'use client';

import React from 'react';

interface SpecificationsSectionProps {
  productData: {
    specifications: Array<{
      label: string;
      value: string;
    }>;
    sizes: Array<{
      name: string;
      dimensions: string;
      price: string;
    }>;
  };
}

const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({ productData }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Specifications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0c6b76] mb-6">Specifications</h3>
            <div className="space-y-4">
              {productData.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-semibold text-gray-700">{spec.label}</span>
                  <span className="text-[#0c6b76]">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sizes & Pricing */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#0c6b76] mb-6">Available Sizes & Pricing</h3>
            <div className="space-y-4">
              {productData.sizes.map((size, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-800">{size.name}</h4>
                    <p className="text-sm text-gray-600">{size.dimensions}</p>
                  </div>
                  <span className="text-xl font-bold text-[#0c6b76]">{size.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Prices are per unit for orders of 100+ pieces. Custom sizes available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
