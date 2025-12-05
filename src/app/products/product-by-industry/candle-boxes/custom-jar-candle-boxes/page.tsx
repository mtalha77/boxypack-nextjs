import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Jar Candle Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack delivers high-quality jar candle boxes with fast turnaround, free shipping, and premium design to showcase candles professionally. Order Now.',
};

const CustomJarCandleBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'candle-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-jar-candle-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-jar-candle-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomJarCandleBoxesPage;