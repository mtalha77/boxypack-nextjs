import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const LuxuryPreRollPackagingPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pre-roll-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'luxury-pre-roll-packaging');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="luxury-pre-roll-packaging"
      pageType="subcategory"
    />
  );
};

export default LuxuryPreRollPackagingPage;