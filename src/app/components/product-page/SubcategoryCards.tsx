'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { SubCategory } from '../../data/navigationData';

interface CustomSubcategoryCard {
  name: string;
  slug: string;
  description: string;
  image: string;
  href?: string;
}

interface SubcategoryCardsProps {
  subcategories?: SubCategory[];
  parentCategoryName: string;
  parentCategorySlug: string;
  sectionSlug: string;
  className?: string;
  customCards?: {
    heading?: string;
    description?: string;
    items: CustomSubcategoryCard[];
  };
}

const SubcategoryCards: React.FC<SubcategoryCardsProps> = ({
  subcategories = [],
  parentCategoryName,
  parentCategorySlug,
  sectionSlug,
  className = '',
  customCards
}) => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return window.innerWidth - 32;
    }
    return 344;
  });
  
  const customHeading = customCards?.heading;
  const customDescription = customCards?.description;
  
  // Calculate card width based on screen size - must be called before early returns
  React.useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 768) {
        // Mobile: full viewport width minus container padding (16px on each side = 32px total)
        const viewportWidth = window.innerWidth;
        setCardWidth(viewportWidth - 32); // 32px for container padding (16px each side)
      } else {
        // Desktop: calculate based on grid (responsive)
        setCardWidth(320); // Base width
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);
  
  const buildHref = (slug: string, overrideHref?: string) => {
    if (overrideHref) {
      return overrideHref;
    }

    let url: string;
    
    if (sectionSlug === 'product-by-industry') {
      url = `/products/${sectionSlug}/${parentCategorySlug}/${slug}`;
    } else if (sectionSlug === 'product-by-material') {
      const directCategories = ['mylar-boxes', 'shopping-bags', 'other'];
      if (directCategories.includes(parentCategorySlug)) {
        url = `/products/${parentCategorySlug}/${slug}`;
      } else {
        url = `/products/${sectionSlug}/${parentCategorySlug}/${slug}`;
      }
    } else {
      url = `/products/${parentCategorySlug}/${slug}`;
    }
    
    return url;
  };
  
  const cardItems: CustomSubcategoryCard[] = customCards?.items?.length
    ? customCards.items
    : subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description: sub.description || `Premium ${sub.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`,
        image: sub.images && sub.images.length > 0 ? sub.images[0] : 'products-box-img_x8vu4b',
        href: buildHref(sub.slug)
      }));
  
  if (!cardItems || cardItems.length === 0) {
    return null;
  }

  // Show only first 4 cards initially, or all if showAll is true
  const displayedSubcategories = showAll ? cardItems : cardItems.slice(0, 4);
  const hasMoreCards = cardItems.length > 4;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    
    if (showAll) {
      setTimeout(() => {
        const element = document.getElementById('subcategories-heading');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    }
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    const maxIndex = cardItems.length - 1;
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const headingText = customHeading || `Our Range of ${parentCategoryName}`;
  const descriptionText = customDescription || `Explore our comprehensive range of ${parentCategoryName.toLowerCase()} packaging solutions. Each category is designed to meet specific industry needs and requirements.`;

  return (
    <section className={`py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="subcategories-heading">
        <div className="text-center mb-12">
          <h2 
            id="subcategories-heading"
            className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight mb-4"
          >
            {headingText}
          </h2>
          <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
            {descriptionText}
          </p>
        </div>
        
        {/* Mobile Slider Layout */}
        <div className="block md:hidden w-screen mb-8" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
          <div 
            className="relative overflow-hidden mx-auto"
            style={{ 
              width: `${cardWidth}px`,
              maxWidth: `${cardWidth}px`,
            }}
          >
            <div
              ref={cardsContainerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
                willChange: 'transform',
              }}
            >
              {cardItems.map((subcategory, index) => (
                <Link 
                  key={`${subcategory.slug}-${index}`}
                  href={buildHref(subcategory.slug, subcategory.href)}
                  className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
                  style={{
                    width: `${cardWidth}px`,
                    minWidth: `${cardWidth}px`,
                    maxWidth: `${cardWidth}px`,
                    flexShrink: 0,
                  }}
                >
                  <CldImage
                    src={subcategory.image}
                    alt={`${subcategory.name} packaging example`}
                    width={400}
                    height={300}
                    className="w-full h-80 sm:h-96 md:h-80 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h5 
                      className="mb-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-teal-deep)] min-h-[3.5rem] flex items-start transition-colors duration-200"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {subcategory.name}
                    </h5>
                    <p className="mb-3 text-sm font-normal text-gray-700 line-clamp-2 min-h-[2.5rem]">
                      {subcategory.description}
                    </p>
                    <div className="inline-flex justify-end items-center text-sm font-semibold text-[var(--color-teal-deep)] hover:text-[var(--color-turquoise-bright)] transition-colors duration-200 group-hover:text-[var(--color-teal-deep)]">
                      View Product
                      <svg 
                        className="w-4 h-4 ml-2" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="m9 18 6-6-6-6"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          {cardItems.length > 1 && (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={slideLeft}
                disabled={currentIndex === 0}
                className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={slideRight}
                disabled={currentIndex === cardItems.length - 1}
                className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-2 border-teal-deep cursor-pointer flex items-center justify-center text-[#0c6b76] hover:bg-[#0c6b76] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
                  currentIndex === cardItems.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedSubcategories.map((subcategory, index) => (
            <Link 
              key={`${subcategory.slug}-${index}`}
              href={buildHref(subcategory.slug, subcategory.href)}
              className="group max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 block"
            >
              <CldImage
                src={subcategory.image}
                alt={`${subcategory.name} packaging example`}
                width={400}
                height={300}
                className="w-full h-64 md:h-72 object-cover rounded-t-lg"
                loading="lazy"
              />
            <div className="p-5">
              <h5 
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-teal-deep)] min-h-[4.5rem] flex items-start transition-colors duration-200"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {subcategory.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 line-clamp-2 min-h-[3rem]">
                {subcategory.description}
              </p>
              <div className="inline-flex justify-end items-center text-sm font-semibold text-[var(--color-teal-deep)] hover:text-[var(--color-turquoise-bright)] transition-colors duration-200 group-hover:text-[var(--color-teal-deep)]">
                View Product
                <svg 
                  className="w-4 h-4 ml-2" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="m9 18 6-6-6-6"
                  />
                </svg>
              </div>
            </div>
          </Link>
          ))}
        </div>
        
        {/* Show All / Show Less Button - Desktop Only */}
        {hasMoreCards && (
          <div className="hidden md:block text-center mt-8">
            <button
              onClick={handleToggleShowAll}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brown-dark to-[#97602f] hover:from-[#97602f] hover:to-brown-dark text-white font-medium rounded-full transition-all duration-200 focus:outline-none"
            >
              {showAll ? 'Show Less' : `Show All Products`}
              <svg 
                className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubcategoryCards;
