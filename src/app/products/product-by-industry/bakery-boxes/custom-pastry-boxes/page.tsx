import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Elegant Pastry Boxes | Premium Bakery Packaging',
  description: 'Boxy Pack delivers elegant custom pastry boxes with fast turnaround, free shipping, and premium quality to make your pastries stand out. Order Now.',
};

const CustomPastryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-pastry-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-pastry-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomPastryBoxesPage;