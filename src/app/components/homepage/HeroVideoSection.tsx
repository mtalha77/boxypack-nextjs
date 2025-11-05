"use client"
import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import GradientBackground from '../../UI/GradientBackground';

const HeroVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="relative h-[90vh] md:h-[80vh] w-full overflow-hidden md:overflow-hidden overflow-visible pb-8 md:pb-0">
      <GradientBackground 
        className="absolute inset-0"
        // fromColor="#0f9db7"
        // toColor="#a8f0ff"
        // direction="to-r"
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center md:pl-20 pl-0 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 w-full items-center px-4 lg:px-0 lg:pl-20">
          {/* Video - Top on mobile, Right on desktop */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="w-full max-w-sm md:max-w-xl h-auto relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                style={{ mixBlendMode: 'multiply' }}
              >
                <source src="/video/Box.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Content - Bottom on mobile, Left on desktop */}
          <div className="text-left text-white order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 lg:mb-6">
            Design & Order{" "} <span className='bg-gradient-to-r from-brown-dark to-[#97602f] bg-clip-text text-transparent'>Premium Custom Packaging</span> {" "} and Printed Boxes
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-1.5xl text-white/90 mb-4 lg:mb-8 max-w-2xl">
            Design your own custom packaging and boxes with full customization options, professional printing, and trusted support for every business type.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-stretch">
              <button 
                onClick={() => {
                  // Scroll to the CustomDimensionsForm section on the homepage
                  const formSection = document.querySelector('.custom-dimensions-form');
                  if (formSection) {
                    formSection.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'start' 
                    });
                  }
                }}
                className="group bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer flex items-center justify-center min-h-[48px] lg:min-h-[56px]"
              >
                Order Custom Packaging
                <ChevronRight className="inline-block ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.location.href = '/contact-us#contact-section'}
                className="border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[48px] lg:min-h-[56px]"
              >
                Get Free Quote
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
