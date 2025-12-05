import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Seal End Auto Bottom Boxes | Premium',
  description: 'Boxy Pack produces high-quality corrugated seal end auto bottom boxes with fast turnaround, free shipping, and premium construction for elegant packaging. Shop Today.',
};

const CorrugatedSealEndAutoBottomBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-seal-end-auto-bottom-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-seal-end-auto-bottom-box"
      pageType="subcategory"
    />
  );
};

export default CorrugatedSealEndAutoBottomBoxPage;
