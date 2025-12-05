import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Soap Wrapping Paper | Premium Custom Packaging',
  description: 'Boxy Pack produces high-quality soap wrapping paper with fast turnaround, free shipping, and attractive design for professional soap packaging. Shop Today.',
};

const SoapWrappingPaperPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'soap-wrapping-paper');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="soap-wrapping-paper"
      pageType="subcategory"
    />
  );
};

export default SoapWrappingPaperPage;