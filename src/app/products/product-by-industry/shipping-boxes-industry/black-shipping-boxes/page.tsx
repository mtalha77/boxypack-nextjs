import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Black Shipping Boxes | Premium Stylish Packaging',
  description: 'Boxy Pack produces premium black shipping boxes with fast turnaround, free shipping, and durable design for secure and professional product delivery. Customize Now.',
};

const BlackShippingBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'shipping-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'black-shipping-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="black-shipping-boxes"
      pageType="subcategory"
    />
  );
};

export default BlackShippingBoxesPage;