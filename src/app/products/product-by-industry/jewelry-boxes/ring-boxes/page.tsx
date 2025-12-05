import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Ring Boxes | Premium Jewelry Packaging',
  description: 'Boxy Pack produces premium ring boxes with fast turnaround, free shipping, and elegant design for professional jewelry presentation. Customize Now.',
};

const RingBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'ring-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="ring-boxes"
      pageType="subcategory"
    />
  );
};

export default RingBoxesPage;