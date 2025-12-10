"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import CustomDimensionsForm from "../components/CustomDimensionsForm";
import FeaturesSection from "../components/product-page/WhyChooseUs";
import CTASection from "../components/product-page/CTASection";
import ClientTestimonials from "../components/product-page/ClientTestaminials";
import ProductOverview from "../components/product-page/ProductOverview";
import ProductKeyFeatures from "../components/product-page/ProductKeyFeatures";
import ProductFAQSection from "../components/product-page/ProductFAQSection";
import ProductCustomization from "../components/product-page/ProductCustomization";

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
    overview?: {
      heading?: string;
      title?: string;
      paragraphs?: string[];
    };
    faq?: {
      eyebrow?: string;
      heading?: string;
      items: Array<{
        question: string;
        answer: string;
      }>;
    };
    keyFeatures?: string[];
  };
}

const ProductsDesignPage: React.FC<ProductPageProps> = ({ productData }) => {
  // Convert features array to keyFeatures array for ProductKeyFeatures component
  const keyFeatures = productData.keyFeatures || 
    productData.features?.map(f => f.description || f.title) || [];

  return (
    <div className="">
      <HeroSection productData={productData} />
      <CustomDimensionsForm 
        initialProductSlug={productData.slug}
        productSlug={productData.slug}
      />

      {/* Product Overview Section */}
      <ProductOverview 
        productData={{
          name: productData.name,
          description: productData.description,
          overview: productData.overview,
          images: productData.galleryImages,
          heroImage: productData.heroImage,
          slug: productData.slug
        }}
        sectionSlug={productData.slug}
      />

      {/* Customization Details */}
      <ProductCustomization 
        productData={{
          slug: productData.slug || '',
          name: productData.name,
          description: productData.description,
          heroImage: productData.heroImage,
          modelPath: productData.modelPath,
          features: productData.features,
          ctaTitle: productData.ctaTitle,
          ctaDescription: productData.ctaDescription,
          customization: undefined,
        }} 
      />

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <ProductKeyFeatures
          features={keyFeatures}
          heading="Key Features"
          subheading={`${productData.name} Highlights`}
        />
      )}

      {/* Features Section */}
      <FeaturesSection productData={{ ...productData, slug: productData.slug || "" }} />

      {/* Testimonials Section */}
      <ClientTestimonials productData={productData} />

      {/* Frequently Asked Questions */}
      {productData.faq && <ProductFAQSection faq={productData.faq} />}

      {/* CTA Section - Ready to Get Started */}
      <CTASection
        productData={{
          cta: {
            title: productData.ctaTitle,
            description: productData.ctaDescription,
          },
        }}
      />
    </div>
  );
};

export default ProductsDesignPage;
