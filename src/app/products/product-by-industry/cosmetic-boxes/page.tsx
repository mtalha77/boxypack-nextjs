import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

export const metadata: Metadata = {
  title: 'Custom Cosmetic Boxes | Premium Packaging for Beauty',
  description: 'Boxy Pack delivers premium custom cosmetic boxes with fast turnaround, free shipping, and elegant designs for standout beauty product packaging. Order Now.',
};

const CosmeticBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="cosmetic-boxes"
    />
  );
};

export default CosmeticBoxesPage;