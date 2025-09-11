import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const PizzaBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="pizza-boxes"
      pageType="category"
    />
  );
};

export default PizzaBoxesPage;