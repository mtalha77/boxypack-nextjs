import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Shoe Boxes | Premium Stylish Packaging',
  description: 'Boxy Pack produces high-quality custom shoe boxes with fast turnaround, free shipping, and elegant design for retail-ready and gift packaging. Customize Now.',
};

const CustomShoeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'sports-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-shoe-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-shoe-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomShoeBoxesPage;