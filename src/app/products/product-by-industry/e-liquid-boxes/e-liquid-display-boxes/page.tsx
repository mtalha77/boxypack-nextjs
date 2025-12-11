import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'E-liquid Display Boxes | Premium Vape Packaging',
  description: 'Boxy Pack delivers premium e-liquid display boxes with fast turnaround, free shipping, and stylish design for attractive and secure vape product presentation. Order Now.',
};

const ELiquidDisplayBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-and-e-cigarette-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'e-liquid-display-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="e-liquid-display-boxes"
      pageType="subcategory"
    />
  );
};

export default ELiquidDisplayBoxesPage;
