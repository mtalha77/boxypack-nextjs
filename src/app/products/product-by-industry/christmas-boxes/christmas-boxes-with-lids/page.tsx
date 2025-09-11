import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const ChristmasBoxesWithLidsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-boxes-with-lids');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-boxes-with-lids"
      pageType="subcategory"
    />
  );
};

export default ChristmasBoxesWithLidsPage;