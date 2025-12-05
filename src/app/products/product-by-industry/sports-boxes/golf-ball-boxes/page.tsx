import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Golf Ball Boxes | Premium Custom Sports Packaging',
  description: 'Boxy Pack produces high-quality golf ball boxes with fast turnaround, free shipping, and stylish design to present and protect golf accessories. Customize Now.',
};

const GolfBallBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'sports-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'golf-ball-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="golf-ball-boxes"
      pageType="subcategory"
    />
  );
};

export default GolfBallBoxesPage;