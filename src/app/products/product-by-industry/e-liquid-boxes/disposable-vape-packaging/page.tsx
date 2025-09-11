import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const DisposableVapePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'e-liquid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'disposable-vape-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="disposable-vape-packaging"
      pageType="subcategory"
    />
  );
};

export default DisposableVapePackagingPage;