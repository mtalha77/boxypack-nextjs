import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom E-liquid Boxes | Premium Vape Packaging',
  description: 'Boxy Pack delivers premium custom e-liquid boxes with fast turnaround, free shipping, and stylish design to enhance vape product presentation. Order Now.',
};

const ELiquidBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'e-liquid-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="e-liquid-boxes"
      pageType="category"
    />
  );
};

export default ELiquidBoxesPage;