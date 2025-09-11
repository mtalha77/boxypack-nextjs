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
    <section className="py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, rgba(12, 166, 194, 0.1) 0%, rgba(12, 166, 194, 0.08) 50%, rgba(12, 166, 194, 0.05) 100%)',
      backgroundColor: '#f8fafc' // fallback background
    }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ca6c2' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center font-bold uppercase border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 font-bold rounded-full mr-3 "></div>
            Why Choose Us
          </div>
          <h2 className="text-5xl font-bold text-[#0c6b76] mb-6 leading-tight">
            Why Choose Our {productData.name}?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Built for quality, designed for impact, and crafted for your brand. Experience the difference that premium packaging makes.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData?.features?.length > 0 ? productData.features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 hover:border-[#0c6b76]/20"
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ca6c2]/8 to-[#0ca6c2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container */}
              <div className="relative z-10 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  {getIcon(feature.icon)}
                </div>
              </div>
              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-[#0c6b76] mb-4 group-hover:text-[#0a5a63] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No features available at the moment.</p>
            </div>
          )}
        </div>
       
      </div>
    </section>
  );
};

export default FeaturesSection;
