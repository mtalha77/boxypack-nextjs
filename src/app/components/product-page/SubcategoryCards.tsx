'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { SubCategory } from '../../data/navigationData';
import LightBlueBackground from '../../UI/LightBlueBackground';

interface SubcategoryCardsProps {
  subcategories: SubCategory[];
  parentCategoryName: string;
  parentCategorySlug: string;
  sectionSlug: string;
  className?: string;
}

const SubcategoryCards: React.FC<SubcategoryCardsProps> = ({
  subcategories,
  parentCategoryName,
  parentCategorySlug,
  sectionSlug,
  className = ''
}) => {
  const [showAll, setShowAll] = useState(false);
  
  // Helper function to generate correct URL based on section
  const getSubcategoryUrl = (subcategorySlug: string) => {
    let url: string;
    
    if (sectionSlug === 'product-by-industry') {
      url = `/products/${sectionSlug}/${parentCategorySlug}/${subcategorySlug}`;
    } else if (sectionSlug === 'product-by-material') {
      // Check if this is a direct category or a material category
      const directCategories = ['mylar-boxes', 'shopping-bags', 'other'];
      if (directCategories.includes(parentCategorySlug)) {
        url = `/products/${parentCategorySlug}/${subcategorySlug}`;
      } else {
        // Material categories (cardboard-boxes, corrugated-boxes, kraft-boxes, rigid-boxes)
        url = `/products/${sectionSlug}/${parentCategorySlug}/${subcategorySlug}`;
      }
    } else {
      url = `/products/${parentCategorySlug}/${subcategorySlug}`;
    }
    
    return url;
  };
  
  if (!subcategories || subcategories.length === 0) {
    return null;
  }

  // Show only first 4 cards initially, or all if showAll is true
  const displayedSubcategories = showAll ? subcategories : subcategories.slice(0, 4);
  const hasMoreCards = subcategories.length > 4;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    
    // If showing less (collapsing), scroll to the subcategory section
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
      }, 100); // Small delay to allow state update to complete
    }
  };

  return (
    <LightBlueBackground className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="subcategories-heading">
        <div className="text-center mb-12">
          <h2 
            id="subcategories-heading"
            className="text-h2 text-body-primary mb-4"
          >
           Our Range of {parentCategoryName}
          </h2>
          <p className="text-body-large text-body-secondary max-w-3xl mx-auto">
            Explore our comprehensive range of {parentCategoryName.toLowerCase()} packaging solutions. 
            Each category is designed to meet specific industry needs and requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedSubcategories.map((subcategory, index) => (
            <Link 
              key={subcategory.slug}
              href={getSubcategoryUrl(subcategory.slug)}
              className="group max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 block"
            >
              <CldImage
                src="products-box-img_x8vu4b"
                alt={`${subcategory.name} packaging example`}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[var(--color-teal-deep)] line-clamp-2 transition-colors duration-200">
                  {subcategory.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 line-clamp-2 min-h-[3rem]">
                  {subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`}
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
        
        {/* Show All / Show Less Button */}
        {hasMoreCards && (
          <div className="text-center mt-8">
            <button
              onClick={handleToggleShowAll}
              className="inline-flex items-center px-6 py-3 bg-[#0c6b76] text-white font-medium rounded-lg hover:bg-[#0a5a65] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0c6b76] focus:ring-offset-2"
            >
              {showAll ? 'Show Less' : `Show All ${subcategories.length} Categories`}
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
    </LightBlueBackground>
  );
};

export default SubcategoryCards;
