import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Gable Boxes | Durable & Premium',
  description: 'Boxy Pack offers premium corrugated gable boxes with fast turnaround, free shipping, and high-quality materials for stylish and strong packaging. Customize Now.',
};

const CorrugatedGableBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-gable-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-gable-box"
      pageType="subcategory"
    />
  );
};

export default CorrugatedGableBoxPage;
