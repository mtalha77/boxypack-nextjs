'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productByIndustryData } from '../../data/productByIndustryData';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ByIndustryCarasoul: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !cardsContainerRef.current) return;

    // Set initial state to prevent jerky start
    gsap.set(cardsContainerRef.current, { x: 0 });

    const tl = gsap
      .timeline({
        defaults: {
          ease: "none",
          duration: 1
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", // Reduced scroll distance for faster card movement
          pin: true,
          scrub: 0.5, // Faster response to scroll
          markers: false,
          anticipatePin: 1,
          refreshPriority: -1,
          onUpdate: (self) => {
            // Smooth progress calculation with faster movement
            if (!cardsContainerRef.current) return;
            const progress = self.progress;
            const maxScroll = cardsContainerRef.current.clientWidth - cardsContainerRef.current.scrollWidth;
            const currentX = progress * maxScroll;
            gsap.set(cardsContainerRef.current, { x: currentX });
          }
        }
      });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className=" bg-white relative overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ca6c2' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-screen flex flex-col justify-start pt-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
            PRODUCT BY INDUSTRY
          </div>
          <h2 className="text-4xl font-bold text-[#0c6b76] mb-4 leading-tight">
            Browse by Industry
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Scroll to discover our comprehensive range of packaging solutions organized by industry.
          </p>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="horizontal-center w-full h-80 flex items-center justify-center pt-16">
            <div 
              ref={cardsContainerRef}
              className="cards-container w-full flex flex-nowrap gap-6"
            >
          {[...productByIndustryData, ...productByIndustryData].map((category, cardIndex) => (
            <Link
              key={`${category.slug}-${cardIndex}`}
              href={`/products/product-by-industry/${category.slug}`}
                  className="card-center bg-white rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden group cursor-pointer block"
                  style={{ width: "300px", height: "380px" }}
            >
                  <div className="relative h-56 overflow-hidden p-6 flex items-center justify-center">
                <Image
                      src={category.image}
                      width={220}
                      height={160}
                  alt={category.name}
                      className="object-contain rounded-lg"
                />
                {/* Gradient overlay */}
                    <div className="absolute inset-6 bg-gradient-to-t from-[#0c6b76]/20 to-transparent rounded-lg"></div>
              </div>
                  <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-[#0c6b76]/10 text-[#0c6b76] text-xs font-semibold rounded-full">
                    Industry Category
                  </span>
                  <span className="inline-block px-2 py-1 bg-[#0ca6c2]/10 text-[#0ca6c2] text-xs font-semibold rounded-full ml-2">
                    {category.subcategoriesCount} Products
                  </span>
                </div>
                    <h4 className="text-lg font-bold text-[#0c6b76] mb-2 group-hover:text-[#0ca6c2] transition-colors duration-300">
                  {category.name}
                </h4>
                    <p className="text-gray-600 text-sm">
                      Custom packaging solution for {category.name.toLowerCase()}
                    </p>
              </div>
            </Link>
          ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ByIndustryCarasoul;