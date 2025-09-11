import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CandleShippingBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'candle-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'candle-shipping-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="candle-shipping-boxes"
      pageType="subcategory"
    />
  );
};

export default CandleShippingBoxesPage;