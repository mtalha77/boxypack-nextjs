import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Paper Bags | Premium Holiday Packaging',
  description: 'Boxy Pack produces premium Christmas paper bags with fast turnaround, free shipping, and festive design for attractive and professional gift packaging. Customize Now.',
};

const ChristmasPaperBagsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-paper-bags');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-paper-bags"
      pageType="subcategory"
    />
  );
};

export default ChristmasPaperBagsPage;