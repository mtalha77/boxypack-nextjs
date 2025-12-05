import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Shipping Boxes | Premium Durable Packaging',
  description: 'Boxy Pack delivers premium custom shipping boxes with fast turnaround, free shipping, and strong design to protect your products during transit. Order Now.',
};

const ShippingBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'shipping-boxes-industry');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="shipping-boxes-industry"
      pageType="category"
    />
  );
};

export default ShippingBoxesIndustryPage;