import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Dispenser Boxes | Premium Retail Packaging',
  description: 'Boxy Pack produces premium custom dispenser boxes with fast turnaround, free shipping, and elegant design for practical and attractive product display. Shop Today.',
};

const CustomDispenserBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'retail-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-dispenser-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-dispenser-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomDispenserBoxesPage;