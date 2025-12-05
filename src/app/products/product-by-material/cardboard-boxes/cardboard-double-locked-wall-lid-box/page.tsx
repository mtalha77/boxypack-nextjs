import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Double Locked Wall Lid Boxes | Premium',
  description: 'Boxy Pack produces high-quality cardboard double locked wall lid boxes with fast delivery, free shipping, and premium finishes for professional packaging. Order Now.',
};

const CardboardDoubleLockedWallLidBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-double-locked-wall-lid-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-double-locked-wall-lid-box"
      pageType="subcategory"
    />
  );
};

export default CardboardDoubleLockedWallLidBoxPage;









