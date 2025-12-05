import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Chocolate Gift Boxes | Premium Sweet Packaging',
  description: 'Boxy Pack produces high-quality chocolate gift boxes with fast turnaround, free shipping, and elegant design for professional and festive chocolate gifting. Customize Now.',
};

const ChocolateGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'chocolate-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="chocolate-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default ChocolateGiftBoxesPage;