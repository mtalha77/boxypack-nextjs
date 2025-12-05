import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cardboard Auto Bottom Tray Boxes | Durable',
  description: 'Boxy Pack produces premium cardboard auto bottom trays with fast turnaround, free shipping, and professional finishes for safe packaging. Customize Now.',
};

const CardboardAutoBottomTrayPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'cardboard-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'cardboard-auto-bottom-tray');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="cardboard-auto-bottom-tray"
      pageType="subcategory"
    />
  );
};

export default CardboardAutoBottomTrayPage;









