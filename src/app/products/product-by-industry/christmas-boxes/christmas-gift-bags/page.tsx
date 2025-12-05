import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Gift Bags | Premium Holiday Packaging',
  description: 'Boxy Pack delivers high-quality Christmas gift bags with fast turnaround, free shipping, and stylish design to make holiday presents look elegant. Order Now.',
};

const ChristmasGiftBagsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-gift-bags');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-gift-bags"
      pageType="subcategory"
    />
  );
};

export default ChristmasGiftBagsPage;