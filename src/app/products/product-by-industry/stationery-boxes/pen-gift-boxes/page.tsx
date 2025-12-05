import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Pen Gift Boxes | Premium Custom Stationery Packaging',
  description: 'Boxy Pack delivers high-quality pen gift boxes with fast turnaround, free shipping, and elegant design for professional stationery gifting. Order Now.',
};

const PenGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'stationery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'pen-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pen-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default PenGiftBoxesPage;