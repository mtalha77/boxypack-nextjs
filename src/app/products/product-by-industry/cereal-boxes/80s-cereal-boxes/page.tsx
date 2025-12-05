import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: '80s Cereal Boxes | Premium Retro Breakfast Packaging',
  description: 'Boxy Pack produces 80s cereal boxes with fast turnaround, free shipping, and stylish design to showcase cereals in nostalgic and attractive packaging. Customize Now.',
};

const CerealBoxes80sPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === '80s-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="80s-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default CerealBoxes80sPage;