'use client';

import React from 'react';
import HeroSection from '../components/product-design-page/HeroSection';
import FeaturesSection from '../components/product-design-page/FeaturesSection';
import CTASection from '../components/product-design-page/CTASection';
import ClientTestimonials from '../components/product-design-page/ClientTestamonials';
import AllProducts from '../components/all-products-carasoul';

interface ProductPageProps {
  productData: {
    name: string;
    description: string;
    heroImage: string;
    modelPath: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    specifications: Array<{
      label: string;
      value: string;
    }>;
    sizes: Array<{
      name: string;
      dimensions: string;
      price: string;
    }>;
    galleryImages: string[];
    customizationOptions: string[];
    ctaTitle: string;
    ctaDescription: string;
  };
}

const ProductsDesignPage: React.FC<ProductPageProps> = ({ productData }) => {
  return (
    <div className="">
      <HeroSection productData={productData} />
      {/* <ProductGallery /> */}
      <AllProducts/>
      <FeaturesSection productData={productData} />
      <ClientTestimonials productData={productData} />
      {/* <SpecificationsSection productData={productData} /> */}
      <CTASection productData={productData} />
      
    </div>
  );
};

export default ProductsDesignPage;
