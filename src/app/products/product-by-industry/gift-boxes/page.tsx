import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Gift Boxes | Premium Packaging for Every Occasion',
  description: 'Boxy Pack delivers premium custom gift boxes with fast turnaround, free shipping, and stylish designs to elevate any gift presentation. Order Now.',
};

const GiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="gift-boxes"
      pageType="category"
    />
  );
};

export default GiftBoxesPage;