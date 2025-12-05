import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cupcake Boxes | Premium Stylish Packaging',
  description: 'Boxy Pack produces premium custom cupcake boxes with fast turnaround, free shipping, and durable, elegant design for standout bakery packaging. Order Now.',
};

const CustomCupcakeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-cupcake-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-cupcake-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomCupcakeBoxesPage;