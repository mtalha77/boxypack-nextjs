import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Bakery Boxes | Elegant Cake Packaging',
  description: 'Boxy Pack offers premium kraft bakery boxes with fast turnaround, free shipping, and low minimums to make your baked goods look irresistible. Shop Today.',
};

const KraftBakeryCakeBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-bakery-cake-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-bakery-cake-box"
      pageType="subcategory"
    />
  );
};

export default KraftBakeryCakeBoxPage;