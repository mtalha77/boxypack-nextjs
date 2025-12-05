import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Luxury Candle Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack delivers high-quality luxury candle boxes with fast turnaround, free shipping, and sophisticated design to elevate your candle brand. Order Now.',
};

const LuxuryCandleBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'candle-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'luxury-candle-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="luxury-candle-boxes"
      pageType="subcategory"
    />
  );
};

export default LuxuryCandleBoxesPage;