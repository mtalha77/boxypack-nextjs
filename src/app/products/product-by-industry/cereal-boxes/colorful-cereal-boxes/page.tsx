import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const ColorfulCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'colorful-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="colorful-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default ColorfulCerealBoxesPage;