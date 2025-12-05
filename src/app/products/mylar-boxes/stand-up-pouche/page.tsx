import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Stand Up Pouches | Premium Custom Packaging by Boxy Pack',
  description: 'Boxy Pack crafts high-quality stand up pouches with premium finishes, fast turnaround, and free shipping for stylish and safe product packaging. Customize Now.',
};

const StandUpPouchePage = () => {
  const section = navigationData.find(s => s.slug === 'mylar-boxes');
  const category = section?.categories?.find(c => c.slug === 'mylar-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'stand-up-pouche');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="stand-up-pouche"
      pageType="subcategory"
    />
  );
};

export default StandUpPouchePage;
