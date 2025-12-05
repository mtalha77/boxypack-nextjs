import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Underwear Boxes | Premium Packaging Solutions',
  description: 'Boxy Pack delivers premium underwear boxes with fast turnaround, free shipping, and durable design to showcase apparel elegantly and professionally. Order Now.',
};

const UnderwearBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'apparel-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'underwear-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="underwear-boxes"
      pageType="subcategory"
    />
  );
};

export default UnderwearBoxesPage;