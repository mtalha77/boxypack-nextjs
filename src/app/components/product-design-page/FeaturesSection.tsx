'use client';

import React from 'react';
import { Check, Star, Truck, Shield, Palette } from 'lucide-react';

interface FeaturesSectionProps {
  productData: {
    name: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ productData }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-8 h-8" };
    switch (iconName) {
      case 'shield':
        return <Shield {...iconProps} />;
      case 'palette':
        return <Palette {...iconProps} />;
      case 'truck':
        return <Truck {...iconProps} />;
      case 'check':
        return <Check {...iconProps} />;
      default:
        return <Shield {...iconProps} />;
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center font-bold uppercase border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 font-bold rounded-full mr-3 "></div>
            Why Choose Us
          </div>
          <h2 className="text-h2 text-heading-primary mb-6 leading-tight">
            Boxes That Build Real Brands
          </h2>
          <p className="text-body-large text-body-primary max-w-4xl mx-auto">
            At BoxyPack, we make custom boxes that mean more. Each one is made to match your product and your purpose. You choose the size, shape, and finish, and we bring it to life with care. Our custom packaging boxes are strong, neat, and printed clearly. They keep your products safe and make customers remember your brand every time they open the box.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData?.features?.length > 0 ? productData.features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
            >
              {/* Icon container */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {getIcon(feature.icon)}
                </div>
              </div>
              {/* Content */}
              <div className="text-center">
                <h3 className="text-h3 text-heading-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-body-muted text-body">No features available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
