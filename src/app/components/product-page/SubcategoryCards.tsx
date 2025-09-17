'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubCategory } from '../../data/navigationData';

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
  if (!subcategories || subcategories.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 bg-gray-50 ${className}`} aria-labelledby="subcategories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {subcategories.map((subcategory, index) => (
            <Link
              key={subcategory.slug}
              href={`/products/${sectionSlug}/${parentCategorySlug}/${subcategory.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#0c6b76] hover:-translate-y-1"
              aria-label={`View ${subcategory.name} products`}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 relative overflow-hidden rounded-lg">
                <Image
                  src="/img/products-box-img.png"
                  alt={`${subcategory.name} packaging example`}
                  width={400}
                  height={300}
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-h4 font-semibold text-body-primary group-hover:text-heading-primary transition-colors duration-300 min-h-[3.5rem] flex items-center">
                  {subcategory.name}
                </h3>
                <p className="text-body-small text-body-secondary min-h-[4.5rem] flex items-start line-clamp-2">
                  {subcategory.description || `Premium ${subcategory.name.toLowerCase()} packaging solutions designed for optimal protection and presentation.`}
                </p>
                
                <div className="flex items-center text-heading-primary text-body-small font-medium group-hover:text-[#0ca6c2] transition-colors duration-300">
                  <span>Explore Products</span>
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
            </Link>
          ))}
        </div>
        
        {subcategories.length > 12 && (
          <div className="text-center mt-8">
            <p className="text-body-muted text-body-small">
              Showing {subcategories.length} {parentCategoryName.toLowerCase()} categories
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubcategoryCards;
