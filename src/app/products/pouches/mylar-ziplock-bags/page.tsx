import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const MylarZiplockBagsPage = () => {
  const section = navigationData.find(s => s.slug === 'pouches');
  const subcategory = section?.subcategories?.find(sc => sc.slug === 'mylar-ziplock-bags');
  
  if (!section || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      subcategory={subcategory}
      slug="mylar-ziplock-bags"
      pageType="subcategory"
    />
  );
};

export default MylarZiplockBagsPage;