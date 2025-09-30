import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const CustomTissuePaperPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'custom-tissue-paper');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-tissue-paper"
      pageType="subcategory"
    />
  );
};

export default CustomTissuePaperPage;