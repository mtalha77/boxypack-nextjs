import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../data/navigationData';
import CategoryPage from '../../components/product-page/CategoryPage';

export const metadata: Metadata = {
  title: 'Custom Shopping Bags | Premium Durable Packaging',
  description: 'Boxy Pack delivers premium custom shopping bags with fast turnaround, durable materials, and free shipping to enhance your brand packaging. Order Now.',
};

const ShoppingBagsPage = () => {
  const section = navigationData.find(s => s.slug === 'shopping-bags');
  const category = section?.categories?.[0]; // Shopping bags has one category
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="shopping-bags"
    />
  );
};

export default ShoppingBagsPage;