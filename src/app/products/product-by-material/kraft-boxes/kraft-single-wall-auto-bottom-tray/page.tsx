import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Single Wall Auto Bottom Tray Boxes | Premium',
  description: 'Boxy Pack produces high-quality single wall auto bottom trays with fast turnaround, free shipping, and premium kraft materials. Get a Free Quote.',
};

const KraftSingleWallAutoBottomTrayPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-single-wall-auto-bottom-tray');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-single-wall-auto-bottom-tray"
      pageType="subcategory"
    />
  );
};

export default KraftSingleWallAutoBottomTrayPage;
