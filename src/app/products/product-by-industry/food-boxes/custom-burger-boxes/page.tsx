import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Burger Boxes | Premium Fast Food Packaging',
  description: 'Boxy Pack delivers high-quality custom burger boxes with fast turnaround, free shipping, and durable design to keep your food fresh and professional. Customize Now.',
};

const CustomBurgerBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'food-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-burger-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-burger-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomBurgerBoxesPage;