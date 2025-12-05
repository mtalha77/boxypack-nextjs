import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Pre Roll Boxes | Premium Cannabis Packaging',
  description: 'Boxy Pack delivers premium custom pre roll boxes with fast turnaround, free shipping, and stylish design for professional and secure cannabis product packaging. Order Now.',
};

const PreRollBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pre-roll-boxes-industry');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="pre-roll-boxes-industry"
      pageType="category"
    />
  );
};

export default PreRollBoxesIndustryPage;