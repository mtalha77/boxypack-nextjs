import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Butter Paper | Premium Food Packaging',
  description: 'Boxy Pack produces premium butter paper with fast turnaround, free shipping, and durable design for hygienic and attractive food product packaging. Customize Now.',
};

const ButterPaperPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'butter-paper');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="butter-paper"
      pageType="subcategory"
    />
  );
};

export default ButterPaperPage;