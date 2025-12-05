import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Christmas Mailer Boxes | Premium Holiday Packaging',
  description: 'Boxy Pack delivers premium Christmas mailer boxes with fast turnaround, free shipping, and festive design for attractive and professional holiday gift packaging. Order Now.',
};

const ChristmasMailerBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'christmas-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'christmas-mailer-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="christmas-mailer-boxes"
      pageType="subcategory"
    />
  );
};

export default ChristmasMailerBoxesPage;