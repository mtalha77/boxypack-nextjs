import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Cardboard Pencil Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces high-quality cardboard pencil boxes with fast turnaround, free shipping, and durable design for organized and professional stationery presentation. Customize Now.',
};

const CardboardPencilBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'stationery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-pencil-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-pencil-boxes"
      pageType="subcategory"
    />
  );
};

export default CardboardPencilBoxesPage;