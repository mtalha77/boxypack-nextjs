import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Kraft Pillow Soap Boxes | Eco-Friendly Premium Packaging',
  description: 'Boxy Pack produces premium kraft pillow soap boxes with fast turnaround, free shipping, and eco-friendly design for sustainable soap presentation. Customize Now.',
};

const KraftPillowSoapBoxesIndustryPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'soap-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-pillow-soap-boxes-industry');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-pillow-soap-boxes-industry"
      pageType="subcategory"
    />
  );
};

export default KraftPillowSoapBoxesIndustryPage;