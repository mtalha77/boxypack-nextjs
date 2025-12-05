import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import CategoryPage from '../../../components/product-page/CategoryPage';

export const metadata: Metadata = {
  title: 'Custom Cardboard Boxes | Durable & Premium Packaging',
  description: 'Boxy Pack offers premium cardboard boxes with fast turnaround, free shipping, and eco-friendly durable materials for all your packaging needs. Shop Today.',
};

const CardboardBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="cardboard-boxes"
    />
  );
};

export default CardboardBoxesPage;