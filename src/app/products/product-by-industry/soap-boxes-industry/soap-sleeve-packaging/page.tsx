import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Soap Sleeve Packaging | Premium Custom Boxes',
  description: 'Boxy Pack produces high-quality soap sleeve packaging with fast turnaround, free shipping, and durable design for professional soap presentation. Customize Now.',
};

const SoapSleevePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'soap-sleeve-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="soap-sleeve-packaging"
      pageType="subcategory"
    />
  );
};

export default SoapSleevePackagingPage;