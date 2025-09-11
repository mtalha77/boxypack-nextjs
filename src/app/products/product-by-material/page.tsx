import React from 'react';
import { navigationData } from '../../data/navigationData';
import ProductPageTemplate from '../../components/product-page/page';

const ProductByMaterialPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  
  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      slug="product-by-material"
      pageType="section"
    />
  );
};

export default ProductByMaterialPage;
