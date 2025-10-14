'use client';

import React from 'react';
import { NavigationSection, MainCategory, SubCategory } from '../../data/navigationData';
import { productData, getProductDataBySlug } from '../../data/productPagesData';
import { useProduct, Product } from '@/lib/hooks/useProducts';
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
  const getProductData = () => {
    // Use database product if available
    if (dbProduct) {
      return dbProduct;
    }

    // Fallback to legacy data
    if (legacyProductData) {
      return legacyProductData;
    }

    // Generate dynamic product data based on the page type and content
    const name = subcategory?.name || category?.name || section?.name || 'Product';
    const description = subcategory?.description || category?.description || section?.description || `Premium ${name.toLowerCase()} packaging solutions designed to protect and showcase your products.`;

    return {
      name,
      description,
      heroImage: 'products-box-img_x8vu4b',
      modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
      features: [
        {
          icon: 'shield',
          title: 'Premium Quality',
          description: `High-grade materials ensure superior protection for your ${name.toLowerCase()}`
        },
        {
          icon: 'palette',
          title: 'Custom Design',
          description: 'Full color printing and custom branding options available'
        },
        {
          icon: 'truck',
          title: 'Fast Delivery',
          description: 'Quick turnaround times to meet your business needs'
        },
        {
          icon: 'check',
          title: 'Eco-Friendly',
          description: 'Made from recyclable materials, sustainable packaging solution'
        }
      ],
      specifications: [
        { label: 'Material', value: 'Premium Cardboard' },
        { label: 'Thickness', value: '200-500 GSM' },
        { label: 'Printing', value: 'Full Color CMYK' },
        { label: 'Finish', value: 'Matte/Glossy Available' },
        { label: 'Assembly', value: 'Easy Assembly' },
        { label: 'Customization', value: 'Full Brand Integration' }
      ],
      sizes: [
        { name: 'Small', dimensions: '6×4×2 inches', price: '$0.45' },
        { name: 'Medium', dimensions: '10×7×3 inches', price: '$0.65' },
        { name: 'Large', dimensions: '12×9×4 inches', price: '$0.85' },
        { name: 'X-Large', dimensions: '15×11×5 inches', price: '$1.15' }
      ],
      galleryImages: [
        'products-box-img_x8vu4b',
        'product-box-2',
        'Product-Packaging-Boxes',
        'shipping-box_jyysru'
      ],
      customizationOptions: [
        'Full color printing',
        'Custom logo placement',
        'Multiple finish options',
        'Various sizes available'
      ],
      ctaTitle: 'Ready to Get Started?',
      ctaDescription: `Get a custom quote for your ${name.toLowerCase()} today. Our team is ready to help you create the perfect packaging solution.`
    };
  };

  const productInfo = getProductData();

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
        </div>
      </main>
    );
  }

  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section with Integrated Breadcrumb */}
        <HeroSection productData={productInfo} breadcrumbs={breadcrumbs} />

        {/* Custom Dimensions Form - Pass the slug for auto-selection */}
        <CustomDimensionsForm 
          initialProductSlug={pageType === 'subcategory' && subcategory ? subcategory.slug : undefined}
        />

        {/* Subcategory Cards Section - Show subcategories for category and subcategory pages */}
        {(pageType === 'category' || pageType === 'subcategory') && category?.subcategories && section && (
          <SubcategoryCards
            subcategories={category.subcategories}
            parentCategoryName={category.name}
            parentCategorySlug={category.slug}
            sectionSlug={section.slug}
          />
        )}

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

        {/* CTA Section - Ready to Get Started */}
        <CTASection productData={productInfo} />
      </main>
    </ErrorBoundary>
  );
};

export default ProductPageTemplate;