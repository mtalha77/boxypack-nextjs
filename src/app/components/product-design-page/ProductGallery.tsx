'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProductGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    { title: "Shipping Boxes", image: "/img/shipping-box.jpg" },
    { title: "Product Boxes", image: "/img/product-box-2.jpg" },
    { title: "Mailer Boxes", image: "/img/mailer-box.jpg" },
    { title: "Rigid Boxes", image: "/img/Product-Packaging-Boxes.webp" },
    { title: "Pouches", image: "/img/products-box-img.png" },
    { title: "Shopping Bags", image: "/img/2.png" },
    { title: "Luxury Boxes", image: "/img/Product-Packaging-Boxes.webp" },
    { title: "Gift Boxes", image: "/img/product-box-2.jpg" },
    { title: "Shoe Boxes", image: "/img/shipping-box.jpg" },
    { title: "Jewelry Boxes", image: "/img/mailer-box.jpg" },
    { title: "Handbag Boxes", image: "/img/products-box-img.png" },
    { title: "Accessory Boxes", image: "/img/3.png" },
    { title: "Makeup Boxes", image: "/img/product-box-2.jpg" },
    { title: "Skincare Boxes", image: "/img/Product-Packaging-Boxes.webp" },
    { title: "Perfume Boxes", image: "/img/shipping-box.jpg" },
    { title: "Gift Sets", image: "/img/mailer-box.jpg" },
    { title: "Sample Boxes", image: "/img/products-box-img.png" },
    { title: "Display Boxes", image: "/img/4.png" }
  ];

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
        <div className="text-center mb-8">
          <div className="inline-flex items-center border-2 border-brown-dark2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-brown-dark2 font-bold text-sm font-semibold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-brown-dark2 rounded-full mr-3"></div>
            INDUSTRIES
          </div>
          <h2 className="text-4xl font-bold text-[#0c6b76] mb-4 leading-tight">
            Explore Our Packaging Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Scroll to discover our wide range of custom packaging options designed for every need.
          </p>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="horizontal-center w-full h-80 flex items-center justify-center">
            <div 
              ref={cardsContainerRef}
              className="cards-container w-full flex flex-nowrap gap-6"
            >
              {cards.map((card, cardIndex) => (
                <div 
                  key={cardIndex}
                  className="card-center bg-white rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ width: "300px", height: "320px" }}
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
                    <h4 className="text-lg font-bold text-[#0c6b76] mb-2 group-hover:text-[#0ca6c2] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Custom packaging solution for {card.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;