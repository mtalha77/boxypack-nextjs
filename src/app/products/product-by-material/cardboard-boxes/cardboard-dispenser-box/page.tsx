import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Dispenser Boxes | Durable Packaging',
  description: 'Boxy Pack produces premium cardboard dispenser boxes with fast turnaround, free shipping, and high-quality printing for professional branding. Get a Free Quote.',
};

const CardboardDispenserBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-dispenser-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-dispenser-box"
      pageType="subcategory"
    />
  );
};

export default CardboardDispenserBoxPage;
