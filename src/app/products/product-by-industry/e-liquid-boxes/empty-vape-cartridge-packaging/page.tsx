import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Empty Vape Cartridge Boxes | Premium Packaging',
  description: 'Boxy Pack produces high-quality empty vape cartridge boxes with fast turnaround, free shipping, and durable design for professional e-cigarette packaging. Customize Now.',
};

const EmptyVapeCartridgePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'e-liquid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'empty-vape-cartridge-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="empty-vape-cartridge-packaging"
      pageType="subcategory"
    />
  );
};

export default EmptyVapeCartridgePackagingPage;