import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Cardboard Cereal Boxes | Premium Durable Packaging',
  description: 'Boxy Pack produces premium cardboard cereal boxes with fast turnaround, free shipping, and sturdy design to showcase and protect cereals professionally. Customize Now.',
};

const CardboardCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default CardboardCerealBoxesPage;