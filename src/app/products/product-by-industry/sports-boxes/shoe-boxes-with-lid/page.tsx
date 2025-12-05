import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Shoe Boxes with Lid | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium shoe boxes with lid, fast turnaround, free shipping, and stylish design for secure and attractive footwear packaging. Order Now.',
};

const ShoeBoxesWithLidPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'sports-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'shoe-boxes-with-lid');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="shoe-boxes-with-lid"
      pageType="subcategory"
    />
  );
};

export default ShoeBoxesWithLidPage;