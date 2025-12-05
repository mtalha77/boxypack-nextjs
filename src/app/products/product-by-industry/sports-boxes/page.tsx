import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Sports Boxes | Premium Packaging for Gear',
  description: 'Boxy Pack delivers premium sports boxes with fast turnaround, free shipping, and durable design to protect and present sports products professionally. Order Now.',
};

const SportsBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'sports-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="sports-boxes"
      pageType="category"
    />
  );
};

export default SportsBoxesPage;