import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Double Locked Wall Lid Boxes | Strong',
  description: 'Boxy Pack delivers durable corrugated double locked wall lid boxes with fast turnaround, free shipping, and premium quality for professional packaging. Order Now.',
};

const CorrugatedDoubleLockedWallLidBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-double-locked-wall-lid-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-double-locked-wall-lid-box"
      pageType="subcategory"
    />
  );
};

export default CorrugatedDoubleLockedWallLidBoxPage;
