import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Mini Cereal Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers high-quality mini cereal boxes with fast turnaround, free shipping, and stylish design for attractive and convenient breakfast packaging. Order Now.',
};

const MiniCerealBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'mini-cereal-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="mini-cereal-boxes"
      pageType="subcategory"
    />
  );
};

export default MiniCerealBoxesPage;