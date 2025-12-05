import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Gable Boxes | Premium Bakery & Gift Packaging',
  description: 'Boxy Pack produces high-quality gable boxes with fast turnaround, free shipping, and premium design for bakery treats and gift-ready packaging. Order Now.',
};

const CustomGableBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-gable-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-gable-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomGableBoxesPage;