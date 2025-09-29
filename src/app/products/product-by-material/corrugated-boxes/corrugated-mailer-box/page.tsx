import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Mailer Box - Custom Packaging | BoxyPack',
  description: 'Premium corrugated mailer box packaging solutions with self-locking design. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated mailer box, custom packaging, sturdy boxes, durable packaging, mailer boxes',
};

const CorrugatedMailerBoxPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Mailer Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedMailerBoxPage;
