import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Table Tents | Premium Restaurant Packaging',
  description: 'Boxy Pack produces high-quality custom table tents with fast turnaround, free shipping, and stylish design to showcase menus, promotions, or products professionally. Customize Now.',
};

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