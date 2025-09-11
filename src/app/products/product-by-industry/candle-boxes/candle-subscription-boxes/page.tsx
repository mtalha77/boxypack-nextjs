import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CandleSubscriptionBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'candle-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'candle-subscription-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="candle-subscription-boxes"
      pageType="subcategory"
    />
  );
};

export default CandleSubscriptionBoxesPage;