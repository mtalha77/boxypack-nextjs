import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Treat Boxes | Premium Holiday Packaging',
  description: 'Boxy Pack delivers premium Christmas treat boxes with fast turnaround, free shipping, and stylish design for festive and attractive snack presentation. Order Now.',
};

const ChristmasTreatBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-treat-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-treat-boxes"
      pageType="subcategory"
    />
  );
};

export default ChristmasTreatBoxesPage;