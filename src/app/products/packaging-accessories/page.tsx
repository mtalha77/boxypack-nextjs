import ProductsDesignPage from "../Products-design-page";
import { productData } from "../../data/productPagesData";

const PackagingAccessoriesPage = () => {
  const entry = productData["packaging-accessories"];

  // Adapt EnrichedProductEntry to match ProductPageProps interface
  const adaptedData = {
    name: entry.name,
    description:
      (typeof entry.description === "string" ? entry.description : undefined) ||
      `Premium ${entry.name.toLowerCase()} solutions`,
    heroImage:
      (typeof entry.heroImage === "string" ? entry.heroImage : undefined) ||
      "products-box-img_x8vu4b",
    modelPath:
      (typeof entry.modelPath === "string" ? entry.modelPath : undefined) || "",
    slug: entry.slug,
    features: entry.features || [],
    specifications:
      entry.overview?.paragraphs?.map((para: string, index: number) => ({
        label: `Feature ${index + 1}`,
        value: para,
      })) || [],
    sizes:
      entry.customization?.details
        ?.filter(
          (detail: { label: string; value: string }) =>
            detail.label.toLowerCase().includes("dimension") ||
            detail.label.toLowerCase().includes("size")
        )
        .map((detail: { label: string; value: string }) => ({
          name: detail.label,
          dimensions: detail.value,
          price: "Contact for pricing",
        })) || [],
    galleryImages: [],
    customizationOptions: entry.keyFeatures || [],
    ctaTitle: entry.cta?.title || "Get Started Today",
    ctaDescription:
      entry.cta?.description || "Ready to customize your packaging?",
  };

  return <ProductsDesignPage productData={adaptedData} />;
};

export default PackagingAccessoriesPage;
