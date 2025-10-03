import React from 'react';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

const CorrugatedBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="corrugated-boxes"
    />
  );
};

export default CorrugatedBoxesPage;