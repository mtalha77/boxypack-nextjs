import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const BrochuresPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'brochures');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="brochures"
      pageType="subcategory"
    />
  );
};

export default BrochuresPage;