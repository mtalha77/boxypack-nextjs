'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { SubCategory } from '../../data/navigationData';
import { ourRangeOfData } from '../../data/OurRangeOfData';
import { whyChooseUsData } from '../../data/whyChooseUsData';
import { productByMaterialData } from '../../data/productByMaterialData';
import { productByIndustryData } from '../../data/productByIndustryData';
import { mylarBoxesData } from '../../data/mylarBoxesData';
import { shoppingBagsData } from '../../data/shoppingBagsData';
import { otherData } from '../../data/otherData';

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
  currentSubcategory?: SubCategory; // Current subcategory being viewed (if on subcategory page)
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
  currentSubcategory,
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
  
  // Helper function to map data file slugs to OurRangeOfData slugs
  const mapSlugToOurRangeOfData = (slug: string): string => {
    if (!slug) return slug;
    
    // Try exact match first
    if (ourRangeOfData[slug]) {
      return slug;
    }
    
    // Comprehensive slug mapping
    const slugMappings: Record<string, string> = {
      // Rigid boxes subcategories
      'magnetic-closure-rigid-box': 'magnetic-closure-boxes',
      'sliding-sleeve-rigid-boxes-match-style-boxes': 'sliding-rigid-boxes',
      'brief-case-style': 'briefcase-style-rigid-boxes',
      // Kraft boxes subcategories
      'kraft-mailer-box': 'kraft-mailer-boxes',
      'kraft-box-with-lid': 'kraft-boxes-with-lids',
      'kraft-pillow-box': 'kraft-pillow-boxes',
      'kraft-gable-box': 'kraft-gable-boxes',
      'kraft-bakery-cake-box': 'kraft-bakery-boxes',
      'kraft-sleeve-box': 'kraft-sleeve-boxes',
      'kraft-tuck-end-box': 'kraft-tuck-end-boxes',
      'kraft-five-panel-hanger-box': 'kraft-five-panel-hanger-boxes',
      'kraft-side-lock-six-corner-box': 'kraft-six-corner-boxes',
      'kraft-regular-six-corner-box': 'kraft-six-corner-boxes-2',
      'kraft-seal-end-auto-bottom-box': 'kraft-seal-end-auto-bottom-boxes',
      'kraft-single-wall-auto-bottom-tray': 'kraft-auto-bottom-trays',
      'kraft-two-piece-box': 'kraft-two-piece-boxes',
      'kraft-cigarette-box': 'kraft-cigarette-boxes',
      'kraft-bookend-box': 'kraft-bookend-boxes',
      'kraft-dispenser-box': 'kraft-dispenser-boxes',
      'kraft-double-wall-frame-tray': 'kraft-double-wall-trays',
      // Cardboard boxes subcategories
      'cardboard-display-box': 'cardboard-display-boxes',
      'cardboard-tuck-end-box': 'cardboard-tuck-end-boxes',
      'cardboard-box-with-lid': 'cardboard-boxes-with-lids',
      'cardboard-gable-box': 'cardboard-gable-boxes',
      'cardboard-cake-bakery-box': 'cake-and-bakery-boxes',
      'cardboard-sleeve-box': 'cardboard-sleeve-boxes',
      'cardboard-dispenser-box': 'cardboard-dispenser-boxes',
      'cardboard-five-panel-hanger': 'cardboard-five-panel-hanger-boxes',
      'cardboard-double-locked-wall-lid-box': 'cardboard-double-locked-wall-lid-boxes',
      'cardboard-side-lock-six-corner-box': 'cardboard-side-lock-six-corner-boxes',
      'cardboard-regular-six-corner-box': 'cardboard-regular-six-corner-boxes',
      'cardboard-seal-end-auto-bottom-box': 'cardboard-seal-end-auto-bottom-boxes',
      'cardboard-auto-bottom-tray': 'cardboard-auto-bottom-trays',
      'cardboard-two-piece-box': 'cardboard-two-piece-boxes',
      'cardboard-cigarette-box': 'cardboard-cigarette-boxes',
      'cardboard-bookend-box': 'cardboard-bookend-boxes',
      'cardboard-double-wall-frame-tray': 'cardboard-double-wall-frame-trays',
      // Corrugated boxes subcategories
      'corrugated-mailer-box': 'corrugated-mailer-boxes',
      'corrugated-gable-box': 'corrugated-gable-boxes',
      'corrugated-double-locked-wall-lid-box': 'corrugated-double-locked-wall-lid-boxes',
      'corrugated-seal-end-auto-bottom-box': 'corrugated-seal-end-auto-bottom-boxes',
      'corrugated-auto-bottom-tray': 'corrugated-auto-bottom-trays',
      'corrugated-two-piece-box': 'corrugated-two-piece-boxes',
      'corrugated-brief-case-style-box': 'corrugated-brief-case-style-boxes',
      'corrugated-full-flap-shipping-box': 'corrugated-full-flap-shipping-boxes',
      // Mylar boxes
      'stand-up-pouche': 'stand-up-pouches',
      'zipper-bag': 'zipper-bags',
      'window-bag': 'window-bags',
      // Shopping bags
      'kraft-shopping-bag': 'kraft-shopping-bags',
      'paper-bag': 'paper-bags',
      'pvc-bag': 'pvc-bags',
      // Industry subcategories
      'custom-perfume-boxes': 'perfume-boxes',
      'custom-makeup-boxes': 'makeup-boxes',
      'custom-lipstick-boxes': 'lipstick-boxes',
      'custom-lip-gloss-boxes': 'lip-gloss-boxes',
      'custom-eye-shadow-boxes': 'eye-shadow-boxes',
      'custom-cream-boxes': 'cream-boxes',
      'custom-french-fry-boxes': 'french-fry-boxes',
      'custom-coffee-boxes': 'coffee-packaging-boxes',
      'custom-coffee-cups': 'custom-coffee-cups',
      'custom-coffee-cup-sleeves': 'coffee-cup-sleeves',
      'custom-noodle-boxes': 'noodle-boxes',
      'custom-chinese-takeout-boxes': 'chinese-takeout-boxes',
      'custom-popcorn-boxes': 'popcorn-boxes',
      'custom-snack-boxes': 'snack-boxes',
      'custom-tea-boxes': 'tea-boxes',
      'custom-burger-boxes': 'burger-boxes',
      'custom-jar-candle-boxes': 'jar-candle-boxes',
      'shipping-boxes-industry': 'shipping-boxes',
      'soap-boxes-industry': 'soap-boxes',
      'cigarette-boxes-industry': 'cigarette-boxes',
      'pre-roll-boxes-industry': 'pre-roll-boxes',
      'sweet-gift-boxes-industry': 'sweet-gift-boxes',
      'candle-shipping-boxes-industry': 'candle-shipping-boxes',
      'kraft-pillow-soap-boxes-industry': 'kraft-pillow-soap-boxes',
      'tshirt-boxes': 't-shirt-boxes',
      'tags-printing': 'printed-tags',
      'product-labels-bottle-labels': 'products-bottle-labels',
      'packing-tape': 'packing-tape',
    };
    
    // Check if there's a direct mapping
    if (slugMappings[slug]) {
      return slugMappings[slug];
    }
    
    // Try common variations
    if (slug.endsWith('-box') && !slug.endsWith('-boxes')) {
      const pluralSlug = slug.replace(/-box$/, '-boxes');
      if (ourRangeOfData[pluralSlug]) {
        return pluralSlug;
      }
    }
    
    if (slug.endsWith('-bag') && !slug.endsWith('-bags')) {
      const pluralSlug = slug.replace(/-bag$/, '-bags');
      if (ourRangeOfData[pluralSlug]) {
        return pluralSlug;
      }
    }
    
    if (slug.endsWith('-pouche') && !slug.endsWith('-pouches')) {
      const pluralSlug = slug.replace(/-pouche$/, '-pouches');
      if (ourRangeOfData[pluralSlug]) {
        return pluralSlug;
      }
    }
    
    // Return original slug if no mapping found
    return slug;
  };
  
  // Helper function to get parent category description from data files (same priority as cards)
  const getParentCategoryDescription = (): string | undefined => {
    // Priority: 1. productByMaterialData, 2. productByIndustryData, 3. mylarBoxesData, 4. shoppingBagsData, 5. otherData
    if (sectionSlug === 'product-by-material') {
      const materialCategory = productByMaterialData.find(cat => cat.slug === parentCategorySlug);
      if (materialCategory?.description) {
        return materialCategory.description;
      }
      
      // Also check direct categories
      if (parentCategorySlug === 'mylar-boxes') {
        return mylarBoxesData.description;
      }
      if (parentCategorySlug === 'shopping-bags') {
        return shoppingBagsData.description;
      }
      if (parentCategorySlug === 'other') {
        return otherData.description;
      }
    } else if (sectionSlug === 'product-by-industry') {
      const industryCategory = productByIndustryData.find(cat => cat.slug === parentCategorySlug);
      if (industryCategory?.description) {
        return industryCategory.description;
      }
    } else {
      // For other sections, check all data sources
      const materialCategory = productByMaterialData.find(cat => cat.slug === parentCategorySlug);
      if (materialCategory?.description) {
        return materialCategory.description;
      }
      
      const industryCategory = productByIndustryData.find(cat => cat.slug === parentCategorySlug);
      if (industryCategory?.description) {
        return industryCategory.description;
      }
      
      if (parentCategorySlug === 'mylar-boxes') {
        return mylarBoxesData.description;
      }
      if (parentCategorySlug === 'shopping-bags') {
        return shoppingBagsData.description;
      }
      if (parentCategorySlug === 'other') {
        return otherData.description;
      }
    }
    
    return undefined;
  };
  
  // Helper function to remove markdown asterisks and formatting
  const cleanMarkdown = (text: string): string => {
    if (!text) return text;
    return text
      .replace(/\*\*/g, '') // Remove bold markdown **
      .replace(/\s*\*\s*/g, ' ') // Remove asterisks with surrounding spaces
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  };
  
  // Helper function to get description using the same logic as cards
  const getCardDescription = (sub: SubCategory): string => {
    // Priority: 1. sub.description from productByMaterialData.ts, 2. OurRangeOfData description (with slug mapping), 3. default
    // Use sub.description first as it comes from productByMaterialData.ts which should match OurRangeOfData.ts
    if (sub.description) {
      return sub.description;
    }
    
    // Fallback to OurRangeOfData if sub.description doesn't exist
    const mappedSubSlug = mapSlugToOurRangeOfData(sub.slug);
    const rangeOfSubData = ourRangeOfData[mappedSubSlug];
    
    if (rangeOfSubData?.description) {
      return rangeOfSubData.description;
    }
    
    return `Premium ${sub.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`;
  };
  
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
  
  // List of subcategory slugs to hide
  const hiddenSubcategories = [
    'breakfast-cereal-boxes',
    'corn-flakes-boxes',
  ];

  // Filter out hidden subcategories
  const filteredSubcategories = subcategories.filter(
    sub => !hiddenSubcategories.includes(sub.slug)
  );

  const cardItems: CustomSubcategoryCard[] = customCards?.items?.length
    ? customCards.items.map(card => {
        // Apply OurRangeOfData to custom cards if available
        const mappedCardSlug = mapSlugToOurRangeOfData(card.slug);
        const rangeOfCardData = ourRangeOfData[mappedCardSlug];
        const description = rangeOfCardData?.description 
          ? cleanMarkdown(rangeOfCardData.description)
          : card.description;
        
        return {
          ...card,
          description
        };
      })
    : filteredSubcategories.map(sub => {
        // Use the same logic as getCardDescription helper
        const rawSubDescription = getCardDescription(sub);
        
        // Use heroImage if available (same as hero section), otherwise use first image from images array
        // This ensures subcategory cards show the same image as the hero section for all industry products
        const getSubcategoryImage = (): string => {
          // Check for heroImage first - this matches what the hero section uses
          if (sub.heroImage && typeof sub.heroImage === 'string' && sub.heroImage.trim().length > 0) {
            return sub.heroImage;
          }
          // Fallback to first image from images array if no heroImage
          if (sub.images && Array.isArray(sub.images) && sub.images.length > 0) {
            return sub.images[0];
          }
          // Final fallback
          return 'products-box-img_x8vu4b';
        };

        return {
          name: sub.name,
          slug: sub.slug,
          description: cleanMarkdown(rawSubDescription),
          image: getSubcategoryImage(),
          href: buildHref(sub.slug)
        };
      });
  
  // Get section description using the same logic as the cards
  // Priority: If on a subcategory page, use that subcategory's description; otherwise use first card's description
  let sectionDescription: string | undefined;
  
  // If we're on a specific subcategory page, use that subcategory's description
  if (currentSubcategory) {
    sectionDescription = getCardDescription(currentSubcategory);
  } else if (cardItems.length > 0) {
    // Otherwise, use the first card's description - get it using the same logic as cards
    if (customCards?.items?.length && customCards.items[0]) {
      const firstCard = customCards.items[0];
      const mappedCardSlug = mapSlugToOurRangeOfData(firstCard.slug);
      const rangeOfCardData = ourRangeOfData[mappedCardSlug];
      // Use the same logic: OurRangeOfData first, then card.description
      sectionDescription = rangeOfCardData?.description || firstCard.description;
    } else if (filteredSubcategories.length > 0) {
      // Use the same logic as getCardDescription for the first subcategory
      sectionDescription = getCardDescription(filteredSubcategories[0]);
    }
  }
  
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

  // Get heading and description from whyChooseUsData if available (fallback only)
  const whyChooseUsContent = whyChooseUsData[parentCategorySlug];
  const whyChooseUsDescription = whyChooseUsContent?.heading;
  
  // Get description from OurRangeOfData if available (fallback only)
  const mappedParentSlug = mapSlugToOurRangeOfData(parentCategorySlug);
  const rangeOfData = ourRangeOfData[mappedParentSlug];
  const rangeOfDescription = rangeOfData?.description;
  
  // Get parent category description from data files (fallback only)
  const parentCategoryDescription = getParentCategoryDescription();
  
  // Priority: 1. customDescription, 2. sectionDescription (from first card - same logic as cards), 3. parentCategoryDescription, 4. OurRangeOfData, 5. whyChooseUsData heading, 6. default
  const headingText = customHeading || `Our Range of ${parentCategoryName}`;
  const rawDescriptionText = customDescription || sectionDescription || parentCategoryDescription || rangeOfDescription || whyChooseUsDescription || `Explore our comprehensive range of ${parentCategoryName.toLowerCase()} packaging solutions. Each category is designed to meet specific industry needs and requirements.`;
  const descriptionText = cleanMarkdown(rawDescriptionText);

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
