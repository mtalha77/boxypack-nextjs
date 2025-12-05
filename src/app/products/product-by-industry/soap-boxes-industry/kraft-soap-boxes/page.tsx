import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Kraft Soap Boxes | Eco-Friendly Premium Packaging',
  description: 'Boxy Pack produces premium kraft soap boxes with fast turnaround, free shipping, and durable, eco-friendly design to enhance your soap presentation. Customize Now.',
};

const KraftSoapBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-soap-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-soap-boxes"
      pageType="subcategory"
    />
  );
};

export default KraftSoapBoxesPage;