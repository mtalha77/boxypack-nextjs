import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Bookend Boxes | Durable & Premium',
  description: 'Boxy Pack delivers premium cardboard bookend boxes with fast turnaround, free shipping, and professional finishes for elegant product packaging. Customize Now.',
};

const CardboardBookendBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-bookend-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-bookend-box"
      pageType="subcategory"
    />
  );
};

export default CardboardBookendBoxPage;









