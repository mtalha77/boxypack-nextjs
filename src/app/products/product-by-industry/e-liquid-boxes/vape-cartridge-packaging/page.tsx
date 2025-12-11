import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Vape Cartridge Boxes | Premium Stylish Packaging',
  description: 'Boxy Pack delivers premium vape cartridge boxes with fast turnaround, free shipping, and elegant design for safe and attractive e-cigarette product display. Order Now.',
};

const VapeCartridgePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-and-e-cigarette-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'vape-cartridge-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="vape-cartridge-packaging"
      pageType="subcategory"
    />
  );
};

export default VapeCartridgePackagingPage;