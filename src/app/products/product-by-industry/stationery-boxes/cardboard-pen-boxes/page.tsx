import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Cardboard Pen Boxes | Premium Custom Stationery Packaging',
  description: 'Boxy Pack delivers premium cardboard pen boxes with fast turnaround, free shipping, and stylish design for professional and secure stationery presentation. Order Now.',
};

const CardboardPenBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'stationery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-pen-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-pen-boxes"
      pageType="subcategory"
    />
  );
};

export default CardboardPenBoxesPage;