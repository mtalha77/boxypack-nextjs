"use client"
import React, { useEffect, useState } from 'react';
import BoxDesignGallery from './components/homepage/box-design-gallery';
import VideoSection from './components/homepage/successed-with-custom';
import MoreThanPackage from './components/homepage/more-than-package';
import FAQ from './components/homepage/faq';
import HeroVideoSection from './components/homepage/HeroVideoSection';
import ProductByMaterialCarousel from './components/ProductByMaterialCarousel';
import ProductByIndustryCarousel from './components/ProductByIndustryCarousel';
import CTASection from './components/product-design-page/CTASection';
import ComingSoon from './components/ComingSoon';

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(true); // Set to true to show coming soon, false to show normal homepage

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
    
    // Set coming soon state from environment variable (defaults to true if not set)
    const comingSoonEnv = process.env.NEXT_PUBLIC_SHOW_COMING_SOON;
    if (comingSoonEnv !== undefined) {
      setShowComingSoon(comingSoonEnv === 'true');
    }
    
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

  // Show coming soon page if enabled
  if (showComingSoon) {
    return <ComingSoon />;
  }

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
      <CTASection 
        productData={{
          ctaTitle: "Ready to Get Started?",
          ctaDescription: "Let's create the perfect packaging solution for your brand. Our team is ready to help you every step of the way."
        }}
      />
    </div>
  );
};

export default HomePage;