import React from "react";

interface ProductOverviewProps {
  productData: {
    name: string;
    description?: string;
    overview?: {
      heading?: string;
      title?: string;
      paragraphs?: string[];
    };
  };
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ productData }) => {
  const name = productData?.name ?? "";
  const description = productData?.description;
  const overview = productData?.overview;

  React.useEffect(() => {
    if (process.env.NODE_ENV === "development" && productData) {
      console.log("ProductOverview Data:", {
        name: productData.name,
        hasOverview: !!productData.overview,
        paragraphsCount: productData.overview?.paragraphs?.length || 0,
        paragraphs: productData.overview?.paragraphs,
        description: productData.description,
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

        {/* Paragraph Layout - Enhanced Card Design */}
        <div
          className={`grid gap-8 md:gap-10 ${
            overviewParagraphs.length === 1
              ? "lg:grid-cols-1 max-w-3xl mx-auto"
              : overviewParagraphs.length === 2
              ? "lg:grid-cols-2"
              : "lg:grid-cols-3"
          }`}
        >
          {overviewParagraphs.map((paragraph, index) => {
            // Only render if paragraph has content
            if (!paragraph || !paragraph.trim()) {
              return null;
            }

            return (
              <div
                key={`overview-paragraph-${index}`}
                className="group relative bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 p-8 md:p-10 overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c6b76]/5 via-transparent to-[#0ca6c2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c6b76] via-[#0ca6c2] to-[#0c6b76] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Paragraph number indicator with enhanced design */}
                <div className="relative mb-8 flex items-center gap-4">
                  <div className="relative">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-[#0c6b76] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#0c6b76]/30 via-[#0ca6c2]/30 to-transparent" />
                </div>

                {/* Paragraph content with enhanced typography */}
                <div className="relative z-10">
                  <p className="text-[1.125rem] md:text-[1.1875rem] leading-[1.9] text-[#2f2f2f] text-pretty font-normal group-hover:text-[#1a1a1a] transition-colors duration-300 whitespace-normal break-words">
                    {paragraph.trim()}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#0c6b76]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
