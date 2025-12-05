import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Sandwich Boxes | Premium Food Packaging',
  description: 'Boxy Pack produces premium sandwich boxes with fast turnaround, free shipping, and sturdy design for attractive and hygienic food packaging. Order Now.',
};

const SandwichBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'sandwich-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="sandwich-boxes"
      pageType="subcategory"
    />
  );
};

export default SandwichBoxesPage;