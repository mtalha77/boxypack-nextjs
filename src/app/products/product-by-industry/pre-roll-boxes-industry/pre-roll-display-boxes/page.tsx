import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Pre Roll Display Boxes | Premium Cannabis Packaging',
  description: 'Boxy Pack delivers premium pre roll display boxes with fast turnaround, free shipping, and stylish design for professional retail cannabis display. Order Now.',
};

const PreRollDisplayBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pre-roll-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'pre-roll-display-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pre-roll-display-boxes"
      pageType="subcategory"
    />
  );
};

export default PreRollDisplayBoxesPage;