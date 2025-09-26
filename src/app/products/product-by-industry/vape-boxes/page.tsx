import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const VapeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="vape-boxes"
      pageType="category"
    />
  );
};

export default VapeBoxesPage;
