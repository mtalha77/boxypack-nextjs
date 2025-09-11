import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const KraftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="kraft-boxes"
      pageType="category"
    />
  );
};

export default KraftBoxesPage;
