import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: '14 Inch Pizza Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces premium 14-inch pizza boxes with fast turnaround, free shipping, and stylish design for fresh and professional pizza presentation. Customize Now.',
};

const PizzaBoxes14InchPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === '14-inch-pizza-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="14-inch-pizza-boxes"
      pageType="subcategory"
    />
  );
};

export default PizzaBoxes14InchPage;