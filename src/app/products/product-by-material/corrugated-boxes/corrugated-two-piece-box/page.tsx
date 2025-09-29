import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Two Piece Box - Custom Packaging | BoxyPack',
  description: 'Premium corrugated two piece box packaging solutions with separate lid and base. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated two piece box, custom packaging, two piece boxes, sturdy boxes, durable packaging',
};

const CorrugatedTwoPieceBoxPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Two Piece Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedTwoPieceBoxPage;
