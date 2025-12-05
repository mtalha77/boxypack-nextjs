import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cereal Boxes | Premium Breakfast Packaging',
  description: 'Boxy Pack delivers premium custom cereal boxes with fast turnaround, free shipping, and stylish design to showcase cereals attractively. Order Now.',
};

const CerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="cereal-boxes"
      pageType="category"
    />
  );
};

export default CerealBoxesPage;