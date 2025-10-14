'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Model3D from './Model3D';
import GradientBackground from '../../UI/GradientBackground';
import ClientOnly from '../ClientOnly';

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
    slug?: string; // Add slug for product identification
  };
  breadcrumbs?: BreadcrumbItem[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ productData, breadcrumbs = [] }) => {
  const [isModelReady, setIsModelReady] = useState(false);
  const [hasModelError, setHasModelError] = useState(false);
  const router = useRouter();

  // Handle Order Now button click
  const handleOrderNow = () => {
    if (productData.slug) {
      // Store the selected product in sessionStorage for the custom dimensions form
      sessionStorage.setItem('selectedProduct', productData.slug);
    }
    // Scroll to the custom dimensions form section on the same page
    setTimeout(() => {
      const element = document.getElementById('custom-dimensions-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle Get Free Quote button click
  const handleGetFreeQuote = () => {
    // Navigate to contact us page and scroll to contact section
    router.push('/contact-us#contact-section');
  };

  return (
    <section className={`py-12 lg:py-16 relative overflow-hidden`}>
      <GradientBackground 
        className="absolute inset-0"
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

        <div className={`grid grid-cols-1 ${hasModelError ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-8 ${hasModelError ? 'items-start' : 'items-center'}`}>
          {/* 3D Model - Top on mobile, Right on desktop - Only show if no error */}
          {!hasModelError && (
            <div className="relative flex justify-center items-center order-1 lg:order-2 px-4 lg:px-0">
              <div className="w-full max-w-sm sm:max-w-md lg:w-[600px] h-[350px] sm:h-[400px] lg:h-[500px]">
                <ClientOnly>
                {!isModelReady && (
                  <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-white/70 text-body">Loading Model...</div>
                  </div>
                )}
                <Model3D 
                  modelPath={productData.modelPath} 
                  className="w-full h-full"
                  onModelReady={() => setIsModelReady(true)}
                  onError={() => setHasModelError(true)}
                />
                </ClientOnly>
              </div>
            </div>
          )}

          {/* Content - Bottom on mobile, Left on desktop */}
          <div className={`text-white px-4 lg:px-0 ${
            hasModelError 
              ? 'order-2 lg:order-1' // Center content when model is hidden
              : 'order-2 lg:order-1' // Keep order classes when model is visible
          }`}>
            <h1 className="text-4xl sm:text-4xl md:text-6xl text-white mb-4 leading-tight font-bold">{productData.name}</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6">
              {productData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white px-8 lg:px-16 py-4 lg:py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-sm lg:text-base"
              >
                ORDER NOW
              </button>
              <button 
                onClick={handleGetFreeQuote}
                className="border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold transition-colors duration-300 cursor-pointer text-sm lg:text-base"
              >
                GET FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
