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
// import CustomDimensionsForm from "../CustomDimensionsForm";
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
import CategoryIntroSection from "./CategoryIntroSection";
import CategoryMaterialSection from "./CategoryMaterialSection";
import ComingSoon from "../ComingSoon";
import { ourRangeOfData } from "../../data/OurRangeOfData";

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

  // Helper function to map data file slugs to OurRangeOfData slugs (defined early so it can be used in useEffect)
  const mapSlugToOurRangeOfData = React.useCallback((slug: string): string => {
    if (!slug) return slug;
    
    // Try exact match first
    if (ourRangeOfData[slug]) {
      return slug;
    }
    
    // Comprehensive slug mapping
    const slugMappings: Record<string, string> = {
      'magnetic-closure-rigid-box': 'magnetic-closure-boxes',
      'sliding-sleeve-rigid-boxes-match-style-boxes': 'sliding-rigid-boxes',
      'brief-case-style': 'briefcase-style-rigid-boxes',
      'kraft-mailer-box': 'kraft-mailer-boxes',
      'kraft-box-with-lid': 'kraft-boxes-with-lids',
      'kraft-pillow-box': 'kraft-pillow-boxes',
      'kraft-gable-box': 'kraft-gable-boxes',
      'kraft-bakery-cake-box': 'kraft-bakery-boxes',
      'kraft-sleeve-box': 'kraft-sleeve-boxes',
      'kraft-tuck-end-box': 'kraft-tuck-end-boxes',
      'kraft-five-panel-hanger-box': 'kraft-five-panel-hanger-boxes',
      'kraft-side-lock-six-corner-box': 'kraft-six-corner-boxes',
      'kraft-regular-six-corner-box': 'kraft-six-corner-boxes-2',
      'kraft-seal-end-auto-bottom-box': 'kraft-seal-end-auto-bottom-boxes',
      'kraft-single-wall-auto-bottom-tray': 'kraft-auto-bottom-trays',
      'kraft-two-piece-box': 'kraft-two-piece-boxes',
      'kraft-cigarette-box': 'kraft-cigarette-boxes',
      'kraft-bookend-box': 'kraft-bookend-boxes',
      'kraft-dispenser-box': 'kraft-dispenser-boxes',
      'kraft-double-wall-frame-tray': 'kraft-double-wall-trays',
      'cardboard-display-box': 'cardboard-display-boxes',
      'cardboard-tuck-end-box': 'cardboard-tuck-end-boxes',
      'cardboard-box-with-lid': 'cardboard-boxes-with-lids',
      'cardboard-gable-box': 'cardboard-gable-boxes',
      'cardboard-cake-bakery-box': 'cake-and-bakery-boxes',
      'cardboard-sleeve-box': 'cardboard-sleeve-boxes',
      'cardboard-dispenser-box': 'cardboard-dispenser-boxes',
      'cardboard-five-panel-hanger': 'cardboard-five-panel-hanger-boxes',
      'cardboard-double-locked-wall-lid-box': 'cardboard-double-locked-wall-lid-boxes',
      'cardboard-side-lock-six-corner-box': 'cardboard-side-lock-six-corner-boxes',
      'cardboard-regular-six-corner-box': 'cardboard-regular-six-corner-boxes',
      'cardboard-seal-end-auto-bottom-box': 'cardboard-seal-end-auto-bottom-boxes',
      'cardboard-auto-bottom-tray': 'cardboard-auto-bottom-trays',
      'cardboard-two-piece-box': 'cardboard-two-piece-boxes',
      'cardboard-cigarette-box': 'cardboard-cigarette-boxes',
      'cardboard-bookend-box': 'cardboard-bookend-boxes',
      'cardboard-double-wall-frame-tray': 'cardboard-double-wall-frame-trays',
      'corrugated-mailer-box': 'corrugated-mailer-boxes',
      'corrugated-gable-box': 'corrugated-gable-boxes',
      'corrugated-double-locked-wall-lid-box': 'corrugated-double-locked-wall-lid-boxes',
      'corrugated-seal-end-auto-bottom-box': 'corrugated-seal-end-auto-bottom-boxes',
      'corrugated-auto-bottom-tray': 'corrugated-auto-bottom-trays',
      'corrugated-two-piece-box': 'corrugated-two-piece-boxes',
      'corrugated-brief-case-style-box': 'corrugated-brief-case-style-boxes',
      'corrugated-full-flap-shipping-box': 'corrugated-full-flap-shipping-boxes',
      'stand-up-pouche': 'stand-up-pouches',
      'zipper-bag': 'zipper-bags',
      'window-bag': 'window-bags',
      'kraft-shopping-bag': 'kraft-shopping-bags',
      'paper-bag': 'paper-bags',
      'pvc-bag': 'pvc-bags',
      'custom-perfume-boxes': 'perfume-boxes',
      'custom-makeup-boxes': 'makeup-boxes',
      'custom-lipstick-boxes': 'lipstick-boxes',
      'custom-lip-gloss-boxes': 'lip-gloss-boxes',
      'custom-eye-shadow-boxes': 'eye-shadow-boxes',
      'custom-cream-boxes': 'cream-boxes',
      'custom-french-fry-boxes': 'french-fry-boxes',
      'custom-coffee-boxes': 'coffee-packaging-boxes',
      'custom-coffee-cups': 'custom-coffee-cups',
      'custom-coffee-cup-sleeves': 'coffee-cup-sleeves',
      'custom-noodle-boxes': 'noodle-boxes',
      'custom-chinese-takeout-boxes': 'chinese-takeout-boxes',
      'custom-popcorn-boxes': 'popcorn-boxes',
      'custom-snack-boxes': 'snack-boxes',
      'custom-tea-boxes': 'tea-boxes',
      'custom-burger-boxes': 'burger-boxes',
      'custom-jar-candle-boxes': 'jar-candle-boxes',
      'shipping-boxes-industry': 'shipping-boxes',
      'soap-boxes-industry': 'soap-boxes',
      'cigarette-boxes-industry': 'cigarette-boxes',
      'pre-roll-boxes-industry': 'pre-roll-boxes',
      'sweet-gift-boxes-industry': 'sweet-gift-boxes',
      'candle-shipping-boxes-industry': 'candle-shipping-boxes',
      'kraft-pillow-soap-boxes-industry': 'kraft-pillow-soap-boxes',
      'tshirt-boxes': 't-shirt-boxes',
      'tags-printing': 'printed-tags',
      'product-labels-bottle-labels': 'products-bottle-labels',
      'packing-tape': 'packing-tape',
    };
    
    if (slugMappings[slug]) {
      return slugMappings[slug];
    }
    
    // Try common variations
    if (slug.endsWith('-box') && !slug.endsWith('-boxes')) {
      const pluralSlug = slug.replace(/-box$/, '-boxes');
      if (ourRangeOfData[pluralSlug]) {
        return pluralSlug;
      }
    }
    
    if (slug.endsWith('-bag') && !slug.endsWith('-bags')) {
      const pluralSlug = slug.replace(/-bag$/, '-bags');
      if (ourRangeOfData[pluralSlug]) {
        return pluralSlug;
      }
    }
    
    if (slug.endsWith('-pouche') && !slug.endsWith('-pouches')) {
      const pluralSlug = slug.replace(/-pouche$/, '-pouches');
      if (ourRangeOfData[pluralSlug]) {
        return pluralSlug;
      }
    }
    
    return slug;
  }, []);

  // Helper function to clean markdown formatting
  const cleanMarkdown = React.useCallback((text: string): string => {
    if (!text) return text;
    return text
      .replace(/\*\*/g, '') // Remove bold markdown **
      .replace(/\s*\*\s*/g, ' ') // Remove asterisks with surrounding spaces
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  }, []);

  // Try to fetch product from database
  React.useEffect(() => {
    const fetchProductFromDB = async () => {
      try {
        setDbLoading(true);
        const product = await getProductDataBySlug(slug);
        if (product) {
          const mappedProduct = mapEnrichedToProduct(product);
          // Use description from productPagesData (already in mappedProduct)
          setDbProduct(mappedProduct);
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
  }, [slug, isMounted, pageType, subcategory, category, section]);

  // Get product data if it exists in the legacy data structure
  const legacyProductData = productData[slug as keyof typeof productData];

  // Helper function to clean markdown formatting
  const cleanMarkdownInline = (text: string): string => {
    if (!text) return text;
    return text
      .replace(/\*\*/g, '') // Remove bold markdown **
      .replace(/\s*\*\s*/g, ' ') // Remove asterisks with surrounding spaces
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  };

  // Create dynamic product data based on the navigation structure
  // Use descriptions from productPagesData (hero sections)
  const getProductData = (): Product | null => {
    if (dbProduct) {
      return dbProduct;
    }

    if (legacyProductData) {
      const mapped = mapEnrichedToProduct(legacyProductData);
      // Use description from productPagesData (already in mapped)
      return mapped;
    }

    return null;
  };


  let productInfo = getProductData();
  // If no explicit product content, but we have a category/section with subcategories (e.g., Bakery/Jewelry/Soap),
  // synthesize a minimal product object so the page renders instead of "Coming Soon".
  if (!productInfo && (category || section)) {
    const fallbackName = category?.name || section?.name || "Products";
    
    // Use descriptions from navigation data (category/section/subcategory)
    let fallbackDesc: string;
    if (pageType === "subcategory" && subcategory) {
      fallbackDesc = subcategory.description || category?.description || section?.description || "Explore our curated selection of products crafted for your brand.";
    } else {
      fallbackDesc = category?.description || section?.description || "Explore our curated selection of products crafted for your brand.";
    }
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

  // Use descriptions from productPagesData (hero sections) - no override needed
  // The description is already set from productPagesData in mapEnrichedToProduct

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
        {/* <CustomDimensionsForm
          initialProductSlug={
            pageType === "subcategory" && subcategory
              ? subcategory.slug
              : undefined
          }
          initialCategorySlug={
            pageType === "category" && category
              ? category.slug
              : undefined
          }
        /> */}

        {/* Product Overview */}
        <ProductOverview 
          productData={productInfo} 
          categorySlug={category?.slug}
          sectionSlug={section?.slug}
          subcategorySlug={subcategory?.slug}
        />

        {/* Category Intro Section - Only show on main category pages */}
        {pageType === "category" && (
          <CategoryIntroSection category={category} slug={slug} />
        )}

        {/* Category Material Section - Only show on main category pages */}
        {pageType === "category" && (
          <CategoryMaterialSection category={category} slug={slug} />
        )}

        {/* Customization Details - Exclude on category pages */}
        {pageType !== "category" && (
          <ProductCustomization productData={productInfo} />
        )}

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
