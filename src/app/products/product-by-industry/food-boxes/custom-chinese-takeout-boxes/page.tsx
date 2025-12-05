import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Chinese Takeout Boxes | Premium Custom Food Packaging',
  description: 'Boxy Pack delivers premium Chinese takeout boxes with fast turnaround, free shipping, and professional design for stylish and secure food delivery. Shop Today.',
};

const CustomChineseTakeoutBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-chinese-takeout-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-chinese-takeout-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomChineseTakeoutBoxesPage;