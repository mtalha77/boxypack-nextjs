import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Deluxe Gift Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack produces premium deluxe gift boxes with fast turnaround, free shipping, and stylish designs for luxurious and professional gift presentation. Order Now.',
};

const CustomDeluxeGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-deluxe-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-deluxe-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomDeluxeGiftBoxesPage;