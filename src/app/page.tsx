"use client"
import React, { useEffect, useState } from 'react';
import BoxDesignGallery from './components/homepage/box-design-gallery';
import VideoSection from './components/homepage/successed-with-custom';
import MoreThanPackage from './components/homepage/more-than-package';
import FAQ from './components/homepage/faq';
import RequestQuote from './components/homepage/request-quote';
import HeroVideoSection from './components/homepage/HeroVideoSection';
import ProductByMaterialCarousel from './components/ProductByMaterialCarousel';
import ProductByIndustryCarousel from './components/ProductByIndustryCarousel';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
    
    // Handle hash navigation for smooth scrolling
    const handleHashScroll = () => {
      try {
        const hash = window.location.hash;
        if (hash) {
          // Add a small delay to ensure the page is fully rendered
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
            }
          }, 100);
        }
      } catch (error) {
        console.warn('Hash scroll error:', error);
      }
    };

    // Check for hash on component mount
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  // Prevent hydration mismatch by only rendering on client
  if (!isClient) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c6b76]"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* <Hero /> */}
      <HeroVideoSection />
      <VideoSection />
      <ProductByMaterialCarousel/>
      <ProductByIndustryCarousel/>
      <BoxDesignGallery />
      <MoreThanPackage />
      <FAQ />
      <RequestQuote />
    </div>
  );
};

export default HomePage;