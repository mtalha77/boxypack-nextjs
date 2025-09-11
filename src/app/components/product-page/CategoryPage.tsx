'use client';

import React from 'react';
import { NavigationSection, MainCategory } from '../../data/navigationData';
import ProductPageTemplate from './page';
import CategoryPageSEO from './CategoryPageSEO';

interface CategoryPageProps {
  section: NavigationSection;
  category: MainCategory;
  slug: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  section,
  category,
  slug
}) => {
  return (
    <>
      <CategoryPageSEO section={section} category={category} />
      <ProductPageTemplate
        section={section}
        category={category}
        slug={slug}
        pageType="category"
      />
    </>
  );
};

export default CategoryPage;
