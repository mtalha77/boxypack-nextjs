import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Brochures | Premium Marketing Packaging',
  description: 'Boxy Pack produces high-quality brochures with fast turnaround, free shipping, and stylish design to showcase your products and services professionally. Customize Now.',
};

const BrochuresPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  const category = section?.categories?.find(c => c.slug === 'other');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'brochures');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="brochures"
      pageType="subcategory"
    />
  );
};

export default BrochuresPage;