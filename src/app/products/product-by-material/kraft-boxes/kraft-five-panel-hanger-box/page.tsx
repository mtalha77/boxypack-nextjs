import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Five Panel Hanger Boxes | Durable Packaging',
  description: 'Boxy Pack crafts premium five panel hanger boxes with fast delivery, free shipping, and top-quality kraft materials for professional packaging. Request Pricing.',
};

const KraftFivePanelHangerBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-five-panel-hanger-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-five-panel-hanger-box"
      pageType="subcategory"
    />
  );
};

export default KraftFivePanelHangerBoxPage;
