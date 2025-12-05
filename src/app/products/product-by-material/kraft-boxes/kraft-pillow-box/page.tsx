import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Pillow Boxes | Eco-Friendly Packaging',
  description: 'Boxy Pack delivers eco-friendly kraft pillow boxes with premium printing, fast turnaround, and free shipping to enhance your brand packaging. Get a Free Quote.',
};

const KraftPillowBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-pillow-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-pillow-box"
      pageType="subcategory"
    />
  );
};

export default KraftPillowBoxPage;
