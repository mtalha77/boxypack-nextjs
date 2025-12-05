import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Coffee Cup Sleeves | Premium Hot Drink Packaging',
  description: 'Boxy Pack delivers premium coffee cup sleeves with fast turnaround, free shipping, and stylish design for safe and attractive beverage packaging. Customize Now.',
};

const CustomCoffeeCupSleevesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-coffee-cup-sleeves');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-coffee-cup-sleeves"
      pageType="subcategory"
    />
  );
};

export default CustomCoffeeCupSleevesPage;