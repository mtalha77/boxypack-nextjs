import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CardboardDoubleWallFrameTrayPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-double-wall-frame-tray');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-double-wall-frame-tray"
      pageType="subcategory"
    />
  );
};

export default CardboardDoubleWallFrameTrayPage;






