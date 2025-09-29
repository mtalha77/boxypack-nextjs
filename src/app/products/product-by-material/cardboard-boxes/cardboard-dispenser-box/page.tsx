import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Cardboard Dispenser Box - Custom Packaging | BoxyPack',
  description: 'Premium cardboard dispenser box packaging solutions with convenient dispensing features. Custom versatile packaging designed for optimal protection and presentation.',
  keywords: 'cardboard dispenser box, custom packaging, dispenser boxes, versatile packaging',
};

const CardboardDispenserBoxPage: React.FC = () => {
  const productData = {
    name: 'Cardboard Dispenser Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CardboardDispenserBoxPage;
