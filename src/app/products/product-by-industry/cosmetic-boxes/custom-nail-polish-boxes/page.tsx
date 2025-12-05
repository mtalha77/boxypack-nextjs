import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Nail Polish Boxes | Stylish Premium Packaging',
  description: 'Boxy Pack delivers premium nail polish boxes with fast turnaround, free shipping, and professional designs for standout beauty product packaging. Customize Now.',
};

const CustomNailPolishBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-nail-polish-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-nail-polish-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomNailPolishBoxesPage;