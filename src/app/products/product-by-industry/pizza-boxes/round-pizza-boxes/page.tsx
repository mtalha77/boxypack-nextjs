import React from 'react';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

const RoundPizzaBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'round-pizza-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="round-pizza-boxes"
      pageType="subcategory"
    />
  );
};

export default RoundPizzaBoxesPage;