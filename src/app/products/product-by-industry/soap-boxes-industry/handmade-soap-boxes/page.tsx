import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Handmade Soap Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium handmade soap boxes with fast turnaround, free shipping, and elegant design to showcase artisanal soaps beautifully. Customize Now.',
};

const HandmadeSoapBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'handmade-soap-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="handmade-soap-boxes"
      pageType="subcategory"
    />
  );
};

export default HandmadeSoapBoxesPage;