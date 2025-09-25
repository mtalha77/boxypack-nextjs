import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const BookletsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'booklets');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="booklets"
      pageType="subcategory"
    />
  );
};

export default BookletsPage;
