import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Premium Bakery Gift Boxes | Custom Elegant Packaging',
  description: 'Boxy Pack delivers premium bakery gift boxes with fast turnaround, free shipping, and stylish designs for bakery products and gifts. Customize Now.',
};

const BakeryGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'bakery-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="bakery-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default BakeryGiftBoxesPage;