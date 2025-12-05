import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

export const metadata: Metadata = {
  title: 'Custom Kraft Boxes | Eco-Friendly Packaging Solutions',
  description: 'Boxy Pack offers premium kraft boxes with eco-friendly materials, fast turnaround, and free shipping to elevate your brand\'s packaging. Shop Today.',
};

const KraftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="kraft-boxes"
    />
  );
};

export default KraftBoxesPage;
