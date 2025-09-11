import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const NecklaceCardsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'necklace-cards');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="necklace-cards"
      pageType="subcategory"
    />
  );
};

export default NecklaceCardsPage;