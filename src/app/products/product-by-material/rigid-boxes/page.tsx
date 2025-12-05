import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

export const metadata: Metadata = {
  title: 'Luxury Custom Rigid Boxes Printing | Premium Packaging',
  description: 'Boxy Pack delivers luxury rigid boxes with premium quality, fast turnaround, and free shipping for elegant product packaging. Get a Free Quote.',
};

const RigidBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'rigid-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="rigid-boxes"
    />
  );
};

export default RigidBoxesPage;
