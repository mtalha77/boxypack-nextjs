import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const KraftBookendBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-bookend-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-bookend-box"
      pageType="subcategory"
    />
  );
};

export default KraftBookendBoxPage;
