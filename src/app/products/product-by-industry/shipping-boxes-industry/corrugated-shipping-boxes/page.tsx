import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Corrugated Shipping Boxes | Strong Premium Packaging',
  description: 'Boxy Pack produces durable corrugated shipping boxes with fast turnaround, free shipping, and sturdy construction for safe product transit. Shop Today.',
};

const CorrugatedShippingBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'shipping-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-shipping-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-shipping-boxes"
      pageType="subcategory"
    />
  );
};

export default CorrugatedShippingBoxesPage;