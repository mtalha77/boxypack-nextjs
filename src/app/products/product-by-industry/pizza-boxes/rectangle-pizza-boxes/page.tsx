import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Rectangle Pizza Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium rectangular pizza boxes with fast turnaround, free shipping, and durable design for secure and professional pizza packaging. Order Now.',
};

const RectanglePizzaBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'rectangle-pizza-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="rectangle-pizza-boxes"
      pageType="subcategory"
    />
  );
};

export default RectanglePizzaBoxesPage;