'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { navigationData } from '../data/navigationData';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProductGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Get industry categories from navigation data
  const industrySection = navigationData.find(section => section.slug === 'product-by-industry');
  const industryCategories = industrySection?.categories || [];

  // Create cards from industry categories
  const cards = industryCategories.map(category => ({
    title: category.name,
    description: category.description || `Premium ${category.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`,
    category: "Industry Category",
    image: getCategoryImage(category.slug),
    slug: category.slug,
    subcategoriesCount: category.subcategories?.length || 0
  }));

  // Helper function to get appropriate image for each category
  function getCategoryImage(slug: string): string {
    const imageMap: { [key: string]: string } = {
      'bakery-boxes': '/img/product-box-2.jpg',
      'cosmetic-boxes': '/img/products-box-img.png',
      'food-boxes': '/img/mailer-box.jpg',
      'gift-boxes': '/img/Product-Packaging-Boxes.webp',
      'jewelry-boxes': '/img/products-box-img.png',
      'retail-boxes': '/img/product-box-2.jpg',
      'candle-boxes': '/img/Product-Packaging-Boxes.webp',
      'shipping-boxes-industry': '/img/shipping-box.jpg',
      'soap-boxes-industry': '/img/products-box-img.png',
      'apparel-boxes': '/img/product-box-2.jpg',
      'sports-boxes': '/img/shipping-box.jpg',
      'cigarette-boxes-industry': '/img/mailer-box.jpg',
      'cbd-boxes': '/img/products-box-img.png',
      'e-liquid-boxes': '/img/product-box-2.jpg',
      'stationery-boxes': '/img/3.png',
      'christmas-boxes': '/img/Product-Packaging-Boxes.webp',
      'chocolate-boxes': '/img/product-box-2.jpg',
      'cereal-boxes': '/img/products-box-img.png',
      'pre-roll-boxes-industry': '/img/mailer-box.jpg',
      'pizza-boxes': '/img/shipping-box.jpg'
    };
    return imageMap[slug] || '/img/products-box-img.png';
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !cardsContainerRef.current) return;

    let scrollTriggerInstance: ScrollTrigger | null = null;

    // Set initial state to prevent jerky start
    gsap.set(cardsContainerRef.current, { x: 0 });

    // Create ScrollTrigger with proper error handling
    try {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
        markers: false,
        anticipatePin: 1,
        refreshPriority: -1,
        onUpdate: (self) => {
          // Check if elements still exist before updating
          if (!cardsContainerRef.current || !sectionRef.current) return;
          
          try {
            const progress = self.progress;
            const maxScroll = cardsContainerRef.current.clientWidth - cardsContainerRef.current.scrollWidth;
            const currentX = progress * maxScroll;
            gsap.set(cardsContainerRef.current, { x: currentX });
          } catch (error) {
            console.warn('GSAP animation error:', error);
          }
        }
      });
    } catch (error) {
      console.warn('ScrollTrigger creation error:', error);
    }

    // Cleanup function
    return () => {
      try {
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill();
        }
        // Also kill any remaining ScrollTriggers for this component
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      } catch (error) {
        console.warn('ScrollTrigger cleanup error:', error);
      }
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
            INDUSTRY CATEGORIES
          </div>
          <h2 className="text-4xl font-bold text-[#0c6b76] mb-6 leading-tight">
            Browse by Industry
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of packaging solutions organized by industry. Each category contains specialized packaging options tailored to specific business needs.
          </p>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="horizontal-center w-full h-80 flex items-center justify-center">
            <div 
              ref={cardsContainerRef}
              className="cards-container w-full flex flex-nowrap gap-6"
            >
              {cards.map((card, cardIndex) => (
                <Link
                  key={cardIndex}
                  href={`/products/product-by-industry/${card.slug}`}
                  className="card-center bg-white rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block"
                  style={{ width: "300px", height: "400px" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-[#0c6b76]/10 text-[#0c6b76] text-xs font-semibold rounded-full">
                        {card.category}
                      </span>
                      <span className="inline-block px-2 py-1 bg-[#0ca6c2]/10 text-[#0ca6c2] text-xs font-semibold rounded-full ml-2">
                        {card.subcategoriesCount} Products
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#0c6b76] mb-3 group-hover:text-[#0ca6c2] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
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

export default ProductGallery;