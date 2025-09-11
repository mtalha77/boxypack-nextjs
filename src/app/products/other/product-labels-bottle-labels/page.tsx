import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const ProductLabelsBottleLabelsPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const subcategory = section?.subcategories?.find(sc => sc.slug === 'product-labels-bottle-labels');
  
  if (!section || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      subcategory={subcategory}
      slug="product-labels-bottle-labels"
      pageType="subcategory"
    />
  );
};

export default ProductLabelsBottleLabelsPage;