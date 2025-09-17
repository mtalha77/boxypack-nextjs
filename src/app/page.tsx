"use client"
import React, { useEffect } from 'react';
import BoxDesignGallery from './components/homepage/box-design-gallery';
import VideoSection from './components/homepage/successed-with-custom';
import MoreThanPackage from './components/homepage/more-than-package';
import FAQ from './components/homepage/faq';
import RequestQuote from './components/homepage/request-quote';
import HeroVideoSection from './components/homepage/HeroVideoSection';
import ByMaterialCarasoul from './components/homepage/ByMaterialCarasoul';
import ByIndustryCarasoul from './components/homepage/ByIndustryCarasoul';

const HomePage = () => {
  useEffect(() => {
    // Handle hash navigation for smooth scrolling
    const handleHashScroll = () => {
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
    };

    // Check for hash on component mount
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* <Hero /> */}
      <HeroVideoSection />
      <VideoSection />
      <ByMaterialCarasoul />
      <ByIndustryCarasoul />
      <BoxDesignGallery />
      <MoreThanPackage />
      <FAQ />     
      <RequestQuote />
    </div>
  );
};

export default HomePage;