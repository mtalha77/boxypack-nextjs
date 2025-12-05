import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Candle Shipping Boxes | Durable Premium Packaging',
  description: 'Boxy Pack delivers durable candle shipping boxes with fast turnaround, free shipping, and secure, premium packaging to protect your products. Order Now.',
};

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