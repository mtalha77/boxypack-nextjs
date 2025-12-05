import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Eyeliner Boxes | Luxury Cosmetic Packaging',
  description: 'Boxy Pack delivers premium eyeliner boxes with fast turnaround, free shipping, and elegant design to enhance your cosmetic product presentation. Shop Today.',
};

const CustomEyelinerBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-eyeliner-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-eyeliner-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomEyelinerBoxesPage;