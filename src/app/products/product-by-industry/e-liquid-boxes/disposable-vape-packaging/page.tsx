import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Disposable Vape Boxes | Premium Packaging Solutions',
  description: 'Boxy Pack delivers premium disposable vape boxes with fast turnaround, free shipping, and sturdy design for safe and attractive e-cigarette packaging. Order Now.',
};

const DisposableVapePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'e-liquid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'disposable-vape-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="disposable-vape-packaging"
      pageType="subcategory"
    />
  );
};

export default DisposableVapePackagingPage;