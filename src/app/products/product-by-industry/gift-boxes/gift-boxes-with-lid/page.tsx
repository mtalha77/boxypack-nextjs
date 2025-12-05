import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Gift Boxes with Lid | Premium Custom Packaging',
  description: 'Boxy Pack delivers high-quality gift boxes with lid, fast turnaround, free shipping, and elegant designs to elevate gift presentation. Shop Today.',
};

const GiftBoxesWithLidPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'gift-boxes-with-lid');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="gift-boxes-with-lid"
      pageType="subcategory"
    />
  );
};

export default GiftBoxesWithLidPage;