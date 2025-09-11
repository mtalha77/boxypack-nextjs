import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const PreRollBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cbd-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'pre-roll-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pre-roll-boxes"
      pageType="subcategory"
    />
  );
};

export default PreRollBoxesPage;