import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Seal End Auto Bottom Boxes | Premium',
  description: 'Boxy Pack delivers high-quality cardboard seal end auto bottom boxes with fast turnaround, free shipping, and premium printing for elegant product packaging. Order Now.',
};

const CardboardSealEndAutoBottomBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-seal-end-auto-bottom-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-seal-end-auto-bottom-box"
      pageType="subcategory"
    />
  );
};

export default CardboardSealEndAutoBottomBoxPage;









