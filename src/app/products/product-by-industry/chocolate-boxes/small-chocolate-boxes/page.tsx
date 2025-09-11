import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const SmallChocolateBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'small-chocolate-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="small-chocolate-boxes"
      pageType="subcategory"
    />
  );
};

export default SmallChocolateBoxesPage;