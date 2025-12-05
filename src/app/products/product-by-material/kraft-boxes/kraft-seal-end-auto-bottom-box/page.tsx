import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Seal End Auto Bottom Boxes | Fast Delivery',
  description: 'Boxy Pack designs kraft seal end auto bottom boxes with fast turnaround, free shipping, and premium quality for professional-grade packaging. Order Now.',
};

const KraftSealEndAutoBottomBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-seal-end-auto-bottom-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-seal-end-auto-bottom-box"
      pageType="subcategory"
    />
  );
};

export default KraftSealEndAutoBottomBoxPage;
