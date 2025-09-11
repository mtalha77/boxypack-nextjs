import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const PvcBagPage = () => {
  const section = navigationData.find(s => s.slug === 'shopping-bags');
  const subcategory = section?.subcategories?.find(sc => sc.slug === 'pvc-bag');
  
  if (!section || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      subcategory={subcategory}
      slug="pvc-bag"
      pageType="subcategory"
    />
  );
};

export default PvcBagPage;