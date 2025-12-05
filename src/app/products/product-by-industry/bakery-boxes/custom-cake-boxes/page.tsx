import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Luxury Cake Boxes | Premium Custom Bakery Packaging',
  description: 'Boxy Pack produces high-quality cake boxes with fast turnaround, free shipping, and durable design to protect and showcase your cakes beautifully. Shop Today.',
};

const CustomCakeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-cake-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-cake-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomCakeBoxesPage;