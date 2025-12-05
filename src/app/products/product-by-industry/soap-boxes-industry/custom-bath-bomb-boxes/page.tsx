import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Bath Bomb Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack delivers premium bath bomb boxes with fast turnaround, free shipping, and stylish design to enhance your bath product presentation. Order Now.',
};

const CustomBathBombBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-bath-bomb-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-bath-bomb-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomBathBombBoxesPage;