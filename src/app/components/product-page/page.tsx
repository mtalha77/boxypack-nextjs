'use client';

import React from 'react';
import { NavigationSection, MainCategory, SubCategory } from '../../data/navigationData';
import { productData } from '../../data/productData';
import HeroSection, { BreadcrumbItem } from '../product-design-page/HeroSection';
import FeaturesSection from '../product-design-page/FeaturesSection';
import Model3D from '../product-design-page/Model3D';
import SpecificationsSection from '../product-design-page/SpecificationsSection';
import ProductGallery from '../product-design-page/ProductGallery';
import ClientTestamonials from '../product-design-page/ClientTestamonials';
import CTASection from '../product-design-page/CTASection';
import ErrorBoundary from '../ErrorBoundary';

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

  // Ensure component only renders properly on client side
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  // Get product data if it exists in the legacy data structure
  const legacyProductData = productData[slug as keyof typeof productData];

  // Create dynamic product data based on the navigation structure
  const getProductData = () => {
    if (legacyProductData) {
      return legacyProductData;
    }

    // Generate dynamic product data based on the page type and content
    const name = subcategory?.name || category?.name || section?.name || 'Product';
    const description = subcategory?.description || category?.description || section?.description || `Premium ${name.toLowerCase()} packaging solutions designed to protect and showcase your products.`;

    return {
      name,
      description,
      heroImage: '/img/products-box-img.png',
      modelPath: '/models/amazon_prime_shipping_box.glb',
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
        '/img/products-box-img.png',
        '/img/product-box-2.jpg',
        '/img/Product-Packaging-Boxes.webp',
        '/img/shipping-box-2.webp'
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

  // Generate breadcrumb data
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs = [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' }
    ];

    if (section) {
      breadcrumbs.push({
        name: section.name,
        href: `/products/${section.slug}`
      });
    }

    if (category) {
      breadcrumbs.push({
        name: category.name,
        href: `/products/${section?.slug}/${category.slug}`
      });
    }

    if (subcategory) {
      breadcrumbs.push({
        name: subcategory.name,
        href: `/products/${section?.slug}/${category?.slug}/${subcategory.slug}`
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Show loading state during hydration to prevent mismatch
  if (!isMounted) {
    return (
      <main className="min-h-screen bg-gradient-to-r from-[#0c6b76] via-[#0ca6c2] to-[#46959c] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <ErrorBoundary>
      <main className="min-h-screen">
          {/* Hero Section with Integrated Breadcrumb */}
          <HeroSection productData={productInfo} breadcrumbs={breadcrumbs} />

          {/* 3D Model Section */}
          <ErrorBoundary fallback={<div className="py-16 bg-gray-50"><div className="max-w-7xl mx-auto px-4 text-center"><p>3D Model temporarily unavailable</p></div></div>}>
            <div className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Interactive 3D Preview
                  </h2>
                  <p className="text-lg text-gray-600">
                    Explore your packaging in 3D
                  </p>
                </div>
                <Model3D modelPath={productInfo.modelPath} />
              </div>
            </div>
          </ErrorBoundary>

          {/* Features Section */}
          <FeaturesSection productData={productInfo} />

          {/* Specifications Section */}
          <SpecificationsSection productData={productInfo} />

          {/* Gallery Section */}
          <ErrorBoundary fallback={<div className="py-16 bg-white"><div className="max-w-7xl mx-auto px-4 text-center"><p>Gallery temporarily unavailable</p></div></div>}>
            <ProductGallery />
          </ErrorBoundary>

          {/* Testimonials Section */}
          <ClientTestamonials productData={productInfo} />

          {/* CTA Section */}
          <CTASection productData={productInfo} />

        {/* Related Products Section - Show subcategories or categories based on page type */}
        {(section?.categories || section?.subcategories) && (
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Related Products
                </h2>
                <p className="text-lg text-gray-600">
                  Explore more options in our {section?.name.toLowerCase()} collection
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pageType === 'section' && section?.categories && 
                  section.categories.slice(0, 6).map((cat) => (
                    <a
                      key={cat.slug}
                      href={`/products/${section.slug}/${cat.slug}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <img
                          src="/img/products-box-img.png"
                          alt={cat.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0c6b76]">
                        {cat.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {cat.description || `Premium ${cat.name.toLowerCase()} packaging solutions`}
                      </p>
                    </a>
                  ))
                }
                
                {pageType === 'category' && category?.subcategories &&
                  category.subcategories.slice(0, 6).map((subcat) => (
                    <a
                      key={subcat.slug}
                      href={`/products/${section?.slug}/${category.slug}/${subcat.slug}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <img
                          src="/img/products-box-img.png"
                          alt={subcat.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0c6b76]">
                        {subcat.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {subcat.description || `Premium ${subcat.name.toLowerCase()} packaging solutions`}
                      </p>
                    </a>
                  ))
                }

                {pageType === 'section' && section?.subcategories && !section.categories &&
                  section.subcategories.slice(0, 6).map((subcat) => (
                    <a
                      key={subcat.slug}
                      href={`/products/${section.slug}/${subcat.slug}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <img
                          src="/img/products-box-img.png"
                          alt={subcat.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0c6b76]">
                        {subcat.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {subcat.description || `Premium ${subcat.name.toLowerCase()} packaging solutions`}
                      </p>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        )}
      </main>
    </ErrorBoundary>
  );
};

export default ProductPageTemplate;
