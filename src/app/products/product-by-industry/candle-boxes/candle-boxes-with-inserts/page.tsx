import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Candle Boxes with Inserts | Premium Secure Packaging',
  description: 'Boxy Pack produces premium candle boxes with inserts for safe packaging, fast turnaround, free shipping, and elegant design. Shop Today.',
};

const CandleBoxesWithInsertsPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'candle-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'candle-boxes-with-inserts');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="candle-boxes-with-inserts"
      pageType="subcategory"
    />
  );
};

export default CandleBoxesWithInsertsPage;