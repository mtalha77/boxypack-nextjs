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
import ScrollVideoSection from './components/homepage/box-sequence-images';
import CustomDimensionsForm from './components/CustomDimensionsForm';

const HomePage = () => {
  const [showComingSoon, setShowComingSoon] = useState(true); // Set to true to show coming soon, false to show normal homepage

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
      {/* <Hero /> */}
      <HeroVideoSection />
      <CustomDimensionsForm/>
      <ScrollVideoSection/>
      <BoxDesignGallery />
      {/* <VideoSection /> */}
      <ProductByMaterialCarousel/>
      <ProductByIndustryCarousel/>
      
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