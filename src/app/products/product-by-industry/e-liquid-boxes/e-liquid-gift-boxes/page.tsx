import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'E-liquid Gift Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces premium e-liquid gift boxes with fast turnaround, free shipping, and elegant design to present vape products professionally. Customize Now.',
};

const ELiquidGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'e-liquid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'e-liquid-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="e-liquid-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default ELiquidGiftBoxesPage;
