import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Auto Bottom Tray Boxes | Durable',
  description: 'Boxy Pack delivers strong corrugated auto bottom tray boxes with fast turnaround, free shipping, and premium materials for safe and professional packaging. Order Now.',
};

const CorrugatedAutoBottomTrayPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-auto-bottom-tray');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-auto-bottom-tray"
      pageType="subcategory"
    />
  );
};

export default CorrugatedAutoBottomTrayPage;