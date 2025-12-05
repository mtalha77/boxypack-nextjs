import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Hemp Oil Boxes | Premium Custom CBD Packaging',
  description: 'Boxy Pack produces premium hemp oil boxes with fast turnaround, free shipping, and stylish design for safe and professional CBD product packaging. Customize Now.',
};

const HempOilBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cbd-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'hemp-oil-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="hemp-oil-boxes"
      pageType="subcategory"
    />
  );
};

export default HempOilBoxesPage;