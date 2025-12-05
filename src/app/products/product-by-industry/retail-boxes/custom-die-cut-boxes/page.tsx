import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Custom Die Cut Boxes | Premium Retail Packaging',
  description: 'Boxy Pack produces premium custom die cut boxes with fast turnaround, free shipping, and unique designs for standout product presentation. Customize Now.',
};

const CustomDieCutBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'retail-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-die-cut-boxes');
  
  // This subcategory is commented out in the data, so it won't be found
  // Using notFound() is appropriate here
  if (!section || !category || !subcategory) {
    notFound();
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-die-cut-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomDieCutBoxesPage;