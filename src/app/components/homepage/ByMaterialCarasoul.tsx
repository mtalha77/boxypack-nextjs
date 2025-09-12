'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productByMaterialData } from '../../data/productByMaterialData';

// Global state to prevent multiple sections from scrolling simultaneously
let globalScrollingSection: string | null = null;

const ByMaterialCarasoul: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let animationId: number;
    let targetScrollPosition = 0;
    let currentScrollPosition = 0;

    const smoothScrollTo = (target: number, container: HTMLDivElement) => {
      const startPosition = currentScrollPosition;
      const distance = target - startPosition;
      const duration = 200; // Reduced duration for faster animation
      let startTime: number;

      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smoother easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        currentScrollPosition = startPosition + (distance * easeOutQuart);
        
        container.scrollLeft = currentScrollPosition;
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animateScroll);
        }
      };

      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      const isInView = rect.top <= windowHeight && rect.bottom >= 0;
      
      if (isInView && !isScrolling && globalScrollingSection === null) {
        setIsScrolling(true);
        globalScrollingSection = 'material';
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
      } else if (!isInView && isScrolling) {
        setIsScrolling(false);
        globalScrollingSection = null;
        // Restore body scroll
        document.body.style.overflow = 'auto';
      }

      setScrollY(window.scrollY);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling && sectionRef.current && containerRef.current) {
        e.preventDefault();
        const container = containerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const scrollAmount = e.deltaY * 1.5; // Increased sensitivity for faster scroll
        
        targetScrollPosition = Math.max(0, Math.min(targetScrollPosition + scrollAmount, maxScroll));
        
        smoothScrollTo(targetScrollPosition, container);
        
        // Check if we've scrolled through all cards
        if (targetScrollPosition >= maxScroll) {
          setTimeout(() => {
            setIsScrolling(false);
            globalScrollingSection = null;
            document.body.style.overflow = 'auto';
            // Add a small delay before next section can be activated
            setTimeout(() => {
              window.scrollBy(0, 1);
            }, 200);
          }, 200); // Reduced delay for faster completion
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'auto';
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isScrolling]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 bg-white"
    >
      
      <div className="px-6 relative z-10">
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

        {/* Auto-scrolling Cards Container */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Duplicate cards for seamless loop */}
          {[...productByMaterialData, ...productByMaterialData].map((category, cardIndex) => (
            <Link
              key={`${category.slug}-${cardIndex}`}
              href={`/products/product-by-material/${category.slug}`}
              className="bg-white rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 block"
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
    </section>
  );
};

export default ByMaterialCarasoul;
