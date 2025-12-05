import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: '16 Inch Pizza Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium 16-inch pizza boxes with fast turnaround, free shipping, and durable design for professional and secure large pizza packaging. Order Now.',
};

const PizzaBoxes16InchPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === '16-inch-pizza-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="16-inch-pizza-boxes"
      pageType="subcategory"
    />
  );
};

export default PizzaBoxes16InchPage;