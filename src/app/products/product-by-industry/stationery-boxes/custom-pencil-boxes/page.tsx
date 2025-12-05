import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Pencil Boxes | Premium School & Office Packaging',
  description: 'Boxy Pack produces high-quality custom pencil boxes with fast turnaround, free shipping, and durable design to organize and present stationery professionally. Customize Now.',
};

const CustomPencilBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'stationery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-pencil-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-pencil-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomPencilBoxesPage;