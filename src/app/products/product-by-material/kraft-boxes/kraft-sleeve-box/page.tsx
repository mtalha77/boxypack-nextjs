import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Sleeve Boxes | Premium Printed Packaging',
  description: 'Boxy Pack produces high-quality kraft sleeve boxes with fast turnaround, free shipping, and premium finishes for stylish product packaging. Customize Now.',
};

const KraftSleeveBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-sleeve-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-sleeve-box"
      pageType="subcategory"
    />
  );
};

export default KraftSleeveBoxPage;
