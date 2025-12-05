import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Christmas Boxes | Premium Holiday Packaging',
  description: 'Boxy Pack delivers premium custom Christmas boxes with fast turnaround, free shipping, and stylish designs to make holiday gifts memorable. Order Now.',
};

const ChristmasBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="christmas-boxes"
      pageType="category"
    />
  );
};

export default ChristmasBoxesPage;