import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Candle Boxes | Premium Packaging for Candles',
  description: 'Boxy Pack delivers premium candle boxes with fast turnaround, free shipping, and elegant designs to enhance candle presentation and branding. Order Now.',
};

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