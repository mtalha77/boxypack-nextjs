import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Retail Boxes | Premium Packaging for Products',
  description: 'Boxy Pack delivers premium retail boxes with fast turnaround, free shipping, and stylish designs to enhance the presentation of your products. Order Now.',
};

const RetailBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'retail-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="retail-boxes"
      pageType="category"
    />
  );
};

export default RetailBoxesPage;