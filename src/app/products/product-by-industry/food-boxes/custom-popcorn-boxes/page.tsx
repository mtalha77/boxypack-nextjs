import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Popcorn Boxes | Premium Snack Packaging',
  description: 'Boxy Pack produces premium popcorn boxes with fast turnaround, free shipping, and fun, attractive designs for movie nights, parties, and promotions. Customize Now.',
};

const CustomPopcornBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-popcorn-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-popcorn-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomPopcornBoxesPage;