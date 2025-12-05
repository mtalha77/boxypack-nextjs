import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Flatbread Pizza Boxes | Premium Custom Packaging',
  description: 'Boxy Pack produces premium flatbread pizza boxes with fast turnaround, free shipping, and stylish design for attractive and secure pizza delivery. Customize Now.',
};

const FlatbreadPizzaBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'pizza-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'flatbread-pizza-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="flatbread-pizza-boxes"
      pageType="subcategory"
    />
  );
};

export default FlatbreadPizzaBoxesPage;