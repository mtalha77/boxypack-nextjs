import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const SoapSleevePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'soap-sleeve-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="soap-sleeve-packaging"
      pageType="subcategory"
    />
  );
};

export default SoapSleevePackagingPage;