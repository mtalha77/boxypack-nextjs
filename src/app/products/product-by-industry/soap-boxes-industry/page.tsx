import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Soap Boxes | Premium Packaging for Soap Products',
  description: 'Boxy Pack delivers premium custom soap boxes with fast turnaround, free shipping, and stylish design to showcase and protect soap products. Order Now.',
};

const SoapBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="soap-boxes-industry"
      pageType="category"
    />
  );
};

export default SoapBoxesIndustryPage;