import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Apparel Boxes | Premium Packaging for Clothing',
  description: 'Boxy Pack delivers premium custom apparel boxes with fast turnaround, free shipping, and stylish design to enhance your clothing product presentation. Order Now.',
};

const ApparelBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'apparel-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="apparel-boxes"
      pageType="category"
    />
  );
};

export default ApparelBoxesPage;