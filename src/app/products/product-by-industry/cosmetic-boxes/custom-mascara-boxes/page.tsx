import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Mascara Boxes | Luxury Cosmetic Packaging',
  description: 'Boxy Pack produces high-quality mascara boxes with fast turnaround, free shipping, and premium design to enhance cosmetic product appeal. Shop Today.',
};

const CustomMascaraBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-mascara-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-mascara-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomMascaraBoxesPage;