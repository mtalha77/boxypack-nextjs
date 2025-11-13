import { productByMaterialData } from './productByMaterialData';
import { productByIndustryData } from './productByIndustryData';
import { mylarBoxesData } from './mylarBoxesData';
import { shoppingBagsData } from './shoppingBagsData';
import { otherData } from './otherData';

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
  details?: DefaultCustomization['details'];
  supportActions?: DefaultCustomization['supportActions'];
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

interface EnrichedProductEntry extends Omit<RawProductEntry, 'features' | 'keyFeatures' | 'customization' | 'overview' | 'whyChooseUs' | 'faq' | 'cta'> {
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
    icon: 'shield',
    title: `${sentenceCase(name)} Built to Protect`,
    description: `Every ${name.toLowerCase()} we craft uses premium materials to protect your products from transit to unboxing.`
  },
  {
    icon: 'palette',
    title: 'Brand-Forward Design',
    description: `Vibrant printing, specialty finishes, and thoughtful details keep your brand front and center on every ${name.toLowerCase()}.`
  },
  {
    icon: 'truck',
    title: 'Reliable Fulfillment',
    description: `Streamlined production timelines ensure your ${name.toLowerCase()} arrive when you need them, without compromising quality.`
  },
  {
    icon: 'check',
    title: 'Sustainable Choices',
    description: `Choose recyclable stocks, water-based inks, and eco coatings to keep your ${name.toLowerCase()} program planet-friendly.`
  }
];

const createDefaultKeyFeatures = (name: string): string[] => [
  `Premium construction keeps ${name.toLowerCase()} secure in transit`,
  `High-impact graphics elevate every ${name.toLowerCase()} presentation`,
  `Flexible sizing tailored to your product line`,
  `Sustainable material options that meet brand goals`,
  `Short runs through large volumes produced with care`
];

const createDefaultWhyChooseUs = (name: string) => ({
  eyebrow: 'Why Choose Us',
  heading: `${sentenceCase(name)} That Build Real Brands`,
  description: `We approach ${name.toLowerCase()} as more than packaging—they are tactile brand experiences. From engineering to finishing, every detail is designed to delight your customer and move your product.`,
  features: createDefaultFeatures(name)
});

const ensureArray = <T,>(value: T[] | undefined, fallback: T[]) =>
  Array.isArray(value) && value.length > 0 ? value : fallback;

const getSubcategoryImage = (subcategory: unknown, fallback: string) => {
  if (!subcategory || typeof subcategory !== 'object') {
    return fallback || 'products-box-img_x8vu4b';
  }

  const record = subcategory as Record<string, unknown>;

  if (typeof record.image === 'string' && record.image.length > 0) {
    return record.image;
  }

  if (Array.isArray(record.images) && record.images.length > 0) {
    const [primaryImage] = record.images as unknown[];
    if (typeof primaryImage === 'string' && primaryImage.length > 0) {
      return primaryImage;
    }
  }

  return fallback || 'products-box-img_x8vu4b';
};

const buildSubcategoryCards = (slug: string): SubcategoryCards | undefined => {
  const materialCategory = productByMaterialData.find(category => category.slug === slug);
  if (materialCategory) {
    return {
      heading: `Our Range of ${materialCategory.name}`,
      description: materialCategory.description,
      items: materialCategory.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `Premium ${sub.name.toLowerCase()} packaging solutions tailored to your products.`,
        image: getSubcategoryImage(sub, materialCategory.image)
      }))
    };
  }

  const industryCategory = productByIndustryData.find(category => category.slug === slug);
  if (industryCategory) {
    return {
      heading: `Packaging for ${industryCategory.name}`,
      description: industryCategory.description,
      items: industryCategory.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} designed to meet industry demands with custom branding.`,
        image: getSubcategoryImage(sub, industryCategory.image)
      }))
    };
  }

  if (slug === mylarBoxesData.slug) {
    return {
      heading: `Explore ${mylarBoxesData.name}`,
      description: mylarBoxesData.description,
      items: mylarBoxesData.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} engineered with advanced barrier properties for freshness.`,
        image: getSubcategoryImage(sub, mylarBoxesData.image)
      }))
    };
  }

  if (slug === shoppingBagsData.slug) {
    return {
      heading: `Shop ${shoppingBagsData.name}`,
      description: shoppingBagsData.description,
      items: shoppingBagsData.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} crafted for memorable retail experiences.`,
        image: getSubcategoryImage(sub, shoppingBagsData.image)
      }))
    };
  }

  if (slug === otherData.slug) {
    return {
      heading: `Complete Your Packaging with ${otherData.name}`,
      description: otherData.description,
      items: otherData.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description:
          sub.description ||
          `${sub.name} accessories to finish every package with polish.`,
        image: getSubcategoryImage(sub, otherData.image)
      }))
    };
  }

  return undefined;
};

const createDefaultOverview = (name: string, description?: string) => ({
  heading: 'Product Overview',
  title: `${sentenceCase(name)} at a Glance`,
  paragraphs: [
    description || `${sentenceCase(name)} combine presentation with protection, ensuring your products arrive ready to impress.`,
    `Every detail of our ${name.toLowerCase()} is engineered for a premium unboxing moment—structural strength, vibrant graphics, and tactile finishes come standard.`,
    `Partner with BoxyPack to design ${name.toLowerCase()} that match your brand voice, meet logistics requirements, and scale with your production needs.`
  ]
});

const createDefaultCustomization = (name: string) => ({
  eyebrow: 'Customization',
  heading: 'Customize Your Packaging',
  description: `Design and order ${sentenceCase(name)} that match your product and brand needs. Choose your preferred material, size, and surface finish.`,
  detailsHeading: 'Customization Details',
  details: [
    { label: 'Material Type', value: 'Kraft Paperboard / Recycled Cardboard' },
    { label: 'Structure', value: 'Gable Box / Foldable Handle Design' },
    { label: 'Thickness', value: '12PT / 14PT / 18PT' },
    { label: 'Finish', value: 'Matte / Gloss / Uncoated' },
    { label: 'Printing', value: 'Inside, Outside, or Both' },
    { label: 'Dimensions (L × W × H)', value: 'e.g., 10 × 6 × 4' },
    { label: 'Quantity', value: '250 units (Bulk discounts available)' }
  ],
  footerNote: 'Review your design, preview your sample, and order online.',
  supportTitle: 'Need help before ordering?',
  supportDescription: 'If you’d like to talk before placing your order, our support team is ready. You can connect directly with an agent or get a quick email reply to discuss materials, pricing, or design options.',
  supportActions: [
    {
      label: 'Live Assistance',
      description: 'Connect directly with an agent for instant guidance.'
    },
    {
      label: 'Email Consultation',
      description: 'Get a quick reply about materials, pricing, or design options.'
    }
  ]
});

const createDefaultCTA = (name: string) => ({
  title: 'Ready to Get Started?',
  description: `Get a custom quote for your ${name.toLowerCase()} today. Our team is ready to help you create the perfect packaging solution.`
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
  items
});

const rawProductData: Record<string, RawProductEntry> = {
  // Product: Rigid Boxes
  'rigid-boxes': {
    name: 'Rigid Boxes',
    description: 'Luxury rigid boxes designed for products that need more. Combining strength with style, they create memorable unboxing moments. It lifts your brand with a refined presentation.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Multi-format options: magnetic, drawer, and book-style rigid boxes',
      'Rigid board walls resist crushing and protect high-value goods',
      'Precision-engineered lids and bases align perfectly for a luxe feel',
      'Custom interiors with foam, silk, or molded inserts showcase products',
      'Premium finishes—soft touch, velvet, foil, and metallic inks—elevate branding',
      'Reusable keepsake presentation extends the customer experience',
      'Handcrafted production suited for VIP kits, launches, and retail displays'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '80pt-120pt rigid greyboard wrapped in coated, linen, or velvet paper' },
        { label: 'Structure', value: 'Lift-off lids, shoulder necks, magnetic closures, or drawer formats' },
        { label: 'Thickness', value: '2.0 mm / 2.5 mm / 3.0 mm board with optional foam or molded inserts' },
        { label: 'Finish', value: 'Soft-touch lamination, velvet wrap, foil stamping, and spot UV accents' },
        { label: 'Printing', value: 'Offset CMYK plus Pantone, screen print textures, interior or exterior' },
        { label: 'Dimensions (L x W x H)', value: 'Custom cavities from 3" x 3" x 1.5" up to 18" x 12" x 6"' },
        { label: 'Quantity', value: 'Starting at 100 units with staged and handcrafted production' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Rigid Boxes Crafted for Premium Brands',

      paragraphs: [
        'Rigid boxes form the backbone of elevated retail and gifting experiences. We craft every panel and seam to deliver a flawless first impression that mirrors the stature of your product.',
        'From custom-engineered hinges to hand-applied finishes, our team obsesses over the tactile details that signal quality. Inserts, accessories, and reveal moments are tailored to your launch vision.',
        'Whether you need limited-run influencer kits or global retail programs, our production workflow scales craftsmanship with speed so your brand story arrives intact every time.'
      ]
    },
    faq: buildFaq('Rigid Boxes', [
      {
        question: 'Can I mix different closure styles within one rigid box program?',
        answer:
          'Absolutely. We routinely combine magnetic panels, ribbon pulls, and telescoping lids within the same production run so your rigid boxes match each SKU’s experience while keeping color and finish consistent.'
      },
      {
        question: 'How are premium finishes like foil or velvet applied?',
        answer:
          'Our finishing team hand-wraps each rigid panel before applying foil stamping, velvet laminations, or soft-touch coatings. This process protects precise edges and keeps branding details sharp on every box.'
      },
      {
        question: 'Do you help engineer inserts for fragile products?',
        answer:
          'Yes. Our structural designers prototype foam, molded pulp, or satin-wrapped inserts that align with your rigid box dimensions to keep delicate products secure during shipping and unboxing.'
      },
      {
        question: 'What is the typical production timeline for rigid boxes?',
        answer:
          'After approving proofs and prototypes, handcrafted rigid box programs typically ship in 4–6 weeks. We also offer staged deliveries for large rollouts or event-driven timelines.'
      }
    ]),
    cta: {
      title: 'Ready for Luxury Packaging?',
      description: 'Get a custom quote for your premium rigid boxes today. Experience the difference that luxury packaging makes.'
    },
  },

  // Product: Shipping Boxes
  'shipping-boxes': {
    name: 'Shipping Boxes',
    description: 'Strong and reliable, our shipping boxes ensure products travel safely across any distance. Built for value and strength, they provide trusted protection and a perfect look.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Engineered corrugated fluting absorbs shocks during long hauls',
      'Exterior branding ensures every shipment promotes your company',
      'Moisture and abrasion-resistant coatings defend against tough routes',
      'Optimized dielines assemble quickly to streamline fulfillment',
      'Heavy-duty options certified for parcel and freight requirements',
      'Interior print and inserts deliver on-brand subscription experiences',
      'Cost-effective production scaling for nationwide rollouts'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'E, B, or BC flute corrugated with kraft or white-top liners' },
        { label: 'Structure', value: 'Regular slotted cartons, mailers, half-slotted, or auto-lock bottoms' },
        { label: 'Thickness', value: 'Single wall 1/16"-3/16" or double wall 1/4" configurations' },
        { label: 'Finish', value: 'Kraft, flood white, anti-scuff AQ, or water-resistant coatings' },
        { label: 'Printing', value: 'Flexo, digital, or litho-lam wraps with variable data options' },
        { label: 'Dimensions (L x W x H)', value: 'Custom cut scores from 4" x 4" x 2" to 24" x 18" x 12"' },
        { label: 'Quantity', value: 'Production from 250 cartons with palletized fulfillment' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Shipping Boxes That Protect and Promote',
      paragraphs: [
        'Shipping boxes are more than a vessel—they carry your brand promise from fulfillment center to front door. We engineer each box to withstand complex supply chains while keeping costs in check.',
        'Our corrugated specialists optimize flute profiles, coatings, and structural reinforcements so fragile and heavy products reach customers without compromise.',
        'Pair rugged performance with bold graphics, interior print, and kitted experiences to transform every shipment into a branded moment your customers remember.'
      ]
    },
    faq: buildFaq('Shipping Boxes', [
      {
          question: 'How do I choose the right flute for my shipping box?',
          answer:
            'We look at product weight, transit distance, and DIM pricing to recommend an E, B, or BC flute. Our engineers model compression strength so you can balance protection with freight efficiency.'
      },
      {
          question: 'Can shipping boxes feature full-color graphics?',
          answer:
            'Yes. We can flood print exteriors, add interior storytelling, or apply litho-laminate wraps that keep graphics protected during handling. Digital and flexo print options cover short and long runs.'
      },
      {
          question: 'What lead times should I expect for a replenishment order?',
          answer:
            'Standard replenishment orders ship in 2–3 weeks after artwork approval. If your volumes shift unexpectedly, our production scheduling team can accelerate runs or stage palletized inventory.'
      },
      {
          question: 'Do you offer ISTA testing for shipping boxes?',
          answer:
            'We can run ISTA, burst, and drop testing on request. Our team partners with certified labs or executes in-house simulations to validate packaging before rollout.'
      }
    ], { heading: 'Questions about Shipping Boxes', eyebrow: 'Shipping Box FAQs' }),
    cta: {
      title: 'Ready to Ship with Confidence?',
      description: 'Get a custom quote for your shipping boxes today. Ensure your products arrive safely every time.'
    },
  },

  // Product: Kraft Boxes
  'kraft-boxes': {
    name: 'Kraft Boxes',
    description: 'Sustainably sourced kraft boxes that balance durability with a natural, earthy look. Perfect for brands that value eco-friendly packaging without compromising presentation.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Natural kraft tones instantly signal eco-conscious values',
      'Sturdy board composition balances strength with a lightweight profile',
      'Supports white ink, metallic foils, and spot UV for striking contrast',
      'Multiple box architectures—from tuck-end to mailer—fit diverse products',
      'Custom die-cuts and windows highlight textures and product details',
      'High recycled content options satisfy green procurement standards',
      'Ideal for farm-to-table, artisan, DTC, and lifestyle brands'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'Unbleached kraft SBS, CCNB, and recycled paperboard blends' },
        { label: 'Structure', value: 'Mailer, tuck-end, sleeve, and windowed dielines tailored to SKU' },
        { label: 'Thickness', value: '14pt / 18pt / 24pt board with optional corrugated pads' },
        { label: 'Finish', value: 'Water-based varnish, soy ink floods, white ink pops, foil touches' },
        { label: 'Printing', value: 'Digital CMYK or offset spot colors that keep natural fibers visible' },
        { label: 'Dimensions (L x W x H)', value: 'Die-lines from 3" x 3" x 1" favor boxes to 12" x 10" x 4"' },
        { label: 'Quantity', value: 'Eco-forward runs from 250 units with repeat program support' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Boxes Aligned with Sustainable Brands',
      paragraphs: [
        'Kraft boxes deliver an instantly recognizable natural aesthetic that resonates with eco-minded shoppers. We start with responsibly sourced boards to give your packaging an authentic, earthy tone.',
        'Customize structures, closures, and coatings to balance performance with sustainability. Add white ink, foil, or debossed accents to create high-contrast branding without losing the raw appeal.',
        'From farm-to-table meal kits to artisanal retail packaging, our team scales production while maintaining recycled content targets, environmental certifications, and consistent color profiles.'
      ]
    },
    faq: buildFaq('Kraft Boxes', [
      {
          question: 'Are kraft boxes compatible with white ink or metallic embellishments?',
          answer:
            'They are. We pre-treat surfaces so white ink, foil, or metallic touches maintain vibrancy while letting the natural fibers show through, giving you premium contrast on kraft stock.'
      },
      {
          question: 'Can kraft boxes meet food-contact requirements?',
          answer:
            'Yes. We offer food-safe interior liners, aqueous coatings, and grease barriers that keep kraft boxes compliant for direct-contact applications like baked goods or meal kits.'
      },
      {
          question: 'Do kraft boxes hold up to e-commerce shipping?',
          answer:
            'With the right board caliper and reinforcement, kraft boxes perform well in parcel networks. We can add tuck locks, crash-lock bottoms, or inserts to keep contents secure in transit.'
      },
      {
          question: 'Can you match recycled content goals for retailers?',
          answer:
            'We routinely supply kraft board with documented post-consumer content. Our sourcing team can align with retailer mandates or corporate sustainability targets.'
      }
    ], { heading: 'Questions about Kraft Boxes', eyebrow: 'Kraft Box FAQs' }),
    cta: {
      title: 'Ready for Eco-Friendly Kraft Packaging?',
      description: 'Request a custom quote for kraft boxes that highlight your sustainable brand values.'
    },
  },

  // Product: Cardboard Boxes
  'cardboard-boxes': {
    name: 'Cardboard Boxes',
    description: 'Versatile cardboard boxes engineered for retail, shipping, and subscription experiences. Build a consistent brand presence from shelf to doorstep.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Folding carton, mailer, and display formats cover every retail scenario',
      'Offset and digital printing deliver crisp graphics and gradients',
      'Engineered locking tabs and glue assists speed up line assembly',
      'Interior print, spot UV, and foil touches create premium unboxing',
      'MOQ flexibility supports pilot runs and enterprise-scale launches',
      'Compatible with fulfillment automation for rapid turnarounds',
      'Trusted for cosmetics, electronics, CPG, and promotional mailers'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'SBS, CCNB, and FBB folding carton boards in gloss or matte grades' },
        { label: 'Structure', value: 'Straight tuck, reverse tuck, crash lock, display and mailer formats' },
        { label: 'Thickness', value: '12pt / 16pt / 20pt board with reinforced scores for automation' },
        { label: 'Finish', value: 'Gloss AQ, matte soft-touch, reticulated UV, foil, or emboss details' },
        { label: 'Printing', value: 'Litho CMYK + Pantone, hybrid digital, or spot white for windows' },
        { label: 'Dimensions (L x W x H)', value: 'Retail cartons from 1.5" x 1.5" x 4" to 18" x 12" x 6"' },
        { label: 'Quantity', value: 'Carton runs from 250 pieces scaling to 100,000+' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Boxes Built for Retail Impact',
      paragraphs: [
        'Cardboard boxes remain the go-to solution for brands that need vibrant graphics, precise structures, and dependable protection. We tailor every dieline to showcase your product and streamline assembly.',
        'Collaborate with our structural engineers to integrate windows, inserts, and automation-ready locking systems that keep fulfillment efficient and error-free.',
        'Whether you are launching a limited run or scaling to nationwide distribution, our color management, finishing options, and timeline discipline keep every box on brand and on schedule.'
      ]
    },
    faq: buildFaq('Cardboard Boxes', [
      {
          question: 'What structures work best for automated packing lines?',
          answer:
            'Straight tuck, reverse tuck, and crash-lock formats are engineered to run smoothly on automated folding and gluing lines. We adjust score strength and glue seams to match your equipment.'
      },
      {
          question: 'Can cardboard boxes include interior printing?',
          answer:
            'Yes. We print interior panels with brand storytelling, regulatory copy, or cross-sells. Our prepress team balances ink coverage so colors stay consistent inside and out.'
      },
      {
          question: 'How small can my order quantity be?',
          answer:
            'We support pilot runs starting at 250 cartons with digital printing, then scale to offset or hybrid production as your volumes grow.'
      },
      {
          question: 'Do you provide prototypes for new dielines?',
          answer:
            'We can produce white samples and printed mockups so you can test fit, finishes, and automation compatibility before committing to production.'
      }
    ], { heading: 'Questions about Cardboard Boxes', eyebrow: 'Cardboard Box FAQs' }),
    cta: {
      title: 'Ready to Elevate Your Cardboard Packaging?',
      description: 'Connect with our team for a custom cardboard box quote tailored to your brand.'
    },
  },

  // Product: Corrugated Boxes
  'corrugated-boxes': {
    name: 'Corrugated Boxes',
    description: 'Heavy-duty corrugated boxes engineered for shipping, subscription, and industrial use. Deliver rugged protection and branded experiences at scale.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Single, double, and triple-wall options tailored to load requirements',
      'Full-color litho-lam, digital, or flexo printing for vivid storytelling',
      'Subscription-ready interiors with custom inserts and tissue kits',
      'Engineered dimensions reduce DIM weight and freight spend',
      'Handles, tear-strips, and perforations upgrade customer convenience',
      'Rapid prototyping and ISTA testing accelerate approvals',
      'Ideal for e-commerce, industrial, and bulk retail shipments'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'E, B, C, and BC flute corrugated with kraft or white liners' },
        { label: 'Structure', value: 'Die-cut mailers, RSC, auto-bottom trays, FOL shippers, and inserts' },
        { label: 'Thickness', value: 'Single wall 1/16"-3/16", double wall 1/4", or triple wall options' },
        { label: 'Finish', value: 'Litho-lam wraps, satin AQ, anti-abrasion coatings, and tear features' },
        { label: 'Printing', value: 'High-graphic digital, flexo spot colors, or litho wraps with foil' },
        { label: 'Dimensions (L x W x H)', value: 'Engineered footprints from 6" x 4" x 2" to 30" x 20" x 14"' },
        { label: 'Quantity', value: 'MOQ from 250 shippers with truckload scaling and VMI options' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Boxes for Demanding Supply Chains',
      paragraphs: [
        'Corrugated packaging protects your products through complex logistics networks. We specify flute combinations, coatings, and reinforcements that match your performance requirements and shipping methods.',
        'Enhance the customer experience with bold exterior graphics, interior storytelling, and custom insert systems that arrive assembly-ready at your facility.',
        'Our rapid prototyping, testing, and freight optimization programs ensure each corrugated box meets regulatory standards while minimizing total landed cost.'
      ]
    },
    faq: buildFaq('Corrugated Boxes', [
      {
          question: 'How do I select between single-wall and double-wall corrugate?',
          answer:
            'We evaluate product weight, stacking requirements, and transportation routes to recommend single, double, or triple-wall builds. Our engineers run ECT and edge-crush tests to verify performance.'
      },
      {
          question: 'Can corrugated boxes support premium graphics?',
          answer:
            'Yes. We offer litho-lamination, high-graphic flexo, and digital printing that deliver vibrant artwork on corrugated surfaces without sacrificing durability.'
      },
      {
          question: 'Do you create custom inserts for corrugated kits?',
          answer:
            'We design foam, corrugated, or molded pulp inserts that nest inside your shipper. Each insert is engineered for quick fulfillment and consistent presentation.'
      },
      {
          question: 'What turnaround time should I expect for corrugated production?',
          answer:
            'Standard corrugated programs ship in 10–14 business days after proof approval. Rush schedules are available if you need boxes faster for launch or replenishment.'
      }
    ], { heading: 'Questions about Corrugated Boxes', eyebrow: 'Corrugated Box FAQs' }),
    cta: {
      title: 'Ready for Heavy-Duty Corrugated Packaging?',
      description: 'Get a corrugated box quote engineered for your shipping and subscription workflows.'
    },
  },

  // Product: Mylar Boxes
  'mylar-boxes': {
    name: 'Mylar Boxes',
    description: 'Premium mylar packaging solutions with excellent barrier properties and durability for various products.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'High-barrier laminates extend shelf life for food and botanicals',
      'Multiple closure systems—tear notch, zipper, and heat seal—for flexibility',
      'Custom windows, holographics, and metallic inks attract attention',
      'Lightweight construction reduces freight while maintaining durability',
      'Certified food-grade materials support regulated industries',
      'Stand-up and flat pouch formats optimize merchandising space',
      'Low minimums with rapid lead times for product launches'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'Food-grade PET/VMPET/PE laminations with aluminum barrier layers' },
        { label: 'Structure', value: 'Flat bottom, three-side seal, child-resistant zipper, or hang hole options' },
        { label: 'Thickness', value: '3 mil / 4 mil / 5 mil laminate stacks tuned for moisture and aroma' },
        { label: 'Finish', value: 'Gloss, matte, holographic films, or tactile spot varnish panels' },
        { label: 'Printing', value: 'Rotogravure or digital up to 9 colors with matte/gloss dual panels' },
        { label: 'Dimensions (L x W x H)', value: 'Standard 4" x 6" to 12" x 15" gusseted formats with custom die-cuts' },
        { label: 'Quantity', value: 'Flexible runs from 1,000 digitally printed pouches to 50,000+' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Mylar Boxes Engineered for Shelf Life',
      paragraphs: [
        'Mylar packaging is the standard for brands that demand freshness, aroma retention, and striking shelf impact. We combine high-barrier films with precision sealing to protect sensitive products.',
        'Customize zipper, gusset, and window styles to balance usability with merchandising appeal. Metallics, holographics, and transparent reveals bring personality to your pouches.',
        'With rapid prototyping, low minimums, and food-safe certifications, we support product launches, seasonal flavors, and large-scale runs with equal focus.'
      ]
    },
    faq: buildFaq('Mylar Boxes', [
      {
          question: 'What barrier options can my mylar packaging include?',
          answer:
            'We layer PET, VMPET, and PE films to achieve moisture, oxygen, and aroma barriers that match your shelf-life targets. We can also add aluminum layers for products needing maximum protection.'
      },
      {
          question: 'Can mylar pouches be child-resistant?',
          answer:
            'Yes. We offer certified child-resistant zipper systems and tear-notches that meet regulatory requirements for cannabis, nutraceutical, and chemical products.'
      },
      {
          question: 'How do metallic and holographic effects impact lead time?',
          answer:
            'Specialty films are stocked in-house, so adding holographic or metallic finishes typically adds only a few extra days for lamination and proofing.'
      },
      {
          question: 'Are low-minimum digital runs available for mylar packaging?',
          answer:
            'We can produce as few as 1,000 digitally printed pouches, making it easy to test flavors or limited editions before scaling to long-run gravure production.'
      }
    ], { heading: 'Questions about Mylar Boxes', eyebrow: 'Mylar Packaging FAQs' }),
    cta: {
      title: 'Ready for Mylar Packaging?',
      description: 'Get a custom quote for your mylar boxes today. Discover the perfect barrier packaging solution for your products.'
    },
  },

  // Product: Shopping Bags
  'shopping-bags': {
    name: 'Shopping Bags',
    description: 'Our stylish shopping bags combine strength with modern appeal. They extend your brand presence and keep customers engaged well beyond purchase.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Recycled and FSC-certified stocks reinforce sustainable messaging',
      'Rivet, rope, or ribbon handles tailored to product weight and style',
      'Full-color CMYK, metallic, and spot UV finishes boost visibility',
      'Fold-flat construction saves storage, quick pop-up saves time',
      'Interior printing and branded tissue amplify unboxing moments',
      'Reusable tote-style designs extend your marketing reach beyond checkout',
      'Custom gussets and bases support everything from cosmetics to apparel'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '157gsm art paper, natural kraft, or 120u non-woven fabrics' },
        { label: 'Structure', value: 'Pinch-bottom, square-bottom, or euro tote with custom handles' },
        { label: 'Thickness', value: '120gsm / 157gsm / 210gsm papers with reinforced base cards' },
        { label: 'Finish', value: 'Matte or gloss lamination, foil stamping, spot UV, or soft-touch' },
        { label: 'Printing', value: 'Full-bleed offset, silk-screen metallics, Pantone-matched branding' },
        { label: 'Dimensions (L x W x H)', value: 'From 6" x 3" x 8" boutique bags to 16" x 6" x 13" totes' },
        { label: 'Quantity', value: 'Custom bag orders starting at 250 units with restock programs' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Shopping Bags Designed for Everyday Branding',
      paragraphs: [
        'Shopping bags extend your brand beyond the point of sale. We craft each bag to balance carrying comfort, durability, and a visual presence that attracts attention on the street.',
        'Choose from luxury rope handles, ribbon details, or reinforced die-cut grips. Interior print, custom gussets, and specialty laminations ensure customers keep using your bag.',
        'From boutique collections to national retail programs, we align bag construction with your sustainability goals and merchandising calendar.'
      ]
    },
    faq: buildFaq('Shopping Bags', [
      {
          question: 'What handle styles can I include on my shopping bags?',
          answer:
            'We offer twisted paper, ribbon, rope, and die-cut handles. Each option is load-tested so the handle matches your bag size and product weight.'
      },
      {
          question: 'Can shopping bags be produced with sustainable materials?',
          answer:
            'Yes. We source FSC-certified papers, recycled fibers, and water-based inks. Reinforced bases keep the bag reusable while supporting sustainability goals.'
      },
      {
          question: 'Do you provide custom tissue or accessories to match the bags?',
          answer:
            'We can coordinate tissue, stickers, and belly bands that ship alongside your bags. Our kitting services bundle everything so stores receive complete merchandising sets.'
      },
      {
          question: 'How quickly can you replenish shopping bags for peak seasons?',
          answer:
            'Standard lead times are 3–4 weeks, but we stage production and inventory to support seasonal surges. Rush programs are available for last-minute events.'
      }
    ]),
    cta: {
      title: 'Ready for Eco-Friendly Shopping?',
      description: 'Get a custom quote for your shopping bags today. Promote your brand while protecting the environment.'
    },
  },

  // Product: Packaging Accessories
  'packaging-accessories': {
    name: 'Packaging Accessories',
    description: 'Essential accessories to complete your packaging needs. From protective materials to decorative elements, we have everything you need.',
    heroImage: 'products-box-img_x8vu4b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Protective fillers: foam, molded pulp, and tissue tailored to your product',
      'Decor wraps, sleeves, and belly bands that elevate shelf presence',
      'Custom labels, stickers, and hang tags reinforce brand storytelling',
      'Thank-you cards, inserts, and QR-enabled collateral drive engagement',
      'Tamper-evident seals and security tapes safeguard high-value goods',
      'Ribbon, twine, and wax seals create premium finishing touches',
      'Kitting and fulfillment-ready accessory packs streamline operations'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'FSC-certified papers, PET, PVC, and specialty substrates' },
        { label: 'Structure', value: 'Labels, belly bands, wraps, tape, inserts, tags, and seals' },
        { label: 'Thickness', value: 'Paper 70gsm-240gsm, films 1.5 mil-4 mil, board up to 20pt' },
        { label: 'Finish', value: 'Varnish, foil, textured laminates, emboss, and specialty coatings' },
        { label: 'Printing', value: 'Digital, flexo, or offset with metallics, white, and variable data' },
        { label: 'Dimensions (L x W x H)', value: 'Sized from 1" accent labels to 24" protective wraps' },
        { label: 'Quantity', value: 'Accessory packs from 500 pieces with kitting fulfillment' }
      ]
    },
    overview: {
      heading: 'Product Overview',
      title: 'Packaging Accessories That Complete the Experience',
      paragraphs: [
        'Accessories transform functional packaging into a curated experience. We supply everything from protective inserts to branded collateral that ties your presentation together.',
        'Add tactile finishes with ribbons, wax seals, belly bands, and custom wraps, or build informative touchpoints with QR-enabled cards and booklets.',
        'Our kitting team bundles accessories to match your fulfillment flow, ensuring every package leaves your facility consistent, polished, and on-brand.'
      ]
    },
    faq: buildFaq('Packaging Accessories', [
      {
          question: 'Can accessories ship pre-kitted with my packaging?',
          answer:
            'Yes. We assemble accessory packs—like tissue, stickers, or inserts—so fulfillment teams receive ready-to-use bundles that match each SKU or campaign.'
      },
      {
          question: 'Do you source specialty materials like ribbon or wax seals?',
          answer:
            'We maintain a vetted supplier network for ribbons, wax seals, and specialty trims. Our sourcing team matches colors and textures to your exact brand guidelines.'
      },
      {
          question: 'How are printed collateral pieces coordinated with packaging?',
          answer:
            'Our prepress team aligns booklet, card, and label artwork with your packaging color targets, ensuring everything looks cohesive when unboxed.'
      },
      {
          question: 'Can accessory programs scale for subscription or influencer kits?',
          answer:
            'Absolutely. We manage inventory, apply personalization, and schedule drop shipments to keep subscription and influencer programs on time and consistent.'
      }
    ], { heading: 'Questions about Packaging Accessories', eyebrow: 'Accessory FAQs' }),
    cta: {
      title: 'Ready to Complete Your Packaging?',
      description: 'Get a custom quote for your packaging accessories today. Complete your packaging solution with our premium accessories.'
    },
  },
  
  // ========== MATERIAL CATEGORY SUBcategories ==========
  
  // Rigid Boxes Subcategories
  // Subcategory: Magnetic Closure Rigid Box
  'magnetic-closure-rigid-box': {
    name: 'Magnetic Closure Rigid Box',
    description: 'Premium rigid boxes with magnetic closure system for elegant and secure packaging. Perfect for luxury products that require sophisticated presentation.',
    heroImage: 'Mailer-Box-3_oct2ws',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    
    keyFeatures: [
      'Concealed magnetic closure for seamless opening',
      'Premium rigid board construction',
      'Elegant matte or glossy finish',
      'Fully customizable design',
      'Perfect for luxury products',
      'Reusable and durable',
      'Professional presentation'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '100pt-120pt rigid greyboard wrapped in anti-scratch coated paper' },
        { label: 'Structure', value: 'Flip-top clamshell with embedded neodymium magnets and iron plates' },
        { label: 'Thickness', value: '2.5 mm walls with optional EVA, satin, or molded plastic inserts' },
        { label: 'Finish', value: 'Soft-touch matte, high gloss, foil stamping, and debossed logos' },
        { label: 'Printing', value: 'Offset CMYK with spot PMS, interior floods, and foil interior panels' },
        { label: 'Dimensions (L x W x H)', value: 'From 6" x 6" x 2" gift kits to 14" x 10" x 5" hampers' },
        { label: 'Quantity', value: 'Boutique runs starting at 100 magnetic rigid boxes' }
      ]
    },
    faq: buildFaq('Magnetic Closure Rigid Box', [
      {
        question: 'How strong are the magnetic closures on these rigid boxes?',
        answer:
          'We embed neodymium magnets within the wrap so the closure remains secure through repeated openings and during transit. Magnet placement is tested to match the weight of your product.'
      },
      {
        question: 'Can I customize the interior platform of a magnetic closure rigid box?',
        answer:
          'Yes. We design custom EVA, foam, or satin-wrapped platforms that cradle each component. Inserts are cut to exact tolerances so the reveal feels intentional every time.'
      },
      {
        question: 'Do magnetic closure rigid boxes ship set-up or flat?',
        answer:
          'You can choose either. Most luxury programs ship set-up for immediate use, but we also offer partially assembled options to save freight while keeping assembly simple.'
      }
    ]),
    cta: {
      title: 'Ready for Luxury Packaging?',
      description: 'Get a custom quote for your magnetic closure rigid boxes today. Experience premium packaging that elevates your brand.'
    }
  },

  // Subcategory: Two Piece Rigid Boxes
  'two-piece-rigid-boxes': {
    name: 'Two Piece Rigid Boxes',
    description: 'Classic two-piece rigid boxes featuring separate base and lid for premium product presentation. Perfect for retail and gift packaging.',
    heroImage: 'Mailer-Box-3_oct2ws',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Separate base and lid design',
      'Premium rigid board construction',
      'Perfect fit and alignment',
      'Fully customizable',
      'Retail-ready presentation',
      'Durable and reusable',
      'Professional finish options'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '90pt-120pt rigid board wrapped in coated, textured, or specialty paper' },
        { label: 'Structure', value: 'Lift-off lid with telescoping shoulder, friction-fit base, or neck inserts' },
        { label: 'Thickness', value: '2.0 mm / 2.5 mm board walls with optional reinforced corners' },
        { label: 'Finish', value: 'Matte or gloss laminate, soft-touch, foil, and debossed lid crests' },
        { label: 'Printing', value: 'Offset CMYK, PMS accents, and interior flood or pattern printing' },
        { label: 'Dimensions (L x W x H)', value: 'Sized from 4" x 4" x 2" jewelry to 15" x 12" x 6" apparel boxes' },
        { label: 'Quantity', value: 'Custom two-piece runs beginning at 150 sets' }
      ]
    },
    faq: buildFaq('Two Piece Rigid Boxes', [
      {
        question: 'How do you ensure the lid and base of a two-piece rigid box fit perfectly?',
        answer:
          'We dial in shoulder height and friction tolerances during prototyping so the lid glides smoothly while staying aligned. Each run is checked to maintain that premium feel.'
      },
      {
        question: 'Can I add custom inserts or accessories inside the two-piece box?',
        answer:
          'Absolutely. We fabricate custom foam, molded pulp, or folded board inserts that match your product layout and keep contents secure during shipping and unboxing.'
      },
      {
        question: 'Are there sustainable material options for two-piece rigid boxes?',
        answer:
          'Yes. We offer recycled greyboard cores wrapped in FSC-certified papers and can finish them with water-based coatings to support your sustainability commitments.'
      }
    ]),
    cta: {
      title: 'Ready for Premium Packaging?',
      description: 'Get a custom quote for your two-piece rigid boxes today. Create elegant packaging that showcases your products beautifully.'
    }
  },

  // Subcategory: Sliding / Sleeve Rigid Boxes (Match Style Boxes)
  'sliding-sleeve-rigid-boxes-match-style-boxes': {
    name: 'Sliding / Sleeve Rigid Boxes (Match Style Boxes)',
    description: 'Elegant sliding sleeve rigid boxes with matchbox-style design. The outer sleeve slides over the inner tray for sophisticated presentation.',
    heroImage: 'Mailer-Box-3_oct2ws',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Sliding sleeve design',
      'Matchbox-style construction',
      'Smooth sliding mechanism',
      'Premium rigid board',
      'Fully customizable',
      'Elegant presentation',
      'Durable construction'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'Rigid greyboard wrapped in coated art paper or textured specialty stocks' },
        { label: 'Structure', value: 'Drawer-style inner tray with contrasting outer sleeve and ribbon pulls' },
        { label: 'Thickness', value: '2.0 mm tray walls with optional 3.0 mm base reinforcement' },
        { label: 'Finish', value: 'Matte or gloss laminate, foil frames, spot UV, or soft-touch varnish' },
        { label: 'Printing', value: 'Offset CMYK + metallic inks across sleeve and tray surfaces' },
        { label: 'Dimensions (L x W x H)', value: 'From 5" x 4" x 1.5" electronics to 12" x 9" x 3" welcome kits' },
        { label: 'Quantity', value: 'Custom sleeve sets starting at 200 match-style boxes' }
      ]
    },
    faq: buildFaq('Sliding Sleeve Rigid Boxes', [
      {
        question: 'How smooth is the sliding action on these rigid boxes?',
        answer:
          'We line sleeves and trays with low-friction wraps and check tolerances during assembly so every reveal feels smooth without being loose.'
      },
      {
        question: 'Can I add a ribbon pull or magnetic stop to the sleeve?',
        answer:
          'Yes. Ribbon pulls, thumb notches, and hidden magnets can be integrated to enhance usability while keeping the sleeve aligned with the tray.'
      },
      {
        question: 'What insert options work best for sliding sleeve boxes?',
        answer:
          'Foam, paperboard, or molded plastic inserts can be engineered to fit the tray. We ensure the insert height lines up with the sleeve opening for a polished reveal.'
      }
    ]),
    cta: {
      title: 'Ready for Elegant Packaging?',
      description: 'Get a custom quote for your sliding sleeve rigid boxes today. Create sophisticated packaging that stands out.'
    }
  },

  // Subcategory: Brief Case Style
  'brief-case-style': {
    name: 'Brief Case Style',
    description: 'Luxury briefcase-style rigid boxes with handle and latch closure. Perfect for premium products requiring executive presentation.',
    heroImage: 'Mailer-Box-3_oct2ws',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Briefcase-style design',
      'Integrated handle',
      'Latch closure system',
      'Premium rigid construction',
      'Executive presentation',
      'Fully customizable',
      'Luxury finish options'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'Rigid greyboard laminated with fabric, PU leather, or coated papers' },
        { label: 'Structure', value: 'Suitcase-inspired clamshell with metal hinges, handle hardware, and clasps' },
        { label: 'Thickness', value: 'Reinforced 3.0 mm panels with internal support rails and trays' },
        { label: 'Finish', value: 'Hand-stitched corners, matte varnish, metallic guards, embossed plates' },
        { label: 'Printing', value: 'Silk-screened logos, foil deboss on wraps, printed liners, and badges' },
        { label: 'Dimensions (L x W x H)', value: 'Executive kits from 11" x 8" x 2" to 18" x 13" x 4"' },
        { label: 'Quantity', value: 'Limited production starting at 50 briefcase kits' }
      ]
    },
    faq: buildFaq('Brief Case Style Rigid Boxes', [
      {
        question: 'How durable are the handles and hardware on briefcase-style boxes?',
        answer:
          'We source metal hardware rated for repeated use and reinforce handle areas with additional board layers so the case travels securely.'
      },
      {
        question: 'Can I customize the interior compartments of the briefcase box?',
        answer:
          'Absolutely. We design foam, trays, and accessory pockets that organize each component, ensuring the presentation feels like a curated kit.'
      },
      {
        question: 'Do these boxes ship assembled?',
        answer:
          'Most briefcase programs ship fully assembled with hardware installed. For large deployments we can ship partially assembled kits with simple final setup instructions.'
      }
    ]),
    cta: {
      title: 'Ready for Executive Packaging?',
      description: 'Get a custom quote for your briefcase-style rigid boxes today. Create premium packaging that commands attention.'
    }
  },

  // Subcategory: Book Style Rigid Boxes
  'book-style-rigid-boxes': {
    name: 'Book Style Rigid Boxes',
    description: 'Elegant book-style rigid boxes that open like a book. Perfect for premium products requiring sophisticated and unique presentation.',
    heroImage: 'Mailer-Box-3_oct2ws',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Book-style opening mechanism',
      'Hinged lid design',
      'Premium rigid construction',
      'Elegant presentation',
      'Fully customizable',
      'Luxury finish options',
      'Unique unboxing experience'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '90pt-110pt rigid board wrapped in art paper or buckram book cloth' },
        { label: 'Structure', value: 'Hardcover-style hinged lid with magnetic closure and inside platform' },
        { label: 'Thickness', value: '2.0 mm cover boards with 1.5 mm spine wrap and platform risers' },
        { label: 'Finish', value: 'Linen textures, foil spine titles, debossed covers, spot UV prints' },
        { label: 'Printing', value: 'Offset CMYK with PMS spine inks, foil combinations, interior floods' },
        { label: 'Dimensions (L x W x H)', value: 'Album formats from 7" x 9" x 1.5" to 13" x 11" x 3"' },
        { label: 'Quantity', value: 'Special edition runs starting at 100 book-style boxes' }
      ]
    },
    faq: buildFaq('Book Style Rigid Boxes', [
      {
        question: 'How do book-style rigid boxes stay closed?',
        answer:
          'We integrate concealed magnets, ribbon ties, or elastic straps into the spine so the cover stays shut while still offering a smooth, book-like opening.'
      },
      {
        question: 'Can the spine and cover be customized separately?',
        answer:
          'Yes. We can apply different wraps, foil titles, and embossing to the spine and cover, helping you emulate the look of a premium hardcover release.'
      },
      {
        question: 'What insert options pair well with book-style boxes?',
        answer:
          'Platform risers, foam trays, and printed booklets can be combined to tell a story as the recipient turns each “page” of the reveal.'
      }
    ]),
    cta: {
      title: 'Ready for Unique Packaging?',
      description: 'Get a custom quote for your book-style rigid boxes today. Create memorable packaging that tells your brand story.'
    }
  },
  // ========== KRAFT BOXES SUBCATEGORIES ==========
  // Subcategory: Kraft Mailer Box
  'kraft-mailer-box': {
    name: 'Kraft Mailer Box',
    description: 'Earth-friendly kraft mailer boxes engineered for DTC brands that want their unboxing moment to feel premium without sacrificing sustainability.',
    heroImage: 'Mailer-Box_ximzdy',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Rigid tuck-top panels protect subscription items in transit',
      'Spot and flood coatings elevate the natural kraft surface',
      'Fully printable interior for storytelling and cross-sells',
      'Frustration-free opening experience with tear-strips or tabs',
      'Ships flat to minimize warehousing and fulfillment costs',
      'Made with recycled fibers and low-VOC inks',
      'Ideal for DTC cosmetics, apparel drops, and artisan goods'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'E-flute recycled kraft board with kraft or white interior liners' },
        { label: 'Structure', value: 'Die-cut self-locking mailer with cherry locks and dust flaps' },
        { label: 'Thickness', value: '1/16" corrugated profile with optional double-wall front panel' },
        { label: 'Finish', value: 'Uncoated kraft, water-based varnish, soft-touch AQ, or spot foil' },
        { label: 'Printing', value: 'Digital CMYK with white ink or 2-color flexo inside and out' },
        { label: 'Dimensions (L x W x H)', value: 'From 6" x 4" x 2" sample boxes to 12" x 9" x 4" shipments' },
        { label: 'Quantity', value: 'Short runs starting at 250 kraft mailers' }
      ]
    },
    faq: buildFaq('Kraft Mailer Box', [
      {
        question: 'Will kraft mailer boxes protect products during parcel shipping?',
        answer:
          'We specify the right corrugate grade and reinforce stress points so your kraft mailers pass parcel drop and crush testing without needing extra void fill.'
      },
      {
        question: 'Can I print inside my kraft mailer boxes?',
        answer:
          'Yes. Interior panels can feature storytelling, care instructions, or referral offers printed in white ink or full color while keeping the natural kraft look.'
      },
      {
        question: 'Do kraft mailers arrive pre-folded?',
        answer:
          'They ship flat to save space but include clear fold lines and locking tabs for quick assembly on the packing line.'
      }
    ]),
    cta: {
      title: 'Ready to Launch Kraft Mailers?',
      description: 'Share your dimensions and brand goals—we’ll craft a kraft mailer box that arrives ready to impress.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Mailer Boxes Built for DTC Moments',
      paragraphs: [
        'Kraft mailer boxes balance authentic texture with modern production, ensuring your parcels stand out in stacked mailrooms and on social feeds.',
        'Every panel is engineered for strength, print fidelity, and fulfillment efficiency, so you can scale subscription shipments without damage claims.',
        'From pre-folded kitting to edition-specific sleeves, we tailor kraft mailers to support your marketing calendars and customer retention goals.'
      ]
    }
  },

  // Subcategory: Kraft Box with Lid
  'kraft-box-with-lid': {
    name: 'Kraft Box with Lid',
    description: 'Two-piece kraft boxes with separate bases and lids that create an elevated reveal for retail shelves, specialty gifting, and premium sampling.',
    heroImage: 'Kraft-Boxes-With-Lid_bvvlo5',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Rigid lid and base provide display-ready structure',
      'Mix-and-match lid and base colors for tiered variants',
      'Supports soft-touch, linen, or foil embellished wraps',
      'Interior cavities sized for jars, apparel, or glassware',
      'Stackable geometry for retail merchandising',
      'Optional neck lids or shoulder inserts for luxury feel',
      'Ships flat or pre-assembled depending on program scale'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '18pt-24pt kraft SBS with food-safe interior or white top wrap' },
        { label: 'Structure', value: 'Two-piece lid and base with optional shoulder neck or neck lid' },
        { label: 'Thickness', value: '0.018" / 0.020" / 0.024" board plus optional corrugated pads' },
        { label: 'Finish', value: 'Matte varnish, soft-touch film, foil edges, linen or textured wraps' },
        { label: 'Printing', value: 'Offset CMYK with white ink accents and interior branding' },
        { label: 'Dimensions (L x W x H)', value: 'From 4" x 4" x 3" gifting to 12" x 10" x 5" shelf boxes' },
        { label: 'Quantity', value: 'Custom lid and base sets starting at 300 units' }
      ]
    },
    faq: buildFaq('Kraft Box with Lid', [
      {
        question: 'How do you keep kraft lids from feeling loose?',
        answer:
          'We prototype lid and base tolerances to achieve a snug friction fit. Optional shoulders or neck inserts can add extra stability for heavier contents.'
      },
      {
        question: 'Can I mix different lid and base colors?',
        answer:
          'Absolutely. We can wrap lids and bases in contrasting kraft or specialty papers, giving you tiered variants within the same production run.'
      },
      {
        question: 'Are food-safe liners available for kraft lid boxes?',
        answer:
          'Yes. We can add FDA-compliant interior liners or coatings so edible products stay protected without compromising the kraft finish.'
      }
    ]),
    cta: {
      title: 'Ready to Present in Kraft Lids?',
      description: 'Tell us about your product and we’ll build a kraft lid box experience that turns gifting into storytelling.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Lid Boxes Made for Memorable Reveals',
      paragraphs: [
        'Our kraft lid boxes combine rigid board strength with warm, sustainable textures, giving your product a giftable aura straight out of the shipper.',
        'We calibrate lid tension, board thickness, and interior fitments to ensure every reveal feels smooth, premium, and consistent across batches.',
        'Whether you need a limited edition drop or nationwide retail rollout, we align finishes, inserts, and logistics so your lid boxes deliver on every visit.'
      ]
    }
  },

  // Subcategory: Kraft Pillow Box
  'kraft-pillow-box': {
    name: 'Kraft Pillow Box',
    description: 'Sleek kraft pillow boxes ideal for boutique retail, beauty samples, and event favors that call for minimal footprint with maximum tactile charm.',
    heroImage: 'Kraft-Pillow-Soap-Box_qgyxg3',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Curved sidewalls create a distinctive silhouette',
      'Tabs lock securely without adhesives',
      'Slim profile perfect for hang tags or ribbon wraps',
      'Printable across the full exterior curve',
      'Ships flat for effortless storage and assembly',
      'Compatible with single-product sample drops',
      'Custom sizes available from jewelry to apparel accessories'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '16pt kraft folding carton with optional white clay coated finish' },
        { label: 'Structure', value: 'Curved pillow die-cut with tuck tabs and optional euro hang hole' },
        { label: 'Thickness', value: '0.016" kraft stock with 0.018" upgrade for heavier accessories' },
        { label: 'Finish', value: 'Natural kraft, soft-touch laminate, foil stamping, or window patch' },
        { label: 'Printing', value: 'Digital or offset CMYK with white ink and metallic accents' },
        { label: 'Dimensions (L x W x H)', value: 'From 4" x 2" x 1" favor pillows to 8" x 4" x 2" retail packs' },
        { label: 'Quantity', value: 'Kraft pillow box runs beginning at 500 units' }
      ]
    },
    faq: buildFaq('Kraft Pillow Box', [
      {
        question: 'How secure are the closures on kraft pillow boxes?',
        answer:
          'Each end features interlocking tabs that snap into place. We tailor tab depth to product thickness so the box stays closed without tape.'
      },
      {
        question: 'Can pillow boxes include hanging holes or windows?',
        answer:
          'Yes. We can add euro holes for peg displays or apply a window patch to showcase your product while maintaining structural integrity.'
      },
      {
        question: 'Are pillow boxes good for mailing?',
        answer:
          'They are best for handouts or retail. For shipping we recommend pairing the pillow box with an exterior mailer to protect the curved panels.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate with Kraft Pillow Boxes?',
      description: 'Tell us about your event or SKU assortment and we’ll craft pillow boxes that make each handoff memorable.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Pillow Boxes Designed for Boutique Impact',
      paragraphs: [
        'Slim, curved kraft pillow boxes deliver a polished experience for lightweight goods, samples, and giftables.',
        'We optimize tab tension, board caliper, and finish so every box feels intentional from the first touch to the final reveal.',
        'With curated finishing and accessories, pillow boxes become a reusable part of your brand story long after checkout.'
      ]
    }
  },

  // Subcategory: Kraft Gable Box
  'kraft-gable-box': {
    name: 'Kraft Gable Box',
    description: 'Portable kraft gable boxes with integrated handles—perfect for gourmet takeaway, corporate gifting, and experiential kits.',
    heroImage: 'Kraft-Gable-Box_i0vbt9',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Integrated die-cut handle for comfortable carrying',
      'Locking tabs keep contents secure in transit',
      'Wide printable panels support bold branding',
      'Food-safe coatings available for direct-contact items',
      'Flat-pack shipping saves storage and speeds assembly',
      'Supports window cut-outs for product peeks',
      'Strength rated for gourmet jars, candles, and merch'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '20pt kraft SBS or lightweight corrugated with reinforced handle' },
        { label: 'Structure', value: 'Auto-lock bottom gable with interlocking handle tabs and window option' },
        { label: 'Thickness', value: '0.020" board or 1.5 mm micro-flute for heavier takeaway items' },
        { label: 'Finish', value: 'Natural kraft, flood color, moisture-resistant coatings, foil seals' },
        { label: 'Printing', value: 'Flexo 1-3 colors for speed or offset for photographic branding' },
        { label: 'Dimensions (L x W x H)', value: 'Carry sizes from 6" x 4" x 4" to 10" x 6" x 7"' },
        { label: 'Quantity', value: 'Kraft gable orders starting at 250 handled boxes' }
      ]
    },
    faq: buildFaq('Kraft Gable Box', [
      {
        question: 'How much weight can a kraft gable box carry?',
        answer:
          'Handle areas are reinforced and tested for your exact load. We can switch to heavier caliper board or add support inserts for particularly heavy items.'
      },
      {
        question: 'Can I add windows to a kraft gable box?',
        answer:
          'Absolutely. We die-cut windows in the panels and can add a clear film to protect contents while putting them on display.'
      },
      {
        question: 'Do these boxes ship flat?',
        answer:
          'Yes. They arrive flat-packed with pre-scored folds so your team can pop them open and lock the base in seconds.'
      }
    ]),
    cta: {
      title: 'Ready to Carry in Kraft Style?',
      description: 'Tell us about your gifting or gourmet program and we’ll build kraft gable boxes that travel beautifully.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Gable Boxes Built for Elevated Portability',
      paragraphs: [
        'Kraft gable boxes combine built-in handles with rigid walls, giving your takeaway or gifting experience a premium yet practical touch.',
        'Every structural element—from lock-bottom strength to handle comfort—is tuned to the weight and fragility of your products.',
        'With custom inserts, finishing, and kitting, these carriers become part of the event or retail story from pickup to unboxing.'
      ]
    }
  },

  // Subcategory: Kraft Bakery / Cake Box
  'kraft-bakery-cake-box': {
    name: 'Kraft Bakery / Cake Box',
    description: 'Grease-resistant kraft cake boxes that keep pastries pristine while showcasing your bakery’s handcrafted personality.',
    heroImage: 'Kraft-Bakery-Cake-Box_lbrpz8',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Grease-resistant liners maintain presentation during transport',
      'Window options show off frosting and decoration details',
      'Auto-lock bottoms support heavier baked goods',
      'Food-safe materials approved for direct contact',
      'Vents optional to prevent frosting condensation',
      'Ships flat for back-of-house efficiency',
      'Custom sizes from cupcakes to multi-tier cakes'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '18pt kraft board with food-safe clay-coated interior liners' },
        { label: 'Structure', value: 'Auto-bottom or lock corner bakery fold with optional window film' },
        { label: 'Thickness', value: '0.018" board with 0.024" upgrade for tiered cakes and heavier pastries' },
        { label: 'Finish', value: 'Food-contact aqueous coatings, spot gloss frames, perforated vents' },
        { label: 'Printing', value: 'Offset CMYK with FDA-compliant inks and interior allergen panels' },
        { label: 'Dimensions (L x W x H)', value: 'From 8" x 8" x 4" cakes to 14" x 10" x 6" catering trays' },
        { label: 'Quantity', value: 'Bakery-ready runs starting at 250 kraft cake boxes' }
      ]
    },
    faq: buildFaq('Kraft Bakery Box', [
      {
        question: 'Will frosting or glaze stain the kraft bakery box?',
        answer:
          'We apply grease-resistant, food-safe liners to the interior so frosting and fillings stay contained without affecting the kraft exterior.'
      },
      {
        question: 'Can I add vents to manage moisture?',
        answer:
          'Yes. Strategic venting prevents condensation for warm pastries. We can design removable vents if you need to toggle airflow per SKU.'
      },
      {
        question: 'Do you offer inserts for cupcakes or pastries?',
        answer:
          'We create die-cut inserts sized to your baked goods so each item travels upright and arrives display-ready.'
      }
    ]),
    cta: {
      title: 'Ready to Box Your Bakes Beautifully?',
      description: 'Share your menu and we’ll deliver kraft bakery boxes that keep every treat pristine.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Bakery Boxes Designed for Culinary Showcases',
      paragraphs: [
        'Our bakery boxes marry food-safe performance with the handcrafted warmth of kraft.',
        'From cupcake flights to towering cakes, we ensure structural integrity, barrier protection, and visual appeal.',
        'With tailored inserts, vents, and imagery, every box becomes an extension of your bakery experience.'
      ]
    }
  },

  // Subcategory: Kraft Sleeve Box
  'kraft-sleeve-box': {
    name: 'Kraft Sleeve Box',
    description: 'Minimalist kraft sleeve-and-tray packaging that slides open to reveal curated products, perfect for lifestyle brands and influencer kits.',
    heroImage: 'Kraft-Sleeve-Box_zebf6i',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Two-piece slide motion delivers a premium reveal',
      'Sleeves double as branding real estate and protection',
      'Custom tray cavities keep items aligned and secure',
      'Supports magnetic closures or ribbon pulls',
      'Great for limited drops, welcome kits, and media mailers',
      'Modular design allows quick variant swaps',
      'Ships assembled or flat depending on timeline'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '18pt kraft sleeves paired with white or kraft inner trays' },
        { label: 'Structure', value: 'Slide-on sleeve over tuck-end or open-faced tray with thumb notch' },
        { label: 'Thickness', value: '0.018" sleeve with 0.020" tray walls for rigid presentation' },
        { label: 'Finish', value: 'Matte varnish, spot foil striping, debossed logos, window patching' },
        { label: 'Printing', value: 'Digital CMYK with white ink or litho for gradient-rich artwork' },
        { label: 'Dimensions (L x W x H)', value: 'Sleeve sets from 5" x 5" x 1.5" to 11" x 8" x 3"' },
        { label: 'Quantity', value: 'Sleeve and tray programs starting at 400 units' }
      ]
    },
    faq: buildFaq('Kraft Sleeve Box', [
      {
        question: 'How do you keep the sleeve gliding smoothly over the tray?',
        answer:
          'We calibrate sleeve tolerance during prototyping and can add thumb notches or ribbon pulls so the slide action feels premium without snagging.'
      },
      {
        question: 'Can I swap sleeves for seasonal campaigns?',
        answer:
          'Yes. We can mass-produce core trays and print multiple sleeve versions that slide onto the same base, giving you easy refreshes.'
      },
      {
        question: 'Are magnetic closures available for kraft sleeve boxes?',
        answer:
          'We can embed slim magnets or friction stops to keep the sleeve from sliding open unintentionally during transit.'
      }
    ]),
    cta: {
      title: 'Ready to Slide into Memorable Packaging?',
      description: 'Share your product lineup and we’ll craft kraft sleeve boxes that elevate every reveal.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Sleeve Boxes Crafted for Captivating Reveals',
      paragraphs: [
        'Sleeve-and-tray packaging turns every product story into a controlled, cinematic reveal.',
        'We coordinate materials, inserts, and finishes so each slide-out feels smooth and on-brand.',
        'With modular trays and variable sleeves, you can update campaigns without reinventing your packaging.'
      ]
    }
  },

  // Subcategory: Kraft TUCK End BOX - Reverse Tuck / Straight Tuck / Auto Lock
  'kraft-tuck-end-box': {
    name: 'Kraft Tuck End Box',
    description: 'Versatile kraft tuck-end cartons engineered for retail shelves, ready to protect products while reinforcing your natural brand aesthetic.',
    heroImage: 'Kraft-Tuck-End-Box_xot1ve',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Available in reverse, straight, and auto-lock bottom formats',
      'Supports hang tabs, perforations, and reclosable features',
      'Excellent print surface for bold graphics on kraft stock',
      'Custom die-cuts and windows reveal product highlights',
      'Optimized for high-speed folding and gluing lines',
      'Collapsible design reduces shipping and storage costs',
      'Ideal for CPG, cosmetic, and wellness product lines'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '14pt-18pt kraft SBS engineered for tuck-end constructions' },
        { label: 'Structure', value: 'Reverse tuck, straight tuck, or auto-lock with glue seam options' },
        { label: 'Thickness', value: '0.014" / 0.016" / 0.018" panels with reinforced tuck flaps' },
        { label: 'Finish', value: 'Matte AQ, eco varnish, perforated tear strips, foil naming plates' },
        { label: 'Printing', value: 'Offset CMYK plus Pantone spots and variable batch coding' },
        { label: 'Dimensions (L x W x H)', value: 'From 2" x 1" x 4" wellness packs to 6" x 3" x 9" pantry goods' },
        { label: 'Quantity', value: 'High-speed compatible runs beginning at 500 kraft tuck cartons' }
      ]
    },
    faq: buildFaq('Kraft Tuck End Box', [
      {
        question: 'Which tuck style should I choose for my product?',
        answer:
          'Reverse tuck works well for manual packing, straight tuck excels for shelf presentation, and auto-lock bottoms add strength for heavier items. We help you select the right option.'
      },
      {
        question: 'Can kraft tuck cartons include hang tabs or windows?',
        answer:
          'Yes. We can add die-cut windows with film, peg-ready hang tabs, and perforations without compromising the structural integrity of the tuck flaps.'
      },
      {
        question: 'How do kraft tuck boxes perform on auto-gluers?',
        answer:
          'We fine-tune score depth and glue flaps to keep your cartons running efficiently on automated folding and gluing lines.'
      }
    ]),
    cta: {
      title: 'Ready to Upgrade Your Kraft Cartons?',
      description: 'Send us your product specs and we’ll craft kraft tuck boxes that slot seamlessly into your workflow.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Tuck Cartons Engineered for Retail Success',
      paragraphs: [
        'Kraft tuck cartons deliver an authentic, sustainable presence while supporting high-speed production.',
        'We tailor closure styles, coatings, and inserts to protect contents and enhance shelf presence.',
        'From boutique runs to national launches, our workflows keep your cartons consistent, compliant, and on schedule.'
      ]
    }
  },

  // Subcategory: Kraft Five Panel Hanger Box
  'kraft-five-panel-hanger-box': {
    name: 'Kraft Five Panel Hanger Box',
    description: 'Kraft five-panel hanger boxes designed for pegboard and clip-strip displays where storytelling and visibility drive impulse buys.',
    heroImage: 'Kraft-Five-Panel-Hanger-Box_vqaq1b',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Integrated hanger panel compatible with pegboard systems',
      'Large front billboard for clean brand messaging',
      'Auto-lock or tuck bottom to support various weights',
      'Optional PET-free windows or tear-away panels',
      'Efficient flat-pack shipping for retail replenishment',
      'Die-cut thumb notches for easy opening in-store',
      'Perfect for electronics, accessories, and wellness SKUs'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '16pt kraft folding carton reinforced with double-layer hanger panel' },
        { label: 'Structure', value: 'Five-panel hanger with fold-over header, lock bottom, and peg slot' },
        { label: 'Thickness', value: '0.016" board with optional 0.018" for heavier planogram items' },
        { label: 'Finish', value: 'Uncoated kraft, UV spot gloss, transparent windows, coupon tear-offs' },
        { label: 'Printing', value: 'Offset CMYK with white ink layers for crisp graphics on kraft' },
        { label: 'Dimensions (L x W x H)', value: 'Peg-ready formats from 3" x 1.5" x 6" to 6" x 2.5" x 10"' },
        { label: 'Quantity', value: 'Retail hanger cartons starting at 1,000 units' }
      ]
    },
    faq: buildFaq('Kraft Five Panel Hanger Box', [
      {
        question: 'Will the hanger panel support heavier products?',
        answer:
          'We laminate the hanger panel and reinforce the peg slot to match retailer specs, ensuring the carton won’t tear even with repeated handling.'
      },
      {
        question: 'Can I add tear-away coupons or windows to the hanger box?',
        answer:
          'Absolutely. We integrate perforated coupons, windows, or thumb notches while maintaining the structural integrity needed for peg displays.'
      },
      {
        question: 'Do these cartons pack flat for shipping?',
        answer:
          'Yes. Hanger cartons ship flat and pop into shape quickly, making replenishment easy for store staff.'
      }
    ]),
    cta: {
      title: 'Ready to Hang Your Brand with Confidence?',
      description: 'Send us your product details—we’ll craft hanger cartons that stand out on every peg.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Hanger Cartons Built for Retail Impact',
      paragraphs: [
        'Five-panel hanger boxes translate your brand story onto pegboard real estate.',
        'We tune structure, reinforcement, and finishing so every hang-ready carton meets retailer specs.',
        'With sustainable materials and smart logistics, your products shine on every aisle.'
      ]
    }
  },

  // Subcategory: Kraft Side Lock Six Corner Box
  'kraft-side-lock-six-corner-box': {
    name: 'Kraft Side Lock Six Corner Box',
    description: 'Side-lock six corner kraft cartons that pop into place instantly, creating sturdy trays ideal for bakery, apparel, and merchandising sets.',
    heroImage: 'Kraft-Side-Lock-Six-Corners_xyy2gh',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Pre-glued panels snap into shape with one motion',
      'Rigid tray design ideal for display and takeaway',
      'Locking side panels provide additional structural support',
      'Printable inside and out for branding continuity',
      'Compatible with window films or clear lids',
      'Stacks securely for shelf or cooler merchandising',
      'Reusable by consumers thanks to sturdy build'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '18pt kraft or CCNB board engineered for pop-open six corner builds' },
        { label: 'Structure', value: 'Side-lock tray with folding dust flaps, glued corners, and quick assembly' },
        { label: 'Thickness', value: '0.018" stock with optional 0.022" for heavier bakery or deli items' },
        { label: 'Finish', value: 'Matte varnish, anti-grease coatings, foil edges, window inserts' },
        { label: 'Printing', value: 'Litho CMYK with tight registration across inside and outside panels' },
        { label: 'Dimensions (L x W x H)', value: 'Trays from 6" x 4" x 2" to 12" x 9" x 4"' },
        { label: 'Quantity', value: 'Quick-fold trays beginning at 500 kraft six-corner units' }
      ]
    },
    faq: buildFaq('Kraft Side Lock Six Corner Box', [
      {
        question: 'How fast can these six corner trays be set up?',
        answer:
          'They arrive pre-glued and pop into shape with a single motion. Side locks snap into place so you can move directly to packing.'
      },
      {
        question: 'Can I add windows or clear lids to the tray?',
        answer:
          'Yes. We can design trays to accept PET windows or companion lids while keeping the side-lock mechanism secure.'
      },
      {
        question: 'Are these trays reusable for customers?',
        answer:
          'The reinforced corners and thicker kraft board mean many customers repurpose the trays, enhancing your brand exposure.'
      }
    ]),
    cta: {
      title: 'Ready for Pop-Up Kraft Trays?',
      description: 'Send us your product specs and we’ll deliver kraft trays that deploy in seconds and look exceptional.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Six Corner Trays for Instant Displays',
      paragraphs: [
        'Pop-up six corner trays give you rigid structure without slow assembly.',
        'We tailor materials, coatings, and accessories so every tray suits its retail or foodservice environment.',
        'From bakery counters to boutique shelves, your kraft trays arrive flat and deploy perfectly every time.'
      ]
    }
  },

  // Subcategory: Kraft Regular Six Corner Box
  'kraft-regular-six-corner-box': {
    name: 'Kraft Regular Six Corner Box',
    description: 'Regular six corner kraft trays that deliver dependable structure for foodservice, apparel sets, and premium merch displays.',
    heroImage: 'Kraft-Regular-Six-Corner-Box_r2wkgt',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Large open-top tray format for merchandising or service',
      'Pre-glued corners speed assembly across multiple shifts',
      'Reinforced walls support heavier SKUs without bowing',
      'Printable surfaces inside and out for brand immersion',
      'Compatible with lids, sleeves, or shrink wrapping',
      'Stable stacking for storage, shipping, and display',
      'Available with die-cut handles or thumb notches'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '16pt kraft SBS with pre-glued six corner construction' },
        { label: 'Structure', value: 'Regular six corner folding tray with double side walls and lid options' },
        { label: 'Thickness', value: '0.016" board with insert-ready base or 0.020" upgrade for heavier assortments' },
        { label: 'Finish', value: 'Matte varnish, gloss windows, foil logos, PET lid compatibility' },
        { label: 'Printing', value: 'Offset CMYK with interior messaging and window patch alignment' },
        { label: 'Dimensions (L x W x H)', value: 'Trays from 7" x 5" x 2" to 12" x 10" x 3"' },
        { label: 'Quantity', value: 'Retail trays beginning at 750 kraft six corner units' }
      ]
    },
    faq: buildFaq('Kraft Regular Six Corner Box', [
      {
        question: 'What makes regular six corner trays useful for retail?',
        answer:
          'They pop up quickly, create a stable open tray, and provide ample billboard space for branding on both interior and exterior walls.'
      },
      {
        question: 'Can these trays support heavier apparel or food items?',
        answer:
          'Yes. We can upgrade board caliper or add double walls in high-stress areas to handle heavier merchandise without bowing.'
      },
      {
        question: 'Are lid or sleeve accessories available?',
        answer:
          'We offer compatible lids, sleeves, and shrink-wrap options so you can adapt the tray to different merchandising formats.'
      }
    ]),
    cta: {
      title: 'Ready for Retail-Ready Kraft Trays?',
      description: 'Share your merchandising goals and we’ll build kraft trays that deploy fast and look sharp.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Six Corner Trays That Work Overtime',
      paragraphs: [
        'Kraft six corner trays are the workhorses of retail and foodservice displays.',
        'We tailor materials, reinforcement, and finish to match weight, handling, and branding needs.',
        'From assembly speed to shelf appeal, every tray is engineered with your workflow in mind.'
      ]
    }
  },

  // Subcategory: Kraft Seal End Auto Bottom Box
  'kraft-seal-end-auto-bottom-box': {
    name: 'Kraft Seal End Auto Bottom Box',
    description: 'High-speed kraft seal-end auto-bottom cartons that offer tamper-evident security and rapid line throughput for CPG, pharma, and nutraceutical products.',
    heroImage: 'Kraft-Seal-End-Auto-Bottom-Box_gddrys',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Auto-bottom base locks instantly for quick cartoning',
      'Seal-end flaps support tamper-evident closures',
      'Optimized for automated filling and sealing equipment',
      'Supports barrier coatings for light, moisture, or aroma protection',
      'Optional hang tabs and lot code windows',
      'Strong sidewalls resist crushing during shipment',
      'Ideal for supplements, health, and cosmetic verticals'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '18pt kraft folding carton tuned for high-speed packing lines' },
        { label: 'Structure', value: 'Seal-end top with auto-lock base and tamper-evident flaps' },
        { label: 'Thickness', value: '0.018" board with 0.020" upgrade for dense powders or mixes' },
        { label: 'Finish', value: 'Matte varnish, UV high-gloss badges, perforated pour features' },
        { label: 'Printing', value: 'Offset CMYK plus spot whites for regulatory and nutrition panels' },
        { label: 'Dimensions (L x W x H)', value: 'Cartons from 3" x 1.5" x 6" to 5" x 2.5" x 10"' },
        { label: 'Quantity', value: 'Automation-ready runs starting at 1,000 seal-end cartons' }
      ]
    },
    faq: buildFaq('Kraft Seal End Auto Bottom Box', [
      {
        question: 'How do these cartons perform on automated cartoning lines?',
        answer:
          'Auto-bottom footprints snap into shape instantly and the seal-end flaps are engineered for hot-melt or tape systems, keeping pace with high-speed equipment.'
      },
      {
        question: 'Can we incorporate tamper-evident features?',
        answer:
          'Yes. Tear tapes, perforations, and security slits can be built into the top seal to provide visual tamper evidence.'
      },
      {
        question: 'Are barrier coatings available for sensitive products?',
        answer:
          'We can apply moisture, grease, or light-barrier coatings to protect contents such as powdered mixes, supplements, or cosmetics.'
      }
    ]),
    cta: {
      title: 'Ready for High-Speed Kraft Cartoning?',
      description: 'Send us your product and line specs—we’ll produce kraft seal-end cartons that keep pace with demand.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Seal-End Cartons Built for Performance',
      paragraphs: [
        'Seal-end auto-bottom cartons combine high-speed automation with tamper-evident security.',
        'We tailor board caliper, barrier coatings, and closure features to protect and promote your products.',
        'From sampling to national distribution, your cartons scale seamlessly with your production lines.'
      ]
    }
  },

  // Subcategory: Kraft Single Wall Auto Bottom Tray
  'kraft-single-wall-auto-bottom-tray': {
    name: 'Kraft Single Wall Auto Bottom Tray',
    description: 'Single-wall auto-bottom trays that pop into shape for quick service lines, cafe displays, and bundled gift sets.',
    heroImage: 'Kraft-Single-Wall-Auto-Bottom-Tray_cxpl8m',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Auto-bottom construction deploys instantly',
      'Single wall design balances strength with lightweight efficiency',
      'Kraft texture reinforces farm-to-table or natural branding',
      'Interior printable for menus, recipes, or brand storytelling',
      'Optional dividers keep multiple items separated',
      'Flat-pack shipping optimizes storage space',
      'Available with lid, film, or sleeve accessories'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'Single-wall kraft corrugated or 20pt solid board' },
        { label: 'Structure', value: 'Auto-bottom tray with rolled top edge and optional windowed lid' },
        { label: 'Thickness', value: 'E-flute 1/16" or 0.020" board based on weight requirements' },
        { label: 'Finish', value: 'Natural kraft, moisture barrier varnish, spot foil celebration accents' },
        { label: 'Printing', value: 'Digital CMYK for seasonal rotations or flexo spot colors for scale' },
        { label: 'Dimensions (L x W x H)', value: 'Tray footprints from 5" x 4" x 2" to 12" x 9" x 3"' },
        { label: 'Quantity', value: 'Auto-bottom tray runs beginning at 500 kraft units' }
      ]
    },
    faq: buildFaq('Kraft Single Wall Auto Bottom Tray', [
      {
        question: 'How quickly do auto bottom trays set up?',
        answer:
          'The crash-lock base snaps into place with one motion, letting your team move straight to loading items with no tape required.'
      },
      {
        question: 'Can I add dividers or compartments to the tray?',
        answer:
          'Yes. We can integrate fold-out dividers or provide loose inserts that slot into the tray to separate menu items or products.'
      },
      {
        question: 'Are moisture barriers available for food applications?',
        answer:
          'We can apply aqueous or film barriers to keep oils and sauces from wicking into the kraft board while maintaining a natural look.'
      }
    ]),
    cta: {
      title: 'Ready for Instant Kraft Trays?',
      description: 'Tell us about your cafe, gifting, or merch program and we’ll engineer trays that set up in seconds.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Auto-Bottom Trays for Rapid Service',
      paragraphs: [
        'Auto-bottom trays combine kraft aesthetics with instant assembly.',
        'We tailor wall height, inserts, and finishes so every tray suits your menu or product mix.',
        'With fulfillment support, your trays arrive ready to deploy across locations.'
      ]
    }
  },

  // Subcategory: Kraft Two Piece Box
  'kraft-two-piece-box': {
    name: 'Kraft Two Piece Box',
    description: 'Elegant two-piece kraft boxes perfect for premium gifting, apparel, and lifestyle products that warrant a refined presentation.',
    heroImage: 'Kraft-Two-Piece-Box_i0ua2d',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Rigid lid-and-base structure for upscale presentation',
      'Custom interior fitments cradle delicate products',
      'Exterior wraps support foil, emboss, and texture finishes',
      'Interior printing builds cross-sell and brand storytelling',
      'Stackable geometry for retail and storage efficiency',
      'Ideal for apparel, luxury stationery, and curated gifts',
      'Ships flat (set-up) or pre-assembled with kitting available'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '20pt kraft board with optional white interior wrap or liner' },
        { label: 'Structure', value: 'Base and lid folding carton with friction-fit telescoping design' },
        { label: 'Thickness', value: '0.020" board with 0.024" upgrade for heavier gifting' },
        { label: 'Finish', value: 'Matte varnish, foil crests, debossed lids, ribbon or twine closures' },
        { label: 'Printing', value: 'Litho CMYK with PMS accents and inside lid storytelling' },
        { label: 'Dimensions (L x W x H)', value: 'From 5" x 5" x 3" to 12" x 10" x 4"' },
        { label: 'Quantity', value: 'Two-piece kraft sets starting at 400 units' }
      ]
    },
    faq: buildFaq('Kraft Two Piece Box', [
      {
        question: 'Can kraft two-piece boxes achieve a premium finish?',
        answer:
          'Definitely. We combine natural kraft with foil, debossing, or colored wraps to create a luxe presentation while keeping the sustainable core visible.'
      },
      {
        question: 'How do you secure delicate items inside the box?',
        answer:
          'We build custom inserts from kraft, foam, or molded pulp to cradle each item so it stays centered when the lid is lifted.'
      },
      {
        question: 'Are ribbon or band closures available?',
        answer:
          'Yes. We can add die-cut channels for ribbon, twine, or belly bands to enhance the unboxing ritual.'
      }
    ]),
    cta: {
      title: 'Ready to Design Signature Kraft Boxes?',
      description: 'Share your concept and we’ll craft two-piece kraft boxes that keep customers reaching for more.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Two Piece Boxes Crafted for Keeps',
      paragraphs: [
        'Two-piece kraft boxes deliver a considered reveal that customers keep long after purchase.',
        'We align structure, insert, and finishing to suit everything from apparel to premium stationary.',
        'With scalable assembly and fulfillment support, every lid unboxes a polished experience.'
      ]
    }
  },

  // Subcategory: Kraft Cigarette Box
  'kraft-cigarette-box': {
    name: 'Kraft Cigarette Box',
    description: 'Eco-forward kraft cigarette boxes that satisfy regulatory panel requirements while conveying a natural, modern brand message.',
    heroImage: 'Kraft-Cigarette-Box_gqxdr7',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Wrap-around construction compatible with cellophane overwrap',
      'Supports tear tape, tax stamp, and duty-free requirements',
      'Panel layout engineered for warning statements and barcodes',
      'Optional foil or barrier lining preserves product freshness',
      'Precision scorable hinges deliver a smooth flip-top experience',
      'Interior printable for brand storytelling or loyalty codes',
      'Sustainable kraft paperboard aligns with eco-forward positioning'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '14pt kraft board with clay-coated interior for moisture control' },
        { label: 'Structure', value: 'Flip-top hinge-lid carton with tear tape and stamp panel integration' },
        { label: 'Thickness', value: '0.014" board with reinforced hinge scores for repeat opening' },
        { label: 'Finish', value: 'Matte varnish, foil crests, embossing, and tear-tape starter tabs' },
        { label: 'Printing', value: 'Multicolor offset with regulatory black plates and metallic accents' },
        { label: 'Dimensions (L x W x H)', value: 'Standard 2.25" x 0.9" x 3.6" packs with 10s or king-size variants' },
        { label: 'Quantity', value: 'Regulation-ready runs beginning at 5,000 kraft cigarette cartons' }
      ]
    },
    faq: buildFaq('Kraft Cigarette Box', [
      {
        question: 'Do these cartons meet regulatory warning panel requirements?',
        answer:
          'We engineer the panel layout to comply with regional regulations, leaving dedicated zones for health warnings, tax stamps, and duty-free marks.'
      },
      {
        question: 'Can a kraft cigarette box include barrier liners?',
        answer:
          'Yes. We can integrate foil or metallized liners to preserve product freshness while keeping the exterior sustainable.'
      },
      {
        question: 'How durable is the hinge lid?',
        answer:
          'We reinforce hinge scores and soft crush areas so the lid opens smoothly throughout repeated daily use.'
      }
    ]),
    cta: {
      title: 'Ready to Refresh Your Kraft Cigarette Packaging?',
      description: 'Share your compliance requirements and brand goals—we’ll engineer cartons that meet both.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Cigarette Cartons with Conscious Appeal',
      paragraphs: [
        'Our kraft cigarette boxes merge eco-minded materials with the structure and security your product demands.',
        'We optimize print, barrier, and warning layout to satisfy global compliance while preserving brand DNA.',
        'Whether you’re launching a limited-edition blend or a core line refresh, we keep operations compliant and on-schedule.'
      ]
    }
  },

  // Subcategory: Kraft Bookend Box
  'kraft-bookend-box': {
    name: 'Kraft Bookend Box',
    description: 'Bookend-style kraft cartons with side closures that open like a cover—perfect for electronics, wellness kits, and educational products.',
    heroImage: 'Kraft-Bookend-Box_tlixms',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Book-like closure delivers premium unboxing experience',
      'Side flaps provide tamper evidence and clean reseal',
      'Internal cavities keep products organized and secure',
      'Flat surfaces support vibrant artwork and instructions',
      'Compatible with automation or hand-assembly workflows',
      'Optional windows highlight hero products',
      'Ideal for tech accessories, games, and wellness kits'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '18pt kraft board reinforced with double side flaps' },
        { label: 'Structure', value: 'Bookend tuck style with glue seam, locking tongue, and option for window' },
        { label: 'Thickness', value: '0.018" stock with 0.022" upgrade for glassware or premium gifts' },
        { label: 'Finish', value: 'Matte varnish, spot UV spines, foil titles, hang-tab integration' },
        { label: 'Printing', value: 'Offset CMYK with interior color blocking and die-cut reveal alignment' },
        { label: 'Dimensions (L x W x H)', value: 'Bookend formats from 4" x 2" x 6" to 8" x 3" x 10"' },
        { label: 'Quantity', value: 'Story-driven kraft bookend runs starting at 750 cartons' }
      ]
    },
    faq: buildFaq('Kraft Bookend Box', [
      {
        question: 'How does the bookend closure stay secure?',
        answer:
          'We use tuck tongues, magnets, or adhesive dots on the side flaps to keep the cover closed while still allowing an easy, book-like opening.'
      },
      {
        question: 'Can I include printed instructions on the inside cover?',
        answer:
          'Yes. The interior panels are perfect for onboarding content, product stories, or QR codes. We align artwork so it reads naturally as the cover opens.'
      },
      {
        question: 'Are window cut-outs available?',
        answer:
          'We can add windows with PET film to spotlight hero products before the cover is opened, enhancing shelf appeal.'
      }
    ]),
    cta: {
      title: 'Ready to Tell Your Story in Kraft?',
      description: 'Share your product narrative— we’ll design kraft bookend boxes that bring it to life.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Bookend Boxes Built for Storytelling',
      paragraphs: [
        'Bookend cartons mimic the feel of opening a cherished hardcover, making them ideal for experiential kits.',
        'We tune structure, inserts, and finishes so every panel supports your narrative arc.',
        'From onboarding to influencer outreach, you deliver a polished experience straight out of the mailer.'
      ]
    }
  },

  // Subcategory: Kraft Dispenser Box
  'kraft-dispenser-box': {
    name: 'Kraft Dispenser Box',
    description: 'Functional kraft dispenser boxes engineered for on-the-go sampling, retail counters, and bulk product dispensing.',
    heroImage: 'Kraft-Dispenser-Box_mxxcxq',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Perforated front panels tear away to reveal dispenser opening',
      'Supports stick packs, sachets, wipes, or grab-and-go products',
      'Self-contained display ready for countertops and POP zones',
      'Reinforced walls prevent collapse as product is dispensed',
      'Can ship in master packs or act as primary shipper',
      'Optional reclosable flaps for storage between uses',
      'Compact footprint ideal for impulse purchase areas'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '16pt kraft board with optional PET window film and barrier varnish' },
        { label: 'Structure', value: 'Perforated dispenser front with dust flap reload and glued auto bottom' },
        { label: 'Thickness', value: '0.016" board with 0.020" option for heavier sachets or wipes' },
        { label: 'Finish', value: 'Matte varnish, tear-away perf scoring, foil badges, anti-scuff coating' },
        { label: 'Printing', value: 'Offset CMYK with panel numbering and variable lot coding' },
        { label: 'Dimensions (L x W x H)', value: 'Dispenser footprints from 4" x 4" x 6" to 6" x 4" x 9"' },
        { label: 'Quantity', value: 'Counter-ready dispenser runs starting at 500 kraft units' }
      ]
    },
    faq: buildFaq('Kraft Dispenser Box', [
      {
        question: 'How does the dispenser opening stay tidy?',
        answer:
          'We use precision perforations and reinforced front panels so the tear-away section removes cleanly and keeps the dispensing edge crisp.'
      },
      {
        question: 'Can I reload the dispenser once the product runs out?',
        answer:
          'Yes. The top flap can be reclosed or reloaded, allowing staff to refill sachets or wipes without replacing the entire unit.'
      },
      {
        question: 'Are moisture-resistant options available?',
        answer:
          'We can apply moisture barriers or select coated boards so the dispenser performs well in gyms, salons, or kitchens.'
      }
    ]),
    cta: {
      title: 'Ready for Counter-Ready Kraft Dispensers?',
      description: 'Let’s design dispenser cartons that move product fast while looking on-brand.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Dispenser Boxes Built for Conversion',
      paragraphs: [
        'Dispenser cartons bridge primary packaging and POP displays.',
        'We tailor tear patterns, structure, and finish to your product format and retail strategy.',
        'From sampling programs to national launches, dispensers arrive ready to show, ship, and sell.'
      ]
    }
  },

  // Subcategory: Kraft Double Wall Frame Tray
  'kraft-double-wall-frame-tray': {
    name: 'Kraft Double Wall Frame Tray',
    description: 'Heavy-duty double-wall kraft frame trays that deliver rigid strength for premium bakery, produce, and retail displays.',
    heroImage: 'Kraft-Double-Wall-Frame-Tray_i8lzim',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Double-wall construction provides exceptional stacking strength',
      'Frame design keeps tray squared and presentation-ready',
      'Ideal for fresh bakery, produce, and boxed sets needing rigidity',
      'Printable inside/outside for storytelling and compliance info',
      'Compatible with lids, film overwrap, or shrink wrapping',
      'Optional die-cut grips for ergonomic handling',
      'Supports moist or chilled environments with proper coatings'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '20pt kraft board with double-wall frame construction' },
        { label: 'Structure', value: 'Fold-and-lock frame tray with interior platform and optional lid fit' },
        { label: 'Thickness', value: '0.020" board with 0.024" upgrades for heavier contents' },
        { label: 'Finish', value: 'Matte kraft, soft-touch varnish, foil trim, moisture barrier coatings' },
        { label: 'Printing', value: 'Litho CMYK with precise score registration and interior storytelling' },
        { label: 'Dimensions (L x W x H)', value: 'Frame trays from 6" x 6" x 2" to 12" x 10" x 3"' },
        { label: 'Quantity', value: 'Custom frame tray runs starting at 400 kraft sets' }
      ]
    },
    faq: buildFaq('Kraft Double Wall Frame Tray', [
      {
        question: 'What makes the double-wall frame so strong?',
        answer:
          'The folded frame locks the walls together, creating a rigid perimeter that resists bowing under weight and keeps corners sharp for display.'
      },
      {
        question: 'Can these trays handle chilled or moist environments?',
        answer:
          'Yes. We can add moisture-resistant coatings and choose boards that hold up in refrigerated cases or produce departments.'
      },
      {
        question: 'Do the trays stack securely?',
        answer:
          'The frame design keeps edges square, allowing trays to stack without slipping, even when fully loaded.'
      }
    ]),
    cta: {
      title: 'Ready for Heavy-Duty Kraft Trays?',
      description: 'Let us engineer kraft double-wall trays that stand up to transport, stacking, and display.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Frame Trays Ready for Demanding Displays',
      paragraphs: [
        'Double-wall frame trays provide rock-solid support for everything from premium produce to curated gifting.',
        'We fine-tune board weight, coatings, and inserts to match product weight and environmental conditions.',
        'With scalable production and regional fulfillment, your trays arrive on time and ready to perform.'
      ]
    }
  },
  // ========== CARDBOARD BOXES SUBCATEGORIES ==========
  // Subcategory: Cardboard Display Box
  'cardboard-display-box': {
    name: 'Cardboard Display Box',
    description: 'Countertop and shelf-ready cardboard display boxes engineered to turn everyday products into impulse purchases.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Pop-up construction deploys quickly at retail',
      'Angled front reveals product while keeping packs organized',
      'Printable panels maximize storytelling in tight spaces',
      'Optional headers and wings amplify brand blocking',
      'Sturdy board resists sagging as inventory moves',
      'Ships flat for efficient warehousing and replenishment',
      'Ideal for cosmetics, snacks, supplements, and novelty items'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '18pt-24pt SBS or CCNB with reinforced display headers' },
        { label: 'Structure', value: 'Counter display with auto-bottom tray, tear-away front, and header' },
        { label: 'Thickness', value: '0.018" base with 0.024" header support panels' },
        { label: 'Finish', value: 'Gloss AQ, spot UV accents, optional PET window patches' },
        { label: 'Printing', value: 'Offset CMYK with Pantone matches across tray and header' },
        { label: 'Dimensions (L x W x H)', value: 'Displays from 7" x 6" x 8" to 12" x 9" x 14"' },
        { label: 'Quantity', value: 'Retail display runs beginning at 250 units' }
      ]
    },
    faq: buildFaq('Cardboard Display Box', [
      {
        question: 'Do display boxes ship pre-assembled?',
        answer:
          'They ship flat to save space but are pre-glued so retail staff can pop them open quickly and lock the header in place.'
      },
      {
        question: 'Can I add interchangeable headers for promotions?',
        answer:
          'Yes. We can design slotted headers or clip-on wings that let you swap messaging while reusing the same base tray.'
      },
      {
        question: 'How do you keep the display stable as product sells through?',
        answer:
          'We engineer the tray angle and front lip to keep remaining inventory forward-facing and upright even as stock levels drop.'
      }
    ]),
    cta: {
      title: 'Ready to Launch Retail Displays?',
      description: 'Share your product lineup and we’ll craft cardboard displays that move inventory fast.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Display Boxes Built to Convert',
      paragraphs: [
        'Cardboard display boxes combine on-brand storytelling with the practicality retailers demand.',
        'We design structures that merchandise product elegantly, withstand shopper interaction, and stay compliant with retailer specs.',
        'From pilot runs to nationwide programs, we integrate fulfillment and logistics so every display reaches shelves ready to sell.'
      ]
    }
  },

  // Subcategory: Cardboard Tuck End Box
  'cardboard-tuck-end-box': {
    name: 'Cardboard Tuck End Box',
    description: 'Versatile cardboard tuck-end cartons optimized for high-impact printing and streamlined production lines.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Available in reverse, straight, and auto-lock bottom formats',
      'Cleans lines support premium shelf presentation',
      'Efficient for automated or manual assembly',
      'Custom die-cuts and windows spotlight the product',
      'Supports hang tabs, perforations, and security seals',
      'Ideal for cosmetics, wellness, tech accessories, and CPG',
      'Ships flat to minimize freight and storage costs'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: 'SBS 12pt-18pt board optimized for tuck-end production' },
        { label: 'Structure', value: 'Reverse tuck, straight tuck, or auto-lock with glue seam options' },
        { label: 'Thickness', value: '0.012" / 0.014" / 0.018" board with crash-lock options for heavier SKUs' },
        { label: 'Finish', value: 'Gloss or matte AQ, foil accents, UV spot patterns, security seals' },
        { label: 'Printing', value: 'High-resolution litho CMYK with Pantone hits and spot white' },
        { label: 'Dimensions (L x W x H)', value: 'Cartons from 1.75" x 1" x 4" to 7" x 3" x 9"' },
        { label: 'Quantity', value: 'Production cartons starting at 1,000 cardboard tuck units' }
      ]
    },
    faq: buildFaq('Cardboard Tuck End Box', [
      {
        question: 'Which tuck format best suits automated lines?',
        answer:
          'Crash-lock bottoms speed up filling for heavier products, straight tuck offers a clean front panel for retail, and reverse tuck minimizes tooling for manual packing.'
      },
      {
        question: 'Can I include tamper-evident features on tuck cartons?',
        answer:
          'We can add perforated tabs, tear strips, or glued seals that show visible tamper evidence without complicating fulfillment.'
      },
      {
        question: 'How do you ensure color consistency across large runs?',
        answer:
          'We calibrate to your brand Pantones, run press checks, and maintain press profiles so every batch matches approved color standards.'
      }
    ]),
    cta: {
      title: 'Ready for Production-Ready Tuck Cartons?',
      description: 'Send us your specs and we’ll craft cardboard tuck-end boxes that keep your line moving.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Tuck Cartons Built for Brands',
      paragraphs: [
        'Cardboard tuck-end cartons are the staple of retail packaging, balancing cost efficiency with design flexibility.',
        'We optimize board selection, scores, and coatings to keep cartons crisp through shipping, stocking, and customer handling.',
        'From new product launches to evergreen SKUs, our workflows deliver consistent color, structure, and supply reliability.'
      ]
    }
  },

  // Subcategory: Cardboard Box with Lid
  'cardboard-box-with-lid': {
    name: 'Cardboard Box with Lid',
    description: 'Two-piece cardboard boxes featuring lift-off lids that create a premium reveal for retail gifting and product presentation.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Separate lid and base deliver a ceremonial unboxing moment',
      'Supports duplex color schemes for lid and base',
      'Interior printing, tissue, or inserts boost perceived value',
      'Stackable geometry keeps retail footprints organized',
      'Optional neck inserts add rigidity and luxe staging',
      'Great for apparel, cosmetics, stationery, and curated kits',
      'Available flat-packed or pre-assembled depending on program scale'
    ],
    customization: {
      details: [
        { label: 'Material Type', value: '20pt SBS or duplex board with optional metallic or textured wraps' },
        { label: 'Structure', value: 'Separate lid and base with reinforced corners and telescoping fit' },
        { label: 'Thickness', value: '0.020" board with 0.024" chipboard stiffeners for premium rigidity' },
        { label: 'Finish', value: 'Gloss film, soft-touch matte, foil logos, ribbon closure channels' },
        { label: 'Printing', value: 'Litho CMYK, UV spot gloss, foil stamping across lid edges and interior' },
        { label: 'Dimensions (L x W x H)', value: 'Gift boxes from 5" x 5" x 3" to 15" x 11" x 4"' },
        { label: 'Quantity', value: 'Custom lid and base sets starting at 300 cardboard units' }
      ]
    },
    faq: buildFaq('Cardboard Box with Lid', [
      {
        question: 'How do you prevent the lid from warping over time?',
        answer:
          'We reinforce corners and can add chipboard stiffeners or double walls so the lid maintains its shape across production and use.'
      },
      {
        question: 'Can the interior be printed or lined differently from the exterior?',
        answer:
          'Yes. We can print inside panels or apply specialty liners, allowing you to create dual-tone reveals that match your brand aesthetic.'
      },
      {
        question: 'Do lid boxes stack well for retail shelving?',
        answer:
          'Their telescoping fit and reinforced walls support vertical stacking, making them ideal for merchandising and storage.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate with Lid Boxes?',
      description: 'Tell us about your product and we’ll craft cardboard lid boxes that delight from first glance to final reveal.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Lid Boxes for Signature Unboxings',
      paragraphs: [
        'Lift-off lid boxes lend a giftable feel to every product, combining sturdy structure with luxurious finishes.',
        'We ensure lids glide smoothly, bases stay rigid, and interiors are styled for your brand narrative.',
        'From limited-edition drops to recurring programs, our production adapts so every box arrives presentation-ready.'
      ]
    }
  },

  // Subcategory: Cardboard Gable Box
  'cardboard-gable-box': {
    name: 'Cardboard Gable Box',
    description: 'Lightweight cardboard gable boxes with integrated handles—ideal for grab-and-go gifting, foodservice, and promotional kits.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Built-in handle makes transport easy for customers',
      'Snap-lock base secures heavier contents without tape',
      'Broad panels display branding and messaging clearly',
      'Optional windows showcase baked goods or merchandise',
      'Knockdown shipping reduces storage footprint',
      'Food-safe coatings available for direct contact items',
      'Perfect for events, corporate gifting, and take-out programs'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '20pt folding carton or micro-flute board engineered for carry handles' },
        { label: 'Structure', value: 'Self-locking gable with auto bottom, interlocking handles, and optional window cutouts' },
        { label: 'Thickness', value: '0.020" board or E-flute 1/16" for contents up to 10 lb' },
        { label: 'Finish', value: 'Gloss varnish, grease barrier coatings, foil seals, or custom color floods' },
        { label: 'Printing', value: 'Offset CMYK with interior floods or flexo spot colors for fast turns' },
        { label: 'Dimensions (L x W x H)', value: 'Carry sizes from 5" x 3" x 5" kids meals to 12" x 6" x 9" catering carriers' },
        { label: 'Quantity', value: 'Gable box programs starting at 250 cardboard carriers' }
      ]
    },
    faq: buildFaq('Cardboard Gable Box', [
      {
        question: 'How durable are the handles on cardboard gable boxes?',
        answer:
          'We reinforce handle seams and can laminate the interior to ensure the box carries its intended load without tearing.'
      },
      {
        question: 'Can gable boxes be made food safe?',
        answer:
          'Yes. We use food-contact coatings and liners so the boxes work for catering, bakery, or meal kit applications.'
      },
      {
        question: 'Do gable boxes arrive flat or set up?',
        answer:
          'They ship flat with pre-scored lines. Assembly takes seconds: simply pop the base, fold the sides, and snap the handles together.'
      }
    ]),
    cta: {
      title: 'Ready to Deliver in Style?',
      description: 'Tell us about your program and we’ll build cardboard gable boxes that make every handoff memorable.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Gable Boxes Built for On-the-Go Experiences',
      paragraphs: [
        'Cardboard gable boxes offer a convenient carrying solution without compromising on branding or structure.',
        'We tailor board weight, coatings, and inserts so every box supports your menu, merch, or gifting lineup.',
        'With staging and kitting services, your gable boxes arrive ready to stuff, seal, and send.'
      ]
    }
  },

  // Subcategory: Cardboard Cake / Bakery Box
  'cardboard-cake-bakery-box': {
    name: 'Cardboard Cake / Bakery Box',
    description: 'Food-safe cardboard bakery boxes tailored to keep cakes, pastries, and confections pristine from kitchen to celebration.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Grease-resistant liners protect finishes and frosting',
      'Locking tabs secure lids without additional tape',
      'Optional windows showcase decorated desserts',
      'Vents available to manage moisture and maintain texture',
      'Flat-pack design saves space in busy kitchens',
      'Supports custom inserts for cupcakes, macarons, and tarts',
      'Compliant with food-contact inks and coatings'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'Food-safe 18pt SBS with poly-coated interior for moisture resistance' },
        { label: 'Structure', value: 'Lock corner bakery fold or auto bottom with optional window film and vents' },
        { label: 'Thickness', value: '0.018" panel with 0.024" upgrade for tiered cakes and dense pastries' },
        { label: 'Finish', value: 'Food-contact AQ, gloss window frames, foil monograms, perforated vents' },
        { label: 'Printing', value: 'Litho CMYK with allergen, ingredient, and reheating information panels' },
        { label: 'Dimensions (L x W x H)', value: 'Bake sizes from 8" x 8" x 4" single cakes to 14" x 10" x 6" trays' },
        { label: 'Quantity', value: 'Bakery release runs from 500 cardboard cake boxes' }
      ]
    },
    faq: buildFaq('Cardboard Bakery Box', [
      {
        question: 'How do you keep frosting from damaging the box?',
        answer:
          'Food-safe poly or aqueous liners keep oils and frosting separated from the board, so presentation stays pristine through delivery.'
      },
      {
        question: 'Can I add windows or vents to the bakery box?',
        answer:
          'Yes. We add PET windows for display and perforated vents to manage steam, ensuring your baked goods arrive intact.'
      },
      {
        question: 'Are inserts available for cupcakes or pastries?',
        answer:
          'We die-cut inserts sized to your treats so every dessert stays upright and spaced during transport.'
      }
    ]),
    cta: {
      title: 'Ready to Showcase Your Bakes?',
      description: 'Share your dessert lineup and we’ll build bakery boxes that protect and delight.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Bakery Boxes Crafted for Culinary Artistry',
      paragraphs: [
        'Our bakery boxes merge food-safe performance with presentation that elevates your creations.',
        'We tailor box geometry, coatings, and inserts to the demands of your menu and delivery workflow.',
        'From boutique patisseries to multi-location bakeries, our supply programs keep every box consistent and ready.'
      ]
    }
  },

  // Subcategory: Cardboard Sleeve Box
  'cardboard-sleeve-box': {
    name: 'Cardboard Sleeve Box',
    description: 'Slide-to-reveal cardboard sleeve boxes that transform product launches and subscription kits into immersive moments.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Drawer-style tray and sleeve deliver a cinematic reveal',
      'Sleeves provide extra space for storytelling and graphics',
      'Custom cavities secure products during shipping and unboxing',
      'Supports magnetic closures, ribbon pulls, or finger notches',
      'Modular inserts allow for variant swaps without new tooling',
      'Excellent for welcome kits, influencer mailers, and premium sets',
      'Ships assembled or flat depending on production needs'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '16pt-20pt SBS sleeves paired with 18pt inner trays or blanks' },
        { label: 'Structure', value: 'Slide-on sleeve with thumb hole, perforated reveal, or window patch over trays' },
        { label: 'Thickness', value: '0.016" sleeve with 0.020" tray walls for structural strength' },
        { label: 'Finish', value: 'Soft-touch laminate, foil striping, spot UV gradients, textured varnish' },
        { label: 'Printing', value: 'Offset CMYK + Pantone overlays for precise color blocking across panels' },
        { label: 'Dimensions (L x W x H)', value: 'Sleeve kits from 4" x 4" x 1" samples to 12" x 9" x 3" electronics' },
        { label: 'Quantity', value: 'Sleeve projects from 500 cardboard sets with SKU versioning support' }
      ]
    },
    faq: buildFaq('Cardboard Sleeve Box', [
      {
        question: 'How do you prevent sleeves from loosening over time?',
        answer:
          'We test tray and sleeve tolerances so they maintain a snug fit. Optional finger notches or pull tabs keep the interaction smooth without reducing friction.'
      },
      {
        question: 'Can sleeves be swapped for limited editions?',
        answer:
          'Yes. We can produce a core tray and multiple sleeve variations, allowing you to refresh artwork without retooling inserts.'
      },
      {
        question: 'Are magnetic or ribbon pulls available?',
        answer:
          'We can add hidden magnets, ribbon pulls, or die-cut thumb cuts to enhance ergonomics and create a more premium reveal.'
      }
    ]),
    cta: {
      title: 'Ready to Slide into Memorable Packaging?',
      description: 'Share your campaign goals and we’ll build cardboard sleeve boxes that captivate.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Sleeve Boxes Designed for Emotion',
      paragraphs: [
        'Sleeve boxes invite recipients to engage with your brand through deliberate, tactile motion.',
        'We align materials, finishes, and inserts so every pull feels smooth and intentional.',
        'With scalable production and fulfillment, you can surprise a handful of VIPs or thousands of subscribers seamlessly.'
      ]
    }
  },

  // Subcategory: Cardboard Dispenser Box
  'cardboard-dispenser-box': {
    name: 'Cardboard Dispenser Box',
    description: 'Durable cardboard dispenser boxes built for countertop sampling, stick packs, sachets, and grab-and-go merchandising.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Perforated front panels create easy-access openings',
      'Interior wells guide product forward for consistent dispensing',
      'Rigid construction maintains shape as product levels drop',
      'Printable surfaces broadcast brand and usage instructions',
      'Optional recloseable lids for off-hours storage',
      'Can ship individually or nested inside master shippers',
      'Ideal for supplements, single-serve beverages, wipes, and samples'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '18pt SBS with reinforced dispenser front and optional PET window' },
        { label: 'Structure', value: 'Counter dispenser with glued auto bottom and resealable top flap for refills' },
        { label: 'Thickness', value: '0.018" board with 0.022" front wall for repeated dispensing cycles' },
        { label: 'Finish', value: 'Gloss AQ, tactile matte, metallic foil cues, moisture resistant coatings' },
        { label: 'Printing', value: 'Litho CMYK with variable lot coding and sequential numbering on tear panels' },
        { label: 'Dimensions (L x W x H)', value: 'Dispensers from 4" x 3" x 6" sachets to 7" x 5" x 9" wipes' },
        { label: 'Quantity', value: 'Planogram-ready dispenser runs starting at 750 cardboard units' }
      ]
    },
    faq: buildFaq('Cardboard Dispenser Box', [
      {
        question: 'How cleanly does the dispenser front tear away?',
        answer:
          'We laser-cut perforations so the opening removes in one motion, preserving the graphics while exposing the dispense area.'
      },
      {
        question: 'Can the dispenser box be resealed after hours?',
        answer:
          'Yes. We add recloseable lids or tuck backs so staff can cover the opening when the counter is closed.'
      },
      {
        question: 'Do you offer moisture-resistant options?',
        answer:
          'We can laminate the interior or use coated boards to resist moisture, making the dispenser suitable for gyms, kitchens, or outdoor events.'
      }
    ]),
    cta: {
      title: 'Ready to Dispense with Confidence?',
      description: 'Tell us about your product and we’ll create dispenser boxes that perform all day long.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Dispenser Boxes for High-Traffic Counters',
      paragraphs: [
        'Dispenser boxes bridge packaging and display, keeping small-format products front and center.',
        'We engineer tear patterns, wells, and coatings to match product dimensions and environment.',
        'With merchandising support, your dispensers arrive ready to open, load, and start converting.'
      ]
    }
  },

  // Subcategory: Cardboard Five Panel Hanger
  'cardboard-five-panel-hanger': {
    name: 'Cardboard Five Panel Hanger',
    description: 'Peg-ready five-panel hanger cartons designed to command attention on slatwall, pegboard, and clip strips.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Extended hanger panel aligns with retailer peg specs',
      'Large billboard face for graphics and regulatory copy',
      'Locking bases support varied product weights',
      'Optional windows or blister integration for product visibility',
      'Easy-open perforations enhance consumer experience',
      'Compatible with automated or manual packing lines',
      'Ideal for electronics, cosmetics, small appliances, and accessories'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '16pt SBS with reinforced hanger panel and optional PET blister integration' },
        { label: 'Structure', value: 'Five-panel hanger with fold-over header, lock bottom, and side window options' },
        { label: 'Thickness', value: '0.016" board with laminated hanger fold for added tear resistance' },
        { label: 'Finish', value: 'Gloss varnish, foil stamping on header, UV spot textures on feature callouts' },
        { label: 'Printing', value: 'Offset CMYK with white backing for window borders and UPC accuracy' },
        { label: 'Dimensions (L x W x H)', value: 'Hanger packs from 3" x 1" x 6" to 6" x 2.5" x 10" electronics' },
        { label: 'Quantity', value: 'Retail peg programs from 1,000 cardboard hangers' }
      ]
    },
    faq: buildFaq('Cardboard Five Panel Hanger', [
      {
        question: 'How do you reinforce the hanger panel?',
        answer:
          'We laminate or double-layer the hanger area and align the peg slot with retailer specs so it withstands repeated handling on the sales floor.'
      },
      {
        question: 'Can hanger cartons include blister packs or windows?',
        answer:
          'Yes. We integrate PET blisters or windows without compromising the structural support required for hanging displays.'
      },
      {
        question: 'Are there options for tamper-evident openings?',
        answer:
          'We add perforated tear strips or security seals that preserve shelf appeal while clearly signaling tampering.'
      }
    ]),
    cta: {
      title: 'Ready to Dominate the Pegboard?',
      description: 'Send us your product specs and planograms—we’ll engineer hanger cartons that deliver impact.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Hanger Cartons Made for Retail Success',
      paragraphs: [
        'Five-panel hanger cartons bring your brand front and center on busy pegboard aisles.',
        'We design each panel for structural integrity, compliance, and high-impact messaging.',
        'With logistics and replenishment support, your hanger cartons stay consistent from first store to final restock.'
      ]
    }
  },

  // Subcategory: Cardboard Mailer Boxes
  'cardboard-mailer-boxes': {
    name: 'Cardboard Mailer Boxes',
    description: 'Brand-forward cardboard mailer boxes engineered for e-commerce, subscription programs, and influencer drops.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Auto-locking mailer structure protects during transit',
      'Full interior and exterior print for immersive storytelling',
      'Die-cut inserts create organized unboxing experiences',
      'Eco-friendly board options balance strength and sustainability',
      'Optional peel-and-seal closures streamline fulfillment',
      'Ships flat and assembles quickly without additional tape',
      'Perfect for DTC brands, corporate kits, and special editions'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'E-flute corrugated with white clay-coated outer liner and kraft interior' },
        { label: 'Structure', value: 'One-piece rollover mailer with dust flaps, cherry locks, and tear-strip option' },
        { label: 'Thickness', value: '1/16" corrugated board with optional double-wall front flap reinforcement' },
        { label: 'Finish', value: 'Gloss or matte litho-lam wraps, kraft flood coats, anti-scuff varnishes' },
        { label: 'Printing', value: 'Digital CMYK for quick drops or litho laminates for gradient-rich artwork' },
        { label: 'Dimensions (L x W x H)', value: 'Mailer footprints from 7" x 5" x 2" to 13" x 10" x 4"' },
        { label: 'Quantity', value: 'Starter runs of 250 cardboard mailer boxes with branded inserts optional' }
      ]
    },
    faq: buildFaq('Cardboard Mailer Boxes', [
      {
        question: 'How do you keep mailer boxes secure without extra tape?',
        answer:
          'Cherry locks and tear-strips are engineered to hold during transit while allowing customers to open the box cleanly without tools.'
      },
      {
        question: 'Can I include custom inserts for my unboxing experience?',
        answer:
          'Yes. We design corrugated, foam, or paperboard inserts that cradle each product and reveal them in a planned sequence.'
      },
      {
        question: 'What are the minimums for full interior printing?',
        answer:
          'We offer digital print for runs as low as 250 units with full interior coverage, and litho-laminate for larger volumes requiring precise color.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate Your Mailers?',
      description: 'Tell us about your brand experience—we’ll deliver cardboard mailers that wow on arrival.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Mailer Boxes Crafted for Unboxing',
      paragraphs: [
        'Cardboard mailer boxes are the workhorse of DTC brands, delivering a balance between protection and presentation.',
        'We calibrate corrugate grade, printing, and inserts to keep products safe while creating a memorable reveal.',
        'From pilot batches to recurring drops, we manage production and fulfillment so your mailers stay consistent and on time.'
      ]
    }
  },

  // Subcategory: Cardboard Double Locked Wall Lid Box
  'cardboard-double-locked-wall-lid-box': {
    name: 'Cardboard Double Locked Wall Lid Box',
    description: 'Rigid-feel double-locked wall lid boxes offering enhanced strength for heavier retail and gift applications.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Double-wall construction reinforces lid and base',
      'Secure interlocking panels eliminate the need for glue',
      'Flat interior walls create clean product staging',
      'Supports premium wraps, foils, and textured finishes',
      'Stackable design suits retail shelving and backroom storage',
      'Optional ribbon pulls or magnetic straps elevate feel',
      'Ideal for gourmet foods, electronics, spirits, and luxury gifting'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '20pt SBS with double-wall lid panels and locking corners for rigidity' },
        { label: 'Structure', value: 'Top-load folding carton with dual side locks on lid and reinforced panels' },
        { label: 'Thickness', value: '0.020" board with 0.024" upgrade for heavy glass or home goods' },
        { label: 'Finish', value: 'Matte film lamination, foil framing, soft-touch lid for premium tactility' },
        { label: 'Printing', value: 'Offset CMYK with inside lid storytelling and spot UV product visuals' },
        { label: 'Dimensions (L x W x H)', value: 'Lid boxes from 6" x 6" x 4" to 14" x 10" x 6"' },
        { label: 'Quantity', value: 'Production runs from 400 double-wall lid cartons' }
      ]
    },
    faq: buildFaq('Cardboard Double Locked Wall Lid Box', [
      {
        question: 'What makes double locked walls different from standard lids?',
        answer:
          'The dual-wall construction interlocks panels on both lid and base, giving the box rigid strength similar to a setup box while staying lightweight.'
      },
      {
        question: 'Can I add magnetic or ribbon closures?',
        answer:
          'Yes. We can integrate magnets, ribbon ties, or elastic straps to complement the reinforced structure and enhance the unboxing.'
      },
      {
        question: 'Are these boxes suitable for heavy products?',
        answer:
          'Absolutely. The double-wall architecture distributes weight evenly, and we can add internal braces or foam to support heavier merchandise.'
      }
    ]),
    cta: {
      title: 'Ready for Elevated Lid Packaging?',
      description: 'Share your vision and we’ll deliver double-wall lid boxes that embody your brand.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Double-Wall Lids for Premium Impact',
      paragraphs: [
        'Double-locked lid boxes achieve rigid-box presence with folding-carton efficiency.',
        'We engineer each wall, insert, and finish to support your product weight and brand positioning.',
        'With scalable assembly services, your boxes arrive ready for merchandising, gifting, or direct shipment.'
      ]
    }
  },

  // Subcategory: Cardboard Side Lock Six Corner Box
  'cardboard-side-lock-six-corner-box': {
    name: 'Cardboard Side Lock Six Corner Box',
    description: 'Pop-up side lock six corner cartons that assemble instantly into sturdy trays for foodservice and retail.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Pre-glued panels snap into place with one motion',
      'Side locks reinforce corners for heavier goods',
      'Broad opening makes filling and display effortless',
      'Printable inside/outside surfaces support branding and instructions',
      'Optional clear lids, film, or sleeves enhance presentation',
      'Ships flat to streamline warehouse storage',
      'Great for bakery, apparel sets, kits, and merchandising trays'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '18pt SBS engineered for pop-open six-corner displays' },
        { label: 'Structure', value: 'Side-lock tray with reinforced corners, dust covers, and quick-assemble design' },
        { label: 'Thickness', value: '0.018" board with optional 0.022" for gourmet foods or ceramics' },
        { label: 'Finish', value: 'Gloss AQ, window patches, foil striping, anti-grease coatings' },
        { label: 'Printing', value: 'Litho CMYK aligned across corners and interior tray surfaces' },
        { label: 'Dimensions (L x W x H)', value: 'Trays from 7" x 5" x 2" to 13" x 9" x 4"' },
        { label: 'Quantity', value: 'Quick-fold cardboard trays starting at 600 units' }
      ]
    },
    faq: buildFaq('Cardboard Side Lock Six Corner Box', [
      {
        question: 'How quickly can staff set up these trays?',
        answer:
          'Pre-glued seams mean the tray pops into shape with one motion; side locks snap in to keep the structure rigid during filling and display.'
      },
      {
        question: 'Can I add clear lids or sleeves?',
        answer:
          'Yes. We design compatible lids, film wraps, or sleeves that slide over the tray while leaving side locks accessible.'
      },
      {
        question: 'Are these trays strong enough for heavier goods?',
        answer:
          'We can upgrade to heavier caliper board or add reinforcement strips to support ceramics, gourmet foods, or boxed sets.'
      }
    ]),
    cta: {
      title: 'Ready for Pop-Up Performance?',
      description: 'Share your specs and we’ll deliver cardboard trays that assemble in seconds.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Side Lock Trays Engineered for Efficiency',
      paragraphs: [
        'Side lock trays provide the perfect balance of quick setup and sturdy structure.',
        'We fine-tune locks, walls, and finishes to match product weight, merchandising needs, and brand standards.',
        'With fulfillment support and pallet planning, your trays arrive ready to deploy at scale.'
      ]
    }
  },

  // Subcategory: Cardboard Regular Six Corner Box
  'cardboard-regular-six-corner-box': {
    name: 'Cardboard Regular Six Corner Box',
    description: 'Regular six corner trays built to present merchandise beautifully while supporting heavier loads.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Open-top tray format ideal for retail displays and kitting',
      'Pre-glued corners reduce assembly time across shifts',
      'Rigid sidewalls support stacking and transport',
      'Custom die-cuts allow for handles or product reveals',
      'Adaptable to foodservice, apparel, merch, or welcome kits',
      'Interior print turns trays into storytelling platforms',
      'Compatible with lids, sleeves, or shrink wrapping'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '16pt SBS with pre-glued six-corner mechanism for rapid setup' },
        { label: 'Structure', value: 'Regular six-corner folding tray with reinforced front wall and tuckable lid' },
        { label: 'Thickness', value: '0.016" board with 0.020" upgrade for weight-bearing displays' },
        { label: 'Finish', value: 'Matte varnish, foil logos, spot UV on front panel, PET window options' },
        { label: 'Printing', value: 'Offset CMYK with inside panel printing for branding during unboxing' },
        { label: 'Dimensions (L x W x H)', value: 'Pop-up trays from 6" x 4" x 2" to 12" x 8" x 3.5"' },
        { label: 'Quantity', value: 'Six-corner tray programs from 700 cardboard units' }
      ]
    },
    faq: buildFaq('Cardboard Regular Six Corner Box', [
      {
        question: 'Where do regular six corner trays excel?',
        answer:
          'They provide a wide-open top for merchandising, making them ideal for apparel, gift sets, or foodservice displays that require easy access.'
      },
      {
        question: 'Can I request custom die-cut handles or windows?',
        answer:
          'Yes. We can add handles, product windows, or accessory slots without compromising the structural integrity of the tray.'
      },
      {
        question: 'Do the trays stack well in storage?',
        answer:
          'They ship flat for storage efficiency and, once assembled, their straight walls allow for stable stacking on shelves or pallets.'
      }
    ]),
    cta: {
      title: 'Ready to Stage Your Products in Style?',
      description: 'Share your display goals—we’ll build cardboard trays that look great and work hard.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Six Corner Trays Built for Busy Operations',
      paragraphs: [
        'Regular six corner trays provide dependable structure for merchandising, kitting, and foodservice.',
        'We tailor materials, finishes, and inserts to your product weight and brand narrative.',
        'With assembly and logistics support, your trays go from flat to ready-for-sale without slowing down operations.'
      ]
    }
  },

  // Subcategory: Cardboard Seal End Auto Bottom Box
  'cardboard-seal-end-auto-bottom-box': {
    name: 'Cardboard Seal End Auto Bottom Box',
    description: 'High-speed cardboard seal-end cartons that combine tamper security with automation-friendly bases for regulated industries.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Auto-bottom base locks instantly on cartoner lines',
      'Seal-end flaps accommodate tamper-evident glue systems',
      'Supports serialization, lot coding, and track-and-trace requirements',
      'Barrier coatings protect light-, moisture-, or oxygen-sensitive products',
      'Rigid walls defend against compression during distribution',
      'Compatible with manual or automated insertion of literature and bottles',
      'Ideal for nutraceutical, pharma, beauty, and specialty food packaging'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '18pt SBS optimized for high-speed filling and heat-seal compatibility' },
        { label: 'Structure', value: 'Seal-end top with auto-lock bottom and tamper tape integration' },
        { label: 'Thickness', value: '0.018" board with 0.022" upgrade for dense powders or granular products' },
        { label: 'Finish', value: 'Gloss AQ, spot metallics, pour spouts, perforated opening features' },
        { label: 'Printing', value: 'Offset CMYK with regulatory nutrition panels and batch codes pre-applied' },
        { label: 'Dimensions (L x W x H)', value: 'Cartons from 3" x 1.5" x 6" supplements to 6" x 3" x 10" dry goods' },
        { label: 'Quantity', value: 'Line-ready cardboard cartons from 5,000 units' }
      ]
    },
    faq: buildFaq('Cardboard Seal End Auto Bottom Box', [
      {
        question: 'Are these cartons compatible with automated filling?',
        answer:
          'Yes. Auto-bottom bases lock instantly and seal-end flaps are designed for glue systems, keeping lines running at full speed.'
      },
      {
        question: 'Can we add serialization or variable data?',
        answer:
          'We can pre-print lot codes, serialization, or apply data windows, ensuring every carton meets regulatory and tracking requirements.'
      },
      {
        question: 'Do you offer barrier coatings for sensitive products?',
        answer:
          'We apply light, moisture, or oxygen barriers to protect nutraceuticals, pharmaceuticals, and specialty foods throughout distribution.'
      }
    ]),
    cta: {
      title: 'Ready for High-Speed Seal-End Cartons?',
      description: 'Send us your product and line specs—we’ll engineer cartons that protect, comply, and present.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Seal-End Cartons Built for Control',
      paragraphs: [
        'Seal-end auto-bottom cartons deliver tamper security without slowing automation.',
        'We tailor board, coatings, and closures to match regulatory expectations and product sensitivities.',
        'From sample runs to global launches, you get a packaging program built for consistency and scale.'
      ]
    }
  },

  // Subcategory: Cardboard Auto Bottom Tray
  'cardboard-auto-bottom-tray': {
    name: 'Cardboard Auto Bottom Tray',
    description: 'Auto-bottom cardboard trays that pop into shape instantly for café service, merchandising displays, and gift kitting.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Auto-bottom base snaps together with a single motion',
      'Rigid sidewalls support heavier contents and stacked presentations',
      'Customizable flare angles create visual drama on display tables',
      'Optional lids, sleeves, or bands complete the presentation',
      'Ships flat to minimize backroom storage',
      'Supports grease-resistant or moisture barriers for foodservice',
      'Ideal for tasting flights, welcome kits, merchandising, and retail bundles'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '20pt SBS or FBB with pre-glued crash-lock auto base' },
        { label: 'Structure', value: 'Auto-bottom tray with optional tuck-top lid and reinforced side panels' },
        { label: 'Thickness', value: '0.020" board with ability to add corrugated liners for heavier products' },
        { label: 'Finish', value: 'Gloss or matte AQ, UV spot logos, anti-scuff coatings' },
        { label: 'Printing', value: 'Litho CMYK with dieline-aligned graphics and sequential numbering' },
        { label: 'Dimensions (L x W x H)', value: 'Trays from 5" x 4" x 2" kit packs to 12" x 9" x 4" displays' },
        { label: 'Quantity', value: 'Crash-lock cardboard trays starting at 600 units' }
      ]
    },
    faq: buildFaq('Cardboard Auto Bottom Tray', [
      {
        question: 'How does the auto bottom mechanism work?',
        answer:
          'Crash-lock panels are pre-glued, so the base locks when you press the tray open. No tape or additional steps are required.'
      },
      {
        question: 'Can I add lids or sleeves to the tray?',
        answer:
          'Yes. We design compatible lids, belly bands, or sleeves that slide over the tray for added protection or branding.'
      },
      {
        question: 'Are these trays sturdy enough for transport?',
        answer:
          'We specify board caliper and reinforcement based on your load so the tray maintains shape through handling and shipping.'
      }
    ]),
    cta: {
      title: 'Ready for Snap-Open Trays?',
      description: 'Share your service or merchandising goals—we’ll craft auto-bottom trays that perform on cue.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Auto-Bottom Trays Made for Momentum',
      paragraphs: [
        'Auto-bottom trays let your team move from flat to finished in seconds.',
        'We tune structure, coatings, and inserts so each tray stands up to handling, travel, and display conditions.',
        'From pop-up events to nationwide rollouts, our workflow keeps trays on spec and on time.'
      ]
    }
  },

  // Subcategory: Cardboard Two Piece Box
  'cardboard-two-piece-box': {
    name: 'Cardboard Two Piece Box',
    description: 'Folding-carton two-piece boxes that pair lightweight construction with a premium reveal for retail sets and gifting.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Separate lid and base ship flat for efficient storage',
      'Dust flaps and friction fit keep contents secure',
      'Supports interior print, sleeves, and belly bands for branding',
      'Optional platforms stage products at reveal height',
      'Great for apparel, stationery, wellness kits, and cosmetics',
      'Works with automated folding/gluing or hand assembly lines',
      'Eco-friendly board options support sustainability commitments'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '24pt SBS with optional wrapped chipboard inserts for high-end presentation' },
        { label: 'Structure', value: 'Lift-off lid with friction-fit base and optional neck piece' },
        { label: 'Thickness', value: '0.024" board with internal stiffeners for product cradling' },
        { label: 'Finish', value: 'Soft-touch matte, foil stamping, spot UV textures, ribbon pull-tabs' },
        { label: 'Printing', value: 'Offset CMYK with PMS spot hits and inside lid messaging' },
        { label: 'Dimensions (L x W x H)', value: 'Two-piece sets from 5" x 5" x 2" to 14" x 10" x 5"' },
        { label: 'Quantity', value: 'Premium cardboard two-piece runs starting at 400 sets' }
      ]
    },
    faq: buildFaq('Cardboard Two Piece Box', [
      {
        question: 'Do folding two-piece boxes require assembly?',
        answer:
          'They ship flat and assemble quickly. Dust flaps and friction-fit walls keep the lid seated without adhesives.'
      },
      {
        question: 'Can I include platforms or risers inside?',
        answer:
          'Yes. We design internal risers, inserts, or belly bands to stage products at the right reveal height.'
      },
      {
        question: 'Are there eco-friendly material options?',
        answer:
          'We offer FSC-certified boards and water-based finishes so you can deliver a premium unboxing while meeting sustainability goals.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate with Two Piece Cartons?',
      description: 'Tell us about your assortment and we’ll craft cardboard boxes that customers keep.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Two Piece Boxes Crafted for Premium Impact',
      paragraphs: [
        'Two-piece folding cartons offer a luxe reveal without the weight of rigid board.',
        'We tune board caliper, lid depth, and insert strategy to support your product lineup.',
        'From boutique drops to scalable programs, our production keeps boxes consistent and on schedule.'
      ]
    }
  },

  // Subcategory: Cardboard Cigarette Box
  'cardboard-cigarette-box': {
    name: 'Cardboard Cigarette Box',
    description: 'Compliance-ready cardboard cigarette boxes that balance regulatory panel space with premium branding cues.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Flip-top hinge lid with soft crush sides for repeat use',
      'Panel layouts accommodate global warning and tax requirements',
      'Supports tear-tape, cellophane overwrap, and tax stamp placement',
      'Barrier interior preserves product freshness and aroma',
      'Interior print enables loyalty messaging or authentication codes',
      'Rigid board ensures packs withstand distribution and pocket wear',
      'Sustainably sourced options align with ESG commitments'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '12pt SBS with metallized inner liner compatibility and tax stamp panels' },
        { label: 'Structure', value: 'Hinge-lid folding carton with tear tape, soft crush bevels, and glued seam' },
        { label: 'Thickness', value: '0.012" board calibrated for automated packing equipment' },
        { label: 'Finish', value: 'High-gloss varnish, foil crests, embossing, tear tape ribbons' },
        { label: 'Printing', value: 'Gravure or offset with metallic inks and mandatory health warnings' },
        { label: 'Dimensions (L x W x H)', value: 'Standard 84 mm packs plus king and slim variants' },
        { label: 'Quantity', value: 'Compliance-ready cardboard cigarette sleeves from 10,000 units' }
      ]
    },
    faq: buildFaq('Cardboard Cigarette Box', [
      {
        question: 'How do you handle different regional warning requirements?',
        answer:
          'We set up artwork templates for each region, ensuring warning panels, tax stamps, and duty markings meet local specifications.'
      },
      {
        question: 'Can the hinge lid be customized with foil or embossing?',
        answer:
          'Yes. We apply foil, embossing, or soft-touch coatings to elevate the brand without interfering with overwrap or tear tape.'
      },
      {
        question: 'Do you provide overwrap or tear tape integration?',
        answer:
          'We can supply cartons sized for automated overwrap lines and integrate tear-tape starter tabs directly into the structure.'
      }
    ]),
    cta: {
      title: 'Ready to Refresh Your Cigarette Packaging?',
      description: 'Share your regulatory landscape and brand goals—we’ll craft cartons that deliver both.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Cigarette Cartons with Conscious Craft',
      paragraphs: [
        'Our cigarette cartons merge premium branding with the regulatory precision global markets demand.',
        'We align board selection, barrier systems, and panel layouts to keep compliance effortless.',
        'With serialization, security, and display support, your packaging program stays secure and on brand.'
      ]
    }
  },

  // Subcategory: Cardboard Bookend Box
  'cardboard-bookend-box': {
    name: 'Cardboard Bookend Box',
    description: 'Bookend-style cardboard cartons that open like a cover to deliver storytelling experiences for education, tech, and wellness kits.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Wraparound cover mimics a hardcover book for premium storytelling',
      'Side flaps lock with magnetic or tuck closures for repeatable use',
      'Custom interior trays hold products, literature, and accessories securely',
      'Large interior panels support onboarding instructions or brand manifestos',
      'Optional windows highlight hero products even before opening',
      'Compatible with partial or full automation for folding and gluing',
      'Ideal for welcome kits, educational sets, electronics, and premium games'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '18pt SBS with locking bookend flap and display-ready front' },
        { label: 'Structure', value: 'Bookend style with glued spine, tuck closure, and optional window patch' },
        { label: 'Thickness', value: '0.018" board with 0.022" upgrade for heavier electronics or glassware' },
        { label: 'Finish', value: 'Matte soft-touch, foil stamped spine, spot UV patterns, resealable stickers' },
        { label: 'Printing', value: 'Litho CMYK with PMS accents and interior brand messaging' },
        { label: 'Dimensions (L x W x H)', value: 'Bookend packs from 4" x 2" x 7" to 10" x 3" x 12"' },
        { label: 'Quantity', value: 'Display sets starting at 750 cardboard bookend boxes' }
      ]
    },
    faq: buildFaq('Cardboard Bookend Box', [
      {
        question: 'How are bookend boxes different from standard tuck cartons?',
        answer:
          'Bookend cartons open along the side like a cover, giving you full interior panels for storytelling while keeping products secured inside.'
      },
      {
        question: 'Can I include magnets or Velcro on the side flap?',
        answer:
          'Yes. We integrate magnets, Velcro, or adhesive dots to keep the flap closed while still allowing repeated opens.'
      },
      {
        question: 'What inserts work best for bookend boxes?',
        answer:
          'We often pair them with molded pulp or foam trays that align with the interior layout, giving recipients a guided unboxing sequence.'
      }
    ]),
    cta: {
      title: 'Ready to Tell Your Story in Cardboard?',
      description: 'Share your content plan—we’ll craft bookend boxes that engage from the first touch.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Bookend Boxes Crafted for Engagement',
      paragraphs: [
        'Bookend cartons transform packaging into an unfolding narrative.',
        'We tune panels, closures, and inserts so recipients explore your content in the intended sequence.',
        'With scalable production and fulfillment, you deliver a unified experience to every audience segment.'
      ]
    }
  },

  // Subcategory: Cardboard Double Wall Frame Tray
  'cardboard-double-wall-frame-tray': {
    name: 'Cardboard Double Wall Frame Tray',
    description: 'Double-wall frame trays engineered to carry heavier products, present premium assortments, and withstand repeated handling.',
    heroImage: 'Mailer-Box_1_ujqhhx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Dual-wall construction adds rigidity and stack strength',
      'Frame design maintains square edges for polished presentation',
      'Ideal for bakery, produce, electronics, and gift assortments',
      'Supports clear lids, film overwrap, or shrink wrapping',
      'Ergonomic grips or cut-outs ease lifting and transport',
      'Optional moisture or grease barriers protect contents',
      'Designed for palletization and cooler or ambient environments'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '22pt SBS double-wall construction with laminated frame edges' },
        { label: 'Structure', value: 'Frame tray with built-in riser platform and optional clear lid compatibility' },
        { label: 'Thickness', value: '0.022" board with 0.026" option for premium goods' },
        { label: 'Finish', value: 'Gloss AQ, soft-touch interior, foil borders, window patching on top frame' },
        { label: 'Printing', value: 'Offset CMYK with dieline-precise artwork across frame surfaces' },
        { label: 'Dimensions (L x W x H)', value: 'Display trays from 6" x 6" x 2" to 14" x 10" x 4"' },
        { label: 'Quantity', value: 'Cardboard frame tray programs from 500 units' }
      ]
    },
    faq: buildFaq('Cardboard Double Wall Frame Tray', [
      {
        question: 'What applications benefit from double-wall frame trays?',
        answer:
          'They excel for heavier bakery, electronics, and gift assortments where rigid walls and premium presentation are critical.'
      },
      {
        question: 'Can these trays include clear lids or shrink wrapping?',
        answer:
          'Yes. We design the frame to accept lids, film, or shrink wraps so your products stay protected while on display.'
      },
      {
        question: 'How are the trays reinforced for stacking?',
        answer:
          'The frame locks the walls into a rigid perimeter, and we can add support rails or thicker board to handle stacked merchandising.'
      }
    ]),
    cta: {
      title: 'Ready for Heavy-Duty Frame Trays?',
      description: 'Tell us about your product mix—we’ll build double-wall trays that stay strong and on-brand.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Frame Trays Ready for Demanding Programs',
      paragraphs: [
        'Double-wall frame trays bring rigid strength to high-visibility displays.',
        'We calibrate materials, coatings, and inserts to protect products from production floor to retail aisle.',
        'With logistics planning and fulfillment support, your trays arrive ready to support every activation.'
      ]
    }
  },
  // ========== CORRUGATED BOXES SUBCATEGORIES ==========
  // Subcategory: Corrugated Mailer Box
  'corrugated-mailer-box': {
    name: 'Corrugated Mailer Box',
    description: 'Heavy-duty corrugated mailer boxes that protect in transit while delivering an immersive unboxing experience for e-commerce and subscription brands.',
    heroImage: 'Mailer-Box-3_oct2ws',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'E-, B-, or EB-flute construction tuned to product weight and DIM goals',
      'Litho-laminate wraps support full-bleed exterior and interior graphics',
      'Auto-locking design eliminates tape and speeds fulfillment lines',
      'Die-cut inserts cradle products, collateral, and swag for reveal moments',
      'Optional peel-and-seal closure with tear strip streamlines returns',
      'Edge crush-tested for carrier networks and international shipping',
      'Sustainable board options keep unboxing eco-forward'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'E-flute corrugated with premium white or natural kraft liners' },
        { label: 'Structure', value: 'Die-cut rollover mailer with integrated dust flaps, cherry locks, tear strips' },
        { label: 'Thickness', value: '1/16" flute height tuned to subscription and ecommerce shipments' },
        { label: 'Finish', value: 'Litho-lam gloss wraps, matte water-based coatings, scratch-resistant varnish' },
        { label: 'Printing', value: 'Digital CMYK for agile runs or litho wraps with PMS accents' },
        { label: 'Dimensions (L x W x H)', value: 'Mailer sizes from 7" x 5" x 2" to 14" x 10" x 4"' },
        { label: 'Quantity', value: 'Corrugated mailer programs from 250 units with kitting add-ons' }
      ]
    },
    faq: buildFaq('Corrugated Mailer Box', [
      {
        question: 'How do you decide which flute profile to use?',
        answer:
          'We evaluate product weight, shipping method, and dimensional weight to recommend E, B, or combination flutes that balance protection and cost.'
      },
      {
        question: 'Can corrugated mailers feature full interior graphics?',
        answer:
          'Yes. Litho-laminate and digital printing allow us to cover both exterior and interior surfaces with high-impact artwork.'
      },
      {
        question: 'Do you provide custom inserts for corrugated mailers?',
        answer:
          'We design corrugated, foam, or molded pulp inserts that ship flat and assemble quickly, ensuring products stay secure through transit.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate Your Corrugated Mailers?',
      description: 'Share your SKU mix and unboxing vision—we’ll engineer corrugated mailers that wow from doorstep to reveal.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Mailer Boxes Engineered for Impact',
      paragraphs: [
        'Corrugated mailers balance rugged protection with premium brand storytelling for every shipment.',
        'We dial in flute profiles, wraps, and inserts to survive carrier networks while delivering a memorable reveal.',
        'From sample batches to national subscription programs, your mailers ship on time and on brand.'
      ]
    }
  },

  // Subcategory: Corrugated Gable Box
  'corrugated-gable-box': {
    name: 'Corrugated Gable Box',
    description: 'Structurally sound corrugated gable boxes with integrated handles for foodservice, experiential kits, and corporate gifting on the move.',
    heroImage: 'Box-6_vm3fmh',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Double-wall handle construction supports heavier payloads',
      'Grease- and moisture-resistant liners keep interiors pristine',
      'Large printable panels showcase brand, menu, or instructions',
      'Optional vents maintain freshness for bakery and hot service',
      'Ships flat for easy staging and efficient storage',
      'Custom inserts organize components, utensils, and collateral',
      'Designed to stack securely during transport and service'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'B-flute or E-flute corrugated with kraft exterior and food-safe liners' },
        { label: 'Structure', value: 'Carry gable with auto-lock bottom, fold-over handles, optional window' },
        { label: 'Thickness', value: '3/32" B-flute or 1/16" E-flute for balanced strength and weight' },
        { label: 'Finish', value: 'Kraft natural, flood white, spot gloss logos, grease-resistant coatings' },
        { label: 'Printing', value: 'Flexo 2-3 colors for speed or litho-lam for photographic branding' },
        { label: 'Dimensions (L x W x H)', value: 'Carry totes from 7" x 4" x 6" to 12" x 7" x 10"' },
        { label: 'Quantity', value: 'Corrugated gable runs starting at 250 handled boxes' }
      ]
    },
    faq: buildFaq('Corrugated Gable Box', [
      {
        question: 'How much weight can corrugated gable boxes handle?',
        answer:
          'We reinforce the handle region and specify flute grades to support your payload. Double-wall handles are available for heavy kits or meals.'
      },
      {
        question: 'Can gable boxes include vents for hot food?',
        answer:
          'Yes. We add die-cut vents or moisture barriers to manage heat and condensation for foodservice applications.'
      },
      {
        question: 'Do the boxes ship flat for staging?',
        answer:
          'They ship flat and fold together quickly, making them ideal for events and large-scale activations with limited prep time.'
      }
    ]),
    cta: {
      title: 'Ready to Carry Your Brand in Corrugate?',
      description: 'Share your service or gifting plans—we’ll build corrugated gable boxes that travel beautifully.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Gable Boxes Built for Portable Experiences',
      paragraphs: [
        'Corrugated gable boxes blend portability with rugged protection for hospitality, gifting, and experiential activations.',
        'We tune flute profiles, barrier options, and inserts to keep contents pristine from kitchen to destination.',
        'With nationwide fulfillment support, your gable boxes stage and deploy smoothly at every venue.'
      ]
    }
  },

  // Subcategory: Corrugated Double Locked Wall Lid Box
  'corrugated-double-locked-wall-lid-box': {
    name: 'Corrugated Double Locked Wall Lid Box',
    description: 'Double-wall corrugated lid boxes that deliver rigid presentation and protective strength for premium products and gift sets.',
    heroImage: 'shipping-box_jyysru',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Interlocking double-wall panels reinforce both lid and base',
      'Supports heavy contents such as glassware, electronics, or gourmet assortments',
      'Litho-laminate wraps elevate exterior and interior branding',
      'Optional magnetic straps, ribbon pulls, or slipcovers enhance unboxing',
      'Flat-packed components assemble quickly without adhesives',
      'Compatible with custom inserts, EVA foam, or molded pulp platforms',
      'Stackable geometry simplifies storage and retail display'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'Double-wall corrugated BC flute with white printable liner or kraft exterior' },
        { label: 'Structure', value: 'Interlocking lid with dual wall reinforcements and tuck-in security tabs' },
        { label: 'Thickness', value: '1/4" combined board protecting fragile or heavy merchandise' },
        { label: 'Finish', value: 'Matte aqueous, satin lamination, foil-banded branding on lid panels' },
        { label: 'Printing', value: 'Litho lamination with CMYK + metallics or high-graphic flexo' },
        { label: 'Dimensions (L x W x H)', value: 'Protective carriers from 12" x 10" x 4" to 20" x 14" x 8"' },
        { label: 'Quantity', value: 'Protective corrugated sets from 200 units with inserts available' }
      ]
    },
    faq: buildFaq('Corrugated Double Locked Wall Lid Box', [
      {
        question: 'Why choose corrugated double-wall lids over rigid boxes?',
        answer:
          'They deliver similar strength and presentation while shipping flat, reducing freight and storage costs for large programs.'
      },
      {
        question: 'Can these boxes include foam or molded inserts?',
        answer:
          'Yes. We engineer custom inserts that lock into the base, supporting heavy or fragile items during shipping and unboxing.'
      },
      {
        question: 'Are litho-laminate wraps available?',
        answer:
          'We offer high-end litho wraps and specialty finishes so the exterior feels premium without sacrificing corrugated durability.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate Heavyweight Packaging?',
      description: 'Share your product details—we’ll engineer corrugated lid boxes that feel as premium as they perform.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Lid Boxes Crafted for Luxury Delivery',
      paragraphs: [
        'Corrugated lid boxes deliver rigid presentation with the durability to survive complex supply chains.',
        'We merge litho wraps, inserts, and finishing so every box feels bespoke while staying production-ready.',
        'From corporate gifts to high-value consumer products, your packaging remains consistent, protective, and on brand.'
      ]
    }
  },

  // Subcategory: Corrugated Seal End Auto Bottom Box
  'corrugated-seal-end-auto-bottom-box': {
    name: 'Corrugated Seal End Auto Bottom Box',
    description: 'Seal-end auto-bottom corrugated cartons built for high-speed fulfillment, compliance, and transit ruggedness.',
    heroImage: 'Box-5_pdb8xw',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Auto-bottom footprint assembles instantly on high-speed cartoners',
      'Seal-end flaps support glue systems and tamper-evident closures',
      'Corrugate strength protects heavier or fragile SKUs in distribution',
      'Barrier coatings available for moisture, grease, or UV sensitivity',
      'Interior print supports instructions, recipes, or regulatory data',
      'Compatible with automated insertion of bottles, blisters, or pouches',
      'Ideal for CPG, household goods, nutraceuticals, and specialty foods'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'E-flute corrugated with high-burst strength liners for automation' },
        { label: 'Structure', value: 'Seal-end closure with auto-bottom for quick setup and tamper control' },
        { label: 'Thickness', value: '1/16" profile with optional double-wall front for heavier loads' },
        { label: 'Finish', value: 'Matte AQ, spot UV seals, reinforced tear strips for easy opening' },
        { label: 'Printing', value: 'Flexo or digital with regulatory panels and sequential barcoding' },
        { label: 'Dimensions (L x W x H)', value: 'Cartons from 4" x 2" x 8" to 9" x 4" x 13"' },
        { label: 'Quantity', value: 'Corrugated seal-end runs from 500 shippers' }
      ]
    },
    faq: buildFaq('Corrugated Seal End Auto Bottom Box', [
      {
        question: 'Do these cartons support automated filling lines?',
        answer:
          'Absolutely. Auto-bottom construction snaps open instantly, and seal-end flaps are sized for glue application on high-speed equipment.'
      },
      {
        question: 'Can we add tamper-evident features?',
        answer:
          'We incorporate tear strips, perforated tabs, or security slits to give your customers confidence that the box hasn’t been opened.'
      },
      {
        question: 'What coatings are available for corrugated seal-end boxes?',
        answer:
          'We can apply moisture, grease, or UV-resistant coatings to protect contents during storage and shipping.'
      }
    ]),
    cta: {
      title: 'Ready for High-Speed Corrugated Cartons?',
      description: 'Send your line specs and let us craft seal-end packaging that performs under pressure.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Seal-End Cartons Built for Performance',
      paragraphs: [
        'Corrugated seal-end cartons deliver the structural strength and compliance coverage modern supply chains demand.',
        'We fine-tune flute, liners, and coatings to balance brand impact with protection.',
        'From compliance to carton flow, you get packaging built to execute flawlessly at scale.'
      ]
    }
  },

  // Subcategory: Corrugated Auto Bottom Tray
  'corrugated-auto-bottom-tray': {
    name: 'Corrugated Auto Bottom Tray',
    description: 'Auto-bottom corrugated trays that deploy instantly for meal kits, retail displays, or assembly-line kitting.',
    heroImage: 'shipping-box_jyysru',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Auto-bottom construction sets up with one motion—no tape required',
      'Corrugate strength supports heavier products and repeated handling',
      'Customizable wall heights and flare angles for product staging',
      'Available with lids, sleeves, or shrink film for protection',
      'Stackable design optimizes storage and transport',
      'Optional grease or moisture barriers for food applications',
      'Excellent for fulfillment stations, co-packers, and retail merchandising'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'E- or B-flute corrugated with kraft interior and printable exterior' },
        { label: 'Structure', value: 'Crash-lock auto bottom tray with roll-over top edge and optional lid' },
        { label: 'Thickness', value: '1/16" E-flute or 3/32" B-flute for heavier items' },
        { label: 'Finish', value: 'Kraft natural, varnish, or litho-lam wraps with foil edge accents' },
        { label: 'Printing', value: 'Digital CMYK for short cycles or flexo branding for volume' },
        { label: 'Dimensions (L x W x H)', value: 'Trays from 6" x 5" x 2" to 14" x 10" x 4"' },
        { label: 'Quantity', value: 'Auto-bottom corrugated trays starting at 300 units' }
      ]
    },
    faq: buildFaq('Corrugated Auto Bottom Tray', [
      {
        question: 'How fast do corrugated auto-bottom trays assemble?',
        answer:
          'The crash-lock base pops into place instantly, making them ideal for high-throughput kitting or meal prep lines.'
      },
      {
        question: 'Can trays handle refrigerated or moist environments?',
        answer:
          'We select flute profiles and coatings that resist moisture, ensuring the tray stays rigid in cold or damp conditions.'
      },
      {
        question: 'Are lids or film seals available?',
        answer:
          'Yes. We engineer compatible lids, film wraps, or shrink bands so you can seal trays for transport or retail display.'
      }
    ]),
    cta: {
      title: 'Ready for Corrugated Trays that Fly?',
      description: 'Share your throughput targets—we’ll craft auto-bottom trays that keep operations humming.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Auto-Bottom Trays Made for Speed',
      paragraphs: [
        'Auto-bottom corrugated trays deliver rigidity and speed for fulfillment, retail, and foodservice programs.',
        'We align board choices, inserts, and graphics to support your workflow from assembly to display.',
        'With kitting and logistics support, your trays arrive ready to deploy wherever your brand needs to be.'
      ]
    }
  },

  // Subcategory: Corrugated Two Piece Box
  'corrugated-two-piece-box': {
    name: 'Corrugated Two Piece Box',
    description: 'Two-piece corrugated boxes that combine protective strength with premium presentation for direct-to-consumer and retail kits.',
    heroImage: 'Box-5_pdb8xw',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Lift-off lid with sturdy base protects heavier assortments',
      'Litho wraps or direct print deliver bold exterior/interior branding',
      'Custom inserts stage products, literature, and accessories elegantly',
      'Optional neck or shoulder adds rigidity and keeps lid aligned',
      'Ships flat as panels or pre-assembled depending on workflow',
      'Perfect for electronics, wellness kits, food and beverage assortments',
      'Corrugate strength ensures the keepsake box survives shipment'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'C-flute corrugated with double-coated liner for premium print and rigidity' },
        { label: 'Structure', value: 'Lift-off lid over base tray with telescoping overlap and reinforced corners' },
        { label: 'Thickness', value: '3/16" corrugated walls with optional foam or pulp inserts' },
        { label: 'Finish', value: 'Gloss or matte litho-lam wraps, foil accents, satin AQ topcoats' },
        { label: 'Printing', value: 'Litho CMYK with PMS, embossed lid logos, inside panel printing' },
        { label: 'Dimensions (L x W x H)', value: 'Keepsake boxes from 10" x 8" x 4" to 18" x 14" x 6"' },
        { label: 'Quantity', value: 'Custom corrugated two-piece runs from 200 sets' }
      ]
    },
    faq: buildFaq('Corrugated Two Piece Box', [
      {
        question: 'Why choose corrugated for a two-piece box?',
        answer:
          'You get the protective strength needed for shipping plus the premium presentation of a keepsake box, all while managing costs.'
      },
      {
        question: 'Can the exterior be fully wrapped with artwork?',
        answer:
          'Yes. Litho-laminate wraps allow for edge-to-edge graphics, foil accents, and textures that elevate your brand.'
      },
      {
        question: 'Do you provide inserts to hold products in place?',
        answer:
          'We design foam, corrugated, or molded pulp inserts that secure each component during transit and unboxing.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate with Corrugated Lids?',
      description: 'Share your product story—we’ll craft two-piece boxes that customers keep long after unboxing.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Two Piece Boxes Crafted for Premium Unboxing',
      paragraphs: [
        'Corrugated two-piece boxes marry protective strength with the presentation quality of rigid packaging.',
        'We align board choice, wraps, and inserts so every reveal feels intentional and secure.',
        'From limited drops to large programs, your packaging stays consistent, protective, and on brand.'
      ]
    }
  },

  // Subcategory: Corrugated Brief Case Style Box
  'corrugated-brief-case-style-box': {
    name: 'Corrugated Brief Case Style Box',
    description: 'Briefcase-style corrugated boxes with integrated handles and closures for professional kits, product demos, and high-value brand activations.',
    heroImage: 'Box-6_vm3fmh',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Suitcase silhouette with locking tabs or magnetic closures',
      'Reinforced handle area withstands repeated transport',
      'Interior compartments organize devices, literature, and swag',
      'Litho wraps or direct print keep branding polished inside and out',
      'Foam or molded inserts secure delicate components in transit',
      'Ideal for sales enablement, influencer drop kits, and product demos',
      'Ships flat or pre-assembled depending on timeline and volume'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: 'BC flute double-wall corrugated with laminated exterior wrap' },
        { label: 'Structure', value: 'Suitcase-style folding case with die-cut handle and Velcro or snap closure' },
        { label: 'Thickness', value: '1/4" combined board with spine reinforcements for presentation kits' },
        { label: 'Finish', value: 'Matte lamination, textured films, foil logos, corner protectors' },
        { label: 'Printing', value: 'Litho-lam CMYK, spot UV graphics, optional personalization' },
        { label: 'Dimensions (L x W x H)', value: 'Presentation cases from 14" x 10" x 3" to 20" x 14" x 5"' },
        { label: 'Quantity', value: 'Limited corrugated briefcase runs starting at 100 kits' }
      ]
    },
    faq: buildFaq('Corrugated Brief Case Style Box', [
      {
        question: 'How durable are the handles on corrugated briefcase kits?',
        answer:
          'We reinforce handle cut-outs with laminated board or applied hardware so the case withstands repeated travel and presentations.'
      },
      {
        question: 'Can I include foam or molded inserts for devices?',
        answer:
          'Yes. We custom-cut inserts for tablets, samples, and collateral, keeping everything organized and secure during transport.'
      },
      {
        question: 'Do these cases ship assembled?',
        answer:
          'We typically ship them flat with pre-installed hardware for efficient freight, but fully assembled delivery is available for turnkey programs.'
      }
    ]),
    cta: {
      title: 'Ready to Deploy Your Brand Briefcase?',
      description: 'Tell us about your activation—we’ll craft corrugated briefcase kits built to travel and impress.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Briefcase Boxes Built for On-the-Go Presentations',
      paragraphs: [
        'Corrugated briefcase kits protect high-value assets while presenting them with boardroom polish.',
        'We align inserts, closures, and finishing so every opening sequence feels choreographed.',
        'With staging, kitting, and logistics support, your kits arrive ready to go wherever your brand travels.'
      ]
    }
  },

  // Subcategory: Corrugated Full Flap Shipping Box
  'corrugated-full-flap-shipping-box': {
    name: 'Corrugated Full Flap Shipping Box',
    description: 'Full flap corrugated shipping boxes built to withstand rugged supply chains, oversized loads, and industrial applications.',
    heroImage: 'shipping-box_jyysru',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    keyFeatures: [
      'Full-overlap flaps provide extra stacking strength and edge protection',
      'Available in single, double, or triple-wall constructions',
      'Custom print or labeling keeps shipments organized and on brand',
      'Interior bracing or foam options secure heavy or delicate equipment',
      'Engineered to optimize pallet utilization and freight efficiency',
      'Meets or exceeds ISTA, ASTM, and carrier performance standards',
      'Ideal for furniture, industrial components, bulk shipments, and replenishment programs'
    ],

    customization: {
      details: [
        { label: 'Material Type', value: '32ECT-44ECT corrugated kraft with extended flaps for double-layer strength' },
        { label: 'Structure', value: 'Full-overlap slotted carton (FOL) with heavy-duty stapled or taped seams' },
        { label: 'Thickness', value: 'Single or double wall board 3/16"-1/4" based on freight requirements' },
        { label: 'Finish', value: 'Kraft exterior, flood color branding, moisture-resistant spray, warning marks' },
        { label: 'Printing', value: 'Large-format flexo up to 3 colors or digital branding on top panels' },
        { label: 'Dimensions (L x W x H)', value: 'Shippers from 10" x 8" x 6" to 30" x 18" x 16"' },
        { label: 'Quantity', value: 'Logistics programs from 250 corrugated FOL cartons' }
      ]
    },
    faq: buildFaq('Corrugated Full Flap Shipping Box', [
      {
        question: 'When should I choose a full flap shipping box?',
        answer:
          'Full overlap flaps add stacking strength and edge protection, making them ideal for heavy loads, industrial components, or long-haul freight.'
      },
      {
        question: 'Can these boxes be pallet-optimized?',
        answer:
          'Yes. We engineer dimensions around your pallet configuration to maximize trailer space and reduce shipping costs.'
      },
      {
        question: 'Do you offer internal bracing for fragile items?',
        answer:
          'We can add foam, corrugated partitions, or wood bracing to secure oversized or delicate products inside the shipper.'
      }
    ]),
    cta: {
      title: 'Ready to Ship with Confidence?',
      description: 'Share your freight profile—we’ll build corrugated full flap cartons that arrive ready for the job.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Full Flap Cartons Built for Rugged Logistics',
      paragraphs: [
        'Full flap corrugated cartons deliver maximum stacking strength and edge protection for heavy or oversized loads.',
        'We integrate reinforcements, blocking, and packaging logistics to keep shipments secure from dock to destination.',
        'From industrial components to retail replenishment, your packaging performs reliably and efficiently.'
      ]
    }
  },

  // Subcategory: Stand Up Pouche
  'stand-up-pouche': {
    name: 'Stand Up Pouche',
    description: 'Self-standing mylar pouches that combine barrier performance with shelf-ready presentation for food, wellness, and lifestyle brands.',
    heroImage: 'standup-zip-lock-myler-box_dlgobk',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: 'PET/VMPET/PE multi-layer laminations with high oxygen and moisture barrier' },
        { label: 'Structure', value: 'Bottom gusset stand-up pouch with zipper, tear notch, and optional euro slot' },
        { label: 'Thickness', value: '3 mil / 4 mil / 5 mil film stacks tuned to product shelf life' },
        { label: 'Finish', value: 'Gloss, matte, soft-touch, or holographic film combinations' },
        { label: 'Printing', value: 'Rotogravure or digital up to 9 colors with matte/gloss dual panels' },
        { label: 'Dimensions (L x W x H)', value: 'Standard 4" x 6" x 2" to 12" x 15" x 4" pouch formats' },
        { label: 'Quantity', value: 'Runs from 1,000 digitally printed pouches to 50,000+ gravure lots' }
      ]
    },
    faq: buildFaq('Stand Up Pouches', [
      {
        question: 'What zipper options are available for stand up pouches?',
        answer:
          'We offer standard press-to-close, child-resistant, and slider zippers. Each option is tested for seal integrity to match your product requirements.'
      },
      {
        question: 'Can stand up pouches support clear windows or metallic finishes?',
        answer:
          'Yes. We layer films to include transparent windows, metallics, or holographic effects while maintaining barrier performance.'
      },
      {
        question: 'How are shelf-life requirements handled?',
        answer:
          'We select laminate structures based on oxygen and moisture sensitivity, then validate them through lab testing to confirm shelf-life goals.'
      }
    ]),
    cta: {
      title: 'Ready to Launch Stand-Up Pouches?',
      description: 'Share your product requirements and we\'ll engineer stand-up pouches that protect freshness and elevate shelf appeal.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Stand-Up Pouches Built for Shelf Impact',
      paragraphs: [
        'Stand-up pouches balance barrier protection with flexible merchandising. We tailor laminate stacks, gusset styles, and closures so your products stay fresh while commanding attention on the shelf.',
        'From small batch launches to national rollouts, we offer digital and gravure printing that keeps gradients crisp, metallic accents vibrant, and regulatory copy clear.',
        'Whether you’re targeting retail aisles or e-commerce fulfillment, our team supports prototyping, testing, and production scaling to keep launches on schedule.'
      ]
    }
  },

  // Subcategory: Kraft Shopping Bag
  'kraft-shopping-bag': {
    name: 'Kraft Shopping Bag',
    description: 'Durable kraft shopping bags with reinforced handles that deliver sustainable, on-the-go branding for retail and events.',
    heroImage: 'kraft-shopping-bag_otahpn',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '120gsm-200gsm natural kraft paper with recycled fiber content' },
        { label: 'Structure', value: 'Square-bottom kraft bag with twisted paper or flat handles' },
        { label: 'Thickness', value: '120gsm / 157gsm / 200gsm with 600gsm reinforced base inserts' },
        { label: 'Finish', value: 'Natural kraft, water-based varnish, spot white ink, foil logos' },
        { label: 'Printing', value: 'Flexo 2-3 colors or offset full-bleed artwork on kraft stocks' },
        { label: 'Dimensions (L x W x H)', value: 'Retail sizes from 8" x 4" x 10" to 16" x 6" x 14"' },
        { label: 'Quantity', value: 'Custom kraft bag orders beginning at 250 units' }
      ]
    },
    faq: buildFaq('Kraft Shopping Bags', [
      {
        question: 'Can kraft shopping bags support heavy merchandise?',
        answer:
          'We reinforce handles and bases to match your product weight, and can add cardboard inserts for extra support with heavier goods.'
      },
      {
        question: 'Are there sustainable ink and coating options?',
        answer:
          'Yes. We print with water-based or soy inks and offer aqueous coatings to keep the bag recyclable and eco-friendly.'
      },
      {
        question: 'Do you provide custom handle colors or materials?',
        answer:
          'We source twisted paper, flat handles, or specialty cords in custom colors to align with your brand palette.'
      }
    ]),
    cta: {
      title: 'Ready to Refresh Your Kraft Shopping Bags?',
      description: 'Tell us about your retail program and we\'ll craft kraft shopping bags that carry weight while showcasing your brand.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Shopping Bags Made for Everyday Branding',
      paragraphs: [
        'Our kraft shopping bags extend your brand well beyond the checkout counter. We combine reinforced handles, sturdy gussets, and eco-friendly boards to keep every purchase secure and on-message.',
        'Mix and match finishes, handle styles, and interior printing to create an experience customers love to reuse, multiplying brand impressions with every outing.',
        'From boutique quantities to nationwide programs, we help you plan production, storage, and replenishment so each campaign stays on track and on budget.'
      ]
    }
  },

  // Subcategory: Paper Bag
  'paper-bag': {
    name: 'Paper Bag',
    description: 'Versatile paper bags designed with custom printing, coatings, and handle options for hospitality, retail, and promotional use.',
    heroImage: 'paper-bag_q7nlaf',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: 'Bleached art paper 128gsm-210gsm with lamination options' },
        { label: 'Structure', value: 'Pinch-bottom or euro tote construction with reinforced turn top' },
        { label: 'Thickness', value: '128gsm / 157gsm / 210gsm paper with 900gsm base board' },
        { label: 'Finish', value: 'Gloss or matte lamination, spot UV, foil, ribbon or PP rope handles' },
        { label: 'Printing', value: 'Offset CMYK with Pantone precision and screen metallic overlays' },
        { label: 'Dimensions (L x W x H)', value: 'Premium totes from 6" x 3" x 8" to 18" x 6" x 15"' },
        { label: 'Quantity', value: 'Luxury paper bags starting at 300 units per design' }
      ]
    },
    faq: buildFaq('Paper Bags', [
      {
        question: 'What handle styles are available for premium paper bags?',
        answer:
          'We offer ribbon, PP rope, cotton cord, and die-cut handles, each reinforced at the turn top to support your product weight.'
      },
      {
        question: 'Can paper bags include special finishes like foil or spot UV?',
        answer:
          'Yes. We layer foils, spot UV, embossing, or soft-touch laminations to create a luxury feel that complements your brand.'
      },
      {
        question: 'Do you provide custom interior printing?',
        answer:
          'We can print interiors with patterns, logos, or messaging, giving customers a branded moment when they look inside the bag.'
      }
    ]),
    cta: {
      title: 'Ready to Design Premium Paper Bags?',
      description: 'Partner with our team to create printed paper bags that align with your hospitality or retail experience.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Premium Paper Bags that Deliver Luxury',
      paragraphs: [
        'Premium paper bags pair high-end materials with statement finishes. We layer laminations, foils, and specialty handles to create a tactile experience that mirrors your brand positioning.',
        'Our structural team calibrates turn tops, bases, and gussets so each bag carries weight comfortably while maintaining crisp geometry.',
        'With meticulous color management and proofing, you can roll out cohesive programs across multiple locations or seasonal activations without compromising quality.'
      ]
    }
  },

  // Subcategory: PVC Bag
  'pvc-bag': {
    name: 'PVC Bag',
    description: 'Reusable PVC shopping bags that provide durable, wipe-clean performance and high-impact transparency for modern merchandising.',
    heroImage: 'pvc-bag_jztehq',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '0.2 mm-0.4 mm clear, frosted, or tinted PVC film with optional fabric trims' },
        { label: 'Structure', value: 'Heat-sealed tote or pouch with gusseted base and zipper, snap, or drawstring closures' },
        { label: 'Thickness', value: '0.2 mm / 0.3 mm / 0.4 mm PVC calibrated for load and compliance needs' },
        { label: 'Finish', value: 'Gloss clear, matte frost, metallic foil edging, and custom binding tape' },
        { label: 'Printing', value: 'Silk-screen, UV digital, or hot stamping for durable branding on PVC surfaces' },
        { label: 'Dimensions (L x W x H)', value: 'Formats from 8" x 3" x 6" cosmetic totes to 16" x 6" x 14" event-ready bags' },
        { label: 'Quantity', value: 'PVC bag runs starting at 500 pieces with custom hardware sourcing' }
      ]
    },
    faq: buildFaq('PVC Bags', [
      {
        question: 'Are PVC bags compliant with clear bag policies?',
        answer:
          'We can produce PVC bags to meet stadium, event, or workplace transparency requirements, including custom sizing and closures.'
      },
      {
        question: 'Can PVC bags include colored trims or fabric handles?',
        answer:
          'Yes. We add fabric bindings, colored trims, and custom hardware so you can tailor the look while keeping wipe-clean performance.'
      },
      {
        question: 'How durable is the printing on PVC surfaces?',
        answer:
          'We use silk-screen or UV digital processes that fuse ink to the material, ensuring graphics resist peeling and abrasion.'
      }
    ]),
    cta: {
      title: 'Ready for Custom PVC Bags?',
      description: 'Bring us your merchandising goals and we\'ll build PVC bags that stay durable, on-brand, and policy compliant.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'PVC Bags Crafted for Modern Merchandising',
      paragraphs: [
        'PVC bags combine wipe-clean durability with transparent branding opportunities. We customize thickness, trim, and hardware so each bag withstands everyday use while staying stylish.',
        'Whether you need event-ready totes, cosmetic pouches, or retail carriers, our finishing options—like colored binding and metallic accents—ensure your bags stand out.',
        'We manage compliance requirements for venues and workplaces, delivering clear bags that pass inspections while showcasing your identity.'
      ]
    }
  },

  // Subcategory: Booklets
  'booklets': {
    name: 'Booklets',
    description: 'Custom printed booklets that deliver product education, storytelling, and promotional content with premium finish options.',
    heroImage: 'booklets_xu1ahx',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '70lb-100lb gloss, silk, or uncoated text stocks with optional 10pt-14pt covers' },
        { label: 'Structure', value: 'Saddle-stitched, perfect bound, coil, or wire-o binding tailored to page count' },
        { label: 'Thickness', value: 'Interior text weights paired with sturdy cover calipers for longevity' },
        { label: 'Finish', value: 'Aqueous, soft-touch, spot UV, foil, or emboss to highlight key spreads' },
        { label: 'Printing', value: 'Digital or offset CMYK with Pantone matches and variable data capability' },
        { label: 'Dimensions (L x W x H)', value: 'Trim sizes from 5.5" x 8.5" to 9" x 12" plus custom dimensions' },
        { label: 'Quantity', value: 'Runs from 100 premium booklets to 25,000+ catalogs' }
      ]
    },
    faq: buildFaq('Booklets', [
      {
        question: 'Which binding style should I choose for my booklet?',
        answer:
          'Saddle-stitch works best for shorter programs, perfect binding adds a square spine for larger page counts, and coil or wire-o keeps manuals lay-flat. We help you pick the ideal format.'
      },
      {
        question: 'Can I mix paper stocks within one booklet?',
        answer:
          'Yes. We can combine heavier covers with lighter interior pages or insert specialty sheets like vellum to highlight key sections.'
      },
      {
        question: 'Do you support variable data printing?',
        answer:
          'Our digital presses handle variable names, codes, and regional content so each booklet can be personalized for its audience.'
      }
    ]),
    cta: {
      title: 'Ready to Print Custom Booklets?',
      description: 'Share your content plan and we\'ll produce booklets with the binding, paper, and finishes that fit your brand story.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Booklets Tailored to Your Story',
      paragraphs: [
        'Booklets help you educate, inspire, and convert. We guide you through binding, page count, and stock selection so every spread reinforces your message.',
        'Choose from premium covers, specialty coatings, and custom inserts to highlight hero content, callouts, or promotions.',
        'With digital and offset production under one roof, we handle short runs, large campaigns, and versioned content while maintaining consistent color and quality.'
      ]
    }
  },

  // Subcategory: Brochures
  'brochures': {
    name: 'Brochures',
    description: 'Tri-fold, bi-fold, and specialty brochures designed to communicate product benefits, pricing, and brand stories.',
    heroImage: 'brochures_eal6ji',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '80lb-100lb gloss or silk text with optional 10pt cover wraps' },
        { label: 'Structure', value: 'Tri-fold, bi-fold, gate-fold, roll-fold, or custom layouts to fit content' },
        { label: 'Thickness', value: 'Text weights calibrated for fold integrity and premium feel' },
        { label: 'Finish', value: 'Gloss AQ, satin varnish, spot UV, foil accents, or soft-touch options' },
        { label: 'Printing', value: 'Digital for short runs or offset CMYK + PMS for high-accuracy branding' },
        { label: 'Dimensions (L x W x H)', value: 'Standard 8.5" x 11" folds to 11" x 17" or custom panel sizes' },
        { label: 'Quantity', value: 'Marketing runs from 250 brochures to large-scale event fulfillment' }
      ]
    },
    faq: buildFaq('Brochures', [
      {
        question: 'Which fold style is best for my content?',
        answer:
          'Tri-folds organize information into simple panels, gate-folds create a reveal, and roll-folds handle long storytelling. We mock up options so you can see how content flows.'
      },
      {
        question: 'Can brochures include spot finishes or foil?',
        answer:
          'Yes. Spot UV, foil, and soft-touch finishes highlight key visuals and give your brochure a premium touch.'
      },
      {
        question: 'Do you handle direct-mail ready brochures?',
        answer:
          'We can trim, tab, and address brochures to meet postal regulations, making them ready for mail fulfillment.'
      }
    ]),
    cta: {
      title: 'Ready to Launch Your Next Brochure?',
      description: 'Send us your messaging goals and we\'ll craft brochures with folds and finishes that capture attention.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Brochures Engineered for Conversion',
      paragraphs: [
        'Brochures translate complex offerings into digestible panels. We map your narrative to the right fold sequence, ensuring readers uncover information in a logical rhythm.',
        'High-impact print techniques—spot UV, metallic hits, soft-touch coatings—ensure every surface feels deliberate and on-brand.',
        'From trade shows to direct mail, we handle finishing, fulfillment, and logistics so your brochures arrive ready to deploy.'
      ]
    }
  },

  // Subcategory: Tags Printing
  'tags-printing': {
    name: 'Tags Printing',
    description: 'Custom hang tags and product tags that reinforce branding, pricing, and care instructions across retail assortments.',
    heroImage: 'tag-printing_mimtc4',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '14pt-22pt coated, uncoated, or kraft cover stocks with duplex options' },
        { label: 'Structure', value: 'Die-cut hang tags with drill holes, eyelets, stringing, or specialty shapes' },
        { label: 'Thickness', value: '0.014" / 0.018" / 0.022" boards matched to product weight' },
        { label: 'Finish', value: 'Matte, gloss, soft-touch, foil, UV spot, painted edges, or varnished seams' },
        { label: 'Printing', value: 'Offset CMYK, digital short-run, or letterpress with metallic and embossing' },
        { label: 'Dimensions (L x W x H)', value: 'Custom die sizes from 1.5" x 2.5" to 4" x 6" storytelling tags' },
        { label: 'Quantity', value: 'Tag programs from 500 pieces with pre-stringing services' }
      ]
    },
    faq: buildFaq('Tags', [
      {
        question: 'Can you pre-string tags before shipping?',
        answer:
          'Yes. Our finishing team can apply strings, ribbons, or metal chains so tags arrive ready to attach on the production line.'
      },
      {
        question: 'Are specialty shapes or die cuts available?',
        answer:
          'We can create custom silhouettes, layered tags, or fold-over designs that align with your product storytelling while staying production-friendly.'
      },
      {
        question: 'Do you offer variable data or numbering on tags?',
        answer:
          'We support variable barcodes, numbering, and personalization for limited editions or inventory tracking.'
      }
    ]),
    cta: {
      title: 'Ready for Custom Branded Tags?',
      description: 'Let us design and finish hang tags that reinforce pricing, storytelling, and product presentation.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Tags that Reinforce Every Detail',
      paragraphs: [
        'Custom tags do more than display price—they communicate fit, care, and brand personality. We craft tags in bespoke shapes, stocks, and finishes that align with your merchandising vision.',
        'Options like duplex boards, foil edges, and textured varnishes elevate perception while staying production-friendly.',
        'Need rapid deployment? Our pre-stringing and kitting services streamline fulfillment so tags arrive ready for the retail floor.'
      ]
    }
  },

  // Subcategory: Business Cards
  'business-cards': {
    name: 'Business Cards',
    description: 'Premium business cards crafted with distinctive stocks, finishes, and print techniques that leave a lasting impression.',
    heroImage: 'business-cards_ggfnab',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '16pt-32pt premium card, cotton, or recycled boards with duplex options' },
        { label: 'Structure', value: 'Standard 3.5" x 2" or custom die-cut shapes with square or rounded corners' },
        { label: 'Thickness', value: '16pt / 24pt / 32pt multi-ply boards with color seam inserts' },
        { label: 'Finish', value: 'Soft-touch, velvet, gloss UV, foil stamping, debossing, or painted edges' },
        { label: 'Printing', value: 'Digital or offset CMYK with Pantone precision and specialty spot white' },
        { label: 'Dimensions (L x W x H)', value: 'Classic 3.5" x 2", square 2.5" x 2.5", or bespoke brand contours' },
        { label: 'Quantity', value: 'Custom card sets from 100 pieces with variable name personalization' }
      ]
    },
    faq: buildFaq('Business Cards', [
      {
        question: 'Can you print different names within the same business card order?',
        answer:
          'Yes. We support variable data printing so each card in the run can be personalized with unique names and titles.'
      },
      {
        question: 'What card stocks are available for premium finishes?',
        answer:
          'We offer cotton, suede, recycled, and multi-ply boards that pair beautifully with foil, letterpress, or painted edges.'
      },
      {
        question: 'Do you provide design proofing before production?',
        answer:
          'We send digital proofs and can produce physical samples upon request to ensure color, finish, and tactile qualities meet expectations.'
      }
    ]),
    cta: {
      title: 'Ready to Elevate Your Business Cards?',
      description: 'Collaborate with our team to create business cards with standout stocks, finishes, and personalization.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Business Cards Designed to Impress',
      paragraphs: [
        'Business cards are often a first tactile impression. We combine premium stocks, layered constructions, and refined finishing to make sure that moment sticks.',
        'Choose from letterpress, foil, emboss, painted edges, and specialty laminations to mirror your brand tone and texture.',
        'Our team manages variable data across large teams while preserving color consistency, ensuring every handoff feels personal and premium.'
      ]
    }
  },

  // Subcategory: Custom Tissue Paper
  'custom-tissue-paper': {
    name: 'Custom Tissue Paper',
    description: 'Branded tissue paper that wraps products in a memorable layer, reinforcing your visual identity from unboxing onward.',
    heroImage: 'cutom-tissue-paper_vlplnt',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '17gsm, 22gsm, or 28gsm acid-free tissue compatible with soy inks' },
        { label: 'Structure', value: 'Sheeted or roll formats cut to size for wrapping, interleaving, or void fill' },
        { label: 'Thickness', value: '17gsm lightweight, 22gsm midweight, or 28gsm premium layering tissue' },
        { label: 'Finish', value: 'Matte translucent, metallic sheen, or pearlescent coatings' },
        { label: 'Printing', value: 'Flexo or rotary up to 2 colors with repeating patterns or edge-to-edge branding' },
        { label: 'Dimensions (L x W x H)', value: 'Standard 20" x 30" sheets with custom cuts from 10" squares to 40" rolls' },
        { label: 'Quantity', value: 'Bulk packs from 1,000 sheets with color assortment or mixed pattern runs' }
      ]
    },
    faq: buildFaq('Custom Tissue Paper', [
      {
        question: 'Can tissue paper be printed with multiple colors?',
        answer:
          'We can print up to two colors using flexo or rotary processes. For multi-color designs we layer inks strategically to maintain translucency.'
      },
      {
        question: 'Is the tissue paper acid-free and colorfast?',
        answer:
          'Yes. Our tissues are acid-free to protect delicate products and we use colorfast inks that won’t transfer onto merchandise.'
      },
      {
        question: 'Do you offer custom sheet sizes?',
        answer:
          'We cut sheets to your required dimensions or supply rolls, making it easy to integrate with gift-wrapping or fulfillment workflows.'
      }
    ]),
    cta: {
      title: 'Ready to Wrap with Custom Tissue?',
      description: 'Tell us about your unboxing experience and we\'ll produce tissue paper that protects and reinforces your brand.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Custom Tissue Paper for Memorable Reveals',
      paragraphs: [
        'Custom tissue transforms every unboxing into a branded moment. We select weights and finishes that complement your packaging while shielding products in transit.',
        'Repeat patterns, edge-to-edge designs, and metallic accents keep your visuals front and center even before products are fully revealed.',
        'Whether you need seasonal runs or evergreen programs, we handle color matching and inventory planning so tissue arrives exactly when you need it.'
      ]
    }
  },

  // Subcategory: Butter Paper
  'butter-paper': {
    name: 'Butter Paper',
    description: 'Food-safe butter paper that keeps confections, baked goods, and deli items fresh while highlighting your brand.',
    heroImage: 'butter-paper_duhyqp',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '30gsm-60gsm greaseproof butter paper certified for direct food contact' },
        { label: 'Structure', value: 'Flat sheets or perforated roll formats sized for bakery and deli operations' },
        { label: 'Thickness', value: '30gsm sandwich wrap, 40gsm deli weight, 60gsm patisserie grade' },
        { label: 'Finish', value: 'Smooth or ribbed textures with aqueous grease barrier and soy inks' },
        { label: 'Printing', value: 'Flexographic 1-2 color repeats or digital short runs for seasonal menus' },
        { label: 'Dimensions (L x W x H)', value: 'Sheets from 10" x 10" to 15" x 20" plus custom roll widths' },
        { label: 'Quantity', value: 'Food-service orders from 5,000 sheets with scheduled replenishment' }
      ]
    },
    faq: buildFaq('Butter Paper', [
      {
        question: 'Is butter paper safe for direct food contact?',
        answer:
          'Yes. Our butter paper meets FDA and EU food-contact standards, making it suitable for wrapping baked goods and confections.'
      },
      {
        question: 'Can I print my logo on butter paper?',
        answer:
          'We print up to two colors with food-safe inks that resist grease, ensuring your branding stays vibrant even with oily foods.'
      },
      {
        question: 'Do you offer perforated rolls or pre-cut sheets?',
        answer:
          'We can supply both. Choose pre-cut sheets for speed or perforated rolls for flexible back-of-house operations.'
      }
    ]),
    cta: {
      title: 'Ready for Custom Printed Butter Paper?',
      description: 'Share your menu and branding needs—we\'ll deliver butter paper that keeps food fresh and messaging clear.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Butter Paper that Keeps Food and Branding Fresh',
      paragraphs: [
        'Butter paper balances grease resistance with print fidelity, making it ideal for bakeries, cafes, and food manufacturers.',
        'We calibrate coatings and ink selections so patterns stay vibrant without transferring to your culinary creations.',
        'From sandwich wraps to patisserie sheets, we support multiple sizes, perforations, and replenishment schedules to keep operations running smoothly.'
      ]
    }
  },

  // Subcategory: Product Labels & Bottle Labels
  'product-labels-bottle-labels': {
    name: 'Product Labels & Bottle Labels',
    description: 'High-adhesion product and bottle labels built to endure moisture, handling, and logistics while looking sharp on shelf.',
    heroImage: 'product-label_t1kpzp',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: 'Paper, BOPP, vinyl, and specialty films with permanent, removable, or freezer adhesives' },
        { label: 'Structure', value: 'Roll or sheet labels, neck hangers, and multi-layer constructions for complex content' },
        { label: 'Thickness', value: '2 mil films, 3.2 mil vinyl, or 60lb paper face stocks matched to application' },
        { label: 'Finish', value: 'Gloss, matte, UV, soft-touch, foil, and lamination options for durability' },
        { label: 'Printing', value: 'Digital HP Indigo for short runs or flexo up to 8 colors with varnish stations' },
        { label: 'Dimensions (L x W x H)', value: 'Label sizes from 1" circles to 6" x 8" panels customized per bottle silhouette' },
        { label: 'Quantity', value: 'Label programs from 500 rolls with lot coding and variable personalization' }
      ]
    },
    faq: buildFaq('Product Labels', [
      {
        question: 'Which label materials work best for moisture-rich environments?',
        answer:
          'For refrigerated or wet applications we recommend BOPP or vinyl stocks paired with permanent, moisture-resistant adhesives.'
      },
      {
        question: 'Can you add foil, emboss, or tactile finishes?',
        answer:
          'Yes. We apply foil stamping, embossing, tactile varnish, and spot gloss to help your labels stand out on crowded shelves.'
      },
      {
        question: 'Do you support variable data or lot coding?',
        answer:
          'We can print variable data inline or leave dedicated zones for thermal transfer printing, ensuring compliance with traceability requirements.'
      }
    ]),
    cta: {
      title: 'Ready to Upgrade Your Product Labels?',
      description: 'Send us your packaging specs and we\'ll engineer labels that stay vibrant and compliant on every surface.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Product Labels Engineered for Performance',
      paragraphs: [
        'Your labels must endure moisture, handling, and logistics—while staying on brand. We match materials, adhesives, and coatings to your application environment.',
        'From matte textures to gloss finishes and tactile varnishes, we elevate shelf presence without sacrificing compliance.',
        'Our variable data capabilities and finishing options support complex product lines, limited editions, and regulatory needs with ease.'
      ]
    }
  },

  // Subcategory: Table Tents
  'table-tents': {
    name: 'Table Tents',
    description: 'Custom table tents that turn dining rooms, events, and checkout stations into storytelling touchpoints.',
    heroImage: 'table-tents_xokzfv',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: '14pt-18pt coated cover or laminated board for high-traffic environments' },
        { label: 'Structure', value: 'Standard tent, pyramid, or tri-panel shapes with interlocking bases' },
        { label: 'Thickness', value: '0.014" / 0.016" / 0.018" boards reinforced for repeated handling' },
        { label: 'Finish', value: 'Gloss or matte lamination, UV spot highlights, scuff-resistant coatings' },
        { label: 'Printing', value: 'Digital or offset CMYK with variable messaging for seasonal promotions' },
        { label: 'Dimensions (L x W x H)', value: 'Displays from 4" x 6" standard tents to 5.5" x 8.5" signage' },
        { label: 'Quantity', value: 'Table tent runs from 250 pieces with versioning by location or menu' }
      ]
    },
    faq: buildFaq('Table Tents', [
      {
        question: 'Which table tent shape works best for my venue?',
        answer:
          'Classic A-frame tents suit quick-service settings, while pyramid and tri-panel designs provide more space for storytelling. We mock up sizes to match your tables.'
      },
      {
        question: 'Can I laminate table tents for durability?',
        answer:
          'Yes. We offer gloss, matte, and scuff-resistant laminations that protect against spills and frequent handling.'
      },
      {
        question: 'Do you support versioning by location or offer?',
        answer:
          'Our digital workflow lets us version artwork for different menus, regions, or promotions within the same production run.'
      }
    ]),
    cta: {
      title: 'Ready to Promote with Table Tents?',
      description: 'Provide your campaign details and we\'ll print durable table tents that drive engagement at every touchpoint.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Table Tents that Drive On-Premise Engagement',
      paragraphs: [
        'Table tents turn every surface into a storytelling platform. We design structures that stay upright, resist spills, and reflect your brand aesthetic.',
        'Versioned content allows you to tailor messaging to locations, dayparts, or promotions without retooling entire campaigns.',
        'With durable coatings and quick-turn digital printing, your table tents arrive ready for high-traffic environments.'
      ]
    }
  },

  // Subcategory: Packing Tape
  'packing-tape': {
    name: 'Packing Tape',
    description: 'Custom printed packing tape that secures shipments while extending brand visibility across every package.',
    heroImage: 'packing-tape_v4prqu',
    modelPath: 'Tuck_End_Auto_Bottom1_ttdsdf',
    customization: {
      details: [
        { label: 'Material Type', value: 'BOPP, kraft paper, or reinforced gummed tape with acrylic, hot melt, or starch adhesives' },
        { label: 'Structure', value: 'Hand and machine rolls with 3" cores and custom width repeats' },
        { label: 'Thickness', value: '2.0 mil / 2.5 mil / 3.0 mil film or 70gsm paper with fiberglass reinforcement' },
        { label: 'Finish', value: 'Gloss, matte, writable surfaces, or water-activated coatings' },
        { label: 'Printing', value: 'Flexo up to 3 colors, digital short runs, or rotogravure for complex patterns' },
        { label: 'Dimensions (L x W x H)', value: 'Roll widths 48 mm, 72 mm, or custom cuts with lengths 50 m to 1000 m' },
        { label: 'Quantity', value: 'Tape orders from 72 rolls per design with pallet replenishment programs' }
      ]
    },
    faq: buildFaq('Packing Tape', [
      {
        question: 'Which tape material should I choose for my shipments?',
        answer:
          'BOPP tape is great for general e-commerce, reinforced gummed tape offers tamper evidence for heavier loads, and kraft tape is ideal for eco-forward programs. We help you match adhesive strength to your boxes.'
      },
      {
        question: 'Can packing tape be printed in multiple colors?',
        answer:
          'Yes. We print up to three colors flexographically, and can run digital or rotogravure processes for complex patterns or gradients.'
      },
      {
        question: 'Do you supply both hand and machine rolls?',
        answer:
          'We slit rolls to fit hand dispensers or automated case sealers, ensuring your tape integrates seamlessly with your fulfillment workflow.'
      }
    ]),
    cta: {
      title: 'Ready for Custom Branded Packing Tape?',
      description: 'Let us produce packing tape that secures each shipment while keeping your brand front and center.'
    },
    overview: {
      heading: 'Product Overview',
      title: 'Packing Tape that Locks in Brand Recognition',
      paragraphs: [
        'Custom packing tape reinforces security and branding on every parcel. We match tape substrates and adhesives to your box style, weight, and fulfillment process.',
        'Flexographic, digital, and rotogravure printing options ensure logos and messaging stay crisp, even across long runs.',
        'From hand rolls to machine-compatible formats, we deliver tape ready to deploy, keeping your shipping workflow efficient and unmistakably yours.'
      ]
    }
  },
  ...industryPageEntries
};

const enrichProductEntry = (slug: string, entry: RawProductEntry): EnrichedProductEntry => {
  const { ctaTitle, ctaDescription, ...restEntry } = entry;
  const name = entry.name || sentenceCase(slug.replace(/-/g, ' '));
  const features = ensureArray(entry.features, createDefaultFeatures(name));
  const keyFeatures = ensureArray(entry.keyFeatures, createDefaultKeyFeatures(name));
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
    )
  };

  const defaultOverview = createDefaultOverview(name, entry.description);
  const overviewParagraphs = ensureArray(
    entry.overview?.paragraphs,
    defaultOverview.paragraphs
  );
  const overview: ReturnType<typeof createDefaultOverview> = {
    ...defaultOverview,
    ...(entry.overview ?? {}),
    paragraphs: overviewParagraphs
  };

  const defaultWhyChooseUs = createDefaultWhyChooseUs(name);
  const whyChooseUs: DefaultWhyChooseUs = {
    ...defaultWhyChooseUs,
    ...(entry.whyChooseUs ?? {}),
    features: ensureArray(
      entry.whyChooseUs?.features,
      defaultWhyChooseUs.features
    )
  };

  let faq: EnrichedProductEntry['faq'];
  if (entry.faq) {
    const items = ensureArray<ProductFAQItem>(
      entry.faq.items,
      [] as ProductFAQItem[]
    );
    if (items.length > 0) {
      faq = {
        ...entry.faq,
        items
      };
    }
  }

  const defaultCTA = createDefaultCTA(name);
  const cta = {
    title: entry.cta?.title ?? ctaTitle ?? defaultCTA.title,
    description: entry.cta?.description ?? ctaDescription ?? defaultCTA.description
  };

  const subcategoryCards = entry.subcategoryCards ?? buildSubcategoryCards(slug);

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
    subcategoryCards
  };

  return enrichedProduct;
};

const buildProductData = (): Record<string, EnrichedProductEntry> =>
  Object.entries(rawProductData).reduce<Record<string, EnrichedProductEntry>>((acc, [slug, entry]) => {
    acc[slug] = enrichProductEntry(slug, entry);
    return acc;
  }, {});

const buildCompleteProductData = (): Record<string, EnrichedProductEntry> => {
  return buildProductData();
};

export const productData = buildCompleteProductData();

// Helper function to get product data by slug exclusively from static data
export const getProductDataBySlug = async (slug: string): Promise<EnrichedProductEntry | undefined> => {
  if (productData[slug]) {
    return productData[slug];
  }

  return undefined;
};

// Helper function to get all products exclusively from static data
export const getAllProducts = async (): Promise<EnrichedProductEntry[]> =>
  Object.entries(productData).map(([slug, product]) => ({
    ...product,
    slug
  }));

export default productData;