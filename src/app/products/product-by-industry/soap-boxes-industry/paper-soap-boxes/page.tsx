import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Paper Soap Boxes | Eco-Friendly Premium Packaging',
  description: 'Boxy Pack delivers premium paper soap boxes with fast turnaround, free shipping, and eco-friendly design for sustainable and elegant soap packaging. Shop Today.',
};

const PaperSoapBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'paper-soap-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="paper-soap-boxes"
      pageType="subcategory"
    />
  );
};

export default PaperSoapBoxesPage;