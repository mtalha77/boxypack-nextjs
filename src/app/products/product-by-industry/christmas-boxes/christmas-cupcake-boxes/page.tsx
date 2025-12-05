import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Cupcake Boxes | Premium Holiday Packaging',
  description: 'Boxy Pack delivers premium Christmas cupcake boxes with fast turnaround, free shipping, and stylish design to make your holiday treats irresistible. Order Now.',
};

const ChristmasCupcakeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-cupcake-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-cupcake-boxes"
      pageType="subcategory"
    />
  );
};

export default ChristmasCupcakeBoxesPage;