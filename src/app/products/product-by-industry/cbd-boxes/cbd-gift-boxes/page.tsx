import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'CBD Gift Boxes | Premium Elegant Cannabis Packaging',
  description: 'Boxy Pack produces premium CBD gift boxes with fast turnaround, free shipping, and stylish design for professional and attractive cannabis gifting. Customize Now.',
};

const CbdGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cbd-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cbd-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cbd-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default CbdGiftBoxesPage;