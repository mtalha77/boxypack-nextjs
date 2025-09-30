"use client"
import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import GradientBackground from '../../UI/GradientBackground';

const HeroVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set video attributes for better performance
      video.preload = 'metadata'; // Only load metadata initially
      video.muted = true; // Ensure muted for autoplay
      video.playsInline = true; // Prevent fullscreen on mobile
      
      // Play video with error handling
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error);
          // Fallback: show poster image or placeholder
        });
      }
    }
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <GradientBackground 
        className="absolute inset-0"
        // fromColor="#0f9db7"
        // toColor="#a8f0ff"
        // direction="to-r"
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center md:pl-20 pl-0 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
          {/* Left Content */}
          <div className="text-left text-white">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Buy Custom Boxes That Build Brands
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
            Order custom boxes built with care, giving your brand presence and reliable boxes that protect products while creating lasting impressions.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
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
                className="group bg-[#0c6b76] hover:bg-[#0a5a63] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer flex items-center justify-center min-h-[56px]"
              >
                Order Custom Packaging
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.location.href = '/contact-us#contact-section'}
                className="border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[56px]"
              >
                Get Free Quote
              </button>
            </div>
            
            {/* Additional Value Proposition */}
            <div className="mt-8 flex flex-wrap gap-6 text-white/80 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#0ca6c2] rounded-full mr-2"></div>
                <span>Instant Pricing & Ordering</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#0ca6c2] rounded-full mr-2"></div>
                <span>Fast 8-Day Production</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#0ca6c2] rounded-full mr-2"></div>
                <span>No Minimum Order</span>
              </div>
            </div>
          </div>
          
          {/* Right Video */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-xl h-auto relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/img/products-box-img.png" // Fallback poster image
                style={{ mixBlendMode: 'multiply' }}
              >
                <source src="/video/Box.webm" type="video/webm" />
                <source src="/video/box-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSection;
