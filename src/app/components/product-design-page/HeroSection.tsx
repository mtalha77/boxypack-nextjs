'use client';

import React, { useState } from 'react';
import Model3D from './Model3D';
import GradientBackground from '../GradientBackground';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface HeroSectionProps {
  productData: {
    name: string;
    description: string;
    heroImage: string;
    modelPath: string;
  };
  breadcrumbs?: BreadcrumbItem[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ productData, breadcrumbs = [] }) => {
  const [isModelReady, setIsModelReady] = useState(false);

  return (
    <section className="pt-10 relative overflow-hidden min-h-[95vh]">
      <GradientBackground 
        className="absolute inset-0"
        fromColor="#0f9db7"
        toColor="#a8f0ff"
        direction="to-r"
      />

      <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 10 }}>
        {/* Dynamic Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                {breadcrumbs.map((item, index) => (
                  <li key={item.href} className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white/60 mx-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        index === breadcrumbs.length - 1
                          ? 'text-white cursor-default'
                          : 'text-white/80 hover:text-white'
                      }`}
                      aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{productData.name}</h1>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              {productData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brown-rustic hover:bg-[#97602f] text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                Get Quote Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] px-8 py-4 rounded-full font-semibold transition-colors duration-300 cursor-pointer">
                View All Products
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-[600px] h-[500px]">
              {!isModelReady && (
                <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-white/70 text-lg">Loading 3D Model...</div>
                </div>
              )}
              <Model3D 
                modelPath={productData.modelPath} 
                className="w-full h-full"
                onModelReady={() => setIsModelReady(true)}
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
