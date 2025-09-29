'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productByIndustryData } from '../data/productByIndustryData';
import LightBlueBackground from '../UI/LightBlueBackground';

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
          Choose The Right Box By Your Industry Type

          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of packaging solutions organized by industry. Each category contai
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
            <div
              key={cardIndex}
              className="group max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              style={{ width: "300px" }}
            >
              <Link href={`/products/product-by-industry/${category.slug}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </Link>
              <div className="p-5">
                <Link href={`/products/product-by-industry/${category.slug}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-teal-deep)] line-clamp-2 min-h-[3.5rem] flex items-start transition-colors duration-200">
                    {category.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 line-clamp-2">
                  {category.description || `Premium ${category.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`}
                </p>
                <Link
                  href={`/products/product-by-industry/${category.slug}`}
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
