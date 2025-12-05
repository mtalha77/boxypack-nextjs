import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Jewelry Subscription Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces premium jewelry subscription boxes with fast turnaround, free shipping, and elegant design for recurring jewelry delivery. Customize Now.',
};

const JewelrySubscriptionBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'jewelry-subscription-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="jewelry-subscription-box"
      pageType="subcategory"
    />
  );
};

export default JewelrySubscriptionBoxPage;