import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Cardboard Jewelry Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium cardboard jewelry boxes with fast turnaround, free shipping, and durable design for professional jewelry presentation. Order Now.',
};

const CardboardJewelryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-jewelry-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-jewelry-boxes"
      pageType="subcategory"
    />
  );
};

export default CardboardJewelryBoxesPage;