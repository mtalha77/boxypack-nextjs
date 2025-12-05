import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Pizza Boxes | Premium Food Packaging',
  description: 'Boxy Pack delivers premium custom pizza boxes with fast turnaround, free shipping, and sturdy design to keep pizzas fresh and presentable. Order Now.',
};

const PizzaBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="pizza-boxes"
      pageType="category"
    />
  );
};

export default PizzaBoxesPage;