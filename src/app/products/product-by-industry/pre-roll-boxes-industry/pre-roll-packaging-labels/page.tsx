import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Pre Roll Packaging Labels | Premium Custom Cannabis Boxes',
  description: 'Boxy Pack produces premium pre roll packaging labels with fast turnaround, free shipping, and elegant design to brand and enhance cannabis products. Customize Now.',
};

const PreRollPackagingLabelsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pre-roll-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'pre-roll-packaging-labels');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pre-roll-packaging-labels"
      pageType="subcategory"
    />
  );
};

export default PreRollPackagingLabelsPage;