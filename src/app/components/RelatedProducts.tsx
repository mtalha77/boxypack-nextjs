'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';
import { NavigationSection, MainCategory, SubCategory } from '../data/navigationData';
import { productData } from '../data/productData';
import LightBlueBackground from '../UI/LightBlueBackground';

interface RelatedProductsProps {
  currentSection?: NavigationSection;
  currentCategory?: MainCategory;
  currentSubcategory?: SubCategory;
  pageType: 'section' | 'category' | 'subcategory';
  maxItems?: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentSection,
  currentCategory,
  currentSubcategory,
  pageType,
  maxItems = 6
}) => {
  // Function to get related products based on current page type
  const getRelatedProducts = () => {
    let relatedProducts: Array<{
      name: string;
      description: string;
      href: string;
      image: string;
    }> = [];

    if (pageType === 'subcategory' && currentSection && currentCategory && currentSubcategory) {
      // For subcategory pages, show other subcategories from the same category
      const otherSubcategories = currentCategory.subcategories
        .filter(sub => sub.slug !== currentSubcategory.slug)
        .slice(0, maxItems);
      
      relatedProducts = otherSubcategories.map(sub => ({
        name: sub.name,
        description: sub.description || `Premium ${sub.name.toLowerCase()} packaging solutions`,
        href: `/products/${currentSection.slug}/${currentCategory.slug}/${sub.slug}`,
        image: 'products-box-img_x8vu4b'
      }));

      // If not enough subcategories, add other categories from the same section
      if (relatedProducts.length < maxItems && currentSection.categories) {
        const otherCategories = currentSection.categories
          .filter(cat => cat.slug !== currentCategory.slug)
          .slice(0, maxItems - relatedProducts.length);
        
        relatedProducts = relatedProducts.concat(otherCategories.map(cat => ({
          name: cat.name,
          description: cat.description || `Premium ${cat.name.toLowerCase()} packaging solutions`,
          href: `/products/${currentSection.slug}/${cat.slug}`,
          image: 'products-box-img_x8vu4b'
        })));
      }
    } else if (pageType === 'category' && currentSection && currentCategory) {
      // For category pages, show subcategories from the same category
      const subcategories = currentCategory.subcategories.slice(0, maxItems);
      
      relatedProducts = subcategories.map(sub => ({
        name: sub.name,
        description: sub.description || `Premium ${sub.name.toLowerCase()} packaging solutions`,
        href: `/products/${currentSection.slug}/${currentCategory.slug}/${sub.slug}`,
        image: 'products-box-img_x8vu4b'
      }));

      // If not enough subcategories, add other categories from the same section
      if (relatedProducts.length < maxItems && currentSection.categories) {
        const otherCategories = currentSection.categories
          .filter(cat => cat.slug !== currentCategory.slug)
          .slice(0, maxItems - relatedProducts.length);
        
        relatedProducts = relatedProducts.concat(otherCategories.map(cat => ({
          name: cat.name,
          description: cat.description || `Premium ${cat.name.toLowerCase()} packaging solutions`,
          href: `/products/${currentSection.slug}/${cat.slug}`,
          image: 'products-box-img_x8vu4b'
        })));
      }
    } else if (pageType === 'section' && currentSection) {
      // For section pages, show categories or subcategories
      if (currentSection.categories) {
        const categories = currentSection.categories.slice(0, maxItems);
        relatedProducts = categories.map(cat => ({
          name: cat.name,
          description: cat.description || `Premium ${cat.name.toLowerCase()} packaging solutions`,
          href: `/products/${currentSection.slug}/${cat.slug}`,
          image: 'products-box-img_x8vu4b'
        }));
      } else if (currentSection.subcategories) {
        const subcategories = currentSection.subcategories.slice(0, maxItems);
        relatedProducts = subcategories.map(sub => ({
          name: sub.name,
          description: sub.description || `Premium ${sub.name.toLowerCase()} packaging solutions`,
          href: `/products/${currentSection.slug}/${sub.slug}`,
          image: 'products-box-img_x8vu4b'
        }));
      }
    }

    // If still not enough products, add popular products from productData
    if (relatedProducts.length < maxItems) {
      const popularProducts = Object.values(productData)
        .filter(product => 
          // Exclude current product if it exists in productData
          !relatedProducts.some(related => related.name.toLowerCase().includes(product.name.toLowerCase()))
        )
        .slice(0, maxItems - relatedProducts.length);
      
      relatedProducts = relatedProducts.concat(popularProducts.map(product => ({
        name: product.name,
        description: product.description,
        href: `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
        image: product.heroImage
      })));
    }

    // If still not enough, add generic popular products
    if (relatedProducts.length < maxItems) {
      const genericProducts = [
        { name: 'Mailer Boxes', description: 'Perfect for shipping and e-commerce', href: '/products/mailer-boxes' },
        { name: 'Product Boxes', description: 'Custom packaging for retail products', href: '/products/product-boxes' },
        { name: 'Shipping Boxes', description: 'Durable boxes for safe delivery', href: '/products/shipping-boxes' },
        { name: 'Pouches', description: 'Flexible packaging solutions', href: '/products/pouches' },
        { name: 'Shopping Bags', description: 'Eco-friendly retail bags', href: '/products/shopping-bags' }
      ].slice(0, maxItems - relatedProducts.length);
      
      relatedProducts = relatedProducts.concat(genericProducts.map(product => ({
        ...product,
        image: 'products-box-img_x8vu4b'
      })));
    }

    return relatedProducts.slice(0, maxItems);
  };

  const relatedProducts = getRelatedProducts();

  // Don't render if no products
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <LightBlueBackground>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-body-primary mb-4">
            Related Products
          </h2>
          <p className="text-body text-body-secondary">
            Explore more options in our packaging collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map((product, index) => (
            <a
              key={`${product.name}-${index}`}
              href={product.href}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 relative overflow-hidden rounded-lg">
                <CldImage
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-h4 font-semibold text-body-primary mb-2 group-hover:text-heading-primary transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-body-small text-body-secondary flex-1">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center text-heading-primary text-body-small font-medium group-hover:text-[#0ca6c2] transition-colors duration-300">
                  <span>Explore More</span>
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default RelatedProducts;
