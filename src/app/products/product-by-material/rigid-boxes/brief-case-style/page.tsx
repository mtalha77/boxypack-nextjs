import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const BriefCaseStylePage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'rigid-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'brief-case-style');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="brief-case-style"
      pageType="subcategory"
    />
  );
};

export default BriefCaseStylePage;