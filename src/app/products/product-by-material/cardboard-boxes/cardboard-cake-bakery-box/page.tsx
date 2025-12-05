import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Bakery Boxes | Elegant Cake Packaging',
  description: 'Boxy Pack produces premium cardboard bakery boxes for cakes and pastries with fast delivery, free shipping, and low minimums. Customize Now.',
};

const CardboardCakeBakeryBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-cake-bakery-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-cake-bakery-box"
      pageType="subcategory"
    />
  );
};

export default CardboardCakeBakeryBoxPage;

