import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Vape Boxes | Premium E-Cigarette Packaging',
  description: 'Boxy Pack delivers premium custom vape boxes with fast turnaround, free shipping, and stylish design to enhance your e-cigarette product presentation. Order Now.',
};

const VapeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="vape-boxes"
      pageType="category"
    />
  );
};

export default VapeBoxesPage;
