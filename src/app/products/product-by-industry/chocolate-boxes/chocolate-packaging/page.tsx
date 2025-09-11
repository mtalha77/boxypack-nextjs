import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const ChocolatePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'chocolate-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="chocolate-packaging"
      pageType="subcategory"
    />
  );
};

export default ChocolatePackagingPage;