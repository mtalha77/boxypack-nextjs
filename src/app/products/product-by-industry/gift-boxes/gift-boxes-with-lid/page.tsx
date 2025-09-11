import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const GiftBoxesWithLidPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'gift-boxes-with-lid');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="gift-boxes-with-lid"
      pageType="subcategory"
    />
  );
};

export default GiftBoxesWithLidPage;