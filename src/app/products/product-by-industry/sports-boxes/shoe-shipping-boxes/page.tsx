import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Shoe Shipping Boxes | Premium Durable Packaging',
  description: 'Boxy Pack delivers premium shoe shipping boxes with fast turnaround, free shipping, and sturdy design to ensure safe delivery and professional presentation. Order Now.',
};

const ShoeShippingBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'sports-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'shoe-shipping-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="shoe-shipping-boxes"
      pageType="subcategory"
    />
  );
};

export default ShoeShippingBoxesPage;