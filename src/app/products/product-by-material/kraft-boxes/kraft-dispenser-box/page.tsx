import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Dispenser Boxes | Premium Packaging',
  description: 'Boxy Pack produces premium kraft dispenser boxes with fast turnaround, free shipping, and professional finishes for stylish product packaging. Order Now.',
};

const KraftDispenserBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-dispenser-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-dispenser-box"
      pageType="subcategory"
    />
  );
};

export default KraftDispenserBoxPage;
