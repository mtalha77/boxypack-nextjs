import React from "react";
import { Metadata } from "next";
import CustomDimensionsForm from "../../../../components/CustomDimensionsForm";
import ClientTestimonials from "../../../../components/product-page/ClientTestaminials";

export const metadata: Metadata = {
  title: "E-liquid Display Boxes - Custom Packaging | BoxyPack",
  description:
    "Premium e-liquid display box packaging solutions with leak-proof designs. Custom specialized packaging designed for optimal protection and presentation.",
  keywords:
    "e-liquid display boxes, custom packaging, leak-proof packaging, e-liquid packaging",
};

const ELiquidDisplayBoxesPage: React.FC = () => {
  const productData = {
    name: "E-liquid Display Boxes",
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default ELiquidDisplayBoxesPage;
