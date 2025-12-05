import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Side Lock Six Corner Boxes | Premium',
  description: 'Boxy Pack delivers high-quality kraft side lock six corner boxes with fast turnaround, free shipping, and durable construction for superior packaging. Order Now.',
};

const KraftSideLockSixCornerBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-side-lock-six-corner-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-side-lock-six-corner-box"
      pageType="subcategory"
    />
  );
};

export default KraftSideLockSixCornerBoxPage;
