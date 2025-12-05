import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Large Gift Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium large gift boxes with fast turnaround, free shipping, and elegant designs for impressive gift presentation. Order Now.',
};

const LargeGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'large-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="large-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default LargeGiftBoxesPage;