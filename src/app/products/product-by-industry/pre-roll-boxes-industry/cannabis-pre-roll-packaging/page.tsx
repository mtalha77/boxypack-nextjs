import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Cannabis Pre Roll Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces high-quality cannabis pre roll boxes with fast turnaround, free shipping, and durable design for safe and attractive cannabis product presentation. Customize Now.',
};

const CannabisPreRollPackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pre-roll-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cannabis-pre-roll-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cannabis-pre-roll-packaging"
      pageType="subcategory"
    />
  );
};

export default CannabisPreRollPackagingPage;