import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const StandUpZipLockMylarBagsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'pouches');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'stand-up-zip-lock-mylar-bags');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="stand-up-zip-lock-mylar-bags"
      pageType="subcategory"
    />
  );
};

export default StandUpZipLockMylarBagsPage;
