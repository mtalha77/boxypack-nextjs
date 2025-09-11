import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const SmallCakeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'small-cake-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="small-cake-boxes"
      pageType="subcategory"
    />
  );
};

export default SmallCakeBoxesPage;