import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Lipstick Boxes | Luxury Cosmetic Packaging',
  description: 'Boxy Pack creates premium custom lipstick boxes with fast turnaround, free shipping, and elegant designs for standout cosmetic packaging. Order Now.',
};

const CustomLipstickBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-lipstick-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-lipstick-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomLipstickBoxesPage;