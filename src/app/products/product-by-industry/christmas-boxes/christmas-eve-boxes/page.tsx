import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const ChristmasEveBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-eve-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-eve-boxes"
      pageType="subcategory"
    />
  );
};

export default ChristmasEveBoxesPage;