import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CustomEyeShadowBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-eye-shadow-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-eye-shadow-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomEyeShadowBoxesPage;