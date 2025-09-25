import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const PvcBagPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'shopping-bags');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'pvc-bag');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pvc-bag"
      pageType="subcategory"
    />
  );
};

export default PvcBagPage;