import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Vintage Cereal Boxes | Premium Retro Packaging',
  description: 'Boxy Pack delivers premium vintage cereal boxes with fast turnaround, free shipping, and classic design for unique and stylish breakfast packaging. Order Now.',
};

const VintageCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'vintage-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="vintage-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default VintageCerealBoxesPage;