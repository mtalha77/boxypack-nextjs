"use client"
import React, { useEffect, useState, lazy } from 'react';
import HeroVideoSection from './components/homepage/HeroVideoSection';
import CustomDimensionsForm from './components/CustomDimensionsForm';
import ComingSoon from './components/ComingSoon';
import LazyLoadWrapper from './components/LazyLoadWrapper';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load non-critical components
const BoxDesignGallery = lazy(() => import('./components/homepage/box-design-gallery'));
const MoreThanPackage = lazy(() => import('./components/homepage/more-than-package'));
const FAQ = lazy(() => import('./components/homepage/faq'));
const ProductByMaterialCarousel = lazy(() => import('./components/ProductByMaterialCarousel'));
const ProductByIndustryCarousel = lazy(() => import('./components/ProductByIndustryCarousel'));
const CTASection = lazy(() => import('./components/product-design-page/CTASection'));
const ScrollVideoSection = lazy(() => import('./components/homepage/box-sequence-images'));

const HomePage = () => {
  const [showComingSoon, setShowComingSoon] = useState(true);

  useEffect(() => {
    // Set coming soon state from environment variable (defaults to true if not set)
    const comingSoonEnv = process.env.NEXT_PUBLIC_SHOW_COMING_SOON;
    if (comingSoonEnv !== undefined) {
      setShowComingSoon(comingSoonEnv === 'true');
    }
  }, []);

  // Show coming soon page if enabled
  if (showComingSoon) {
    return <ComingSoon />;
  }

  return (
    <div className="relative">
      <PerformanceMonitor />
      {/* Critical above-the-fold content loads immediately */}
      <HeroVideoSection />
      <CustomDimensionsForm/>
      
      {/* Non-critical components load lazily with intersection observer */}
      <LazyLoadWrapper rootMargin="200px">
        <ScrollVideoSection/>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper rootMargin="150px">
        <BoxDesignGallery />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper rootMargin="150px">
        <ProductByMaterialCarousel/>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper rootMargin="150px">
        <ProductByIndustryCarousel/>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper rootMargin="100px">
        <MoreThanPackage />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper rootMargin="100px">
        <FAQ />
      </LazyLoadWrapper>
      
      <LazyLoadWrapper rootMargin="100px">
        <CTASection 
          productData={{
            ctaTitle: "Ready to Get Started?",
            ctaDescription: "Let's create the perfect packaging solution for your brand. Our team is ready to help you every step of the way."
          }}
        />
      </LazyLoadWrapper>
    </div>
  );
};

export default HomePage;