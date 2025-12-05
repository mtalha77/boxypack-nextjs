import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

export const metadata: Metadata = {
  title: 'Custom Bakery Boxes | Premium Packaging for Pastries',
  description: 'Boxy Pack offers premium bakery boxes with fast turnaround, free shipping, and durable design for stunning presentation. Order Now.',
};

const BakeryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="bakery-boxes"
    />
  );
};

export default BakeryBoxesPage;
