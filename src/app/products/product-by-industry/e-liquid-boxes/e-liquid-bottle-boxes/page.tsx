import React from "react";
import { Metadata } from "next";
import CustomDimensionsForm from "../../../../components/CustomDimensionsForm";
import ClientTestimonials from "../../../../components/product-page/ClientTestaminials";

export const metadata: Metadata = {
  title: "E-liquid Bottle Boxes - Custom Packaging | BoxyPack",
  description:
    "Premium e-liquid bottle box packaging solutions with leak-proof designs. Custom specialized packaging designed for optimal protection and presentation.",
  keywords:
    "e-liquid bottle boxes, custom packaging, leak-proof packaging, e-liquid packaging",
};

const ELiquidBottleBoxesPage: React.FC = () => {
  const productData = {
    name: "E-liquid Bottle Boxes",
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default ELiquidBottleBoxesPage;
