import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const SquareSoapBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'square-soap-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="square-soap-boxes"
      pageType="subcategory"
    />
  );
};

export default SquareSoapBoxesPage;