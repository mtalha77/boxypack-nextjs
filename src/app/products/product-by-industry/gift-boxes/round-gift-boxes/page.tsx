import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Round Gift Boxes | Premium Stylish Custom Packaging',
  description: 'Boxy Pack produces premium round gift boxes with fast turnaround, free shipping, and luxurious designs for an unforgettable gift presentation. Customize Now.',
};

const RoundGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'round-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="round-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default RoundGiftBoxesPage;