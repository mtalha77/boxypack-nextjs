import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const StandUpZipLockMylarBagsPage = () => {
  const section = navigationData.find(s => s.slug === 'pouches');
  const subcategory = section?.subcategories?.find(sc => sc.slug === 'stand-up-zip-lock-mylar-bags');
  
  if (!section || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      subcategory={subcategory}
      slug="stand-up-zip-lock-mylar-bags"
      pageType="subcategory"
    />
  );
};

export default StandUpZipLockMylarBagsPage;
