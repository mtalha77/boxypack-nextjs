import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Colorful Cereal Boxes | Premium Eye-Catching Packaging',
  description: 'Boxy Pack produces vibrant colorful cereal boxes with fast turnaround, free shipping, and stylish design to attract customers and boost breakfast sales. Customize Now.',
};

const ColorfulCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'colorful-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="colorful-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default ColorfulCerealBoxesPage;