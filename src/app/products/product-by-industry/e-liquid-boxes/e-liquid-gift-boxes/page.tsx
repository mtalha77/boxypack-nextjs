import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'E-liquid Gift Boxes - Custom Packaging | BoxyPack',
  description: 'Premium e-liquid gift box packaging solutions with leak-proof designs. Custom specialized packaging designed for optimal protection and presentation.',
  keywords: 'e-liquid gift boxes, custom packaging, leak-proof packaging, e-liquid packaging',
};

const ELiquidGiftBoxesPage: React.FC = () => {
  const productData = {
    name: 'E-liquid Gift Boxes'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default ELiquidGiftBoxesPage;
