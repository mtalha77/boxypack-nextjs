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
    <>
      {/* Separate styles for very small screens (iPhone SE - 375px) */}
      <style jsx>{`
        @media (max-width: 375px) {
          .home-hero-section-xs {
            min-height: 85vh;
            height: auto;
            padding-bottom: 1rem;
          }
          .home-hero-container-xs {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .home-hero-grid-xs {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            gap: 1rem;
          }
          .home-hero-video-xs {
            max-width: 240px;
          }
          .home-hero-title-xs {
            font-size: 1.5rem;
            line-height: 1.3;
            margin-bottom: 0.75rem;
          }
          .home-hero-description-xs {
            font-size: 0.75rem;
            line-height: 1.5;
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .home-hero-buttons-xs {
            gap: 0.625rem;
          }
          .home-hero-button-primary-xs {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
            font-size: 0.75rem;
            min-height: 40px;
            width: 100%;
          }
          .home-hero-button-secondary-xs {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
            font-size: 0.75rem;
            min-height: 40px;
            width: 100%;
          }
          .home-hero-icon-xs {
            width: 0.875rem;
            height: 0.875rem;
            margin-left: 0.375rem;
          }
        }
        
        /* Separate styles for iPad Mini and iPad Air */
        @media (min-width: 768px) and (max-width: 820px) {
          .home-hero-section-ipad {
            height: 85vh;
            padding-bottom: 1.5rem;
          }
          .home-hero-container-ipad {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .home-hero-grid-ipad {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            gap: 2rem;
          }
          .home-hero-video-ipad {
            max-width: 400px;
          }
          .home-hero-title-ipad {
            font-size: 2.25rem;
            line-height: 1.3;
            margin-bottom: 1rem;
          }
          .home-hero-description-ipad {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
          }
          .home-hero-buttons-ipad {
            gap: 1rem;
          }
          .home-hero-button-primary-ipad {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
            font-size: 0.875rem;
            min-height: 44px;
          }
          .home-hero-button-secondary-ipad {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
            font-size: 0.875rem;
            min-height: 44px;
          }
        }
        
        @media (min-width: 1024px) and (max-width: 1180px) {
          .home-hero-section-ipad-landscape {
            height: 75vh;
          }
          .home-hero-container-ipad-landscape {
            padding-left: 3rem;
            padding-right: 3rem;
          }
          .home-hero-grid-ipad-landscape {
            gap: 3rem;
          }
          .home-hero-video-ipad-landscape {
            max-width: 500px;
          }
          .home-hero-title-ipad-landscape {
            font-size: 2.75rem;
            line-height: 1.3;
            margin-bottom: 1.25rem;
          }
          .home-hero-description-ipad-landscape {
            font-size: 1.125rem;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
        }
      `}</style>
      <section className="relative h-[90vh] md:h-[80vh] w-full overflow-hidden md:overflow-hidden overflow-visible pb-8 md:pb-0 home-hero-section-xs home-hero-section-ipad home-hero-section-ipad-landscape">
      <GradientBackground 
        className="absolute inset-0"
        // fromColor="#0f9db7"
        // toColor="#a8f0ff"
        // direction="to-r"
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center md:pl-20 pl-0 px-4 lg:px-0 home-hero-container-xs home-hero-container-ipad home-hero-container-ipad-landscape">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 w-full items-center px-4 lg:px-0 lg:pl-20 home-hero-grid-xs home-hero-grid-ipad home-hero-grid-ipad-landscape">
          {/* Video - Top on mobile, Right on desktop */}
          <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="w-full max-w-sm md:max-w-xl h-auto relative home-hero-video-xs home-hero-video-ipad home-hero-video-ipad-landscape">
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
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 lg:mb-6 home-hero-title-xs home-hero-title-ipad home-hero-title-ipad-landscape">
            Design & Order{" "} <span className='bg-gradient-to-r from-brown-dark to-[#97602f] bg-clip-text text-transparent'>Premium Custom Packaging</span> {" "} and Printed Boxes
            </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-1.5xl text-white/90 mb-4 lg:mb-8 max-w-2xl home-hero-description-xs home-hero-description-ipad home-hero-description-ipad-landscape">
            Design your own custom packaging and boxes with full customization options, professional printing, and trusted support for every business type.
            </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-stretch home-hero-buttons-xs home-hero-buttons-ipad">
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
                  className="group bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer flex items-center justify-center min-h-[48px] lg:min-h-[56px] home-hero-button-primary-xs home-hero-button-primary-ipad"
              >
                Order Custom Packaging
                  <ChevronRight className="inline-block ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform home-hero-icon-xs" />
              </button>
              <button 
                onClick={() => window.location.href = '/contact-us#contact-section'}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[48px] lg:min-h-[56px] home-hero-button-secondary-xs home-hero-button-secondary-ipad"
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
    </>
  );
};

export default HeroVideoSection;
