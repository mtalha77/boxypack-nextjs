"use client"
import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import GradientBackground from '../GradientBackground';

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
    <section className="relative h-[80vh] w-full overflow-hidden">
      <GradientBackground 
        className="absolute inset-0"
        fromColor="#0f9db7"
        toColor="#a8f0ff"
        direction="to-r"
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center md:pl-20 pl-0 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
          {/* Left Content */}
          <div className="text-left text-white">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Custom Boxes <br />
              Made Easy
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
              Showcase your brand with our high-quality made-to-order printed packaging 
              and leave a lasting unboxing impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <button className="group bg-brown-rustic hover:bg-[#714622] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center min-h-[56px]">
                Customize your Box
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center min-h-[56px]">
                View Products
              </button>
            </div>
          </div>
          
          {/* Right Video */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-lg h-auto relative">
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
