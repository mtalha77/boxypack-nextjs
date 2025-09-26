import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CardboardGableBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-gable-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-gable-box"
      pageType="subcategory"
    />
  );
};

export default CardboardGableBoxPage;

