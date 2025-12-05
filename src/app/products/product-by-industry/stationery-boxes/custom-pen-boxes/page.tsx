import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Pen Boxes | Premium Stationery Packaging',
  description: 'Boxy Pack produces premium custom pen boxes with fast turnaround, free shipping, and stylish design to showcase pens professionally. Customize Now.',
};

const CustomPenBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'stationery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-pen-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-pen-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomPenBoxesPage;