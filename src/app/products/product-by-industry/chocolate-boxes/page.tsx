import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Chocolate Boxes | Premium Sweet Packaging',
  description: 'Boxy Pack delivers premium custom chocolate boxes with fast turnaround, free shipping, and stylish designs to make chocolates look irresistible. Order Now.',
};

const ChocolateBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="chocolate-boxes"
      pageType="category"
    />
  );
};

export default ChocolateBoxesPage;