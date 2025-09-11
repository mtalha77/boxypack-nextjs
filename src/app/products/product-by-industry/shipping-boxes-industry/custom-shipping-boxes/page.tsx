import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CustomShippingBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'shipping-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-shipping-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-shipping-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomShippingBoxesPage;