import { productByMaterialData } from "./productByMaterialData";
import { productByIndustryData } from "./productByIndustryData";
import { mylarBoxesData } from "./mylarBoxesData";
import { shoppingBagsData } from "./shoppingBagsData";
import { otherData } from "./otherData";

interface ProductSectionFeature {
  icon: string;
  title: string;
  description: string;
}

interface ProductFAQItem {
  question: string;
  answer: string;
}

type DefaultCustomization = ReturnType<typeof createDefaultCustomization>;
type DefaultWhyChooseUs = ReturnType<typeof createDefaultWhyChooseUs>;

type PartialCustomization = Partial<DefaultCustomization> & {
  details?: DefaultCustomization["details"];
  supportActions?: DefaultCustomization["supportActions"];
};

type PartialWhyChooseUs = Partial<DefaultWhyChooseUs>;
interface SubcategoryCardItem {
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface SubcategoryCards {
  heading: string;
  description?: string;
  items: SubcategoryCardItem[];
}

const industryPageEntries: Record<string, RawProductEntry> = {};

type RawProductEntry = {
  name?: string;
  description?: string;
  heroImage?: string;
  modelPath?: string;
  features?: ProductSectionFeature[];
  keyFeatures?: string[];
  customization?: PartialCustomization;
  overview?: Partial<ReturnType<typeof createDefaultOverview>>;
  whyChooseUs?: PartialWhyChooseUs;
  faq?: {
    eyebrow?: string;
    heading?: string;
    items?: ProductFAQItem[];
  };
  cta?: {
    title?: string;
    description?: string;
  };
  ctaTitle?: string;
  ctaDescription?: string;
  subcategoryCards?: SubcategoryCards;
  [key: string]: unknown;
};

interface EnrichedProductEntry
  extends Omit<
    RawProductEntry,
    | "features"
    | "keyFeatures"
    | "customization"
    | "overview"
    | "whyChooseUs"
    | "faq"
    | "cta"
  > {
  slug: string;
  name: string;
  features: ProductSectionFeature[];
  keyFeatures: string[];
  customization: DefaultCustomization;
  overview: ReturnType<typeof createDefaultOverview>;
  whyChooseUs: DefaultWhyChooseUs;
  faq?: {
    eyebrow?: string;
    heading?: string;
    items: ProductFAQItem[];
  };
  cta: {
    title: string;
    description: string;
  };
  subcategoryCards?: SubcategoryCards;
}

const sentenceCase = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const createDefaultFeatures = (name: string): ProductSectionFeature[] => [
  {
    icon: "shield",
    title: `${sentenceCase(name)} Built to Protect`,
    description: `Every ${name.toLowerCase()} we craft uses premium materials to protect your products from transit to unboxing.`,
  },
  {
    icon: "palette",
    title: "Brand-Forward Design",
    description: `Vibrant printing, specialty finishes, and thoughtful details keep your brand front and center on every ${name.toLowerCase()}.`,
  },
  {
    icon: "truck",
    title: "Reliable Fulfillment",
    description: `Streamlined production timelines ensure your ${name.toLowerCase()} arrive when you need them, without compromising quality.`,
  },
  {
    icon: "check",
    title: "Sustainable Choices",
    description: `Choose recyclable stocks, water-based inks, and eco coatings to keep your ${name.toLowerCase()} program planet-friendly.`,
  },
];

const createDefaultKeyFeatures = (name: string): string[] => [
  `Premium construction keeps ${name.toLowerCase()} secure in transit`,
  `High-impact graphics elevate every ${name.toLowerCase()} presentation`,
  `Flexible sizing tailored to your product line`,
  `Sustainable material options that meet brand goals`,
  `Short runs through large volumes produced with care`,
];

const createDefaultWhyChooseUs = (name: string) => ({
  eyebrow: "Why Choose Us",
  heading: `${sentenceCase(name)} That Build Real Brands`,
  description: `We approach ${name.toLowerCase()} as more than packaging—they are tactile brand experiences. From engineering to finishing, every detail is designed to delight your customer and move your product.`,
  features: createDefaultFeatures(name),
});

const ensureArray = <T>(value: T[] | undefined, fallback: T[]) =>
  Array.isArray(value) && value.length > 0 ? value : fallback;

const getSubcategoryImage = (subcategory: unknown, fallback: string) => {
  if (!subcategory || typeof subcategory !== "object") {
    return fallback || "products-box-img_x8vu4b";
  }

  const record = subcategory as Record<string, unknown>;

  if (typeof record.image === "string" && record.image.length > 0) {
    return record.image;
  }

  if (Array.isArray(record.images) && record.images.length > 0) {
    const [primaryImage] = record.images as unknown[];
    if (typeof primaryImage === "string" && primaryImage.length > 0) {
      return primaryImage;
    }
  }

  return fallback || "products-box-img_x8vu4b";
};

const buildSubcategoryCards = (slug: string): SubcategoryCards | undefined => {
  const materialCategory = productByMaterialData.find(
    (category) => category.slug === slug
  );
  if (materialCategory) {
    return {
      heading: `Our Range of ${materialCategory.name}`,
      description: materialCategory.description,
      items: materialCategory.subcategories.map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `Premium ${sub.name.toLowerCase()} packaging solutions tailored to your products.`,
        image: getSubcategoryImage(sub, materialCategory.image),
      })),
    };
  }

  const industryCategory = productByIndustryData.find(
    (category) => category.slug === slug
  );
  if (industryCategory) {
    return {
      heading: `Packaging for ${industryCategory.name}`,
      description: industryCategory.description,
      items: industryCategory.subcategories.map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} designed to meet industry demands with custom branding.`,
        image: getSubcategoryImage(sub, industryCategory.image),
      })),
    };
  }

  if (slug === mylarBoxesData.slug) {
    return {
      heading: `Explore ${mylarBoxesData.name}`,
      description: mylarBoxesData.description,
      items: mylarBoxesData.subcategories.map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} engineered with advanced barrier properties for freshness.`,
        image: getSubcategoryImage(sub, mylarBoxesData.image),
      })),
    };
  }

  if (slug === shoppingBagsData.slug) {
    return {
      heading: `Shop ${shoppingBagsData.name}`,
      description: shoppingBagsData.description,
      items: shoppingBagsData.subcategories.map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} crafted for memorable retail experiences.`,
        image: getSubcategoryImage(sub, shoppingBagsData.image),
      })),
    };
  }

  if (slug === otherData.slug) {
    return {
      heading: `Complete Your Packaging with ${otherData.name}`,
      description: otherData.description,
      items: otherData.subcategories.map((sub) => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} accessories to finish every package with polish.`,
        image: getSubcategoryImage(sub, otherData.image),
      })),
    };
  }

  return undefined;
};

const createDefaultOverview = (name: string, description?: string) => ({
  heading: "Product Overview",
  title: `${sentenceCase(name)} at a Glance`,
  paragraphs: [
    description ||
      `${sentenceCase(
        name
      )} combine presentation with protection, ensuring your products arrive ready to impress.`,
    `Every detail of our ${name.toLowerCase()} is engineered for a premium unboxing moment—structural strength, vibrant graphics, and tactile finishes come standard.`,
    `Partner with BoxyPack to design ${name.toLowerCase()} that match your brand voice, meet logistics requirements, and scale with your production needs.`,
  ],
});

const createDefaultCustomization = (name: string) => ({
  eyebrow: "Customization",
  heading: "Customize Your Packaging",
  description: `Design and order ${sentenceCase(
    name
  )} that match your product and brand needs. Choose your preferred material, size, and surface finish.`,
  detailsHeading: "Customization Details",
  details: [
    { label: "Material Type", value: "Kraft Paperboard / Recycled Cardboard" },
    { label: "Structure", value: "Gable Box / Foldable Handle Design" },
    { label: "Thickness", value: "12PT / 14PT / 18PT" },
    { label: "Finish", value: "Matte / Gloss / Uncoated" },
    { label: "Printing", value: "Inside, Outside, or Both" },
    { label: "Dimensions (L × W × H)", value: "e.g., 10 × 6 × 4" },
    { label: "Quantity", value: "250 units (Bulk discounts available)" },
  ],
  footerNote: "Review your design, preview your sample, and order online.",
  supportTitle: "Need help before ordering?",
  supportDescription:
    "If you’d like to talk before placing your order, our support team is ready. You can connect directly with an agent or get a quick email reply to discuss materials, pricing, or design options.",
  supportActions: [
    {
      label: "Live Assistance",
      description: "Connect directly with an agent for instant guidance.",
    },
    {
      label: "Email Consultation",
      description:
        "Get a quick reply about materials, pricing, or design options.",
    },
  ],
});

const createDefaultCTA = (name: string) => ({
  title: "Ready to Get Started?",
  description: `Get a custom quote for your ${name.toLowerCase()} today. Our team is ready to help you create the perfect packaging solution.`,
});

const buildFaq = (
  name: string,
  items: ProductFAQItem[],
  options?: {
    eyebrow?: string;
    heading?: string;
  }
) => ({
  eyebrow: options?.eyebrow || `${sentenceCase(name)} FAQs`,
  heading: options?.heading || `Common Questions about ${sentenceCase(name)}`,
  items,
});

const rawProductData: Record<string, RawProductEntry> = {
  // Industry Main Category: Bakery Boxes
  "bakery-boxes": {
    name: "Bakery Boxes",
    description:
      "Fresh, elegant, and made to impress. Buy bakery boxes wholesale for cupcakes, pastries, and desserts that look as good as they taste.",
    heroImage: "Box-4_lztqi7",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    // Subcategory cards will be auto-built from navigation using buildSubcategoryCards("bakery-boxes")
    keyFeatures: [
      "Food-grade materials that keep baked goods fresh",
      "Grease-resistant and easy-to-handle design",
      "Custom printing for logos and product details",
      "Multiple sizes for cupcakes, cakes, and pastries",
      "Window cutouts for visible product display",
      "Recyclable and eco-friendly packaging options",
      "Ideal for bakeries, cafés, and dessert shops",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-safe SBS/CUK board, kraft, or laminated paperboard",
        },
        {
          label: "Structure",
          value:
            "Auto-lock bottoms, tuck lids, carry handles, or windowed panels",
        },
        {
          label: "Thickness",
          value: "14 pt / 16 pt / 18 pt",
        },
        {
          label: "Finish",
          value: "Matte or gloss lamination or soft-touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "e.g., 10 × 6 × 4",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Bakery Boxes Wholesale",
      paragraphs: [
        "Our bakery boxes are designed to protect delicate baked goods while enhancing presentation. Whether you run a bakery, café, or home-based baking business, these boxes combine function and beauty. Each box ensures freshness, easy handling, and a delightful unboxing experience for your customers.",
        "At BoxyPack, we craft custom bakery boxes wholesale that match your brand’s personality and care. From printed cake boxes to eco-friendly cupcake packaging, we tailor every box for your products and audience. Our designs help you stand out on the shelf and in customers’ memories.",
        "As a printed bakery boxes supplier, we deliver superior print quality, durable structure, and food-grade materials at a competitive bakery boxes price that fits small and large businesses alike.",
      ],
    },
    faq: buildFaq("Bakery Boxes", [
      {
        question: "What are bakery boxes used for?",
        answer:
          "They’re used for packaging cakes, cupcakes, pastries, cookies, and other baked treats.",
      },
      {
        question: "Can I customize bakery boxes with my logo?",
        answer:
          "Yes, BoxyPack provides full-color printing for custom bakery boxes wholesale.",
      },
      {
        question: "Are bakery boxes eco-friendly?",
        answer:
          "Yes, we offer eco-friendly bakery packaging boxes made from recyclable kraft materials.",
      },
      {
        question: "Do you sell bakery boxes in bulk?",
        answer:
          "Absolutely, you can buy bakery boxes online in bulk at discounted rates.",
      },
      {
        question: "What determines the bakery boxes price?",
        answer:
          "Pricing depends on size, printing type, coating, and order quantity.",
      },
    ]),
    cta: {
      title: "Fresh Designs, Sweet Packaging",
      description:
        "Get in touch with BoxyPack today for custom bakery boxes that protect and promote your baked goods with style. Our packaging experts are ready to design the perfect solution for your bakery. Contact us now to place your bulk order and make every treat look irresistible.",
    },
  },

  // Industry Main Category: Jewelry Boxes
  "jewelry-boxes": {
    name: "Jewelry Boxes",
    description:
      "Elegant, durable, and made to shine. Buy jewelry boxes wholesale for secure storage, flawless gifting, and premium presentation that highlights every piece.",
    heroImage: "Box-4_lztqi7",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Soft-touch interiors that protect delicate jewelry",
      "Rigid structure for a premium look and long-term use",
      "Custom printing and embossing for branding and elegance",
      "Available in matte, gloss, or velvet finishes",
      "Eco-friendly materials with sustainable design options",
      "Magnetic and ribbon closures for a luxury feel",
      "Perfect for jewelers, boutiques, and online sellers",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid greyboard with wrapped papers or premium coated stocks",
        },
        {
          label: "Structure",
          value: "Lift-off lid, book-style, drawer/sleeve, magnetic closure",
        },
        {
          label: "Thickness",
          value: "2.0–3.0 mm rigid board with custom insert options",
        },
        {
          label: "Finish",
          value: "Soft-touch lamination, velvet wrap, foil, emboss/deboss",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "10 × 6 × 4",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Jewelry Packaging Boxes Wholesale",
      paragraphs: [
        "Our jewelry boxes are crafted to combine elegance and protection in every design. Ideal for rings, earrings, necklaces, and watches, these boxes enhance product appeal while ensuring safety during storage or transit. Every detail from lining to closure adds a touch of sophistication that your customers notice instantly.",
        "At BoxyPack, we create custom jewelry packaging boxes wholesale that express your brand’s personality. Whether you need velvet-coated ring boxes, rigid necklace cases, or minimal kraft jewelry boxes, we customize each to suit your brand’s vision.",
        "As a luxury jewelry boxes supplier near me, we offer fine finishes, durable materials, and affordable jewelry boxes prices that meet retail and wholesale needs with equal perfection.",
      ],
    },
    faq: buildFaq("Jewelry Boxes", [
      {
        question: "What are jewelry boxes used for?",
        answer:
          "They are used for storing, protecting, and presenting jewelry items such as rings, earrings, and necklaces.",
      },
      {
        question: "Can I add custom branding to jewelry boxes?",
        answer:
          "Yes, BoxyPack offers printing, embossing, and foil stamping for custom jewelry packaging boxes wholesale.",
      },
      {
        question: "Are your jewelry boxes eco-friendly?",
        answer:
          "Yes, we produce eco-friendly jewelry packaging boxes using recyclable and sustainable materials.",
      },
      {
        question: "Do you sell jewelry boxes in bulk?",
        answer:
          "Yes, you can buy jewelry boxes online in bulk at discounted wholesale prices.",
      },
      {
        question: "What determines the jewelry boxes price?",
        answer:
          "The jewelry boxes price depends on the material type, finish, size, and order volume.",
      },
    ]),
    cta: {
      title: "Luxury Designs, Lasting Impressions",
      description:
        "Reach out to BoxyPack today for custom jewelry boxes that elevate your brand and protect your pieces in style. Our design team is ready to create elegant, durable, and sustainable packaging tailored to your needs. Contact us now to begin your order and showcase your jewelry the right way.",
    },
  },

  // Industry Main Category: Soap Boxes
  "soap-boxes": {
    name: "Soap Boxes",
    description:
      "Stylish, strong, and ready to impress. Buy soap boxes wholesale for secure, eco-friendly, and elegant packaging that makes every bar stand out beautifully.",
    heroImage: "Box-4_lztqi7",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade and skin-safe packaging materials",
      "Custom printing for logos and product details",
      "Window and die-cut designs for visual appeal",
      "Multiple shapes and sizes for all soap types",
      "Moisture-resistant coatings to protect texture",
      "100% recyclable and eco friendly soap packaging boxes",
      "Ideal for handmade, organic, and retail soaps",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Board / Cardboard / Kraft",
        },
        {
          label: "Structure",
          value: "Tuck-end cartons, sleeves, windowed boxes, and wraps",
        },
        {
          label: "Thickness",
          value: "14 pt / 16 pt / 18 pt",
        },
        {
          label: "Finish",
          value: "Matte/gloss lamination,soft-touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "10 × 6 × 4",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Printed Soap Packaging Boxes Wholesale",
      paragraphs: [
        "Our soap boxes are made to blend beauty, durability, and practicality. Designed for handmade, organic, and luxury soaps, these boxes keep products safe while enhancing shelf appeal. Each design helps your brand express care, creativity, and quality.",
        "At BoxyPack, we craft custom printed soap packaging boxes wholesale that protect your soaps and promote your brand image. Whether you prefer kraft, window, or custom printed styles, we tailor each order to match your brand story and vision.",
        "As a luxury soap boxes with logo supplier, we deliver premium finishes, sturdy build, and sustainable materials at a soap boxes price that fits every business—from small artisans to national brands.",
      ],
    },
    faq: buildFaq("Soap Boxes", [
      {
        question: "What are soap boxes used for?",
        answer:
          "They’re used for packaging handmade, organic, and commercial soaps to keep them clean and protected.",
      },
      {
        question: "Can I get my soap boxes printed with my logo?",
        answer:
          "Yes, BoxyPack offers full-color printing and logo customization for custom printed soap packaging boxes wholesale.",
      },
      {
        question: "Are your soap boxes eco-friendly?",
        answer:
          "Absolutely. We produce eco friendly soap packaging boxes using recyclable kraft and cardboard materials.",
      },
      {
        question: "Do you sell soap boxes in bulk?",
        answer:
          "Yes, you can buy soap packaging online in bulk at discounted wholesale rates.",
      },
      {
        question: "What affects the soap boxes price?",
        answer:
          "The soap boxes price depends on size, printing type, coating, and order volume.",
      },
    ]),
    cta: {
      title: "Clean Designs, Fresh Packaging",
      description:
        "Get in touch with BoxyPack today for custom soap boxes that combine eco-conscious design with premium presentation. Our packaging experts are ready to help you create sustainable, beautiful packaging that adds value to every bar. Contact us now to begin your next order and make your soaps shine on every shelf.",
    },
  },
  // Product: Rigid Boxes
  "rigid-boxes": {
    name: "Rigid Boxes",
    description:
      "Strength meets elegance. Buy rigid boxes online for premium packaging that blends lasting protection, luxury style, and high-end presentation for every brand.",
    heroImage: "Magnetic-Closure-Rigid-Box_vtf07m",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built from thick, durable, rigid paperboard",
      "Custom printing and finishing on all surfaces",
      "Matte, gloss, or soft-touch lamination choices",
      "Embossing, foil stamping, or spot UV for logos",
      "Wide variety of box shapes and styles available",
      "Long-lasting, non-collapsible, and reusable structure",
      "Eco-friendly and fully recyclable materials",
    ],
    customization: {
      details: [
        { label: "Material Type", value: " Rigid Board / Cardboard / Kraft" },
        {
          label: "Structure",
          value: "Magnetic / Two-Piece / Drawer / Foldable",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9.5 × 7.75 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Rigid Boxes with Logo",

      paragraphs: [
        "Our custom rigid boxes with logo combine durability, sophistication, and brand appeal in one premium package. Designed to provide structure, stability, and luxury, these boxes are ideal for high-value products that demand attention.",
        "At BoxyPack, we create packaging that makes an impression before the product is even revealed. As a leading rigid boxes wholesale supplier, we craft boxes using precision engineering and fine materials that reflect your brand’s quality. From jewelry and cosmetics to electronics and corporate gifts, rigid packaging gives products a distinctive premium feel.",
        "Each box is fully customizable in size, shape, and design, ensuring your brand stands out while keeping products protected. With competitive luxury rigid packaging boxes price, we make high-end presentation accessible to every business.",
      ],
    },
    faq: buildFaq("Rigid Boxes", [
      {
        question: "What are rigid boxes used for?",
        answer:
          "They’re used for luxury packaging, ideal for jewelry, tech gadgets, perfumes, and corporate gifts.",
      },
      {
        question: "Can I customize my rigid boxes with logos or artwork?",
        answer:
          "Yes, BoxyPack provides full-color printing, foil stamping, and embossing options for custom branding.",
      },
      {
        question: "Are rigid boxes available in bulk?",
        answer:
          "Absolutely. We are a rigid boxes wholesale supplier, offering bulk production with fast turnaround times.",
      },
      {
        question: "Are rigid boxes environmentally friendly?",
        answer:
          "Yes, all materials used are recyclable and sourced responsibly..",
      },
      {
        question: "How much do luxury rigid boxes cost?",
        answer:
          "Our luxury rigid packaging boxes price varies by size, finish, and quantity. We guarantee quality at fair rates.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Get a custom quote for your premium rigid boxes today. Experience the difference that luxury packaging makes.",
    },
  },

  // Product: Shipping Boxes
  "shipping-boxes": {
    name: "Shipping Boxes",
    description:
      "Strong and reliable, our shipping boxes ensure products travel safely across any distance. Built for value and strength, they provide trusted protection and a perfect look.",
    heroImage: "Corrugated-Full-Flap-Shipping-Box_fumlwz",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Engineered corrugated fluting absorbs shocks during long hauls",
      "Exterior branding ensures every shipment promotes your company",
      "Moisture and abrasion-resistant coatings defend against tough routes",
      "Optimized dielines assemble quickly to streamline fulfillment",
      "Heavy-duty options certified for parcel and freight requirements",
      "Interior print and inserts deliver on-brand subscription experiences",
      "Cost-effective production scaling for nationwide rollouts",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "E, B, or BC flute corrugated with kraft or white-top liners",
        },
        {
          label: "Structure",
          value:
            "Regular slotted cartons, mailers, half-slotted, or auto-lock bottoms",
        },
        {
          label: "Thickness",
          value: 'Single wall 1/16"-3/16" or double wall 1/4" configurations',
        },
        {
          label: "Finish",
          value:
            "Kraft, flood white, anti-scuff AQ, or water-resistant coatings",
        },
        {
          label: "Printing",
          value:
            "Flexo, digital, or litho-lam wraps with variable data options",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Custom cut scores from 4" x 4" x 2" to 24" x 18" x 12"',
        },
        {
          label: "Quantity",
          value: "Production from 250 cartons with palletized fulfillment",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Shipping Boxes That Protect and Promote",
      paragraphs: [
        "Shipping boxes are more than a vessel—they carry your brand promise from fulfillment center to front door. We engineer each box to withstand complex supply chains while keeping costs in check.",
        "Our corrugated specialists optimize flute profiles, coatings, and structural reinforcements so fragile and heavy products reach customers without compromise.",
        "Pair rugged performance with bold graphics, interior print, and kitted experiences to transform every shipment into a branded moment your customers remember.",
      ],
    },
    faq: buildFaq(
      "Shipping Boxes",
      [
        {
          question: "How do I choose the right flute for my shipping box?",
          answer:
            "We look at product weight, transit distance, and DIM pricing to recommend an E, B, or BC flute. Our engineers model compression strength so you can balance protection with freight efficiency.",
        },
        {
          question: "Can shipping boxes feature full-color graphics?",
          answer:
            "Yes. We can flood print exteriors, add interior storytelling, or apply litho-laminate wraps that keep graphics protected during handling. Digital and flexo print options cover short and long runs.",
        },
        {
          question:
            "What lead times should I expect for a replenishment order?",
          answer:
            "Standard replenishment orders ship in 2–3 weeks after artwork approval. If your volumes shift unexpectedly, our production scheduling team can accelerate runs or stage palletized inventory.",
        },
        {
          question: "Do you offer ISTA testing for shipping boxes?",
          answer:
            "We can run ISTA, burst, and drop testing on request. Our team partners with certified labs or executes in-house simulations to validate packaging before rollout.",
        },
      ],
      {
        heading: "Questions about Shipping Boxes",
        eyebrow: "Shipping Box FAQs",
      }
    ),
    cta: {
      title: "Ready to Ship with Confidence?",
      description:
        "Get a custom quote for your shipping boxes today. Ensure your products arrive safely every time.",
    },
  },

  // Product: Kraft Boxes
  "kraft-boxes": {
    name: "Kraft Boxes",
    description:
      "Sustainable packaging made simple. Buy kraft boxes online for eco-friendly, durable, and customizable solutions that protect your products and elevate your brand naturally.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Crafted from durable, eco-friendly kraft paperboard",
      "Lightweight yet strong for safe product shipping",
      "Fully customizable with printing and logo options",
      "Matte, gloss, or uncoated natural brown finishes",
      "Foldable, stackable, and easy to assemble designs",
      "Available in multiple sizes for all product types",
      "100% recyclable, reusable, and biodegradable",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Kraft Paperboard / Cardboard" },
        { label: "Structure", value: " Lid and Base / Two-Piece Box" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: " e.g., 9 × 6 × 3" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Printed Kraft Boxes Wholesale",
      paragraphs: [
        "Our custom printed kraft boxes wholesale collection offers the perfect blend of strength, simplicity, and sustainability. Designed for modern brands that care about presentation and the planet, these boxes are ideal for shipping, gifting, and retail display. Each kraft box is made from strong, recyclable paperboard that combines a rustic, organic look with dependable protection.",
        "At BoxyPack, we understand that packaging speaks for your brand long before your product does. That’s why we focus on creating boxes that not only perform well but also reflect your values. Whether you need kraft shipping boxes with logo for e-commerce or eco-friendly kraft packaging for retail shelves, we deliver designs that look professional and feel authentic.",
        "Our boxes are lightweight, customizable, and cost-efficient, making them a smart choice for businesses that want sustainable packaging without compromise.",
      ],
    },
    faq: buildFaq(
      "Kraft Boxes",
      [
        {
          question: "Are kraft boxes safe for food and bakery items?",
          answer:
            "Yes, our kraft boxes are made from food-grade, eco-safe materials suitable for direct contact.",
        },
        {
          question: "Can I order kraft boxes in bulk?",
          answer:
            "Absolutely. BoxyPack offers kraft boxes bulk at discounted rates for large-quantity orders.",
        },
        {
          question: "Can I customize my kraft boxes with a logo?",
          answer:
            "Yes, you can add your branding with printing, embossing, or foil stamping options.",
        },
        {
          question: "Are kraft boxes eco-friendly?",
          answer:
            "Yes, all our kraft boxes are fully recyclable, biodegradable, and made from renewable materials.",
        },
        {
          question: "How much do kraft boxes cost?",
          answer:
            "Our kraft boxes bulk cost varies by size, finish, and quantity. BoxyPack ensures premium quality at competitive pricing.",
        },
      ],
      { heading: "Questions about Kraft Boxes", eyebrow: "Kraft Box FAQs" }
    ),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create custom kraft boxes that blend sustainability, strength, and branding excellence. Our experts design eco-friendly packaging that protects your products and elevates your business image.",
    },
  },

  // Product: Cardboard Boxes
  "cardboard-boxes": {
    name: "Cardboard Boxes",
    description:
      "Strong, practical, and adaptable. Buy cardboard boxes online for reliable, affordable, and eco-friendly packaging designed for shipping, retail, and product storage.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable corrugated or solid paperboard construction",
      "Lightweight yet strong for secure packaging",
      "Perfect for retail, shipping, and e-commerce use",
      "Fully printable surface for branding and design",
      "Eco-friendly and recyclable material",
      "Available in matte, gloss, or soft-touch finishes",
      "Affordable cardboard boxes price with bulk order options",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Solid Board / Corrugated / Kraft Paperboard",
        },
        { label: "Structure", value: "Two-Piece Lid and Base" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Premium Custom Cardboard Boxes for Every Industry",
      paragraphs: [
        "Our cardboard boxes are built to provide durable, lightweight, and cost-effective packaging for every product type. From retail display packaging to bulk shipping cartons, these boxes balance strength, flexibility, and environmental responsibility.",
        "At BoxyPack, we specialize in custom cardboard boxes that combine protection and presentation. Whether you need plain brown cartons for e-commerce or printed cardboard boxes for branded packaging, every box is made with precision to ensure quality and consistency.",
        "As a wholesale cardboard boxes manufacturer, we deliver large orders quickly and affordably. Our boxes are available in multiple styles, including mailer boxes, tuck-end cartons, shipping boxes, and display packaging. Each design provides a smooth surface for custom printing, allowing your brand to stand out in both retail and logistics environments.",
      ],
    },
    faq: buildFaq(
      "Cardboard Boxes",
      [
        {
          question: "What are cardboard boxes used for?",
          answer:
            "They're ideal for product packaging, e-commerce shipping, storage, and retail display.",
        },
        {
          question: "Can I print my logo on these boxes?",
          answer:
            "Yes, BoxyPack offers full-color and custom logo printing options.",
        },
        {
          question: "Are these boxes recyclable?",
          answer:
            "Absolutely. All our cardboard boxes are eco-friendly and fully recyclable.",
        },
        {
          question: "Do you provide wholesale pricing?",
          answer:
            "Yes, we offer wholesale cardboard boxes at discounted rates for bulk orders.",
        },
        {
          question: "What affects the cardboard boxes?",
          answer:
            "Price depends on size, thickness, printing, and order quantity.",
        },
      ],
      {
        heading: "Questions about Cardboard Boxes",
        eyebrow: "Cardboard Box FAQs",
      }
    ),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to create custom cardboard boxes that combine strength, sustainability, and style. Our experts craft packaging that’s durable, affordable, and perfectly suited to your brand’s needs.",
    },
  },

  // Product: Corrugated Boxes
  "corrugated-boxes": {
    name: "Corrugated Boxes",
    description:
      "Durable, versatile, and built to protect. Buy corrugated boxes wholesale for safe shipping, reliable storage, and branded packaging that stands the test of time.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Multi-layer corrugated structure for maximum protection",
      "Designed for shipping, storage, and retail display",
      "Fully printable surface for branding and labels",
      "Custom sizes, shapes, and die-cut options",
      "Moisture-resistant coatings for added durability",
      "100% recyclable and eco-friendly materials",
      "Perfect for e-commerce, logistics, and retail industries",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Fold-Over Interlocking Mailer Design",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Premium Custom Corrugated Packaging",
      paragraphs: [
        "Our corrugated boxes combine strength, flexibility, and design precision. Made for packaging that travels far and protects every product, these boxes are ideal for e-commerce, industrial shipping, and retail packaging. With their multi-layered structure, they cushion items from impact while maintaining a professional appearance.",
        "At BoxyPack, we create custom corrugated packaging that reflects your brand's reliability and care. Whether you need large shipping cartons, retail mailers, or printed corrugated boxes for branding, we tailor every order to your exact requirements. Our goal is simple deliver packaging that performs as well as it looks.",
        "As a printed corrugated boxes supplier, we provide high-quality finishes, structural strength, and eco-friendly materials at an affordable corrugated boxes price that fits every scale of business.",
      ],
    },
    faq: buildFaq(
      "Corrugated Boxes",
      [
        {
          question: "What are corrugated boxes used for?",
          answer:
            "They're used for shipping, storing, and protecting items in e-commerce, retail, and logistics.",
        },
        {
          question: "Can I print my logo and design on these boxes?",
          answer:
            "Yes, BoxyPack offers full-color printing for custom corrugated packaging.",
        },
        {
          question: "Are corrugated boxes recyclable?",
          answer:
            "Absolutely. They're made from 100% recyclable kraft paper materials.",
        },
        {
          question: "Do you provide bulk orders?",
          answer:
            "Yes, we offer corrugated boxes wholesale with cost-effective pricing.",
        },
        {
          question: "What affects the price of corrugated boxes?",
          answer:
            "The corrugated boxes price depends on size, wall thickness, printing type, and order quantity.",
        },
      ],
      {
        heading: "Questions about Corrugated Boxes",
        eyebrow: "Corrugated Box FAQs",
      }
    ),
    cta: {
      title: "Strong Designs, Reliable Packaging",
      description:
        "Get in touch with BoxyPack today for custom corrugated boxes that blend durability, sustainability, and style. Our packaging experts are ready to guide you from design to delivery. Reach out to discuss your next order and elevate your shipping experience.",
    },
  },

  // Product: Mylar Boxes
  "mylar-boxes": {
    name: "Mylar Boxes",
    description:
      "Premium mylar packaging solutions with excellent barrier properties and durability for various products.",
    heroImage: "Stand-Up-Pouch_x47atr",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "High-barrier laminates extend shelf life for food and botanicals",
      "Multiple closure systems—tear notch, zipper, and heat seal—for flexibility",
      "Custom windows, holographics, and metallic inks attract attention",
      "Lightweight construction reduces freight while maintaining durability",
      "Certified food-grade materials support regulated industries",
      "Stand-up and flat pouch formats optimize merchandising space",
      "Low minimums with rapid lead times for product launches",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "Food-grade PET/VMPET/PE laminations with aluminum barrier layers",
        },
        {
          label: "Structure",
          value:
            "Flat bottom, three-side seal, child-resistant zipper, or hang hole options",
        },
        {
          label: "Thickness",
          value:
            "3 mil / 4 mil / 5 mil laminate stacks tuned for moisture and aroma",
        },
        {
          label: "Finish",
          value:
            "Gloss, matte, holographic films, or tactile spot varnish panels",
        },
        {
          label: "Printing",
          value:
            "Rotogravure or digital up to 9 colors with matte/gloss dual panels",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            'Standard 4" x 6" to 12" x 15" gusseted formats with custom die-cuts',
        },
        {
          label: "Quantity",
          value:
            "Flexible runs from 1,000 digitally printed pouches to 50,000+",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Mylar Boxes Engineered for Shelf Life",
      paragraphs: [
        "Mylar packaging is the standard for brands that demand freshness, aroma retention, and striking shelf impact. We combine high-barrier films with precision sealing to protect sensitive products.",
        "Customize zipper, gusset, and window styles to balance usability with merchandising appeal. Metallics, holographics, and transparent reveals bring personality to your pouches.",
        "With rapid prototyping, low minimums, and food-safe certifications, we support product launches, seasonal flavors, and large-scale runs with equal focus.",
      ],
    },
    faq: buildFaq(
      "Mylar Boxes",
      [
        {
          question: "What barrier options can my mylar packaging include?",
          answer:
            "We layer PET, VMPET, and PE films to achieve moisture, oxygen, and aroma barriers that match your shelf-life targets. We can also add aluminum layers for products needing maximum protection.",
        },
        {
          question: "Can mylar pouches be child-resistant?",
          answer:
            "Yes. We offer certified child-resistant zipper systems and tear-notches that meet regulatory requirements for cannabis, nutraceutical, and chemical products.",
        },
        {
          question: "How do metallic and holographic effects impact lead time?",
          answer:
            "Specialty films are stocked in-house, so adding holographic or metallic finishes typically adds only a few extra days for lamination and proofing.",
        },
        {
          question:
            "Are low-minimum digital runs available for mylar packaging?",
          answer:
            "We can produce as few as 1,000 digitally printed pouches, making it easy to test flavors or limited editions before scaling to long-run gravure production.",
        },
      ],
      {
        heading: "Questions about Mylar Boxes",
        eyebrow: "Mylar Packaging FAQs",
      }
    ),
    cta: {
      title: "Ready for Mylar Packaging?",
      description:
        "Get a custom quote for your mylar boxes today. Discover the perfect barrier packaging solution for your products.",
    },
  },

  // Product: Shopping Bags
  "shopping-bags": {
    name: "Shopping Bags",
    description:
      "Our stylish shopping bags combine strength with modern appeal. They extend your brand presence and keep customers engaged well beyond purchase.",
    heroImage: "Kraft-Shopping-Bag_xsxhwa",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Recycled and FSC-certified stocks reinforce sustainable messaging",
      "Rivet, rope, or ribbon handles tailored to product weight and style",
      "Full-color CMYK, metallic, and spot UV finishes boost visibility",
      "Fold-flat construction saves storage, quick pop-up saves time",
      "Interior printing and branded tissue amplify unboxing moments",
      "Reusable tote-style designs extend your marketing reach beyond checkout",
      "Custom gussets and bases support everything from cosmetics to apparel",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "157gsm art paper, natural kraft, or 120u non-woven fabrics",
        },
        {
          label: "Structure",
          value:
            "Pinch-bottom, square-bottom, or euro tote with custom handles",
        },
        {
          label: "Thickness",
          value: "120gsm / 157gsm / 210gsm papers with reinforced base cards",
        },
        {
          label: "Finish",
          value:
            "Matte or gloss lamination, foil stamping, spot UV, or soft-touch",
        },
        {
          label: "Printing",
          value:
            "Full-bleed offset, silk-screen metallics, Pantone-matched branding",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'From 6" x 3" x 8" boutique bags to 16" x 6" x 13" totes',
        },
        {
          label: "Quantity",
          value:
            "Custom bag orders starting at 250 units with restock programs",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Shopping Bags Designed for Everyday Branding",
      paragraphs: [
        "Shopping bags extend your brand beyond the point of sale. We craft each bag to balance carrying comfort, durability, and a visual presence that attracts attention on the street.",
        "Choose from luxury rope handles, ribbon details, or reinforced die-cut grips. Interior print, custom gussets, and specialty laminations ensure customers keep using your bag.",
        "From boutique collections to national retail programs, we align bag construction with your sustainability goals and merchandising calendar.",
      ],
    },
    faq: buildFaq("Shopping Bags", [
      {
        question: "What handle styles can I include on my shopping bags?",
        answer:
          "We offer twisted paper, ribbon, rope, and die-cut handles. Each option is load-tested so the handle matches your bag size and product weight.",
      },
      {
        question: "Can shopping bags be produced with sustainable materials?",
        answer:
          "Yes. We source FSC-certified papers, recycled fibers, and water-based inks. Reinforced bases keep the bag reusable while supporting sustainability goals.",
      },
      {
        question:
          "Do you provide custom tissue or accessories to match the bags?",
        answer:
          "We can coordinate tissue, stickers, and belly bands that ship alongside your bags. Our kitting services bundle everything so stores receive complete merchandising sets.",
      },
      {
        question:
          "How quickly can you replenish shopping bags for peak seasons?",
        answer:
          "Standard lead times are 3–4 weeks, but we stage production and inventory to support seasonal surges. Rush programs are available for last-minute events.",
      },
    ]),
    cta: {
      title: "Ready for Eco-Friendly Shopping?",
      description:
        "Get a custom quote for your shopping bags today. Promote your brand while protecting the environment.",
    },
  },

  // Product: Packaging Accessories
  "packaging-accessories": {
    name: "Packaging Accessories",
    description:
      "Essential accessories to complete your packaging needs. From protective materials to decorative elements, we have everything you need.",
    heroImage: "Product-Bottle-Label-1_sq8eqg",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Protective fillers: foam, molded pulp, and tissue tailored to your product",
      "Decor wraps, sleeves, and belly bands that elevate shelf presence",
      "Custom labels, stickers, and hang tags reinforce brand storytelling",
      "Thank-you cards, inserts, and QR-enabled collateral drive engagement",
      "Tamper-evident seals and security tapes safeguard high-value goods",
      "Ribbon, twine, and wax seals create premium finishing touches",
      "Kitting and fulfillment-ready accessory packs streamline operations",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "FSC-certified papers, PET, PVC, and specialty substrates",
        },
        {
          label: "Structure",
          value: "Labels, belly bands, wraps, tape, inserts, tags, and seals",
        },
        {
          label: "Thickness",
          value: "Paper 70gsm-240gsm, films 1.5 mil-4 mil, board up to 20pt",
        },
        {
          label: "Finish",
          value:
            "Varnish, foil, textured laminates, emboss, and specialty coatings",
        },
        {
          label: "Printing",
          value:
            "Digital, flexo, or offset with metallics, white, and variable data",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Sized from 1" accent labels to 24" protective wraps',
        },
        {
          label: "Quantity",
          value: "Accessory packs from 500 pieces with kitting fulfillment",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Packaging Accessories That Complete the Experience",
      paragraphs: [
        "Accessories transform functional packaging into a curated experience. We supply everything from protective inserts to branded collateral that ties your presentation together.",
        "Add tactile finishes with ribbons, wax seals, belly bands, and custom wraps, or build informative touchpoints with QR-enabled cards and booklets.",
        "Our kitting team bundles accessories to match your fulfillment flow, ensuring every package leaves your facility consistent, polished, and on-brand.",
      ],
    },
    faq: buildFaq(
      "Packaging Accessories",
      [
        {
          question: "Can accessories ship pre-kitted with my packaging?",
          answer:
            "Yes. We assemble accessory packs—like tissue, stickers, or inserts—so fulfillment teams receive ready-to-use bundles that match each SKU or campaign.",
        },
        {
          question:
            "Do you source specialty materials like ribbon or wax seals?",
          answer:
            "We maintain a vetted supplier network for ribbons, wax seals, and specialty trims. Our sourcing team matches colors and textures to your exact brand guidelines.",
        },
        {
          question:
            "How are printed collateral pieces coordinated with packaging?",
          answer:
            "Our prepress team aligns booklet, card, and label artwork with your packaging color targets, ensuring everything looks cohesive when unboxed.",
        },
        {
          question:
            "Can accessory programs scale for subscription or influencer kits?",
          answer:
            "Absolutely. We manage inventory, apply personalization, and schedule drop shipments to keep subscription and influencer programs on time and consistent.",
        },
      ],
      {
        heading: "Questions about Packaging Accessories",
        eyebrow: "Accessory FAQs",
      }
    ),
    cta: {
      title: "Ready to Complete Your Packaging?",
      description:
        "Get a custom quote for your packaging accessories today. Complete your packaging solution with our premium accessories.",
    },
  },

  // ========== MATERIAL CATEGORY SUBcategories ==========

  // Rigid Boxes Subcategories
  // Subcategory: Magnetic Closure Rigid Box
  "magnetic-closure-rigid-box": {
    name: "Magnetic Closure Rigid Box",
    description:
      "Luxury meets precision in every fold. Buy magnetic rigid boxes online for premium retail, gifting, and corporate packaging, strong, elegant, and made to impress.",
    heroImage: "Mailer-Box-3_oct2ws",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",

    keyFeatures: [
      "Secure magnetic lid closure for effortless opening",
      "Premium rigid board construction for long-lasting strength",
      "Smooth matte or glossy surface for an elegant look",
      "Fully printable surface for logos and graphics",
      "Reusable, durable design for repeat presentations",
      "Soft-touch or velvet lamination for added luxury",
      "Foil stamping, embossing, or spot UV for fine detailing",
    ],
    customization: {
      details: [
        { label: "Material Type", value: " Rigid Board / Cardboard / Kraft" },
        {
          label: "Structure",
          value: "Magnetic / Two-Piece / Drawer / Foldable",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9.5 × 7.75 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Luxury Magnetic Closure Box Packaging",
      paragraphs: [
        "Our custom magnetic rigid boxes packaging blends durability with refined presentation. These boxes open effortlessly with concealed magnetic flaps, offering both strength and luxury. They’re perfect for high-value products where protection and first impressions matter equally.",
        "At BoxyPack, we believe packaging defines the experience. As a trusted magnetic closure gift boxes supplier, we create designs that balance premium aesthetics with structural reliability. Each magnetic box is built from solid, rigid board, wrapped in fine paper, and finished with perfect edges.",
        "Whether you sell jewelry, cosmetics, electronics, or luxury gifts, our boxes enhance product value while maintaining brand consistency. We also offer magnetic closure rigid boxes wholesale with complete customization. Choose your size, color, texture, and finish. Every box communicates quality, from its smooth exterior to the satisfying magnetic click on closure.",
      ],
    },
    faq: buildFaq("Magnetic Closure Rigid Box", [
      {
        question: "What makes magnetic closure rigid boxes special?",
        answer:
          "They combine luxury appeal with secure magnets, offering protection and elegant unboxing in one design.",
      },
      {
        question: "Can I order magnetic boxes in bulk?",
        answer:
          "Yes, we provide magnetic closure rigid boxes wholesale with custom printing and bulk pricing.",
      },
      {
        question: "What products work best with these boxes?",
        answer:
          "Ideal for jewelry, perfumes, gadgets, gift sets, and premium retail packaging.",
      },
      {
        question: "How long does production take?",
        answer:
          "Most bulk custom magnetic boxes are ready within two to three weeks.",
      },
      {
        question: "Do you help with box design?",
        answer:
          "Absolutely. Our team assists with layout, artwork, and color matching for a perfect result.",
      },
    ]),
    
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Get in touch with BoxyPack to create premium magnetic closure rigid boxes that define luxury and protection. Our experts craft packaging that feels strong, looks stunning, and performs beautifully.",
    },
  },

  // Subcategory: Two Piece Rigid Boxes
  "two-piece-rigid-boxes": {
    name: "Two Piece Rigid Boxes",
    description:
      "Classic strength meets refined design. Buy two-piece rigid boxes online for gifting, retail, or brand packaging. Durable, elegant, and built to leave a lasting impression.",
    heroImage: "Rigid-Two-Piece-Box_piyrzz",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Two-piece lift-off lid for premium presentation",
      "Strong, rigid board construction for durability",
      "Matte or gloss finish for a clean, elegant look",
      "Reusable design that maintains shape and strength",
      "Fully printable surface for logo and branding",
      "Soft-touch or velvet lamination for luxury appeal",
      "Foil stamping or embossing for detailed finishing",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Rigid Board / Cardboard / Kraft" },
        {
          label: "Structure",
          value: "Two-Piece / Drawer / Magnetic / Foldable",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Glossy / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9.5 × 7.75 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Two Piece Rigid Boxes", [
      {
        question: "What makes two-piece rigid boxes unique?",
        answer:
          "They offer a classic lid-and-base design that combines strength with sophisticated presentation.",
      },
      {
        question: "Can I order these boxes in bulk?",
        answer:
          "Yes, we provide two-piece rigid boxes wholesale with full customization and competitive pricing.",
      },
      {
        question: "What products are ideal for these boxes?",
        answer:
          "Perfect for jewelry, cosmetics, tech accessories, apparel, and premium gift sets",
      },
      {
        question: "How long does production take?",
        answer:
          "Standard turnaround is 2–3 weeks, depending on size and customization.",
      },
      {
        question: " Do you offer custom printing and finishing?",
        answer:
          "Absolutely. Choose from embossing, foiling, or spot UV to personalize your packaging.",
      },
    ]),
    overview: {
      heading: "Product Overview",
      title: "Premium Two-Piece Rigid Box Packaging",
      paragraphs: [
        "Our custom magnetic rigid boxes packaging blends durability with refined presentation. These boxes open effortlessly with concealed magnetic flaps, offering both strength and luxury. They’re perfect for high-value products where protection and first impressions matter equally.",
        "At BoxyPack, we believe packaging defines the experience. As a trusted magnetic closure gift boxes supplier, we create designs that balance premium aesthetics with structural reliability. Each magnetic box is built from solid, rigid board, wrapped in fine paper, and finished with perfect edges.",
        "Whether you sell jewelry, cosmetics, electronics, or luxury gifts, our boxes enhance product value while maintaining brand consistency. We also offer magnetic closure rigid boxes wholesale with complete customization. Choose your size, color, texture, and finish. Every box communicates quality, from its smooth exterior to the satisfying magnetic click on closure",
      ],
    },
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to design premium two-piece rigid boxes that highlight your brand’s style and strength. We craft durable, elegant packaging built to impress and perform.",
    },
  },

  // Subcategory: Sliding / Sleeve Rigid Boxes (Match Style Boxes)
  "sliding-sleeve-rigid-boxes-match-style-boxes": {
    name: "Sliding / Sleeve Rigid Boxes (Match Style Boxes)",
    description:
      "Sleek design meets smart functionality. Buy rigid sleeve boxes online for stylish product packaging, retail display, and premium gifting with lasting quality and modern appeal.",
    heroImage: "Mailer-Box-3_oct2ws",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Drawer-style box design for easy access",
      "Strong, rigid board construction for secure packaging",
      "Smooth matte or glossy finish for premium appeal",
      "Reusable structure for lasting performance",
      "Fully printable surface for custom artwork",
      "Soft touch or velvet lamination for added texture",
      "Foil stamping, embossing, or UV coating for details",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Rigid Board / Cardboard / Kraft" },
        {
          label: "Structure",
          value: "Sliding / Two-Piece / Magnetic / Foldable",
        },
        { label: "Thickness", value: " 14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Glossy / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9.5 × 7.75 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Sliding Sleeve Rigid Boxes", [
      {
        question: " What makes sliding rigid boxes special?",
        answer:
          "They feature a drawer-style design that provides easy access while keeping products secure.",
      },
      {
        question: "Can I order sliding boxes in bulk?",
        answer:
          "Yes, BoxyPack offers rigid sleeve packaging wholesale with flexible quantities and pricing.",
      },
      {
        question: "What products suit sliding boxes best?",
        answer:
          "Ideal for jewelry, perfumes, gadgets, chocolates, and premium corporate gifts.",
      },
      {
        question: "How long does production usually take?",
        answer:
          "Most bulk orders are completed within two to three weeks after approval.",
      },
      {
        question: "Do you offer logo printing options?",
        answer:
          "Yes, we provide foil stamping, embossing, or UV printing for elegant brand customization.",
      },
    ]),
    overview: {
      heading: "Product Overview",
      title: "Luxury Sliding Rigid Box Packaging",
      paragraphs: [
        "Our custom sliding rigid gift boxes offer an elegant way to reveal your products while keeping them protected. Designed with a smooth sliding drawer and durable outer sleeve, they create a premium unboxing moment that adds value to every product.",
        "At BoxyPack, every packaging piece is built with precision and care. As a reliable rigid sleeve packaging wholesale supplier, we combine sturdy structure with a refined finish to meet the needs of luxury brands and small businesses alike.",
        "Whether you sell perfumes, cosmetics, watches, electronics, or handmade gifts, these boxes elevate presentation through simple yet striking design. Available in multiple styles, finishes, and colors, luxury sliding rigid boxes deliver elegance with function, creating an unforgettable customer experience.",
      ],
    },
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Reach out to BoxyPack to create premium sliding rigid boxes that combine functionality with luxury. Our experts design packaging that feels smooth, looks stylish, and performs perfectly for every brand.",
    },
  },

  // Subcategory: Brief Case Style
  "brief-case-style": {
    name: "Briefcase Style Rigid Boxes",
    description:
      "Function meets luxury in every design. Buy rigid briefcase boxes online for premium product presentation, gifting, or retail packaging with style and dependable strength",
    heroImage: "Mailer-Box-3_oct2ws",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built-in handle for convenient carrying",
      "Rigid board construction for reliable protection",
      "Smooth matte or gloss finish for a refined look",
      "Custom printing available inside and out",
      "Secure closure with optional magnetic lock",
      "Soft-touch or textured lamination for style",
      "Foil stamping or embossing for premium branding",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Rigid Board / Cardboard / Kraft" },
        {
          label: "Structure",
          value: "Briefcase / Magnetic / Two-Piece / Drawer",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Glossy / Soft Touch" },
        { label: "Printing", value: " Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9.5 × 7.75 × 4" },
        { label: "Quantity", value: " 250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Brief Case Style Rigid Boxes", [
      {
        question: "What makes briefcase-style rigid boxes unique?",
        answer:
          "They combine durability with portable design, making them perfect for premium product presentation.",
      },
      {
        question: "Can I order these boxes in bulk?",
        answer:
          "Yes, BoxyPack provides briefcase-style rigid boxes wholesale with full customization and affordable pricing.",
      },
      {
        question: "What products can be packed in these boxes?",
        answer:
          "Ideal for electronics, accessories, beauty kits, and corporate gift packages.",
      },
      {
        question: "Are these boxes reusable?",
        answer:
          "Absolutely. Their strong handles and structure make them perfect for reuse.",
      },
      {
        question: " Can I add branding or logo printing?",
        answer:
          "Yes, we offer foil stamping, embossing, or full-color printing for your logo and artwork.",
      },
    ]),
    overview: {
      heading: "Product Overview",
      title: "Luxury Briefcase Style Rigid Box Packaging",
      paragraphs: [
        "Our custom briefcase packaging box is designed to deliver sophistication with practicality. Inspired by the look of a real briefcase, these boxes include handles, secure closures, and a sturdy build that makes them ideal for luxury gifts, corporate presentations, and premium product kits.",
        "At BoxyPack, we believe great packaging should protect, perform, and impress. As a printed briefcase packaging supplier, we build boxes that merge convenience with class. Each piece is crafted with precision edges, reinforced structure, and premium paper wrapping that enhances your brand’s image.",
        "Whether you need custom packaging for electronics, accessories, or business gifts, our briefcase-style rigid boxes wholesale selection ensures an elegant unboxing experience. With flexible designs and affordable luxury briefcase-style rigid box prices, we deliver packaging that’s both memorable and durable.",
      ],
    },
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack today to create briefcase-style rigid boxes that blend elegance, portability, and strength. Our team builds packaging that enhances your brand and leaves a lasting impression.",
    },
  },

  // Subcategory: Book Style Rigid Boxes
  "book-style-rigid-boxes": {
    name: "Book Style Rigid Boxes",
    description:
      "Classic elegance meets functional design. Buy rigid book boxes online for premium product packaging, gifting, and retail display with durability, sophistication, and unmatched style.",
    heroImage: "Mailer-Box-3_oct2ws",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Hardcover book-style structure for elegant presentation",
      "Magnetic closure for smooth opening and security",
      "Premium rigid board for maximum strength and stability",
      "Reusable, eco-friendly, and long-lasting design",
      "Smooth matte or glossy finish for aesthetic appeal",
      "Custom logo printing on all sides for branding",
      "Foil stamping, embossing, or UV coating for detail",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Rigid Board / Cardboard / Kraft" },
        {
          label: "Structure",
          value: "Book Style / Magnetic / Two-Piece / Drawer",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Glossy / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9.5 × 7.75 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Book Style Rigid Boxes", [
      {
        question: "What makes book-style rigid boxes special?",
        answer:
          " They open like a hardcover book, creating a unique and premium unboxing experience.",
      },
      {
        question: "Can I order these boxes in bulk?",
        answer:
          "Yes, BoxyPack offers wholesale book-style rigid boxes with complete customization options.",
      },
      {
        question: "What products fit well in book-style boxes?",
        answer:
          "Perfect for perfumes, jewelry, electronics, collectibles, and corporate gifts.",
      },
      {
        question: "Are these boxes durable?",
        answer:
          "Absolutely. Their rigid board structure provides superior protection and long-term reusability.",
      },
      {
        question: "Can I print my logo or artwork?",
        answer:
          "Yes, you can add foil stamping, embossing, or full-color printing for brand visibility.",
      },
    ]),
    overview: {
      heading: "Product Overview",
      title: "Luxury Book Style Rigid Box Packaging",
      paragraphs: [
        "Our custom rigid book boxes packaging offers a timeless and luxurious appeal. Designed to open like a hardcover book, these boxes combine structural strength with refined presentation. The magnetic closure ensures a seamless open-and-close motion, while the rigid build keeps your products safe and perfectly positioned.",
        "At BoxyPack, every detail matters. As a leading supplier of wholesale book-style rigid boxes, we create packaging that blends creativity with precision. Each box is crafted with durable paperboard and wrapped in smooth paper for a premium finish that enhances your brand’s identity.",
        "Whether used for jewelry, perfumes, gadgets, or gift sets, our luxury book-style gift boxes turn ordinary packaging into a premium unboxing experience. They’re also perfect for collectors’ editions, promotional kits, or high-end retail products. With BoxyPack, every book-style box tells a story of craftsmanship and class.",
      ],
    },
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create elegant book-style rigid boxes that combine functionality, beauty, and luxury. Our packaging experts craft designs that bring your brand’s story to life with every unboxing.",
    },
  },
  // ========== KRAFT BOXES SUBCATEGORIES ==========
  // Subcategory: Kraft Mailer Box
  "kraft-mailer-box": {
    name: "Kraft Mailer Box",
    description:
      "Strong, eco-friendly, and stylish. Buy kraft mailer boxes online for durable shipping and premium product packaging that blends sustainability with smart design.",
    heroImage: "Mailer-Box_ximzdy",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Study corrugated kraft paperboard construction",
      "Eco-friendly and fully recyclable materials",
      "Easy-fold design for fast assembly",
      "Lightweight yet durable for safe shipping",
      "Natural brown finish for organic appeal",
      "Custom printing inside and outside surfaces",
      "Matte or gloss coating for professional presentation",
    ],
    customization: {
      details: [
        { label: "Material Type", value: " Kraft Paperboard / Cardboard" },
        { label: "Structure", value: "Mailer / Foldable / Self-Locking" },
        { label: "Thickness", value: "12PT / 14PT / 18PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 10 × 8 × 3" },
        { label: "Quantity", value: " 250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Mailer Box", [
      {
        question: "Are kraft mailer boxes good for shipping?",
        answer:
          "Yes, they’re lightweight, strong, and perfect for safe, eco-friendly shipping.",
      },
      {
        question: "Can I print my brand logo on these boxes?",
        answer:
          "Absolutely. We offer full-color printing and custom branding options.",
      },
      {
        question: "What products can fit in these mailer boxes?",
        answer:
          "They’re ideal for clothing, cosmetics, accessories, stationery, and subscription kits.",
      },
      {
        question: "Are these boxes recyclable?",
        answer:
          "Yes, all our kraft mailer boxes are made from recyclable paper materials.",
      },
      {
        question: "Can I order kraft mailer boxes wholesale?",
        answer:
          "Yes, BoxyPack offers bulk orders with discounts for larger quantities.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create kraft mailer boxes that combine eco-conscious strength with branding style. Our team builds packaging that protects your products and represents your brand with pride.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Mailer Packaging",
      paragraphs: [
        "Our custom kraft mailer packaging combines simplicity, strength, and sustainability. Designed for modern brands that value presentation and eco-conscious packaging, these mailer boxes are perfect for shipping products safely while leaving a lasting impression.",
        "At BoxyPack, we understand that packaging is more than protection it’s your brand’s first handshake with customers. As an eco mailer box supplier USA, we craft boxes that stand out through clean structure, high durability, and natural charm.",
        "Made from recyclable kraft paperboard, our mailer boxes are lightweight yet sturdy enough for e-commerce, retail, and subscription services. Whether you’re shipping skincare, apparel, or handmade goods, these boxes ensure your products reach safely and stylishly. With recyclable kraft mailer packaging wholesale, we offer both affordability and premium customization.",
      ],
    },
  },

  // Subcategory: Kraft Box with Lid
  "kraft-box-with-lid": {
    name: "Kraft Box with Lid",
    description:
      "Simple, strong, and elegant. Buy kraft boxes with lids online for safe, stylish packaging that’s perfect for gifting, retail, and eco-friendly product presentation.",
    heroImage: "Kraft-Boxes-With-Lid_bvvlo5",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Made from durable, eco-friendly kraft paperboard",
      "Lid and base design for secure product storage",
      "Available in natural brown or printed finishes",
      "Ideal for retail, gifts, or e-commerce packaging",
      "Custom printing available on lid and base",
      "Matte, gloss, or uncoated surface finish",
      "Lightweight, recyclable, and reusable construction",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Kraft Paperboard / Cardboard" },
        { label: "Structure", value: " Lid and Base / Two-Piece Box" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: " e.g., 9 × 6 × 3" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Box with Lid", [
      {
        question: "What are kraft boxes with lids used for?",
        answer:
          "They’re used for gifts, retail items, storage, and eco-friendly product packaging.",
      },
      {
        question: " Can I get printed lids with my logo?",
        answer:
          "Yes, BoxyPack offers full-color and logo printing for custom branding.",
      },
      {
        question: "Are these boxes available in bulk quantities?",
        answer:
          "Absolutely, we provide kraft storage boxes with lids bulk with discounts for larger orders.",
      },
      {
        question: "Are kraft boxes with lids recyclable?",
        answer:
          "Yes, all our boxes are made from recyclable kraft paper materials.",
      },
      {
        question: " Can I customize the size and design?",
        answer:
          "Of course, you can choose custom dimensions, colors, and finishes to match your product.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create kraft boxes with lids that bring simplicity, style, and sustainability together. Our experts design eco-friendly packaging that protects your products and enhances your brand.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Box with Lid Packaging",
      paragraphs: [
        "Our kraft boxes with lids are a blend of durability and natural beauty. Built for both protection and presentation, these boxes are ideal for businesses looking to add an eco-conscious touch to their packaging. The detachable lid design provides easy access while keeping your items secure and neatly enclosed.",
        "At BoxyPack, we believe packaging should tell a story of quality and sustainability. As a small kraft gift box with lid supplier, we craft boxes that combine strength, simplicity, and versatility. Whether you need them for retail display, gift wrapping, or product storage, our kraft storage boxes with lids bulk options ensure affordability and premium finish.",
        "Each printed kraft box with removable lid is made from recyclable kraft paperboard and offers a smooth or textured finish for professional branding. With BoxyPack, you get sustainable packaging that leaves a lasting impression while maintaining practical functionality.",
      ],
    },
  },

  // Subcategory: Kraft Pillow Box
  "kraft-pillow-box": {
    name: "Kraft Pillow Box",
    description:
      "Charming, compact, and sustainable. Buy kraft pillow boxes online for elegant gift packaging that’s eco-friendly, durable, and beautifully simple.",
    heroImage: "Kraft-Pillow-Soap-Box_qgyxg3",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Unique curved pillow-style design for easy packaging",
      "Made from recyclable, eco-friendly kraft paperboard",
      "Smooth folding edges for a professional finish",
      "Perfect for gifts, favors, and small products",
      "Custom logo printing and branding available",
      "Matte, gloss, or uncoated surface options",
      "Ribbon or sticker add-ons for personalization",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Pillow Fold / Tuck-In Ends" },
        { label: "Thickness", value: "12PT / 14PT / 18PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 7 × 4 × 2" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Pillow Box", [
      {
        question: "What are kraft pillow boxes used for?",
        answer:
          "They’re perfect for small gifts, jewelry, accessories, or party favors.",
      },
      {
        question: "Can I order pillow boxes in bulk?",
        answer:
          "Yes, BoxyPack offers small kraft pillow favor boxes wholesale with flexible order options.",
      },
      {
        question: "Can I print my logo or artwork on the box?",
        answer:
          "Absolutely. You can add branding with custom printing or foil stamping.",
      },
      {
        question: "Are these boxes recyclable and eco-friendly?",
        answer:
          "Yes, all our kraft pillow boxes are made from recyclable materials.",
      },
      {
        question: "Can I add ribbons or decorations?",
        answer:
          "Yes, we offer ribbons, tags, and finishing accessories to enhance your packaging.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create kraft pillow boxes that combine sustainability and style. Our experts craft eco-friendly packaging that’s practical, beautiful, and perfect for every occasion",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Pillow Box Packaging",
      paragraphs: [
        "Our kraft pillow packaging for gifts blends creativity with functionality. Designed in a sleek curved shape, these boxes are perfect for small, delicate items like jewelry, accessories, or handmade goods. The unique fold-and-tuck design makes them easy to assemble while maintaining a premium, minimalist look.",
        "At BoxyPack, we craft packaging that feels as thoughtful as the product inside. As a trusted supplier of small kraft pillow favor boxes wholesale, we produce durable and attractive boxes made from recyclable kraft paper. Each piece offers a balance of simplicity and sophistication, making them ideal for gifting and retail use.",
        "You can also enhance them with ribbons, stickers, or personalized printing. Whether you want custom kraft pillow boxes with ribbon for weddings or eco kraft pillow style boxes bulk for retail, our designs offer both beauty and practicality at a competitive kraft pillow box price.",
      ],
    },
  },

  // Subcategory: Kraft Gable Box
  "kraft-gable-box": {
    name: "Kraft Gable Box",
    description:
      "Stylish, sturdy, and sustainable. Buy kraft gable boxes online for gifting, retail, and takeaway packaging that blends durability with eco-friendly charm.",
    heroImage: "Kraft-Gable-Box_i0vbt9",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built-in handle for easy carrying and convenience",
      "Made from durable, recyclable kraft paperboard",
      "Foldable structure for compact storage and assembly",
      "Suitable for food, gifts, or retail items",
      "Custom printing on all sides for branding",
      "Matte, gloss, or uncoated surface options",
      "Eco-friendly, reusable, and biodegradable material",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Gable Box / Foldable Handle Design" },
        { label: "Thickness", value: "12PT / 14PT / 18PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 10 × 6 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Gable Box", [
      {
        question: "What are kraft gable boxes used for?",
        answer:
          "They're ideal for food, gift packaging, retail, and takeout products.",
      },
      {
        question: "Can I print my logo on the gable box?",
        answer:
          "Yes, BoxyPack offers full-color printing and logo customization options.",
      },
      {
        question: "Are kraft gable boxes safe for food packaging?",
        answer:
          "Absolutely. They're made from food-grade, recyclable kraft paper materials.",
      },
      {
        question: "Can I order these boxes in bulk?",
        answer:
          "Yes, we offer kraft gable favor boxes wholesale with competitive prices and fast delivery.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Yes, all kraft gable boxes are made from sustainable, biodegradable paperboard.",
      },
    ]),
    cta: {
      title: "Ready to Carry in Kraft Style?",
      description:
        "Contact BoxyPack to create kraft gable boxes that combine strength, simplicity, and sustainability. Our expert team crafts eco-friendly packaging that enhances your brand and delights your customers..",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Gable Box Packaging",
      paragraphs: [
        "Our brown kraft gable packaging boxes combine smart design with practical function. Known for their signature carry handle and foldable structure, these boxes are perfect for food items, gift packaging, and retail takeaway. Each box offers strength, convenience, and a natural, organic look that customers love.",
        "At BoxyPack, we craft packaging that balances style and performance. As an eco-friendly kraft gable packaging supplier, we use durable kraft paperboard that keeps products safe while promoting sustainability. Ideal for bakeries, cafes, and boutiques, our gable boxes are reusable, recyclable, and built to impress.",
        "Whether you're gifting treats, selling handmade items, or offering takeaway meals, our custom kraft gable box with logo delivers both quality and brand visibility. With kraft gable favor boxes wholesale, you get premium packaging at an affordable kraft gable box wholesale price.",
      ],
    },
  },

  // Subcategory: Kraft Bakery / Cake Box
  "kraft-bakery-cake-box": {
    name: "Kraft Bakery / Cake Box",
    description:
      "Fresh, durable, and eco-friendly. Buy kraft bakery boxes online for cakes, pastries, and cupcakes that stay safe, stylish, and perfectly presented.",
    heroImage: "Kraft-Bakery-Cake-Box_lbrpz8",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Made from food-grade, recyclable kraft paperboard",
      "Durable design to protect baked goods and desserts",
      "Optional window for product visibility and freshness",
      "Foldable and easy to assemble structure",
      "Custom logo printing for branding and personalization",
      "Matte, gloss, or uncoated finish options available",
      "Ideal for cakes, cupcakes, pastries, and desserts",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Food-Grade Kraft Paperboard" },
        { label: "Structure", value: "Tuck-End / Window / Foldable Design" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 10 × 10 × 5" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Bakery Box", [
      {
        question: "Are kraft bakery boxes food-safe?",
        answer:
          "Yes, they are made from food-grade kraft paper, safe for all baked goods.",
      },
      {
        question: "Can I get boxes with a transparent window?",
        answer:
          "Absolutely. BoxyPack offers eco kraft bakery boxes with window for product visibility.",
      },
      {
        question: "Can I print my bakery logo on the boxes?",
        answer:
          "Yes, you can add your logo and artwork with full-color printing or foil stamping.",
      },
      {
        question: "Are these boxes recyclable?",
        answer:
          "Yes, all kraft bakery boxes are 100% recyclable and eco-friendly.",
      },
      {
        question: "Do you offer wholesale pricing for bulk orders?",
        answer:
          "Yes, we provide brown kraft cupcake / bakery box wholesale at affordable prices with volume discounts.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to design kraft bakery boxes that protect, promote, and present your baked goods beautifully. Our experts craft packaging that enhances freshness and strengthens your brand’s presence.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Cake Box Packaging",
      paragraphs: [
        "Our kraft cake packaging boxes bulk combine strength and sustainability for professional bakery presentation. These boxes are made to hold cakes, pastries, and baked treats securely while maintaining a natural, elegant look. Ideal for bakeries, cafes, and dessert shops, each box offers a sturdy build and eco-friendly appeal.",
        "At BoxyPack, we specialize in packaging that keeps your products fresh and visually appealing. As a custom kraft cake box supplier, we craft each box with premium kraft paperboard that's both food-safe and biodegradable. With optional clear windows, your creations stay visible while protected during transport and display.",
        "Whether you need eco kraft bakery boxes with window for display or brown kraft cupcake / bakery box wholesale for retail packaging, we ensure precision, style, and durability at a competitive kraft cake box price.",
      ],
    },
  },

  // Subcategory: Kraft Sleeve Box
  "kraft-sleeve-box": {
    name: "Kraft Sleeve Box",
    description:
      "Minimal, modern, and versatile. Buy kraft sleeve boxes online for sustainable, customizable packaging that adds sophistication and strength to every product.",
    heroImage: "Kraft-Sleeve-Box_zebf6i",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Sliding sleeve design for easy product access",
      "Made from durable, recyclable kraft paperboard",
      "Smooth matte, glossy, or uncoated finish options",
      "Ideal for gifts, apparel, and retail products",
      "Custom logo printing and full-color branding available",
      "Lightweight and space-efficient for storage and shipping",
      "Eco-friendly, reusable, and biodegradable material",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Sliding Sleeve / Drawer / Foldable" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9 × 6 × 3" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Sleeve Box", [
      {
        question: "What are kraft sleeve boxes used for?",
        answer:
          "They’re ideal for retail, gifts, clothing, and bakery packaging.",
      },
      {
        question: "Can I order printed sleeves with my logo?",
        answer:
          "Yes, BoxyPack offers printed kraft sleeve boxes with logo in full color.",
      },
      {
        question: "Are kraft sleeve boxes eco-friendly?",
        answer:
          "Absolutely. They're made from recyclable and biodegradable kraft paper.",
      },
      {
        question: "Do you offer bulk discounts?",
        answer:
          "Yes, we provide kraft sleeve gift boxes wholesale at discounted prices for larger orders.",
      },
      {
        question: "Can I choose different finishes and textures?",
        answer:
          "Yes, we offer matte, gloss, or soft-touch finishes to match your brand's look.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to create kraft sleeve boxes that combine style, strength, and sustainability. Our experts craft eco-friendly packaging that protects your products and showcases your brand beautifully.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Sleeve Packaging",
      paragraphs: [
        "Our kraft sleeve boxes combine practicality with premium presentation. The sliding sleeve design allows easy access and a clean, elegant unboxing experience. Ideal for cosmetics, bakery products, clothing, and gift packaging, these boxes balance durability with minimal design.",
        "At BoxyPack, we specialize in crafting eco-conscious packaging that enhances both form and function. As a custom kraft sleeve packaging supplier, we design sleeves that fit snugly over your box base, keeping products secure while promoting your brand beautifully. Made from thick, recyclable kraft paperboard, they deliver both protection and sustainability.",
        "Perfect for retailers, gift makers, and eco-friendly brands, our kraft sleeve gift boxes wholesale offer a balance of style, strength, and value. With printed kraft sleeve boxes with logo, your brand gets a professional touch, all at an affordable kraft sleeve box cost.",
      ],
    },
  },

  // Subcategory: Kraft TUCK End BOX - Reverse Tuck / Straight Tuck / Auto Lock
  "kraft-tuck-end-box": {
    name: "Kraft Tuck End Box",
    description:
      "Smart, sturdy, and sustainable. Buy kraft tuck end boxes online for packaging that blends strength, style, and eco-friendly reliability.",
    heroImage: "Kraft-Tuck-End-Box_xot1ve",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Secure tuck top and bottom closure design",
      "Made from durable, eco-friendly kraft paperboard",
      "Easy to fold, assemble, and store flat",
      "Ideal for retail, food, and e-commerce products",
      "Full-color logo printing available for branding",
      "Matte, gloss, or uncoated surface options",
      "Recyclable, reusable, and biodegradable materials",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Kraft Paperboard / Cardboard" },
        { label: "Structure", value: "Straight or Reverse Tuck End" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9 × 6 × 3" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Tuck End Box", [
      {
        question: "What are kraft tuck end boxes used for?",
        answer:
          "They’re perfect for packaging cosmetics, food, accessories, and retail items.",
      },
      {
        question: "Can I customize my boxes with my logo?",
        answer:
          "Yes, BoxyPack offers full-color and logo printing on all kraft tuck end boxes.",
      },
      {
        question: "Are these boxes recyclable and eco-friendly?",
        answer:
          "Absolutely. Every box is made from recyclable kraft materials.",
      },
      {
        question: "Can I order in large quantities?",
        answer:
          "Yes, we provide custom kraft tuck end boxes wholesale with bulk pricing and discounts.",
      },
      {
        question: "What finish options do you offer?",
        answer:
          "You can choose from matte, gloss, or uncoated kraft finishes depending on your brand style.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Get in touch with BoxyPack to design kraft tuck end boxes that balance sustainability, durability, and style. Our experts craft packaging that secures your products and strengthens your brand identity.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Tuck End Box Packaging",
      paragraphs: [
        "Our kraft tuck end boxes are the ideal choice for brands seeking practical, high-quality packaging that's easy to assemble and environmentally responsible. Designed with top and bottom tuck flaps, these boxes ensure secure closure while keeping your products neatly enclosed.",
        "At BoxyPack, we build packaging that's both protective and visually appealing. As a trusted kraft tuck end packaging supplier, we use durable kraft paperboard that's lightweight yet strong, perfect for retail, cosmetics, food, and shipping.",
        "Each custom kraft tuck end box wholesale is made from recyclable kraft materials and available in natural brown or fully printed finishes. Whether you need printed kraft tuck end cartons with logo or plain kraft versions, our packaging solutions combine sustainability with premium presentation all at an affordable kraft tuck end box price.",
      ],
    },
  },

  // Subcategory: Kraft Five Panel Hanger Box
  "kraft-five-panel-hanger-box": {
    name: "Kraft Five Panel Hanger Box",
    description:
      "Smart, strong, and sustainable. Buy Kraft five-panel hanger boxes online for premium product display and eco-friendly retail packaging that stands out.",
    heroImage: "Kraft-Five-Panel-Hanger-Box_vqaq1b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Five-panel hanger design for easy retail display",
      "Made from durable and recyclable kraft paperboard",
      "Optional transparent window for product visibility",
      "Perfect for lightweight electronics, cosmetics, and retail products",
      "Full-color logo and artwork printing available",
      "Smooth matte or gloss surface finishes",
      "100% eco-friendly, reusable, and biodegradable",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Kraft Paperboard / Cardboard" },
        { label: "Structure", value: "Five Panel Hanger / Tuck End Design" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 8 × 4 × 2" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Five Panel Hanger Box", [
      {
        question: "What are Kraft five-panel hanger boxes used for?",
        answer:
          "They're perfect for retail display of electronics, cosmetics, and small consumer goods.",
      },
      {
        question: "Can I print my logo or design on the box?",
        answer:
          "Yes, BoxyPack offers full-color printing and logo customization options.",
      },
      {
        question: "Do you offer boxes with transparent windows?",
        answer:
          "Absolutely, we provide kraft panel hanger boxes with a window for product visibility.",
      },
      {
        question: "Are these boxes recyclable and eco-friendly?",
        answer:
          "Yes, all our Kraft hangar boxes are made from 100% recyclable materials.",
      },
      {
        question: "Can I order in bulk at discounted rates?",
        answer:
          "Yes, we offer eco Kraft hanger boxes wholesale with bulk pricing options.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to design kraft five-panel hanger boxes that enhance your retail presentation and protect your products responsibly. Our experts create eco-friendly packaging that’s strong, stylish, and sustainable..",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Five Panel Hanger Packaging",
      paragraphs: [
        "Our custom kraft five-panel hanger packaging combines durability with perfect shelf presentation. Designed with a top hanging panel and secure tuck ends, these boxes are ideal for displaying products neatly in retail stores. They're a preferred choice for lightweight electronics, cosmetics, and accessories that need visibility and protection.",
        "At BoxyPack, we focus on packaging that enhances your brand identity while keeping your products safe. As a trusted printed kraft display hanger box supplier, we craft each box from sturdy, recyclable kraft paperboard to ensure sustainability and strength.",
        "Each kraft panel hanger box with a window option allows customers to see the product clearly while maintaining secure packaging. Whether you need plain boxes or full-color printed designs, our eco kraft hanger boxes wholesale solutions offer premium quality at an affordable kraft five-panel hanger box cost.",
      ],
    },
  },

  // Subcategory: Kraft Side Lock Six Corner Box
  "kraft-side-lock-six-corner-box": {
    name: "Kraft Side Lock Six Corner Box",
    description:
      "Strong, simple, and sustainable. Buy Kraft six-corner boxes online for reliable, eco-friendly packaging that combines strength, versatility, and premium presentation.",
    heroImage: "Kraft-Side-Lock-Six-Corners_xyy2gh",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Strong six-corner structure for secure packaging",
      "Made from recyclable, eco-friendly kraft paperboard",
      "Easy to assemble with a side lock mechanism",
      "Perfect for bakery, retail, and shipping use",
      "Full-color logo and artwork printing options",
      "Matte, gloss, or uncoated surface finishes",
      "Reusable, foldable, and biodegradable design",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        {
          label: "Structure",
          value: "Six Corner / Side Lock / Foldable Design",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 10 × 8 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Side Lock Six Corner Box", [
      {
        question: "What are Kraft six-corner boxes used for?",
        answer:
          "They’re ideal for bakery products, shipping, food delivery, and retail packaging.",
      },
      {
        question: "Are these boxes easy to assemble?",
        answer:
          "Yes, the side-lock mechanism allows quick and secure folding without adhesives.",
      },
      {
        question: "Can I print my logo or artwork on these boxes?",
        answer:
          "Absolutely. BoxyPack offers full-color printing and branding options.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Yes, all Kraft side-lock six-corner boxes are made from recyclable Kraft paper.",
      },
      {
        question: "Do you offer bulk discounts for large orders?",
        answer:
          "Yes, we provide Kraft six-corner boxes at wholesale rates with discounts for high-volume purchases.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to design kraft side lock six corner boxes that combine strength, sustainability, and visual appeal. Our experts craft eco-friendly packaging that protects, promotes, and perfectly represents your brand.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Six Corner Packaging",
      paragraphs: [
        "Our Kraft side-lock corner packaging is designed for versatility and strength. Featuring a secure six-corner structure, these boxes are ideal for shipping, food packaging, and retail presentation. The locking flaps on both sides ensure easy assembly and dependable product protection.",
        "At BoxyPack, we specialize in packaging that blends convenience with quality. As a brown kraft six-corner packaging supplier, we manufacture boxes that stay strong even under pressure, keeping your products safe during transport and display.",
        "Each box is made from premium recyclable kraft paperboard, offering sustainability and structural integrity. With Kraft corner lock boxes with logo, you can promote your brand while ensuring your packaging stands out. Whether you need plain or printed boxes, our custom kraft six-corner boxes bulk options provide affordable solutions without compromising on design or durability.",
      ],
    },
  },

  // Subcategory: Kraft Regular Six Corner Box
  "kraft-regular-six-corner-box": {
    name: "Kraft Regular Six Corner Box",
    description:
      "Strong, simple, and sustainable. Buy Kraft six-corner boxes online for reliable, eco-friendly packaging that combines strength, versatility, and premium presentation.",
    heroImage: "Kraft-Regular-Six-Corner-Box_r2wkgt",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Foldable six-corner design for easy assembly",
      "Built from durable, recyclable kraft paperboard",
      "Ideal for food, apparel, and retail packaging",
      "Custom printing available on all panels",
      "Smooth matte, gloss, or uncoated finishes",
      "Lightweight and reusable for multiple purposes",
      "Fully recyclable and biodegradable material",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Regular Six-Corner / Foldable Design" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 10 × 8 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Regular Six Corner Box", [
      {
        question: "What are Kraft regular six-corner boxes used for?",
        answer:
          "They’re ideal for food packaging, apparel, gifts, and retail product presentation.",
      },
      {
        question: "Can I print my brand logo on the box?",
        answer:
          "Yes, BoxyPack offers full-color logo printing and custom artwork options.",
      },
      {
        question: "Are these boxes eco-friendly and recyclable?",
        answer:
          "Absolutely. All our kraft boxes are made from biodegradable, recyclable materials.",
      },
      {
        question: "Can I order these boxes in bulk?",
        answer:
          "Yes, we provide wholesale Kraft six-corner packaging at discounted rates for bulk orders.",
      },
      {
        question: "Are the boxes easy to assemble?",
        answer:
          "Yes, their foldable six-corner structure allows quick and secure assembly without glue.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create kraft six-corner boxes that combine durability, design, and sustainability. Our team crafts eco-friendly packaging that’s strong, practical, and built to make your brand stand out.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Six-Corner Carton Packaging",
      paragraphs: [
        "Our Kraft regular six-corner boxes are built for durability, ease, and functionality. Designed with a foldable six-panel layout, these boxes offer exceptional support for heavier products while maintaining a clean, professional look. They're perfect for food, apparel, and retail goods where protection and presentation matter most.",
        "At BoxyPack, we combine modern design with sustainable materials to create boxes that protect your products and reflect your brand's commitment to quality. As a Kraft regular six-corner packaging supplier, we use thick Kraft paperboard that's sturdy yet lightweight. This makes every box reusable, stackable, and easy to store.",
        "Whether you're shipping baked goods, retail items, or takeout meals, our custom Kraft six-corner carton boxes deliver the right balance of practicality and style. With wholesale Kraft six-corner packaging, your business gets affordable, eco-friendly packaging that keeps every product safe and appealing.",
      ],
    },
  },

  // Subcategory: Kraft Seal End Auto Bottom Box
  "kraft-seal-end-auto-bottom-box": {
    name: "Kraft Seal End Auto Bottom Box",
    description:
      "Durable, quick, and eco-friendly. Buy Kraft seal-end auto bottom boxes online for fast assembly, strong support, and reliable retail or shipping packaging.",
    heroImage: "Kraft-Seal-End-Auto-Bottom-Box_gddrys",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Auto-lock bottom for easy, quick assembly",
      "Secure seal end design for tight closure",
      "Durable kraft board for product protection",
      "Suitable for food, retail, and e-commerce use",
      "Custom logo and design printing options",
      "Matte, gloss, or uncoated finishes available",
      "100% recyclable and biodegradable packaging",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Seal End / Auto Bottom" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 10 × 7 × 3" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Seal End Auto Bottom Box", [
      {
        question: "What makes seal-end auto bottom boxes unique?",
        answer:
          "They combine a strong base with a fast-folding design for efficient assembly.",
      },
      {
        question: "Can I order custom printed designs in bulk?",
        answer:
          "Yes, BoxyPack offers full-color printing and custom kraft seal end boxes wholesale options.",
      },
      {
        question: "What products are these boxes best for?",
        answer:
          "They are ideal for cereals, cosmetics, electronics, and bakery or food packaging.",
      },
      {
        question: "Are these boxes recyclable and eco-friendly?",
        answer:
          "Yes, they are made from 100% recyclable and biodegradable kraft materials.",
      },
      {
        question: "How is the auto bottom different from regular bottom boxes?",
        answer:
          "Auto bottom boxes come pre-glued for faster setup and stronger product support.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack today to create kraft seal end auto bottom boxes that combine durability, quick assembly, and sustainable performance. Our experts design eco-friendly packaging that protects, promotes, and helps your brand deliver with confidence.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Seal End Auto Bottom Packaging",
      paragraphs: [
        "Our Kraft seal-end auto bottom boxes are the ideal blend of strength, convenience, and sustainability. Designed for quick folding and secure sealing, these boxes are perfect for shipping, retail display, and food delivery. The pre-glued auto-lock bottom saves assembly time while maintaining structural integrity.",
        "At BoxyPack, we specialize in packaging that delivers efficiency without compromise. As a Kraft auto bottom style packaging supplier, we ensure that every box offers exceptional durability, eco-friendly quality, and precise craftsmanship. Whether used for retail shelves or shipping purposes, these boxes maintain their shape and strength throughout handling and transport.",
        "Made from premium kraft paperboard, our custom kraft seal end boxes wholesale solutions help brands reduce waste while improving packaging speed and reliability. Perfect for cosmetics, cereals, electronics, or bakery goods, these boxes combine sustainable design with smart usability all at an affordable kraft seal end auto bottom box cost.",
      ],
    },
  },

  // Subcategory: Kraft Single Wall Auto Bottom Tray
  "kraft-single-wall-auto-bottom-tray": {
    name: "Kraft Single Wall Auto Bottom Tray",
    description:
      "Strong, smart, and sustainable. Buy Kraft auto bottom trays online for efficient packaging that’s quick to assemble, eco-friendly, and ideal for retail or food display.",
    heroImage: "Kraft-Single-Wall-Auto-Bottom-Tray_cxpl8m",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Auto bottom design for fast and secure setup",
      "Durable single-wall kraft board construction",
      "Lightweight yet sturdy for product stability",
      "Ideal for retail display, bakery, and food items",
      "Full-color logo and branding options available",
      "Matte, gloss, or uncoated finishes for texture variety",
      "100% recyclable and biodegradable material",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Single Wall Auto Bottom Tray" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9 × 6 × 2.5" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Single Wall Auto Bottom Tray", [
      {
        question: "What are Kraft single-wall auto bottom trays used for?",
        answer:
          "They're perfect for displaying food, retail items, or takeaway packaging.",
      },
      {
        question: "Are these trays easy to assemble?",
        answer:
          "Yes, the auto-lock bottom folds instantly for quick setup and strong support.",
      },
      {
        question: "Can I print my logo on these trays?",
        answer:
          "Absolutely, BoxyPack offers custom logo printing and design options.",
      },
      {
        question: "Are they made from eco-friendly materials?",
        answer:
          "Yes, all Kraft auto bottom tray packaging is recyclable and biodegradable.",
      },
      {
        question: "Can I order in bulk?",
        answer:
          "Yes, we provide brown kraft wall tray packaging wholesale at discounted rates for bulk purchases.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to create kraft single-wall auto bottom trays that combine speed, strength, and sustainability. Our team builds packaging that saves time, looks clean, and supports your brand’s eco-friendly vision..",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Auto Bottom Tray Packaging",
      paragraphs: [
        "Our Kraft single-wall auto bottom trays combine strength, speed, and simplicity in one clean design. These trays feature a pre-glued bottom that locks automatically, allowing fast setup without extra effort. Perfect for retail shelves, bakery counters, and takeout service, they offer both stability and style.",
        "At BoxyPack, we focus on building packaging that enhances workflow and presentation. As a Kraft single-wall auto tray supplier, we deliver trays designed to save time while maintaining strong structure. The single-wall kraft material provides the ideal balance of durability and eco-friendliness, ensuring long-term use and sustainability.",
        "Each custom kraft tray box with logo can be personalized to fit your brand identity. Whether you   are showcasing baked goods, cosmetics, or electronics, these trays keep your products safe and looking professional. With brown kraft wall tray packaging wholesale, you get flexible packaging solutions that suit all your product lines at an affordable kraft auto bottom tray price.",
      ],
    },
  },

  // Subcategory: Kraft Two Piece Box
  "kraft-two-piece-box": {
    name: "Kraft Two Piece Box",
    description:
      "Simple, strong, and sustainable. Buy Kraft two-piece boxes online for elegant, eco-friendly packaging that combines versatility, durability, and natural appeal.",
    heroImage: "Kraft-Two-Piece-Box_i0ua2d",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Two-piece lid-and-base structure for easy use",
      "Made from thick, recyclable kraft paperboard",
      "Perfect for gifts, retail, and product storage",
      "Fully printable exterior and interior surfaces",
      "Matte, gloss, or uncoated finish options",
      "Lightweight, stackable, and reusable",
      "Eco-friendly, biodegradable, and strong design",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Two Piece (Lid and Base)" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 8 × 8 × 4" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Two Piece Box", [
      {
        question: "What are Kraft two-piece boxes used for?",
        answer:
          "They're perfect for gifts, retail items, and product storage with an elegant unboxing experience.",
      },
      {
        question: "Can I customize the design or logo?",
        answer:
          "Yes, BoxyPack offers full-color logo printing and artwork customization options.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. All our Kraft two-piece boxes are recyclable and biodegradable.",
      },
      {
        question: "Do you offer bulk pricing for large orders?",
        answer:
          "Yes, we provide eco kraft two-piece packaging bulk discounts for wholesale buyers.",
      },
      {
        question: "Are these boxes sturdy enough for fragile items?",
        answer:
          "Yes, the thick kraft board provides strength and protection during handling or shipping.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to design kraft two-piece boxes that blend natural beauty, strength, and sustainability. Our team creates eco-friendly packaging that elevates your brand and protects your products with lasting quality.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Two Piece Packaging",
      paragraphs: [
        "Our Kraft two-piece boxes are designed to combine functionality with refined simplicity. Built from sturdy kraft paperboard, each box features a separate base and lid, providing a sleek unboxing experience and secure product fit. Ideal for gifting, retail packaging, and storage, these boxes bring both durability and style to your products.",
        "At BoxyPack, we specialize in sustainable packaging that elevates presentation while minimizing environmental impact. As a Kraft two-piece packaging supplier, we create custom designs that highlight your brand through natural textures, clean finishes, and flexible printing options.",
        "Whether you're selling handmade products, accessories, or small gifts, our custom kraft two-piece boxes wholesale give you professional quality at a cost-effective rate. With eco kraft two-piece packaging bulk, your business gets premium eco-friendly packaging without sacrificing affordability or performance.",
      ],
    },
  },

  // Subcategory: Kraft Cigarette Box
  "kraft-cigarette-box": {
    name: "Kraft Cigarette Box",
    description:
      "Eco-smart, durable, and stylish. Buy Kraft cigarette boxes online for secure, sustainable, and premium-quality tobacco packaging designed for modern brands.",
    heroImage: "Kraft-Cigarette-Box_gqxdr7",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Strong Kraft board for moisture resistance",
      "Compatible with tuck-end or flip-top designs",
      "Premium texture and eco-friendly finish",
      "Fully printable with brand and regulatory designs",
      "Matte, gloss, or uncoated finish options",
      "Recyclable, biodegradable, and sustainable materials",
      "Lightweight, stackable, and durable construction",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Flip-Top / Tuck-End Cigarette Box" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 3.5 × 2 × 1" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Cigarette Box", [
      {
        question:
          "Are Kraft cigarette boxes suitable for tobacco and herbal products?",
        answer:
          "Yes, they're perfect for both tobacco and herbal cigarette brands seeking natural packaging.",
      },
      {
        question: "Can I print custom designs and warnings on the box?",
        answer:
          "Yes, BoxyPack provides full-color printing for logos, warnings, and branding elements.",
      },
      {
        question: "Are these boxes moisture-resistant?",
        answer:
          "Yes, our kraft board material provides moderate resistance to moisture and external damage.",
      },
      {
        question: "Do you offer eco-friendly packaging solutions?",
        answer:
          "Absolutely. All our recyclable kraft tobacco packaging is made from biodegradable materials.",
      },
      {
        question: "Can I order bulk quantities at discounted prices?",
        answer:
          "Yes, we offer brown kraft cigarette boxes with bulk order discounts for wholesale purchases.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Partner with BoxyPack to create kraft cigarette boxes that combine protection, compliance, and sustainability. Our eco-friendly designs help brands present their products with class while supporting a greener future.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Cigarette Carton Packaging",
      paragraphs: [
        "Our kraft cigarette boxes are designed for strength, sustainability, and sophistication. Made from eco-friendly kraft paperboard, they offer a durable structure and a smooth texture that's ideal for retail tobacco packaging. These boxes protect cigarettes from moisture, maintain shape, and create a natural, organic brand impression.",
        "At BoxyPack, we focus on eco-conscious packaging that combines protection with presentation. As a trusted Kraft cigarette packaging supplier, we craft packaging that highlights your product while reducing environmental impact.",
        "Each custom kraft cigarette carton box can be printed with your brand's logo, regulatory text, and health warnings with precision offset printing. Available in both tuck-end and flip-top styles, our brown kraft cigarette boxes bulk order options deliver premium presentation at competitive rates. Whether you're a tobacco brand, herbal cigarette manufacturer, or retail supplier, our kraft packaging solutions provide quality and sustainability in every piece.",
      ],
    },
  },

  // Subcategory: Kraft Bookend Box
  "kraft-bookend-box": {
    name: "Kraft Bookend Box",
    description:
      "Functional, flexible, and eco-friendly. Buy Kraft bookend boxes online for secure, sustainable, and elegant packaging that enhances your brand’s presentation.",
    heroImage: "Kraft-Bookend-Box_tlixms",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Front-opening book-style structure for easy access",
      "Durable kraft board material for strong protection",
      "Sleek and professional presentation design",
      "Fully customizable with logo and brand printing",
      "Matte, gloss, or natural kraft finish options",
      "Lightweight, eco-friendly, and biodegradable",
      "Ideal for electronics, gifts, or retail packaging",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Bookend / Front Flap Closure" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9 × 6 × 3" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Bookend Box", [
      {
        question: "What are Kraft bookend boxes used for?",
        answer:
          "They're perfect for electronics, luxury gifts, and subscription or promotional kits.",
      },
      {
        question: "Can I customize the design and logo placement?",
        answer:
          "Yes, BoxyPack offers complete customization for printing, size, and finishing.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. Our eco-friendly kraft bookend packaging is recyclable and biodegradable.",
      },
      {
        question: "Can I order in bulk at discounted rates?",
        answer:
          "Yes, we offer brown kraft bookend gift boxes at wholesale pricing for large orders.",
      },
      {
        question: "Are bookend boxes durable for shipping?",
        answer:
          "Yes, the strong Kraft material provides excellent protection during storage and transport.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to create kraft bookend boxes that blend eco-friendliness, durability, and modern style. Our experts craft packaging that’s practical, elegant, and built to represent your brand beautifully.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Bookend Style Packaging",
      paragraphs: [
        "Our kraft bookend boxes are designed for brands that value simplicity, strength, and sophistication. These boxes feature a front-opening flap that closes like a book, making them ideal for luxury, tech, and retail products. The sleek structure ensures both convenience and style while keeping your products secure and well-presented.",
        "At BoxyPack, we understand that great packaging tells a story before the product is even revealed. As a trusted Kraft bookend-style packaging supplier, we combine functionality and eco-conscious craftsmanship to deliver boxes that protect and impress.",
        "Each custom kraft bookend carton with logo can be tailored to your specific product dimensions, printing needs, and finish preferences. Perfect for electronics, books, gifts, and subscription kits, our brown kraft bookend gift boxes wholesale provide the perfect mix of sustainability and visual appeal, all at an affordable kraft bookend box cost.",
      ],
    },
  },

  // Subcategory: Kraft Dispenser Box
  "kraft-dispenser-box": {
    name: "Kraft Dispenser Box",
    description:
      "Practical, eco-friendly, and professional. Buy Kraft dispenser boxes online for convenient, sustainable, and stylish product display and easy customer access.",
    heroImage: "Kraft-Dispenser-Box_mxxcxq",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Easy-pull dispenser design for customer convenience",
      "Sturdy kraft board material for lasting protection",
      "Ideal for retail, display, or countertop use",
      "Fully printable surface for branding and labeling",
      "Matte, gloss, or natural kraft finishes available",
      "Recyclable and biodegradable material",
      "Compact, foldable, and easy to assemble",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Dispenser / Front-Opening Display Box" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9 × 6 × 3" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Dispenser Box", [
      {
        question: "What are Kraft dispenser boxes used for?",
        answer:
          "They're used for easy product dispensing in retail, food, or cosmetic packaging.",
      },
      {
        question: "Can I print my brand logo and product details?",
        answer:
          "Yes, BoxyPack offers custom logo printing and artwork options for all dispenser boxes.",
      },
      {
        question: "Are these boxes suitable for food packaging?",
        answer:
          "Yes, they're safe for dry goods like snacks, coffee pods, or tea bags.",
      },
      {
        question: "Do you offer eco-friendly or recyclable materials?",
        answer:
          "Absolutely. All our Kraft dispenser packaging boxes are fully recyclable and biodegradable.",
      },
      {
        question: "Can I order large quantities at discounted rates?",
        answer:
          "Yes, we offer Kraft retail dispenser boxes at wholesale pricing for bulk orders.",
      },
    ]),
    cta: {
      title: "",
      description:
        "Contact BoxyPack to create kraft dispenser boxes that combine function, eco-friendliness, and brand identity. Our team designs packaging that looks smart, performs better, and supports your sustainable goals.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Dispenser Packaging Boxes",
      paragraphs: [
        "Our kraft dispenser boxes are designed for both functionality and sustainability. Built to store, protect, and dispense products efficiently, these boxes are perfect for retail shelves, trade counters, and e-commerce packaging. The unique opening mechanism allows customers to easily pull out individual products without damaging the rest of the contents.",
        "At BoxyPack, we focus on creating eco-conscious packaging that simplifies product handling while maintaining a premium look. As a brown kraft dispenser carton supplier, we manufacture boxes that combine sturdiness with natural elegance, making them ideal for cosmetics, snacks, stationery, and other retail items.",
        "Each custom kraft dispenser box with logo can be printed with your brand design, tagline, and product details for a polished retail presentation. With Kraft retail dispenser boxes wholesale, you get cost-effective, high-quality packaging that enhances accessibility, usability, and display appeal all at an affordable Kraft dispenser box price.",
      ],
    },
  },

  // Subcategory: Kraft Double Wall Frame Tray
  "kraft-double-wall-frame-tray": {
    name: "Kraft Double Wall Frame Tray",
    description:
      "Strong, smart, and sustainable. Buy Kraft double-wall trays online for reliable, eco-friendly, and durable product presentation and retail packaging.",
    heroImage: "Kraft-Double-Wall-Frame-Tray_i8lzim",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Reinforced double-wall structure for maximum durability",
      "Made from thick, recyclable kraft paperboard",
      "Easy to assemble and ideal for product display",
      "Matte, gloss, or natural kraft finish options",
      "Fully customizable with logo and print design",
      "Perfect for bakery, food, and retail packaging",
      "100% eco-friendly and biodegradable materials",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paperboard / Recycled Cardboard",
        },
        { label: "Structure", value: "Double Wall Frame Tray" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "e.g., 9 × 6 × 2" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Kraft Double Wall Frame Tray", [
      {
        question: "What are Kraft double-wall frame trays used for?",
        answer:
          "They're ideal for bakery products, retail displays, and sturdy food packaging.",
      },
      {
        question: "Can I customize the size and printing?",
        answer:
          "Yes, BoxyPack offers full customization for size, logo, and print finishes.",
      },
      {
        question: "Are these trays recyclable?",
        answer:
          "Absolutely. All our eco-friendly kraft tray box packaging is 100% recyclable and biodegradable.",
      },
      {
        question: "Do these trays work for heavy products?",
        answer:
          "Yes, their double-wall design provides strong support for heavier items.",
      },
      {
        question: "Can I order in bulk?",
        answer:
          "Yes, we offer brown kraft frame tray boxes wholesale at discounted prices for bulk orders.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create kraft double-wall frame trays that combine durability, sustainability, and elegant design. Our packaging experts craft eco-friendly trays that protect products beautifully while reflecting your brand’s quality and care.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Kraft Double Wall Tray Packaging",
      paragraphs: [
        "Our kraft double-wall frame trays are built for strength, precision, and style. Designed with reinforced double walls on all sides, these trays provide excellent product protection and premium display appeal. The structural integrity makes them ideal for food, bakery, and retail packaging.",
        "At BoxyPack, we combine durability with eco-conscious craftsmanship. As a custom kraft wall frame tray supplier, we specialize in packaging that enhances product safety while keeping the environment in focus. Each tray is easy to assemble, lightweight, and ideal for both storage and display.",
        "Whether you need retail packaging, bakery trays, or eco-friendly display solutions, our brown kraft frame tray boxes wholesale give your brand the strength, elegance, and sustainability it deserves, all at a competitive kraft double wall tray cost.",
      ],
    },
  },
  // ========== CARDBOARD BOXES SUBCATEGORIES ==========
  // Subcategory: Cardboard Display Box
  "cardboard-display-box": {
    name: "Cardboard Display Box",
    description:
      "Attractive, strong, and practical. Buy cardboard display boxes online for premium product visibility, retail presentation, and brand-focused packaging solutions.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built from durable corrugated or solid cardboard",
      "Ideal for retail display and countertop presentation",
      "Customizable with logo, text, and graphics",
      "Available in matte, gloss, or natural finishes",
      "Lightweight yet sturdy for repeated use",
      "Eco-friendly, recyclable, and biodegradable",
      "Affordable wholesale rates for bulk orders",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Board / Solid Paperboard",
        },
        {
          label: "Structure",
          value: "Countertop / Floor Display / Foldable Design",
        },
        { label: "Thickness", value: "Single Wall / Double Wall" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Display Box", [
      {
        question: "What are cardboard display boxes used for?",
        answer:
          "They're used for retail counters and shelf displays to promote product visibility.",
      },
      {
        question: "Can I add my logo and artwork to the display?",
        answer:
          "Yes, BoxyPack offers full-color printing for logos, artwork, and branding elements.",
      },
      {
        question: "Are these display boxes eco-friendly?",
        answer:
          "Absolutely. All cardboard display boxes are recyclable and biodegradable.",
      },
      {
        question: "Do you provide wholesale pricing for large quantities?",
        answer:
          "Yes, we offer wholesale cardboard display box discounts for bulk orders.",
      },
      {
        question: "What affects the cardboard display box price?",
        answer: "Cost depends on box size, print type, material, and quantity.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack today to create custom cardboard display boxes that highlight your products beautifully. Our packaging experts design eco-friendly displays that attract customers and strengthen your retail presence.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Display Box Packaging",
      paragraphs: [
        "Our cardboard display boxes are crafted for brands that value visibility and style. These boxes serve as both packaging and presentation tools, allowing you to showcase products attractively in stores, trade counters, and exhibitions.",
        "At BoxyPack, we design custom cardboard display boxes that combine sturdy construction with professional design. Each box enhances shelf appeal while protecting the contents, making them ideal for cosmetics, snacks, electronics, and small retail products.",
        "As a trusted wholesale cardboard display box manufacturer, we offer a wide range of shapes, sizes, and finishes. Whether you need countertop boxes or floor-standing displays, our packaging provides the perfect balance between function, durability, and cost-efficiency. The cardboard display box price remains competitive even for fully printed, high-end custom designs.",
      ],
    },
  },

  // Subcategory: Cardboard Tuck End Box
  "cardboard-tuck-end-box": {
    name: "Cardboard Tuck End Box",
    description:
      "Functional, sleek, and versatile. Buy cardboard tuck-end boxes online for secure, affordable, and eco-friendly packaging crafted for every industry.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Easy-to-close top and bottom tuck-end design",
      "Perfect for retail, food, and e-commerce products",
      "Lightweight yet strong corrugated or solid cardboard",
      "Smooth matte, gloss, or uncoated finish options",
      "Fully printable surface for custom branding",
      "Eco-friendly, recyclable, and biodegradable material",
      "Affordable and practical for bulk orders",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Solid Board / Corrugated / Kraft Paperboard",
        },
        {
          label: "Structure",
          value: "Straight Tuck / Reverse Tuck / Auto-Lock Bottom",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Tuck End Box", [
      {
        question: "What are cardboard tuck-end boxes used for?",
        answer:
          "They're ideal for cosmetics, electronics, food, and retail packaging.",
      },
      {
        question: "Can I print my brand logo on these boxes?",
        answer:
          "Yes, BoxyPack offers full-color printing for your brand and product artwork.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. All cardboard tuck-end boxes are recyclable and biodegradable.",
      },
      {
        question: "Do you offer different tuck-end styles?",
        answer:
          "Yes, we provide straight tuck, reverse tuck, and auto-lock bottom designs.",
      },
      {
        question: "What affects the cardboard tuck-end box price?",
        answer:
          "Price depends on material, printing type, finish, and order quantity.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack today to create custom cardboard tuck-end boxes that blend durability, elegance, and sustainability. Our experts craft eco-friendly packaging built to protect, impress, and perform for every brand.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Tuck-End Box Packaging",
      paragraphs: [
        "Our cardboard tuck-end boxes are a perfect combination of strength, convenience, and style. Designed with tuck-in flaps on one or both ends, they provide secure closure and easy product access. Ideal for retail, food, cosmetics, and electronics, these boxes protect your items while maintaining a professional look.",
        "At BoxyPack, we build custom cardboard tuck-end boxes that balance durability with brand presentation. Each box is precision-cut and pre-scored for quick assembly, making packaging faster and more efficient. Whether used for retail display or e-commerce shipping, they ensure your product stays protected and beautifully presented.",
        "As a wholesale cardboard tuck-end box supplier, we offer cost-effective solutions in multiple sizes, finishes, and printing options. From small personal care packaging to large retail cartons, our printed cardboard tuck-end boxes are made to fit your brand style and budget perfectly.",
      ],
    },
  },

  // Subcategory: Cardboard Box with Lid
  "cardboard-box-with-lid": {
    name: "Cardboard Box with Lid",
    description:
      "Strong, elegant, and reusable. Buy cardboard boxes with lids online for premium product storage, retail packaging, and professional brand presentation.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Two-piece lid-and-base design for secure closure",
      "Durable and lightweight cardboard material",
      "Perfect for gifts, cosmetics, and apparel packaging",
      "Fully printable inside and outside surfaces",
      "Available in matte, gloss, or natural finishes",
      "Recyclable, reusable, and eco-friendly construction",
      "Suitable for bulk retail and shipping needs",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Solid Board / Corrugated / Kraft Paperboard",
        },
        { label: "Structure", value: "Two-Piece Lid and Base" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Box with Lid", [
      {
        question: "What are cardboard boxes with lids used for?",
        answer:
          "They're perfect for gifts, storage, cosmetics, apparel, and premium product packaging.",
      },
      {
        question: "Can I customize my box design and logo?",
        answer:
          "Yes, BoxyPack offers complete customization, including size, print, and finish options.",
      },
      {
        question: "Are these boxes reusable?",
        answer:
          "Absolutely. Their strong structure allows repeated use for long-lasting packaging.",
      },
      {
        question: "Are they made from eco-friendly materials?",
        answer:
          "Yes, all cardboard boxes with lids are recyclable, biodegradable, and sustainable.",
      },
      {
        question: "Do you offer wholesale pricing for bulk orders?",
        answer:
          "Yes, we provide wholesale cardboard boxes with lids at discounts for large-volume purchases.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Connect with BoxyPack to create custom cardboard boxes with lids that blend strength, elegance, and eco-friendliness. Our experts design packaging that protects, presents, and promotes your products beautifully.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Box with Lid Packaging",
      paragraphs: [
        "Our cardboard boxes with lids are designed to combine convenience, style, and durability. Featuring a two-piece lid and base structure, these boxes protect products securely while offering an elegant unboxing experience. Ideal for gifts, cosmetics, apparel, or storage, they provide both practical function and premium appearance.",
        "At BoxyPack, we craft custom cardboard boxes with lids that balance aesthetic appeal with sustainable design. Each box is made from high-quality paperboard, offering a smooth finish for custom printing and branding. The snug-fitting lid ensures protection while keeping the contents easily accessible.",
        "As a wholesale cardboard box with lid supplier, we offer multiple styles, including rigid-lid boxes, collapsible designs, and lightweight kraft-lid variations. Our focus is on providing businesses with affordable, eco-friendly packaging that reflects brand quality and value, all at a competitive cardboard box with lid price.",
      ],
    },
  },

  // Subcategory: Cardboard Gable Box
  "cardboard-gable-box": {
    name: "Cardboard Gable Box",
    description:
      "Practical, stylish, and sustainable. Buy cardboard gable boxes online for secure product packaging, easy carrying, and beautiful retail presentation.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built-in handle for easy carrying",
      "Spacious interior for versatile use",
      "Lightweight yet strong cardboard material",
      "Available in matte, gloss, or natural finishes",
      "Fully printable for logo and design artwork",
      "Recyclable, biodegradable, and food-safe material",
      "Ideal for gifts, food, and retail packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Solid Board / Corrugated / Kraft Paperboard",
        },
        { label: "Structure", value: "Gable Handle Style" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Gable Box", [
      {
        question: "What are cardboard gable boxes used for?",
        answer:
          "They're ideal for packaging food, gifts, party favors, and retail items.",
      },
      {
        question: "Can I print my logo and brand design?",
        answer:
          "Yes, BoxyPack offers full-color printing on all custom cardboard gable boxes.",
      },
      {
        question: "Are these boxes food-safe?",
        answer:
          "Yes, they're made from food-grade, eco-friendly cardboard materials.",
      },
      {
        question: "Can I order in bulk?",
        answer:
          "Yes, we provide wholesale cardboard gable box discounts for bulk orders.",
      },
      {
        question: "What determines the cardboard gable box price?",
        answer: "Cost depends on size, design, finish, and print options.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create cardboard gable boxes that blend durability, design, and eco-friendliness. Our packaging experts craft carry-ready solutions that make your brand memorable and your products perfectly presented.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Gable Box Packaging",
      paragraphs: [
        "Our cardboard gable boxes are a perfect mix of design and function. These carry-style boxes feature a built-in handle and spacious interior, making them ideal for gifts, food items, and promotional packaging. Their simple yet elegant structure provides protection and a premium unboxing experience.",
        "At BoxyPack, we design custom cardboard gable boxes that suit every brand — from bakeries and restaurants to event planners and retailers. Each box is crafted from sturdy, eco-friendly paperboard that keeps products safe and presents them attractively.",
        "As a wholesale cardboard gable box supplier, we offer a wide selection of sizes, styles, and finishes. Whether you need natural kraft tones or vibrant printed designs, our printed cardboard gable boxes help your brand look professional while keeping packaging affordable. With our flexible customization and fair cardboard gable box price, you can create packaging that truly stands out.",
      ],
    },
  },

  // Subcategory: Cardboard Cake / Bakery Box
  "cardboard-cake-bakery-box": {
    name: "Cardboard Cake / Bakery Box",
    description:
      "Fresh, strong, and stylish. Buy cardboard cake boxes online for bakery, dessert, and pastry packaging that combines presentation, protection, and eco-friendly design..",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-safe cardboard for bakery and dessert packaging",
      "Easy-fold, durable structure for secure transport",
      "Optional window for product visibility",
      "Fully printable with logo and brand artwork",
      "Available in matte, gloss, or natural finishes",
      "Recyclable, biodegradable, and eco-friendly material",
      "Ideal for cakes, cupcakes, pastries, and desserts",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Solid Board / Kraft / Food-Grade Cardboard",
        },
        {
          label: "Structure",
          value: "Standard, Windowed, or Two-Piece Design",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Uncoated" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Bakery Box", [
      {
        question: "What are cardboard cake boxes used for?",
        answer:
          "They're used for packaging cakes, cupcakes, pastries, and other baked goods.",
      },
      {
        question: "Are these boxes food-safe?",
        answer:
          "Yes, all our cardboard bakery boxes are made from food-grade materials.",
      },
      {
        question: "Can I add my bakery logo to the box?",
        answer:
          "Yes, BoxyPack offers full-color printing for logos and custom branding.",
      },
      {
        question: "Are these boxes recyclable?",
        answer:
          "Absolutely. Our custom cardboard cake boxes are 100% recyclable and eco-friendly.",
      },
      {
        question: "Do you offer bulk pricing?",
        answer:
          "Yes, we provide wholesale cardboard cake box discounts for large orders.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Partner with BoxyPack to create cardboard cake and bakery boxes that keep your desserts safe and your presentation flawless. Our team crafts eco-friendly, food-safe packaging that helps your treats look as good as they taste.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Cake Box Packaging",
      paragraphs: [
        "Our cardboard cake and bakery boxes are designed to protect baked goods while keeping them beautifully displayed. Crafted from durable, food-safe cardboard, they maintain structure, freshness, and elegance from kitchen to counter. Perfect for cakes, cupcakes, pastries, and desserts, these boxes ensure your products reach customers in flawless condition.",
        "At BoxyPack, we build custom cardboard cake boxes with a focus on both beauty and performance. Choose from single or multi-tier styles, with or without windows, for a clean and professional look. Each box folds easily, stays sturdy, and enhances your brand's presentation.",
        "As a wholesale cardboard cake box supplier, we deliver high-volume packaging with reliable quality and affordable pricing. Whether you need plain brown boxes or fully printed branding, our packaging offers the perfect balance of practicality and style all at a competitive cardboard cake box price.",
      ],
    },
  },

  // Subcategory: Cardboard Sleeve Box
  "cardboard-sleeve-box": {
    name: "Cardboard Sleeve Box",
    description:
      "Smart, sleek, and versatile. Buy cardboard sleeve boxes online for stylish packaging that slides smoothly, protects perfectly, and promotes your brand beautifully.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Smooth sliding sleeve design for easy opening",
      "Premium cardboard build for long-lasting durability",
      "Fully printable surface for logos or artwork",
      "Available in matte, gloss, or soft-touch finishes",
      "Lightweight, compact, and space-efficient structure",
      "100% recyclable and eco-friendly materials",
      "Ideal for retail, cosmetics, and electronics packaging",
    ],

    customization: {
      details: [
        { label: "Material Type", value: "Solid Board / Kraft / Paperboard" },
        { label: "Structure", value: "Sliding Sleeve Style with Inner Tray" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Sleeve Box", [
      {
        question: "What are cardboard sleeve boxes used for?",
        answer:
          "They're great for retail, gifts, cosmetics, and product display packaging.",
      },
      {
        question: "Can I add my brand logo or artwork?",
        answer:
          "Yes, BoxyPack offers full-color printing for custom cardboard sleeve boxes.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. All materials are recyclable and sourced responsibly.",
      },
      {
        question: "Do you offer wholesale options?",
        answer:
          "Yes, we provide wholesale cardboard sleeve boxes with flexible bulk pricing.",
      },
      {
        question: "What finishes can I choose?",
        answer:
          "We offer matte, gloss, or soft-touch laminations for elegant presentation.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to design cardboard sleeve boxes that blend simplicity, elegance, and eco-friendly performance. Our experts create packaging that enhances every product and strengthens your brand image.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Sleeve Box Packaging",
      paragraphs: [
        "Our cardboard sleeve boxes are the perfect mix of simplicity and sophistication. Designed with a sliding sleeve that wraps around an inner tray or product, these boxes provide a premium unboxing experience without extra bulk. Ideal for electronics, gifts, cosmetics, or stationery, they're practical yet elegant for modern brands.",
        "At BoxyPack, we build custom cardboard sleeve boxes that adapt to your product's size, style, and purpose. The sliding design ensures easy access while keeping contents secure. Whether you choose plain kraft or full-color printed sleeves, these boxes highlight your brand identity with minimalistic charm.",
        "As a wholesale cardboard sleeve box supplier, we focus on affordability, quality, and sustainability. Each box is made from durable, recyclable paperboard and can be customized with finishes like matte, gloss, or soft-touch for an extra-premium feel, all while keeping a reasonable cardboard sleeve box price for bulk buyers.",
      ],
    },
  },

  // Subcategory: Cardboard Dispenser Box
  "cardboard-dispenser-box": {
    name: "Cardboard Dispenser Box",
    description:
      "Practical, durable, and easy to use. Buy cardboard dispenser boxes online for smooth product dispensing, clear visibility, and professional retail display.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Smart dispenser opening for easy product access",
      "Premium cardboard construction for durability and shape retention",
      "Fully printable surface for branding and design",
      "Matte, gloss, or soft-touch finishes available",
      "Compact and counter-friendly design",
      "Eco-friendly and recyclable materials",
      "Perfect for retail, food, and cosmetic products",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Solid Board / Kraft / Corrugated Paperboard",
        },
        {
          label: "Structure",
          value: "Standard, Auto-Lock, or Front-Cut Dispenser",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Dispenser Box", [
      {
        question: "What are cardboard dispenser boxes used for?",
        answer:
          "They're used for dispensing products like sachets, cosmetics, or small snacks efficiently.",
      },
      {
        question: "Can I print my brand logo on these boxes?",
        answer:
          "Yes, BoxyPack offers full printing options for custom cardboard dispenser boxes.",
      },
      {
        question: "Are these boxes durable enough for retail use?",
        answer:
          "Absolutely. They're made from sturdy, high-grade cardboard that lasts.",
      },
      {
        question: "Can I order dispenser boxes in bulk?",
        answer:
          "Yes, we offer wholesale cardboard dispenser box rates with bulk savings.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Yes, our materials are recyclable and sourced from sustainable suppliers.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack today to create cardboard dispenser boxes that combine smart design, easy function, and standout branding. Our expert team builds packaging that works hard and looks great, perfect for every retail shelf.",
    },
    overview: {
      heading: "Product Overview",
      title: "Cardboard Dispenser Boxes for High-Traffic Counters",
      paragraphs: [
        "Our cardboard dispenser boxes are designed for convenience and display. Built with a front cut-out for easy access, these boxes let customers pull out products one by one while keeping the rest neatly stored. Ideal for retail counters, health products, cosmetics, or snacks, dispenser boxes improve accessibility without sacrificing appearance.",
        "At BoxyPack, we specialize in custom cardboard dispenser boxes that match your branding and functional goals. Whether you need them for small pouches, sachets, candy, or cosmetics, our boxes are built to last and attract attention. Each unit combines structure, balance, and display clarity, helping your customers interact with your products easily.",
        "As a wholesale cardboard dispenser box supplier, we focus on consistent quality and affordability. With flexible size options and durable materials, we ensure your packaging works seamlessly for both storage and presentation while maintaining a competitive cardboard dispenser box price.",
      ],
    },
  },

  // Subcategory: Cardboard Five Panel Hanger
  "cardboard-five-panel-hanger": {
    name: "Cardboard Five Panel Hanger",
    description:
      "Functional, strong, and display-ready. Buy cardboard five panel hanger boxes online to showcase, protect, and hang your retail products with ease and style.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built-in hanger tab for retail display",
      "Durable cardboard construction for product protection",
      "Full-color printing for branding and artwork",
      "Matte, gloss, or soft-touch surface options",
      "Compact and lightweight for easy stocking",
      "Eco-friendly, recyclable materials",
      "Ideal for electronics, accessories, and retail packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Solid Board / Kraft / Coated Paperboard",
        },
        {
          label: "Structure",
          value: "Five-Panel Hanging Style with Die-Cut Tab",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Gloss / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Five Panel Hanger", [
      {
        question: "What are five panel hanger boxes used for?",
        answer:
          "They're perfect for retail display packaging like cosmetics, toys, or electronic accessories.",
      },
      {
        question: "Can I add my brand logo or artwork?",
        answer:
          "Yes, BoxyPack offers custom printing on all five panel hanger boxes.",
      },
      {
        question: "Are these boxes suitable for heavy products?",
        answer:
          "They're great for lightweight and medium-weight products needing easy retail hanging.",
      },
      {
        question: "Do you provide bulk pricing?",
        answer:
          "Yes, we offer wholesale five panel hanger boxes at cost-effective rates.",
      },
      {
        question: "Are these boxes recyclable?",
        answer:
          "Absolutely. All materials are eco-friendly and fully recyclable.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create cardboard five panel hanger boxes that combine durability, display efficiency, and visual impact. Our team delivers packaging that protects, promotes, and performs beautifully on every shelf.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Five Panel Hanger Box Packaging",
      paragraphs: [
        "Our cardboard five panel hanger boxes are designed for clear visibility and secure hanging display. These boxes come with a built-in hanging tab, allowing retailers to showcase products on hooks or pegs effortlessly. Perfect for small electronics, cosmetics, accessories, and retail items, they combine structure, branding, and convenience in one sleek design.",
        "At BoxyPack, we create custom five panel hanger boxes tailored to your product size, artwork, and hanging needs. Whether you want a die-cut window, full printing, or matte finish, these boxes ensure every item looks organized and professional on display racks.",
        "As a wholesale cardboard five panel hanger box supplier, we deliver durable, lightweight packaging that enhances both visibility and shelf appeal. The easy-fold construction provides efficiency during packing, while the sturdy structure keeps your products safe all at an affordable five panel hanger box price.",
      ],
    },
  },

  // Subcategory: Cardboard Mailer Boxes
  "cardboard-mailer-boxes": {
    name: "Cardboard Mailer Boxes",
    description:
      "Strong, smart, and ready to ship. Buy cardboard mailer boxes online for safe, stylish packaging that protects products and strengthens brand identity.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable corrugated or paperboard construction",
      "Self-locking mailer design for easy assembly",
      "Full-color printing for logos and designs",
      "Matte, gloss, or soft-touch coating options",
      "Eco-friendly and recyclable materials",
      "Lightweight yet highly protective structure",
      "Ideal for e-commerce, retail, and subscription shipping",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Board / Kraft / Paperboard",
        },
        { label: "Structure", value: "Fold-and-Lock Mailer / Tuck-Top Style" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Mailer Boxes", [
      {
        question: "What are cardboard mailer boxes used for?",
        answer:
          "They're perfect for e-commerce, shipping, subscription, and product delivery packaging.",
      },
      {
        question: "Can I add my brand logo?",
        answer:
          "Yes, BoxyPack offers full-color printing for custom cardboard mailer boxes.",
      },
      {
        question: "Are mailer boxes strong enough for shipping?",
        answer:
          "Absolutely. They're made from durable corrugated paperboard designed for secure shipping.",
      },
      {
        question: "Do you provide bulk pricing?",
        answer:
          "Yes, we offer wholesale cardboard mailer boxes with great discounts on large orders.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer: "Yes, all materials are recyclable and sourced sustainably.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Partner with BoxyPack to create cardboard mailer boxes that protect your shipments and promote your brand. Our experts craft packaging that delivers reliability, elegance, and confidence in every order.",
    },
    overview: {
      heading: "Product Overview",
      title: "Cardboard Mailer Boxes Crafted for Unboxing",
      paragraphs: [
        "Our cardboard mailer boxes are designed for strength, security, and visual appeal. Built from premium corrugated or solid paperboard, they ensure your items arrive safely while leaving a professional impression. These boxes are ideal for e-commerce, retail, and subscription products where protection and presentation matter equally.",
        "At BoxyPack, we make custom cardboard mailer boxes that fit your brand and shipment needs. From sleek matte finishes to bold printed logos, every mailer adds value and recognition. The fold-and-lock structure makes packing easy, eliminating tape while keeping your items secure.",
        "As a wholesale cardboard mailer box supplier, we help growing brands ship confidently. Each box blends durability, sustainability, and affordability. Whether you're launching a subscription line or shipping retail goods nationwide, you can trust our packaging to perform at a fair cardboard mailer box price.",
      ],
    },
  },

  // Subcategory: Cardboard Double Locked Wall Lid Box
  "cardboard-double-locked-wall-lid-box": {
    name: "Cardboard Double Locked Wall Lid Box",
    description:
      "Secure, stylish, and built to last. Buy cardboard double-lock wall lid boxes online for premium protection, smart structure, and professional product presentation.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Reinforced double-lock design for extra security",
      "Thick cardboard walls for reliable durability",
      "Smooth matte or glossy surface for a premium finish",
      "Fully printable area for branding and artwork",
      "Easy assembly with interlocking lid panels",
      "Eco-friendly, recyclable materials",
      "Ideal for cosmetics, gifts, and retail packaging",
    ],

    customization: {
      details: [
        { label: "Material Type", value: "Cardboard / Kraft / Paperboard" },
        {
          label: "Structure",
          value: "Double-Locked Lid with Reinforced Walls",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Double Locked Wall Lid Box", [
      {
        question: "What are double-locked wall lid boxes used for?",
        answer:
          "They're used for packaging high-end retail products, gifts, and electronics that need strong protection.",
      },
      {
        question: "Can I print my logo and design?",
        answer:
          "Yes, BoxyPack offers full-color printing for custom double-locking wall lid boxes.",
      },
      {
        question: "Are these boxes easy to assemble?",
        answer:
          "Yes, they feature interlocking panels that are quick to fold and secure.",
      },
      {
        question: "Do you provide bulk order pricing?",
        answer:
          "Absolutely. We offer wholesale double-lock wall lid boxes at discounted rates.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Yes, all our materials are recyclable and sourced sustainably.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Partner with BoxyPack to create cardboard double-locking wall lid boxes that combine durability, elegance, and innovation. Our team delivers packaging that protects your products and elevates your brand image effortlessly.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Double-Locked Wall Lid Box Packaging",
      paragraphs: [
        "Our cardboard double-lock wall lid boxes are crafted for brands that value durability and precision. Designed with double-sided locks and reinforced walls, these boxes provide strong structural integrity, ensuring your products stay protected during handling, display, and shipping.",
        "At BoxyPack, we create custom double-locking wall lid boxes that merge strength with presentation. The locking mechanism keeps contents secure, while the sleek lid design adds a touch of sophistication. Perfect for cosmetics, electronics, gifts, and retail products, these boxes offer both protection and visual appeal.",
        "As a wholesale cardboard double-lock wall lid box supplier, we deliver high-quality packaging tailored to your brand. Whether you need printed boxes for retail shelves or plain kraft styles for eco-conscious branding, we offer flexibility and consistency all at a competitive cardboard double locked wall lid box price.",
      ],
    },
  },

  // Subcategory: Cardboard Side Lock Six Corner Box
  "cardboard-side-lock-six-corner-box": {
    name: "Cardboard Side Lock Six Corner Box",
    description:
      "Efficient, durable, and built for precision. Buy cardboard side lock six corner boxes online for quick assembly, strong structure, and professional product presentation.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Easy side lock system for secure closure",
      "Sturdy six-panel structure for strength and balance",
      "Smooth matte or glossy surface finish",
      "Custom printing for logos, colors, and branding",
      "Ships flat and folds quickly for storage efficiency",
      "Eco-friendly materials and recyclable design",
      "Ideal for food, bakery, and retail product packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Cardboard / Kraft / Corrugated Paperboard",
        },
        { label: "Structure", value: "Six Corners with Side Locking Tabs" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Gloss / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Side Lock Six Corner Box", [
      {
        question: "What are side lock six corner boxes used for?",
        answer: "They're ideal for bakery, apparel, food, and gift packaging.",
      },
      {
        question: "Can I add custom printing?",
        answer:
          "Yes, BoxyPack offers full customization with your logo and artwork.",
      },
      {
        question: "Are these boxes durable enough for shipping?",
        answer:
          "Yes, their six-corner structure adds strength and product protection.",
      },
      {
        question: "Do you provide wholesale pricing?",
        answer:
          "Yes, we offer wholesale side lock six corner boxes at discounted rates.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. All materials are recyclable and responsibly sourced.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create cardboard side lock six corner boxes that combine durability, function, and visual appeal. Our expert team delivers packaging that enhances your product’s look and strengthens your brand image.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Side Lock Six Corner Box Packaging",
      paragraphs: [
        "Our cardboard side-lock six-corner boxes are designed for brands that value both style and strength. Featuring six connected panels and secure side locks, these boxes fold flat for easy storage and expand into a sturdy, elegant structure. Ideal for bakery, food, apparel, and gift packaging, they're widely used for their convenience and stability.",
        "At BoxyPack, we specialize in custom side lock six corner boxes tailored to your exact product dimensions and branding needs. Each box provides a strong base and interlocking corners that ensure reliability during handling and shipping. The smart folding mechanism saves space while giving your packaging a clean and premium finish.",
        "As a wholesale cardboard side lock six corner box supplier, we combine quality, versatility, and affordability. Whether you need printed versions for retail display or plain kraft styles for eco-focused brands, every design is made to perform at a competitive side lock six corner box price.",
      ],
    },
  },

  // Subcategory: Cardboard Regular Six Corner Box
  "cardboard-regular-six-corner-box": {
    name: "Cardboard Regular Six Corner Box",
    description:
      "Reliable, flexible, and stylish. Buy cardboard regular six-corner boxes online for secure packaging, fast assembly, and professional product presentation.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Six-corner foldable structure for secure assembly",
      "Durable cardboard for long-lasting product protection",
      "Smooth matte or glossy surface for visual appeal",
      "Fully customizable printing for logo and artwork",
      "Ships flat and assembles quickly for easy use",
      "Recyclable and eco-friendly materials",
      "Ideal for bakery, retail, and gift packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Cardboard / Kraft / Corrugated Paperboard",
        },
        { label: "Structure", value: "Six-Corner Foldable Design" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Regular Six Corner Box", [
      {
        question: "What are regular six corner boxes used for?",
        answer: "They're ideal for bakery, food, apparel, and gift packaging.",
      },
      {
        question: "Can I customize these boxes with my logo?",
        answer:
          "Yes, BoxyPack offers full-color printing for custom six-corner boxes.",
      },
      {
        question: "Are they strong enough for shipping?",
        answer:
          "Yes, the six-corner design provides excellent durability and balance.",
      },
      {
        question: "Do you offer bulk order discounts?",
        answer:
          "Yes, we provide wholesale regular six-corner boxes at affordable rates.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. All materials are recyclable and sourced responsibly.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to create cardboard regular six-corner boxes that blend structure, simplicity, and quality. Our team builds packaging that looks great, protects perfectly, and elevates your brand’s reputation.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Regular Six-Corner Box Packaging",
      paragraphs: [
        "Our cardboard regular six-corner boxes are known for their solid structure, easy setup, and versatile use across industries. Designed with six connected panels, these boxes offer a strong base and foldable sides that make assembly fast and storage efficient. Perfect for bakery items, apparel, gifts, or retail packaging, they bring together practicality and elegance.",
        "At BoxyPack, we design custom regular six-corner boxes to suit your specific product needs. The structure supports both light and medium-weight products, ensuring safety during handling and shipping. Each box can be fully customized with logos, brand colors, or special finishes to give your packaging a premium edge.",
        "As a wholesale cardboard regular six-corner box supplier, we ensure top-tier quality, quick production, and competitive pricing. Whether you need plain kraft boxes or printed designs, we maintain durability, visual appeal, and affordability in every order, offering the best regular six-corner box price for all quantities.",
      ],
    },
  },

  // Subcategory: Cardboard Seal End Auto Bottom Box
  "cardboard-seal-end-auto-bottom-box": {
    name: "Cardboard Seal End Auto Bottom Box",
    description:
      "Fast, firm, and dependable. Buy cardboard seal-end auto bottom boxes online for strong, efficient, and professional packaging that speeds up assembly and delivery.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Pre-glued auto bottom for quick setup",
      "Sealed ends for added product protection",
      "Durable cardboard structure for lasting strength",
      "Fully printable exterior for brand customization",
      "Available in matte, gloss, or soft-touch finish",
      "Recyclable and eco-friendly materials",
      "Perfect for retail, food, and pharmaceutical packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Cardboard / Kraft / Corrugated Paperboard",
        },
        { label: "Structure", value: "Seal End with Auto Bottom Lock" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Seal End Auto Bottom Box", [
      {
        question: "What are seal-end auto bottom boxes used for?",
        answer:
          "They're ideal for retail, food, and cosmetic packaging that needs quick setup and secure closure.",
      },
      {
        question: "Can I add my brand logo and design?",
        answer:
          "Yes, BoxyPack provides full-color printing for custom seal-end auto bottom boxes.",
      },
      {
        question: "Are these boxes strong enough for heavy items?",
        answer:
          "Yes, the auto bottom structure ensures high weight-holding capacity.",
      },
      {
        question: "Do you offer bulk pricing?",
        answer:
          "Absolutely. We supply wholesale seal-end auto bottom boxes at discounted rates.",
      },
      {
        question: "Are these boxes recyclable?",
        answer: "Yes, all our materials are recyclable and eco-safe.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to design cardboard seal end auto bottom boxes that combine speed, strength, and quality. Our packaging experts help you build durable, stylish boxes that perform beautifully on every shelf and shipment.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Seal End Auto Bottom Box Packaging",
      paragraphs: [
        "Our cardboard seal-end auto bottom boxes are engineered for efficiency and protection. With a pre-glued bottom and sealed ends, these boxes snap into shape instantly, saving valuable packing time. Perfect for high-volume product lines, they combine strength, convenience, and clean presentation.",
        "At BoxyPack, we specialize in custom seal-end auto bottom boxes that support fast production and branding consistency. Whether you're packaging food items, pharmaceuticals, or retail goods, these boxes provide a secure structure that holds weight effectively. The automatic bottom ensures stability, while the sealed top gives a neat, tamper-proof closure.",
        "As a wholesale cardboard seal-end auto bottom box supplier, we offer flexible sizes and printing options. Choose between matte, gloss, or soft-touch finishes and add your logo for a professional, shelf-ready appearance, all at an affordable cardboard seal end auto bottom box price.",
      ],
    },
  },

  // Subcategory: Cardboard Auto Bottom Tray
  "cardboard-auto-bottom-tray": {
    name: "Cardboard Auto Bottom Tray",
    description:
      "Simple, sturdy, and space-efficient. Buy cardboard auto bottom trays online for secure packaging, fast assembly, and perfect retail or food product presentation.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Pre-glued bottom for quick and easy setup",
      "Open-top tray for product visibility",
      "Durable cardboard construction for stability",
      "Smooth matte or glossy finish for branding appeal",
      "Custom printing options for logos and designs",
      "100% recyclable and eco-friendly materials",
      "Perfect for bakery, food, and retail packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Cardboard / Kraft / Corrugated Paperboard",
        },
        {
          label: "Structure",
          value: "Auto Bottom Tray (Pre-glued for quick assembly)",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Auto Bottom Tray", [
      {
        question: "What are cardboard auto bottom trays used for?",
        answer:
          "They're ideal for bakery, food, and retail packaging that needs a quick setup.",
      },
      {
        question: "Can I print my logo and design on the tray?",
        answer:
          "Yes, BoxyPack offers full-color printing for custom auto bottom trays.",
      },
      {
        question: "Are these trays strong enough for heavy products?",
        answer:
          "Yes, their auto-lock bottom ensures durability and weight stability.",
      },
      {
        question: "Do you provide bulk order discounts?",
        answer:
          "Yes, we offer wholesale auto bottom trays with tiered pricing.",
      },
      {
        question: "Are these trays eco-friendly?",
        answer:
          "Absolutely. They're made from recyclable and biodegradable materials.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Partner with BoxyPack to create cardboard auto bottom trays that deliver speed, strength, and style. Our team builds packaging that works efficiently, protects your products, and reflects your brand’s excellence.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Auto Bottom Tray Packaging",
      paragraphs: [
        "Our cardboard auto bottom trays are designed for speed, stability, and style. Built with a pre-glued auto-lock bottom, these trays pop into shape instantly, making packaging quick and efficient. Ideal for bakery goods, cosmetics, retail products, and lightweight items, they offer a strong structure without extra effort.",
        "At BoxyPack, we create custom auto bottom trays that combine visual appeal with practical design. Each tray holds its shape firmly, ensuring your products stay safe during storage and display. The open-top design allows easy product access while showcasing your branding on all sides.",
        "As a wholesale cardboard auto bottom tray supplier, we focus on premium quality at an affordable price. Whether you need printed trays for branding or plain kraft options for eco-friendly presentation, our packaging ensures consistency, functionality, and competitive cardboard auto bottom tray prices across all orders.",
      ],
    },
  },

  // Subcategory: Cardboard Two Piece Box
  "cardboard-two-piece-box": {
    name: "Cardboard Two Piece Box",
    description:
      "Elegant, sturdy, and timeless. Buy cardboard two-piece boxes online for luxury presentation, secure packaging, and a premium unboxing experience.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Classic two-piece lid and base design",
      "Premium cardboard for strength and structure",
      "Smooth matte, gloss, or soft-touch surface finish",
      "Fully printable area for brand logo and artwork",
      "Easy to assemble and reusable structure",
      "Eco-friendly materials and recyclable design",
      "Ideal for gifts, cosmetics, and retail packaging",
    ],

    customization: {
      details: [
        { label: "Material Type", value: "Cardboard / Kraft / Paperboard" },
        { label: "Structure", value: "Two-Piece Rigid or Foldable Lid & Base" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Two Piece Box", [
      {
        question: "What are two-piece boxes used for?",
        answer:
          "They're perfect for gifts, apparel, cosmetics, and premium retail packaging.",
      },
      {
        question: "Can I add my brand logo and artwork?",
        answer:
          "Yes, BoxyPack offers full-color printing for custom two-piece boxes.",
      },
      {
        question: "Are these boxes reusable?",
        answer: "Yes, their sturdy build makes them reusable and long-lasting.",
      },
      {
        question: "Do you provide bulk pricing?",
        answer:
          "Yes, we offer wholesale two-piece boxes with volume discounts.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. All materials are recyclable and sourced sustainably.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Contact BoxyPack to design cardboard two-piece boxes that elevate your brand’s presentation. Our experts craft elegant, durable packaging that delivers both luxury and practicality in every box.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Two-Piece Box Packaging",
      paragraphs: [
        "Our cardboard two-piece boxes bring sophistication and strength together. Designed with a separate base and lid, these boxes are perfect for products that deserve a memorable reveal. The two-piece construction makes packaging easy, while the rigid cardboard material provides durability and protection for every product.",
        "At BoxyPack, we create custom two-piece boxes that fit your brand and product perfectly. Whether you're packaging jewelry, apparel, cosmetics, or gift sets, these boxes highlight your product's elegance while keeping it safe. The structure ensures your items stay secure during shipping or display without compromising appearance.",
        "As a wholesale cardboard two-piece box supplier, we provide premium packaging options at competitive rates. From minimalist kraft designs to luxury printed finishes, our boxes deliver quality, style, and value all at an affordable cardboard two-piece box price that supports both small and bulk orders.",
      ],
    },
  },

  // Subcategory: Cardboard Cigarette Box
  "cardboard-cigarette-box": {
    name: "Cardboard Cigarette Box",
    description:
      "Durable, compact, and brand-ready. Buy cardboard cigarette boxes online for premium protection, professional presentation, and custom printing that sets your brand apart.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Compact flip-top or tuck-end box design",
      "Premium cardboard for shape and freshness retention",
      "Custom printing for brand logo and artwork",
      "Matte, gloss, or soft-touch finish options",
      "Complies with standard packaging dimensions",
      "Eco-friendly and recyclable paperboard",
      "Ideal for cigarettes, herbal sticks, or CBD smokes",
    ],

    customization: {
      details: [
        { label: "Material Type", value: "Cardboard / Paperboard / Kraft" },
        { label: "Structure", value: "Flip-Top / Tuck-End / Slide Style" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Cigarette Box", [
      {
        question: "What are cardboard cigarette boxes used for?",
        answer:
          "They're designed to package and protect cigarettes or herbal smokes.",
      },
      {
        question: "Can I print branding and warnings on the box?",
        answer:
          "Yes, BoxyPack provides full customization, including logo, artwork, and text.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Yes, all cardboard cigarette boxes are made from recyclable materials.",
      },
      {
        question: "Do you offer wholesale rates?",
        answer:
          "Yes, we offer wholesale cigarette boxes with cost-effective bulk pricing.",
      },
      {
        question: "What finishes are available?",
        answer:
          "You can choose from matte, gloss, or soft-touch coatings for a professional look.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Partner with BoxyPack to design cardboard cigarette boxes that protect your products and promote your brand. Our packaging experts craft strong, elegant, and customizable boxes made to impress and perform.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Cigarette Box Packaging",
      paragraphs: [
        "Our cardboard cigarette boxes combine strength, safety, and sleek design. Made from durable paperboard, these boxes are perfect for keeping cigarettes fresh, organized, and visually appealing. The precise fold-and-lock structure ensures a snug fit while maintaining a polished retail look.",
        "At BoxyPack, we design custom cigarette boxes that highlight your brand's identity. From soft-touch matte finishes to glossy printed designs, each box can be personalized with your logo, color scheme, and compliance details. Ideal for tobacco brands, dispensaries, and retailers, our packaging enhances shelf appeal and consumer trust.",
        "As a wholesale cardboard cigarette box supplier, we focus on high-quality production with fast turnaround and competitive pricing. Whether you need printed cartons for premium lines or eco-friendly kraft versions for sustainable packaging, we ensure consistency, quality, and value all at a reasonable cardboard cigarette box price.",
      ],
    },
  },

  // Subcategory: Cardboard Bookend Box
  "cardboard-bookend-box": {
    name: "Cardboard Bookend Box",
    description:
      "Smart, sleek, and protective. Buy cardboard bookend boxes online for stylish packaging that offers strength, structure, and an elegant display for your products.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Book-style design with secure front closure",
      "Premium cardboard for strength and protection",
      "Full-color printing for logo and design artwork",
      "Available in matte, gloss, or soft-touch finishes",
      "Easy to assemble and highly durable structure",
      "100% recyclable and eco-friendly materials",
      "Ideal for electronics, gifts, and stationery packaging",
    ],

    customization: {
      details: [
        { label: "Material Type", value: "Cardboard / Kraft / Paperboard" },
        { label: "Structure", value: "Bookend Fold-Over Front Panel Design" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Bookend Box", [
      {
        question: "What are cardboard bookend boxes used for?",
        answer:
          "They're ideal for electronics, cosmetics, and premium retail packaging.",
      },
      {
        question: "Can I print my brand logo and design?",
        answer: "Yes, BoxyPack offers full printing for custom bookend boxes.",
      },
      {
        question: "Are these boxes strong enough for heavy products?",
        answer:
          "Yes, their book-style fold provides excellent strength and structure.",
      },
      {
        question: "Do you provide wholesale pricing?",
        answer:
          "Yes, we offer wholesale bookend boxes with volume-based discounts.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Absolutely. All materials are recyclable and responsibly sourced.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Share your content plan—we’ll craft bookend boxes that engage from the first touch.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Bookend Box Packaging",
      paragraphs: [
        "Our cardboard bookend boxes are designed for brands that need both protection and presentation. Built with a sturdy fold-over front panel, these boxes resemble a book cover, offering a secure seal and premium appeal. Ideal for electronics, cosmetics, stationery, or gift items, they make unboxing smooth, safe, and memorable.",
        "At BoxyPack, we specialize in custom bookend boxes that align perfectly with your brand's design and product requirements. Each box opens like a book, providing easy access while maintaining a refined appearance. The structure ensures durability, while the customizable printing surface enhances your brand's presence.",
        "As a wholesale cardboard bookend box supplier, we combine creative design with cost efficiency. Whether you need minimalist kraft boxes or bold, full-color printed versions, our packaging delivers consistent quality and affordable value with a cardboard bookend box price that suits every budget.",
      ],
    },
  },

  // Subcategory: Cardboard Double Wall Frame Tray
  "cardboard-double-wall-frame-tray": {
    name: "Cardboard Double Wall Frame Tray",
    description:
      "Sturdy, stylish, and secure. Buy cardboard double-wall frame trays online for extra strength, refined structure, and premium presentation across every product category.",
    heroImage: "Mailer-Box_1_ujqhhx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Double-wall structure for extra protection",
      "Reinforced corners for strength and durability",
      "Full printing options for brand customization",
      "Matte, gloss, or soft-touch finish available",
      "Premium appearance for product display",
      "Eco-friendly and fully recyclable materials",
      "Ideal for retail, bakery, and apparel packaging",
    ],

    customization: {
      details: [
        { label: "Material Type", value: "Cardboard / Kraft / Paperboard" },
        { label: "Structure", value: "Double-Wall Reinforced Frame Design" },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Glossy / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L x W x H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    faq: buildFaq("Cardboard Double Wall Frame Tray", [
      {
        question: "What are double-wall frame trays used for?",
        answer:
          "They're ideal for bakery, clothing, and retail packaging that needs a sturdy structure.",
      },
      {
        question: "Can I print my logo and artwork?",
        answer:
          "Yes, BoxyPack offers full-color printing for custom frame tray boxes.",
      },
      {
        question: "Are these trays durable enough for shipping?",
        answer:
          "Yes, their reinforced double walls provide excellent stability and strength.",
      },
      {
        question: "Do you provide wholesale discounts?",
        answer:
          "Yes, we supply wholesale double-wall frame trays with bulk pricing benefits.",
      },
      {
        question: "Are these trays eco-friendly?",
        answer:
          "Absolutely. All materials are recyclable and made from sustainable sources.",
      },
    ]),
    cta: {
      title: "Strong Designs, Lasting Impressions",
      description:
        "Partner with BoxyPack to create cardboard double-wall frame trays that combine power, polish, and presentation. Our packaging experts deliver designs that secure your products and strengthen your brand image with every order..",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cardboard Double-Wall Frame Tray Packaging",
      paragraphs: [
        "Our cardboard double-wall frame trays are built for strength and precision. With double-thick side walls and reinforced corners, these trays offer unmatched durability and visual appeal. Designed for retail, food, and gift packaging, they deliver superior protection while presenting your products in a clean, elegant frame-style layout.",
        "At BoxyPack, we create custom double-wall frame trays tailored to fit your brand and product dimensions. The double-wall construction enhances rigidity, ensuring your products remain intact during shipping or display. Whether you choose kraft material for natural charm or full-color printing for luxury branding, each box is crafted to perfection.",
        "As a wholesale cardboard double-wall frame tray supplier, we focus on quality, consistency, and value. Each tray combines smooth finish options, eco-friendly materials, and professional craftsmanship, all available at a competitive double-wall frame tray price for bulk and retail orders.",
      ],
    },
  },
  // ========== CORRUGATED BOXES SUBCATEGORIES ==========
  // Subcategory: Corrugated Mailer Box
  "corrugated-mailer-box": {
    name: "Corrugated Mailer Box",
    description:
      "Strong, smart, and stylish. Buy corrugated mailer boxes online for secure delivery, premium look, and versatile packaging trusted by brands worldwide.",
    heroImage: "Mailer-Box-3_oct2ws",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Secure fold-over design for easy assembly",
      "Durable corrugated structure for protection during transit",
      "Full-color print options for brand identity",
      "Matte or glossy coating for surface finish",
      "Lightweight yet sturdy for reduced shipping cost",
      "Eco-friendly and recyclable material options",
      "Perfect for e-commerce, gifts, and subscription packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Fold-Over Interlocking Mailer Design",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    faq: buildFaq("Corrugated Mailer Box", [
      {
        question: "What are corrugated mailer boxes used for?",
        answer:
          "They're perfect for online retail, subscription kits, and promotional packaging.",
      },
      {
        question: "Can I print my logo or full artwork?",
        answer:
          "Yes, BoxyPack offers full-color printing on both interior and exterior surfaces.",
      },
      {
        question: "Are corrugated mailer boxes good for shipping?",
        answer:
          "Absolutely. Their sturdy fold-over design keeps items secure during transport.",
      },
      {
        question: "Do you provide wholesale pricing?",
        answer:
          "Yes, we offer corrugated mailer box wholesale rates with flexible order volumes.",
      },
      {
        question: "Are the materials eco-friendly?",
        answer:
          "Yes, all our mailer boxes are recyclable and made from sustainable sources.",
      },
    ]),
    cta: {
      title: "Protect Every Parcel, Present Every Brand",
      description:
        "Partner with BoxyPack to create corrugated mailer boxes that combine safety, sophistication, and sustainability. Our expert team ensures every box you order supports your brand story and delivers lasting impact from unboxing to delivery.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Corrugated Mailer Box Packaging",
      paragraphs: [
        "Our corrugated mailer boxes are designed for strength and presentation. With a rigid fold-over structure and interlocking flaps, they offer the best balance of protection and style for e-commerce, retail, and subscription packaging. Each box opens with smooth precision, keeping your products safe while making an instant impression.",
        "At BoxyPack, we design custom corrugated mailer boxes that fit your product shape, branding style, and shipping needs. Whether you choose kraft texture for an organic look or vibrant printed mailers for colorful branding, every order is made to exact standards for durability and design impact.",
        "As a printed corrugated mailer box supplier, we ensure consistent quality and affordability. From bulk corrugated mailer box wholesale options to short-run custom orders, each box delivers exceptional finish, eco-friendly material, and reliable strength at the best corrugated mailer box price.",
      ],
    },
  },

  // Subcategory: Corrugated Gable Box
  "corrugated-gable-box": {
    name: "Corrugated Gable Box",
    description:
      "Structurally sound corrugated gable boxes with integrated handles for foodservice, experiential kits, and corporate gifting on the move.",
    heroImage: "Box-6_vm3fmh",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built-in handle for easy carrying",
      "Sturdy corrugated structure for added protection",
      "Ideal for bakery, food, and gift packaging",
      "Full-color printing for branding and promotions",
      "Flat-packed for easy storage and assembly",
      "Eco-friendly and recyclable materials",
      "Available in matte, gloss, or natural kraft finish",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Gable-Top with Foldable Handle",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Glossy / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    faq: buildFaq("Corrugated Gable Box", [
      {
        question: "What are corrugated gable boxes used for?",
        answer:
          "They're ideal for food packaging, gifts, bakery items, and retail products.",
      },
      {
        question: "Can I print my logo or artwork?",
        answer:
          "Yes, BoxyPack provides full-color printing for interior and exterior surfaces.",
      },
      {
        question: "Are these boxes strong enough for transport?",
        answer:
          "Yes, the corrugated structure ensures reliable protection and easy carrying.",
      },
      {
        question: "Do you offer bulk discounts?",
        answer:
          "Absolutely, our corrugated gable box wholesale options include flexible bulk pricing.",
      },
      {
        question: "Are the boxes eco-friendly?",
        answer:
          "Yes, every box is recyclable and made from responsibly sourced materials.",
      },
    ]),
    cta: {
      title: "Packaging That Carries Your Brand Forward",
      description:
        "Partner with BoxyPack to design corrugated gable boxes that blend portability, style, and strength. Our team crafts packaging that protects your goods, promotes your image, and leaves a lasting impression with every handle.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Corrugated Gable Box Packaging",
      paragraphs: [
        "Our corrugated gable boxes combine convenience with strength. The integrated handle design makes them easy to carry, while the corrugated walls ensure lasting protection. Ideal for bakeries, takeout meals, gifts, and retail display packaging, these boxes bring both function and refined visual style.",
        "At BoxyPack, we build custom corrugated gable boxes that reflect your brand's image and product type. Whether you prefer a natural kraft texture for rustic appeal or full-color printed finishes for promotional packaging, every box is designed to impress and perform.",
        "As a corrugated gable box wholesale supplier, we focus on consistent quality, smooth folding, and affordable pricing. Our gable boxes are lightweight yet tough, made from recyclable corrugated sheets, and available in custom sizes that balance presentation and practicality. You get durable packaging at a competitive corrugated gable box price tailored to your volume needs.",
      ],
    },
  },

  // Subcategory: Corrugated Double Locked Wall Lid Box
  "corrugated-double-locked-wall-lid-box": {
    name: "Corrugated Double Locked Wall Lid Box",
    description:
      "Strong, secure, and sophisticated. Buy corrugated double locked wall lid boxes online for premium product protection, smart structure, and professional packaging made to impress.",
    heroImage: "shipping-box_jyysru",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Double-locked walls for extra rigidity and stability",
      "Secure lid closure for safe transport and stacking",
      "Ideal for fragile or premium product packaging",
      "Full-color printing for branding and marketing appeal",
      "Available in kraft, white, or coated finishes",
      "Eco-friendly, recyclable corrugated materials",
      "Perfect for electronics, gifts, and retail display packaging",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Double-Locked Wall with Fitted Lid",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Matte / Glossy / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    faq: buildFaq("Corrugated Double Locked Wall Lid Box", [
      {
        question: "What are corrugated double locked wall lid boxes used for?",
        answer:
          "They're ideal for fragile, heavy, or high-end retail packaging.",
      },
      {
        question: "Can I customize my box size and print?",
        answer:
          "Yes, BoxyPack offers complete customization including size, print, and finish.",
      },
      {
        question: "Are these boxes suitable for shipping?",
        answer:
          "Absolutely. The double-wall construction ensures maximum strength during transit.",
      },
      {
        question: "Do you provide wholesale pricing?",
        answer:
          "Yes, we offer wholesale corrugated wall lid packaging with bulk order savings.",
      },
      {
        question: "Are these boxes eco-friendly?",
        answer:
          "Yes, all our materials are fully recyclable and sourced from sustainable suppliers.",
      },
    ]),
    cta: {
      title: "Lock in Strength, Unlock Presentation",
      description:
        "Partner with BoxyPack to create corrugated double locked wall lid boxes that combine durability and design. Our experts help you package every product with precision, safety, and standout presentation built for brands that value quality in every detail.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Corrugated Double-Locked Wall Lid Box Packaging",
      paragraphs: [
        "Our corrugated double-locking wall lid boxes are built for superior durability and presentation. Designed with double-thick walls and a secure locking lid system, they keep products firmly enclosed during transit and display. Perfect for electronics, glassware, and high-value items, these boxes provide dependable protection with a refined visual finish.",
        "At BoxyPack, we create custom corrugated wall lid boxes tailored to your brand and packaging needs. Choose Kraft for a natural, eco look or go for printed versions that highlight your logo and design. Every box is precision-cut for a perfect fit, ensuring strength and elegance in one design.",
        "As a wholesale corrugated wall lid packaging supplier, we focus on structural quality and cost efficiency. Our advanced manufacturing ensures smooth folds, clean edges, and sturdy locks at a competitive corrugated wall lid box cost, ideal for both small and bulk orders.",
      ],
    },
  },

  // Subcategory: Corrugated Seal End Auto Bottom Box
  "corrugated-seal-end-auto-bottom-box": {
    name: "Corrugated Seal End Auto Bottom Box",
    description:
      "Seal-end auto-bottom corrugated cartons built for high-speed fulfillment, compliance, and transit ruggedness.",
    heroImage: "Box-5_pdb8xw",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Auto-locking bottom for fast assembly and stability",
      "Seal-end top for secure product closure",
      "Durable corrugated build for heavy-duty use",
      "Full-color printing for promotional and retail packaging",
      "Ideal for industrial, cosmetic, and food products",
      "Eco-friendly and fully recyclable material options",
      "Available in kraft, white, or custom printed finishes",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Seal-End with Auto-Locking Bottom",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Glossy / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    faq: buildFaq("Corrugated Seal End Auto Bottom Box", [
      {
        question: "What are corrugated seal end auto bottom boxes used for?",
        answer:
          "They're ideal for packaging heavy or delicate products needing secure closure.",
      },
      {
        question: "Can I print branding on both sides?",
        answer: "Yes, BoxyPack offers inside and outside full-color printing.",
      },
      {
        question: "Are these boxes easy to assemble?",
        answer:
          "Yes, the auto-bottom design allows instant setup without glue or tape.",
      },
      {
        question: "Do you offer wholesale pricing?",
        answer:
          "Absolutely, we provide corrugated seal end auto bottom wholesale discounts for bulk orders.",
      },
      {
        question: "Are the materials recyclable?",
        answer:
          "Yes, all boxes are made from sustainable and recyclable corrugated materials.",
      },
    ]),
    cta: {
      title: "Strength Meets Speed in Every Fold",
      description:
        "Partner with BoxyPack to create corrugated seal end auto bottom boxes that deliver performance and precision. Our packaging solutions combine quick setup, strong build, and beautiful printing to protect your products and elevate your brand presence.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Corrugated Seal End Auto Bottom Box Packaging",
      paragraphs: [
        "Our corrugated seal-end auto bottom boxes are engineered for strength and convenience. The auto-locking base provides instant setup, while the seal-end top ensures a secure closure for shipping and retail use. Perfect for bulk items, food, cosmetics, and industrial products, these boxes combine reliability with sleek design.",
        "At BoxyPack, we produce custom corrugated seal end boxes that match your exact specifications. Choose from kraft or white finishes, single or double-wall options, and full-color printing to showcase your brand with precision. Each box is die-cut for consistent structure, ensuring easy assembly and dependable protection during every shipment.",
        "As a corrugated seal end auto bottom wholesale supplier, we deliver high-quality packaging that balances durability and design. You get flawless sealing performance, clean folds, and cost-effective production all at a competitive corrugated auto bottom box price for retail and bulk orders.",
      ],
    },
  },

  // Subcategory: Corrugated Auto Bottom Tray
  "corrugated-auto-bottom-tray": {
    name: "Corrugated Auto Bottom Tray",
    description:
      "Durable, versatile, and ready in seconds. Buy corrugated auto bottom trays online for fast assembly, strong structure, and professional presentation across all product categories.",
    heroImage: "shipping-box_jyysru",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Auto-locking base for fast setup and packing",
      "Strong corrugated walls for enhanced protection",
      "Ideal for display, food, and industrial packaging",
      "Full-color printing for brand recognition",
      "Lightweight and easy to stack or ship",
      "Eco-friendly and recyclable material options",
      "Available in kraft, white, or custom-printed finishes",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Auto-Locking Bottom Tray Design",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    faq: buildFaq("Corrugated Auto Bottom Tray", [
      {
        question: "What are corrugated auto bottom trays used for?",
        answer:
          "They’re used for food, retail, and shipping products that need a stable base support.",
      },
      {
        question: "Can I print logos or artwork on the tray?",
        answer:
          "Yes, BoxyPack offers full-color printing inside, outside, or both.",
      },
      {
        question: "Are these trays easy to assemble?",
        answer:
          "Yes, the auto bottom design locks instantly without glue or tape.",
      },
      {
        question: "Do you offer wholesale discounts?",
        answer:
          "Absolutely, we supply corrugated auto bottom tray wholesale orders with bulk pricing.",
      },
      {
        question: "Are the trays eco-friendly?",
        answer:
          "Yes, all trays are made from recyclable corrugated cardboard and sustainable materials.",
      },
    ]),
    cta: {
      title: "Built Fast, Built Strong",
      description:
        "Partner with BoxyPack to design corrugated auto bottom trays that combine durability, speed, and brand style. Our experts deliver packaging that supports your workflow, protects your products, and creates a professional unboxing experience every time.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Corrugated Auto Bottom Tray Packaging",
      paragraphs: [
        "Our corrugated auto bottom trays are designed for efficiency and strength. The pre-glued base locks automatically when opened, allowing quick setup and secure product placement. Perfect for retail displays, food packaging, or industrial shipping, these trays combine practicality with a sleek appearance.",
        "At BoxyPack, we produce custom corrugated auto bottom trays that meet your brand and product needs. You can select kraft material for a natural, sustainable look or opt for printed finishes to highlight your brand identity. Every tray is die-cut precisely to maintain consistent quality and excellent stacking performance.",
        "As a corrugated auto bottom tray wholesale supplier, we provide durable and eco-friendly packaging solutions that simplify your process. Each tray delivers reliability, smooth folding, and a competitive corrugated auto bottom tray price ideal for retail, e-commerce, and manufacturing industries.",
      ],
    },
  },

  // Subcategory: Corrugated Two Piece Box
  "corrugated-two-piece-box": {
    name: "Corrugated Two Piece Box",
    description:
      "Elegant, durable, and perfectly fitted. Buy corrugated two-piece boxes online for premium protection, clean presentation, and reliable packaging suited for every product line.",
    heroImage: "Box-5_pdb8xw",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Separate the lid and base for clean product presentation",
      "Durable corrugated material for long-term protection",
      "Perfect for apparel, gifts, and retail packaging",
      "Full-color exterior and interior printing options",
      "Available in kraft, white, or premium finishes",
      "Recyclable and eco-friendly materials",
      "Custom sizes and design flexibility",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Two Piece (Lid and Base)",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Glossy / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    faq: buildFaq("Corrugated Two Piece Box", [
      {
        question: "What are corrugated two-piece boxes used for?",
        answer:
          "They’re used for gifts, retail packaging, apparel, and presentation boxes.",
      },
      {
        question: "Can I print both inside and outside surfaces?",
        answer: "Yes, BoxyPack offers complete dual-surface printing options.",
      },
      {
        question: "Are these boxes sturdy enough for shipping?",
        answer:
          "Yes, the corrugated material provides excellent protection during transit.",
      },
      {
        question: "Do you offer bulk or wholesale rates?",
        answer:
          "Absolutely, our corrugated two-piece box wholesale orders come with special pricing.",
      },
      {
        question: "Are they eco-friendly?",
        answer: "Yes, all materials are recyclable and responsibly sourced.",
      },
    ]),
    cta: {
      title: "Strong Build, Elegant Reveal",
      description:
        "Partner with BoxyPack to design corrugated two-piece boxes that showcase your products beautifully. Our packaging experts ensure every order delivers durability, precision, and timeless presentation that strengthens your brand with every unboxing.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Corrugated Two Piece Packaging",
      paragraphs: [
        "Our corrugated two piece boxes combine structure and sophistication. Designed with a separate base and lid, they provide a strong enclosure ideal for retail, gift, and e-commerce products. The rigid setup ensures long-lasting durability while maintaining a professional appearance.",
        "At BoxyPack, we create custom corrugated two-piece packaging that matches your product shape, branding, and design goals. Choose natural kraft for minimal appeal or full-color printed versions for bold branding. Each box is manufactured with precision folds and solid walls that protect contents and elevate your product display.",
        "As a corrugated two-piece box wholesale supplier, we deliver high-grade materials, flexible customization, and competitive pricing. Every box offers a balance between beauty and strength, ensuring you receive value at the right corrugated two-piece box price.",
      ],
    },
  },

  // Subcategory: Corrugated Brief Case Style Box
  "corrugated-brief-case-style-box": {
    name: "Corrugated Brief Case Style Box",
    description:
      "Professional, durable, and portable. Buy corrugated briefcase-style boxes online for modern packaging that combines protection, mobility, and sleek presentation for every industry.",
    heroImage: "Box-6_vm3fmh",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built-in handle for portable convenience",
      "Durable corrugated structure for long-term use",
      "Ideal for product kits, gifts, and documents",
      "Full-color printing available for branding and marketing",
      "Flat-packed for easy storage and quick assembly",
      "Eco-friendly and recyclable construction",
      "Available in matte, gloss, or kraft finishes",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Fold-Over Brief Case with Carry Handle",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
  },
  overview: {
    heading: "Product Overview",
    title: "Custom Corrugated Brief Case Packaging",
    paragraphs: [
      "Our corrugated briefcase-style boxes are crafted for brands that value strength and sophistication. Featuring a fold-over lid with a built-in handle, these boxes are ideal for product kits, promotional sets, and secure document packaging. Their sturdy corrugated build ensures every item stays safe while delivering a clean, professional appearance.",
      "At BoxyPack, we produce custom corrugated briefcase packaging to fit your exact dimensions, design style, and branding vision. Choose natural kraft for simplicity or full-color printed surfaces for a bold corporate look. Each box is precision-cut with smooth folds, locking flaps, and a comfortable carry handle for effortless usability.",
      "As a wholesale corrugated briefcase box supplier, we offer strong, eco-friendly materials, consistent quality, and affordable pricing. Whether for business presentations or retail products, each order is crafted with care and backed by our competitive corrugated briefcase box price.",
    ],
  },
  faq: buildFaq("Corrugated Brief Case Style Box", [
    {
      question: "What are corrugated briefcase-style boxes used for?",
      answer:
        "They’re perfect for corporate kits, product samples, and promotional packaging.",
    },
    {
      question: "Can I customize printing and handle design?",
      answer:
        "Yes, BoxyPack offers full-color printing and handle customization options.",
    },
    {
      question: "Are these boxes strong enough for heavy products?",
      answer:
        "Yes, the corrugated construction provides excellent load-bearing capacity.",
    },
    {
      question: "Do you provide wholesale pricing?",
      answer:
        "Absolutely, our wholesale corrugated briefcase boxes include bulk discounts.",
    },
    {
      question: "Are these boxes eco-friendly?",
      answer:
        "Yes, all materials are recyclable and made from sustainable sources.",
    },
  ]),
  cta: {
    title: "Carry Confidence with Every Box",
    description:
      "Partner with BoxyPack to create corrugated brief case style boxes that combine function and finesse. Our packaging experts design solutions that move your brand forward with every handle, fold, and finish made for lasting impact.",
  },

  // Subcategory: Corrugated Full Flap Shipping Box
  "corrugated-full-flap-shipping-box": {
    name: "Corrugated Full Flap Shipping Box",
    description:
      "Tough, practical, and secure. Buy corrugated full flap shipping boxes online for heavy-duty protection, reliable sealing, and premium performance during storage and transit.",
    heroImage: "shipping-box_jyysru",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Full-flap overlap design for superior protection",
      "Ideal for heavy or fragile product shipments",
      "Strong corrugated structure prevents crushing and tearing",
      "Full-color printing for branded packaging options",
      "Suitable for e-commerce, warehouse, and retail use",
      "Eco-friendly and 100% recyclable materials",
      "Available in kraft, white, or coated finishes",
    ],

    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "32ECT-44ECT corrugated kraft with extended flaps for double-layer strength",
        },
        {
          label: "Structure",
          value:
            "Full-overlap slotted carton (FOL) with heavy-duty stapled or taped seams",
        },
        {
          label: "Thickness",
          value:
            'Single or double wall board 3/16"-1/4" based on freight requirements',
        },
        {
          label: "Finish",
          value:
            "Kraft exterior, flood color branding, moisture-resistant spray, warning marks",
        },
        {
          label: "Printing",
          value:
            "Large-format flexo up to 3 colors or digital branding on top panels",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Shippers from 10" x 8" x 6" to 30" x 18" x 16"',
        },
        {
          label: "Quantity",
          value: "Logistics programs from 250 corrugated FOL cartons",
        },
      ],
    },
    faq: buildFaq("Corrugated Full Flap Shipping Box", [
      {
        question: "What are corrugated full flap shipping boxes used for?",
        answer:
          "They’re ideal for heavy items, industrial goods, and long-distance shipping.",
      },
      {
        question: "Can I print my company logo on the boxes?",
        answer:
          "Yes, BoxyPack offers full-color custom printing on all box surfaces.",
      },
      {
        question: "Are these boxes suitable for stacking?",
        answer:
          "Absolutely, their double-flap structure provides high stacking strength.",
      },
      {
        question: "Do you provide wholesale discounts?",
        answer:
          "Yes, our wholesale corrugated shipping box supplier rates include bulk pricing.",
      },
      {
        question: "Are these boxes recyclable?",
        answer:
          "Yes, all materials used are recyclable and sourced from sustainable paperboard.",
      },
    ]),
    cta: {
      title: "Built to Ship, Made to Last",
      description:
        "Partner with BoxyPack to design corrugated full flap shipping boxes that combine endurance and efficiency. Our team ensures every box you order protects your products, supports your logistics, and strengthens your brand reputation with every shipment.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Corrugated Full Flap Shipping Boxes",
      paragraphs: [
        "Our corrugated full flap shipping boxes are engineered for maximum durability and protection. The overlapping flaps provide double-layer strength, creating an extra-tight seal that safeguards your products against impact, dust, and moisture. Perfect for logistics, e-commerce, and industrial shipments, these boxes ensure reliable performance for every delivery.",
        "At BoxyPack, we create custom corrugated shipping boxes tailored to your product size, weight, and brand design. Choose Kraft for natural appeal or white printed versions for a clean, professional presentation. Each box is precision-cut to guarantee perfect closure and stacking strength for consistent handling.",
        "As a wholesale corrugated shipping box supplier, we focus on dependable quality, eco-friendly materials, and value pricing. Our production process ensures consistent build, smooth folds, and competitive corrugated full flap shipping box price across all order sizes.",
      ],
    },
  },

  // Subcategory: Stand Up Pouche
  "stand-up-pouche": {
    name: "Stand Up Pouche",
    description:
      "Self-standing mylar pouches that combine barrier performance with shelf-ready presentation for food, wellness, and lifestyle brands.",
    heroImage: "standup-zip-lock-myler-box_dlgobk",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Corrugated Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Full Flap Overlap Shipping Design",
        },
        {
          label: "Thickness",
          value: "E-Flute / B-Flute / Double-Wall Options",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    faq: buildFaq("Stand Up Pouches", [
      {
        question: "What zipper options are available for stand up pouches?",
        answer:
          "We offer standard press-to-close, child-resistant, and slider zippers. Each option is tested for seal integrity to match your product requirements.",
      },
      {
        question:
          "Can stand up pouches support clear windows or metallic finishes?",
        answer:
          "Yes. We layer films to include transparent windows, metallics, or holographic effects while maintaining barrier performance.",
      },
      {
        question: "How are shelf-life requirements handled?",
        answer:
          "We select laminate structures based on oxygen and moisture sensitivity, then validate them through lab testing to confirm shelf-life goals.",
      },
    ]),
    cta: {
      title: "Ready to Launch Stand-Up Pouches?",
      description:
        "Share your product requirements and we'll engineer stand-up pouches that protect freshness and elevate shelf appeal.",
    },
    overview: {
      heading: "Product Overview",
      title: "Stand-Up Pouches Built for Shelf Impact",
      paragraphs: [
        "Stand-up pouches balance barrier protection with flexible merchandising. We tailor laminate stacks, gusset styles, and closures so your products stay fresh while commanding attention on the shelf.",
        "From small batch launches to national rollouts, we offer digital and gravure printing that keeps gradients crisp, metallic accents vibrant, and regulatory copy clear.",
        "Whether you’re targeting retail aisles or e-commerce fulfillment, our team supports prototyping, testing, and production scaling to keep launches on schedule.",
      ],
    },
  },

  // Subcategory: Kraft Shopping Bag
  "kraft-shopping-bag": {
    name: "Kraft Shopping Bag",
    description:
      "Durable kraft shopping bags with reinforced handles that deliver sustainable, on-the-go branding for retail and events.",
    heroImage: "kraft-shopping-bag_otahpn",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "120gsm-200gsm natural kraft paper with recycled fiber content",
        },
        {
          label: "Structure",
          value: "Square-bottom kraft bag with twisted paper or flat handles",
        },
        {
          label: "Thickness",
          value: "120gsm / 157gsm / 200gsm with 600gsm reinforced base inserts",
        },
        {
          label: "Finish",
          value:
            "Natural kraft, water-based varnish, spot white ink, foil logos",
        },
        {
          label: "Printing",
          value:
            "Flexo 2-3 colors or offset full-bleed artwork on kraft stocks",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Retail sizes from 8" x 4" x 10" to 16" x 6" x 14"',
        },
        {
          label: "Quantity",
          value: "Custom kraft bag orders beginning at 250 units",
        },
      ],
    },
    faq: buildFaq("Kraft Shopping Bags", [
      {
        question: "Can kraft shopping bags support heavy merchandise?",
        answer:
          "We reinforce handles and bases to match your product weight, and can add cardboard inserts for extra support with heavier goods.",
      },
      {
        question: "Are there sustainable ink and coating options?",
        answer:
          "Yes. We print with water-based or soy inks and offer aqueous coatings to keep the bag recyclable and eco-friendly.",
      },
      {
        question: "Do you provide custom handle colors or materials?",
        answer:
          "We source twisted paper, flat handles, or specialty cords in custom colors to align with your brand palette.",
      },
    ]),
    cta: {
      title: "Ready to Refresh Your Kraft Shopping Bags?",
      description:
        "Tell us about your retail program and we'll craft kraft shopping bags that carry weight while showcasing your brand.",
    },
    overview: {
      heading: "Product Overview",
      title: "Kraft Shopping Bags Made for Everyday Branding",
      paragraphs: [
        "Our kraft shopping bags extend your brand well beyond the checkout counter. We combine reinforced handles, sturdy gussets, and eco-friendly boards to keep every purchase secure and on-message.",
        "Mix and match finishes, handle styles, and interior printing to create an experience customers love to reuse, multiplying brand impressions with every outing.",
        "From boutique quantities to nationwide programs, we help you plan production, storage, and replenishment so each campaign stays on track and on budget.",
      ],
    },
  },

  // Subcategory: Paper Bag
  "paper-bag": {
    name: "Paper Bag",
    description:
      "Versatile paper bags designed with custom printing, coatings, and handle options for hospitality, retail, and promotional use.",
    heroImage: "paper-bag_q7nlaf",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Bleached art paper 128gsm-210gsm with lamination options",
        },
        {
          label: "Structure",
          value:
            "Pinch-bottom or euro tote construction with reinforced turn top",
        },
        {
          label: "Thickness",
          value: "128gsm / 157gsm / 210gsm paper with 900gsm base board",
        },
        {
          label: "Finish",
          value:
            "Gloss or matte lamination, spot UV, foil, ribbon or PP rope handles",
        },
        {
          label: "Printing",
          value:
            "Offset CMYK with Pantone precision and screen metallic overlays",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Premium totes from 6" x 3" x 8" to 18" x 6" x 15"',
        },
        {
          label: "Quantity",
          value: "Luxury paper bags starting at 300 units per design",
        },
      ],
    },
    faq: buildFaq("Paper Bags", [
      {
        question: "What handle styles are available for premium paper bags?",
        answer:
          "We offer ribbon, PP rope, cotton cord, and die-cut handles, each reinforced at the turn top to support your product weight.",
      },
      {
        question:
          "Can paper bags include special finishes like foil or spot UV?",
        answer:
          "Yes. We layer foils, spot UV, embossing, or soft-touch laminations to create a luxury feel that complements your brand.",
      },
      {
        question: "Do you provide custom interior printing?",
        answer:
          "We can print interiors with patterns, logos, or messaging, giving customers a branded moment when they look inside the bag.",
      },
    ]),
    cta: {
      title: "Ready to Design Premium Paper Bags?",
      description:
        "Partner with our team to create printed paper bags that align with your hospitality or retail experience.",
    },
    overview: {
      heading: "Product Overview",
      title: "Premium Paper Bags that Deliver Luxury",
      paragraphs: [
        "Premium paper bags pair high-end materials with statement finishes. We layer laminations, foils, and specialty handles to create a tactile experience that mirrors your brand positioning.",
        "Our structural team calibrates turn tops, bases, and gussets so each bag carries weight comfortably while maintaining crisp geometry.",
        "With meticulous color management and proofing, you can roll out cohesive programs across multiple locations or seasonal activations without compromising quality.",
      ],
    },
  },

  // Subcategory: PVC Bag
  "pvc-bag": {
    name: "PVC Bag",
    description:
      "Reusable PVC shopping bags that provide durable, wipe-clean performance and high-impact transparency for modern merchandising.",
    heroImage: "pvc-bag_jztehq",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "0.2 mm-0.4 mm clear, frosted, or tinted PVC film with optional fabric trims",
        },
        {
          label: "Structure",
          value:
            "Heat-sealed tote or pouch with gusseted base and zipper, snap, or drawstring closures",
        },
        {
          label: "Thickness",
          value:
            "0.2 mm / 0.3 mm / 0.4 mm PVC calibrated for load and compliance needs",
        },
        {
          label: "Finish",
          value:
            "Gloss clear, matte frost, metallic foil edging, and custom binding tape",
        },
        {
          label: "Printing",
          value:
            "Silk-screen, UV digital, or hot stamping for durable branding on PVC surfaces",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            'Formats from 8" x 3" x 6" cosmetic totes to 16" x 6" x 14" event-ready bags',
        },
        {
          label: "Quantity",
          value:
            "PVC bag runs starting at 500 pieces with custom hardware sourcing",
        },
      ],
    },
    faq: buildFaq("PVC Bags", [
      {
        question: "Are PVC bags compliant with clear bag policies?",
        answer:
          "We can produce PVC bags to meet stadium, event, or workplace transparency requirements, including custom sizing and closures.",
      },
      {
        question: "Can PVC bags include colored trims or fabric handles?",
        answer:
          "Yes. We add fabric bindings, colored trims, and custom hardware so you can tailor the look while keeping wipe-clean performance.",
      },
      {
        question: "How durable is the printing on PVC surfaces?",
        answer:
          "We use silk-screen or UV digital processes that fuse ink to the material, ensuring graphics resist peeling and abrasion.",
      },
    ]),
    cta: {
      title: "Ready for Custom PVC Bags?",
      description:
        "Bring us your merchandising goals and we'll build PVC bags that stay durable, on-brand, and policy compliant.",
    },
    overview: {
      heading: "Product Overview",
      title: "PVC Bags Crafted for Modern Merchandising",
      paragraphs: [
        "PVC bags combine wipe-clean durability with transparent branding opportunities. We customize thickness, trim, and hardware so each bag withstands everyday use while staying stylish.",
        "Whether you need event-ready totes, cosmetic pouches, or retail carriers, our finishing options—like colored binding and metallic accents—ensure your bags stand out.",
        "We manage compliance requirements for venues and workplaces, delivering clear bags that pass inspections while showcasing your identity.",
      ],
    },
  },

  // Subcategory: Booklets
  booklets: {
    name: "Booklets",
    description:
      "Custom printed booklets that deliver product education, storytelling, and promotional content with premium finish options.",
    heroImage: "booklets_xu1ahx",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "70lb-100lb gloss, silk, or uncoated text stocks with optional 10pt-14pt covers",
        },
        {
          label: "Structure",
          value:
            "Saddle-stitched, perfect bound, coil, or wire-o binding tailored to page count",
        },
        {
          label: "Thickness",
          value:
            "Interior text weights paired with sturdy cover calipers for longevity",
        },
        {
          label: "Finish",
          value:
            "Aqueous, soft-touch, spot UV, foil, or emboss to highlight key spreads",
        },
        {
          label: "Printing",
          value:
            "Digital or offset CMYK with Pantone matches and variable data capability",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            'Trim sizes from 5.5" x 8.5" to 9" x 12" plus custom dimensions',
        },
        {
          label: "Quantity",
          value: "Runs from 100 premium booklets to 25,000+ catalogs",
        },
      ],
    },
    faq: buildFaq("Booklets", [
      {
        question: "Which binding style should I choose for my booklet?",
        answer:
          "Saddle-stitch works best for shorter programs, perfect binding adds a square spine for larger page counts, and coil or wire-o keeps manuals lay-flat. We help you pick the ideal format.",
      },
      {
        question: "Can I mix paper stocks within one booklet?",
        answer:
          "Yes. We can combine heavier covers with lighter interior pages or insert specialty sheets like vellum to highlight key sections.",
      },
      {
        question: "Do you support variable data printing?",
        answer:
          "Our digital presses handle variable names, codes, and regional content so each booklet can be personalized for its audience.",
      },
    ]),
    cta: {
      title: "Ready to Print Custom Booklets?",
      description:
        "Share your content plan and we'll produce booklets with the binding, paper, and finishes that fit your brand story.",
    },
    overview: {
      heading: "Product Overview",
      title: "Booklets Tailored to Your Story",
      paragraphs: [
        "Booklets help you educate, inspire, and convert. We guide you through binding, page count, and stock selection so every spread reinforces your message.",
        "Choose from premium covers, specialty coatings, and custom inserts to highlight hero content, callouts, or promotions.",
        "With digital and offset production under one roof, we handle short runs, large campaigns, and versioned content while maintaining consistent color and quality.",
      ],
    },
  },

  // Subcategory: Brochures
  brochures: {
    name: "Brochures",
    description:
      "Tri-fold, bi-fold, and specialty brochures designed to communicate product benefits, pricing, and brand stories.",
    heroImage: "brochures_eal6ji",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value: "80lb-100lb gloss or silk text with optional 10pt cover wraps",
        },
        {
          label: "Structure",
          value:
            "Tri-fold, bi-fold, gate-fold, roll-fold, or custom layouts to fit content",
        },
        {
          label: "Thickness",
          value: "Text weights calibrated for fold integrity and premium feel",
        },
        {
          label: "Finish",
          value:
            "Gloss AQ, satin varnish, spot UV, foil accents, or soft-touch options",
        },
        {
          label: "Printing",
          value:
            "Digital for short runs or offset CMYK + PMS for high-accuracy branding",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Standard 8.5" x 11" folds to 11" x 17" or custom panel sizes',
        },
        {
          label: "Quantity",
          value:
            "Marketing runs from 250 brochures to large-scale event fulfillment",
        },
      ],
    },
    faq: buildFaq("Brochures", [
      {
        question: "Which fold style is best for my content?",
        answer:
          "Tri-folds organize information into simple panels, gate-folds create a reveal, and roll-folds handle long storytelling. We mock up options so you can see how content flows.",
      },
      {
        question: "Can brochures include spot finishes or foil?",
        answer:
          "Yes. Spot UV, foil, and soft-touch finishes highlight key visuals and give your brochure a premium touch.",
      },
      {
        question: "Do you handle direct-mail ready brochures?",
        answer:
          "We can trim, tab, and address brochures to meet postal regulations, making them ready for mail fulfillment.",
      },
    ]),
    cta: {
      title: "Ready to Launch Your Next Brochure?",
      description:
        "Send us your messaging goals and we'll craft brochures with folds and finishes that capture attention.",
    },
    overview: {
      heading: "Product Overview",
      title: "Brochures Engineered for Conversion",
      paragraphs: [
        "Brochures translate complex offerings into digestible panels. We map your narrative to the right fold sequence, ensuring readers uncover information in a logical rhythm.",
        "High-impact print techniques—spot UV, metallic hits, soft-touch coatings—ensure every surface feels deliberate and on-brand.",
        "From trade shows to direct mail, we handle finishing, fulfillment, and logistics so your brochures arrive ready to deploy.",
      ],
    },
  },

  // Subcategory: Tags Printing
  "tags-printing": {
    name: "Tags Printing",
    description:
      "Custom hang tags and product tags that reinforce branding, pricing, and care instructions across retail assortments.",
    heroImage: "tag-printing_mimtc4",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "14pt-22pt coated, uncoated, or kraft cover stocks with duplex options",
        },
        {
          label: "Structure",
          value:
            "Die-cut hang tags with drill holes, eyelets, stringing, or specialty shapes",
        },
        {
          label: "Thickness",
          value: '0.014" / 0.018" / 0.022" boards matched to product weight',
        },
        {
          label: "Finish",
          value:
            "Matte, gloss, soft-touch, foil, UV spot, painted edges, or varnished seams",
        },
        {
          label: "Printing",
          value:
            "Offset CMYK, digital short-run, or letterpress with metallic and embossing",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            'Custom die sizes from 1.5" x 2.5" to 4" x 6" storytelling tags',
        },
        {
          label: "Quantity",
          value: "Tag programs from 500 pieces with pre-stringing services",
        },
      ],
    },
    faq: buildFaq("Tags", [
      {
        question: "Can you pre-string tags before shipping?",
        answer:
          "Yes. Our finishing team can apply strings, ribbons, or metal chains so tags arrive ready to attach on the production line.",
      },
      {
        question: "Are specialty shapes or die cuts available?",
        answer:
          "We can create custom silhouettes, layered tags, or fold-over designs that align with your product storytelling while staying production-friendly.",
      },
      {
        question: "Do you offer variable data or numbering on tags?",
        answer:
          "We support variable barcodes, numbering, and personalization for limited editions or inventory tracking.",
      },
    ]),
    cta: {
      title: "Ready for Custom Branded Tags?",
      description:
        "Let us design and finish hang tags that reinforce pricing, storytelling, and product presentation.",
    },
    overview: {
      heading: "Product Overview",
      title: "Tags that Reinforce Every Detail",
      paragraphs: [
        "Custom tags do more than display price—they communicate fit, care, and brand personality. We craft tags in bespoke shapes, stocks, and finishes that align with your merchandising vision.",
        "Options like duplex boards, foil edges, and textured varnishes elevate perception while staying production-friendly.",
        "Need rapid deployment? Our pre-stringing and kitting services streamline fulfillment so tags arrive ready for the retail floor.",
      ],
    },
  },

  // Subcategory: Business Cards
  "business-cards": {
    name: "Business Cards",
    description:
      "Premium business cards crafted with distinctive stocks, finishes, and print techniques that leave a lasting impression.",
    heroImage: "business-cards_ggfnab",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "16pt-32pt premium card, cotton, or recycled boards with duplex options",
        },
        {
          label: "Structure",
          value:
            'Standard 3.5" x 2" or custom die-cut shapes with square or rounded corners',
        },
        {
          label: "Thickness",
          value: "16pt / 24pt / 32pt multi-ply boards with color seam inserts",
        },
        {
          label: "Finish",
          value:
            "Soft-touch, velvet, gloss UV, foil stamping, debossing, or painted edges",
        },
        {
          label: "Printing",
          value:
            "Digital or offset CMYK with Pantone precision and specialty spot white",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            'Classic 3.5" x 2", square 2.5" x 2.5", or bespoke brand contours',
        },
        {
          label: "Quantity",
          value:
            "Custom card sets from 100 pieces with variable name personalization",
        },
      ],
    },
    faq: buildFaq("Business Cards", [
      {
        question:
          "Can you print different names within the same business card order?",
        answer:
          "Yes. We support variable data printing so each card in the run can be personalized with unique names and titles.",
      },
      {
        question: "What card stocks are available for premium finishes?",
        answer:
          "We offer cotton, suede, recycled, and multi-ply boards that pair beautifully with foil, letterpress, or painted edges.",
      },
      {
        question: "Do you provide design proofing before production?",
        answer:
          "We send digital proofs and can produce physical samples upon request to ensure color, finish, and tactile qualities meet expectations.",
      },
    ]),
    cta: {
      title: "Ready to Elevate Your Business Cards?",
      description:
        "Collaborate with our team to create business cards with standout stocks, finishes, and personalization.",
    },
    overview: {
      heading: "Product Overview",
      title: "Business Cards Designed to Impress",
      paragraphs: [
        "Business cards are often a first tactile impression. We combine premium stocks, layered constructions, and refined finishing to make sure that moment sticks.",
        "Choose from letterpress, foil, emboss, painted edges, and specialty laminations to mirror your brand tone and texture.",
        "Our team manages variable data across large teams while preserving color consistency, ensuring every handoff feels personal and premium.",
      ],
    },
  },

  // Subcategory: Custom Tissue Paper
  "custom-tissue-paper": {
    name: "Custom Tissue Paper",
    description:
      "Branded tissue paper that wraps products in a memorable layer, reinforcing your visual identity from unboxing onward.",
    heroImage: "cutom-tissue-paper_vlplnt",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "17gsm, 22gsm, or 28gsm acid-free tissue compatible with soy inks",
        },
        {
          label: "Structure",
          value:
            "Sheeted or roll formats cut to size for wrapping, interleaving, or void fill",
        },
        {
          label: "Thickness",
          value:
            "17gsm lightweight, 22gsm midweight, or 28gsm premium layering tissue",
        },
        {
          label: "Finish",
          value: "Matte translucent, metallic sheen, or pearlescent coatings",
        },
        {
          label: "Printing",
          value:
            "Flexo or rotary up to 2 colors with repeating patterns or edge-to-edge branding",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            'Standard 20" x 30" sheets with custom cuts from 10" squares to 40" rolls',
        },
        {
          label: "Quantity",
          value:
            "Bulk packs from 1,000 sheets with color assortment or mixed pattern runs",
        },
      ],
    },
    faq: buildFaq("Custom Tissue Paper", [
      {
        question: "Can tissue paper be printed with multiple colors?",
        answer:
          "We can print up to two colors using flexo or rotary processes. For multi-color designs we layer inks strategically to maintain translucency.",
      },
      {
        question: "Is the tissue paper acid-free and colorfast?",
        answer:
          "Yes. Our tissues are acid-free to protect delicate products and we use colorfast inks that won’t transfer onto merchandise.",
      },
      {
        question: "Do you offer custom sheet sizes?",
        answer:
          "We cut sheets to your required dimensions or supply rolls, making it easy to integrate with gift-wrapping or fulfillment workflows.",
      },
    ]),
    cta: {
      title: "Ready to Wrap with Custom Tissue?",
      description:
        "Tell us about your unboxing experience and we'll produce tissue paper that protects and reinforces your brand.",
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Tissue Paper for Memorable Reveals",
      paragraphs: [
        "Custom tissue transforms every unboxing into a branded moment. We select weights and finishes that complement your packaging while shielding products in transit.",
        "Repeat patterns, edge-to-edge designs, and metallic accents keep your visuals front and center even before products are fully revealed.",
        "Whether you need seasonal runs or evergreen programs, we handle color matching and inventory planning so tissue arrives exactly when you need it.",
      ],
    },
  },

  // Subcategory: Butter Paper
  "butter-paper": {
    name: "Butter Paper",
    description:
      "Food-safe butter paper that keeps confections, baked goods, and deli items fresh while highlighting your brand.",
    heroImage: "butter-paper_duhyqp",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "30gsm-60gsm greaseproof butter paper certified for direct food contact",
        },
        {
          label: "Structure",
          value:
            "Flat sheets or perforated roll formats sized for bakery and deli operations",
        },
        {
          label: "Thickness",
          value:
            "30gsm sandwich wrap, 40gsm deli weight, 60gsm patisserie grade",
        },
        {
          label: "Finish",
          value:
            "Smooth or ribbed textures with aqueous grease barrier and soy inks",
        },
        {
          label: "Printing",
          value:
            "Flexographic 1-2 color repeats or digital short runs for seasonal menus",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Sheets from 10" x 10" to 15" x 20" plus custom roll widths',
        },
        {
          label: "Quantity",
          value:
            "Food-service orders from 5,000 sheets with scheduled replenishment",
        },
      ],
    },
    faq: buildFaq("Butter Paper", [
      {
        question: "Is butter paper safe for direct food contact?",
        answer:
          "Yes. Our butter paper meets FDA and EU food-contact standards, making it suitable for wrapping baked goods and confections.",
      },
      {
        question: "Can I print my logo on butter paper?",
        answer:
          "We print up to two colors with food-safe inks that resist grease, ensuring your branding stays vibrant even with oily foods.",
      },
      {
        question: "Do you offer perforated rolls or pre-cut sheets?",
        answer:
          "We can supply both. Choose pre-cut sheets for speed or perforated rolls for flexible back-of-house operations.",
      },
    ]),
    cta: {
      title: "Ready for Custom Printed Butter Paper?",
      description:
        "Share your menu and branding needs—we'll deliver butter paper that keeps food fresh and messaging clear.",
    },
    overview: {
      heading: "Product Overview",
      title: "Butter Paper that Keeps Food and Branding Fresh",
      paragraphs: [
        "Butter paper balances grease resistance with print fidelity, making it ideal for bakeries, cafes, and food manufacturers.",
        "We calibrate coatings and ink selections so patterns stay vibrant without transferring to your culinary creations.",
        "From sandwich wraps to patisserie sheets, we support multiple sizes, perforations, and replenishment schedules to keep operations running smoothly.",
      ],
    },
  },

  // Subcategory: Product Labels & Bottle Labels
  "product-labels-bottle-labels": {
    name: "Product Labels & Bottle Labels",
    description:
      "High-adhesion product and bottle labels built to endure moisture, handling, and logistics while looking sharp on shelf.",
    heroImage: "product-label_t1kpzp",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "Paper, BOPP, vinyl, and specialty films with permanent, removable, or freezer adhesives",
        },
        {
          label: "Structure",
          value:
            "Roll or sheet labels, neck hangers, and multi-layer constructions for complex content",
        },
        {
          label: "Thickness",
          value:
            "2 mil films, 3.2 mil vinyl, or 60lb paper face stocks matched to application",
        },
        {
          label: "Finish",
          value:
            "Gloss, matte, UV, soft-touch, foil, and lamination options for durability",
        },
        {
          label: "Printing",
          value:
            "Digital HP Indigo for short runs or flexo up to 8 colors with varnish stations",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            'Label sizes from 1" circles to 6" x 8" panels customized per bottle silhouette',
        },
        {
          label: "Quantity",
          value:
            "Label programs from 500 rolls with lot coding and variable personalization",
        },
      ],
    },
    faq: buildFaq("Product Labels", [
      {
        question:
          "Which label materials work best for moisture-rich environments?",
        answer:
          "For refrigerated or wet applications we recommend BOPP or vinyl stocks paired with permanent, moisture-resistant adhesives.",
      },
      {
        question: "Can you add foil, emboss, or tactile finishes?",
        answer:
          "Yes. We apply foil stamping, embossing, tactile varnish, and spot gloss to help your labels stand out on crowded shelves.",
      },
      {
        question: "Do you support variable data or lot coding?",
        answer:
          "We can print variable data inline or leave dedicated zones for thermal transfer printing, ensuring compliance with traceability requirements.",
      },
    ]),
    cta: {
      title: "Ready to Upgrade Your Product Labels?",
      description:
        "Send us your packaging specs and we'll engineer labels that stay vibrant and compliant on every surface.",
    },
    overview: {
      heading: "Product Overview",
      title: "Product Labels Engineered for Performance",
      paragraphs: [
        "Your labels must endure moisture, handling, and logistics—while staying on brand. We match materials, adhesives, and coatings to your application environment.",
        "From matte textures to gloss finishes and tactile varnishes, we elevate shelf presence without sacrificing compliance.",
        "Our variable data capabilities and finishing options support complex product lines, limited editions, and regulatory needs with ease.",
      ],
    },
  },

  // Subcategory: Table Tents
  "table-tents": {
    name: "Table Tents",
    description:
      "Custom table tents that turn dining rooms, events, and checkout stations into storytelling touchpoints.",
    heroImage: "table-tents_xokzfv",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "14pt-18pt coated cover or laminated board for high-traffic environments",
        },
        {
          label: "Structure",
          value:
            "Standard tent, pyramid, or tri-panel shapes with interlocking bases",
        },
        {
          label: "Thickness",
          value:
            '0.014" / 0.016" / 0.018" boards reinforced for repeated handling',
        },
        {
          label: "Finish",
          value:
            "Gloss or matte lamination, UV spot highlights, scuff-resistant coatings",
        },
        {
          label: "Printing",
          value:
            "Digital or offset CMYK with variable messaging for seasonal promotions",
        },
        {
          label: "Dimensions (L x W x H)",
          value: 'Displays from 4" x 6" standard tents to 5.5" x 8.5" signage',
        },
        {
          label: "Quantity",
          value:
            "Table tent runs from 250 pieces with versioning by location or menu",
        },
      ],
    },
    faq: buildFaq("Table Tents", [
      {
        question: "Which table tent shape works best for my venue?",
        answer:
          "Classic A-frame tents suit quick-service settings, while pyramid and tri-panel designs provide more space for storytelling. We mock up sizes to match your tables.",
      },
      {
        question: "Can I laminate table tents for durability?",
        answer:
          "Yes. We offer gloss, matte, and scuff-resistant laminations that protect against spills and frequent handling.",
      },
      {
        question: "Do you support versioning by location or offer?",
        answer:
          "Our digital workflow lets us version artwork for different menus, regions, or promotions within the same production run.",
      },
    ]),
    cta: {
      title: "Ready to Promote with Table Tents?",
      description:
        "Provide your campaign details and we'll print durable table tents that drive engagement at every touchpoint.",
    },
    overview: {
      heading: "Product Overview",
      title: "Table Tents that Drive On-Premise Engagement",
      paragraphs: [
        "Table tents turn every surface into a storytelling platform. We design structures that stay upright, resist spills, and reflect your brand aesthetic.",
        "Versioned content allows you to tailor messaging to locations, dayparts, or promotions without retooling entire campaigns.",
        "With durable coatings and quick-turn digital printing, your table tents arrive ready for high-traffic environments.",
      ],
    },
  },

  // Subcategory: Packing Tape
  "packing-tape": {
    name: "Packing Tape",
    description:
      "Custom printed packing tape that secures shipments while extending brand visibility across every package.",
    heroImage: "packing-tape_v4prqu",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    customization: {
      details: [
        {
          label: "Material Type",
          value:
            "BOPP, kraft paper, or reinforced gummed tape with acrylic, hot melt, or starch adhesives",
        },
        {
          label: "Structure",
          value:
            'Hand and machine rolls with 3" cores and custom width repeats',
        },
        {
          label: "Thickness",
          value:
            "2.0 mil / 2.5 mil / 3.0 mil film or 70gsm paper with fiberglass reinforcement",
        },
        {
          label: "Finish",
          value: "Gloss, matte, writable surfaces, or water-activated coatings",
        },
        {
          label: "Printing",
          value:
            "Flexo up to 3 colors, digital short runs, or rotogravure for complex patterns",
        },
        {
          label: "Dimensions (L x W x H)",
          value:
            "Roll widths 48 mm, 72 mm, or custom cuts with lengths 50 m to 1000 m",
        },
        {
          label: "Quantity",
          value:
            "Tape orders from 72 rolls per design with pallet replenishment programs",
        },
      ],
    },
    faq: buildFaq("Packing Tape", [
      {
        question: "Which tape material should I choose for my shipments?",
        answer:
          "BOPP tape is great for general e-commerce, reinforced gummed tape offers tamper evidence for heavier loads, and kraft tape is ideal for eco-forward programs. We help you match adhesive strength to your boxes.",
      },
      {
        question: "Can packing tape be printed in multiple colors?",
        answer:
          "Yes. We print up to three colors flexographically, and can run digital or rotogravure processes for complex patterns or gradients.",
      },
      {
        question: "Do you supply both hand and machine rolls?",
        answer:
          "We slit rolls to fit hand dispensers or automated case sealers, ensuring your tape integrates seamlessly with your fulfillment workflow.",
      },
    ]),
    cta: {
      title: "Ready for Custom Branded Packing Tape?",
      description:
        "Let us produce packing tape that secures each shipment while keeping your brand front and center.",
    },
    overview: {
      heading: "Product Overview",
      title: "Packing Tape that Locks in Brand Recognition",
      paragraphs: [
        "Custom packing tape reinforces security and branding on every parcel. We match tape substrates and adhesives to your box style, weight, and fulfillment process.",
        "Flexographic, digital, and rotogravure printing options ensure logos and messaging stay crisp, even across long runs.",
        "From hand rolls to machine-compatible formats, we deliver tape ready to deploy, keeping your shipping workflow efficient and unmistakably yours.",
      ],
    },
  },

  // Category: Bakery Boxes
  // Subcategory: Custom Donut Boxes
  "custom-donut-boxes": {
    name: "Custom Donut Boxes",
    description:
      "Fresh, stylish, and reliable. Buy custom donut boxes online for packaging that keeps your treats protected, presentable, and ready to impress every customer.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade paperboard is safe for direct contact",
      "Strong structure keeps donuts fresh and intact",
      "Custom printing options for full branding flexibility",
      "Optional clear windows for display appeal",
      "Easy-to-assemble design for quick service",
      "Eco-friendly and fully recyclable materials",
      "Available in kraft, white, or printed finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top or Lock-Bottom with Optional Window",
        },
        {
          label: "Thickness",
          value: "12PT / 16PT / 18PT",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Donut Boxes That Make Every Treat Special",
      paragraphs: [
        "Our custom donut boxes are designed to preserve freshness and elevate presentation. Built from durable food-grade paperboard, these boxes protect your baked goods while showcasing them beautifully. Ideal for bakeries, cafes, and dessert shops, they combine strength, hygiene, and brand appeal in one solution.",
        "At BoxyPack, we craft custom printed donut boxes tailored to your flavor, size, and style. Choose single-donut, half-dozen, or dozen-box configurations in kraft or white materials. Add your logo, color theme, or window cut-outs for a premium touch that boosts shelf appeal.",
        "As a donut packaging wholesale supplier, we focus on delivering quality, consistency, and cost efficiency. Each box ensures product safety, clean presentation, and affordability, making our packaging the perfect fit for bakeries of all sizes seeking the best donut boxes price.",
      ],
    },
    faq: buildFaq(
      "Custom Donut Boxes",
      [
        {
          question: "What are custom donut boxes made of?",
          answer:
            "They’re made from food-safe, recyclable cardboard or kraft paperboard.",
        },
        {
          question: "Can I add my bakery logo?",
          answer:
            "Yes, BoxyPack offers full-color logo printing and branding customization.",
        },
        {
          question: "Do you make boxes with transparent windows?",
          answer:
            "Absolutely, you can add clear display windows to your donut packaging.",
        },
        {
          question: "Do you offer bulk pricing?",
          answer:
            "Yes, our donut packaging wholesale supplier program includes bulk discounts.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all our materials are recyclable, biodegradable, and food safe.",
        },
      ],
      {
        heading: "Questions about Custom Donut Boxes",
        eyebrow: "Donut Box FAQs",
      }
    ),
    cta: {
      title: "Sweet Packaging, Fresh Impressions",
      description:
        "Partner with BoxyPack to create custom donut boxes that protect, display, and promote your baked delights. Our packaging experts ensure every box you order keeps freshness locked in and your brand looking irresistible.",
    },
  },

  // Subcategory: Custom Pastry Boxes
  "custom-pastry-boxes": {
    name: "Custom Pastry Boxes",
    description:
      "Elegant, durable, and food-safe. Buy custom pastry boxes online for bakery packaging that keeps pastries protected, fresh, and beautifully presented every time.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade paperboard ensures product freshness and safety",
      "Rigid construction prevents bending or tearing",
      "Full-color printing for brand identity and marketing",
      "Optional clear window for product visibility",
      "Lightweight and stackable for storage and transport",
      "Eco-friendly and recyclable materials",
      "Available in matte, gloss, or kraft finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Windowed Options",
        },
        {
          label: "Thickness",
          value: "12PT / 16PT / 18PT",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Pastry Boxes for Premium Presentation",
      paragraphs: [
        "Our custom pastry boxes are designed to balance presentation and protection. Made from sturdy, food-grade cardboard, these boxes prevent crushing, preserve texture, and make every pastry look delightful. Ideal for cafes, bakeries, and dessert shops, they provide easy handling and visual appeal for display and delivery.",
        "At BoxyPack, we specialize in crafting custom printed pastry boxes that perfectly reflect your bakery’s brand identity. Choose kraft for a natural aesthetic or go with full-color printed finishes for a premium branded experience. Whether for croissants, eclairs, or tarts, each box is precision-cut to maintain freshness and stability.",
        "As a custom printed pastry boxes supplier, we provide reliable materials, consistent printing, and affordable bulk rates. Our durable construction and food-safe design make us a trusted choice for businesses seeking premium packaging at the best pastry boxes price",
      ],
    },
    faq: buildFaq(
      "Custom Pastry Boxes",
      [
        {
          question: "What are custom pastry boxes made from?",
          answer:
            "They’re made from food-grade cardboard or kraft that’s safe and recyclable.",
        },
        {
          question: "Can I print my bakery logo on the boxes?",
          answer:
            "Yes, BoxyPack offers full-color custom printing inside and outside.",
        },
        {
          question: "Are these boxes suitable for warm pastries?",
          answer:
            "Yes, the paperboard material retains structure and prevents sogginess.",
        },
        {
          question: "Do you provide bulk discounts?",
          answer:
            "Yes, we offer pastry packaging boxes wholesale pricing for large orders.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Absolutely. Every box is recyclable and crafted from sustainable materials.",
        },
      ],
      {
        heading: "Questions about Custom Pastry Boxes",
        eyebrow: "Pastry Box FAQs",
      }
    ),
    cta: {
      title: "Fresh Look, Lasting Impression",
      description:
        "Partner with BoxyPack to design custom pastry boxes that protect your pastries while showcasing your brand’s charm. Our experts deliver bakery packaging that looks inviting, feels professional, and keeps every bite as fresh as the first.",
    },
  },

  // Subcategory: Custom Cake Boxes
  "custom-cake-boxes": {
    name: "Custom Cake Boxes",
    description:
      "Elegant, protective, and ready to impress. Buy custom cake boxes online for packaging that keeps your cakes secure, fresh, and beautifully presented for every occasion..",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade, durable cardboard construction",
      "Secure lock or tuck-top structure for protection",
      "Ideal for single, multi-layer, or custom cake sizes",
      "Full-color printing for brand presentation",
      "Optional handle or window for product display",
      "Eco-friendly and recyclable materials",
      "Available in matte, gloss, or kraft finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window or Handle Options",
        },
        {
          label: "Thickness",
          value: "16PT / 18PT / 24PT",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Cake Boxes Built for Protection and Presentation",
      paragraphs: [
        "Our custom cake boxes are crafted for elegance and strength. Built from food-grade cardboard, they protect delicate cakes during transport while maintaining their perfect presentation. Ideal for bakeries, catering, and special events, these boxes balance durability, hygiene, and premium style.",
        "At BoxyPack, we specialize in creating luxury custom cake packaging boxes tailored to your brand and product line. Choose classic white or natural kraft finishes, or go bold with full-color printed designs that reflect your bakery’s identity. Each box is precision-engineered for smooth assembly and strong structure that holds your cake securely in place.",
        "As a cake boxes wholesale supplier, we provide high-quality materials, custom printing, and affordable bulk options. Whether you need large, small, or multi-tier cake boxes, we offer reliable performance and a competitive cake boxes price that fits your bakery’s needs.",
      ],
    },
    faq: buildFaq(
      "Custom Cake Boxes",
      [
        {
          question: "What materials are used for custom cake boxes?",
          answer:
            "We use premium, food-grade cardboard and kraft paperboard for safe packaging.",
        },
        {
          question: "Can I print my bakery logo and artwork?",
          answer:
            "Yes, BoxyPack provides full-color custom printing for both inside and outside surfaces.",
        },
        {
          question: "Are these boxes suitable for large cakes?",
          answer:
            "Yes, we offer sturdy structures that support single or multi-tier cakes securely.",
        },
        {
          question: "Do you offer wholesale rates?",
          answer:
            "Absolutely, our cake boxes wholesale supplier program includes volume-based discounts.",
        },
        {
          question: "Are your cake boxes eco-friendly?",
          answer:
            "Yes, all materials are recyclable, biodegradable, and safe for food use.",
        },
      ],
      { heading: "Questions about Custom Cake Boxes", eyebrow: "Cake Box FAQs" }
    ),
    cta: {
      title: "Celebrate Every Slice in Style",
      description:
        "Partner with BoxyPack to design custom cake boxes that combine elegance and strength. Our packaging experts ensure your cakes are delivered with freshness, beauty, and brand consistency because every box should be as special as the treat inside.",
    },
  },

  // Subcategory: Custom Cookie Boxes
  "custom-cookie-boxes": {
    name: "Custom Cookie Boxes",
    description:
      "Charming, sturdy, and food-safe. Buy custom cookie boxes online for packaging that keeps cookies fresh, flavorful, and ready to delight customers every time",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade paperboard for direct contact safety",
      "Keeps cookies fresh and protected during delivery",
      "Optional window cut-outs for product visibility",
      "Full-color printing for brand and design enhancement",
      "Eco-friendly, recyclable, and biodegradable materials",
      "Ideal for bakeries, gift packaging, and retail sales",
      "Available in kraft, white, or custom finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window Options",
        },
        {
          label: "Thickness",
          value: "12PT / 16PT / 18PT",
        },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Printed Cookie Boxes for Bakeries and Brands",
      paragraphs: [
        "Our custom cookie boxes are crafted to protect freshness while enhancing presentation. Built from food-grade, eco-safe paperboard, they maintain flavor and shape, making them perfect for bakeries, cafés, and gourmet snack brands. These boxes combine clean design, secure structure, and vibrant branding options to elevate your product display.",
        "At BoxyPack, we design custom printed cookie boxes tailored to your brand’s image and packaging goals. Choose from kraft textures for a rustic look or full-color printed finishes for a polished retail feel. Add a window to showcase your cookies and attract instant attention. Each box is precision-made for durability, easy assembly, and strong visual impact.",
        "As a custom printed cookie boxes supplier, we focus on quality, affordability, and sustainability. From small batch orders to cookie packaging boxes wholesale, we ensure consistent quality at the best cookie boxes price in the market.",
      ],
    },
    faq: buildFaq(
      "Custom Cookie Boxes",
      [
        {
          question: "What are custom cookie boxes made of?",
          answer:
            "They’re made from durable, food-grade cardboard or kraft materials.",
        },
        {
          question: "Can I add a window to my cookie boxes?",
          answer:
            "Yes, BoxyPack offers eco friendly cookie boxes with window options.",
        },
        {
          question: "Do you offer printing for logos and artwork?",
          answer:
            "Absolutely. Full-color custom printing is available inside and outside.",
        },
        {
          question: "Are these boxes suitable for gifting or retail?",
          answer:
            "Yes, they’re perfect for both bakery sales and gift packaging.",
        },
        {
          question: "Do you provide wholesale discounts?",
          answer:
            "Yes, our cookie packaging boxes wholesale program includes discounted bulk pricing.",
        },
      ],
      {
        heading: "Questions about Custom Cookie Boxes",
        eyebrow: "Cookie Box FAQs",
      }
    ),
    cta: {
      title: "Fresh Look, Delicious Impression",
      description:
        "Partner with BoxyPack to create custom cookie boxes that protect your treats and promote your brand. Our team designs packaging that keeps freshness locked in and makes every cookie feel special from first glance to final bite.",
    },
  },

  // Subcategory: Custom Gable Boxes
  "custom-gable-boxes": {
    name: "Custom Gable Boxes",
    description:
      "Convenient, durable, and bakery-ready. Buy custom gable boxes online for packaging that combines easy handling, strong protection, and stylish presentation for every product.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Built-in handle for easy carrying and storage",
      "Food-grade, sturdy paperboard structure",
      "Full-color printing options for strong brand identity",
      "Ideal for bakery, food, and retail packaging",
      "Eco-friendly and recyclable materials",
      "Available in kraft, white, or printed finishes",
      "Flat-packed for easy shipping and assembly",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Fold-Over Gable Style with Handle",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Printed Gable Boxes for Bakery and Retail",
      paragraphs: [
        "Our custom gable boxes are designed to provide functionality with flair. Featuring a built-in handle and secure interlocking design, they make transport effortless while keeping products fresh and protected. Ideal for bakeries, takeout, gifts, and promotional packaging, they deliver versatility with a polished look.",
        "At BoxyPack, we produce custom printed gable boxes wholesale for bakeries, cafes, and retail brands that value both strength and style. You can choose kraft for a natural appearance or printed finishes for vibrant branding. Every box is crafted from food-grade paperboard, ensuring freshness and safety in every delivery.",
        "As a trusted gable boxes supplier for bakeries, we guarantee consistent quality, eco-friendly materials, and competitive pricing. Whether you need small quantities or large bulk orders, we offer flexibility and the best bakery gable boxes price on the market.",
      ],
    },
    faq: buildFaq(
      "Custom Gable Boxes",
      [
        {
          question: "What are bakery gable boxes used for?",
          answer:
            "They’re ideal for bakery packaging, takeout meals, and gift boxes.",
        },
        {
          question: "Can I print my bakery logo on the gable boxes?",
          answer:
            "Yes, BoxyPack offers full-color custom printing for branding.",
        },
        {
          question: "Are these boxes made from food-safe material?",
          answer:
            "Absolutely. All boxes are made from certified food-grade paperboard.",
        },
        {
          question: "Do you provide bulk order discounts?",
          answer:
            "Yes, we offer custom printed gable boxes wholesale pricing for large quantities.",
        },
        {
          question: "Are the boxes eco-friendly?",
          answer:
            "Yes, our gable boxes are recyclable and crafted from sustainable materials.",
        },
      ],
      {
        heading: "Questions about Custom Gable Boxes",
        eyebrow: "Gable Box FAQs",
      }
    ),
    cta: {
      title: "Carry Your Brand with Confidence",
      description:
        "Design custom gable boxes that are easy to carry and built to impress. Request a quote today.",
    },
  },

  // Subcategory: Custom Candy Boxes
  "custom-candy-boxes": {
    name: "Custom Candy Boxes",
    description:
      "Colorful, durable, and sweetly designed. Buy custom candy boxes online for packaging that keeps candies fresh, secure, and beautifully displayed for every occasion.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade material keeps candies safe and fresh",
      "Available with clear window or divider inserts",
      "Full-color printing for branding and visual impact",
      "Lightweight, strong, and easy to assemble",
      "Eco-friendly and recyclable paperboard",
      "Perfect for bakery, retail, and gift packaging",
      "Available in kraft, white, or premium printed finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window or Divider Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Candy Boxes for Sweet Presentation",
      paragraphs: [
        "Our custom candy boxes are crafted to blend visual appeal with reliable protection. Built from sturdy, food-grade paperboard, they keep candies, chocolates, and sweets fresh while giving your brand a premium look. Perfect for bakeries, candy shops, and gift retailers, these boxes make every treat feel special.",
        "At BoxyPack, we design custom printed candy boxes that fit your product range and brand image. Choose from classic kraft boxes for natural charm or full-color printed options for a bold retail-ready appearance. Add transparent windows, inserts, or dividers for professional organization and presentation.",
        "As a custom printed candy boxes supplier, we ensure quality, affordability, and sustainable production. From small retail runs to candy packaging boxes wholesale orders, you get dependable craftsmanship and an attractive candy boxes price that suits your packaging needs.",
      ],
    },
    faq: buildFaq(
      "Custom Candy Boxes",
      [
        {
          question: "What are custom candy boxes made of?",
          answer:
            "They’re made from premium, food-safe cardboard and kraft materials.",
        },
        {
          question: "Can I customize my box design and printing?",
          answer:
            "Yes, BoxyPack offers full-color custom printing and window options.",
        },
        {
          question: "Are these boxes suitable for gifting?",
          answer:
            "Absolutely. They’re perfect for luxury candy and bakery gift packaging.",
        },
        {
          question: "Do you provide wholesale pricing?",
          answer:
            "Yes, our candy packaging boxes wholesale program includes competitive bulk rates.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all our boxes are recyclable and made from sustainable materials.",
        },
      ],
      {
        heading: "Questions about Custom Candy Boxes",
        eyebrow: "Candy Box FAQs",
      }
    ),
    cta: {
      title: "Sweet Packaging That Sells",
      description:
        "Partner with BoxyPack to design custom candy boxes that keep your treats safe, stylish, and irresistible. Our team creates packaging that adds sweetness to your brand story, crafted to impress, protect, and delight in every unboxing.",
    },
  },

  // Subcategory: Mini Cupcake Boxes
  "mini-cupcake-boxes": {
    name: "Mini Cupcake Boxes",
    description:
      "Cute, sturdy, and perfectly crafted. Buy mini cupcake boxes online for packaging that keeps every bite safe, fresh, and beautifully presented for your customers.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade, sturdy material ensures freshness and safety",
      "Includes optional inserts for secure cupcake placement",
      "Full-color printing for branding and display appeal",
      "Available with a clear window for product visibility",
      "Eco-friendly, recyclable, and easy to assemble",
      "Ideal for bakeries, events, and party favors",
      "Available in matte, gloss, or kraft finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Lock-Bottom / Tuck-Top / Window and Insert Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        {
          label: "Quantity",
          value: "250 units (Bulk discounts available)",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Mini Cupcake Packaging Boxes for Bakeries and Events",
      paragraphs: [
        "Our mini cupcake boxes are designed to protect delicate cupcakes while showcasing their charm. Built from durable food-grade cardboard, they maintain freshness, shape, and presentation for bakery counters, events, and deliveries. These compact boxes combine structure, convenience, and visual appeal for professional packaging.",
        "At BoxyPack, we produce custom-printed cupcake boxes wholesale that reflect your brand’s personality. Whether you need natural kraft tones, white clean finishes, or full-color printed options, we offer precision design for every order. Each box can include inserts to hold cupcakes securely in place and prevent sliding.",
        "As a trusted mini cupcake boxes supplier, we focus on durability, consistency, and eco-friendly production. From boutique bakeries to large wholesale orders, we deliver premium quality at an affordable mini cupcake boxes price to suit every business size.",
      ],
    },
    faq: buildFaq(
      "Mini Cupcake Boxes",
      [
        {
          question: "What materials are used for mini cupcake boxes?",
          answer:
            "We use food-safe kraft and cardboard materials suitable for direct contact.",
        },
        {
          question: "Can I include a clear window on my boxes?",
          answer:
            "Yes, BoxyPack offers window options for visibility and presentation.",
        },
        {
          question: "Do the boxes include cupcake inserts?",
          answer:
            "Yes, optional inserts are available for single or multi-cupcake layouts.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer:
            "Absolutely, our custom printed cupcake boxes wholesale program offers bulk discounts.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, our mini cupcake packaging boxes are recyclable and sustainable.",
        },
      ],
      {
        heading: "Questions about Mini Cupcake Boxes",
        eyebrow: "Mini Cupcake Box FAQs",
      }
    ),
    cta: {
      title: "Small Box, Big Impression",
      description:
        "Partner with BoxyPack to design mini cupcake boxes that make your desserts shine. Our packaging experts deliver quality, precision, and style so every cupcake arrives fresh, flawless, and ready to delight.",
    },
  },

  // Subcategory: Pink Donut Boxes
  "pink-donut-boxes": {
    name: "Pink Donut Boxes",
    description:
      "Bright, stylish, and bakery-perfect. Buy pink donut boxes online for packaging that adds charm, freshness, and brand appeal to every sweet treat you serve.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade material for safety and freshness",
      "Strong structure ideal for bakery and retail use",
      "Full-color pink or branded printing options",
      "Available in multiple sizes for single or a dozen donuts",
      "Eco-friendly, recyclable, and lightweight",
      "Flat-packed for easy storage and assembly",
      "Gloss, matte, or soft-touch finish options",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        {
          label: "Finish",
          value: "Gloss / Matte / Soft Touch",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Pink Donut Boxes for Elegant Presentation",
      paragraphs: [
        "Our pink donut boxes are made for bakeries that want packaging as delightful as their donuts. Crafted from durable, food-grade cardboard, these boxes protect freshness while creating an eye-catching presentation. Perfect for cafés, bakeries, and dessert shops, they add color and personality to your product display.",
        "At BoxyPack, we produce custom-printed pink donut boxes designed to match your bakery’s style and brand. Whether you prefer soft pastel tones or vibrant shades of pink, every box is precision-cut, strong, and visually appealing. Choose from plain designs or printed logos for an extra professional finish.",
        "As a donut gift boxes wholesale supplier, we focus on delivering quality and consistency at scale. Each order offers durable construction, clean folds, and smooth surfaces at a competitive pink donut boxes price, making them ideal for retail and bulk packaging.",
      ],
    },
    faq: buildFaq(
      "Pink Donut Boxes",
      [
        {
          question: "What are pink donut boxes made from?",
          answer:
            "They’re made from food-safe cardboard or kraft paperboard with pink printing.",
        },
        {
          question: "Can I print my logo on the pink donut boxes?",
          answer: "Yes, BoxyPack offers custom logo and artwork printing.",
        },
        {
          question: "Are these boxes suitable for gifting or display?",
          answer:
            "Absolutely. They’re perfect for retail display and gift packaging.",
        },
        {
          question: "Do you offer bulk pricing?",
          answer:
            "Yes, our donut gift boxes wholesale supplier program includes volume discounts.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all our pink donut boxes are recyclable and sustainably produced.",
        },
      ],
      {
        heading: "Questions about Pink Donut Boxes",
        eyebrow: "Pink Donut Box FAQs",
      }
    ),
    cta: {
      title: "Pretty Packaging, Perfect Presentation",
      description:
        "Partner with BoxyPack to design pink donut boxes that make every treat irresistible. Our team helps you create packaging that enhances freshness, strengthens your brand, and delivers smiles with every box opened.",
    },
  },

  // Subcategory: Window Bakery Boxes
  "window-bakery-boxes": {
    name: "Window Bakery Boxes",
    description:
      "Fresh, functional, and display-ready. Buy bakery boxes with windows online for packaging that highlights your baked goods while keeping them fresh, safe, and beautifully presented.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Transparent window for clear product visibility",
      "Food-grade paperboard ensures safety and freshness",
      "Full-color printing for brand identity and style",
      "Strong and foldable structure for durability",
      "Eco-friendly and recyclable packaging materials",
      "Available in kraft, white, or custom finishes",
      "Perfect for cakes, cupcakes, pastries, and cookies",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        { label: "Finish", value: "Gloss / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Bakery Boxes with Window for Baked Goods Display",
      paragraphs: [
        "Our window bakery boxes are designed to show off your creations while keeping them secure. Made from premium food-grade cardboard, these boxes combine strength, visibility, and elegance, ideal for cakes, cupcakes, pastries, and other bakery items. The transparent window lets customers see the freshness inside, making every sale more appealing.",
        "At BoxyPack, we specialize in custom window packaging boxes wholesale for bakeries, cafés, and dessert brands. Choose Kraft for rustic charm or go with printed designs for a professional presentation. Each box is precision-cut with clean edges, strong locks, and clear windows for display perfection.",
        "As a printed bakery window boxes supplier, we provide dependable materials, consistent print quality, and competitive pricing. Whether you’re ordering for a boutique bakery or bulk retail packaging, we offer flexibility and the best window bakery boxes price available.",
      ],
    },
    faq: buildFaq(
      "Window Bakery Boxes",
      [
        {
          question: "What are window bakery boxes made of?",
          answer:
            "They’re made from food-grade kraft or cardboard with a clear PET window.",
        },
        {
          question: "Can I customize the window size or shape?",
          answer:
            "Yes, BoxyPack offers custom die-cut window shapes and placements.",
        },
        {
          question: "Are these boxes suitable for cakes and pastries?",
          answer:
            "Absolutely, they’re ideal for cupcakes, pastries, and cake slices.",
        },
        {
          question: "Do you provide bulk discounts?",
          answer:
            "Yes, our custom window packaging boxes wholesale program offers bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all boxes are recyclable, and the windows can be made from eco PET film.",
        },
      ],
      {
        heading: "Questions about Window Bakery Boxes",
        eyebrow: "Window Bakery Box FAQs",
      }
    ),
    cta: {
      title: "See the Quality Inside",
      description:
        "Partner with BoxyPack to create window bakery boxes that blend visibility and freshness. Our team designs packaging that makes your baked goods stand out while protecting their texture, taste, and presentation, perfect for every bakery display and delivery.",
    },
  },

  // Subcategory: Bakery Gift Boxes
  "bakery-gift-boxes": {
    name: "Bakery Gift Boxes",
    description:
      "Elegant, durable, and designed to impress. Buy bakery gift boxes online for packaging that turns every baked good into a beautiful, gift-worthy experience.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade paperboard for freshness and safety",
      "Strong, foldable structure for reliable support",
      "Full-color custom printing for branding",
      "Optional window or ribbon for presentation appeal",
      "Eco-friendly and recyclable materials",
      "Ideal for cakes, cookies, cupcakes, and pastry gifts",
      "Available in matte, gloss, or soft-touch finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window or Ribbon Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        { label: "Finish", value: "Gloss / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Bakery Gift Packaging for Every Occasion",
      paragraphs: [
        "Our bakery gift boxes are made to combine presentation and protection. Crafted from strong, food-grade cardboard, they keep baked goods fresh while giving your products a luxurious appearance. Perfect for cakes, cookies, cupcakes, or assorted gift packs, these boxes make every order feel special.",
        "At BoxyPack, we create custom bakery gift packaging tailored to your brand and style. Choose from kraft for natural charm or glossy printed finishes for a premium retail look. Add window panels, dividers, or ribbons for that extra touch of class that enhances your customer experience.",
        "As a trusted bakery gift boxes supplier near me, we offer high-quality printing, durable materials, and competitive bulk pricing. Whether you’re ordering small runs or full-scale printed bakery gift boxes wholesale, you’ll get flawless craftsmanship at the best bakery gift boxes price available.",
      ],
    },
    faq: buildFaq(
      "Bakery Gift Boxes",
      [
        {
          question: "What are bakery gift boxes made from?",
          answer: "They’re made from food-grade cardboard or kraft paperboard.",
        },
        {
          question: "Can I add windows or ribbons to my boxes?",
          answer:
            "Yes, BoxyPack offers full customization with add-ons like windows or ribbons.",
        },
        {
          question: "Are these boxes suitable for multiple items?",
          answer:
            "Yes, dividers and inserts can be added for assorted bakery gift sets.",
        },
        {
          question: "Do you provide bulk order discounts?",
          answer:
            "Yes, our printed bakery gift boxes wholesale program includes flexible bulk pricing.",
        },
        {
          question: "Are your boxes eco-friendly?",
          answer:
            "Yes, all materials are recyclable, biodegradable, and food-safe.",
        },
      ],
      {
        heading: "Questions about Bakery Gift Boxes",
        eyebrow: "Bakery Gift Box FAQs",
      }
    ),
    cta: {
      title: "Gift Packaging That Speaks Quality",
      description:
        "Partner with BoxyPack to create bakery gift boxes that blend luxury and reliability. Our experts design packaging that protects your baked goods, highlights your craftsmanship, and makes every box a memorable unboxing experience.",
    },
  },

  // Subcategory: Custom Cupcake Boxes
  "custom-cupcake-boxes": {
    name: "Custom Cupcake Boxes",
    description:
      "Stylish, sturdy, and bakery-ready. Buy custom cupcake boxes online for packaging that protects your cupcakes, enhances freshness, and delivers a premium presentation every time.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade cardboard for freshness and safety",
      "Optional inserts for multiple cupcake layouts",
      "Clear window option for attractive product display",
      "Full-color printing for strong brand visibility",
      "Eco-friendly and recyclable material options",
      "Available in kraft, white, or glossy finishes",
      "Perfect for bakeries, events, and retail use",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Lock-Bottom / Tuck-Top / Window or Insert Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        { label: "Finish", value: "Gloss / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Printed Cupcake Boxes for Bakeries and Dessert Brands",
      paragraphs: [
        "Our custom cupcake boxes combine durability with design. Built from food-grade cardboard, they keep cupcakes fresh, secure, and picture-perfect during transport and display. Ideal for bakeries, cafés, and dessert shops, these boxes add both charm and reliability to your packaging.",
        "At BoxyPack, we specialize in custom-printed cupcake boxes that reflect your bakery’s personality. Choose Kraft for a natural aesthetic or full-color printed options for a bold retail presence. Add clear windows or inserts for added elegance and function—perfect for single or multi-cupcake packaging.",
        "As a custom printed cupcake boxes supplier, we ensure professional printing, eco-safe materials, and dependable build quality. Whether you need small runs or cupcake packaging boxes wholesale, we offer the best balance of presentation, protection, and cupcake boxes price for every bakery size.",
      ],
    },
    faq: buildFaq(
      "Custom Cupcake Boxes",
      [
        {
          question: "What are custom cupcake boxes made from?",
          answer:
            "They’re made from food-safe, recyclable cardboard or kraft paperboard.",
        },
        {
          question: "Can I add a window or inserts to my cupcake boxes?",
          answer:
            "Yes, BoxyPack offers window and insert options for added presentation.",
        },
        {
          question: "Are these boxes suitable for shipping?",
          answer:
            "Yes, their sturdy design ensures cupcakes remain safe and stable during transport.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer:
            "Absolutely, our cupcake packaging boxes wholesale program includes bulk discounts.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all boxes are recyclable and made from sustainable materials.",
        },
      ],
      {
        heading: "Questions about Custom Cupcake Boxes",
        eyebrow: "Cupcake Box FAQs",
      }
    ),
    cta: {
      title: "Perfect Presentation in Every Box",
      description:
        "Partner with BoxyPack to create custom cupcake boxes that combine function and finesse. Our packaging experts design boxes that keep your cupcakes secure, stylish, and irresistibly displayed for every customer.",
    },
  },

  // Subcategory: Small Cake Boxes
  "small-cake-boxes": {
    name: "Small Cake Boxes",
    description:
      "Compact, strong, and elegant. Buy small cake boxes online for packaging that protects, preserves, and presents your cakes beautifully from the bakery to the table.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade paperboard for freshness and hygiene",
      "Durable design suitable for mini cakes and slices",
      "Full-color printing for branding and personalization",
      "Optional clear windows for product visibility",
      "Eco-friendly and recyclable materials",
      "Available in kraft, white, or glossy finishes",
      "Easy-to-assemble and stackable structure",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        { label: "Finish", value: "Gloss / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Printed Small Cake Boxes for Bakeries and Events",
      paragraphs: [
        "Our small cake boxes are crafted for bakeries that value freshness and presentation. Made from premium food-grade cardboard, these boxes ensure your cakes stay intact and visually appealing during transport or display. Perfect for single slices, mini cakes, or small desserts, they deliver quality and convenience with every use.",
        "At BoxyPack, we create custom printed small cake boxes wholesale to fit your bakery’s style and product range. Choose natural kraft for a rustic touch or full-color printed options for a polished retail look. Each box is easy to assemble, strong in structure, and crafted for a smooth, professional finish.",
        "As a reliable cake packaging supplier near me, we offer consistent quality, eco-friendly materials, and competitive rates. Whether you’re ordering for retail or large bakery production, you’ll receive superior craftsmanship at the best small cake boxes price available.",
      ],
    },
    faq: buildFaq(
      "Small Cake Boxes",
      [
        {
          question: "What are small cake boxes made from?",
          answer:
            "They’re made from food-grade, recyclable cardboard or kraft paperboard.",
        },
        {
          question: "Can I add a window to my small cake boxes?",
          answer: "Yes, BoxyPack offers window options for product visibility.",
        },
        {
          question: "Are these boxes suitable for delivery?",
          answer:
            "Absolutely. Their sturdy build keeps small cakes intact during transport.",
        },
        {
          question: "Do you offer wholesale discounts?",
          answer:
            "Yes, our custom-printed small cake boxes wholesale pricing includes bulk order savings.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer: "Yes, all materials are sustainable and recyclable.",
        },
      ],
      {
        heading: "Questions about Small Cake Boxes",
        eyebrow: "Small Cake Box FAQs",
      }
    ),
    cta: {
      title: "Package Small Cakes Perfectly",
      description:
        "Partner with BoxyPack to design small cake boxes that combine charm and strength. Our team ensures every box delivers freshness, beauty, and brand value, making your cakes as delightful to look at as they are to taste.",
    },
  },

  // Subcategory: Sweet Gift Boxes
  "sweet-gift-boxes": {
    name: "Sweet Gift Boxes",
    description:
      "Charming, durable, and crafted to impress. Buy sweet gift boxes online for packaging that enhances your treats’ beauty while keeping them fresh and perfectly protected.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade material for freshness and hygiene",
      "Elegant gift-style structure for premium presentation",
      "Full-color printing for branding and customization",
      "Optional window or ribbon for display appeal",
      "Eco-friendly and recyclable packaging materials",
      "Available in kraft, white, or glossy finishes",
      "Perfect for sweets, desserts, and bakery gifting",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / White Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-Top / Lock-Bottom / Window or Ribbon Options",
        },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        { label: "Finish", value: "Gloss / Matte / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Sweet Gift Packaging Boxes for Bakeries and Brands",
      paragraphs: [
        "Our sweet gift boxes combine strength, style, and freshness in every fold. Made from premium food-grade cardboard, these boxes are perfect for gifting sweets, chocolates, and desserts. Their elegant design and sturdy structure make them ideal for bakeries, confectioneries, and specialty stores.",
        "At BoxyPack, we design custom sweet gift packaging boxes tailored to your brand and audience. Choose Kraft for a natural finish or printed versions for vibrant branding. Add windows, ribbons, or inserts to create packaging that delights customers from the first glance to the final bite.",
        "As a printed sweet boxes wholesale supplier, we focus on quality, sustainability, and cost efficiency. Whether you need small gift boxes for boutique shops or large-volume orders for retail, we offer excellent durability and the best sweet gift boxes price to fit your needs.",
      ],
    },
    faq: buildFaq(
      "Sweet Gift Boxes",
      [
        {
          question: "What materials are used for sweet gift boxes?",
          answer:
            "We use food-grade cardboard or kraft paperboard for all sweet packaging.",
        },
        {
          question: "Can I customize the color or design?",
          answer:
            "Yes, BoxyPack offers full-color custom printing and finish options.",
        },
        {
          question: "Are these boxes suitable for gifting?",
          answer:
            "Absolutely. They’re perfect for bakeries, candy shops, and festive gifts.",
        },
        {
          question: "Do you provide wholesale discounts?",
          answer:
            "Yes, our printed sweet boxes wholesale supplier program includes bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer: "Yes, all materials are recyclable and sustainably sourced.",
        },
      ],
      {
        heading: "Questions about Sweet Gift Boxes",
        eyebrow: "Sweet Gift Box FAQs",
      }
    ),
    cta: {
      title: "Packaging That Adds Joy to Every Bite",
      description:
        "Partner with BoxyPack to design sweet gift boxes that blend freshness, beauty, and brand value. Our team creates packaging that transforms your sweets into unforgettable gifts crafted to impress at first glance and every taste.",
    },
  },

  // Subcategory: Custom Truffle Boxes
  "custom-truffle-boxes": {
    name: "Custom Truffle Boxes",
    description:
      "Elegant, protective, and indulgent. Buy custom truffle boxes online for packaging that preserves freshness, adds luxury, and showcases your chocolates with style.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Food-grade, rigid paperboard for strength and freshness",
      "Optional inserts or partitions for multiple truffle arrangements",
      "Full-color or metallic printing for luxury appeal",
      "Eco-friendly, recyclable, and premium materials",
      "Available in matte, gloss, or soft-touch finishes",
      "Perfect for chocolate shops, bakeries, and gift packaging",
      "Custom sizes and printing for brand visibility",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Food-Grade Cardboard / Kraft / Rigid Paperboard",
        },
        {
          label: "Structure",
          value: "Lid and Base / Magnetic Closure / Partitioned Inserts",
        },
        { label: "Thickness", value: "16PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Metallic Foil",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Luxury Chocolate Truffle Gift Boxes for Premium Presentation",
      paragraphs: [
        "Our custom truffle boxes are designed to reflect the richness of your chocolates. Made from sturdy, food-grade cardboard, they protect delicate truffles while giving them a refined, high-end display. Perfect for chocolatiers, bakeries, and gift shops, these boxes add sophistication to every product you serve.",
        "At BoxyPack, we craft custom printed truffle boxes that align with your brand’s personality and product design. Choose kraft for natural simplicity or luxury finishes like matte black or gold for a premium touch. Each box is precisely cut and printed to deliver visual appeal and structural perfection.",
        "As a custom printed truffle boxes supplier, we focus on quality, detail, and affordability. From boutique gifting to truffle packaging boxes wholesale, every order comes with reliable construction, professional printing, and the best truffle boxes price tailored to your business.",
      ],
    },
    faq: buildFaq(
      "Custom Truffle Boxes",
      [
        {
          question: "What are custom truffle boxes made of?",
          answer:
            "They’re made from premium food-grade cardboard or rigid paperboard.",
        },
        {
          question: "Can I include inserts or dividers for my truffles?",
          answer:
            "Yes, BoxyPack offers customizable inserts for multi-piece truffle sets.",
        },
        {
          question: "Are these boxes suitable for luxury gifting?",
          answer:
            "Absolutely. Our luxury chocolate truffle gift boxes are perfect for retail or premium gifting.",
        },
        {
          question: "Do you offer bulk discounts?",
          answer:
            "Yes, our truffle packaging boxes wholesale program includes special rates for large orders.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all materials used are recyclable and sustainably produced.",
        },
      ],
      {
        heading: "Questions about Custom Truffle Boxes",
        eyebrow: "Truffle Box FAQs",
      }
    ),
    cta: {
      title: "Luxury You Can Feel in Every Box",
      description:
        "Partner with BoxyPack to create custom truffle boxes that blend elegance, quality, and strength. Our packaging experts help you design boxes that preserve flavor, elevate presentation, and give your truffles the attention they deserve.",
    },
  },

  // Category: Jewelry Boxes
  // Subcategory: Anklet Boxes
  "anklet-boxes": {
    name: "Anklet Boxes",
    description:
      "Elegant, secure, and crafted for presentation. Buy anklet boxes online for packaging that protects your jewelry while highlighting its beauty with a premium touch.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Rigid or cardboard material for lasting durability",
      "Soft inserts or cushions to protect delicate ankles",
      "Full-color or metallic printing for premium branding",
      "Optional magnetic closure or ribbon detail",
      "Eco-friendly and recyclable materials",
      "Perfect for jewelry stores and gift packaging",
      "Available in matte, gloss, or textured finishes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Cardboard / Kraft / Art Paperboard",
        },
        {
          label: "Structure",
          value: "Magnetic Lid / Two-Piece / Drawer Style",
        },
        { label: "Thickness", value: "16PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Anklet Boxes for Elegant Jewelry Presentation",
      paragraphs: [
        "Our anklet boxes are designed to showcase fine jewelry with style and safety. Made from sturdy, high-quality cardboard or rigid materials, these boxes ensure every anklet stays untangled and protected. Ideal for jewelry stores, boutiques, and e-commerce brands, they blend luxury, durability, and aesthetic appeal.",
        "At BoxyPack, we create custom anklet packaging boxes wholesale that perfectly match your brand’s elegance. Choose minimalist kraft for natural appeal or glossy printed finishes for a sophisticated retail look. Each box is built with precision to maintain product integrity and enhance your customer’s unboxing experience.",
        "As a trusted jewelry anklet gift boxes supplier, we focus on quality craftsmanship, consistent branding, and competitive pricing. Whether for single pieces or jewelry sets, every design balances luxury and value at an affordable anklet boxes price.",
      ],
    },
    faq: buildFaq(
      "Anklet Boxes",
      [
        {
          question: "What materials are used in custom anklet boxes?",
          answer:
            "We use rigid cardboard, kraft, or specialty paperboard for premium strength.",
        },
        {
          question: "Can I include a logo or brand design?",
          answer:
            "Yes, BoxyPack offers full-color, foil, and embossed logo printing options.",
        },
        {
          question: "Do you offer inserts for holding jewelry?",
          answer:
            "Absolutely, we provide soft inserts, cushions, or foam bases for delicate items.",
        },
        {
          question: "Are bulk discounts available?",
          answer:
            "Yes, our custom anklet packaging boxes wholesale program includes competitive bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all our jewelry boxes are made from sustainable and recyclable materials.",
        },
      ],
      { heading: "Questions about Anklet Boxes", eyebrow: "Anklet Box FAQs" }
    ),
    cta: {
      title: "Packaging That Reflects Elegance",
      description:
        "Partner with BoxyPack to design anklet boxes that match the beauty of your jewelry. Our packaging experts help you create luxurious, protective, and stylish boxes that make every piece shine from store to unboxing.",
    },
  },

  // Subcategory: Velvet Bags
  "velvet-bags": {
    name: "Velvet Bags",
    description:
      "Soft, elegant, and luxurious. Buy velvet bags online for packaging that adds sophistication, protection, and premium appeal to your jewelry and gift collections.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Soft, premium velvet fabric with smooth texture",
      "Durable stitching and secure drawstring closure",
      "Full-color or foil logo printing options",
      "Ideal for jewelry, watches, and luxury gift packaging",
      "Reusable, lightweight, and travel-friendly design",
      "Eco-friendly and sustainable fabric options",
      "Available in multiple colors and custom sizes",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Premium Velvet / Micro-Velvet / Suede Finish",
        },
        {
          label: "Structure",
          value: "Drawstring / Flap / Button / Custom Shape",
        },
        {
          label: "Sizes",
          value: "Small, Medium, Large (Custom sizes available)",
        },
        {
          label: "Colors",
          value: "Black / Red / Royal Blue / Pink / Custom Shades",
        },
        {
          label: "Logo Options",
          value: "Embroidery / Foil Stamping / Screen Printing",
        },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Velvet Jewelry Bags Wholesale for Luxury Presentation",
      paragraphs: [
        "Our velvet bags are designed to give your jewelry packaging a refined, upscale touch. Crafted from premium velvet fabric, these bags offer softness, strength, and style—ideal for rings, bracelets, anklets, and necklaces. They protect delicate pieces while elevating your brand’s presentation.",
        "At BoxyPack, we manufacture custom velvet jewelry bags wholesale for jewelers, boutiques, and gift brands. Choose from drawstring, flap, or pouch styles in various sizes and colors. Add your logo with embroidery, foil stamping, or screen printing for a personalized look.",
        "As a trusted printed velvet pouch supplier, we ensure consistent quality, rich textures, and long-lasting stitching. Whether for retail or gifting, our products provide elegance at the best velvet bags price, suitable for both small and large orders.",
      ],
    },
    faq: buildFaq(
      "Velvet Bags",
      [
        {
          question: "What materials are used in velvet bags?",
          answer:
            "We use soft premium velvet and micro-velvet for a smooth and durable texture.",
        },
        {
          question: "Can I print or embroider my logo on the bags?",
          answer:
            "Yes, BoxyPack offers embroidery, foil, and printed logo options.",
        },
        {
          question: "Are these bags suitable for jewelry packaging?",
          answer:
            "Absolutely. They’re ideal for rings, earrings, bracelets, and small gifts.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer:
            "Yes, our custom velvet jewelry bags wholesale pricing includes bulk discounts.",
        },
        {
          question: "Are the bags eco-friendly?",
          answer:
            "Yes, our velvet fabrics are reusable, washable, and sustainably sourced.",
        },
      ],
      { heading: "Questions about Velvet Bags", eyebrow: "Velvet Bag FAQs" }
    ),
    cta: {
      description:
        "Partner with BoxyPack to design velvet bags that combine luxury and practicality. Our expert team delivers premium packaging solutions that protect your jewelry and elevate your brand’s elegance with every order.",
    },
  },

  // Subcategory: Kraft Jewelry Boxes
  "kraft-jewelry-boxes": {
    name: "Kraft Jewelry Boxes",
    description:
      "Natural, elegant, and durable. Buy kraft jewelry boxes online for eco-friendly packaging that protects your jewelry while highlighting your brand’s sustainable touch.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Made from 100% recycled and biodegradable materials",
      "Strong cardboard construction with smooth matte texture",
      "Full-color or logo printing available",
      "Ideal for jewelry shops, boutiques, and online stores",
      "Optional inserts or cushions for added protection",
      "Eco-friendly and recyclable packaging",
      "Available in natural brown or custom colors",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Recycled Kraft Paperboard / Cardboard",
        },
        { label: "Structure", value: "Two-Piece / Flip-Top / Drawer Style" },
        { label: "Thickness", value: "12PT / 16PT / 18PT" },
        { label: "Finish", value: "Matte / Natural / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Luxury Cardboard Jewelry Packaging for Premium Brands",
      paragraphs: [
        "Our kraft jewelry boxes combine simplicity, strength, and sustainability. Made from premium recycled kraft paperboard, they offer a natural look that’s perfect for eco-conscious brands. Ideal for rings, earrings, bracelets, and necklaces, these boxes provide secure protection with timeless style.",
        "At BoxyPack, we design custom printed kraft jewelry gift boxes that align with your brand’s aesthetic. Choose from plain brown tones for a minimal feel or printed designs for professional branding. Each box is carefully made to deliver durability, clean edges, and smooth finishing for a refined presentation.",
        "As a kraft jewelry boxes wholesale supplier, we focus on combining eco safety with cost efficiency. Whether for small boutique packaging or bulk retail use, we deliver consistent quality at the best kraft jewelry boxes price on the market.",
      ],
    },
    faq: buildFaq(
      "Kraft Jewelry Boxes",
      [
        {
          question: "What materials are used for kraft jewelry boxes?",
          answer: "They’re made from durable recycled kraft paperboard.",
        },
        {
          question: "Can I customize my kraft jewelry boxes with a logo?",
          answer:
            "Yes, BoxyPack offers full-color printing and foil stamping options.",
        },
        {
          question: "Are these boxes suitable for high-end jewelry?",
          answer:
            "Absolutely. With soft-touch finishes or inserts, they look elegant and professional.",
        },
        {
          question: "Do you provide wholesale discounts?",
          answer:
            "Yes, our kraft jewelry boxes wholesale supplier program includes bulk pricing benefits.",
        },
        {
          question: "Are the boxes eco-friendly?",
          answer:
            "Yes, every kraft jewelry box is biodegradable and recyclable.",
        },
      ],
      {
        heading: "Questions about Kraft Jewelry Boxes",
        eyebrow: "Kraft Jewelry Box FAQs",
      }
    ),
    cta: {
      title: "Packaging That Elevates Every Jewel",
      description:
        "Partner with BoxyPack to design kraft jewelry boxes that combine beauty, protection, and environmental care. Our team helps you create eco-friendly packaging that enhances your jewelry and reflects your brand’s sustainable promise.",
    },
  },

  // Subcategory: Cardboard Jewelry Boxes
  "cardboard-jewelry-boxes": {
    name: "Cardboard Jewelry Boxes",
    description:
      "Elegant, protective, and perfectly crafted. Buy cardboard jewelry boxes online for packaging that keeps every piece secure, stylish, and ready for presentation.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable and high-quality cardboard construction",
      "Full-color or metallic foil logo printing",
      "Optional foam, velvet, or satin inserts for protection",
      "Eco-friendly and recyclable materials",
      "Available in kraft, white, or custom printed finishes",
      "Perfect for jewelry sets, gifting, or retail display",
      "Lightweight, rigid, and easy to store",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Cardboard / Kraft / Art Paperboard" },
        {
          label: "Structure",
          value: "Two-Piece / Drawer / Flip-Top / Magnetic Lid",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Cardboard Jewelry Boxes for Reliable Protection",
      paragraphs: [
        "Our cardboard jewelry boxes are built for strength, sophistication, and durability. Made from premium-grade cardboard, they ensure your jewelry pieces remain safe from scratches, moisture, and damage. Perfect for rings, earrings, bracelets, and necklaces, these boxes elevate your brand image while protecting your products.",
        "At BoxyPack, we design custom printed jewelry boxes that align with your store’s personality and product line. Whether you prefer a minimalist matte look or a luxurious printed design, every box is precision-cut for structure and smooth edges. Available with inserts, cushions, or velvet linings, they bring a refined, elegant presentation to every jewelry item.",
        "As a custom printed jewelry boxes supplier, we deliver reliability, beauty, and value. From small boutiques to large-scale retailers, we offer consistent quality and competitive cardboard jewelry boxes price for bulk and retail packaging.",
      ],
    },
    faq: buildFaq(
      "Cardboard Jewelry Boxes",
      [
        {
          question: "What materials are used for cardboard jewelry boxes?",
          answer:
            "We use high-grade cardboard and art paper for strength and beauty.",
        },
        {
          question: "Can I add foam or velvet inserts?",
          answer:
            "Yes, BoxyPack offers multiple insert options for jewelry safety and display.",
        },
        {
          question: "Are these boxes suitable for gifting?",
          answer:
            "Absolutely. They’re perfect for both personal gifts and retail packaging.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer:
            "Yes, our cardboard jewelry packaging boxes wholesale program includes bulk discounts.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer: "Yes, all materials are recyclable and sustainably produced.",
        },
      ],
      {
        heading: "Questions about Cardboard Jewelry Boxes",
        eyebrow: "Cardboard Jewelry Box FAQs",
      }
    ),
    cta: {
      description:
        "Partner with BoxyPack to design cardboard jewelry boxes that combine luxury, strength, and sustainability. Our team helps you create elegant packaging that protects your products and highlights your brand’s craftsmanship at every glance.",
    },
  },

  // Subcategory: Jewelry Subscription Box
  "jewelry-subscription-box": {
    name: "Jewelry Subscription Box",
    description:
      "Stylish, strong, and subscription-ready. Buy jewelry subscription boxes online for packaging that adds luxury, protection, and excitement to every monthly delivery.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Strong cardboard or rigid paperboard construction",
      "Full-color and foil printing for brand consistency",
      "Optional inserts for rings, necklaces, or earrings",
      "Magnetic closure or drawer-style options available",
      "Eco-friendly and recyclable packaging materials",
      "Available in matte, gloss, or luxury soft-touch finishes",
      "Perfect for subscription, retail, or gift packaging",
    ],
    customization: {
      details: [
        { label: "Material Type", value: "Cardboard / Rigid / Art Paperboard" },
        {
          label: "Structure",
          value: "Magnetic Closure / Drawer / Two-Piece / Flip-Top",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Jewelry Subscription Boxes for Monthly Delights",
      paragraphs: [
        "Our jewelry subscription boxes are designed to impress from the moment they arrive. Built from sturdy, high-quality cardboard, they protect jewelry pieces while providing a polished, elegant presentation. Perfect for monthly or seasonal subscription services, they balance durability, design, and brand identity.",
        "At BoxyPack, we specialize in creating custom jewelry subscription packaging tailored to your brand. Choose matte, gloss, or textured finishes to match your jewelry style. Add magnetic closures, printed interiors, or inserts for an elevated unboxing experience that keeps subscribers excited every month.",
        "As a subscription boxes for jewelry wholesale manufacturer, we deliver premium materials, precise printing, and affordable bulk pricing. Each order offers a refined balance between beauty and practicality, with flexible options and the best jewelry subscription boxes price available.",
      ],
    },
    faq: buildFaq(
      "Jewelry Subscription Box",
      [
        {
          question: "What are jewelry subscription boxes made from?",
          answer:
            "They’re crafted from premium cardboard or rigid paperboard for strength.",
        },
        {
          question: "Can I add custom printing and interior designs?",
          answer:
            "Yes, BoxyPack offers full customization, including inner prints and inserts.",
        },
        {
          question: "Are these boxes suitable for shipping?",
          answer:
            "Absolutely. They’re designed for both protection and presentation.",
        },
        {
          question: "Do you provide wholesale pricing?",
          answer:
            "Yes, our subscription boxes for jewelry wholesale program includes bulk discounts.",
        },
        {
          question: "Are the boxes eco-friendly?",
          answer:
            "Yes, all our jewelry subscription boxes are recyclable and sustainably made.",
        },
      ],
      {
        heading: "Questions about Jewelry Subscription Boxes",
        eyebrow: "Subscription Box FAQs",
      }
    ),
    cta: {
      description:
        "Partner with BoxyPack to design jewelry subscription boxes that elevate your unboxing experience. Our packaging experts craft premium boxes that protect your jewelry, impress subscribers, and strengthen your brand with every delivery.",
    },
  },

  // Subcategory: Pendant Boxes
  "pendant-boxes": {
    name: "Pendant Boxes",
    description:
      "Elegant, secure, and crafted with precision. Buy pendant boxes online for packaging that protects, presents, and enhances your jewelry with timeless appeal.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "High-quality cardboard or rigid box structure",
      "Soft velvet or foam inserts for jewelry protection",
      "Full-color, foil, or embossed logo printing",
      "Eco-friendly and recyclable materials",
      "Ideal for jewelry stores, boutiques, and gift packaging",
      "Available in matte, gloss, or soft-touch finishes",
      "Custom sizes and branding available",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Cardboard / Kraft / Paperboard",
        },
        {
          label: "Structure",
          value: "Flip-Top / Magnetic Lid / Two-Piece Box",
        },
        { label: "Thickness", value: "16PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        {
          label: "Printing",
          value: "Inside, Outside, or Both",
        },
        {
          label: "Dimensions (L × W × H)",
          value: "Custom sizes available",
        },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Pendant Packaging Boxes Wholesale for Jewelry Brands",
      paragraphs: [
        "Our pendant boxes are designed to bring sophistication and safety together. Built from durable, high-quality cardboard or rigid materials, they protect delicate pendants from damage while adding a premium touch to presentation. Perfect for jewelry stores, boutiques, and gift packaging, these boxes combine practicality with elegance.",
        "At BoxyPack, we specialize in custom pendant packaging boxes wholesale tailored to your brand’s design and standards. Choose from soft-touch finishes, printed interiors, or velvet linings to elevate your jewelry display. Each box is engineered for long-lasting use, offering a refined look and flawless structure.",
        "As a reliable pendant gift boxes supplier near me, we provide consistent quality, fast turnaround, and affordable bulk options. Every design delivers protection, presentation, and value making our pendant boxes price the best fit for jewelry businesses of all sizes.",
      ],
    },
    faq: buildFaq(
      "Pendant Boxes",
      [
        {
          question: "What materials are used in pendant boxes?",
          answer:
            "We use rigid cardboard, kraft, or specialty paperboard for strength and luxury.",
        },
        {
          question: "Can I print my brand logo on the boxes?",
          answer:
            "Yes, BoxyPack offers foil, emboss, and full-color logo printing.",
        },
        {
          question: "Do the boxes include inserts for jewelry?",
          answer:
            "Yes, soft velvet or foam inserts are included for secure display.",
        },
        {
          question: "Do you provide bulk discounts?",
          answer:
            "Yes, our custom pendant packaging boxes wholesale program includes flexible bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer: "Yes, all materials are recyclable and responsibly sourced.",
        },
      ],
      { heading: "Questions about Pendant Boxes", eyebrow: "Pendant Box FAQs" }
    ),
    cta: {
      title: "Elegant Protection for Every Pendant",
      description:
        "Partner with BoxyPack to create pendant boxes that combine luxury, strength, and brand identity. Our team crafts packaging that protects your jewelry, enhances presentation, and adds elegance to every unboxing experience.",
    },
  },

  // Subcategory: Bracelet Boxes
  "bracelet-boxes": {
    name: "Bracelet Boxes",
    description:
      "Stylish, durable, and designed for elegance. Buy bracelet boxes online for packaging that combines strength, beauty, and premium jewelry presentation.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Rigid cardboard construction ensures long-lasting strength",
      "Soft velvet or foam inserts for jewelry protection",
      "Full-color, foil, or embossed logo printing options",
      "Eco-friendly, recyclable, and premium materials",
      "Available in multiple shapes, sizes, and finishes",
      "Perfect for bracelets, bangles, and jewelry sets",
      "Lightweight and stackable design for retail storage",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Cardboard / Kraft / Paperboard",
        },
        {
          label: "Structure",
          value: "Two-Piece / Magnetic Lid / Drawer Style",
        },
        { label: "Thickness", value: "16PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Printed Bracelet Gift Boxes for Jewelry Brands",
      paragraphs: [
        "Our bracelet boxes are crafted to protect your jewelry while enhancing its appeal. Built from strong cardboard or rigid paperboard, these boxes provide both durability and a luxurious touch. Perfect for jewelry stores, boutiques, and gift packaging, they highlight your bracelets with a refined and professional look.",
        "At BoxyPack, we produce custom printed bracelet gift boxes that reflect your brand identity. Choose from matte, gloss, or soft-touch finishes and add your logo through foil stamping or embossing for a distinctive appearance. Every box is carefully constructed for strength, style, and smooth finishing.",
        "As a bracelet packaging boxes wholesale supplier, we provide exceptional quality, eco-friendly materials, and cost-effective pricing. Whether you need small batches or large bulk orders, we ensure your products arrive with elegance at a competitive bracelet boxes price.",
      ],
    },
    faq: buildFaq(
      "Bracelet Boxes",
      [
        {
          question: "What materials are used for bracelet boxes?",
          answer:
            "We use premium rigid cardboard or paperboard for strength and quality.",
        },
        {
          question: "Can I print my logo on the bracelet boxes?",
          answer:
            "Yes, BoxyPack offers custom foil, emboss, and color printing options.",
        },
        {
          question: "Do these boxes include jewelry inserts?",
          answer:
            "Yes, soft velvet or foam inserts can be added for added protection.",
        },
        {
          question: "Are bulk order discounts available?",
          answer:
            "Yes, our bracelet packaging boxes wholesale supplier program includes competitive bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all our bracelet boxes are recyclable and made from sustainable materials.",
        },
      ],
      {
        heading: "Questions about Bracelet Boxes",
        eyebrow: "Bracelet Box FAQs",
      }
    ),
    cta: {
      title: "Elegant Packaging, Timeless Appeal",
      description:
        "Partner with BoxyPack to create bracelet boxes that merge style and protection. Our packaging experts deliver designs that elevate your jewelry presentation, enhance your brand, and leave a lasting impression with every purchase.",
    },
  },

  // Subcategory: Ring Boxes
  "ring-boxes": {
    name: "Ring Boxes",
    description:
      "Elegant, compact, and made to impress. Buy ring boxes online for jewelry packaging that combines luxury, strength, and timeless design for every special occasion.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Rigid or cardboard build for premium strength",
      "Soft velvet or foam inserts for jewelry support",
      "Full-color, foil, or embossed logo printing",
      "Eco-friendly and recyclable materials",
      "Available in matte, gloss, or soft-touch finishes",
      "Ideal for engagement, wedding, and gift packaging",
      "Lightweight, durable, and reusable design",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Cardboard / Kraft / Paperboard",
        },
        {
          label: "Structure",
          value: "Two-Piece / Flip-Top / Magnetic Closure",
        },
        { label: "Thickness", value: "16PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Ring Boxes for Special Moments",
      paragraphs: [
        "Our ring boxes are crafted to add sophistication to every proposal, gift, or jewelry purchase. Made from sturdy cardboard or rigid material, they keep rings secure while offering a premium presentation. Ideal for jewelry shops, boutiques, and gift packaging, these boxes bring elegance to every display.",
        "At BoxyPack, we design custom ring packaging boxes wholesale that perfectly match your brand’s personality. Choose from kraft for eco simplicity or soft-touch finishes for luxury appeal. Add velvet inserts, foil stamping, or embossing to make every ring box unique and memorable.",
        "As a luxury ring gift boxes supplier, we deliver quality craftsmanship, consistent printing, and eco-friendly materials. Whether you order for retail, gifting, or e-commerce packaging, we provide top-quality solutions at the most competitive ring boxes price.",
      ],
    },
    faq: buildFaq(
      "Ring Boxes",
      [
        {
          question: "What materials are used for ring boxes?",
          answer:
            "We use rigid cardboard, kraft, or paperboard with soft inserts.",
        },
        {
          question: "Can I print my logo on the ring boxes?",
          answer:
            "Yes, BoxyPack offers foil, embossing, and full-color logo printing.",
        },
        {
          question: "Do you offer velvet or foam inserts?",
          answer:
            "Absolutely. We provide multiple insert types for premium jewelry display.",
        },
        {
          question: "Are bulk discounts available?",
          answer:
            "Yes, our custom ring packaging boxes wholesale program includes wholesale pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, our eco friendly ring packaging boxes are recyclable and sustainably made.",
        },
      ],
      { heading: "Questions about Ring Boxes", eyebrow: "Ring Box FAQs" }
    ),
    cta: {
      title: "Small Box, Big Moment",
      description:
        "Partner with BoxyPack to create ring boxes that add luxury and meaning to every unboxing. Our packaging experts design elegant, durable, and eco-conscious boxes that showcase your jewelry beautifully and leave a lasting impression.",
    },
  },

  // Subcategory: Earring Boxes
  "earring-boxes": {
    name: "Earring Boxes",
    description:
      "Stylish, protective, and made to impress. Buy earring boxes online for packaging that blends luxury, durability, and elegance for every jewelry collection.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable cardboard or rigid structure for strength",
      "Soft velvet or foam inserts for earring protection",
      "Full-color, foil, or embossed logo printing",
      "Eco-friendly, recyclable, and lightweight design",
      "Available in matte, gloss, or soft-touch finishes",
      "Perfect for jewelry shops, boutiques, and gifting",
      "Customizable sizes and layouts",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Cardboard / Kraft / Paperboard",
        },
        {
          label: "Structure",
          value: "Two-Piece / Drawer / Magnetic Lid / Flip-Top",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Earring Packaging Boxes Wholesale for Jewelry Brands",
      paragraphs: [
        "Our earring boxes are designed to keep your jewelry safe while enhancing its presentation. Crafted from strong, high-quality cardboard or rigid materials, they protect delicate earrings and add a premium look to your display. Perfect for jewelry stores, gift packaging, and online boutiques, these boxes provide elegance and reliability.",
        "At BoxyPack, we specialize in custom earring packaging boxes wholesale that suit your brand’s unique style. Choose from kraft for eco appeal, matte finishes for simplicity, or luxury velvet linings for premium retail packaging. Each box is crafted to perfection to showcase your earrings beautifully.",
        "As a luxury earring gift boxes supplier, we ensure every product combines quality, consistency, and affordability. From small orders to large wholesale batches, we deliver dependable craftsmanship at the best earring boxes price in the market.",
      ],
    },
    faq: buildFaq(
      "Earring Boxes",
      [
        {
          question: "What materials are used for earring boxes?",
          answer:
            "We use premium rigid cardboard or kraft paperboard for strength and style.",
        },
        {
          question: "Can I add my brand logo to the boxes?",
          answer:
            "Yes, BoxyPack offers foil, embossing, and full-color printing options.",
        },
        {
          question: "Do these boxes include inserts?",
          answer:
            "Yes, we offer velvet, foam, or fabric inserts for secure jewelry placement.",
        },
        {
          question: "Are bulk discounts available?",
          answer:
            "Yes, our custom earring packaging boxes wholesale program includes competitive bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Absolutely. Our materials are recyclable and responsibly sourced.",
        },
      ],
      { heading: "Questions about Earring Boxes", eyebrow: "Earring Box FAQs" }
    ),
    cta: {
      title: "Delicate Design, Strong Impression",
      description:
        "Partner with BoxyPack to create earring boxes that elevate your jewelry presentation. Our team crafts elegant, durable, and eco-friendly packaging that protects your products and strengthens your brand with every unboxing.",
    },
  },

  // Subcategory: Luxury Jewelry Packaging
  "luxury-jewelry-packaging": {
    name: "Luxury Jewelry Packaging",
    description:
      "Premium luxury jewelry packaging designed to elevate your brand. Sophisticated materials, elegant finishes, and fully customized packaging that creates unforgettable unboxing experiences.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Premium materials and finishes",
      "Luxurious velvet or satin lining",
      "Foil stamping and embossing options",
      "Custom inserts for jewelry protection",
      "Fully customizable with premium branding",
      "Multiple styles and sizes available",
      "Unforgettable unboxing experiences",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Premium paperboard with velvet, satin, or silk lining",
        },
        {
          label: "Structure",
          value: "Hinged lid, drawer-style, or magnetic closure boxes",
        },
        { label: "Thickness", value: "24pt / 32pt board for premium feel" },
        {
          label: "Finish",
          value: "Soft-touch, velvet wrap, or premium lamination",
        },
        {
          label: "Printing",
          value: "Foil stamping, embossing, debossing, and metallic accents",
        },
        {
          label: "Lining",
          value: "Premium velvet, satin, or silk lining options",
        },
        {
          label: "Special Features",
          value: "Magnetic closures, ribbon ties, and custom inserts",
        },
        {
          label: "Dimensions (L x W x H)",
          value: "Custom sizes for all jewelry types",
        },
        {
          label: "Quantity",
          value: "Starting at 50 units with premium pricing",
        },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Luxury Jewelry Packaging for Premium Brands",
      paragraphs: [
        "Our luxury jewelry packaging is designed for brands that demand the highest level of sophistication and elegance. Every detail, from the premium materials to the luxurious finishes, is crafted to create an unforgettable unboxing experience.",
        "Perfect for high-end jewelry retailers, fine jewelry brands, and luxury gift shops. These packaging solutions combine premium materials like velvet and silk with sophisticated finishes like foil stamping and embossing.",
        "Every luxury package can be fully customized with your branding, creating a cohesive look that reinforces your premium brand identity. The attention to detail in luxury packaging elevates your brand and creates lasting impressions.",
      ],
    },
    faq: buildFaq(
      "Luxury Jewelry Packaging",
      [
        {
          question: "What makes packaging luxury?",
          answer:
            "Luxury packaging features premium materials, sophisticated finishes like foil stamping and embossing, high-quality linings, and attention to detail that creates an exceptional unboxing experience.",
        },
        {
          question: "What premium finishes are available?",
          answer:
            "We offer foil stamping, embossing, debossing, soft-touch lamination, velvet wrap, and metallic accents to create truly luxurious packaging.",
        },
        {
          question: "Can I get custom inserts for luxury packaging?",
          answer:
            "Absolutely. We can create custom velvet or foam inserts that hold jewelry pieces securely and beautifully, adding to the luxury experience.",
        },
        {
          question: "What materials are used in luxury packaging?",
          answer:
            "Luxury packaging uses premium paperboard, velvet or silk linings, and sophisticated finishes that create a premium feel and appearance.",
        },
        {
          question: "What is the minimum order for luxury packaging?",
          answer:
            "Our minimum order for luxury packaging is 50 units, allowing you to create premium packaging even for smaller production runs.",
        },
      ],
      {
        heading: "Questions about Luxury Jewelry Packaging",
        eyebrow: "Luxury Packaging FAQs",
      }
    ),
    cta: {
      title: "Elevate Your Brand with Luxury Packaging",
      description:
        "Create luxury jewelry packaging that reflects your brand's sophistication. Contact BoxyPack today to design premium packaging that creates unforgettable experiences.",
    },
  },

  // Subcategory: Necklace Boxes
  "necklace-boxes": {
    name: "Necklace Boxes",
    description:
      "Elegant, secure, and beautifully crafted. Buy necklace boxes online for packaging that protects your jewelry while highlighting its beauty with a premium presentation.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Rigid cardboard or paperboard for premium durability",
      "Soft velvet or satin inserts for jewelry protection",
      "Full-color or foil logo printing options",
      "Eco-friendly and recyclable materials",
      "Available in kraft, matte, or glossy finishes",
      "Ideal for necklaces, pendants, and jewelry",
      "Optional magnetic or drawer-style design",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Cardboard / Kraft / Art Paperboard",
        },
        {
          label: "Structure",
          value: "Flip-Top / Magnetic Lid / Drawer / Two-Piece",
        },
        { label: "Thickness", value: "16PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Necklace Packaging Boxes Wholesale for Jewelry Brands",
      paragraphs: [
        "Our necklace boxes are designed to balance protection and style. Made from high-quality rigid or cardboard material, they keep necklaces tangle-free, secure, and display-ready. Ideal for jewelers, boutiques, and gifting, these boxes deliver elegance and reliability for every piece you showcase.",
        "At BoxyPack, we craft custom necklace packaging boxes wholesale to suit your brand’s personality and product line. Choose from kraft, matte, or luxury soft-touch finishes, and add inserts, ribbons, or logo printing for a refined, personalized touch. Every box is precisely constructed to give your jewelry the sophistication it deserves.",
        "As a necklace gift boxes supplier near me, we provide exceptional build quality, premium materials, and flexible bulk pricing. Whether for individual items or full jewelry sets, our packaging delivers style and protection at the best necklace boxes price.",
      ],
    },
    faq: buildFaq(
      "Necklace Boxes",
      [
        {
          question: "What materials are used for necklace boxes?",
          answer:
            "We use rigid cardboard, kraft, or paperboard for lasting strength and elegance.",
        },
        {
          question: "Can I print my logo on the necklace boxes?",
          answer:
            "Yes, BoxyPack offers foil stamping, embossing, and full-color logo printing.",
        },
        {
          question: "Do you provide inserts for necklaces?",
          answer:
            "Absolutely. We offer velvet, foam, or satin inserts for secure placement.",
        },
        {
          question: "Are bulk discounts available?",
          answer:
            "Yes, our custom necklace packaging boxes wholesale program includes bulk pricing.",
        },
        {
          question: "Are the boxes eco-friendly?",
          answer:
            "Yes, all our boxes are recyclable and produced from sustainable materials.",
        },
      ],
      {
        heading: "Questions about Necklace Boxes",
        eyebrow: "Necklace Box FAQs",
      }
    ),
    cta: {
      title: "Elegant Design, Exceptional Protection",
      description:
        "Partner with BoxyPack to create necklace boxes that elevate your jewelry’s presentation. Our experts design packaging that safeguards your pieces while adding the luxury and professionalism your brand deserves.",
    },
  },

  // Subcategory: Small Jewelry Boxes
  "small-jewelry-boxes": {
    name: "Small Jewelry Boxes",
    description:
      "Compact, elegant, and built for beauty. Buy small jewelry boxes online for packaging that adds charm and protection to every jewelry piece you sell or gift.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "High-quality cardboard or rigid structure for strength",
      "Compact design ideal for rings and earrings",
      "Soft velvet or foam inserts for jewelry protection",
      "Eco-friendly and recyclable materials",
      "Full-color or foil logo printing options",
      "Available in matte, gloss, or soft-touch finishes",
      "Lightweight and perfect for retail and gifting",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Rigid Cardboard / Kraft / Paperboard",
        },
        {
          label: "Structure",
          value: "Two-Piece / Flip-Top / Drawer / Magnetic Lid",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Mini Jewelry Gift Packaging Boxes for Jewelry Brands",
      paragraphs: [
        "Our small jewelry boxes are designed to showcase your jewelry with sophistication and care. Made from durable cardboard or rigid material, they provide protection while keeping a sleek, minimal profile. Ideal for rings, earrings, and small accessories, these boxes make every piece feel special.",
        "At BoxyPack, we create custom printed small jewelry boxes that align with your brand’s identity. Choose your preferred finish, color, and logo placement to add a personal touch to your packaging. Each box is engineered for precision and presentation perfect for boutiques, online stores, and retail counters.",
        "As a small jewelry boxes wholesale supplier, we combine quality materials, creative design, and cost-effective solutions. Whether you need eco-friendly kraft boxes or luxury rigid packaging, we offer dependable products at the most competitive small jewelry boxes price.",
      ],
    },
    faq: buildFaq(
      "Small Jewelry Boxes",
      [
        {
          question: "What materials are used for small jewelry boxes?",
          answer:
            "We use rigid cardboard, kraft, or paperboard for strong and lasting protection.",
        },
        {
          question: "Can I print my brand logo on the boxes?",
          answer:
            "Yes, BoxyPack offers custom printing, embossing, and foil stamping.",
        },
        {
          question: "Do these boxes include inserts?",
          answer:
            "Yes, we offer soft velvet or foam inserts for jewelry display and safety.",
        },
        {
          question: "Are wholesale discounts available?",
          answer:
            "Yes, our small jewelry boxes wholesale supplier program includes competitive bulk rates.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Absolutely. All our packaging is recyclable and made from sustainable sources.",
        },
      ],
      {
        heading: "Questions about Small Jewelry Boxes",
        eyebrow: "Small Jewelry Box FAQs",
      }
    ),
    cta: {
      description:
        "Partner with BoxyPack to design small jewelry boxes that combine simplicity, elegance, and strength. Our team delivers packaging that protects your jewelry and enhances your brand’s image with every sale or gift.",
    },
  },

  // Subcategory: Necklace Cards
  "necklace-cards": {
    name: "Necklace Cards",
    description:
      "Sleek, stylish, and practical. Buy necklace cards online for elegant jewelry display and professional presentation that highlights your brand’s charm.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "High-quality and thick cardstock for durability",
      "Pre-cut holes and slits for necklace display",
      "Full-color or foil logo printing options",
      "Eco-friendly and recyclable materials",
      "Available in kraft, matte, or glossy finishes",
      "Perfect for retail, boutiques, and online stores",
      "Custom shapes, sizes, and designs available",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft / White Cardstock / Recycled Paperboard",
        },
        {
          label: "Structure",
          value: "Flat Display Card / Folded / Hanging Style",
        },
        { label: "Thickness", value: "14PT / 16PT / 18PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Single Side / Double Side / Full Color" },
        { label: "Dimensions (L × W)", value: "Custom sizes available" },
        { label: "Quantity", value: "500 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Necklace Display Cards Wholesale for Jewelry Brands",
      paragraphs: [
        "Our necklace cards are crafted to showcase your jewelry beautifully while keeping it organized and secure. Made from durable, high-quality cardstock, these display cards are perfect for retail shops, craft fairs, or e-commerce packaging. Each card combines strength with style to enhance your brand’s visual appeal.",
        "At BoxyPack, we produce custom necklace display cards wholesale tailored to your branding and jewelry style. Choose from plain kraft for minimal design or printed cards with full-color logos for professional retail packaging. Every piece is made with precision to help your products stand out on shelves or online.",
        "As a jewelry necklace cards supplier, we deliver exceptional quality, eco-friendly materials, and flexible pricing. Whether you need small batches for boutique displays or bulk quantities for retail chains, we ensure consistent quality at a competitive necklace cards price.",
      ],
    },
    faq: buildFaq(
      "Necklace Cards",
      [
        {
          question: "What materials are used for necklace cards?",
          answer:
            "We use premium cardstock or recycled paperboard for durability and style.",
        },
        {
          question: "Can I add my logo and branding?",
          answer:
            "Yes, BoxyPack offers full-color and foil logo printing options.",
        },
        {
          question: "Do these cards fit all necklace types?",
          answer: "Yes, they can be customized for pendants, chains, or sets.",
        },
        {
          question: "Are wholesale discounts available?",
          answer:
            "Yes, our custom necklace display cards wholesale program includes bulk pricing benefits.",
        },
        {
          question: "Are these necklace cards eco-friendly?",
          answer:
            "Yes, all materials are recyclable and sourced from sustainable suppliers.",
        },
      ],
      {
        heading: "Questions about Necklace Cards",
        eyebrow: "Necklace Card FAQs",
      }
    ),
    cta: {
      description:
        "Partner with BoxyPack to create necklace cards that combine elegance and practicality. Our team crafts premium-quality display cards that highlight your jewelry, strengthen your branding, and deliver professional presentation in every collection.",
    },
  },

  // Subcategory: Jewelry Bags
  "jewelry-bags": {
    name: "Jewelry Bags",
    description:
      "Elegant, practical, and brand-ready. Buy jewelry bags online for premium packaging that adds a refined finishing touch to every purchase or gift.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable and eco-friendly paper, kraft, or fabric materials",
      "Full-color, foil, or embossed logo printing",
      "Available with ribbon handles, rope cords, or drawstrings",
      "Perfect for retail packaging and gifting",
      "Available in matte, gloss, or textured finishes",
      "Reusable, recyclable, and lightweight",
      "Custom sizes and colors available",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Paper / Kraft / Velvet / Cotton / Fabric",
        },
        {
          label: "Structure",
          value: "Flat Bag / Gusset Bag / Pouch / Drawstring Style",
        },
        {
          label: "Thickness",
          value: "120 GSM – 300 GSM (paper) / 180 GSM – 220 GSM (fabric)",
        },
        { label: "Finish", value: "Matte / Gloss / Textured / Foil Stamping" },
        { label: "Printing", value: "Single Side / Double Side / Full Color" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "500 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Jewelry Packaging Bags Wholesale for Premium Brands",
      paragraphs: [
        "Our jewelry bags combine sophistication and strength to deliver elegant packaging for necklaces, earrings, bracelets, and rings. Made from high-quality kraft, paper, or fabric materials, they’re perfect for retail stores, gift boutiques, and jewelry exhibitions. Each bag enhances your brand’s presentation while ensuring convenience and protection.",
        "At BoxyPack, we specialize in custom jewelry packaging bags wholesale designed around your brand’s aesthetic. Choose from printed paper bags with handles, velvet pouches for luxury gifting, or eco-friendly kraft bags for sustainable presentation. Every design is made with care to elevate your customer experience.",
        "As a printed jewelry gift bags supplier, we provide premium quality, flawless finishing, and flexible order options. Whether you’re restocking your boutique or fulfilling large retail orders, we offer consistent craftsmanship at a competitive jewelry bags price.",
      ],
    },
    faq: buildFaq(
      "Jewelry Bags",
      [
        {
          question: "What materials are available for jewelry bags?",
          answer:
            "We offer kraft, paper, velvet, and cotton options for all jewelry types.",
        },
        {
          question: "Can I add my brand logo to the bags?",
          answer:
            "Yes, BoxyPack offers foil stamping, embossing, and full-color printing.",
        },
        {
          question: "Do these bags come with handles or drawstrings?",
          answer:
            "Yes, choose from ribbon handles, rope cords, or fabric drawstrings.",
        },
        {
          question: "Do you provide wholesale discounts?",
          answer:
            "Yes, our custom jewelry packaging bags wholesale program includes bulk pricing.",
        },
        {
          question: "Are these bags eco-friendly?",
          answer:
            "Absolutely. All our jewelry bags are recyclable and reusable.",
        },
      ],
      { heading: "Questions about Jewelry Bags", eyebrow: "Jewelry Bag FAQs" }
    ),
    cta: {
      title: "Luxury in Every Detail",
      description:
        "Partner with BoxyPack to design jewelry bags that combine class, sustainability, and functionality. Our team helps you create custom packaging that protects your jewelry, delights customers, and enhances your brand’s image with every order.",
    },
  },

  // Category: Soap Boxes
  // Subcategory: Soap Sleeve Packaging
  "soap-sleeve-packaging": {
    name: "Soap Sleeve Packaging",
    description:
      "Elegant soap sleeve packaging that wraps your soap bars beautifully. Customizable, protective, and fully branded packaging perfect for handmade and artisanal soaps.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Protective sleeve wraps soap securely",
      "Customizable with your soap brand",
      "Moisture-resistant materials",
      "Easy to open and reseal",

      "Full-color printing options",
      "Multiple sizes for various soap bars",
      "Eco-friendly and recyclable materials",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft paper, white paperboard, or moisture-resistant paper",
        },
        { label: "Structure", value: "Sleeve with tuck-end or seal closure" },
        { label: "Thickness", value: "14pt / 18pt paperboard" },
        {
          label: "Finish",
          value: "Matte, gloss, or uncoated with custom printing",
        },
        {
          label: "Printing",
          value: "Full-color CMYK printing with custom logo and designs",
        },
        {
          label: "Closure",
          value: "Tuck-end, adhesive seal, or resealable options",
        },
        {
          label: "Dimensions",
          value: "Custom sizes to fit your soap bar dimensions",
        },
        { label: "Quantity", value: "Starting at 250 units with bulk pricing" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Soap Sleeve Boxes Wholesale for Modern Brands",
      paragraphs: [
        "Our soap sleeve packaging provides an elegant way to wrap and protect your soap bars. These customizable sleeves keep soaps clean and protected while showcasing your brand beautifully.",
        "Perfect for handmade soaps, artisanal products, and retail displays. The sleeve design allows customers to see your soap while keeping it protected from moisture and handling.",
        "Every sleeve can be customized with your branding, colors, and messaging, creating a cohesive look that reinforces your brand identity. The easy-open design makes it convenient for customers while maintaining product freshness.",
      ],
    },
    faq: buildFaq(
      "Soap Sleeve Packaging",
      [
        {
          question: "Are soap sleeves moisture-resistant?",
          answer:
            "Yes, we can provide moisture-resistant materials and coatings that protect your soap from humidity and maintain product quality.",
        },
        {
          question: "Can I customize the sleeve design?",
          answer:
            "Absolutely. We offer full-color printing, custom logos, and design options to create sleeves that match your brand aesthetic perfectly.",
        },
        {
          question: "What sizes are available?",
          answer:
            'We offer custom sizes to fit your specific soap bar dimensions. Standard sizes range from small (2" x 3") to large (4" x 6") soap bars.',
        },
        {
          question: "Can I add resealable closures?",
          answer:
            "Yes, we can add resealable adhesive closures or tuck-end designs that allow customers to open and close the sleeve easily.",
        },
        {
          question: "What is the minimum order quantity?",
          answer:
            "Our minimum order is 250 sleeves, with bulk discounts available for larger quantities, making it affordable for both small and large soap makers.",
        },
      ],
      {
        heading: "Questions about Soap Sleeve Packaging",
        eyebrow: "Soap Sleeve FAQs",
      }
    ),
    cta: {
      title: "Sustainable Style, Perfect Fit",
      description:
        "Get custom soap sleeve packaging that protects your products and showcases your brand. Contact BoxyPack today for a quote on your soap packaging needs.",
    },
  },

  // Subcategory: Custom Bath Bomb Boxes
  "custom-bath-bomb-boxes": {
    name: "Custom Bath Bomb Boxes",
    description:
      "Vibrant, secure, and beautifully designed. Buy bath bomb boxes online for packaging that keeps products safe while adding luxury and style to every display.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Strong cardboard or kraft build for moisture protection",
      "Full-color, foil, or embossed logo printing",
      "Available with single or multi-product compartments",
      "Eco-friendly and recyclable materials",
      "Optional die-cut windows for product display",
      "Matte, gloss, or soft-touch finish options",
      "Perfect for retail, spa, or gift packaging",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Cardboard / Kraft / Rigid Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-End / Two-Piece / Window Cut / Sleeve Style",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Foil Embossing",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Bath Bomb Packaging Boxes Wholesale Supplier for Premium Brands",
      paragraphs: [
        "Our bath bomb boxes are crafted to combine strength, style, and sustainability. Made from durable cardboard or kraft material, they keep bath bombs secure from moisture, impact, and deformation while enhancing shelf appeal. Perfect for retail stores, spa products, and gift packaging, these boxes add a refined touch to your brand.",
        "At BoxyPack, we design custom printed bath bomb gift boxes that fit your product dimensions and brand personality. Choose from single or multi-insert layouts, window cutouts for product visibility, and matte or glossy finishes to match your branding. Each box is carefully built for protection and presentation.",
        "As a trusted bath bomb packaging boxes wholesale supplier, we deliver top-quality printing, eco-friendly materials, and flexible bulk pricing. Whether you sell handcrafted or luxury bath bombs, we provide durable packaging at a competitive bath bomb boxes price.",
      ],
    },
    faq: buildFaq(
      "Custom Bath Bomb Boxes",
      [
        {
          question: "Are bath bomb boxes moisture-resistant?",
          answer:
            "Yes, our bath bomb boxes use moisture-resistant materials and coatings that protect your products from humidity and maintain their quality.",
        },
        {
          question: "Can I add windows to bath bomb boxes?",
          answer:
            "Absolutely. Windowed bath bomb boxes let customers see your colorful bath bombs while keeping them protected.",
        },
        {
          question: "What sizes work best for bath bombs?",
          answer:
            'Bath bomb boxes typically range from 3" x 3" x 3" for single bath bombs to 6" x 6" x 4" for multiple bath bombs or gift sets. We can customize sizes based on your specific bath bomb dimensions.',
        },
        {
          question: "Do the boxes prevent breakage?",
          answer:
            "Yes, our boxes are designed with secure closures and appropriate padding to prevent bath bombs from breaking during shipping and handling.",
        },
        {
          question: "Can I order boxes for gift sets?",
          answer:
            "Yes, we can create boxes that hold multiple bath bombs with custom dividers to keep them separated and protected in gift sets.",
        },
      ],
      {
        heading: "Questions about Custom Bath Bomb Boxes",
        eyebrow: "Bath Bomb Box FAQs",
      }
    ),
    cta: {
      title: "Packaging That Soothes and Shines",
      description:
        "Partner with BoxyPack to create bath bomb boxes that combine protection, elegance, and sustainability. Our packaging team builds premium designs that highlight your products and strengthen your brand’s presence in every market",
    },
  },

  // Subcategory: Soap Wrapping Paper
  "soap-wrapping-paper": {
    name: "Soap Wrapping Paper",
    description:
      "Eco-friendly, smooth, and visually appealing. Buy soap wrapping paper online for premium-quality wraps that protect your soap and elevate your brand presentation.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Made from biodegradable, recyclable, and food-safe materials",
      "Full-color printing and custom logo designs available",
      "Smooth, tear-resistant texture for secure wrapping",
      "Lightweight, breathable paper keeps soaps fresh",
      "Available in kraft, white, or custom-printed sheets",
      "Ideal for handmade, organic, and luxury soaps",
      "Eco-friendly packaging with a premium look",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paper / Tissue Paper / Recycled Paper",
        },
        { label: "Structure", value: "Flat Sheets / Rolls / Pre-Cut Wraps" },
        { label: "Thickness", value: "17 GSM / 30 GSM / 60 GSM" },
        { label: "Finish", value: "Matte / Natural / Gloss / Printed Pattern" },
        { label: "Printing", value: "Single Side / Double Side / Full Color" },
        { label: "Dimensions (L × W)", value: "Custom sizes available" },
        { label: "Quantity", value: "1,000 sheets (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Soap Wrapping Paper Wholesale for Artisan Brands",
      paragraphs: [
        "Our soap wrapping paper is designed to combine style and sustainability. Made from lightweight yet durable paper, it provides an eco-friendly way to package handmade and natural soaps. Perfect for boutique, spa, and organic soap brands, these wraps protect products while maintaining their fragrance and quality.",
        "At BoxyPack, we specialize in custom soap wrapping paper wholesale that reflects your brand’s aesthetic. Choose kraft, tissue, or printed wrapping sheets with your logo or pattern for a professional finish. Each sheet is crafted for easy folding and smooth coverage that keeps every bar looking fresh and refined.",
        "As an eco friendly soap wrap packaging supplier, we focus on recyclable materials, clean printing, and affordable bulk pricing. Whether you sell single soaps or gift sets, our wrapping solutions combine beauty, protection, and cost efficiency with the best soap wrapping paper price available.",
      ],
    },
    faq: buildFaq(
      "Soap Wrapping Paper",
      [
        {
          question: "What materials are used for soap wrapping paper?",
          answer:
            "We use kraft, tissue, or recycled paper for durable and sustainable packaging.",
        },
        {
          question: "Can I print my brand name and design?",
          answer:
            "Yes, BoxyPack offers full-color and eco-friendly printing options.",
        },
        {
          question: "Is the wrapping paper safe for handmade soaps?",
          answer:
            "Absolutely. Our paper is breathable and non-toxic for natural products.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer:
            "Yes, our custom soap wrapping paper wholesale program includes bulk discounts.",
        },
        {
          question: "Are these wraps eco-friendly?",
          answer:
            "Yes, all our soap wrapping papers are recyclable and biodegradable.",
        },
      ],
      {
        heading: "Questions about Soap Wrapping Paper",
        eyebrow: "Soap Wrapping Paper FAQs",
      }
    ),
    cta: {
      title: "Wrap Your Soaps Beautifully",
      description:
        "Partner with BoxyPack to create soap wrapping paper that blends eco-conscious design with professional appeal. Our experts deliver premium-quality wraps that protect your soaps, highlight your branding, and keep your products fresh and stylish.",
    },
  },

  // Subcategory: Handmade Soap Boxes
  "handmade-soap-boxes": {
    name: "Handmade Soap Boxes",
    description:
      "Natural, elegant, and sustainable. Buy handmade soap boxes online for packaging that protects your soaps and highlights your brand’s authentic craftsmanship.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable and eco-friendly cardboard or kraft material",
      "Custom logo printing for personalized branding",
      "Available with or without cut-out display windows",
      "Smooth matte, gloss, or natural kraft finishes",
      "Fully recyclable and biodegradable design",
      "Ideal for organic, herbal, or scented soaps",
      "Perfect for retail shelves or gift packaging",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft / Cardboard / Recycled Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-End / Sleeve / Window Cut / Two-Piece",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Natural / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Handmade Soap Packaging Boxes for Artisan Brands",
      paragraphs: [
        "Our handmade soap boxes are designed to complement the charm and purity of natural soaps. Made from premium kraft, cardboard, or recycled paperboard, these boxes provide durability, eco-friendliness, and an appealing shelf presence. Perfect for handmade and organic soap makers, they enhance both presentation and protection.",
        "At BoxyPack, we create custom handmade soap packaging boxes tailored to your product size and branding. Choose from open-window designs for visibility or full-cover boxes for luxury presentation. With multiple finishes and print options, each box is made to align perfectly with your brand’s eco-conscious image.",
        "As a wholesale handmade soap boxes supplier, we ensure consistent quality, affordable pricing, and timely delivery. Whether you’re packaging artisanal soaps or spa collections, we deliver strong, elegant solutions at the best handmade soap boxes price.",
      ],
    },
    faq: buildFaq(
      "Handmade Soap Boxes",
      [
        {
          question: "Are handmade soap boxes eco-friendly?",
          answer:
            "Yes, our handmade soap boxes use natural, recyclable materials that align with the eco-friendly values of handmade soap businesses.",
        },
        {
          question: "Can I get boxes with windows?",
          answer:
            "Absolutely. Windowed handmade soap boxes let customers see your beautiful handmade soaps while keeping them protected.",
        },
        {
          question: "What sizes work best for handmade soaps?",
          answer:
            'Handmade soap boxes typically range from 3" x 2" x 1.5" for small bars to 6" x 4" x 2.5" for larger bars. We can customize sizes based on your specific soap dimensions.',
        },
        {
          question: "Can I order small quantities?",
          answer:
            "Yes, our minimum order is 100 boxes, making it affordable for small-batch soap makers and artisanal businesses.",
        },
        {
          question: "Are the boxes moisture-resistant?",
          answer:
            "We can provide moisture-resistant options that protect your handmade soaps from humidity while maintaining the natural aesthetic.",
        },
      ],
      {
        heading: "Questions about Handmade Soap Boxes",
        eyebrow: "Handmade Soap Box FAQs",
      }
    ),
    cta: {
      title: "Natural Packaging, Beautifully Crafted",
      description:
        "Partner with BoxyPack to create handmade soap boxes that reflect your brand’s authenticity and care. Our packaging experts design eco-friendly, durable, and elegant boxes that protect your soaps and enhance your product’s presentation.",
    },
  },

  // Subcategory: Luxury Soap Packaging
  "luxury-soap-packaging": {
    name: "Luxury Soap Packaging",
    description:
      "Natural, elegant, and sustainable. Buy handmade soap boxes online for packaging that protects your soaps and highlights your brand’s authentic craftsmanship.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable and eco-friendly cardboard or kraft material",
      "Custom logo printing for personalized branding",
      "Available with or without cut-out display windows",
      "Smooth matte, gloss, or natural kraft finishes",
      "Fully recyclable and biodegradable design",
      "Ideal for organic, herbal, or scented soaps",
      "Perfect for retail shelves or gift packaging",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft / Cardboard / Recycled Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-End / Sleeve / Window Cut / Two-Piece",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Natural / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Square Soap Packaging Boxes Wholesale for Modern Brands",
      paragraphs: [
        "Our handmade soap boxes are designed to complement the charm and purity of natural soaps. Made from premium kraft, cardboard, or recycled paperboard, these boxes provide durability, eco-friendliness, and an appealing shelf presence. Perfect for handmade and organic soap makers, they enhance both presentation and protection.",
        "At BoxyPack, we create custom handmade soap packaging boxes tailored to your product size and branding. Choose from open-window designs for visibility or full-cover boxes for luxury presentation. With multiple finishes and print options, each box is made to align perfectly with your brand’s eco-conscious image.",
        "As a wholesale handmade soap boxes supplier, we ensure consistent quality, affordable pricing, and timely delivery. Whether you’re packaging artisanal soaps or spa collections, we deliver strong, elegant solutions at the best handmade soap boxes price.",
      ],
    },
    faq: buildFaq(
      "Handmade Soap Boxes",
      [
        {
          question: "What materials are used for handmade soap boxes?",
          answer:
            "We use kraft, cardboard, and recycled paperboard for durable, eco-friendly packaging.",
        },
        {
          question: "Can I print my brand logo and design?",
          answer:
            "Yes, BoxyPack offers full-color printing, foil stamping, and embossing options.",
        },
        {
          question: "Do you offer window or sleeve styles?",
          answer:
            "Yes, choose from open-window, sleeve, tuck-end, or two-piece styles.",
        },
        {
          question: "Do you provide wholesale pricing?",
          answer:
            "Yes, our handmade soap boxes wholesale program includes flexible bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Absolutely. Our boxes are fully recyclable and can be produced with recycled materials.",
        },
      ],
      {
        heading: "Questions about Handmade Soap Boxes",
        eyebrow: "Handmade Soap Box FAQs",
      }
    ),
    cta: {
      title: "Natural Packaging, Beautifully Crafted",
      description:
        "Partner with BoxyPack to create handmade soap boxes that reflect your brand’s authenticity and care. Our packaging experts design eco-friendly, durable, and elegant boxes that protect your soaps and enhance your product’s presentation.",
    },
  },

  // Subcategory: Square Soap Boxes
  "square-soap-boxes": {
    name: "Square Soap Boxes",
    description:
      "Compact, sturdy, and visually refined. Buy square soap boxes online for premium packaging that protects your soaps and elevates your brand presentation.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable cardboard or kraft build for strong structure",
      "Customizable printing and logo options",
      "Optional window cutouts for product visibility",
      "Eco-friendly and recyclable materials",
      "Available in matte, gloss, or natural finishes",
      "Ideal for retail shelves or gift packaging",
      "Lightweight yet protective design",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft / Cardboard / Recycled Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-End / Two-Piece / Sleeve / Window Cut",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        {
          label: "Finish",
          value: "Matte / Gloss / Soft Touch / Natural Kraft",
        },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Square Soap Boxes for Perfect Fit",
      paragraphs: [
        "Our square soap boxes are designed for style, protection, and sustainability. Crafted from durable cardboard or kraft paper, they offer a perfect fit for standard soap sizes while maintaining a sleek, elegant appearance. Ideal for handmade, organic, and luxury soaps, these boxes balance practicality with brand sophistication.",
        "At BoxyPack, we produce custom square soap packaging boxes wholesale that highlight your product’s quality and character. Choose from window cutouts for visibility or full-cover styles for premium gifting. With matte, gloss, or kraft finishes, every box is made to showcase your soap beautifully.",
        "As a printed square soap boxes supplier, we combine eco-friendly materials, precision printing, and bulk affordability. Whether you sell single bars or gift sets, our packaging ensures presentation and protection at the best square soap boxes price.",
      ],
    },
    faq: buildFaq(
      "Square Soap Boxes",
      [
        {
          question: "What materials are used for square soap boxes?",
          answer:
            "We use kraft, cardboard, or recycled paperboard for durability and eco-safety.",
        },
        {
          question: "Can I add windows to square soap boxes?",
          answer:
            "Yes, we can add clear windows to square soap boxes, allowing customers to see your soap while keeping it protected.",
        },
        {
          question: "Are square boxes moisture-resistant?",
          answer:
            "Yes, we can provide moisture-resistant materials and coatings that protect your soaps from humidity.",
        },
        {
          question: "Can I customize the box design?",
          answer:
            "Absolutely. We offer full-color printing, custom logos, and design options to create square soap boxes that match your brand aesthetic perfectly.",
        },
        {
          question: "Do you provide wholesale discounts?",
          answer:
            "Yes, our custom square soap packaging boxes wholesale program includes bulk pricing.",
        },
      ],
      {
        heading: "Questions about Square Soap Boxes",
        eyebrow: "Square Soap Box FAQs",
      }
    ),
    cta: {
      title: "Perfect Shape, Perfect Presentation",
      description:
        "Partner with BoxyPack to create square soap boxes that combine structure, sustainability, and elegance. Our experts craft eco-friendly, beautifully printed packaging that highlights your soaps and strengthens your brand image with every sale.",
    },
  },

  // Subcategory: Soap Bar Box
  "soap-bar-box": {
    name: "Soap Bar Box",
    description:
      "Strong, elegant, and eco-friendly. Buy soap bar boxes online for packaging that protects every bar while showcasing your brand with a refined finish.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Durable and eco-friendly kraft or cardboard structure",
      "Customizable designs and logo printing",
      "Optional window cutouts for product display",
      "Available in matte, gloss, or natural kraft finish",
      "Fully recyclable and biodegradable materials",
      "Ideal for handmade, organic, or luxury soaps",
      "Perfect for retail shelves or gift packaging",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft / Cardboard / Recycled Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-End / Sleeve / Two-Piece / Window Cut",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Gloss / Natural / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Soap Bar Packaging Boxes Wholesale for Artisan Brands",
      paragraphs: [
        "Our soap bar boxes combine durability, sustainability, and professional appeal. Made from high-quality kraft or cardboard, they preserve freshness, prevent damage, and enhance shelf presentation. Perfect for handmade, organic, and luxury soap makers, they balance functionality and design.",
        "At BoxyPack, we create custom soap bar packaging boxes wholesale that perfectly fit your product and brand image. Choose from matte, gloss, or kraft finishes with optional die-cut windows for product visibility. Each box is printed with precision to represent your soap’s natural and authentic character.",
        "As a printed soap bar boxes supplier, we provide eco-friendly materials, reliable production, and flexible order volumes. Whether for retail or gifting, our packaging ensures quality and style at the best soap bar boxes price.",
      ],
    },
    faq: buildFaq(
      "Soap Bar Box",
      [
        {
          question: "What materials are used for soap bar boxes?",
          answer:
            "We use kraft, cardboard, or recycled paperboard for strength and eco safety.",
        },
        {
          question: "Can I add my logo and design?",
          answer:
            "Yes, BoxyPack offers foil, embossing, and full-color printing options.",
        },
        {
          question: "Are these boxes suitable for handmade soaps?",
          answer:
            "Absolutely. They’re perfect for artisan and organic soap brands.",
        },
        {
          question: "Do you offer wholesale pricing?",
          answer:
            "Yes, our custom soap bar packaging boxes wholesale program includes bulk discounts.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all our soap bar boxes are fully recyclable and biodegradable.",
        },
      ],
      {
        heading: "Questions about Soap Bar Boxes",
        eyebrow: "Soap Bar Box FAQs",
      }
    ),
    cta: {
      title: "Crafted Protection, Beautiful Presentation",
      description:
        "Partner with BoxyPack to create soap bar boxes that blend protection, style, and eco-conscious design. Our experts deliver durable, customizable packaging that reflects your brand’s quality in every box.",
    },
  },

  // Subcategory: Paper Soap Boxes
  "paper-soap-boxes": {
    name: "Paper Soap Boxes",
    description:
      "Lightweight, sustainable, and elegant. Buy paper soap boxes online for packaging that blends eco-friendliness, durability, and visual appeal for every soap bar.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Eco-friendly, recyclable, and biodegradable paperboard",
      "Full-color or minimal printed designs available",
      "Optional cut-out windows for product visibility",
      "Available in kraft, white, or matte finishes",
      "Lightweight yet strong construction for safe packaging",
      "Perfect for handmade, organic, or retail soaps",
      "Flat-packed for convenient shipping and storage",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft / Paperboard / Recycled Cardboard",
        },
        {
          label: "Structure",
          value: "Tuck-End / Sleeve / Window Cut / Two-Piece",
        },
        { label: "Thickness", value: "12PT / 14PT / 18PT" },
        { label: "Finish", value: "Matte / Gloss / Natural / Soft Touch" },
        { label: "Printing", value: "Inside, Outside, or Both" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Custom Paper Soap Packaging Boxes Wholesale for Artisan Brands",
      paragraphs: [
        "Our paper soap boxes are designed to protect and promote your soaps with a clean, eco-conscious design. Made from recyclable and biodegradable paperboard, they’re ideal for handmade, organic, and luxury soap brands. These boxes combine strength, sustainability, and stylish presentation for retail and gifting purposes.",
        "At BoxyPack, we create custom paper soap packaging boxes wholesale, tailored to your product dimensions and branding. Choose from natural kraft, white, or printed styles to match your aesthetic. Each box is made with precision for secure fitting and professional finishing.",
        "As a printed paper soap gift boxes supplier, we focus on premium quality, crisp printing, and flexible order options. Whether for boutique production or large-scale retail, we deliver consistent results at the best paper soap boxes price.",
      ],
    },
    faq: buildFaq(
      "Paper Soap Boxes",
      [
        {
          question: "What materials are used for paper soap boxes?",
          answer:
            "We use recyclable kraft, paperboard, or cardboard for durable and eco-safe packaging.",
        },
        {
          question: "Can I customize the design and logo?",
          answer:
            "Yes, BoxyPack offers full-color printing, embossing, and foil stamping.",
        },
        {
          question: "Do you offer window cutout options?",
          answer:
            "Absolutely. Custom die-cut windows can be added for product visibility.",
        },
        {
          question: "Are wholesale discounts available?",
          answer:
            "Yes, our custom paper soap packaging boxes wholesale program includes bulk pricing.",
        },
        {
          question: "Are these boxes recyclable?",
          answer:
            "Yes, our eco-friendly paper soap packaging is 100% recyclable and biodegradable.",
        },
      ],
      {
        heading: "Questions about Paper Soap Boxes",
        eyebrow: "Paper Soap Box FAQs",
      }
    ),
    cta: {
      title: "Choose Sustainable Soap Packaging",
      description:
        "Partner with BoxyPack to design paper soap boxes that combine eco-conscious materials with elegant presentation. Our team creates custom packaging that protects your soaps, promotes your brand, and supports sustainable business growth.",
    },
  },

  // Subcategory: Kraft Soap Boxes
  "kraft-soap-boxes": {
    name: "Kraft Soap Boxes",
    description:
      "Natural, strong, and sustainable. Buy Kraft soap boxes online for packaging that combines eco-friendliness, durability, and authentic brand presentation.",
    heroImage: "products-box-img_x8vu4b",
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    keyFeatures: [
      "Eco-friendly and biodegradable kraft material",
      "Durable construction for reliable protection",
      "Custom logo and full-color printing options",
      "Available with or without window cutouts",
      "Natural matte or textured finish options",
      "Perfect for handmade, organic, or herbal soaps",
      "Lightweight and fully recyclable packaging",
    ],
    customization: {
      details: [
        {
          label: "Material Type",
          value: "Kraft Paper / Recycled Cardboard / Paperboard",
        },
        {
          label: "Structure",
          value: "Tuck-End / Sleeve / Window Cut / Two-Piece",
        },
        { label: "Thickness", value: "14PT / 18PT / 24PT" },
        { label: "Finish", value: "Matte / Natural / Soft Touch" },
        { label: "Printing", value: "Single Side / Double Side / Full Color" },
        { label: "Dimensions (L × W × H)", value: "Custom sizes available" },
        { label: "Quantity", value: "250 units (Bulk discounts available)" },
      ],
    },
    overview: {
      heading: "Product Overview",
      title: "Eco-Friendly Kraft Soap Packaging Boxes for Handmade Brands",
      paragraphs: [
        "Our kraft soap boxes are crafted to protect and present soaps in their purest form. Made from recyclable and biodegradable kraft paperboard, they provide an earthy look that reflects eco-conscious values. Perfect for handmade, organic, or herbal soaps, these boxes offer both style and sustainability.",
        "At BoxyPack, we design custom printed kraft soap packaging that perfectly fits your soap size and brand design. Choose from window styles for product visibility or full-cover options for a clean and classic appearance. Each box is built with precision to ensure durability and an appealing finish.",
        "As a kraft soap boxes wholesale supplier, we offer consistent quality, sustainable materials, and cost-effective pricing for small and large-scale soap makers. Every design delivers charm, protection, and value at the best kraft soap boxes price.",
      ],
    },
    faq: buildFaq(
      "Kraft Soap Boxes",
      [
        {
          question: "What materials are used for kraft soap boxes?",
          answer:
            "We use premium kraft paperboard and recycled materials for durability and eco-safety.",
        },
        {
          question: "Can I print my logo and brand design?",
          answer:
            "Yes, BoxyPack offers full-color and foil logo printing options.",
        },
        {
          question: "Are these boxes suitable for handmade soaps?",
          answer:
            "Absolutely. They’re ideal for handmade, organic, or herbal soap packaging.",
        },
        {
          question: "Do you provide wholesale discounts?",
          answer:
            "Yes, our kraft soap boxes wholesale supplier program includes bulk pricing.",
        },
        {
          question: "Are these boxes eco-friendly?",
          answer:
            "Yes, all Kraft soap boxes are fully recyclable and biodegradable.",
        },
      ],
      {
        heading: "Questions about Kraft Soap Boxes",
        eyebrow: "Kraft Soap Box FAQs",
      }
    ),
    cta: {
      title: "Naturally Strong, Simply Beautiful",
      description:
        "Partner with BoxyPack to design kraft soap boxes that combine eco-friendly materials with premium craftsmanship. Our experts create sustainable, stylish packaging that protects your soaps and reflects your brand’s natural elegance.",
    },
  },

  ...industryPageEntries,
};

const enrichProductEntry = (
  slug: string,
  entry: RawProductEntry
): EnrichedProductEntry => {
  const { ctaTitle, ctaDescription, ...restEntry } = entry;
  const name = entry.name || sentenceCase(slug.replace(/-/g, " "));
  const features = ensureArray(entry.features, createDefaultFeatures(name));
  const keyFeatures = ensureArray(
    entry.keyFeatures,
    createDefaultKeyFeatures(name)
  );
  const defaultCustomization = createDefaultCustomization(name);
  const customizationOverrides = entry.customization ?? {};
  const customization: DefaultCustomization = {
    ...defaultCustomization,
    ...customizationOverrides,
    details: ensureArray(
      customizationOverrides.details,
      defaultCustomization.details
    ),
    supportActions: ensureArray(
      customizationOverrides.supportActions,
      defaultCustomization.supportActions
    ),
  };

  const defaultOverview = createDefaultOverview(name, entry.description);
  const overviewParagraphs = ensureArray(
    entry.overview?.paragraphs,
    defaultOverview.paragraphs
  );
  const overview: ReturnType<typeof createDefaultOverview> = {
    ...defaultOverview,
    ...(entry.overview ?? {}),
    paragraphs: overviewParagraphs,
  };

  const defaultWhyChooseUs = createDefaultWhyChooseUs(name);
  const whyChooseUs: DefaultWhyChooseUs = {
    ...defaultWhyChooseUs,
    ...(entry.whyChooseUs ?? {}),
    features: ensureArray(
      entry.whyChooseUs?.features,
      defaultWhyChooseUs.features
    ),
  };

  let faq: EnrichedProductEntry["faq"];
  if (entry.faq) {
    const items = ensureArray<ProductFAQItem>(
      entry.faq.items,
      [] as ProductFAQItem[]
    );
    if (items.length > 0) {
      faq = {
        ...entry.faq,
        items,
      };
    }
  }

  const defaultCTA = createDefaultCTA(name);
  const cta = {
    title: entry.cta?.title ?? ctaTitle ?? defaultCTA.title,
    description:
      entry.cta?.description ?? ctaDescription ?? defaultCTA.description,
  };

  const subcategoryCards =
    entry.subcategoryCards ?? buildSubcategoryCards(slug);

  const enrichedProduct: EnrichedProductEntry = {
    ...restEntry,
    slug,
    name,
    features,
    keyFeatures,
    customization,
    overview,
    whyChooseUs,
    faq,
    cta,
    subcategoryCards,
  };

  return enrichedProduct;
};

const buildProductData = (): Record<string, EnrichedProductEntry> =>
  Object.entries(rawProductData).reduce<Record<string, EnrichedProductEntry>>(
    (acc, [slug, entry]) => {
      acc[slug] = enrichProductEntry(slug, entry);
      return acc;
    },
    {}
  );

const buildCompleteProductData = (): Record<string, EnrichedProductEntry> => {
  return buildProductData();
};

export const productData = buildCompleteProductData();

// Map slugs that should resolve to existing product entries.
// This allows industry/category routes to reuse core product content.
const slugAliases: Record<string, string> = {
  "soap-boxes-industry": "soap-boxes",
};

// Helper function to get product data by slug exclusively from static data
export const getProductDataBySlug = async (
  slug: string
): Promise<EnrichedProductEntry | undefined> => {
  if (productData[slug]) return productData[slug];

  // Resolve via alias if present (e.g., soap-boxes-industry -> soap-boxes)
  const alias = slugAliases[slug];
  if (alias && productData[alias]) return productData[alias];

  return undefined;
};

// Helper function to get all products exclusively from static data
export const getAllProducts = async (): Promise<EnrichedProductEntry[]> =>
  Object.entries(productData).map(([slug, product]) => ({
    ...product,
    slug,
  }));
export default productData;
