import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Briefcase Boxes | Premium Packaging',
  description: 'Boxy Pack delivers premium corrugated briefcase style boxes with fast turnaround, free shipping, and durable materials for stylish product presentation. Order Now.',
};

const CorrugatedBriefCaseStyleBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-brief-case-style-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-brief-case-style-box"
      pageType="subcategory"
    />
  );
};

export default CorrugatedBriefCaseStyleBoxPage;
