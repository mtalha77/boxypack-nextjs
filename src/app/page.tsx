"use client"
import React from 'react';
import BoxDesignGallery from './components/homepage/box-design-gallery';
import VideoSection from './components/homepage/successed-with-custom';
import MoreThanPackage from './components/homepage/more-than-package';
import FAQ from './components/homepage/faq';
import RequestQuote from './components/homepage/request-quote';
import HeroVideoSection from './components/homepage/HeroVideoSection';
import ByMaterialCarasoul from './components/homepage/ByMaterialCarasoul';
import ByIndustryCarasoul from './components/homepage/ByIndustryCarasoul';

const HomePage = () => {
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