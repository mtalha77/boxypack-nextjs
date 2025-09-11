import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const PaperBagPage = () => {
  const section = navigationData.find(s => s.slug === 'shopping-bags');
  const subcategory = section?.subcategories?.find(sc => sc.slug === 'paper-bag');
  
  if (!section || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      subcategory={subcategory}
      slug="paper-bag"
      pageType="subcategory"
    />
  );
};

export default PaperBagPage;