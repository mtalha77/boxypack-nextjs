import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Eyelash Boxes | Luxury Cosmetic Packaging',
  description: 'Boxy Pack delivers premium eyelash boxes with fast turnaround, free shipping, and elegant packaging to elevate your beauty products. Customize Now.',
};

const EyeLashBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'eye-lash-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="eye-lash-boxes"
      pageType="subcategory"
    />
  );
};

export default EyeLashBoxesPage;