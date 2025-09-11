import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CustomDeluxeGiftBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'gift-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-deluxe-gift-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-deluxe-gift-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomDeluxeGiftBoxesPage;