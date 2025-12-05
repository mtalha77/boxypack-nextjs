import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom T-Shirt Boxes | Premium Apparel Packaging',
  description: 'Boxy Pack produces high-quality T-shirt boxes with fast turnaround, free shipping, and stylish design to elevate clothing presentation and brand appeal. Customize Now.',
};

const TshirtBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'apparel-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'tshirt-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="tshirt-boxes"
      pageType="subcategory"
    />
  );
};

export default TshirtBoxesPage;