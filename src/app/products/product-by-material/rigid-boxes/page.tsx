import React from 'react';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

const RigidBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'rigid-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="rigid-boxes"
    />
  );
};

export default RigidBoxesPage;
