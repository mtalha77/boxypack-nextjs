import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const SweetGiftBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'sweet-gift-boxes-industry');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="sweet-gift-boxes-industry"
      pageType="subcategory"
    />
  );
};

export default SweetGiftBoxesIndustryPage;