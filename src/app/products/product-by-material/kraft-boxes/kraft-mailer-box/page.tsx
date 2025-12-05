import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Kraft Mailer Boxes | Fast Shipping & Premium',
  description: 'Boxy Pack crafts high-quality kraft mailer boxes with fast delivery, free shipping, and low minimums for safe and stylish product packaging. Order Now.',
};

const KraftMailerBoxPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-material');
  const category = section?.categories?.find(c => c.slug === 'kraft-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-mailer-box');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-mailer-box"
      pageType="subcategory"
    />
  );
};

export default KraftMailerBoxPage;
