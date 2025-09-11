import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const CardboardCigaretteBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cigarette-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-cigarette-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-cigarette-boxes"
      pageType="subcategory"
    />
  );
};

export default CardboardCigaretteBoxesPage;