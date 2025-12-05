import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Mini Cupcake Boxes | Elegant Bakery Packaging',
  description: 'Boxy Pack produces premium mini cupcake boxes with fast turnaround, free shipping, and durable design for professional bakery presentation. Customize Now.',
};

const MiniCupcakeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'mini-cupcake-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="mini-cupcake-boxes"
      pageType="subcategory"
    />
  );
};

export default MiniCupcakeBoxesPage;