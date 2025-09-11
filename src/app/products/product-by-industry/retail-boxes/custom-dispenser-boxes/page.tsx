import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CustomDispenserBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'retail-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-dispenser-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-dispenser-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomDispenserBoxesPage;