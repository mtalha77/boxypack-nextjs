'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
              href={`/products/${sectionSlug}/${parentCategorySlug}/${subcategory.slug}`}
              className="group w-72 h-80 bg-[var(--color-teal-deep)] p-3 flex flex-col gap-1 rounded-br-3xl hover:shadow-2xl transition-all duration-500"
              aria-label={`View ${subcategory.name} products`}
            >
              <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-[var(--color-brown-dark2)] via-[var(--color-brown-golden)] to-[var(--color-turquoise-bright)] hover:contrast-100 relative overflow-hidden rounded-lg">
                <Image
                  src="/img/products-box-img.png"
                  alt={`${subcategory.name} packaging example`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-xl text-gray-50 font-bold">{subcategory.name}</span>
                  <p className="text-xs text-gray-400 line-clamp-1">
                    {subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`}
                  </p>
                </div>
                <button className="hover:bg-[var(--color-teal-blue)] text-gray-50 bg-[var(--color-turquoise-bright)] py-2 rounded-br-xl transition-colors duration-200">
                  Add to cart
                </button>
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
