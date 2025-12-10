import React from "react";
import Image from "next/image";
import { productByMaterialData } from "@/app/data/productByMaterialData";
import { productByIndustryData } from "@/app/data/productByIndustryData";
import { mylarBoxesData } from "@/app/data/mylarBoxesData";
import { shoppingBagsData } from "@/app/data/shoppingBagsData";
import { otherData } from "@/app/data/otherData";

interface ProductOverviewProps {
  productData: {
    name: string;
    description?: string;
    overview?: {
      heading?: string;
      title?: string;
      paragraphs?: string[];
    };
    // Optional explicit images if caller provides them; otherwise we will try to resolve
    images?: string[];
    // Optional hero image (from data files) used as a last-resort fallback
    heroImage?: string;
    slug?: string; // Product slug for exact matching
  };
  // Optional category and section information to limit image search to specific category
  categorySlug?: string;
  sectionSlug?: string;
  subcategorySlug?: string; // Subcategory slug for exact matching
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ productData, categorySlug, sectionSlug, subcategorySlug }) => {
  const name = productData?.name ?? "";
  const description = productData?.description;
  const overview = productData?.overview;
  const explicitImages = productData?.images;
  const heroImage = productData?.heroImage;
  const productSlug = productData?.slug || subcategorySlug;

  React.useEffect(() => {
    if (process.env.NODE_ENV === "development" && productData) {
      console.log("ProductOverview Data:", {
        name: productData.name,
        hasOverview: !!productData.overview,
        paragraphsCount: productData.overview?.paragraphs?.length || 0,
        paragraphs: productData.overview?.paragraphs,
        description: productData.description,
        explicitImages: productData.images,
      });
    }
  }, [productData]);

  if (!productData || !name) {
    return null;
  }

  const overviewHeading = overview?.heading || "Product Overview";
  const overviewTitle = overview?.title || `${name} at a Glance`;

  // Use overview.paragraphs directly from the data - no complex fallback logic
  let overviewParagraphs: string[] = [];

  // First priority: use overview.paragraphs if available
  if (
    overview?.paragraphs &&
    Array.isArray(overview.paragraphs) &&
    overview.paragraphs.length > 0
  ) {
    // Use all paragraphs from the data (filter out empty ones but keep valid content)
    overviewParagraphs = overview.paragraphs
      .map((p) => p?.trim())
      .filter((p) => p && p.length > 0);
  }
  // Fallback: if no overview paragraphs, try description
  else if (description && description.trim().length > 0) {
    // Split description into sentences for fallback
    const sentences = description
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0);

    if (sentences.length >= 3) {
      // Distribute sentences into 3 paragraphs
      const chunkSize = Math.ceil(sentences.length / 3);
      for (let i = 0; i < 3; i++) {
        const chunk = sentences
          .slice(i * chunkSize, (i + 1) * chunkSize)
          .map((s) => s.trim())
          .join(". ")
          .trim();
        if (chunk) {
          overviewParagraphs.push(chunk + (chunk.endsWith(".") ? "" : "."));
        }
      }
    } else if (sentences.length > 0) {
      // Use available sentences, pad to 3 if needed
      overviewParagraphs = sentences.map((s) => s.trim() + ".");
      while (overviewParagraphs.length < 3 && overviewParagraphs.length > 0) {
        overviewParagraphs.push(overviewParagraphs[0]); // Repeat first paragraph
      }
      overviewParagraphs = overviewParagraphs.slice(0, 3);
    } else {
      // Single paragraph fallback
      overviewParagraphs = [description.trim()];
    }
  }

  // Resolve up to 3 images:
  // 1) Use explicit images if provided
  // 2) Try to match product name in productByMaterialData subcategories and use their images
  // 3) Try to match product name in productByIndustryData subcategories and use their images
  // If none found, images array stays empty (text-only cards will render).
  function normalize(value: string): string {
    return value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function resolveImagesByName(productName: string): string[] {
    if (
      explicitImages &&
      Array.isArray(explicitImages) &&
      explicitImages.length > 0
    ) {
      return explicitImages.slice(0, 3);
    }

    const normalized = normalize(productName);

    // If categorySlug is provided, only search within that specific category
    if (categorySlug) {
      // Search in productByMaterialData if section is product-by-material
      if (sectionSlug === 'product-by-material') {
        for (const category of productByMaterialData) {
          if (category.slug === categorySlug) {
            // First, try to find by slug if available (most accurate)
            if (productSlug) {
              for (const sub of category.subcategories) {
                if (sub.slug === productSlug && Array.isArray(sub.images) && sub.images.length > 0) {
                  const images = [...sub.images];
                  const firstImage = images[0];
                  while (images.length < 3) {
                    images.push(firstImage);
                  }
                  return images.slice(0, 3);
                }
              }
            }
            // Search only within this category's subcategories by name
            for (const sub of category.subcategories) {
              const subNorm = normalize(sub.name);
              // Prioritize exact match
              if (subNorm === normalized && Array.isArray(sub.images) && sub.images.length > 0) {
                const images = [...sub.images];
                const firstImage = images[0];
                while (images.length < 3) {
                  images.push(firstImage);
                }
                return images.slice(0, 3);
              }
            }
            // If no exact match, try partial match within same category
            for (const sub of category.subcategories) {
              const subNorm = normalize(sub.name);
              if ((subNorm.includes(normalized) || normalized.includes(subNorm)) && Array.isArray(sub.images) && sub.images.length > 0) {
                const images = [...sub.images];
                const firstImage = images[0];
                while (images.length < 3) {
                  images.push(firstImage);
                }
                return images.slice(0, 3);
              }
            }
          }
        }
      }
      // Search in productByIndustryData if section is product-by-industry
      else if (sectionSlug === 'product-by-industry') {
        for (const category of productByIndustryData) {
          if (category.slug === categorySlug) {
            // First, try to find by slug if available (most accurate)
            if (productSlug) {
              for (const sub of category.subcategories) {
                if (sub.slug === productSlug && Array.isArray(sub.images) && sub.images.length > 0) {
                  const images = [...sub.images];
                  const firstImage = images[0];
                  while (images.length < 3) {
                    images.push(firstImage);
                  }
                  return images.slice(0, 3);
                }
              }
            }
            // Search only within this category's subcategories by name
            for (const sub of category.subcategories) {
              const subNorm = normalize(sub.name);
              // Prioritize exact match
              if (subNorm === normalized && Array.isArray(sub.images) && sub.images.length > 0) {
                const images = [...sub.images];
                const firstImage = images[0];
                while (images.length < 3) {
                  images.push(firstImage);
                }
                return images.slice(0, 3);
              }
            }
            // If no exact match, try partial match within same category
            for (const sub of category.subcategories) {
              const subNorm = normalize(sub.name);
              if ((subNorm.includes(normalized) || normalized.includes(subNorm)) && Array.isArray(sub.images) && sub.images.length > 0) {
                const images = [...sub.images];
                const firstImage = images[0];
                while (images.length < 3) {
                  images.push(firstImage);
                }
                return images.slice(0, 3);
              }
            }
          }
        }
      }
      // Search in special datasets if category matches
      const specialCategories = [
        mylarBoxesData,
        shoppingBagsData,
        otherData,
      ] as const;
      for (const special of specialCategories) {
        if (special.slug === categorySlug) {
          // First, try to find by slug if available (most accurate)
          if (productSlug) {
            for (const sub of special.subcategories) {
              if (sub.slug === productSlug && Array.isArray(sub.images) && sub.images.length > 0) {
                const images = [...sub.images];
                const firstImage = images[0];
                while (images.length < 3) {
                  images.push(firstImage);
                }
                return images.slice(0, 3);
              }
            }
          }
          // Search only within this category's subcategories by name
          for (const sub of special.subcategories) {
            const subNorm = normalize(sub.name);
            // Prioritize exact match
            if (subNorm === normalized && Array.isArray(sub.images) && sub.images.length > 0) {
              const images = [...sub.images];
              const firstImage = images[0];
              while (images.length < 3) {
                images.push(firstImage);
              }
              return images.slice(0, 3);
            }
          }
          // If no exact match, try partial match within same category
          for (const sub of special.subcategories) {
            const subNorm = normalize(sub.name);
            if ((subNorm.includes(normalized) || normalized.includes(subNorm)) && Array.isArray(sub.images) && sub.images.length > 0) {
              const images = [...sub.images];
              const firstImage = images[0];
              while (images.length < 3) {
                images.push(firstImage);
              }
              return images.slice(0, 3);
            }
          }
        }
      }
    }

    // If this is a top-level "Product by Material" category (e.g., Rigid Boxes, Kraft Boxes, etc.),
    // build an images array from that category's own subcategory images to avoid duplicates.
    for (const category of productByMaterialData) {
      const categoryNorm = normalize(category.name);
      if (
        categoryNorm === normalized ||
        categoryNorm.includes(normalized) ||
        normalized.includes(categoryNorm)
      ) {
        const collected: string[] = [];
        if (Array.isArray(category.subcategories)) {
          for (const sub of category.subcategories) {
            if (Array.isArray(sub.images)) {
              for (const img of sub.images) {
                if (
                  typeof img === "string" &&
                  img &&
                  !collected.includes(img)
                ) {
                  collected.push(img);
                  if (collected.length >= 3) break;
                }
              }
            }
            if (collected.length >= 3) break;
          }
        }
        // Fallback to category.image if we couldn't assemble 3 images
        if (collected.length === 0 && category.image) {
          collected.push(category.image);
        }
        while (collected.length < 3 && collected.length > 0) {
          // pad with available images but avoid immediate duplicates when possible
          const next = collected[collected.length - 1];
          collected.push(next);
        }
        if (collected.length > 0) {
          return collected.slice(0, 3);
        }
      }
    }

    // Handle top-level special categories: Mylar, Shopping Bags, Other
    const specialCategories = [
      mylarBoxesData,
      shoppingBagsData,
      otherData,
    ] as const;
    for (const special of specialCategories) {
      const specialNorm = normalize(special.name);
      if (
        specialNorm === normalized ||
        specialNorm.includes(normalized) ||
        normalized.includes(specialNorm)
      ) {
        const collected: string[] = [];
        if (Array.isArray(special.subcategories)) {
          for (const sub of special.subcategories) {
            if (Array.isArray(sub.images)) {
              for (const img of sub.images) {
                if (
                  typeof img === "string" &&
                  img &&
                  !collected.includes(img)
                ) {
                  collected.push(img);
                  if (collected.length >= 3) break;
                }
              }
            }
            if (collected.length >= 3) break;
          }
        }
        if (collected.length === 0 && special.image) {
          collected.push(special.image);
        }
        while (collected.length < 3 && collected.length > 0) {
          const next = collected[collected.length - 1];
          collected.push(next);
        }
        if (collected.length > 0) {
          return collected.slice(0, 3);
        }
      }
    }

    // If this is a top-level "Product by Industry" category (e.g., E-liquid Boxes, Vape Boxes, etc.),
    // build an images array from that category's own subcategory images to avoid duplicates.
    for (const category of productByIndustryData) {
      const categoryNorm = normalize(category.name);
      if (
        categoryNorm === normalized ||
        categoryNorm.includes(normalized) ||
        normalized.includes(categoryNorm)
      ) {
        const collected: string[] = [];
        if (Array.isArray(category.subcategories)) {
          for (const sub of category.subcategories) {
            // Only use images array, not heroImage (heroImage is for hero section only)
            if (Array.isArray(sub.images)) {
              for (const img of sub.images) {
                if (
                  typeof img === "string" &&
                  img &&
                  !collected.includes(img)
                ) {
                  collected.push(img);
                  if (collected.length >= 3) break;
                }
              }
            }
            if (collected.length >= 3) break;
          }
        }
        // Fallback to category.image if we couldn't assemble 3 images
        if (collected.length === 0 && category.image) {
          collected.push(category.image);
        }
        while (collected.length < 3 && collected.length > 0) {
          // pad with available images but avoid immediate duplicates when possible
          const next = collected[collected.length - 1];
          collected.push(next);
        }
        if (collected.length > 0) {
          return collected.slice(0, 3);
        }
      }
    }

    // Search in material data - prioritize exact product match first, only use images from same product
    for (const category of productByMaterialData) {
      for (const sub of category.subcategories) {
        const subNorm = normalize(sub.name);
        // Prioritize exact match - only use images from the exact product found
        if (subNorm === normalized && Array.isArray(sub.images) && sub.images.length > 0) {
          // Ensure we always return 3 images, repeating the first image if needed
          const images = [...sub.images];
          const firstImage = images[0];
          while (images.length < 3) {
            images.push(firstImage);
          }
          return images.slice(0, 3);
      }
    }
    }
    
    // If no exact match, try partial match but still only from same product
    for (const category of productByMaterialData) {
      for (const sub of category.subcategories) {
        const subNorm = normalize(sub.name);
        if (
          (subNorm.includes(normalized) || normalized.includes(subNorm)) &&
          Array.isArray(sub.images) &&
          sub.images.length > 0
        ) {
          // Ensure we always return 3 images, repeating the first image if needed
          const images = [...sub.images];
          const firstImage = images[0];
          while (images.length < 3) {
            images.push(firstImage);
          }
          return images.slice(0, 3);
        }
      }
    }

    // Search in special datasets: Mylar, Shopping Bags, Other
    for (const special of specialCategories) {
      for (const sub of special.subcategories) {
        const subNorm = normalize(sub.name);
        if (
          (subNorm === normalized ||
            subNorm.includes(normalized) ||
            normalized.includes(subNorm)) &&
          Array.isArray(sub.images) &&
          sub.images.length > 0
        ) {
          // Ensure we always return 3 images, repeating the first image if needed
          const images = [...sub.images];
          const firstImage = images[0];
          while (images.length < 3) {
            images.push(firstImage);
          }
          return images.slice(0, 3);
        }
      }
    }

    // Search in industry data
    // Special handling for Gift Boxes category - use Sweet Gift Boxes images
    if (normalized === "gift boxes" || normalized.includes("gift boxes")) {
      for (const category of productByIndustryData) {
        const categoryNorm = normalize(category.name);
        if (categoryNorm === "gift boxes" || categoryNorm.includes("gift boxes")) {
          // Look for Sweet Gift Boxes subcategory
          for (const sub of category.subcategories) {
            const subNorm = normalize(sub.name);
            if (
              (subNorm === "sweet gift boxes" || subNorm.includes("sweet gift")) &&
              Array.isArray(sub.images) &&
              sub.images.length > 0
            ) {
              // Ensure we always return 3 images, repeating the first image if needed
              const images = [...sub.images];
              const firstImage = images[0];
              while (images.length < 3) {
                images.push(firstImage);
              }
              return images.slice(0, 3);
            }
          }
        }
      }
    }

    // General search in industry data - prioritize exact product match first, only use images from same product
    // First try exact match
    for (const category of productByIndustryData) {
      for (const sub of category.subcategories) {
        const subNorm = normalize(sub.name);
        // Prioritize exact match - only use images from the exact product found
        if (subNorm === normalized && Array.isArray(sub.images) && sub.images.length > 0) {
          // Only use images array, not heroImage (heroImage is for hero section only)
          // Ensure we always return 3 images, repeating the first image if needed
          const images = [...sub.images];
          const firstImage = images[0];
          while (images.length < 3) {
            images.push(firstImage);
          }
          return images.slice(0, 3);
        }
      }
    }
    
    // If no exact match, try partial match but still only from same product
    for (const category of productByIndustryData) {
      for (const sub of category.subcategories) {
        const subNorm = normalize(sub.name);
        if (
          (subNorm.includes(normalized) || normalized.includes(subNorm)) &&
          Array.isArray(sub.images) &&
          sub.images.length > 0
        ) {
          // Only use images array, not heroImage (heroImage is for hero section only)
          // Ensure we always return 3 images, repeating the first image if needed
          const images = [...sub.images];
          const firstImage = images[0];
          while (images.length < 3) {
            images.push(firstImage);
          }
          return images.slice(0, 3);
        }
      }
    }

    // Fallback: use provided hero image (repeat to ensure 3 slots)
    if (
      heroImage &&
      typeof heroImage === "string" &&
      heroImage.trim().length > 0
    ) {
      return [heroImage, heroImage, heroImage];
    }

    return [];
  }

  const resolvedImages = resolveImagesByName(name);
  // Ensure we always have at least 3 images for the 3 paragraphs
  const overviewImages: string[] = (() => {
    if (resolvedImages.length < 3 && resolvedImages.length > 0) {
      const firstImage = resolvedImages[0];
      return [...resolvedImages, ...Array(3 - resolvedImages.length).fill(firstImage)];
    }
    return resolvedImages;
  })();
  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "du5lyrqvz";
  const buildCldUrl = (publicId: string) =>
    `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}`;

  // If no valid paragraphs found, don't render the section
  if (overviewParagraphs.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f2eb] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20">
          <span className="inline-flex items-center text-xs tracking-[0.32em] uppercase font-semibold text-[#0c6b76] bg-[#0c6b76]/10 px-5 py-2 rounded-full">
            {overviewHeading}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight text-[#0c6b76] tracking-tight max-w-4xl mx-auto">
            {overviewTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] mx-auto rounded-full" />
        </div>

        {/* Alternating Paragraph/Image Rows */}
        <div className="space-y-12 md:space-y-16">
          {overviewParagraphs.slice(0, 3).map((paragraph, index) => {
            if (!paragraph || !paragraph.trim()) return null;
            const isEven = index % 2 === 0; // 0 and 2 -> text left, image right; 1 -> image left, text right
            const imageId = overviewImages[index];
            const hasImage =
              typeof imageId === "string" && imageId.trim().length > 0;
            // Force second row (index === 1) to be image left, text right.
            const forceSecondRowLayout = index === 1;
            const leftShowsImage = forceSecondRowLayout
              ? true
              : !isEven && hasImage;
            const rightShowsImage = forceSecondRowLayout
              ? false
              : isEven && hasImage;
            // Build final image src with fallback for row 2 if missing
            const finalImageSrc = hasImage
              ? buildCldUrl(imageId)
              : forceSecondRowLayout
              ? "/favicon.png"
              : null;

            return (
              <div
                key={`overview-row-${index}`}
                className={`grid items-center gap-8 md:gap-12 ${
                  leftShowsImage || rightShowsImage
                    ? "lg:grid-cols-2"
                    : "lg:grid-cols-1 max-w-4xl mx-auto"
                }`}
              >
                {/* Left Column (Text when isEven, Image when odd) */}
                <div
                  className={`order-1 ${
                    forceSecondRowLayout
                      ? "lg:order-1"
                      : isEven
                      ? "lg:order-1"
                      : hasImage
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >
                  {leftShowsImage ? (
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      {finalImageSrc ? (
                        <Image
                          src={finalImageSrc}
                          alt={`${name} overview ${index + 1}`}
                          fill
                          sizes="(min-width:1280px) 640px, (min-width:1024px) 560px, (min-width:768px) 720px, 100vw"
                          quality={70}
                          className="object-cover"
                          priority={index === 0}
                        />
                      ) : null}
                    </div>
                  ) : (
                    <div className="relative space-y-6 p-0">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#0c6b76]/30 via-[#0ca6c2]/30 to-transparent" />
                      </div>
                      <p className="text-[1.125rem] md:text-[1.1875rem] leading-[1.9] text-[#2f2f2f] text-pretty whitespace-normal break-words">
                        {paragraph.trim()}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Column (Image when isEven, Text when odd) */}
                {(leftShowsImage || rightShowsImage) && (
                  <div
                    className={`order-2 ${
                      forceSecondRowLayout
                        ? "lg:order-2"
                        : isEven
                        ? "lg:order-2"
                        : "lg:order-1"
                    }`}
                  >
                    {rightShowsImage ? (
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        {finalImageSrc ? (
                          <Image
                            src={finalImageSrc}
                            alt={`${name} overview ${index + 1}`}
                            fill
                            sizes="(min-width:1280px) 640px, (min-width:1024px) 560px, (min-width:768px) 720px, 100vw"
                            quality={70}
                            className="object-cover"
                            priority={index === 0}
                          />
                        ) : null}
                      </div>
                    ) : (
                      <div className="relative space-y-6 p-0">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] text-white font-bold text-lg shadow-lg">
                            {index + 1}
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-r from-[#0c6b76]/30 via-[#0ca6c2]/30 to-transparent" />
                        </div>
                        <p className="text-[1.125rem] md:text-[1.1875rem] leading-[1.9] text-[#2f2f2f] text-pretty whitespace-normal break-words">
                          {paragraph.trim()}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#0c6b76]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
