import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const CandleBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'candle-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="candle-boxes"
      pageType="category"
    />
  );
};

export default CandleBoxesPage;