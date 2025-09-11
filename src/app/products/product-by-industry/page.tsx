import React from 'react';
import { navigationData } from '../../data/navigationData';
import ProductPageTemplate from '../../components/product-page/page';

const ProductByIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  
  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      slug="product-by-industry"
      pageType="section"
    />
  );
};

export default ProductByIndustryPage;
