import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Food Boxes | Premium Packaging for Your Products',
  description: 'Boxy Pack delivers premium custom food boxes with fast turnaround, free shipping, and durable, hygienic design for standout product presentation. Order Now.',
};

const FoodBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="food-boxes"
      pageType="category"
    />
  );
};

export default FoodBoxesPage;