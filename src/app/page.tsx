"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components that use CldImage to prevent SSR issues
const BoxDesignGallery = dynamic(() => import('./components/homepage/box-design-gallery'), { ssr: false });
const VideoSection = dynamic(() => import('./components/homepage/successed-with-custom'), { ssr: false });
const MoreThanPackage = dynamic(() => import('./components/homepage/more-than-package'), { ssr: false });
const FAQ = dynamic(() => import('./components/homepage/faq'), { ssr: false });
const HeroVideoSection = dynamic(() => import('./components/homepage/HeroVideoSection'), { ssr: false });
const ProductByMaterialCarousel = dynamic(() => import('./components/ProductByMaterialCarousel'), { ssr: false });
const ProductByIndustryCarousel = dynamic(() => import('./components/ProductByIndustryCarousel'), { ssr: false });
const CTASection = dynamic(() => import('./components/product-design-page/CTASection'), { ssr: false });
const ComingSoon = dynamic(() => import('./components/ComingSoon'), { ssr: false });
const ScrollVideoSection = dynamic(() => import('./components/homepage/images-scroll-animation'), { ssr: false });
const CustomDimensionsForm = dynamic(() => import('./components/CustomDimensionsForm'), { ssr: false });

const HomePage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false); // Set to true to show coming soon, false to show normal homepage

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
      <CTASection />
    </div>
  );
};

export default HomePage;