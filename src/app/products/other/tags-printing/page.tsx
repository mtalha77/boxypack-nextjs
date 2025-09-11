import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const TagsPrintingPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const subcategory = section?.subcategories?.find(sc => sc.slug === 'tags-printing');
  
  if (!section || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      subcategory={subcategory}
      slug="tags-printing"
      pageType="subcategory"
    />
  );
};

export default TagsPrintingPage;