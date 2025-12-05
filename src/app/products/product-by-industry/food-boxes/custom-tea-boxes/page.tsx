import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Tea Boxes | Premium Packaging for Loose & Bags',
  description: 'Boxy Pack produces high-quality custom tea boxes with fast turnaround, free shipping, and elegant designs for premium beverage presentation. Shop Today.',
};

const CustomTeaBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-tea-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-tea-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomTeaBoxesPage;