import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Tuck End Boxes | Durable Packaging',
  description: 'Boxy Pack produces premium cardboard tuck end boxes with fast delivery, free shipping, and low minimums for professional product packaging. Customize Now.',
};

const CardboardTuckEndBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-tuck-end-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-tuck-end-box"
      pageType="subcategory"
    />
  );
};

export default CardboardTuckEndBoxPage;

