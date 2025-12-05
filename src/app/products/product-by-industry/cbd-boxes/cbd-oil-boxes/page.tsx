import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'CBD Oil Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium CBD oil boxes with fast turnaround, free shipping, and stylish design to showcase and protect your cannabis products. Order Now.',
};

const CbdOilBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cbd-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cbd-oil-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cbd-oil-boxes"
      pageType="subcategory"
    />
  );
};

export default CbdOilBoxesPage;