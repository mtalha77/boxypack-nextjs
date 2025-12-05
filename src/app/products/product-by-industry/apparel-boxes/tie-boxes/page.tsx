import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Tie Boxes | Premium Stylish Packaging',
  description: 'Boxy Pack delivers premium tie boxes with fast turnaround, free shipping, and elegant design to enhance your clothing accessory presentation. Order Now.',
};

const TieBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'apparel-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'tie-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="tie-boxes"
      pageType="subcategory"
    />
  );
};

export default TieBoxesPage;