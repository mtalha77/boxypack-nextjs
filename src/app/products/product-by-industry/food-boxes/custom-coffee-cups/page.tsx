import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Coffee Cups | Premium Beverage Packaging',
  description: 'Boxy Pack produces high-quality custom coffee cups with fast turnaround, free shipping, and durable materials for a professional cafe presentation. Shop Today.',
};

const CustomCoffeeCupsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-coffee-cups');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-coffee-cups"
      pageType="subcategory"
    />
  );
};

export default CustomCoffeeCupsPage;