"use client";

import React from "react";
import {
  NavigationSection,
  MainCategory,
  SubCategory,
} from "../../data/navigationData";
import { productData, getProductDataBySlug } from "../../data/productPagesData";
import { Product } from "@/lib/hooks/useProducts";
import HeroSection, { BreadcrumbItem } from "../HeroSection";
import CustomDimensionsForm from "../CustomDimensionsForm";
import FeaturesSection from "./WhyChooseUs";
import ClientTestamonials from "./ClientTestaminials";
import CTASection from "./CTASection";
import SubcategoryCards from "./SubcategoryCards";
import ErrorBoundary from "../ErrorBoundary";
import GradientBackground from "../../UI/GradientBackground";
import ProductByMaterialCarousel from "../ProductByMaterialCarousel";
import ProductByIndustryCarousel from "../ProductByIndustryCarousel";
import ProductOverview from "./ProductOverview";
import ProductCustomization from "./ProductCustomization";
import ProductKeyFeatures from "./ProductKeyFeatures";
import ProductFAQSection from "./ProductFAQSection";
import ComingSoon from "../ComingSoon";

type EnrichedProduct = NonNullable<
  Awaited<ReturnType<typeof getProductDataBySlug>>
>;

const mapEnrichedToProduct = (enriched: EnrichedProduct): Product => {
  if (!enriched) {
    throw new Error("Cannot map an undefined product");
  }

  const description: string =
    typeof enriched.description === "string" ? enriched.description : "";
  const heroImage: string =
    typeof enriched.heroImage === "string"
      ? enriched.heroImage
      : "products-box-img_x8vu4b";
  const modelPath: string =
    typeof enriched.modelPath === "string"
      ? enriched.modelPath
      : "Tuck_End_Auto_Bottom1_ttdsdf";
  const features: Product["features"] = Array.isArray(enriched.features)
    ? enriched.features
    : [];
  const keyFeatures: Product["keyFeatures"] = Array.isArray(
    enriched.keyFeatures
  )
    ? enriched.keyFeatures
    : [];
  const customization: Product["customization"] = enriched.customization ?? {
    eyebrow: "Customization",
    heading: "Customize Your Packaging",
    description: "",
    detailsHeading: "Customization Details",
    details: [],
    footerNote: "",
  };
  const overview: NonNullable<Product["overview"]> = enriched.overview ?? {
    heading: "Product Overview",
    title: `${enriched.name ?? ""} Overview`,
    paragraphs: [],
  };
  const whyChooseUs: NonNullable<Product["whyChooseUs"]> =
    enriched.whyChooseUs ?? {
      eyebrow: "Why Choose Us",
      heading: "Packaging That Works",
      description: "",
      features: [],
    };
  const faq: Product["faq"] = enriched.faq;
  const subcategoryCards: Product["subcategoryCards"] =
    enriched.subcategoryCards;

  const ctaTitle: string =
    enriched?.cta?.title ?? enriched?.ctaTitle ?? "Ready to Get Started?";

  const ctaDescription: string =
    enriched?.cta?.description ??
    enriched?.ctaDescription ??
    "Get a custom quote today. Our team is ready to help you create the perfect packaging solution.";

  const createdAt =
    enriched.createdAt instanceof Date ? enriched.createdAt : undefined;
  const updatedAt =
    enriched.updatedAt instanceof Date ? enriched.updatedAt : undefined;

  const mapped: Product = {
    slug: enriched.slug,
    name: enriched.name,
    description,
    heroImage,
    modelPath,
    features,
    keyFeatures,
    customization,
    overview,
    whyChooseUs,
    faq,
    subcategoryCards,
    ctaTitle,
    ctaDescription,
    createdAt,
    updatedAt,
  };

  return mapped;
};

// Extended types to allow optional image and modelPath properties
type CategoryWithOptionalProps = MainCategory & {
  image?: string;
  modelPath?: string;
};

type SectionWithOptionalProps = NavigationSection & {
  image?: string;
  modelPath?: string;
};

interface ProductPageTemplateProps {
  section?: NavigationSection;
  category?: MainCategory;
  subcategory?: SubCategory;
  slug: string;
  pageType: "section" | "category" | "subcategory";
}

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({
  section,
  category,
  subcategory,
  slug,
  pageType,
}) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [dbProduct, setDbProduct] = React.useState<Product | null>(null);
  const [dbLoading, setDbLoading] = React.useState(true);

  // Ensure component only renders properly on client side
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Try to fetch product from database
  React.useEffect(() => {
    const fetchProductFromDB = async () => {
      try {
        setDbLoading(true);
        const product = await getProductDataBySlug(slug);
        if (product) {
          setDbProduct(mapEnrichedToProduct(product));
        }
      } catch (error) {
        console.warn("Failed to fetch product from database:", error);
      } finally {
        setDbLoading(false);
      }
    };

    if (isMounted) {
      fetchProductFromDB();
    }
  }, [slug, isMounted]);

  // Get product data if it exists in the legacy data structure
  const legacyProductData = productData[slug as keyof typeof productData];

  // Create dynamic product data based on the navigation structure
  const getProductData = (): Product | null => {
    if (dbProduct) {
      return dbProduct;
    }

    if (legacyProductData) {
      return mapEnrichedToProduct(legacyProductData);
    }

    return null;
  };

  let productInfo = getProductData();
  // If no explicit product content, but we have a category/section with subcategories (e.g., Bakery/Jewelry/Soap),
  // synthesize a minimal product object so the page renders instead of "Coming Soon".
  if (!productInfo && (category || section)) {
    const fallbackName = category?.name || section?.name || "Products";
    const fallbackDesc =
      category?.description ||
      section?.description ||
      "Explore our curated selection of products crafted for your brand.";
    const fallbackHero =
      (category as CategoryWithOptionalProps)?.image ||
      (section as SectionWithOptionalProps)?.image ||
      "products-box-img_x8vu4b";
    const fallbackModel =
      (category as CategoryWithOptionalProps)?.modelPath ||
      (section as SectionWithOptionalProps)?.modelPath ||
      "Tuck_End_Auto_Bottom1_ttdsdf";
    productInfo = {
      slug: slug,
      name: fallbackName,
      description: fallbackDesc,
      heroImage: fallbackHero,
      modelPath: fallbackModel,
      features: [],
      keyFeatures: [],
      customization: {
        eyebrow: "Customization",
        heading: "Customize Your Packaging",
        description: "",
        detailsHeading: "Customization Details",
        details: [],
        footerNote: "",
      },
      overview: {
        heading: "Product Overview",
        title: `${fallbackName} Overview`,
        paragraphs: [],
      },
      whyChooseUs: {
        eyebrow: "Why Choose Us",
        heading: "Packaging That Works",
        description: "",
        features: [],
      },
      faq: undefined,
      subcategoryCards: undefined,
      ctaTitle: "Ready to Get Started?",
      ctaDescription:
        "Get a custom quote today. Our team is ready to help you create the perfect packaging solution.",
      createdAt: undefined,
      updatedAt: undefined,
    };
  }

  if (!productInfo && !category && !section) {
    return <ComingSoon />;
  }

  // At this point, productInfo should always be set (either from DB/legacy data or fallback)
  // Add a type guard to satisfy TypeScript
  if (!productInfo) {
    return <ComingSoon />;
  }

  const keyFeatures = productInfo.keyFeatures ?? [];
  const customSubcategoryCards =
    productInfo.subcategoryCards &&
    productInfo.subcategoryCards.items &&
    productInfo.subcategoryCards.items.length > 0
      ? productInfo.subcategoryCards
      : undefined;
  const navigationSubcategories = customSubcategoryCards
    ? []
    : category?.subcategories || [];
  const shouldRenderSubcategories =
    !!customSubcategoryCards?.items?.length ||
    ((pageType === "category" || pageType === "subcategory") &&
      navigationSubcategories.length > 0);

  // Generate breadcrumb data - show full hierarchy
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs = [{ name: "Home", href: "/" }];

    // For subcategory pages (like /products/mylar-boxes/stand-up-pouche)
    if (subcategory && category && section) {
      // Show: Home > Category > Subcategory
      breadcrumbs.push({
        name: category.name,
        href: `/products/${section.slug}/${category.slug}`,
      });
      breadcrumbs.push({
        name: subcategory.name,
        href: `/products/${section.slug}/${subcategory.slug}`,
      });
    }
    // For category pages (like /products/product-by-material/rigid-boxes)
    else if (category && section) {
      // Show: Home > Category
      breadcrumbs.push({
        name: category.name,
        href: `/products/${section.slug}/${category.slug}`,
      });
    }
    // For section pages (like /products/mylar-boxes, /products/shopping-bags, /products/other)
    else if (
      section &&
      ["mylar-boxes", "shopping-bags", "other"].includes(section.slug)
    ) {
      // Show: Home > Section
      breadcrumbs.push({
        name: section.name,
        href: `/products/${section.slug}`,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Show loading state during hydration or database fetch to prevent mismatch
  if (!isMounted || dbLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center relative">
        <GradientBackground className="absolute inset-0" />
        <div className="text-white text-center relative z-10 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white mb-6"></div>
        </div>
      </main>
    );
  }

  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section with Integrated Breadcrumb */}
        <HeroSection productData={productInfo} breadcrumbs={breadcrumbs} />

        {/* Custom Dimensions Form - Pass the slug for auto-selection */}
        <CustomDimensionsForm
          initialProductSlug={
            pageType === "subcategory" && subcategory
              ? subcategory.slug
              : undefined
          }
        />

        {/* Product Overview */}
        <ProductOverview productData={productInfo} />

        {/* Customization Details */}
        <ProductCustomization productData={productInfo} />

        {/* Subcategory Cards Section */}
        {shouldRenderSubcategories && (
          <SubcategoryCards
            subcategories={navigationSubcategories}
            parentCategoryName={category?.name || productInfo.name}
            parentCategorySlug={category?.slug || slug}
            sectionSlug={section?.slug || slug}
            customCards={customSubcategoryCards}
          />
        )}

        {/* Key Features */}
        <ProductKeyFeatures
          features={keyFeatures}
          heading="Key Features"
          subheading={
            productInfo.overview?.title || `${productInfo.name} Highlights`
          }
        />

        {/* Features Section */}
        <FeaturesSection productData={productInfo} />

        {/* Material Carousel - Show on product-by-material pages */}
        {section?.slug === "product-by-material" && (
          <ProductByMaterialCarousel />
        )}

        {/* Industry Carousel - Show on product-by-industry pages */}
        {section?.slug === "product-by-industry" && (
          <ProductByIndustryCarousel />
        )}

        {/* Related Products Section */}
        {/* <RelatedProducts
          currentSection={section}
          currentCategory={category}
          currentSubcategory={subcategory}
          pageType={pageType}
          maxItems={6}
        /> */}

        {/* Testimonials Section */}
        <ClientTestamonials productData={productInfo} />

        {/* Frequently Asked Questions */}
        <ProductFAQSection faq={productInfo.faq} />

        {/* CTA Section - Ready to Get Started */}
        <CTASection
          productData={{
            cta: {
              title: productInfo.ctaTitle,
              description: productInfo.ctaDescription,
            },
          }}
        />
      </main>
    </ErrorBoundary>
  );
};

export default ProductPageTemplate;
