'use client';

import React, { useRef, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { productByMaterialData } from '../data/productByMaterialData';
import LightBlueBackground from '../UI/LightBlueBackground';

const ProductByMaterialCarousel: React.FC = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(344);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate card width based on screen size
  React.useEffect(() => {
    const updateCardWidth = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      if (isMobileView) {
        // Mobile: full viewport width minus container padding
        setCardWidth(window.innerWidth - 32); // 32px for container padding (16px left + 16px right)
      } else {
        // Desktop: fixed width
        setCardWidth(320);
      }
    };
    
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < productByMaterialData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <LightBlueBackground id="product-by-material">
      <div className="w-full">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center lg:text-left mb-12">
            <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
              <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
              PRODUCT BY MATERIAL
            </div>
            <h2 className="text-h2 text-heading-primary mb-6 leading-tight max-w-3xl mx-auto lg:mx-0">
            Find The Right Box By Your Material Choice

            </h2>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
              <p className="text-body-large text-body-primary max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-8 lg:mb-0">
              Browse premium boxes selected by material, each built to deliver strength, style, and brand impact.
              </p>

              {/* Navigation Buttons - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex justify-end gap-4">
                {/* Left Arrow Button */}
                <button
                  onClick={slideLeft}
                  disabled={currentIndex === 0}
                  className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                    currentIndex === 0 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={slideRight}
                  disabled={currentIndex === productByMaterialData.length - 1}
                  className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                    currentIndex === productByMaterialData.length - 1 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="w-full mb-8 overflow-hidden px-4 md:px-0">
          <div 
            ref={cardsContainerRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out md:justify-center"
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + 24)}px)`
            }}
          >
          {productByMaterialData.map((category, cardIndex) => (
            <div
              key={cardIndex}
              className="group max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              style={{ 
                width: isMobile ? `${cardWidth}px` : '320px'
              }}
            >
              <Link href={`/products/product-by-material/${category.slug}`}>
                <CldImage
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-5">
                <Link href={`/products/product-by-material/${category.slug}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-teal-deep)] line-clamp-2 min-h-[3.5rem] flex items-start transition-colors duration-200">
                    {category.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 line-clamp-2">
                  {category.description || `Premium ${category.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`}
                </p>
                <Link
                  href={`/products/product-by-material/${category.slug}`}
                  className="inline-flex justify-end items-center text-sm font-semibold text-[var(--color-teal-deep)] hover:text-[var(--color-turquoise-bright)] transition-colors duration-200 group-hover:text-[var(--color-teal-deep)]"
                >
                  View Product
                  <svg 
                    className="w-4 h-4 ml-2" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="m9 18 6-6-6-6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons - Shown only on mobile */}
        <div className="flex lg:hidden justify-center gap-4 mb-8">
          {/* Left Arrow Button */}
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : ''
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={slideRight}
            disabled={currentIndex === productByMaterialData.length - 1}
            className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
              currentIndex === productByMaterialData.length - 1 
                ? 'opacity-50 cursor-not-allowed' 
                : ''
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </LightBlueBackground>
  );
};

export default ProductByMaterialCarousel;
