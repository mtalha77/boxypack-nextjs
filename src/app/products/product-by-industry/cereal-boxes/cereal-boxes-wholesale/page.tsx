import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Wholesale Cereal Boxes | Premium Bulk Packaging',
  description: 'Boxy Pack produces premium wholesale cereal boxes with fast turnaround, free shipping, and durable design for bulk cereal product packaging. Customize Now.',
};

const CerealBoxesWholesalePage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cereal-boxes-wholesale');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cereal-boxes-wholesale"
      pageType="subcategory"
    />
  );
};

export default CerealBoxesWholesalePage;