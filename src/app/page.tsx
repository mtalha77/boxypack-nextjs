"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import HowItWorks from './components/homepage/how-it-works';
import BoxDesignGallery from './components/homepage/box-design-gallery';
import VideoSection from './components/homepage/successed-with-custom';
import MoreThanPackage from './components/homepage/more-than-package';
import FAQ from './components/homepage/faq';
import RequestQuote from './components/homepage/request-quote';
import ProductGallery from './components/product-design-page/ProductGallery';

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Calculate scroll progress (0 to 1)
  const scrollProgress = typeof window !== 'undefined' 
    ? Math.min(scrollY / (window.innerHeight * 0.8), 1)
    : 0;
  
  // Text animations
  const textTranslateY = scrollY * -0.5; // Text moves up
  const textOpacity = Math.max(1 - scrollProgress * 1.5, 0);
  
  // Labels appear after boxes settle
  const labelsOpacity = Math.max((scrollProgress - 0.7) * 3.33, 0);
  const labelsTranslateY = Math.max((1 - scrollProgress) * 30, 0);

  // Box configurations
  const boxes = [
    {
      id: 'folding',
      title: 'Folding Box',
      description: 'This slim box style is perfect for showcasing smaller products.',
      // Initial scattered position
      initialX: -180,
      initialY: -180,
      initialRotate: -15,
      initialScale: 1.3,
      // Final grid position
      gridColumn: 1,
      gridRow: 1,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-[#b27635]/20 to-white rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[#b27635]/20"></div>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-[#b27635] rounded-full"></div>
            <span className="text-[#714622] font-bold text-sm">STACK</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <div className="h-2 bg-[#b27635]/50 rounded"></div>
            <div className="h-2 bg-[#97602f]/50 rounded w-3/4"></div>
            <div className="h-2 bg-[#b27635]/50 rounded w-1/2"></div>
          </div>
        </div>
      )
    },
    {
      id: 'rigid',
      title: 'Rigid Box',
      description: 'An elegant approach to packaging, the rigid gift box just oozes with luxury.',
      initialX: 150,
      initialY: -140,
      initialRotate: 12,
      initialScale: 1.25,
      gridColumn: 2,
      gridRow: 1,
      content: (
        <div className="w-full h-full bg-gradient-to-r from-[#b27635] to-[#97602f] rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white rounded-b-lg flex items-center justify-center">
            <span className="text-[#b27635] font-bold italic text-2xl">volta</span>
          </div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      id: 'mailer',
      title: 'Mailer Box',
      description: 'The best way to ship out your goods but with an added WOW factor.',
      initialX: -200,
      initialY: 40,
      initialRotate: -8,
      initialScale: 1.35,
      gridColumn: 3,
      gridRow: 1,
      content: (
        <div className="w-full h-full bg-white rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0ca6c2] via-[#46959c] to-[#0c6b76] opacity-40"></div>
          <div className="absolute left-4 top-4 text-[#0c6b76] font-bold text-lg">Walmart</div>
          <div className="absolute bottom-4 right-4">
            <div className="w-12 h-12 bg-[#0ca6c2]/20 rounded-lg"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#0ca6c2]/50 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping Box',
      description: 'The shipping box is your big ol\' moving box. Custom printed with your branding.',
      initialX: 180,
      initialY: 60,
      initialRotate: 10,
      initialScale: 1.2,
      gridColumn: 4,
      gridRow: 1,
      content: (
        <div className="w-full h-full bg-white rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-t-lg"></div>
          <div className="absolute top-4 right-4 text-white font-bold text-sm">NONE TIME</div>
          <div className="absolute bottom-6 left-6">
            <div className="text-[#0c6b76] text-4xl font-bold">»</div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
            <span className="text-[#0c6b76] text-xl">✓</span>
          </div>
        </div>
      )
    }
  ];

  // Interpolate between initial and final positions
  const interpolate = (start: number, end: number, progress: number): number => {
    return start + (end - start) * progress;
  };

  return (
    <div className="relative">
      {/* Main Section - Hero + Products */}
      <section ref={sectionRef} className="relative min-h-[150vh] bg-gradient-to-br from-[#0c6b76] via-[#0ca6c2] to-[#46959c] overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        
                 {/* Container for everything */}
         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32">
           
           {/* Hero Text Content */}
           <div 
             className="text-center text-white space-y-6 z-20 max-w-4xl mx-auto mb-16"
             style={{
               transform: `translateY(${textTranslateY}px)`,
               opacity: textOpacity
             }}
           >
             <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
             Custom boxes <br /> made easy <br />
             for retail
             </h1>
             <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
               Showcase your brand with our high-quality made-to-order printed packaging 
               and leave a lasting unboxing impression.
             </p>
             <button className="group bg-[#b27635] hover:bg-[#97602f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
               Customize your Box
               <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>

          {/* Products Grid Container */}
          <div className="relative pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {boxes.map((box, index) => {
                // Calculate current position based on scroll
                const currentX = interpolate(box.initialX, 0, scrollProgress);
                const currentY = interpolate(box.initialY, 0, scrollProgress);
                const currentRotate = interpolate(box.initialRotate, 0, scrollProgress);
                const currentScale = interpolate(box.initialScale, 1, scrollProgress);
                
                return (
                  <div key={box.id} className="relative">
                    {/* Box Container */}
                    <div className="text-center text-white space-y-4">
                      {/* The Box itself - animates from scattered to grid */}
                      <div className="h-44 flex items-center justify-center mb-4 relative">
                        <div 
                          className="w-48 h-44 absolute transform transition-none"
                          style={{
                            transform: `
                              translate(${currentX}px, ${currentY}px) 
                              rotate(${currentRotate}deg) 
                              scale(${currentScale})
                            `,
                            zIndex: 10 - index
                          }}
                        >
                          <div className="w-full h-full transform hover:scale-105 transition-transform duration-300">
                            {box.content}
                          </div>
                        </div>
                      </div>
                      
                      {/* Labels - Fade in after boxes settle */}
                      <div 
                        style={{
                          opacity: labelsOpacity,
                          transform: `translateY(${labelsTranslateY}px)`,
                          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                        }}
                      >
                        <h3 className="text-2xl font-bold">{box.title}</h3>
                        <p className="text-white/80 text-sm mt-2">
                          {box.description}
                        </p>
                        <button className="bg-[#b27635] hover:bg-[#97602f] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 mt-4">
                          Customize it
                        </button>
                        <a href="#" className="block text-white/70 hover:text-white text-sm transition-colors mt-3">
                          About our {box.title}es
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
          style={{
            opacity: textOpacity
          }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        {/* Additional Content Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Custom Box?</h2>
          <p className="text-xl text-white/80 mb-8">Start designing your perfect packaging solution today</p>
          <button className="bg-[#b27635] hover:bg-[#97602f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
      </section>

      

      {/* <HowItWorks /> */}
      <ProductGallery/>
      <VideoSection />
      <BoxDesignGallery />
      <MoreThanPackage />
      <FAQ />     
      <RequestQuote />
      
      


    </div>
  );
};

export default ParallaxHero;