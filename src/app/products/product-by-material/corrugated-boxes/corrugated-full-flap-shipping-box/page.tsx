import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Full Flap Shipping Boxes | Strong',
  description: 'Boxy Pack produces high-quality corrugated full flap shipping boxes with fast turnaround, free shipping, and premium strength for safe shipping. Shop Today.',
};

const CorrugatedFullFlapShippingBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-full-flap-shipping-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-full-flap-shipping-box"
      pageType="subcategory"
    />
  );
};

export default CorrugatedFullFlapShippingBoxPage;
