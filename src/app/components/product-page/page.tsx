'use client';

import React from 'react';
import { NavigationSection, MainCategory, SubCategory } from '../../data/navigationData';
import { productData, getProductDataBySlug } from '../../data/productPagesData';
import { Product } from '@/lib/hooks/useProducts';
import HeroSection, { BreadcrumbItem } from '../product-design-page/HeroSection';
import CustomDimensionsForm from '../CustomDimensionsForm';
import FeaturesSection from '../product-design-page/FeaturesSection';
import ClientTestamonials from '../product-design-page/ClientTestamonials';
import CTASection from '../product-design-page/CTASection';
import SubcategoryCards from './SubcategoryCards';
import ErrorBoundary from '../ErrorBoundary';
import GradientBackground from '../../UI/GradientBackground';
import ProductByMaterialCarousel from '../ProductByMaterialCarousel';
import ProductByIndustryCarousel from '../ProductByIndustryCarousel';
import RelatedProducts from '../RelatedProducts';
import ProductOverview from './ProductOverview';
import ProductCustomization from './ProductCustomization';
import ProductKeyFeatures from './ProductKeyFeatures';
import ProductFAQSection from './ProductFAQSection';
import ProductContactSection from './ProductContactSection';

interface ProductPageTemplateProps {
  section?: NavigationSection;
  category?: MainCategory;
  subcategory?: SubCategory;
  slug: string;
  pageType: 'section' | 'category' | 'subcategory';
}

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({
  section,
  category,
  subcategory,
  slug,
  pageType
}) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [dbProduct, setDbProduct] = React.useState<Product | null>(null);
  const [dbLoading, setDbLoading] = React.useState(true);

  // Ensure component only renders properly on client side
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Try to fetch product from database
  React.useEffect(() => {
    const fetchProductFromDB = async () => {
      try {
        setDbLoading(true);
        const product = await getProductDataBySlug(slug);
        if (product) {
          setDbProduct(product);
        }
      } catch (error) {
        console.warn('Failed to fetch product from database:', error);
      } finally {
        setDbLoading(false);
      }
    };

    if (isMounted) {
      fetchProductFromDB();
    }
  }, [slug, isMounted]);

  // Get product data if it exists in the legacy data structure
  const legacyProductData = productData[slug as keyof typeof productData];

  // Create dynamic product data based on the navigation structure
  const getProductData = (): Product | null => {
    if (dbProduct) {
      return dbProduct;
    }

    if (legacyProductData) {
      return legacyProductData as Product;
    }

    return null;
  };

  const productInfo = getProductData();

  if (!productInfo) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-body-primary">Product content unavailable</h1>
          <p className="text-body text-body-secondary max-w-xl">
            We couldn’t find product details for this page. Please check the product configuration in `productPagesData.ts` or try again later.
          </p>
        </div>
      </main>
    );
  }

  const keyFeatures = productInfo.keyFeatures ?? [];
  const customSubcategoryCards = productInfo.subcategoryCards && productInfo.subcategoryCards.items && productInfo.subcategoryCards.items.length > 0
    ? productInfo.subcategoryCards
    : undefined;
  const navigationSubcategories = customSubcategoryCards ? [] : (category?.subcategories || []);
  const shouldRenderSubcategories = (
    !!customSubcategoryCards?.items?.length ||
    ((pageType === 'category' || pageType === 'subcategory') && navigationSubcategories.length > 0)
  );

  // Generate breadcrumb data - show full hierarchy
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs = [
      { name: 'Home', href: '/' }
    ];

    // For subcategory pages (like /products/mylar-boxes/stand-up-pouche)
    if (subcategory && category && section) {
      // Show: Home > Category > Subcategory
      breadcrumbs.push({
        name: category.name,
        href: `/products/${section.slug}/${category.slug}`
      });
      breadcrumbs.push({
        name: subcategory.name,
        href: `/products/${section.slug}/${subcategory.slug}`
      });
    }
    // For category pages (like /products/product-by-material/rigid-boxes)
    else if (category && section) {
      // Show: Home > Category
      breadcrumbs.push({
        name: category.name,
        href: `/products/${section.slug}/${category.slug}`
      });
    }
    // For section pages (like /products/mylar-boxes, /products/shopping-bags, /products/other)
    else if (section && ['mylar-boxes', 'shopping-bags', 'other'].includes(section.slug)) {
      // Show: Home > Section
      breadcrumbs.push({
        name: section.name,
        href: `/products/${section.slug}`
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Show loading state during hydration or database fetch to prevent mismatch
  if (!isMounted || dbLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center relative">
        <GradientBackground 
          className="absolute inset-0"
        />
        <div className="text-white text-center relative z-10 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white mb-6"></div>
          <h2 className="text-2xl font-semibold mb-2">
            {!isMounted ? 'Loading...' : 'Fetching product data...'}
          </h2>
          <p className="text-lg text-white/80">
            Please wait while we load the product information
          </p>
        </div>
      </main>
    );
  }

  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section with Integrated Breadcrumb */}
        <HeroSection productData={productInfo} breadcrumbs={breadcrumbs} />

        {/* Custom Dimensions Form */}
        <CustomDimensionsForm />

        {/* Product Overview */}
        <ProductOverview productData={productInfo} />

        {/* Customization Details */}
        <ProductCustomization productData={productInfo} />

        {/* Subcategory Cards Section */}
        {shouldRenderSubcategories && (
          <SubcategoryCards
            subcategories={navigationSubcategories}
            parentCategoryName={category?.name || productInfo.name}
            parentCategorySlug={category?.slug || slug}
            sectionSlug={section?.slug || slug}
            customCards={customSubcategoryCards}
          />
        )}

        {/* Key Features */}
        <ProductKeyFeatures
          features={keyFeatures}
          heading="Key Features"
          subheading={productInfo.overview?.title || `${productInfo.name} Highlights`}
        />

        {/* Features Section */}
        <FeaturesSection productData={productInfo} />

        {/* Material Carousel - Show on product-by-material pages */}
        {section?.slug === 'product-by-material' && (
          <ProductByMaterialCarousel />
        )}

        {/* Industry Carousel - Show on product-by-industry pages */}
        {section?.slug === 'product-by-industry' && (
          <ProductByIndustryCarousel />
        )}

        {/* Related Products Section */}
        <RelatedProducts
          currentSection={section}
          currentCategory={category}
          currentSubcategory={subcategory}
          pageType={pageType}
          maxItems={6}
        />

        {/* Testimonials Section */}
        <ClientTestamonials productData={productInfo} />

        {/* Frequently Asked Questions */}
        <ProductFAQSection faq={productInfo.faq} />

        {/* Contact Section */}
        <ProductContactSection contactSection={productInfo.contactSection} />

        {/* CTA Section - Ready to Get Started */}
        <CTASection />
      </main>
    </ErrorBoundary>
  );
};

export default ProductPageTemplate;