import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const StandUpPouchePage = () => {
  const section = navigationData.find(s => s.slug === 'mylar-boxes');
  const category = section?.categories?.find(c => c.slug === 'mylar-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'stand-up-pouche');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="stand-up-pouche"
      pageType="subcategory"
    />
  );
};

export default StandUpPouchePage;
