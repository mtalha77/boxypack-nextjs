import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CustomCigaretteBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cigarette-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-cigarette-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-cigarette-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomCigaretteBoxesPage;