import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const TableTentsPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'table-tents');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="table-tents"
      pageType="subcategory"
    />
  );
};

export default TableTentsPage;