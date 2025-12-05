import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Five Panel Hanger Boxes | Premium',
  description: 'Boxy Pack delivers high-quality cardboard five panel hanger boxes with fast turnaround, free shipping, and premium durability for product packaging. Order Now.',
};

const CardboardFivePanelHangerPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-five-panel-hanger');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-five-panel-hanger"
      pageType="subcategory"
    />
  );
};

export default CardboardFivePanelHangerPage;









