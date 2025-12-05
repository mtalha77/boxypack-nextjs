import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Packing Tape | Premium Branded Packaging',
  description: 'Boxy Pack delivers premium custom packing tape with fast turnaround, free shipping, and stylish design to secure packages and boost brand visibility. Order Now.',
};

const PackingTapePage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'packing-tape');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="packing-tape"
      pageType="subcategory"
    />
  );
};

export default PackingTapePage;