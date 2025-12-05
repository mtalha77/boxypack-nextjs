import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Cardboard Shoe Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces high-quality cardboard shoe boxes with fast turnaround, free shipping, and durable design to showcase and protect footwear. Customize Now.',
};

const CardboardShoeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'sports-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-shoe-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-shoe-boxes"
      pageType="subcategory"
    />
  );
};

export default CardboardShoeBoxesPage;