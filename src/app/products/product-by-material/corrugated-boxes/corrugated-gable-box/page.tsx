import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Gable Box - Custom Packaging | BoxyPack',
  description: 'Premium corrugated gable box packaging solutions with unique gable design. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated gable box, custom packaging, gable boxes, sturdy packaging, durable boxes',
};

const CorrugatedGableBoxPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Gable Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedGableBoxPage;
