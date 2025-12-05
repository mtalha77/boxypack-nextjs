import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom CBD Boxes | Premium Packaging for Cannabis',
  description: 'Boxy Pack delivers premium custom CBD boxes with fast turnaround, free shipping, and stylish design to enhance cannabis product presentation. Order Now.',
};

const CbdBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cbd-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="cbd-boxes"
      pageType="category"
    />
  );
};

export default CbdBoxesPage;