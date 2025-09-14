'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productByIndustryData } from '../data/productByIndustryData';
import LightBlueBackground from './LightBlueBackground';

const ProductByIndustryCarousel: React.FC = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (currentIndex < productByIndustryData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <LightBlueBackground className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
            PRODUCT BY INDUSTRY
          </div>
          <h2 className="text-h2 text-heading-primary mb-6 leading-tight">
            Select your Box by your Industry Type
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of packaging solutions organized by industry. Each category contains specialized packaging options tailored to specific business needs and regulatory requirements.
          </p>
        </div>

        {/* Cards Container */}
        <div className=" mx-16 mb-8">
          <div 
            ref={cardsContainerRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (300 + 24)}px)` }}
          >
          {productByIndustryData.map((category, cardIndex) => (
            <Link
              key={cardIndex}
              href={`/products/product-by-industry/${category.slug}`}
              className="card-center bg-white rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 block"
              style={{ width: "300px", height: "360px" }}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c6b76]/20 to-transparent"></div>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-[#0c6b76]/10 text-[#0c6b76] text-xs font-semibold rounded-full">
                    Industry Category
                  </span>
                  <span className="inline-block px-2 py-1 bg-[#0ca6c2]/10 text-[#0ca6c2] text-xs font-semibold rounded-full ml-2">
                    {category.subcategoriesCount} Products
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0c6b76] mb-2 group-hover:text-[#0ca6c2] transition-colors duration-300">
                  {category.name}
                </h4>
                <div className="flex items-center text-[#0c6b76] group-hover:text-[#0ca6c2] transition-colors">
                  <span className="text-sm font-medium mr-2">Explore Products</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={slideLeft}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#0c6b76] hover:text-white hover:shadow-xl'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={slideRight}
            disabled={currentIndex === productByIndustryData.length - 1}
            className={`w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
              currentIndex === productByIndustryData.length - 1 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#0c6b76] hover:text-white hover:shadow-xl'
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

export default ProductByIndustryCarousel;
