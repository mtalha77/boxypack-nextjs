import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Double Wall Frame Tray Boxes | Premium',
  description: 'Boxy Pack delivers high-quality double wall frame tray boxes with fast turnaround, free shipping, and premium kraft materials for durable packaging. Get a Free Quote.',
};

const KraftDoubleWallFrameTrayPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-double-wall-frame-tray');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-double-wall-frame-tray"
      pageType="subcategory"
    />
  );
};

export default KraftDoubleWallFrameTrayPage;
