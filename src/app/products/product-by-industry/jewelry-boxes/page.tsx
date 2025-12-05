import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Jewelry Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack delivers premium jewelry boxes with fast turnaround, free shipping, and stylish designs to enhance the presentation of all jewelry items. Order Now.',
};

const JewelryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="jewelry-boxes"
      pageType="category"
    />
  );
};

export default JewelryBoxesPage;