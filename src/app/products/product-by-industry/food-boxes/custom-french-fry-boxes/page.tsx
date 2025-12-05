import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Premium French Fry Boxes | Custom Fast Food Packaging',
  description: 'Boxy Pack produces high-quality French fry boxes with fast turnaround, free shipping, and durable design to keep your food fresh and appealing. Customize Now.',
};

const CustomFrenchFryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-french-fry-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-french-fry-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomFrenchFryBoxesPage;