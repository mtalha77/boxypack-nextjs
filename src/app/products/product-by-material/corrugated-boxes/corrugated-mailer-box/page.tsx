import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Corrugated Mailer Boxes | Premium Packaging',
  description: 'Boxy Pack produces high-quality corrugated mailer boxes with fast delivery, free shipping, and sturdy design for safe shipping and elegant presentation. Order Now.',
};

const CorrugatedMailerBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'corrugated-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corrugated-mailer-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corrugated-mailer-box"
      pageType="subcategory"
    />
  );
};

export default CorrugatedMailerBoxPage;
