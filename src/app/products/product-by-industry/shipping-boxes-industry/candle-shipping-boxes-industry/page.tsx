import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CandleShippingBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'shipping-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'candle-shipping-boxes-industry');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="candle-shipping-boxes-industry"
      pageType="subcategory"
    />
  );
};

export default CandleShippingBoxesIndustryPage;