import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Cigarette Boxes | Premium Printed Packaging',
  description: 'Boxy Pack offers premium kraft cigarette boxes with fast turnaround, free shipping, and low minimums for professional branding. Order Now.',
};

const KraftCigaretteBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-cigarette-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-cigarette-box"
      pageType="subcategory"
    />
  );
};

export default KraftCigaretteBoxPage;
