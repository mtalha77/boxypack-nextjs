import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const FullFlapShippingBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'full-flap-shipping-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="full-flap-shipping-box"
      pageType="subcategory"
    />
  );
};

export default FullFlapShippingBoxPage;