import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const VapeCartridgePackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'vape-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'vape-cartridge-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="vape-cartridge-packaging"
      pageType="subcategory"
    />
  );
};

export default VapeCartridgePackagingPage;
