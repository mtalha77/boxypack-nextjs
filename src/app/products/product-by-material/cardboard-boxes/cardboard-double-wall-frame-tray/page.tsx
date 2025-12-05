import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Double Wall Frame Tray Boxes | Premium',
  description: 'Boxy Pack produces high-quality cardboard double wall frame trays with fast turnaround, free shipping, and premium materials for durable packaging. Order Now.',
};

const CardboardDoubleWallFrameTrayPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-double-wall-frame-tray');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-double-wall-frame-tray"
      pageType="subcategory"
    />
  );
};

export default CardboardDoubleWallFrameTrayPage;









