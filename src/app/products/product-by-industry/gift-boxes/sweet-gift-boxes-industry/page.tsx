import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Sweet Gift Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack produces premium sweet gift boxes with fast turnaround, free shipping, and stylish designs to present chocolates, candies, and treats beautifully. Customize Now.',
};

const SweetGiftBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'sweet-gift-boxes-industry');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="sweet-gift-boxes-industry"
      pageType="subcategory"
    />
  );
};

export default SweetGiftBoxesIndustryPage;