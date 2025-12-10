import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../data/navigationData';
import CategoryPage from '../../components/product-page/CategoryPage';

export const metadata: Metadata = {
  title: 'Custom Mailer Pouches | Premium Durable Packaging by Boxy',
  description: 'Boxy Pack delivers premium custom mailer pouches with fast turnaround, eco-friendly materials, and free shipping for standout product packaging. Order Now.',
};

const MylarBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'mylar-boxes');
  const category = section?.categories?.[0]; // Mylar boxes has one category
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPage
      section={section}
      category={category}
      slug="mylar-boxes"
    />
  );
};

export default MylarBoxesPage;