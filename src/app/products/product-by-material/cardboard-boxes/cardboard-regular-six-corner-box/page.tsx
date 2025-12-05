import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Regular Six Corner Boxes | Durable',
  description: 'Boxy Pack produces premium cardboard regular six corner boxes with fast delivery, free shipping, and low minimums for professional packaging. Order Now.',
};

const CardboardRegularSixCornerBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-regular-six-corner-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-regular-six-corner-box"
      pageType="subcategory"
    />
  );
};

export default CardboardRegularSixCornerBoxPage;









