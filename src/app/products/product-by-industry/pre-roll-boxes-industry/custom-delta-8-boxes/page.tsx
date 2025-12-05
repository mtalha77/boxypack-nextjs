import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Delta 8 Pre Roll Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium Delta 8 pre roll boxes with fast turnaround, free shipping, and stylish design for professional cannabis product packaging. Order Now.',
};

const CustomDelta8BoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pre-roll-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-delta-8-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-delta-8-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomDelta8BoxesPage;