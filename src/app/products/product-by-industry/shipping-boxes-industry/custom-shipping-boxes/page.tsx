import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Shipping Boxes | Premium Durable Packaging',
  description: 'Boxy Pack delivers premium custom shipping boxes with fast turnaround, free shipping, and strong design to protect your products during transit. Order Now.',
};

const CustomShippingBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'shipping-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-shipping-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-shipping-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomShippingBoxesPage;