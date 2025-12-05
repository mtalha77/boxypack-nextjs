import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Pizza Slice Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers high-quality pizza slice boxes with fast turnaround, free shipping, and durable design for secure and attractive single-slice packaging. Order Now.',
};

const PizzaSliceBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'pizza-slice-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pizza-slice-boxes"
      pageType="subcategory"
    />
  );
};

export default PizzaSliceBoxesPage;