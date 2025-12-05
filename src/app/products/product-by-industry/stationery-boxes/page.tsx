import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Stationery Boxes | Premium Packaging for Office',
  description: 'Boxy Pack delivers premium custom stationery boxes with fast turnaround, free shipping, and stylish design to enhance professional and school supplies presentation. Order Now.',
};

const StationeryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'stationery-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="stationery-boxes"
      pageType="category"
    />
  );
};

export default StationeryBoxesPage;