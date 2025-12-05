import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Lip Balm Boxes | Premium Cosmetic Packaging',
  description: 'Boxy Pack creates high-quality custom lip balm boxes with fast turnaround, free shipping, and stylish packaging to elevate your beauty brand. Order Now.',
};

const CustomLipBalmBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-lip-balm-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-lip-balm-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomLipBalmBoxesPage;