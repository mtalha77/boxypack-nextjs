'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productByMaterialData } from '../data/productByMaterialData';

const ProductByMaterialCarousel: React.FC = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="relative overflow-hidden py-16" style={{
      background: 'linear-gradient(135deg, rgba(12, 166, 194, 0.1) 0%, rgba(12, 166, 194, 0.08) 50%, rgba(12, 166, 194, 0.05) 100%)',
      backgroundColor: '#f8fafc' // fallback background
    }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ca6c2' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className=" px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
            PRODUCT BY MATERIAL
          </div>
          <h2 className="text-4xl font-bold text-[#0c6b76] mb-6 leading-tight">
            Explore by Material Type
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of packaging solutions organized by material type. Each category offers specialized packaging options tailored to different product needs and industry requirements.
          </p>
        </div>

        {/* Cards Container */}
        <div className="overflow-hidden mx-16 mb-8">
          <div 
            ref={cardsContainerRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (320 + 24)}px)` }}
          >
          {productByMaterialData.map((category, cardIndex) => (
            <Link
              key={cardIndex}
              href={`/products/product-by-material/${category.slug}`}
              className="card-center bg-white rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 block"
              style={{ width: "320px", height: "380px" }}
            >
              <div className="relative h-48 overflow-hidden">
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
                  <span className="inline-block px-3 py-1 bg-[#0c6b76]/10 text-[#0c6b76] text-sm font-semibold rounded-full">
                    Material Category
                  </span>
                  <span className="inline-block px-3 py-1 bg-[#0ca6c2]/10 text-[#0ca6c2] text-sm font-semibold rounded-full ml-2">
                    {category.subcategoriesCount} Products
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0c6b76] mb-3 group-hover:text-[#0ca6c2] transition-colors duration-300">
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
            disabled={currentIndex === productByMaterialData.length - 1}
            className={`w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
              currentIndex === productByMaterialData.length - 1 
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
    </section>
  );
};

export default ProductByMaterialCarousel;
