import React from 'react';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

const CosmeticBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="cosmetic-boxes"
    />
  );
};

export default CosmeticBoxesPage;