"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import GradientBackground from "../UI/GradientBackground";
import { productByMaterialData } from "@/app/data/productByMaterialData";
import { productByIndustryData } from "@/app/data/productByIndustryData";
import { mylarBoxesData } from "@/app/data/mylarBoxesData";
import { shoppingBagsData } from "@/app/data/shoppingBagsData";
import { otherData } from "@/app/data/otherData";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface HeroSectionProps {
  productData: {
    name: string;
    description: string;
    heroImage: string;
    modelPath: string;
    slug?: string; // Add slug for product identification
  };
  breadcrumbs?: BreadcrumbItem[];
}

// Helper function to find the best matched subcategory (not just the first one)
const findBestMatchedSubcategory = (subcategories: Array<{ name: string; slug: string; images?: string[] }>): { images: string[] } | null => {
  // Get all subcategories with images
  const subcategoriesWithImages = subcategories.filter(
    sub => sub.images && sub.images.length > 0
  );

  if (subcategoriesWithImages.length === 0) {
    return null;
  }

  // Keywords that indicate more generic/representative subcategories
  const preferredKeywords = [
    'two piece', 'two-piece', 'mailer', 'box with lid', 'boxes with lid',
    'gable', 'tuck end', 'sleeve', 'custom', 'standard', 'regular'
  ];

  // Keywords that indicate very specific/niche subcategories (to avoid)
  const avoidKeywords = [
    'magnetic', 'brief case', 'briefcase', 'book style', 'book-style',
    'hexagon', 'round', 'child resistant', 'pillow', 'mini', 'pink',
    'window', 'zipper', 'stand up', 'stand-up'
  ];

  // Score each subcategory
  const scored = subcategoriesWithImages.map(sub => {
    const nameLower = sub.name.toLowerCase();
    let score = 0;

    // Higher score for preferred keywords
    preferredKeywords.forEach(keyword => {
      if (nameLower.includes(keyword)) {
        score += 10;
      }
    });

    // Lower score for very specific keywords
    avoidKeywords.forEach(keyword => {
      if (nameLower.includes(keyword)) {
        score -= 5;
      }
    });

    return { subcategory: sub, score };
  });

  // Sort by score (highest first), then by position (middle positions preferred)
  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // If scores are equal, prefer middle positions
    const indexA = subcategoriesWithImages.indexOf(a.subcategory);
    const indexB = subcategoriesWithImages.indexOf(b.subcategory);
    const middle = Math.floor(subcategoriesWithImages.length / 2);
    const distanceA = Math.abs(indexA - middle);
    const distanceB = Math.abs(indexB - middle);
    return distanceA - distanceB;
  });

  // Return the best matched subcategory
  return scored[0]?.subcategory as { images: string[] } | null;
};

// Utility function to get product image from subcategory data
const getProductImage = (slug: string | undefined, fallbackImage: string): string => {
  if (!slug) {
    return fallbackImage;
  }

  // Search in productByMaterialData
  for (const category of productByMaterialData) {
    // First check if it's a subcategory match
    const subcategory = category.subcategories.find(sub => sub.slug === slug);
    if (subcategory?.images && subcategory.images.length > 0) {
      return subcategory.images[0];
    }
    // If slug matches the category itself, get image from best matched subcategory
    if (category.slug === slug) {
      const bestMatched = findBestMatchedSubcategory(category.subcategories);
      if (bestMatched?.images && bestMatched.images.length > 0) {
        return bestMatched.images[0];
      }
      // Fallback to category image if no subcategories have images
      if (category.image) {
        return category.image;
      }
    }
  }

  // Search in productByIndustryData
  for (const category of productByIndustryData) {
    // First check if it's a subcategory match
    const subcategory = category.subcategories.find(sub => sub.slug === slug);
    if (subcategory?.images && subcategory.images.length > 0) {
      return subcategory.images[0];
    }
    // If slug matches the category itself, get image from best matched subcategory
    if (category.slug === slug) {
      const bestMatched = findBestMatchedSubcategory(category.subcategories);
      if (bestMatched?.images && bestMatched.images.length > 0) {
        return bestMatched.images[0];
      }
      // Fallback to category image if no subcategories have images
      if (category.image) {
        return category.image;
      }
    }
  }

  // Search in mylarBoxesData
  const mylarSubcategory = mylarBoxesData.subcategories.find(sub => sub.slug === slug);
  if (mylarSubcategory?.images && mylarSubcategory.images.length > 0) {
    return mylarSubcategory.images[0];
  }
  // If slug matches the category itself, get image from best matched subcategory
  if (mylarBoxesData.slug === slug) {
    const bestMatched = findBestMatchedSubcategory(mylarBoxesData.subcategories);
    if (bestMatched?.images && bestMatched.images.length > 0) {
      return bestMatched.images[0];
    }
    // Fallback to category image
    if (mylarBoxesData.image) {
      return mylarBoxesData.image;
    }
  }

  // Search in shoppingBagsData
  const shoppingBagSubcategory = shoppingBagsData.subcategories.find(sub => sub.slug === slug);
  if (shoppingBagSubcategory?.images && shoppingBagSubcategory.images.length > 0) {
    return shoppingBagSubcategory.images[0];
  }
  // If slug matches the category itself, get image from best matched subcategory
  if (shoppingBagsData.slug === slug) {
    const bestMatched = findBestMatchedSubcategory(shoppingBagsData.subcategories);
    if (bestMatched?.images && bestMatched.images.length > 0) {
      return bestMatched.images[0];
    }
    // Fallback to category image
    if (shoppingBagsData.image) {
      return shoppingBagsData.image;
    }
  }

  // Search in otherData
  const otherSubcategory = otherData.subcategories.find(sub => sub.slug === slug);
  if (otherSubcategory?.images && otherSubcategory.images.length > 0) {
    return otherSubcategory.images[0];
  }
  // If slug matches the category itself, get image from best matched subcategory
  if (otherData.slug === slug) {
    const bestMatched = findBestMatchedSubcategory(otherData.subcategories);
    if (bestMatched?.images && bestMatched.images.length > 0) {
      return bestMatched.images[0];
    }
    // Fallback to category image
    if (otherData.image) {
      return otherData.image;
    }
  }

  return fallbackImage;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  productData,
  breadcrumbs = [],
}) => {
  const router = useRouter();

  // Get the product image - prefer subcategory image, fallback to heroImage
  const productImage = useMemo(() => {
    return getProductImage(productData.slug, productData.heroImage);
  }, [productData.slug, productData.heroImage]);

  // Handle Order Now button click
  const handleOrderNow = () => {
    if (productData.slug) {
      // Store the selected product in sessionStorage for the custom dimensions form
      sessionStorage.setItem("selectedProduct", productData.slug);
    }
    // Navigate to homepage and scroll to the custom dimensions form
    router.push("/#custom-dimensions-form");
  };

  // Handle Get Free Quote button click
  const handleGetFreeQuote = () => {
    // Navigate to contact us page and scroll to contact section
    router.push("/contact-us#contact-section");
  };

  return (
    <>
      {/* Separate styles for very small screens (iPhone SE - 375px) */}
      <style jsx>{`
        @media (max-width: 375px) {
          .hero-section-xs {
            min-height: 85vh;
            height: auto;
          }
          .hero-container-xs {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          .hero-breadcrumb-xs {
            padding-top: 0.75rem;
            padding-bottom: 0.375rem;
          }
          .hero-breadcrumb-text-xs {
            font-size: 0.75rem;
          }
          .hero-breadcrumb-icon-xs {
            width: 0.875rem;
            height: 0.875rem;
            margin-left: 0.375rem;
            margin-right: 0.375rem;
          }
          .hero-breadcrumb-space-xs {
            gap: 0.375rem;
          }
          .hero-grid-xs {
            gap: 1rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .hero-image-xs {
            max-width: 280px;
            height: 220px;
          }
          .hero-title-xs {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
          }
          .hero-description-xs {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .hero-buttons-xs {
            gap: 0.625rem;
          }
          .hero-button-primary-xs {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            font-size: 0.75rem;
            width: 100%;
          }
          .hero-button-secondary-xs {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
            font-size: 0.75rem;
            width: 100%;
          }
        }
        
        /* Separate styles for iPad Mini and iPad Air */
        @media (min-width: 768px) and (max-width: 820px) {
          .hero-section-ipad {
            height: 85vh;
          }
          .hero-container-ipad {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 1.5rem;
          }
          .hero-breadcrumb-ipad {
            padding-top: 1rem;
            padding-bottom: 0.75rem;
          }
          .hero-grid-ipad {
            gap: 2rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .hero-image-ipad {
            max-width: 400px;
            height: 380px;
          }
          .hero-title-ipad {
            font-size: 2.25rem;
            margin-bottom: 1rem;
          }
          .hero-description-ipad {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          .hero-buttons-ipad {
            gap: 1rem;
          }
          .hero-button-primary-ipad {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
            font-size: 0.875rem;
          }
          .hero-button-secondary-ipad {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
            font-size: 0.875rem;
          }
        }
        
        @media (min-width: 1024px) and (max-width: 1180px) {
          .hero-section-ipad-landscape {
            height: 75vh;
          }
          .hero-container-ipad-landscape {
            padding-left: 3rem;
            padding-right: 3rem;
          }
          .hero-grid-ipad-landscape {
            gap: 3rem;
          }
          .hero-image-ipad-landscape {
            max-width: 450px;
            height: 420px;
          }
          .hero-title-ipad-landscape {
            font-size: 2.75rem;
            margin-bottom: 1.25rem;
          }
          .hero-description-ipad-landscape {
            font-size: 1.125rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
      <section className={`h-[90vh] md:h-[80vh] relative overflow-hidden hero-section-xs hero-section-ipad hero-section-ipad-landscape`}>
        <GradientBackground className="absolute inset-0" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 h-full relative flex flex-col hero-container-xs hero-container-ipad hero-container-ipad-landscape"
        style={{ zIndex: 10 }}
      >
        {/* Dynamic Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="pt-4 sm:pt-6 pb-2 sm:pb-4 hero-breadcrumb-xs hero-breadcrumb-ipad">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 hero-breadcrumb-space-xs">
                {breadcrumbs.map((item, index) => (
                  <li key={item.href} className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white/60 mx-2 hero-breadcrumb-icon-xs"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition-colors hero-breadcrumb-text-xs ${
                        index === breadcrumbs.length - 1
                          ? "text-white cursor-default"
                          : "text-white/80 hover:text-white"
                      }`}
                      aria-current={
                        index === breadcrumbs.length - 1 ? "page" : undefined
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}

        <div
          className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center hero-grid-xs hero-grid-ipad hero-grid-ipad-landscape"
        >
          {/* Product Image - Top on mobile, Right on desktop */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <CldImage
              src={productImage}
              alt={productData.name}
              width={600}
              height={600}
              className="w-full max-w-md h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-contain hero-image-xs hero-image-ipad hero-image-ipad-landscape"
              quality={90}
              priority
            />
          </div>

          {/* Content - Bottom on mobile, Left on desktop */}
          <div
            className="text-white flex flex-col justify-center order-2 lg:order-1 items-center lg:items-start"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4 leading-tight font-bold text-center lg:text-left hero-title-xs hero-title-ipad hero-title-ipad-landscape">
              {productData.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 text-center lg:text-left px-2 sm:px-0 hero-description-xs hero-description-ipad hero-description-ipad-landscape">
              {productData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto hero-buttons-xs hero-buttons-ipad">
              <button
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white px-8 lg:px-16 py-4 lg:py-5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-sm lg:text-base hero-button-primary-xs hero-button-primary-ipad"
              >
                ORDER NOW
              </button>
              <button
                onClick={handleGetFreeQuote}
                className="border-2 border-white text-white hover:bg-white hover:text-[#0c6b76] px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold transition-colors duration-300 cursor-pointer text-sm lg:text-base hero-button-secondary-xs hero-button-secondary-ipad"
              >
                GET FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
