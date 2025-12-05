import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Zipper Bags | Durable & Premium Packaging',
  description: 'Boxy Pack delivers durable custom zipper bags with fast turnaround, premium materials, and free shipping for secure, professional product packaging. Order Now.',
};

const ZipperBagPage = () => {
  const section = navigationData.find(s => s.slug === 'mylar-boxes');
  const category = section?.categories?.find(c => c.slug === 'mylar-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'zipper-bag');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="zipper-bag"
      pageType="subcategory"
    />
  );
};

export default ZipperBagPage;
