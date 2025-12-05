import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Soap Bar Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces high-quality soap bar boxes with fast turnaround, free shipping, and stylish design to protect and present your soap professionally. Order Now.',
};

const SoapBarBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'soap-bar-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="soap-bar-box"
      pageType="subcategory"
    />
  );
};

export default SoapBarBoxPage;