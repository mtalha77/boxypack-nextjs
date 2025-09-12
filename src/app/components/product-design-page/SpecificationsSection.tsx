'use client';

import React from 'react';

interface ProductData {
  name: string;
  description: string;
  heroImage: string;
  modelPath: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  specifications: Array<{
    label: string;
    value: string;
  }>;
  sizes: Array<{
    name: string;
    dimensions: string;
    price: string;
  }>;
  galleryImages: string[];
  customizationOptions: string[];
  ctaTitle: string;
  ctaDescription: string;
}

interface SpecificationsSectionProps {
  productData: ProductData;
}

const SpecificationsSection: React.FC<SpecificationsSectionProps> = ({ productData }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Specifications & Details
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive specifications and customization options for {productData.name.toLowerCase()}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Specifications */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#0c6b76] mb-6">Technical Specifications</h3>
            <div className="space-y-4">
              {productData.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-semibold text-gray-700">{spec.label}</span>
                  <span className="text-[#0c6b76] font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Sizes */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#0c6b76] mb-6">Available Sizes</h3>
            <div className="space-y-4">
              {productData.sizes.map((size, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div>
                    <span className="font-semibold text-gray-700">{size.name}</span>
                    <p className="text-sm text-gray-500">{size.dimensions}</p>
                  </div>
                  <span className="text-[#0c6b76] font-bold text-lg">{size.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="mt-12 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Customization Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productData.customizationOptions.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;



