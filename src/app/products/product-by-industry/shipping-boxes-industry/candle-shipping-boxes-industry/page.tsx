import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Candle Shipping Boxes | Premium Protective Packaging',
  description: 'Boxy Pack delivers premium candle shipping boxes with fast turnaround, free shipping, and secure design to protect candles during shipping. Order Now.',
};

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