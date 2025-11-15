'use client';

import React from 'react';
import HeroSection from '../components/product-design-page/HeroSection';
import CustomDimensionsForm from '../components/CustomDimensionsForm';
import FeaturesSection from '../components/product-design-page/FeaturesSection';
import CTASection from '../components/product-design-page/CTASection';
import ClientTestimonials from '../components/product-design-page/ClientTestamonials';
import RelatedProducts from '../components/RelatedProducts';
import ContactUs from '../components/contactUs/ContactUs';

interface ProductPageProps {
  productData: {
    name: string;
    description: string;
    heroImage: string;
    modelPath: string;
    slug?: string; // Add slug for product identification
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
      <CustomDimensionsForm initialProductSlug={productData.slug} />
      {/* <ProductGallery /> */}
      <FeaturesSection productData={productData} />
      {/* <SpecificationsSection productData={productData} */} 
      
      {/* Related Products Section */}
      <RelatedProducts
        currentSection={undefined}
        currentCategory={undefined}
        currentSubcategory={undefined}
        pageType="section"
        maxItems={6}
      />
      
      {/* Testimonials Section */}
      <ClientTestimonials productData={productData} />
      
      {/* CTA Section - Ready to Get Started */}
      <CTASection />
      
      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
};

export default ProductsDesignPage;
