import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom PVC Bags | Premium Durable Packaging',
  description: 'Boxy Pack creates durable PVC bags with premium printing, fast turnaround, and free shipping for professional, high-quality product packaging. Shop Today.',
};

const PvcBagPage = () => {
  const section = navigationData.find(s => s.slug === 'shopping-bags');
  const category = section?.categories?.find(c => c.slug === 'shopping-bags');
  const subcategory = category?.subcategories?.find(sc => sc.slug === 'pvc-bag');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pvc-bag"
      pageType="subcategory"
    />
  );
};

export default PvcBagPage;