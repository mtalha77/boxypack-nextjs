import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'E-liquid Bottle Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces high-quality e-liquid bottle boxes with fast turnaround, free shipping, and durable design for professional vape product display. Customize Now.',
};

const ELiquidBottleBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'e-liquid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'e-liquid-bottle-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="e-liquid-bottle-boxes"
      pageType="subcategory"
    />
  );
};

export default ELiquidBottleBoxesPage;
