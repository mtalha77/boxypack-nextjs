import React from 'react';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

const BakeryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="bakery-boxes"
    />
  );
};

export default BakeryBoxesPage;
