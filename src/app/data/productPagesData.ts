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

interface ProductContactChannel {
  label: string;
  value: string;
  type?: 'phone' | 'email' | 'link';
  href?: string;
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

const createDefaultSpecifications = (name: string) => [
  { label: 'Material', value: 'Premium Cardboard / Rigid Board / Kraft' },
  { label: 'Printing', value: 'Full Color CMYK + Specialty Finishes' },
  { label: 'Finish', value: 'Matte, Gloss, Soft-Touch & Foil Options' },
  { label: 'MOQ', value: 'Starts at 250 units with tiered discounts' },
  { label: 'Lead Time', value: '10–14 business days after approval' },
  { label: 'Shipping', value: 'Global fulfillment with tracking updates' }
];

const createDefaultSizes = () => [
  { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
  { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
  { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
  { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
];

const createDefaultGallery = () => [
  'products-box-img_x8vu4b',
  'Box-5_pdb8xw',
  'Box-6_vm3fmh',
  'shipping-box_jyysru'
];

const createDefaultCustomizationOptions = (name: string) => [
  `Die-cut structures engineered specifically for your ${name.toLowerCase()}`,
  'Inside & outside printing with Pantone matching',
  'Foil stamping, embossing, debossing & spot UV options',
  'Protective coatings, lamination, and soft-touch films',
  'Custom inserts, trays, and partitions for product security'
];

const createDefaultWhyChooseUs = (name: string) => ({
  eyebrow: 'Why Choose Us',
  heading: `${sentenceCase(name)} That Build Real Brands`,
  description: `We approach ${name.toLowerCase()} as more than packaging—they are tactile brand experiences. From engineering to finishing, every detail is designed to delight your customer and move your product.`,
  features: createDefaultFeatures(name)
});

const createDefaultFaq = (name: string) => ({
  eyebrow: 'FAQs',
  heading: `Frequently Asked Questions about ${sentenceCase(name)}`,
  items: [
    {
      question: `What customization options are available for ${name.toLowerCase()}?`,
      answer: `Select from multiple board grades, coatings, specialty finishes, and structural designs. We tailor every ${name.toLowerCase()} to your exact guidelines.`
    },
    {
      question: `How quickly can I receive my ${name.toLowerCase()} order?`,
      answer: 'Standard production runs ship in 10–14 business days once artwork is approved. Rush service is available—talk with our team about deadlines.'
    },
    {
      question: `Can you design inserts for my ${name.toLowerCase()}?`,
      answer: 'Yes. Our structural designers create custom inserts, trays, or foam supports that keep every item perfectly in place.'
    },
    {
      question: `Do you offer sustainable ${name.toLowerCase()} materials?`,
      answer: 'Absolutely. Choose post-consumer boards, soy inks, and recyclable coatings to align with your sustainability goals.'
    }
  ] as ProductFAQItem[]
});

const createDefaultContactSection = (name: string) => ({
  eyebrow: 'Partner With Us',
  heading: `Ready to create ${sentenceCase(name)} that stand out?`,
  description: `Share your specs, style requirements, or inspiration. Our packaging consultants will guide you through material choices, pricing, and production timelines for your ${name.toLowerCase()}.`,
  channels: [
    { label: 'Call our packaging team', value: '+1 (800) 123-4567', type: 'phone' },
    { label: 'Email project details', value: 'hello@boxypack.com', type: 'email', href: 'mailto:hello@boxypack.com' },
    { label: 'Book a packaging consultation', value: 'Schedule a 30-minute strategy session', type: 'link', href: '/contact-us#book-call' }
  ] as ProductContactChannel[],
  cta: {
    label: 'Request a custom quote',
    href: '/contact-us#quote'
  }
});

const ensureArray = <T,>(value: T[] | undefined, fallback: T[]) =>
  Array.isArray(value) && value.length > 0 ? value : fallback;

const getSubcategoryImage = (subcategory: any, fallback: string) => {
  if (!subcategory) return fallback || 'products-box-img_x8vu4b';
  if (typeof subcategory.image === 'string' && subcategory.image.length > 0) {
    return subcategory.image;
  }
  if (Array.isArray(subcategory.images) && subcategory.images.length > 0) {
    return subcategory.images[0];
  }
  return fallback || 'products-box-img_x8vu4b';
};

const buildSubcategoryCards = (slug: string) => {
  const materialCategory = productByMaterialData.find(category => category.slug === slug);
  if (materialCategory) {
    return {
      heading: `Our Range of ${materialCategory.name}`,
      description: materialCategory.description,
      items: materialCategory.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description: sub.description || `Premium ${sub.name.toLowerCase()} packaging solutions tailored to your products.`,
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
        description: sub.description || `${sub.name} designed to meet industry demands with custom branding.`,
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
        description: sub.description || `${sub.name} engineered with advanced barrier properties for freshness.`,
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
        description: sub.description || `${sub.name} crafted for memorable retail experiences.`,
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
        description: sub.description || `${sub.name} accessories to finish every package with polish.`,
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
  heading: `Customize Your ${sentenceCase(name)}`,
  description: `Design and order custom ${name.toLowerCase()} to match your exact needs. Choose your materials, structures, and finishes that bring your brand vision to life.`,
  detailsHeading: 'Tailor Every Detail',
  details: [
    { label: 'Material Type', value: 'Premium Cardboard / Rigid Board / Kraft' },
    { label: 'Structure', value: 'Magnetic / Two-Piece / Drawer / Foldable' },
    { label: 'Thickness', value: '14PT / 18PT / 24PT' },
    { label: 'Finish', value: 'Glossy / Matte / Soft Touch / UV Coating' },
    { label: 'Printing', value: 'Inside, Outside, or Both' },
    { label: 'Dimensions (L × W × H)', value: 'Fully custom—no fixed limits' },
    { label: 'Quantity', value: 'Starts at 250 units with scale pricing' }
  ],
  footerNote: 'Review your design, preview your sample, and place your order online.',
  supportTitle: 'Need help before ordering?',
  supportDescription: `If you’d like to talk before placing your order, our support team will guide you through ${name.toLowerCase()} materials, pricing, or design options.`,
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
  ctaTitle: 'Ready to Get Started?',
  ctaDescription: `Get a custom quote for your ${name.toLowerCase()} today. Our team is ready to help you create the perfect packaging solution.`
});

const rawProductData = {
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
    specifications: [
      { label: 'Material', value: 'Premium Cardboard / Rigid Board / Kraft' },
      { label: 'Printing', value: 'Full Color CMYK + Specialty Finishes' },
      { label: 'Finish', value: 'Matte, Gloss, Soft-Touch & Foil Options' },
      { label: 'MOQ', value: 'Starts at 250 units with tiered discounts' },
      { label: 'Lead Time', value: '10–14 business days after approval' },
      { label: 'Shipping', value: 'Global fulfillment with tracking updates' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your rigid boxes',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Rigid Boxes',
      description: 'Design and order custom rigid boxes to match your exact needs. Choose your materials, structures, and finishes that bring your brand vision to life.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
        { label: 'Structure', value: 'Magnetic / Two-Piece / Drawer / Foldable' },
        { label: 'Thickness', value: '14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
        { label: 'Printing', value: 'Inside, Outside, or Both' },
        { label: 'Dimensions (L × W × H)', value: 'e.g., 9.5 × 7.75 × 4' },
        { label: 'Quantity', value: '250 units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Luxury Packaging?',
    ctaDescription: 'Get a custom quote for your premium rigid boxes today. Experience the difference that luxury packaging makes.',
   
    overview: {
      heading: 'Product Overview',
      title: 'Rigid Boxes Crafted for Premium Brands',

      paragraphs: [
        'Rigid boxes form the backbone of elevated retail and gifting experiences. We craft every panel and seam to deliver a flawless first impression that mirrors the stature of your product.',
        'From custom-engineered hinges to hand-applied finishes, our team obsesses over the tactile details that signal quality. Inserts, accessories, and reveal moments are tailored to your launch vision.',
        'Whether you need limited-run influencer kits or global retail programs, our production workflow scales craftsmanship with speed so your brand story arrives intact every time.'
      ]
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
    specifications: [
      { label: 'Material Type', value: 'Corrugated Cardboard / Kraft Paper' },
      { label: 'Structure', value: 'Regular Slotted / Full Overlap / Half Slotted' },
      { label: 'Thickness', value: '150-300 GSM' },
      { label: 'Finish', value: 'Standard / Water Resistant Coating' },
      { label: 'Printing', value: 'Single / Double Color / Full Color' },
      { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
      { label: 'Quantity', value: '500+ units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your shipping boxes',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Shipping Boxes',
      description: 'Design and order custom shipping boxes to match your exact needs. Choose your materials, printing options, and finishes that bring your brand vision to life.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Corrugated Cardboard / Kraft Paper' },
        { label: 'Structure', value: 'Regular Slotted / Full Overlap / Half Slotted' },
        { label: 'Thickness', value: '150-300 GSM' },
        { label: 'Finish', value: 'Standard / Water Resistant Coating' },
        { label: 'Printing', value: 'Single / Double Color / Full Color' },
        { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
        { label: 'Quantity', value: '500+ units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready to Ship with Confidence?',
    ctaDescription: 'Get a custom quote for your shipping boxes today. Ensure your products arrive safely every time.',
    overview: {
      heading: 'Product Overview',
      title: 'Shipping Boxes That Protect and Promote',
      paragraphs: [
        'Shipping boxes are more than a vessel—they carry your brand promise from fulfillment center to front door. We engineer each box to withstand complex supply chains while keeping costs in check.',
        'Our corrugated specialists optimize flute profiles, coatings, and structural reinforcements so fragile and heavy products reach customers without compromise.',
        'Pair rugged performance with bold graphics, interior print, and kitted experiences to transform every shipment into a branded moment your customers remember.'
      ]
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
    specifications: [
      { label: 'Material Type', value: 'Brown Kraft / Recycled Cardboard' },
      { label: 'Structure', value: 'Mailer / Tuck-End / Sleeve / Display' },
      { label: 'Thickness', value: '12PT / 14PT / 18PT / 24PT' },
      { label: 'Finish', value: 'Natural / Matte Varnish / Aqueous Coating' },
      { label: 'Printing', value: 'CMYK / White Ink / Pantone' },
      { label: 'Dimensions (L × W × H)', value: 'Fully custom sizing available' },
      { label: 'Quantity', value: 'Starts at 250 units with sustainable options' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Custom die cuts, tear strips, and locking tabs for kraft boxes',
      'Spot UV, foil accents, and embossing that contrast the kraft texture',
      'Window patching and inserts for premium product reveals',
      'Soy-based inks and water-based coatings for greener production',
      'Interior printing and messaging for a cohesive brand experience'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Boxes',
      description: 'Design kraft boxes that reflect your sustainable vision. Choose structures, finishes, and eco inks that bring your story to life.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Unbleached Kraft / Recycled Board' },
        { label: 'Structure', value: 'Mailer / Tuck-End / Sleeve / Display' },
        { label: 'Thickness', value: '12PT / 14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Natural / Matte / Soft Touch' },
        { label: 'Printing', value: 'CMYK / White Ink / Pantone' },
        { label: 'Dimensions (L × W × H)', value: 'Fully custom sizing available' },
        { label: 'Quantity', value: 'Starts at 250 units (bulk discounts available)' }
      ],
      footerNote: 'Review proofs, approve samples, and launch production with confidence.',
      supportTitle: 'Need sustainable packaging guidance?',
      supportDescription: 'Our packaging experts will help you select the right kraft material, finish, and structure for your products.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Connect with a specialist for structure and finish recommendations.'
        },
        {
          label: 'Email Consultation',
          description: 'Request pricing, lead times, or sustainability certifications.'
        }
      ]
    },
    ctaTitle: 'Ready for Eco-Friendly Kraft Packaging?',
    ctaDescription: 'Request a custom quote for kraft boxes that highlight your sustainable brand values.',
    overview: {
      heading: 'Product Overview',
      title: 'Kraft Boxes Aligned with Sustainable Brands',
      paragraphs: [
        'Kraft boxes deliver an instantly recognizable natural aesthetic that resonates with eco-minded shoppers. We start with responsibly sourced boards to give your packaging an authentic, earthy tone.',
        'Customize structures, closures, and coatings to balance performance with sustainability. Add white ink, foil, or debossed accents to create high-contrast branding without losing the raw appeal.',
        'From farm-to-table meal kits to artisanal retail packaging, our team scales production while maintaining recycled content targets, environmental certifications, and consistent color profiles.'
      ]
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
    specifications: [
      { label: 'Material Type', value: 'Folding Carton / SBS / C1S / C2S' },
      { label: 'Structure', value: 'Auto-Lock Bottom / Straight Tuck / Display' },
      { label: 'Thickness', value: '12PT / 14PT / 18PT / 24PT' },
      { label: 'Finish', value: 'Gloss / Matte / Soft Touch / UV' },
      { label: 'Printing', value: 'Full Color CMYK + Specialty Finishes' },
      { label: 'Dimensions (L × W × H)', value: 'Fully custom—engineered to spec' },
      { label: 'Quantity', value: 'Starts at 250 units with tiered pricing' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Structural engineering for retail-ready cardboard displays',
      'Embossing, debossing, foil, and spot UV for premium detail',
      'Custom inserts, trays, and dividers to secure products',
      'Gloss, matte, and soft-touch laminations for shelf appeal',
      'Perforations and easy-open features for customer convenience'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Boxes',
      description: 'Build cardboard boxes tailored to your product requirements, branding, and fulfillment workflow.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Folding Carton / SBS / Kraft Back' },
        { label: 'Structure', value: 'Mailer / Folding Carton / Display' },
        { label: 'Thickness', value: '12PT / 14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Gloss / Matte / Soft Touch / Spot UV' },
        { label: 'Printing', value: 'CMYK / Pantone / Metallic Inks' },
        { label: 'Dimensions (L × W × H)', value: 'Engineered to your product specifications' },
        { label: 'Quantity', value: 'Starts at 250 units (bulk discounts available)' }
      ],
      footerNote: 'Approve dielines, run test samples, and launch full production seamlessly.',
      supportTitle: 'Need help with structure or printing?',
      supportDescription: 'Our packaging engineers assist with dielines, coatings, and fulfillment-ready designs.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Speak with an engineer about structure and fulfillment requirements.'
        },
        {
          label: 'Email Consultation',
          description: 'Request pricing matrices, print specs, or mockups.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate Your Cardboard Packaging?',
    ctaDescription: 'Connect with our team for a custom cardboard box quote tailored to your brand.',
    overview: {
      heading: 'Product Overview',
      title: 'Cardboard Boxes Built for Retail Impact',
      paragraphs: [
        'Cardboard boxes remain the go-to solution for brands that need vibrant graphics, precise structures, and dependable protection. We tailor every dieline to showcase your product and streamline assembly.',
        'Collaborate with our structural engineers to integrate windows, inserts, and automation-ready locking systems that keep fulfillment efficient and error-free.',
        'Whether you are launching a limited run or scaling to nationwide distribution, our color management, finishing options, and timeline discipline keep every box on brand and on schedule.'
      ]
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
    specifications: [
      { label: 'Material Type', value: 'Single / Double / Triple Wall Corrugated' },
      { label: 'Structure', value: 'Regular Slotted / Mailer / Die-Cut' },
      { label: 'Flute Options', value: 'E-Flute / B-Flute / C-Flute / BC Double Wall' },
      { label: 'Finish', value: 'Kraft / White / Coated / Water Resistant' },
      { label: 'Printing', value: 'Flexographic / Digital / Litho-Laminate' },
      { label: 'Testing', value: 'ISTA, Edge Crush Test (ECT), Burst Test compliant' },
      { label: 'Quantity', value: 'Starts at 500 units with freight optimization' }
    ],
    sizes: [
      { name: 'Small', dimensions: '8 × 6 × 4 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '12 × 9 × 6 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '16 × 12 × 10 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Reinforced corners, double walls, and inserts for added protection',
      'High-gloss litho-laminate wraps for premium corrugated displays',
      'Moisture-resistant coatings and anti-abrasion treatments',
      'Custom perforations, handles, and easy-open features',
      'Subscription-ready interior printing and branded tissue/kits'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Boxes',
      description: 'Engineer corrugated boxes that satisfy performance, branding, and logistics requirements.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Single / Double / Triple Wall Corrugated' },
        { label: 'Structure', value: 'RSC / Mailer / Die-Cut / Pallet Shipper' },
        { label: 'Flute Options', value: 'E / B / C / BC / EB' },
        { label: 'Finish', value: 'Kraft / White / Coated / Anti-Scuff' },
        { label: 'Printing', value: 'Flexo / Digital / Litho-Lam' },
        { label: 'Dimensions (L × W × H)', value: 'Engineered around your product and shipping method' },
        { label: 'Quantity', value: 'Starts at 500 units (bulk efficiencies available)' }
      ],
      footerNote: 'Prototype, test, and roll out corrugated packaging that meets your supply chain demands.',
      supportTitle: 'Need structural testing or guidance?',
      supportDescription: 'Our corrugated specialists advise on fluting, coatings, and compliance testing.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Discuss structural needs, testing, and cushioning with a corrugated expert.'
        },
        {
          label: 'Email Consultation',
          description: 'Request pricing, dielines, and certification support.'
        }
      ]
    },
    ctaTitle: 'Ready for Heavy-Duty Corrugated Packaging?',
    ctaDescription: 'Get a corrugated box quote engineered for your shipping and subscription workflows.',
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Boxes for Demanding Supply Chains',
      paragraphs: [
        'Corrugated packaging protects your products through complex logistics networks. We specify flute combinations, coatings, and reinforcements that match your performance requirements and shipping methods.',
        'Enhance the customer experience with bold exterior graphics, interior storytelling, and custom insert systems that arrive assembly-ready at your facility.',
        'Our rapid prototyping, testing, and freight optimization programs ensure each corrugated box meets regulatory standards while minimizing total landed cost.'
      ]
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
    specifications: [
      { label: 'Material Type', value: 'Mylar Film / Barrier Materials' },
      { label: 'Structure', value: 'Stand-Up / Zipper / Window Bag' },
      { label: 'Thickness', value: '50-200 Microns' },
      { label: 'Finish', value: 'Matte / Glossy' },
      { label: 'Printing', value: 'Full Color Flexographic' },
      { label: 'Dimensions', value: 'Custom sizes available' },
      { label: 'Quantity', value: '1000+ units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your mylar boxes',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Mylar Boxes',
      description: 'Design and order custom mylar boxes to match your exact needs. Choose your materials, printing options, and finishes that bring your brand vision to life.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Mylar Film / Barrier Materials' },
        { label: 'Structure', value: 'Stand-Up / Zipper / Window Bag' },
        { label: 'Thickness', value: '50-200 Microns' },
        { label: 'Finish', value: 'Matte / Glossy' },
        { label: 'Printing', value: 'Full Color Flexographic' },
        { label: 'Dimensions', value: 'Custom sizes available' },
        { label: 'Quantity', value: '1000+ units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Mylar Packaging?',
    ctaDescription: 'Get a custom quote for your mylar boxes today. Discover the perfect barrier packaging solution for your products.',
    overview: {
      heading: 'Product Overview',
      title: 'Mylar Boxes Engineered for Shelf Life',
      paragraphs: [
        'Mylar packaging is the standard for brands that demand freshness, aroma retention, and striking shelf impact. We combine high-barrier films with precision sealing to protect sensitive products.',
        'Customize zipper, gusset, and window styles to balance usability with merchandising appeal. Metallics, holographics, and transparent reveals bring personality to your pouches.',
        'With rapid prototyping, low minimums, and food-safe certifications, we support product launches, seasonal flavors, and large-scale runs with equal focus.'
      ]
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
    specifications: [
      { label: 'Material Type', value: 'Recycled Paper / Cotton / Canvas' },
      { label: 'Structure', value: 'Standard / Tote / Handle Options' },
      { label: 'Thickness', value: '200-400 GSM' },
      { label: 'Finish', value: 'Matte / Glossy' },
      { label: 'Printing', value: 'Full Color CMYK' },
      { label: 'Dimensions', value: 'Custom sizes available' },
      { label: 'Quantity', value: '500+ units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your shopping bags',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Shopping Bags',
      description: 'Design and order custom shopping bags to match your exact needs. Choose your materials, printing options, and finishes that bring your brand vision to life.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Recycled Paper / Cotton / Canvas' },
        { label: 'Structure', value: 'Standard / Tote / Handle Options' },
        { label: 'Thickness', value: '200-400 GSM' },
        { label: 'Finish', value: 'Matte / Glossy' },
        { label: 'Printing', value: 'Full Color CMYK' },
        { label: 'Dimensions', value: 'Custom sizes available' },
        { label: 'Quantity', value: '500+ units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Eco-Friendly Shopping?',
    ctaDescription: 'Get a custom quote for your shopping bags today. Promote your brand while protecting the environment.',
    overview: {
      heading: 'Product Overview',
      title: 'Shopping Bags Designed for Everyday Branding',
      paragraphs: [
        'Shopping bags extend your brand beyond the point of sale. We craft each bag to balance carrying comfort, durability, and a visual presence that attracts attention on the street.',
        'Choose from luxury rope handles, ribbon details, or reinforced die-cut grips. Interior print, custom gussets, and specialty laminations ensure customers keep using your bag.',
        'From boutique collections to national retail programs, we align bag construction with your sustainability goals and merchandising calendar.'
      ]
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
    specifications: [
      { label: 'Material Type', value: 'Various Premium Materials' },
      { label: 'Structure', value: 'Protective / Decorative / Functional' },
      { label: 'Thickness', value: 'Custom Specifications' },
      { label: 'Finish', value: 'Multiple Options Available' },
      { label: 'Printing', value: 'Full Color Available' },
      { label: 'Dimensions', value: 'Custom sizes available' },
      { label: 'Quantity', value: '250+ units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your packaging accessories',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Packaging Accessories',
      description: 'Design and order custom packaging accessories to match your exact needs. Choose your materials, printing options, and finishes that bring your brand vision to life.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Various Premium Materials' },
        { label: 'Structure', value: 'Protective / Decorative / Functional' },
        { label: 'Thickness', value: 'Custom Specifications' },
        { label: 'Finish', value: 'Multiple Options Available' },
        { label: 'Printing', value: 'Full Color Available' },
        { label: 'Dimensions', value: 'Custom sizes available' },
        { label: 'Quantity', value: '250+ units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready to Complete Your Packaging?',
    ctaDescription: 'Get a custom quote for your packaging accessories today. Complete your packaging solution with our premium accessories.',
    overview: {
      heading: 'Product Overview',
      title: 'Packaging Accessories That Complete the Experience',
      paragraphs: [
        'Accessories transform functional packaging into a curated experience. We supply everything from protective inserts to branded collateral that ties your presentation together.',
        'Add tactile finishes with ribbons, wax seals, belly bands, and custom wraps, or build informative touchpoints with QR-enabled cards and booklets.',
        'Our kitting team bundles accessories to match your fulfillment flow, ensuring every package leaves your facility consistent, polished, and on-brand.'
      ]
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
    // specifications: [
    //   { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
    //   { label: 'Structure', value: 'Magnetic Closure' },
    //   { label: 'Thickness', value: '14PT / 18PT / 24PT' },
    //   { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
    //   { label: 'Printing', value: 'Inside, Outside, or Both' },
    //   { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
    //   { label: 'Quantity', value: '250 units (Bulk discounts available)' }
    // ],
    // sizes: [
    //   { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
    //   { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
    //   { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
    //   { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    // ],
    galleryImages: [
      'Mailer-Box-3_oct2ws',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    // customizationOptions: [
    //   'Die-cut structures engineered specifically for your magnetic closure rigid boxes',
    //   'Inside & outside printing with Pantone matching',
    //   'Foil stamping, embossing, debossing & spot UV options',
    //   'Protective coatings, lamination, and soft-touch films',
    //   'Custom inserts, trays, and partitions for product security'
    // ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Magnetic Closure Rigid Box',
      description: 'Design and order custom magnetic closure rigid boxes to match your exact needs. Choose your materials, finishes, and design elements.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
        { label: 'Structure', value: 'Magnetic Closure' },
        { label: 'Thickness', value: '14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
        { label: 'Printing', value: 'Inside, Outside, or Both' },
        { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
        { label: 'Quantity', value: '250 units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Luxury Packaging?',
    ctaDescription: 'Get a custom quote for your magnetic closure rigid boxes today. Experience premium packaging that elevates your brand.'
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
    specifications: [
      { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
      { label: 'Structure', value: 'Two-Piece (Base + Lid)' },
      { label: 'Thickness', value: '14PT / 18PT / 24PT' },
      { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
      { label: 'Printing', value: 'Inside, Outside, or Both' },
      { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
      { label: 'Quantity', value: '250 units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'Mailer-Box-3_oct2ws',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your two-piece rigid boxes',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Two Piece Rigid Boxes',
      description: 'Design and order custom two-piece rigid boxes to match your exact needs. Choose your materials, finishes, and design elements.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
        { label: 'Structure', value: 'Two-Piece (Base + Lid)' },
        { label: 'Thickness', value: '14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
        { label: 'Printing', value: 'Inside, Outside, or Both' },
        { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
        { label: 'Quantity', value: '250 units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Premium Packaging?',
    ctaDescription: 'Get a custom quote for your two-piece rigid boxes today. Create elegant packaging that showcases your products beautifully.'
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
    specifications: [
      { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
      { label: 'Structure', value: 'Sliding Sleeve / Match Style' },
      { label: 'Thickness', value: '14PT / 18PT / 24PT' },
      { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
      { label: 'Printing', value: 'Inside, Outside, or Both' },
      { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
      { label: 'Quantity', value: '250 units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'Mailer-Box-3_oct2ws',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your sliding sleeve rigid boxes',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Sliding Sleeve Rigid Boxes',
      description: 'Design and order custom sliding sleeve rigid boxes to match your exact needs. Choose your materials, finishes, and design elements.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
        { label: 'Structure', value: 'Sliding Sleeve / Match Style' },
        { label: 'Thickness', value: '14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
        { label: 'Printing', value: 'Inside, Outside, or Both' },
        { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
        { label: 'Quantity', value: '250 units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Elegant Packaging?',
    ctaDescription: 'Get a custom quote for your sliding sleeve rigid boxes today. Create sophisticated packaging that stands out.'
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
    specifications: [
      { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
      { label: 'Structure', value: 'Briefcase Style with Handle' },
      { label: 'Thickness', value: '14PT / 18PT / 24PT' },
      { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
      { label: 'Printing', value: 'Inside, Outside, or Both' },
      { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
      { label: 'Quantity', value: '250 units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'Mailer-Box-3_oct2ws',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your briefcase-style rigid boxes',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Brief Case Style Boxes',
      description: 'Design and order custom briefcase-style rigid boxes to match your exact needs. Choose your materials, finishes, and design elements.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
        { label: 'Structure', value: 'Briefcase Style with Handle' },
        { label: 'Thickness', value: '14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
        { label: 'Printing', value: 'Inside, Outside, or Both' },
        { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
        { label: 'Quantity', value: '250 units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Executive Packaging?',
    ctaDescription: 'Get a custom quote for your briefcase-style rigid boxes today. Create premium packaging that commands attention.'
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
    specifications: [
      { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
      { label: 'Structure', value: 'Book Style with Hinged Lid' },
      { label: 'Thickness', value: '14PT / 18PT / 24PT' },
      { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
      { label: 'Printing', value: 'Inside, Outside, or Both' },
      { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
      { label: 'Quantity', value: '250 units (Bulk discounts available)' }
    ],
    sizes: [
      { name: 'Small', dimensions: '6 × 4 × 2 in', price: 'Contact for pricing' },
      { name: 'Medium', dimensions: '10 × 7 × 3 in', price: 'Contact for pricing' },
      { name: 'Large', dimensions: '12 × 9 × 4 in', price: 'Contact for pricing' },
      { name: 'Custom', dimensions: 'Built to your exact spec', price: 'Quoted on request' }
    ],
    galleryImages: [
      'Mailer-Box-3_oct2ws',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Die-cut structures engineered specifically for your book-style rigid boxes',
      'Inside & outside printing with Pantone matching',
      'Foil stamping, embossing, debossing & spot UV options',
      'Protective coatings, lamination, and soft-touch films',
      'Custom inserts, trays, and partitions for product security'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Book Style Rigid Boxes',
      description: 'Design and order custom book-style rigid boxes to match your exact needs. Choose your materials, finishes, and design elements.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Material Type', value: 'Rigid Board / Heavy-Duty Cardboard' },
        { label: 'Structure', value: 'Book Style with Hinged Lid' },
        { label: 'Thickness', value: '14PT / 18PT / 24PT' },
        { label: 'Finish', value: 'Glossy / Matte / Soft Touch / Velvet' },
        { label: 'Printing', value: 'Inside, Outside, or Both' },
        { label: 'Dimensions (L × W × H)', value: 'Custom sizes available' },
        { label: 'Quantity', value: '250 units (Bulk discounts available)' }
      ],
      footerNote: 'Review your design, preview your sample, and place your order online.',
      supportTitle: 'Need help before ordering?',
      supportDescription: 'If you\'d like to talk before placing your order, our support team is ready.',
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
    },
    ctaTitle: 'Ready for Unique Packaging?',
    ctaDescription: 'Get a custom quote for your book-style rigid boxes today. Create memorable packaging that tells your brand story.'
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
    specifications: [
      { label: 'Material Type', value: 'E-flute kraft corrugate or 18PT kraft SBS' },
      { label: 'Structure', value: 'Self-locking tuck mailer with dust flaps' },
      { label: 'Thickness', value: '1.5 mm corrugate / 18–24PT SBS' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, or soft-touch film' },
      { label: 'Printing', value: 'Exterior + interior digital or offset with white ink capability' },
      { label: 'Dimensions', value: 'Custom dielines tailored to SKU sets' },
      { label: 'MOQ', value: 'Starts at 250 units; scale pricing at 1K+' }
    ],
    sizes: [
      { name: 'Essentials', dimensions: '7 × 5 × 2 in', price: 'Quote on request' },
      { name: 'Standard', dimensions: '9 × 6 × 3 in', price: 'Quote on request' },
      { name: 'XL Drop', dimensions: '12 × 10 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Built around your product assortment', price: 'Talk with our team' }
    ],
    galleryImages: ['Mailer-Box_ximzdy', 'Mailer-Box-2_sdcq5v', 'Mailer-Box-3_xvwc3h', 'products-box-img_x8vu4b'],
    customizationOptions: [
      'Add foam or molded pulp inserts to cradle fragile items',
      'Laser-score tear strips for premium yet effortless openings',
      'Combine kraft exterior with white-ink graffiti interiors',
      'Include belly bands or sleeves for variant differentiation',
      'Pre-fold or kitting services for high-volume launches'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Mailer Boxes',
      description: 'Design kraft mailers that deliver a curated unboxing experience while keeping logistics simple and sustainable.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Board Options', value: 'Recycled corrugate, kraft SBS, or laminated hybrid structures' },
        { label: 'Closure & Security', value: 'Tuck tabs, peel-and-seal adhesive, or tamper-evident seals' },
        { label: 'Print Layers', value: '1–5 color print, metallic hits, or hydrographic textures' },
        { label: 'Interior Treatments', value: 'Custom inserts, gusset pockets, or surprise-and-delight cards' },
        { label: 'Fulfillment Add-ons', value: 'Kitting, tissue wrapping, and seasonal variant packs' },
        { label: 'Sustainability', value: 'FSC chain-of-custody, soy-based inks, curbside recyclability' },
        { label: 'Speed to Market', value: 'Prototyping in 5 business days with press-ready dielines' }
      ],
      footerNote: 'Approve artwork, execute production, and schedule fulfillment support with one partner.',
      supportTitle: 'Need guidance on structure or kitting?',
      supportDescription: 'Our packaging strategists will map production, print, and fulfillment workflows around your mailer program.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review dielines, insert designs, and automation guidelines with an engineer.'
        },
        {
          label: 'Email Consultation',
          description: 'Request pricing matrices, lead times, and sustainability documentation.'
        }
      ]
    },
    ctaTitle: 'Ready to Launch Kraft Mailers?',
    ctaDescription: 'Share your dimensions and brand goals—we’ll craft a kraft mailer box that arrives ready to impress.',
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
    specifications: [
      { label: 'Material Type', value: 'Recycled greyboard wrapped in premium kraft liner' },
      { label: 'Structure', value: 'Two-piece telescoping lid with optional neck' },
      { label: 'Thickness', value: '1.5–2.5 mm board with kraft wrap' },
      { label: 'Finish', value: 'Natural kraft, dyed kraft, linen emboss, or foil wrap' },
      { label: 'Printing', value: 'Spot color, hot foil, blind or foil deboss, UV accents' },
      { label: 'Dimensions', value: 'Custom-milled boards to your exact height/width/depth' },
      { label: 'MOQ', value: 'Starts at 500 units for wrapped rigid construction' }
    ],
    sizes: [
      { name: 'Keepsake', dimensions: '5 × 5 × 3 in', price: 'Quote on request' },
      { name: 'Retail Medium', dimensions: '8 × 6 × 3 in', price: 'Quote on request' },
      { name: 'Gift Hamper', dimensions: '12 × 10 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'All dimensions engineered per SKU fit', price: 'Discuss with specialist' }
    ],
    galleryImages: [
      'Kraft-Boxes-With-Lid_bvvlo5',
      'Kraft-Boxes-With-Lid-2_nht4ru',
      'Kraft-Boxes-With-Lid-3_bbjahp',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add ribbon pulls, magnetic closures, or belly bands',
      'Design custom foam, pulp, or EVA inserts for product presentation',
      'Line interiors with specialty paper or printed storytelling panels',
      'Incorporate windows, die-cut logos, or split lid reveals',
      'Bundle multiple lid colors for seasonal or variant releases'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Box with Lid',
      description: 'Create a signature reveal by tailoring lid height, wrap textures, and insert systems around your product and brand.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Wrap & Texture', value: 'Dyed kraft wraps, linen-textured papers, or duplex color pairings' },
        { label: 'Closure Choices', value: 'Simple lift lids, magnetic wraparound straps, ribbon ties, or button closures' },
        { label: 'Interior Fitments', value: 'Precision die-cut inserts, molded pulp trays, or fabric-wrapped cradles' },
        { label: 'Special Effects', value: 'Foil deboss, spot UV, edge painting, or two-tone lids' },
        { label: 'Logistics', value: 'Flat pack components or pre-assembled packs kitted for stores' },
        { label: 'Certifications', value: 'Recycled board content, FSC chain-of-custody, RoHS compliance' },
        { label: 'Timeline', value: 'Sampling in 7 business days with production in as fast as 3 weeks' }
      ],
      footerNote: 'We align dielines, wraps, and inserts to keep your lid boxes cohesive across multiple product lines.',
      supportTitle: 'Need structural or finish inspiration?',
      supportDescription: 'Collaborate with our structural engineers to develop lid heights, shoulder reveals, and accessory kits that elevate your presentation.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Workshop tactile finishes and opening sequences with an expert.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive mood boards, dielines, and cost tiers for your lid box concept.'
        }
      ]
    },
    ctaTitle: 'Ready to Present in Kraft Lids?',
    ctaDescription: 'Tell us about your product and we’ll build a kraft lid box experience that turns gifting into storytelling.',
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
    specifications: [
      { label: 'Material Type', value: 'Premium kraft SBS or specialty dyed kraft board' },
      { label: 'Structure', value: 'Curved pillow folds with tuck tabs' },
      { label: 'Thickness', value: '14–20PT depending on size and weight' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, soft-touch, or spot UV accents' },
      { label: 'Printing', value: 'Digital or offset with white ink, metallic hits, or gradient wraps' },
      { label: 'Dimensions', value: 'Custom width, curve, and depth to suit your product' },
      { label: 'MOQ', value: 'Starts at 500 units with rapid prototyping' }
    ],
    sizes: [
      { name: 'Sampler', dimensions: '5 × 3 × 1 in', price: 'Quote on request' },
      { name: 'Retail Accent', dimensions: '7 × 4 × 1.5 in', price: 'Quote on request' },
      { name: 'Accessory', dimensions: '9 × 5 × 2 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Any arch radius engineered to your SKU', price: 'Consult our team' }
    ],
    galleryImages: [
      'Kraft-Pillow-Soap-Box_qgyxg3',
      'Kraft-Pillow-Soap-Box-2_fxvtv9',
      'Kraft-Pillow-Soap-Box-3_ehvr1d',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add die-cut windows or hanger holes for retail displays',
      'Wrap with hemp cord, ribbon, or custom printed belly bands',
      'Integrate foil-stamped logos or blind deboss graphics',
      'Include interior pockets for inserts, sachets, or promo cards',
      'Pair with matching kraft mailers for a cohesive kit'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Pillow Boxes',
      description: 'Dial in curvature, finish, and printing to craft pillow boxes that feel handmade yet perform at production scale.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Board & Finish', value: 'Natural kraft, dyed tones, or pearlized wraps with protective coatings' },
        { label: 'Closure Enhancements', value: 'Ribbon pull-tabs, magnetic snaps, or tamper-evident seals' },
        { label: 'Accessory Integration', value: 'Pre-applied string ties, belly bands, or gift card sleeves' },
        { label: 'Retail Ready', value: 'Hanger punch-outs, pegboard slots, or euro holes' },
        { label: 'Printing', value: 'All-over patterns, gradient washes, or white-ink illustrations' },
        { label: 'Add-ons', value: 'Custom filler paper, tissue inserts, or fragrance sachets' },
        { label: 'Lead Time', value: 'Express sampling in 5 days, production begins after approval' }
      ],
      footerNote: 'We align pillow box geometry with the way your customers interact, display, and reuse the packaging.',
      supportTitle: 'Need help finalizing shape or ribbon styling?',
      supportDescription: 'Our design consultants will mock up pillow box profiles, finishes, and accessory options tailored to your brand.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review curvature templates and accessory mockups in a collaborative session.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish swatches, and pricing tiers for multiple sizes.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate with Kraft Pillow Boxes?',
    ctaDescription: 'Tell us about your event or SKU assortment and we’ll craft pillow boxes that make each handoff memorable.',
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
    specifications: [
      { label: 'Material Type', value: '24PT food-safe kraft board or E-flute corrugate' },
      { label: 'Structure', value: 'Auto-bottom or lock-bottom gable with carry handle' },
      { label: 'Thickness', value: '18–28PT board; upgrade to corrugate for heavier loads' },
      { label: 'Finish', value: 'Natural kraft, grease-resistant AQ, or soft-touch films' },
      { label: 'Printing', value: 'Full-color digital, spot Pantone, or metallic foils' },
      { label: 'Dimensions', value: 'Custom width/depth to match your product weight' },
      { label: 'MOQ', value: 'Starts at 500 units with mixed-size runs available' }
    ],
    sizes: [
      { name: 'Treat Carrier', dimensions: '6 × 4 × 4 in', price: 'Quote on request' },
      { name: 'Corporate Gift', dimensions: '9 × 6 × 6 in', price: 'Quote on request' },
      { name: 'Event Hamper', dimensions: '12 × 9 × 8 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Crafted to match product weight and volume', price: 'Plan with our team' }
    ],
    galleryImages: [
      'Kraft-Gable-Box_i0vbt9',
      'Kraft-Gable-Box-2_skatu5',
      'Kraft-Gable-Box-3_dduloq',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add PET-free windows or patterned cut-outs',
      'Integrate ribbon closures, belly bands, or wax seals',
      'Apply food-safe liners or grease-resistant barriers',
      'Bundle with branded tissue, menus, or tasting cards',
      'Pre-pack gift kits with fulfillment and drop-shipping support'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Gable Boxes',
      description: 'Design portable kraft carriers that protect artisanal goods and deliver a share-worthy unboxing moment.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Options', value: 'Auto-bottom, snap lock, or reinforced bases for heavier contents' },
        { label: 'Handle Comfort', value: 'Rounded die-cuts, reinforced grips, or ribbon-wrapped handles' },
        { label: 'Food Readiness', value: 'Food-safe coatings, barrier liners, or inner sleeves' },
        { label: 'Brand Story', value: 'Interior print, tasting notes, or QR-triggered landing pages' },
        { label: 'Protection', value: 'Custom dividers, bottle guards, or molded pulp inserts' },
        { label: 'Sustainability', value: 'Compostable liners, recyclable windows, FSC-certified board' },
        { label: 'Fulfillment', value: 'Kitting, drop shipping, and inventory staging for events' }
      ],
      footerNote: 'We coordinate structure, finishing, and logistics so your kraft gable boxes arrive ready for gifting or service.',
      supportTitle: 'Planning a tasting kit or corporate drop?',
      supportDescription: 'Partner with our team to design gable boxes that balance durability, food safety, and presentation.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Engineer handle strength, weight distribution, and insert systems with us.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish swatches, and packaging roadmaps tuned to your event timeline.'
        }
      ]
    },
    ctaTitle: 'Ready to Carry in Kraft Style?',
    ctaDescription: 'Tell us about your gifting or gourmet program and we’ll build kraft gable boxes that travel beautifully.',
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
    specifications: [
      { label: 'Material Type', value: 'Food-grade kraft SBS with grease-resistant barrier' },
      { label: 'Structure', value: 'Auto-lock bottom with tabbed lid' },
      { label: 'Thickness', value: '20–26PT board for bakery loads' },
      { label: 'Finish', value: 'Natural kraft, moisture barrier AQ, or laminated gloss' },
      { label: 'Printing', value: 'Food-safe inks, spot whites, or pattern floods' },
      { label: 'Dimensions', value: 'Engineered to your pastry and cake pan dimensions' },
      { label: 'MOQ', value: 'Starts at 1000 units with repeat-order programs' }
    ],
    sizes: [
      { name: 'Cupcake Quad', dimensions: '6 × 6 × 4 in', price: 'Quote on request' },
      { name: 'Standard Cake', dimensions: '10 × 10 × 5 in', price: 'Quote on request' },
      { name: 'Tiered Celebration', dimensions: '14 × 14 × 8 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Cut-to-fit box + insert combos', price: 'Coordinate with our bakery team' }
    ],
    galleryImages: [
      'Kraft-Bakery-Cake-Box_lbrpz8',
      'Kraft-Bakery-Cake-Box-2_pubkwi',
      'Kraft-Bakery-Cake-Box-3_hykgm5',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Insert cupcake holders, macaron trays, or dessert pods',
      'Add ribbon slots, sticker tabs, or brand seals',
      'Implement PET-free windows or compostable film',
      'Print interior thank-you notes or heating instructions',
      'Bundle with matching catering trays and utensils'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Bakery & Cake Boxes',
      description: 'Deliver pastries that look as delightful at pickup as they did in the display case.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Food Protection', value: 'Grease-resist linings, vents, and inserts tuned to your recipes' },
        { label: 'Presentation', value: 'Windows, foil logos, and branded liners elevate take-home experiences' },
        { label: 'Insert Systems', value: 'Cupcake grids, macaron channels, or tiered cake supports' },
        { label: 'Logistics', value: 'Flat-pack cartons with quick-lock assembly for busy bakeries' },
        { label: 'Compliance', value: 'FDA-compliant inks, CPSIA certifications, allergen statements' },
        { label: 'Multi-location Support', value: 'Inventory staging, blanket PO management, and co-packing' },
        { label: 'Speed', value: 'Prototype kits in 7 days, production timed to seasonal peaks' }
      ],
      footerNote: 'Keep your baked goods picture-perfect from bakery case to celebration table.',
      supportTitle: 'Need to scale your bakery packaging?',
      supportDescription: 'Work with us to tailor cake boxes, inserts, and supply chain workflows for every storefront.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Collaborate on insert engineering and window placement with our structural team.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, coatings, and price tiers for your bakery lineup.'
        }
      ]
    },
    ctaTitle: 'Ready to Box Your Bakes Beautifully?',
    ctaDescription: 'Share your menu and we’ll deliver kraft bakery boxes that keep every treat pristine.',
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
    specifications: [
      { label: 'Material Type', value: 'Rigid board tray wrapped in kraft with sleeve wrap' },
      { label: 'Structure', value: 'Slipcase sleeve with drawer-style tray' },
      { label: 'Thickness', value: '1.5–2.5 mm board with kraft wrap' },
      { label: 'Finish', value: 'Natural kraft, dyed kraft, embossed, or foil wraps' },
      { label: 'Printing', value: 'Offset, foil, spot UV, or blind deboss on sleeve and tray' },
      { label: 'Dimensions', value: 'Custom tray depth and sleeve clearance per product' },
      { label: 'MOQ', value: 'Starts at 500 sets for wrapped rigid construction' }
    ],
    sizes: [
      { name: 'Starter', dimensions: '7 × 5 × 2 in', price: 'Quote on request' },
      { name: 'Premium Kit', dimensions: '10 × 7 × 3 in', price: 'Quote on request' },
      { name: 'Presentation', dimensions: '12 × 9 × 3.5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Drawer and sleeve engineered for your assortment', price: 'Plan with our specialists' }
    ],
    galleryImages: [
      'Kraft-Sleeve-Box_zebf6i',
      'Kraft-Sleeve-Box-2_tcarov',
      'Kraft-Sleeve-Box-3_fzzo68',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add magnetic closures or ribbon pull-tabs for tactile appeal',
      'Design multi-tier trays or removable inserts',
      'Include printed belly bands or variable-data sleeves',
      'Integrate NFC or QR triggers for digital experiences',
      'Bundle with influencer kits, POS displays, or product manuals'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Sleeve Boxes',
      description: 'Create sliding sleeve experiences that feel custom-built for every launch or collaboration.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Exterior Styling', value: 'Two-tone sleeves, embossing, or textured laminates' },
        { label: 'Drawer Engineering', value: 'Foam, EVA, molded pulp, or card inserts shaped to products' },
        { label: 'Engagement', value: 'Pull ribbons, reveal messaging, or hidden compartments' },
        { label: 'Smart Packaging', value: 'NFC tags, AR markers, or serialized labels embedded in sleeves' },
        { label: 'Fulfillment', value: 'Hand assembly, kitting, and drop shipping for PR lists' },
        { label: 'Sustainability', value: 'Recycled board, soy inks, and recyclable adhesives' },
        { label: 'Timing', value: 'Sample sets in 7–10 days with production geared to launch calendars' }
      ],
      footerNote: 'We choreograph every slide, reveal, and accessory to keep your audience engaged from first touch.',
      supportTitle: 'Developing an influencer or welcome kit?',
      supportDescription: 'Work with our structural and creative teams to choreograph every reveal moment.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype drawer mechanics and accessory placement with an expert.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish inspiration, and fulfillment plans tailored to your launch.'
        }
      ]
    },
    ctaTitle: 'Ready to Slide into Memorable Packaging?',
    ctaDescription: 'Share your product lineup and we’ll craft kraft sleeve boxes that elevate every reveal.',
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
    specifications: [
      { label: 'Material Type', value: '14–24PT kraft SBS or duplex board' },
      { label: 'Structure', value: 'Reverse tuck, straight tuck, 1-2-3 lock, or auto-lock bottom' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, gloss UV, or soft-touch' },
      { label: 'Printing', value: 'CMYK + Pantone, foil, emboss, or spot UV on kraft' },
      { label: 'Dimensions', value: 'Custom dielines tailored to product footprint' },
      { label: 'Inserts', value: 'Optional product trays, blister cards, or folded leaflets' },
      { label: 'MOQ', value: 'Starts at 500 units with roll-out programs to 100K+' }
    ],
    sizes: [
      { name: 'Shelf Mini', dimensions: '4 × 1.5 × 6 in', price: 'Quote on request' },
      { name: 'Wellness Pack', dimensions: '6 × 2 × 8 in', price: 'Quote on request' },
      { name: 'Retail Large', dimensions: '8 × 3 × 10 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to automated line specifications', price: 'Connect with production team' }
    ],
    galleryImages: [
      'Kraft-Tuck-End-Box_xot1ve',
      'Kraft-Tuck-End-Box-2_fqtnjo',
      'Kraft-Tuck-End-Box-3_alj9hw',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add hang tabs, euro slots, or tear-strip openings',
      'Line with foil or barrier films for light/moisture sensitive goods',
      'Integrate scratch-offs, loyalty codes, or serialized labels',
      'Bundle with shelf-ready trays or display cartons',
      'Include interior print for usage guides or storytelling'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Tuck End Boxes',
      description: 'Build a shelf-ready kraft carton that folds, glues, and protects precisely the way you need.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Closure Format', value: 'Reverse tuck, straight tuck, auto-lock bottoms, crash locks' },
        { label: 'Display Features', value: 'Hanger holes, windows, tear-away panels, or display trays' },
        { label: 'Barrier Needs', value: 'Foil lining, varnishes, or insert cards for product protection' },
        { label: 'High-Speed Converting', value: 'Designed for compatibility with automated filling lines' },
        { label: 'Branding', value: 'Spot white, foil, flood coating, or tactile varnishes on kraft' },
        { label: 'Documentation', value: 'Insert printing, multi-language panels, QR-enabled experiences' },
        { label: 'Scaling', value: 'Pilot runs to large-scale production with regional warehousing' }
      ],
      footerNote: 'We align structure and finishing with the demands of your retail channels and automation.',
      supportTitle: 'Need help optimizing for retail or fulfillment?',
      supportDescription: 'Engage our structural team to fine-tune dielines, coatings, and insert strategies for your kraft tuck cartons.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review automation specs and carton performance with our engineers.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive carton prototypes, cost analyses, and rollout schedules.'
        }
      ]
    },
    ctaTitle: 'Ready to Upgrade Your Kraft Cartons?',
    ctaDescription: 'Send us your product specs and we’ll craft kraft tuck boxes that slot seamlessly into your workflow.',
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
    specifications: [
      { label: 'Material Type', value: '16–22PT kraft SBS or kraft duplex board' },
      { label: 'Structure', value: 'Five-panel hanger with tuck or auto-lock base' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, gloss UV, or spot varnish' },
      { label: 'Printing', value: 'Full-color, white ink, metallic accents, or raised UV' },
      { label: 'Dimensions', value: 'Custom hanger height, panel width, and depth' },
      { label: 'Display Compatibility', value: 'Pegboard, slatwall, or clip-strip layouts' },
      { label: 'MOQ', value: 'Starts at 1000 units with multi-location fulfillment' }
    ],
    sizes: [
      { name: 'Accessory Pack', dimensions: '4 × 1.5 × 8 in', price: 'Quote on request' },
      { name: 'Electronics', dimensions: '6 × 2 × 10 in', price: 'Quote on request' },
      { name: 'Wellness', dimensions: '7 × 2.5 × 11 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored hanger height and panel width', price: 'Discuss display plan with us' }
    ],
    galleryImages: [
      'Kraft-Five-Panel-Hanger-Box_vqaq1b',
      'Kraft-Five-Panel-Hanger-Box-2_z2kzej',
      'Kraft-Five-Panel-Hanger-Box-3_uthtgn',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add clear windows, perforated coupons, or contest panels',
      'Include serialized labels or RFID for inventory tracking',
      'Print color-coded edges for quick merchandising',
      'Design companion shelf trays or clip strips',
      'Integrate hanging hardware or reinforcement for heavier SKUs'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Five Panel Hanger Boxes',
      description: 'Command pegboard real estate with hanger cartons that combine structure, storytelling, and supply-chain efficiency.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Hanger Geometry', value: 'Custom hole placement, reinforcement, or dual hanger options' },
        { label: 'Product Security', value: 'Tamper-evident seals, shrink bands, or internal locks' },
        { label: 'Sustainability', value: 'Recyclable boards, PET-free windows, low-VOC inks' },
        { label: 'Automation', value: 'Cartons engineered for automated filling and sealing lines' },
        { label: 'Display Strategy', value: 'Clip-strip compatibility, endcap kits, or PDQ displays' },
        { label: 'Documentation', value: 'Multilingual panels, regulatory icons, or QR engagement' },
        { label: 'Logistics', value: 'Staggered production and warehousing for multi-retailer programs' }
      ],
      footerNote: 'We ensure your peg-ready cartons withstand handling, look sharp, and align with retailer compliance.',
      supportTitle: 'Coordinating a retail rollout?',
      supportDescription: 'Partner with our team to align hanger carton specs, finishes, and logistics for every channel.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Align structure and display requirements with a packaging engineer.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive retailer compliance checklists, dielines, and pricing options.'
        }
      ]
    },
    ctaTitle: 'Ready to Hang Your Brand with Confidence?',
    ctaDescription: 'Send us your product details—we’ll craft hanger cartons that stand out on every peg.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT kraft SBS or corrugate hybrids' },
      { label: 'Structure', value: 'Side-lock six corner pre-glued tray' },
      { label: 'Finish', value: 'Natural kraft, moisture barrier AQ, or matte film' },
      { label: 'Printing', value: 'Full exterior/interior coverage, white ink, or metallic accents' },
      { label: 'Dimensions', value: 'Custom tray width, depth, and lip height' },
      { label: 'Accessories', value: 'Optional lids, sleeves, or clear covers' },
      { label: 'MOQ', value: 'Starts at 500 units with rapid auto-bottom options' }
    ],
    sizes: [
      { name: 'Bakery Tray', dimensions: '8 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Merch Display', dimensions: '10 × 8 × 3 in', price: 'Quote on request' },
      { name: 'Apparel Box', dimensions: '12 × 10 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Any tray depth and lip height engineered to product', price: 'Coordinate with design team' }
    ],
    galleryImages: [
      'Kraft-Side-Lock-Six-Corners_xyy2gh',
      'Kraft-Side-Lock-Six-Corners-2_wupuaa',
      'Kraft-Side-Lock-Six-Corners-3_ymwf5d',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add clear lids, PET-free film, or paperboard covers',
      'Combine with printed sleeves or belly bands',
      'Include dividers or partitions for multi-item sets',
      'Integrate tamper evident tapes or seals',
      'Apply grease-resistant coatings for food applications'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Six Corner Trays',
      description: 'Design pop-up kraft trays that carry, display, and protect products effortlessly.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Tray Geometry', value: 'Custom lip heights, bevels, and corner lock tolerances' },
        { label: 'Rigid Upgrades', value: 'Corrugate laminations or reinforcement strips for heavier loads' },
        { label: 'Lidding Options', value: 'Snap-on lids, film seals, or windowed covers' },
        { label: 'Branding & Print', value: 'Interior storytelling, loyalty codes, or instruction graphics' },
        { label: 'Fulfillment', value: 'Pre-folding, kitting, and co-packing available' },
        { label: 'Sustainability', value: 'Mono-material solutions, FSC board, water-based coatings' },
        { label: 'Testing', value: 'Compression, stack, and transit testing to match your supply chain' }
      ],
      footerNote: 'We align tray design with your display, fulfillment, and sustainability goals.',
      supportTitle: 'Need trays that pop and perform?',
      supportDescription: 'Our packaging engineers will optimize six corner trays for your product weight, finish, and display strategy.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Co-create tray geometry and inserts during a live engineering session.'
        },
        {
          label: 'Email Consultation',
          description: 'Request dielines, finish swatches, and performance test summaries.'
        }
      ]
    },
    ctaTitle: 'Ready for Pop-Up Kraft Trays?',
    ctaDescription: 'Send us your product specs and we’ll deliver kraft trays that deploy in seconds and look exceptional.',
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
    specifications: [
      { label: 'Material Type', value: '20–28PT kraft SBS or laminated corrugate' },
      { label: 'Structure', value: 'Regular six corner tray with gluelines' },
      { label: 'Finish', value: 'Natural kraft, anti-grease AQ, or satin film' },
      { label: 'Printing', value: 'Edge-to-edge offset, digital, or flexo prints' },
      { label: 'Dimensions', value: 'Custom base and wall height engineered per use case' },
      { label: 'Accessories', value: 'Optional lids, window film, partitions, or crash-lock bases' },
      { label: 'MOQ', value: 'Starts at 500 trays with scale to national programs' }
    ],
    sizes: [
      { name: 'Service Tray', dimensions: '12 × 9 × 3 in', price: 'Quote on request' },
      { name: 'Retail Display', dimensions: '14 × 10 × 4 in', price: 'Quote on request' },
      { name: 'XL Merch', dimensions: '16 × 12 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tray geometry tuned to product and channel', price: 'Plan with our team' }
    ],
    galleryImages: [
      'Kraft-Regular-Six-Corner-Box_r2wkgt',
      'Kraft-Regular-Six-Corner-Box-2_ojhutw',
      'Kraft-Regular-Six-Corner-Box-3_y9bu3j',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add die-cut handles or finger notches for easy lift',
      'Integrate partitions for multi-item merchandising',
      'Use barrier coatings for food or refrigerated environments',
      'Bundle with lids, shrink film, or wraparound sleeves',
      'Include interior print for instructions or recipe cards'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Regular Six Corner Trays',
      description: 'Build kraft trays that assemble fast, carry weight, and keep your brand visible from every angle.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Wall Reinforcement', value: 'Laminate options, additional score lines, or support tabs' },
        { label: 'Handling', value: 'Handles, thumb notches, or reinforced edges for heavy lifts' },
        { label: 'Lidding Solutions', value: 'Snap-on lids, film windows, or board covers' },
        { label: 'Printing', value: 'Interior print, QR storytelling, or loyalty codes' },
        { label: 'Inserts', value: 'Partitions, air cells, or molded pulp accessories' },
        { label: 'Sustainability', value: 'Mono-material builds and recyclable finishes' },
        { label: 'Fulfillment', value: 'Pre-folding, assembly instructions, and kitting support' }
      ],
      footerNote: 'From supply chain to storefront, we align tray performance with your operational needs.',
      supportTitle: 'Need trays that transition from storage to display?',
      supportDescription: 'Our team will develop six corner trays ready for automated or manual deployment across your channels.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Engineer tray specs, inserts, and finishing in collaboration with us.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive structural drawings, performance data, and packaging playbooks.'
        }
      ]
    },
    ctaTitle: 'Ready for Retail-Ready Kraft Trays?',
    ctaDescription: 'Share your merchandising goals and we’ll build kraft trays that deploy fast and look sharp.',
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
    specifications: [
      { label: 'Material Type', value: '16–24PT kraft SBS with optional foil or barrier lining' },
      { label: 'Structure', value: 'Seal-end top with auto-lock bottom' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, gloss UV, or soft touch' },
      { label: 'Printing', value: 'Full-color, spot white, microtext security, or foil' },
      { label: 'Dimensions', value: 'Custom-built to automated line specifications' },
      { label: 'Security', value: 'Perforations, glue seals, and tamper evident labels' },
      { label: 'MOQ', value: 'Starts at 10K units with large-scale production available' }
    ],
    sizes: [
      { name: 'Vial Pack', dimensions: '4 × 1.5 × 6 in', price: 'Quote on request' },
      { name: 'Supplement Carton', dimensions: '5 × 2 × 7 in', price: 'Quote on request' },
      { name: 'Cosmetic Tube', dimensions: '7 × 2 × 8 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to filling line and product tolerances', price: 'Consult automation team' }
    ],
    galleryImages: [
      'Kraft-Seal-End-Auto-Bottom-Box_gddrys',
      'Kraft-Seal-End-Auto-Bottom-Box-2_xrhibj',
      'Kraft-Seal-End-Auto-Bottom-Box-3_az42hj',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Integrate scratch-resist coatings, holograms, or serialized labels',
      'Add hang tabs, tear strips, or dispensers',
      'Include interior leaflets, blister cards, or bottle dividers',
      'Use moisture/oxygen barrier films for sensitive formulas',
      'Pre-glue or pre-apply adhesives for automation efficiency'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Seal-End Cartons',
      description: 'Design kraft seal-end auto-bottom cartons that balance speed, compliance, and shelf appeal.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Automation Readiness', value: 'Cartons tuned to your erecting, filling, and sealing equipment' },
        { label: 'Security Layers', value: 'Glue seals, perf lines, void labels, and anti-counterfeit features' },
        { label: 'Barrier Protection', value: 'Foil, PVDC, or plant-based coatings for product stability' },
        { label: 'Branding', value: 'High-density print, emboss/deboss, and tactile coatings on kraft' },
        { label: 'Regulatory Panels', value: 'Multi-language side panels, drug facts, and compliance icons' },
        { label: 'Supply Chain', value: 'Regional warehousing, JIT delivery, and forecast management' },
        { label: 'Testing', value: 'Line trials, drop testing, and climate conditioning support' }
      ],
      footerNote: 'We align carton structure and finish with the demands of your automated packaging lines and regulatory landscape.',
      supportTitle: 'Scaling compliance-ready packaging?',
      supportDescription: 'Work with our automation specialists to dial in kraft seal-end cartons for every SKU.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review machinery specs, gluing, and sealing requirements with our engineers.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive compliance templates, performance reports, and rollout schedules.'
        }
      ]
    },
    ctaTitle: 'Ready for High-Speed Kraft Cartoning?',
    ctaDescription: 'Send us your product and line specs—we’ll produce kraft seal-end cartons that keep pace with demand.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT kraft SBS or corrugate laminate' },
      { label: 'Structure', value: 'Auto-bottom tray with open top or optional lid' },
      { label: 'Finish', value: 'Natural kraft, grease-resistant AQ, satin film' },
      { label: 'Printing', value: 'Exterior/interior offset or digital with spot white options' },
      { label: 'Dimensions', value: 'Custom footprint, wall height, and flare angle' },
      { label: 'Accessories', value: 'Partitions, belly bands, or film windows' },
      { label: 'MOQ', value: 'Starts at 500 trays with kitting services available' }
    ],
    sizes: [
      { name: 'Cafe Tray', dimensions: '9 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Gift Set', dimensions: '10 × 8 × 3 in', price: 'Quote on request' },
      { name: 'Event Box', dimensions: '12 × 8 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored trays for your product mix', price: 'Chat with our engineers' }
    ],
    galleryImages: [
      'Kraft-Single-Wall-Auto-Bottom-Tray_cxpl8m',
      'Kraft-Single-Wall-Auto-Bottom-Tray-2_rd54qx',
      'Kraft-Single-Wall-Auto-Bottom-Tray-3_zgcisf',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add grease-resistant liners or inserts',
      'Integrate dual compartments or fold-out dividers',
      'Include belly bands, ribbons, or printed sleeves',
      'Apply die-cut handles or thumb notches',
      'Bundle with lids, clear film, or display sleeves'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Auto Bottom Trays',
      description: 'Craft easy-to-assemble kraft trays that streamline service lines and gift presentation.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Assembly Speed', value: 'Auto-bottom designs that pop open instantly' },
        { label: 'Protection', value: 'Grease barriers, inserts, and structural reinforcements' },
        { label: 'Brand Moments', value: 'Interior storytelling, QR codes, or loyalty messaging' },
        { label: 'Accessories', value: 'Sleeves, lids, or film wraps tailored to your merchandise' },
        { label: 'Fulfillment', value: 'Pre-folding, co-packing, and distribution staging' },
        { label: 'Sustainability', value: 'Mono-material builds with recyclable coatings' },
        { label: 'Scaling', value: 'Pilot runs supported by national rollout capacity' }
      ],
      footerNote: 'We align tray design with your throughput, branding, and sustainability goals.',
      supportTitle: 'Need fast-deploy trays for your program?',
      supportDescription: 'Partner with our team to develop auto-bottom trays that match your service or gifting workflow.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype tray geometry and accessory options with our structural experts.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish proposals, and fulfillment plans.'
        }
      ]
    },
    ctaTitle: 'Ready for Instant Kraft Trays?',
    ctaDescription: 'Tell us about your cafe, gifting, or merch program and we’ll engineer trays that set up in seconds.',
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
    specifications: [
      { label: 'Material Type', value: 'Rigid greyboard wrapped in premium kraft paper' },
      { label: 'Structure', value: 'Telescoping two-piece lid and base' },
      { label: 'Thickness', value: '2–3 mm board for enhanced rigidity' },
      { label: 'Finish', value: 'Natural kraft, dyed kraft, soft-touch, linen emboss' },
      { label: 'Printing', value: 'Foil, deboss, spot UV, or duplex color wraps' },
      { label: 'Dimensions', value: 'Custom width/length/height engineered for product' },
      { label: 'MOQ', value: 'Starts at 500 units with mixed-size programs available' }
    ],
    sizes: [
      { name: 'Accessory Box', dimensions: '6 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Apparel Box', dimensions: '12 × 10 × 3 in', price: 'Quote on request' },
      { name: 'Gift Hamper', dimensions: '14 × 12 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Fully bespoke sizes with inserts', price: 'Consult our design studio' }
    ],
    galleryImages: [
      'Kraft-Two-Piece-Box_i0ua2d',
      'Kraft-Two-Piece-Box-2_utl6ru',
      'Kraft-Two-Piece-Box-3_dpm4f9',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add fabric pulls, magnetic closures, or ribbon ties',
      'Integrate foam, molded pulp, or fabric-wrapped inserts',
      'Bundle with sleeves, belly bands, or slipcovers',
      'Line interiors with patterned paper or foil touches',
      'Offer personalization, numbering, or edition stamping'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Two Piece Boxes',
      description: 'Compose a keepsake-worthy unboxing experience with lids, inserts, and finishes that reflect your brand story.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Exterior Styling', value: 'Mix kraft with dyed wraps, foils, and texture embosses' },
        { label: 'Interior Fit', value: 'Custom compartments, fabric lining, or foam cradles' },
        { label: 'Accessories', value: 'Ribbon pulls, magnetic snaps, wax seals, or belly bands' },
        { label: 'Personalisation', value: 'Edition numbering, foil personalisation, or hangtags' },
        { label: 'Fulfillment', value: 'Pre-assembled sets, drop shipping, and launch kitting' },
        { label: 'Sustainability', value: 'Recycled board, recyclable wraps, water-based adhesives' },
        { label: 'Roadmap', value: 'Mood boards, prototyping, and production scheduling' }
      ],
      footerNote: 'We choreograph every touchpoint so your two piece boxes become keepsakes.',
      supportTitle: 'Planning a premium launch or gifting program?',
      supportDescription: 'Work with our studio to develop two piece boxes that elevate your product reveal.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Explore material, wrap, and insert combinations with a packaging stylist.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish mockups, and pricing tailored to your collection.'
        }
      ]
    },
    ctaTitle: 'Ready to Design Signature Kraft Boxes?',
    ctaDescription: 'Share your concept and we’ll craft two-piece kraft boxes that keep customers reaching for more.',
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
    specifications: [
      { label: 'Material Type', value: 'Kraft laminated SBS with optional foil barrier' },
      { label: 'Structure', value: 'Flip-top hinge lid with inner frame' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, or soft-touch varnish' },
      { label: 'Printing', value: 'CMYK + Pantone, metallic accents, microtext security' },
      { label: 'Dimensions', value: 'Custom pack depths for king, slim, or bespoke formats' },
      { label: 'Compliance', value: 'Warning panel layout, track-and-trace, tax stamp areas' },
      { label: 'MOQ', value: 'Starts at 25K units with global fulfillment support' }
    ],
    sizes: [
      { name: 'King Size', dimensions: '3.5 × 2.2 × 0.9 in', price: 'Quote on request' },
      { name: 'Slim Pack', dimensions: '3.9 × 2 × 0.75 in', price: 'Quote on request' },
      { name: 'Custom Blend', dimensions: 'Tailored to proprietary stick count', price: 'Quote on request' },
      { name: 'Special Edition', dimensions: 'Limited formats with custom sleeves', price: 'Consult compliance team' }
    ],
    galleryImages: [
      'Kraft-Cigarette-Box_gqxdr7',
      'Kraft-Cigarette-Box-2_gzm2wx',
      'Kraft-Cigarette-Box-3_nbh68t',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add foil inner liners, tear tape, and tax-stamp tabs',
      'Embed QR or NFC elements for track-and-trace programs',
      'Apply spot white, metallic foils, or embossed crests',
      'Design shoulder boxes or slip cases for premium lines',
      'Bundle with display cartons, cartons, or duty-free sleeves'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Cigarette Boxes',
      description: 'Balance compliance, barrier protection, and brand distinction with kraft cigarette packaging built for today’s regulations.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Panel Engineering', value: 'Dedicated space for warnings, UPCs, and tax stamps' },
        { label: 'Barrier Selection', value: 'Foil, EVOH, or plant-based barrier films for freshness' },
        { label: 'Security Features', value: 'Serialized labels, microtext, holograms, and tamper-evident seals' },
        { label: 'Premiumization', value: 'Soft-touch coatings, foil crests, or textured wraps' },
        { label: 'Accessories', value: 'Carton outers, display cases, and duty-free gift sleeves' },
        { label: 'Sustainability', value: 'FSC-certified boards, soy inks, recyclable construction' },
        { label: 'Compliance Support', value: 'Artwork proofing against regional regulatory frameworks' }
      ],
      footerNote: 'We streamline regulatory approvals while elevating the tactile feel of your kraft cigarette packaging.',
      supportTitle: 'Navigating compliance and brand upgrades?',
      supportDescription: 'Connect with our regulatory packaging specialists to align copy, warnings, and finishes.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review panel layouts, security elements, and barrier specs in real time.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive compliance checklists, dielines, and production timelines for each market.'
        }
      ]
    },
    ctaTitle: 'Ready to Refresh Your Kraft Cigarette Packaging?',
    ctaDescription: 'Share your compliance requirements and brand goals—we’ll engineer cartons that meet both.',
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
    specifications: [
      { label: 'Material Type', value: '16–24PT kraft SBS or duplex board' },
      { label: 'Structure', value: 'Wraparound bookend with tuck side closure' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, soft-touch, or spot UV' },
      { label: 'Printing', value: 'Full-color, white underprints, foil, or embossing' },
      { label: 'Dimensions', value: 'Custom width and spine depth per product set' },
      { label: 'Inserts', value: 'Die-cut trays, blister packs, or literature pockets' },
      { label: 'MOQ', value: 'Starts at 1000 units with drop ship programs available' }
    ],
    sizes: [
      { name: 'Accessory Kit', dimensions: '7 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Wellness Box', dimensions: '9 × 7 × 2.5 in', price: 'Quote on request' },
      { name: 'Learning Set', dimensions: '11 × 8 × 3 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored spines and closures for your SKU', price: 'Work with our designers' }
    ],
    galleryImages: [
      'Kraft-Bookend-Box_tlixms',
      'Kraft-Bookend-Box-2_jyspg3',
      'Kraft-Bookend-Box-3_ikjeez',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add magnetic closures, ribbon pulls, or elastic loops',
      'Include trays for hardware, literature, or sample vials',
      'Integrate windows, die-cut reveals, or lenticular panels',
      'Combine with companion sleeves or slipcases',
      'Embed NFC, QR, or AR elements for digital onboarding'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Bookend Boxes',
      description: 'Deliver a cover-to-cover unboxing journey with kraft bookend cartons tuned to your content.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Closure Experience', value: 'Magnetic snaps, soft-close flaps, or ribbon reveals' },
        { label: 'Interior Layout', value: 'Foam, pulp, or card inserts tailored to your components' },
        { label: 'Interactive Elements', value: 'Augmented reality triggers, QR onboarding, or hidden compartments' },
        { label: 'Finishes', value: 'Soft-touch, foil accents, blind emboss, or duplex wraps' },
        { label: 'Fulfillment', value: 'Hand assembly, kitting, and multi-channel distribution support' },
        { label: 'Sustainability', value: 'Mono-material designs, soy inks, and recyclable magnets options' },
        { label: 'Timeline', value: 'Prototyping in 10 days with production timed to launch cycles' }
      ],
      footerNote: 'We choreograph the opening sequence so each unboxing feels like turning the first page.',
      supportTitle: 'Building an onboarding or launch kit?',
      supportDescription: 'Collaborate with our creative and structural teams to build immersive kraft bookend boxes.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype inserts, closures, and interactive elements in real time.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, storyboards, and pricing plans for your program.'
        }
      ]
    },
    ctaTitle: 'Ready to Tell Your Story in Kraft?',
    ctaDescription: 'Share your product narrative— we’ll design kraft bookend boxes that bring it to life.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT kraft SBS or micro-flute corrugate' },
      { label: 'Structure', value: 'Dispenser carton with tear-away or tuck front' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, or gloss varnish for durability' },
      { label: 'Printing', value: 'Full exterior/interior print with spot finishes' },
      { label: 'Dimensions', value: 'Custom width, depth, and capacity aligned with SKU count' },
      { label: 'Accessories', value: 'Optional hang tabs, clip strips, or peg-ready feet' },
      { label: 'MOQ', value: 'Starts at 1000 units with rapid-turn display programs' }
    ],
    sizes: [
      { name: 'Stick Pack Dispenser', dimensions: '5 × 3 × 6 in', price: 'Quote on request' },
      { name: 'Sachet Display', dimensions: '7 × 4 × 8 in', price: 'Quote on request' },
      { name: 'Wipe Canister Holder', dimensions: '8 × 5 × 10 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered for your product count and configuration', price: 'Plan with display team' }
    ],
    galleryImages: [
      'Kraft-Dispenser-Box_mxxcxq',
      'Kraft-Dispenser-Box-2_i0xyix',
      'Kraft-Dispenser-Box-3_y48ynq',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add perforated tear strips or removable sleeves',
      'Integrate product information panels or coupons',
      'Combine with PDQ trays or clip strips for retail rollouts',
      'Apply moisture-resistant coatings for restroom or kitchen placement',
      'Bundle with master shippers for replenishment efficiency'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Dispenser Boxes',
      description: 'Deliver grab-and-go convenience with dispenser cartons tuned to your product and retail environment.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Dispensing Mechanism', value: 'Perforations, hinged doors, or recloseable flaps' },
        { label: 'Product Fit', value: 'Custom wells, channels, or guides for consistent dispensing' },
        { label: 'Brand Real Estate', value: 'Bold front panels, side callouts, and interior messaging' },
        { label: 'Durability', value: 'Laminates, AQ, or varnishes for high-touch environments' },
        { label: 'Deployment', value: 'Flat ship, shelf-ready, or pre-packed display options' },
        { label: 'Sustainability', value: 'Mono-material construction and recyclable coatings' },
        { label: 'Fulfillment', value: 'Co-packing, carton coding, and master shipper integration' }
      ],
      footerNote: 'We keep your dispensers sturdy, compliant, and easy for customers to interact with.',
      supportTitle: 'Launching samples or countertop displays?',
      supportDescription: 'Partner with our display specialists to build kraft dispensers that convert.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Run dispensing trials and structural reviews with our team.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, merchandising plans, and replenishment roadmaps.'
        }
      ]
    },
    ctaTitle: 'Ready for Counter-Ready Kraft Dispensers?',
    ctaDescription: 'Let’s design dispenser cartons that move product fast while looking on-brand.',
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
    specifications: [
      { label: 'Material Type', value: 'Kraft SBS laminated to inner support board or micro-flute' },
      { label: 'Structure', value: 'Double-wall frame tray with reinforced corners' },
      { label: 'Finish', value: 'Natural kraft, moisture barrier AQ, or anti-scuff varnish' },
      { label: 'Printing', value: 'High-impact graphics or minimal branding on kraft' },
      { label: 'Dimensions', value: 'Custom base, wall height, and frame width per application' },
      { label: 'Accessories', value: 'Lids, inserts, or slipcovers for additional protection' },
      { label: 'MOQ', value: 'Starts at 500 units with staging for regional deliveries' }
    ],
    sizes: [
      { name: 'Bakery Display', dimensions: '14 × 10 × 3 in', price: 'Quote on request' },
      { name: 'Produce Tray', dimensions: '16 × 12 × 4 in', price: 'Quote on request' },
      { name: 'Premium Gift', dimensions: '18 × 14 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered for weight, stack, and presentation goals', price: 'Work with engineering' }
    ],
    galleryImages: [
      'Kraft-Double-Wall-Frame-Tray_i8lzim',
      'Kraft-Double-Wall-Frame-Tray-2_navrvz',
      'Kraft-Double-Wall-Frame-Tray-3_utgimb',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add clear lids, film windows, or wraparound sleeves',
      'Integrate partitions, bottle guards, or protective cradles',
      'Apply grease-resistant or moisture barrier coatings',
      'Include die-cut handles or grip cut-outs for heavy loads',
      'Bundle with master shippers or stacking pallets'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Kraft Double Wall Trays',
      description: 'Deliver heavyweight performance and presentation with double-wall kraft trays tailored to your assortment.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Reinforcement', value: 'Dual wall thickness, support ribs, and corner locks' },
        { label: 'Protection', value: 'Barrier coatings, inserts, or moisture-safe liners' },
        { label: 'Branding', value: 'High-fidelity graphics, foil accents, or minimalist kraft aesthetics' },
        { label: 'Handling', value: 'Handle cut-outs, safety grips, or reinforced edges' },
        { label: 'Logistics', value: 'Stack testing, palletization planning, regional fulfillment' },
        { label: 'Sustainability', value: 'Recyclable mono-material builds with FSC certification' },
        { label: 'Support', value: 'Onsite trials, training, and assembly documentation' }
      ],
      footerNote: 'We engineer tray strength, appearance, and logistics to keep your goods protected and presentation-ready.',
      supportTitle: 'Need rugged trays for premium products?',
      supportDescription: 'Collaborate with our structural team to design trays that balance strength, sustainability, and shelf appeal.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Evaluate structural requirements and finishing in a live design session.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive performance test data, dielines, and supply plans.' 
        }
      ]
    },
    ctaTitle: 'Ready for Heavy-Duty Kraft Trays?',
    ctaDescription: 'Let us engineer kraft double-wall trays that stand up to transport, stacking, and display.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT SBS or micro-flute with printed wrap' },
      { label: 'Structure', value: 'Auto-lock base with tear-away or tuck-front display' },
      { label: 'Finish', value: 'Gloss UV, matte AQ, or soft-touch laminate' },
      { label: 'Printing', value: 'Full-color CMYK + spot Pantone or foil' },
      { label: 'Dimensions', value: 'Custom footprint sized to SKU count and depth' },
      { label: 'Header Options', value: 'Integrated risers, interchangeable toppers, or removable wings' },
      { label: 'MOQ', value: 'Starts at 500 display kits with multi-store fulfillment' }
    ],
    sizes: [
      { name: 'Counter Mini', dimensions: '7 × 5 × 5 in', price: 'Quote on request' },
      { name: 'Checkout Standard', dimensions: '9 × 6 × 7 in', price: 'Quote on request' },
      { name: 'Shelf Tier', dimensions: '12 × 8 × 8 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to product planogram', price: 'Collaborate with display team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add removable coupon pads or wobblers',
      'Design tiered inserts to keep products upright',
      'Include interchangeable headers for seasonal messaging',
      'Integrate clear windows or PET-free film for product visibility',
      'Bundle with master shippers for rapid store deployment'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Display Boxes',
      description: 'Create display-ready cartons that blend eye-catching graphics with retail practicality.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Display Configuration', value: 'Counter, shelf, peg-ready, or clip-strip compatible structures' },
        { label: 'Inventory Flow', value: 'Gravity-feed inserts, shelf dividers, or refill trays' },
        { label: 'Brand Amplification', value: 'Extended headers, curved panels, and dimensional add-ons' },
        { label: 'Durability', value: 'Reinforced corners, varnish hits, and scuff-resistant laminates' },
        { label: 'Deployment', value: 'Pre-packed cartons, kitted displays, and route-ready master cases' },
        { label: 'Sustainability', value: 'Mono-material builds and recyclable coatings' },
        { label: 'Speed to Market', value: 'Prototyping in 7 days with rollout scheduling support' }
      ],
      footerNote: 'We make sure every display ships flat, pops open fast, and performs in-store.',
      supportTitle: 'Planning a national merchandising push?',
      supportDescription: 'Align with our retail specialists to synchronize packaging, displays, and replenishment cycles.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review planograms, inserts, and branding live with a packaging strategist.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, mockups, and logistics plans tailored to your channel.'
        }
      ]
    },
    ctaTitle: 'Ready to Launch Retail Displays?',
    ctaDescription: 'Share your product lineup and we’ll craft cardboard displays that move inventory fast.',
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
    specifications: [
      { label: 'Material Type', value: '16–24PT SBS or C1S/C2S folding carton board' },
      { label: 'Structure', value: 'Reverse tuck, straight tuck, 1-2-3 lock, or auto-bottom' },
      { label: 'Finish', value: 'Gloss UV, matte AQ, soft-touch, or spot UV contrast' },
      { label: 'Printing', value: 'Offset CMYK, Pantone hits, foil, or emboss/deboss' },
      { label: 'Dimensions', value: 'Custom dielines engineered to product footprint' },
      { label: 'Security', value: 'Tear strips, glue seals, or tamper-evident tapes available' },
      { label: 'MOQ', value: 'Starts at 500 units; scales to automated runs of 100K+' }
    ],
    sizes: [
      { name: 'Shelf Mini', dimensions: '4 × 1.5 × 6 in', price: 'Quote on request' },
      { name: 'Retail Standard', dimensions: '6 × 2 × 8 in', price: 'Quote on request' },
      { name: 'Premium Tall', dimensions: '8 × 3 × 10 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Dialed to your automation and product needs', price: 'Consult production team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add foil, spot UV, or holographic accents',
      'Integrate windows, vents, or easy-open tear strips',
      'Include insert cards, blister trays, or molded pulp supports',
      'Bundle with retail-ready trays or shippers',
      'Pre-apply glue assists for high-speed filling lines'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Tuck End Boxes',
      description: 'Engineer folding cartons that glide through production and stand out on the shelf.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Production Alignment', value: 'Cartons dialed to your converting, filling, and sealing equipment' },
        { label: 'Shelf Presence', value: 'Die-cut windows, hang tabs, and structural add-ons for visibility' },
        { label: 'Branding', value: 'High-fidelity graphics, foil crests, textured coatings, or duplex color wraps' },
        { label: 'Protection', value: 'Barrier coatings, UV shields, or tamper-evident features' },
        { label: 'Documentation', value: 'Multi-language panels, compliance icons, and QR-enabled instructions' },
        { label: 'Fulfillment', value: 'Kitting, palletization plans, and JIT deliveries' },
        { label: 'Sustainability', value: 'Recycled board content, soy inks, and recyclable finishes' }
      ],
      footerNote: 'We streamline tooling, proofs, and production runs so your cartons launch on schedule.',
      supportTitle: 'Need to balance automation with aesthetics?',
      supportDescription: 'Work with our structural engineers to fine-tune tuck-end cartons for performance and polish.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review dielines, print treatments, and automation tolerances together.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive press proofs, pricing ladders, and compliance guides.'
        }
      ]
    },
    ctaTitle: 'Ready for Production-Ready Tuck Cartons?',
    ctaDescription: 'Send us your specs and we’ll craft cardboard tuck-end boxes that keep your line moving.',
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
    specifications: [
      { label: 'Material Type', value: 'Rigid board wrapped in printed or textured paper; premium folding carton options' },
      { label: 'Structure', value: 'Telescoping lid and base with optional neck or shoulder' },
      { label: 'Finish', value: 'Matte, gloss, linen, anti-scuff, or foil wraps' },
      { label: 'Printing', value: 'Full-color exterior/interior, foil, emboss, or spot UV' },
      { label: 'Dimensions', value: 'Custom width, depth, and lid height engineered to product' },
      { label: 'Inserts', value: 'Foam, pulp, SBS, or fabric-wrapped trays' },
      { label: 'MOQ', value: 'Starts at 500 sets with kitting and fulfillment support' }
    ],
    sizes: [
      { name: 'Accessory Lift', dimensions: '6 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Apparel Reveal', dimensions: '12 × 9 × 3 in', price: 'Quote on request' },
      { name: 'Premium Gift', dimensions: '14 × 12 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored to your assortment and merchandising strategy', price: 'Discuss with packaging stylist' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Employ duplex wraps or contrasting lid interiors',
      'Integrate ribbon pulls, magnetic closures, or belly bands',
      'Add personalized foil, numbering, or hang tags',
      'Line interiors with patterned, velvet, or metallic papers',
      'Bundle with sleeves or outer shippers for secure transport'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Lid Boxes',
      description: 'Design lift-off lid boxes that deliver a polished reveal aligned with your brand aesthetic.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Exterior Styling', value: 'Soft-touch, linen, kraft, or duplex color pairings' },
        { label: 'Interior Experience', value: 'Patterned liners, messaging panels, or accessory compartments' },
        { label: 'Closure Enhancements', value: 'Ribbon pulls, magnets, wax seals, or elastic loops' },
        { label: 'Insert Systems', value: 'Custom trays for apparel, electronics, or gift sets' },
        { label: 'Fulfillment', value: 'Pre-assembly, tissue wrapping, and drop-ship kitting' },
        { label: 'Sustainability', value: 'Recyclable wraps, FSC board, and water-based adhesives' },
        { label: 'Launch Support', value: 'Mood boards, sample approvals, and schedule planning' }
      ],
      footerNote: 'We choreograph every layer so your lid boxes become part of the unboxing keepsake.',
      supportTitle: 'Planning a seasonal collection or influencer send?',
      supportDescription: 'Work with our creative studio to compose lid boxes that feel bespoke at any scale.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Explore wrap, insert, and finish combinations with a packaging designer.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish mockups, and pricing tailored to your assortment.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate with Lid Boxes?',
    ctaDescription: 'Tell us about your product and we’ll craft cardboard lid boxes that delight from first glance to final reveal.',
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
    specifications: [
      { label: 'Material Type', value: '20–26PT SBS or kraft-back SBS with food-safe options' },
      { label: 'Structure', value: 'Lock-bottom or auto-bottom gable with carry handle' },
      { label: 'Finish', value: 'Natural kraft, matte, gloss, or anti-grease coatings' },
      { label: 'Printing', value: 'CMYK + Pantone, foil, or spot UV for emphasis' },
      { label: 'Dimensions', value: 'Custom footprint and handle profile tuned to product weight' },
      { label: 'Accessories', value: 'Interior dividers, inserts, or menu pockets' },
      { label: 'MOQ', value: 'Starts at 500 units; scalable to multi-location programs' }
    ],
    sizes: [
      { name: 'Treat Carrier', dimensions: '6 × 4 × 4 in', price: 'Quote on request' },
      { name: 'Gift Medium', dimensions: '9 × 6 × 6 in', price: 'Quote on request' },
      { name: 'Event Large', dimensions: '12 × 9 × 8 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Designed around contents and carrying comfort', price: 'Plan with our engineers' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add window cut-outs or transparent film for product visibility',
      'Include ribbon or rope handle upgrades',
      'Integrate tamper-evident seals or tear strips',
      'Bundle with inserts, collateral, or tasting cards',
      'Provide flat-pack or pre-assembled options based on fulfillment'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Gable Boxes',
      description: 'Craft gable boxes that pair portability with premium presentation.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Handle Comfort', value: 'Rounded die-cuts, reinforced grips, or ribbon-wrapped handles' },
        { label: 'Food Readiness', value: 'Grease-resistant linings, vents, and barrier films' },
        { label: 'Structure', value: 'Auto-bottom, lock-bottom, or reinforced base options' },
        { label: 'Brand Story', value: 'Interior print, menu pockets, or QR engagement' },
        { label: 'Protection', value: 'Dividers, bottle guards, or foam inserts' },
        { label: 'Sustainability', value: 'Recyclable coatings, compostable films, and FSC paperboard' },
        { label: 'Fulfillment', value: 'Kitting, assembly instructions, and drop-shipping support' }
      ],
      footerNote: 'We align structure, finishes, and fulfillment so every gable box travels beautifully.',
      supportTitle: 'Planning a tasting kit or VIP gifting program?',
      supportDescription: 'Partner with our team to tailor gable boxes that balance durability, branding, and logistics.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Co-develop handle styles, inserts, and finishes in a live session.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish decks, and pricing suited to your schedule.'
        }
      ]
    },
    ctaTitle: 'Ready to Deliver in Style?',
    ctaDescription: 'Tell us about your program and we’ll build cardboard gable boxes that make every handoff memorable.',
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
    specifications: [
      { label: 'Material Type', value: 'Food-grade SBS or clay-coated kraft with barrier options' },
      { label: 'Structure', value: 'Locking top with tuck front or automatic locking base' },
      { label: 'Finish', value: 'Natural, matte AQ, gloss UV, or anti-grease coatings' },
      { label: 'Printing', value: 'Food-safe inks, spot white, foil, or pattern floods' },
      { label: 'Dimensions', value: 'Custom sizes for single desserts up to multi-tier cakes' },
      { label: 'Accessories', value: 'Insert grids, cupcake trays, product cards, or ribbon slots' },
      { label: 'MOQ', value: 'Starts at 1000 units with reorder programs for bakeries' }
    ],
    sizes: [
      { name: 'Cupcake 4-Pack', dimensions: '6 × 6 × 4 in', price: 'Quote on request' },
      { name: 'Cake Standard', dimensions: '10 × 10 × 5 in', price: 'Quote on request' },
      { name: 'Tiered Celebration', dimensions: '14 × 14 × 7 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered around pan size and dessert height', price: 'Coordinate with bakery team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add clear windows or patterned cut-outs',
      'Integrate insert trays for cupcakes, cookies, or pastry assortments',
      'Include ribbon slots, sticker tabs, or brand seals',
      'Apply grease-resistant coatings or moisture barriers',
      'Bundle with catering trays or delivery shippers'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Bakery Boxes',
      description: 'Deliver desserts that arrive photo-perfect with bakery boxes designed around your menu.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Food Integrity', value: 'Grease barriers, vents, and inserts to protect delicate finishes' },
        { label: 'Customer Experience', value: 'Window reveals, interior messaging, and branded liners' },
        { label: 'Efficiency', value: 'Flat-packed cartons with quick-lock assembly for rush periods' },
        { label: 'Accessories', value: 'Cupcake grids, macaron channels, and tier stabilizers' },
        { label: 'Compliance', value: 'FDA-compliant coatings, allergen labeling, and traceability' },
        { label: 'Scaling', value: 'Forecasting, warehousing, and location-specific distribution' },
        { label: 'Seasonality', value: 'Limited-edition graphics and quick-change inserts' }
      ],
      footerNote: 'We keep your baked goods protected, beautiful, and easy to transport.',
      supportTitle: 'Need packaging for peak seasons?',
      supportDescription: 'Partner with our bakery specialists to align packaging, inserts, and fulfillment with your calendar.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype inserts, windows, and closures alongside our engineers.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, compliance documentation, and production timelines.'
        }
      ]
    },
    ctaTitle: 'Ready to Showcase Your Bakes?',
    ctaDescription: 'Share your dessert lineup and we’ll build bakery boxes that protect and delight.',
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
    specifications: [
      { label: 'Material Type', value: 'Rigid board or premium folding carton with wrapped sleeve' },
      { label: 'Structure', value: 'Slipcase sleeve with drawer tray or telescoping slider' },
      { label: 'Finish', value: 'Soft-touch, linen, matte, gloss, or foil wraps' },
      { label: 'Printing', value: 'Full exterior/interior, foil, emboss/deboss, or spot UV' },
      { label: 'Dimensions', value: 'Custom drawer depth and sleeve clearance built to product' },
      { label: 'Inserts', value: 'Foam, EVA, molded pulp, or SBS partitions' },
      { label: 'MOQ', value: 'Starts at 500 kits with hand finishing available' }
    ],
    sizes: [
      { name: 'Starter Kit', dimensions: '7 × 5 × 2 in', price: 'Quote on request' },
      { name: 'Premium Presentation', dimensions: '10 × 7 × 3 in', price: 'Quote on request' },
      { name: 'Collector Edition', dimensions: '12 × 9 × 3.5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to your SKUs and campaign goals', price: 'Work with structural design' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add magnetic or ribbon-assisted closures',
      'Create tiered or removable tray systems',
      'Integrate NFC tags, QR codes, or AR triggers',
      'Design variable sleeves for limited editions or personalization',
      'Bundle with mailer shippers or display stands'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Sleeve Boxes',
      description: 'Craft sliding sleeve experiences that guide recipients through your brand story.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Reveal Mechanics', value: 'Precision-fit sleeves, pull ribbons, magnets, or stepped trays' },
        { label: 'Interior Layout', value: 'Foam cradles, multi-level trays, or modular compartments' },
        { label: 'Interactivity', value: 'Embedded tech, hidden messages, or sequential storytelling panels' },
        { label: 'Finishing', value: 'Soft-touch lamination, spot varnish, foil, or duplex wraps' },
        { label: 'Fulfillment', value: 'Hand assembly, campaign-specific kitting, and drop ship lists' },
        { label: 'Sustainability', value: 'Mono-material builds, recycled board, and recyclable adhesives' },
        { label: 'Timeline', value: 'Prototyping in 10 days with coordinated launch schedules' }
      ],
      footerNote: 'We orchestrate every slide, reveal, and keepsake moment so your sleeve boxes resonate.',
      supportTitle: 'Planning a launch or onboarding kit?',
      supportDescription: 'Collaborate with our structural and creative teams to choreograph your unboxing journey.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype sleeve mechanics and insert layouts with a packaging engineer.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive storyboards, dielines, and costed configurations for your rollout.'
        }
      ]
    },
    ctaTitle: 'Ready to Slide into Memorable Packaging?',
    ctaDescription: 'Share your campaign goals and we’ll build cardboard sleeve boxes that captivate.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT SBS or micro-flute board for added rigidity' },
      { label: 'Structure', value: 'Dispenser carton with tear-away or hinged access panel' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, or varnish for high-touch durability' },
      { label: 'Printing', value: 'Full-color CMYK, Pantone hits, or metallic accents' },
      { label: 'Dimensions', value: 'Custom width, depth, and height tuned to product count' },
      { label: 'Accessories', value: 'Hang tabs, clip-strip hooks, or base risers' },
      { label: 'MOQ', value: 'Starts at 1000 units with replenishment programs available' }
    ],
    sizes: [
      { name: 'Stick Pack Dispenser', dimensions: '5 × 3 × 6 in', price: 'Quote on request' },
      { name: 'Sachet Tower', dimensions: '7 × 4 × 8 in', price: 'Quote on request' },
      { name: 'Counter Showcase', dimensions: '8 × 5 × 10 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Configured for your SKU and merchandising environment', price: 'Coordinate with display specialists' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add perforated coupons, sample cards, or tear-away messaging',
      'Design shelf-ready shipping cartons with tear-away fronts',
      'Integrate moisture-resistant laminates for restroom or kitchen use',
      'Bundle with PDQ trays or clip strips for broader rollouts',
      'Include reorder QR codes or loyalty messaging inside the lid'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Dispenser Boxes',
      description: 'Deliver a tidy, on-brand dispensing experience that boosts trials and sales.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Dispensing Style', value: 'Gravity-feed, pull-tab, or recloseable flap configurations' },
        { label: 'Product Fit', value: 'Channels, guides, or wells tuned to sachet or stick dimensions' },
        { label: 'Brand Canvas', value: 'Bold front panels, side storytelling, and interior reveals' },
        { label: 'Durability', value: 'Laminate options, reinforced corners, or double-wall upgrades' },
        { label: 'Deployment', value: 'Flat ship, shelf-ready, or pre-packed display solutions' },
        { label: 'Sustainability', value: 'Mono-material constructions with recyclable finishes' },
        { label: 'Fulfillment', value: 'Co-packing, coding, and master shipper integration' }
      ],
      footerNote: 'We make dispensing effortless so your products stay organized and accessible.',
      supportTitle: 'Rolling out samples or counter programs?',
      supportDescription: 'Partner with our merchandising team to engineer dispenser boxes that convert.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Test dispensing performance and structural integrity with our experts.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive design files, performance summaries, and rollout timelines.'
        }
      ]
    },
    ctaTitle: 'Ready to Dispense with Confidence?',
    ctaDescription: 'Tell us about your product and we’ll create dispenser boxes that perform all day long.',
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
    specifications: [
      { label: 'Material Type', value: '16–22PT SBS or reinforced board with optional lamination' },
      { label: 'Structure', value: 'Five-panel hanger with tuck, auto, or lock-bottom base' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, soft-touch, or anti-scuff varnish' },
      { label: 'Printing', value: 'High-impact CMYK, Pantone, foil, or raised UV elements' },
      { label: 'Dimensions', value: 'Hanger height and panel width customized per planogram' },
      { label: 'Security', value: 'Tamper labels, shrink bands, or RFID/UPC integration' },
      { label: 'MOQ', value: 'Starts at 1000 units with retailer-compliant packaging support' }
    ],
    sizes: [
      { name: 'Accessory Hanger', dimensions: '4 × 1.5 × 8 in', price: 'Quote on request' },
      { name: 'Electronics', dimensions: '6 × 2 × 10 in', price: 'Quote on request' },
      { name: 'Wellness', dimensions: '7 × 2.5 × 11 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to retailer specs and product weight', price: 'Collaborate with retail engineers' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add die-cut windows, spot varnish, or metallic accents',
      'Design tear-away demonstration panels or try-me flaps',
      'Integrate blister packs, inner trays, or literature pockets',
      'Use color-coded edges for quick merchandising and line extensions',
      'Bundle with PDQ trays or shipper displays for cohesive rollouts'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Hanger Cartons',
      description: 'Turn pegboard real estate into a powerful branded stage with engineered hanger cartons.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Retail Compliance', value: 'Hanger geometry, hole placement, and load ratings tuned to each retailer' },
        { label: 'Product Security', value: 'Tamper evident seals, zip ties, or shrink wrapping' },
        { label: 'Brand Impact', value: 'Foil, raised UV, and layered graphics to stop shoppers mid-aisle' },
        { label: 'Automation', value: 'Cartons compatible with auto cartoners or hand assembly' },
        { label: 'Documentation', value: 'Instruction panels, multi-language layouts, or QR-enabled guides' },
        { label: 'Logistics', value: 'Regional warehousing, staggered releases, and replenishment planning' },
        { label: 'Sustainability', value: 'Recyclable boards and coatings without compromising performance' }
      ],
      footerNote: 'We ensure every hanger carton meets retailer mandates while maximizing shelf presence.',
      supportTitle: 'Launching across multiple retail partners?',
      supportDescription: 'Work with our retail packaging consultants to harmonize specs, timelines, and merchandising.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review compliance checklists and structure options with an expert.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive retailer-specific dielines, certification support, and rollout calendars.'
        }
      ]
    },
    ctaTitle: 'Ready to Dominate the Pegboard?',
    ctaDescription: 'Send us your product specs and planograms—we’ll engineer hanger cartons that deliver impact.',
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
    specifications: [
      { label: 'Material Type', value: 'E-flute or B-flute corrugate with premium litho wrap' },
      { label: 'Structure', value: 'Roll end tuck top (RETT) or roll end front tuck (REFT)' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, soft-touch, or kraft wraps' },
      { label: 'Printing', value: 'Full-color litho, digital short run, or spot Pantone with varnish hits' },
      { label: 'Dimensions', value: 'Custom dielines tailored to product set and shipping class' },
      { label: 'Inserts', value: 'Foam, SBS, corrugate, or molded pulp trays' },
      { label: 'MOQ', value: 'Starts at 250 units with scaling for national programs' }
    ],
    sizes: [
      { name: 'Welcome Kit', dimensions: '9 × 7 × 3 in', price: 'Quote on request' },
      { name: 'Subscription Standard', dimensions: '11 × 9 × 4 in', price: 'Quote on request' },
      { name: 'VIP Drop', dimensions: '14 × 10 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to SKU assortment and DIM weight goals', price: 'Review with fulfillment team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add branded peel-and-seal closures and tear strips',
      'Integrate layered inserts, tissue, or swag compartments',
      'Employ duplex color schemes for exterior/interior contrast',
      'Include QR-triggered experiences or augmented reality',
      'Bundle with shipper cartons or fulfillment-ready kits'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Mailers',
      description: 'Design mailer boxes that survive the journey and deliver a social-worthy unboxing.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Transit Durability', value: 'Corrugate grade selection, inserts, and compression testing' },
        { label: 'Brand Reveal', value: 'Interior story panels, layered inserts, and finishing touches' },
        { label: 'Fulfillment Speed', value: 'Peel-and-seal tape, auto-locking flaps, or pre-fold options' },
        { label: 'Sustainability', value: 'FSC board, soy inks, and recyclable coatings included by default' },
        { label: 'Personalization', value: 'Variable data printing, sleeves, or limited-edition wraps' },
        { label: 'Operations', value: 'Inventory staging, kitting, and direct-to-customer shipping support' },
        { label: 'Analytics', value: 'Integrated QR/URL journeys for customer engagement tracking' }
      ],
      footerNote: 'We align packaging, fulfillment, and storytelling so every shipment feels curated.',
      supportTitle: 'Launching or scaling a subscription?',
      supportDescription: 'Partner with our DTC specialists to synchronize packaging specs with your fulfillment workflow.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Walk through dielines, inserts, and automation compatibility with our team.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive packaging roadmaps, cost tiers, and rollout schedules.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate Your Mailers?',
    ctaDescription: 'Tell us about your brand experience—we’ll deliver cardboard mailers that wow on arrival.',
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
    specifications: [
      { label: 'Material Type', value: 'Premium folding carton with double-wall locking design' },
      { label: 'Structure', value: 'Interlocking double-wall lid with reinforced base' },
      { label: 'Finish', value: 'Matte, gloss, linen, soft-touch, or foil wraps' },
      { label: 'Printing', value: 'CMYK, Pantone, foil stamping, emboss/deboss, or spot UV' },
      { label: 'Dimensions', value: 'Custom width, depth, and wall height engineered to payload' },
      { label: 'Inserts', value: 'Foam, EVA, pulp, or card partitions for product security' },
      { label: 'MOQ', value: 'Starts at 500 units with made-to-order finishing' }
    ],
    sizes: [
      { name: 'Premium Keepsake', dimensions: '8 × 8 × 4 in', price: 'Quote on request' },
      { name: 'Retail XL', dimensions: '12 × 10 × 5 in', price: 'Quote on request' },
      { name: 'Luxury Hamper', dimensions: '16 × 12 × 6 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to weight and presentation goals', price: 'Design with our luxury team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add interior mirrors, brand plates, or keepsake compartments',
      'Integrate magnets, ribbon pulls, or elastic closures',
      'Use duplex wraps or contrasting lid interiors',
      'Include custom inserts, flasks, or accessory trays',
      'Bundle with protective shippers or outer sleeves'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Double-Locked Lid Boxes',
      description: 'Deliver heavyweight presentation with double-wall lid boxes engineered to impress.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Integrity', value: 'Reinforced walls, locking tabs, and precision scoring' },
        { label: 'Sensory Impact', value: 'Soft-touch, linen, metallic, or duplex wraps for tactile delight' },
        { label: 'Interior Architecture', value: 'Tiered trays, accessory drawers, or specialized compartments' },
        { label: 'Closure Enhancements', value: 'Magnetic straps, ribbon pulls, or custom hardware' },
        { label: 'Fulfillment', value: 'Hand-assembled sets, white-glove kitting, and global drop shipping' },
        { label: 'Sustainability', value: 'Recyclable wraps, water-based adhesives, and FSC-certified board' },
        { label: 'Program Support', value: 'Material swatching, prototyping, and timeline management' }
      ],
      footerNote: 'We craft luxe experiences that deliver the heft and polish your products deserve.',
      supportTitle: 'Curating a premium release?',
      supportDescription: 'Collaborate with our luxury packaging specialists to fine-tune every element.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Explore material palettes, insert concepts, and finishing live with our team.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive renderings, BOMs, and production schedules customized to your launch.'
        }
      ]
    },
    ctaTitle: 'Ready for Elevated Lid Packaging?',
    ctaDescription: 'Share your vision and we’ll deliver double-wall lid boxes that embody your brand.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT SBS or laminated corrugate for added strength' },
      { label: 'Structure', value: 'Pre-glued side lock six corner tray' },
      { label: 'Finish', value: 'Matte, gloss, anti-grease, or soft-touch coatings' },
      { label: 'Printing', value: 'Full-coverage CMYK, Pantone accents, or spot UV details' },
      { label: 'Dimensions', value: 'Custom tray width, depth, and wall height tuned to product' },
      { label: 'Accessories', value: 'Lids, inserts, partitions, or belly bands' },
      { label: 'MOQ', value: 'Starts at 500 trays with automation-friendly packing options' }
    ],
    sizes: [
      { name: 'Bakery Tray', dimensions: '8 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Merch Display', dimensions: '10 × 8 × 3 in', price: 'Quote on request' },
      { name: 'Apparel Kit', dimensions: '12 × 10 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored to your product load and presentation goals', price: 'Consult with engineering' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add clear lids, film windows, or wraparound sleeves',
      'Integrate partitions, risers, or product cradles',
      'Apply grease-resistant coatings for food applications',
      'Include tear-away front panels for display conversions',
      'Bundle with shippers or pallet programs for distribution'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Side Lock Trays',
      description: 'Deliver trays that pop open quickly and stay sturdy on the shelf.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Tuning', value: 'Corner locks, wall angles, and base strength tuned to payload' },
        { label: 'Branding Canvas', value: 'Interior storytelling, loyalty messaging, or instruction panels' },
        { label: 'Protection', value: 'Dividers, foam, or pulp inserts for fragile items' },
        { label: 'Display Flexibility', value: 'Sleeves, belly bands, or nested tray solutions' },
        { label: 'Operations', value: 'Pre-folding, kitting, and pallet optimization' },
        { label: 'Sustainability', value: 'Recyclable boards and coatings, FSC chain-of-custody available' },
        { label: 'Testing', value: 'Compression, stack, and transit testing for peace of mind' }
      ],
      footerNote: 'We engineer trays for speed, strength, and standout branding.',
      supportTitle: 'Need trays that move from production to display seamlessly?',
      supportDescription: 'Collaborate with our structural engineers to design side lock trays that perform across environments.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Co-develop tray geometry, inserts, and finishing touches in real time.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive structural drawings, finish swatches, and logistics plans.'
        }
      ]
    },
    ctaTitle: 'Ready for Pop-Up Performance?',
    ctaDescription: 'Share your specs and we’ll deliver cardboard trays that assemble in seconds.',
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
    specifications: [
      { label: 'Material Type', value: '20–28PT folding carton or laminated corrugate' },
      { label: 'Structure', value: 'Regular six corner tray with glued corners' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, anti-scuff, or soft-touch coatings' },
      { label: 'Printing', value: 'Full-color outside and inside with optional foil or emboss' },
      { label: 'Dimensions', value: 'Custom base and wall height tailored to contents' },
      { label: 'Accessories', value: 'Lids, partitions, risers, or protective liners' },
      { label: 'MOQ', value: 'Starts at 500 units with national rollout scalability' }
    ],
    sizes: [
      { name: 'Retail Display', dimensions: '12 × 9 × 3 in', price: 'Quote on request' },
      { name: 'Service Tray', dimensions: '14 × 10 × 4 in', price: 'Quote on request' },
      { name: 'XL Merch', dimensions: '16 × 12 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to weight, product mix, and channel needs', price: 'Plan with our team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add handles, thumb notches, or tear-away fronts',
      'Integrate partitions or foam rails for organized displays',
      'Include barrier coatings for refrigerated or foodservice use',
      'Bundle with lids, sleeves, or shrink film for distribution',
      'Print instructions, recipes, or storytelling inside the tray'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Regular Six Corner Trays',
      description: 'Design trays that balance rapid assembly with on-brand merchandising.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Support', value: 'Reinforced walls, additional score lines, or laminated bases' },
        { label: 'Handling', value: 'Cut-out grips, handles, or finger notches for easy lift' },
        { label: 'Aesthetics', value: 'Interior graphics, foil accents, or layered branding' },
        { label: 'Protection', value: 'Inserts, partitions, or liners for fragile contents' },
        { label: 'Fulfillment', value: 'Pre-folded trays, assembly guides, and kitting services' },
        { label: 'Sustainability', value: 'Mono-material builds with recyclable or compostable finishes' },
        { label: 'Logistics', value: 'Stack testing, pallet plans, and regional warehousing' }
      ],
      footerNote: 'We ensure your trays stand tall from packing line to sales floor.',
      supportTitle: 'Need display trays that work overtime?',
      supportDescription: 'Collaborate with our packaging experts to craft six corner trays tuned to your program.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Evaluate tray construction, inserts, and finishing with our structural team.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, performance data, and rollout strategies.'
        }
      ]
    },
    ctaTitle: 'Ready to Stage Your Products in Style?',
    ctaDescription: 'Share your display goals—we’ll build cardboard trays that look great and work hard.',
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
    specifications: [
      { label: 'Material Type', value: '16–24PT SBS with optional foil or EVOH barrier laminations' },
      { label: 'Structure', value: 'Seal-end top with pre-glued auto-lock bottom' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, soft-touch, or anti-scuff varnish' },
      { label: 'Printing', value: 'CMYK, spot Pantone, foil, microtext, or UV security features' },
      { label: 'Dimensions', value: 'Engineered to product count, blister size, and cartoner tolerances' },
      { label: 'Security', value: 'Tamper seals, tear tapes, void labels, or glue-assisted closures' },
      { label: 'MOQ', value: 'Starts at 10K units with global compliance documentation' }
    ],
    sizes: [
      { name: 'Vial Carton', dimensions: '4 × 1.5 × 6 in', price: 'Quote on request' },
      { name: 'Supplement Carton', dimensions: '5 × 2 × 7 in', price: 'Quote on request' },
      { name: 'Cosmetic Tube', dimensions: '7 × 2 × 8 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Calibrated to machinery and regulatory panel layouts', price: 'Consult compliance team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Incorporate foil or holofoil security seals',
      'Add tear-string openings or recloseable zippers',
      'Include folded inserts, leaflets, or blister retention systems',
      'Apply scratch-resistant or moisture barrier coatings',
      'Bundle with shipper cartons or knock-down display trays'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Seal-End Cartons',
      description: 'Design seal-end cartons that meet regulatory, branding, and automation demands without compromise.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Automation Fit', value: 'Cartons tuned to erector, filler, and sealer specifications' },
        { label: 'Security Layers', value: 'Glue profiles, tear tapes, holograms, and serialized labels' },
        { label: 'Barrier Protection', value: 'Foil, PVDC, or aqueous barriers for sensitive formulations' },
        { label: 'Brand Elevation', value: 'Soft-touch, foil, raised UV, or duplex color wraps' },
        { label: 'Documentation', value: 'Panel layouts for multi-language inserts and regulatory icons' },
        { label: 'Supply Chain', value: 'Regional warehousing, JIT delivery, and forecast management' },
        { label: 'Testing', value: 'Line trials, drop testing, and climate conditioning support' }
      ],
      footerNote: 'We align structure, finish, and compliance so your seal-end cartons move smoothly from line to shelf.',
      supportTitle: 'Scaling a regulated product launch?',
      supportDescription: 'Partner with our automation specialists to dial in cartons for speed, safety, and brand presence.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review machinery specs, glue patterns, and compliance requirements together.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive technical drawings, validation data, and phased rollout plans.'
        }
      ]
    },
    ctaTitle: 'Ready for High-Speed Seal-End Cartons?',
    ctaDescription: 'Send us your product and line specs—we’ll engineer cartons that protect, comply, and present.',
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
    specifications: [
      { label: 'Material Type', value: '18–26PT SBS or laminated micro-flute for extra rigidity' },
      { label: 'Structure', value: 'Auto-bottom tray with open top or optional closers' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, soft-touch, or food-safe coatings' },
      { label: 'Printing', value: 'Full interior/exterior CMYK plus spot enhancements' },
      { label: 'Dimensions', value: 'Custom footprint, wall height, and flare angle per SKU' },
      { label: 'Accessories', value: 'Partitions, risers, product wells, or collateral pockets' },
      { label: 'MOQ', value: 'Starts at 500 trays with kitting and fulfillment services' }
    ],
    sizes: [
      { name: 'Cafe Tray', dimensions: '9 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Merch Medium', dimensions: '11 × 8 × 3 in', price: 'Quote on request' },
      { name: 'Event Display', dimensions: '13 × 9 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored tray profile and inserts to your assortment', price: 'Collaborate with our team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Integrate grease-resistant liners or PE-free films',
      'Add multi-compartment inserts or removable dividers',
      'Include belly bands, ribbons, or branded sleeves',
      'Design nested trays that stack for tiered presentations',
      'Provide assembly guides and fulfillment packs for multi-location rollouts'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Auto-Bottom Trays',
      description: 'Get trays that assemble fast, stay sturdy, and keep your brand at center stage.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Tray Geometry', value: 'Custom flare, depth, and base reinforcement tuned to contents' },
        { label: 'Insert Strategy', value: 'Partitions, channels, or foam rails to organize product' },
        { label: 'Brand Touches', value: 'Interior graphics, foil accents, or QR storytelling' },
        { label: 'Protection', value: 'Barrier coatings, liners, and corner guards for travel' },
        { label: 'Fulfillment', value: 'Pre-folding, kitting, and drop-ship staging included' },
        { label: 'Sustainability', value: 'Mono-material construction and recyclable finishes' },
        { label: 'Deployment', value: 'Bundled master shippers, pallet plans, and replenishment support' }
      ],
      footerNote: 'We design trays that keep pace with your service lines and campaign cadence.',
      supportTitle: 'Need fast-deploy trays for your program?',
      supportDescription: 'Work with our packaging specialists to tailor tray geometry, inserts, and logistics.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype tray structures and accessories in a collaborative session.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish recommendations, and fulfillment plans.'
        }
      ]
    },
    ctaTitle: 'Ready for Snap-Open Trays?',
    ctaDescription: 'Share your service or merchandising goals—we’ll craft auto-bottom trays that perform on cue.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT C1S/C2S board with optional textured wraps' },
      { label: 'Structure', value: 'Two-piece folding carton lid and base with tuck flaps' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, soft-touch, foil, or duplex color wraps' },
      { label: 'Printing', value: 'Full-color litho, spot Pantone, emboss/deboss, or foil' },
      { label: 'Dimensions', value: 'Custom lid depth and base clearance tailored to product' },
      { label: 'Inserts', value: 'Die-cut SBS, foam, or pulp platforms for product presentation' },
      { label: 'MOQ', value: 'Starts at 500 sets with fulfillment and kitting options' }
    ],
    sizes: [
      { name: 'Accessory Set', dimensions: '6 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Retail Medium', dimensions: '10 × 8 × 3 in', price: 'Quote on request' },
      { name: 'Limited Edition', dimensions: '12 × 10 × 4 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored to assortment, weight, and unboxing plan', price: 'Work with our design studio' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add sleeves, belly bands, or slipcovers for segmentation',
      'Integrate ribbon pulls, magnetic tabs, or adhesive seals',
      'Line interiors with patterned, velvet, or metallic papers',
      'Include literature pockets, sample wells, or accessory trays',
      'Bundle with protective shippers or e-commerce mailers'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Two Piece Cardboard Boxes',
      description: 'Deliver a polished reveal while keeping production nimble and sustainable.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Exterior Styling', value: 'Duplex colors, soft-touch, foil, or premium textures' },
        { label: 'Interior Experience', value: 'Platforms, compartments, and storytelling panels' },
        { label: 'Closure Enhancements', value: 'Ribbons, magnets, or seal tabs to secure the lid' },
        { label: 'Personalization', value: 'Variable data, foiled monograms, or insert swaps by SKU' },
        { label: 'Fulfillment', value: 'Pre-assembly, tissue wrapping, and drop-ship staging' },
        { label: 'Sustainability', value: 'Recycled board, water-based inks, and recyclable structures' },
        { label: 'Launch Planning', value: 'Material palettes, timeline management, and packaging playbooks' }
      ],
      footerNote: 'We choreograph every element so your two-piece boxes feel bespoke at any volume.',
      supportTitle: 'Planning a collection launch or VIP send?',
      supportDescription: 'Collaborate with our creative team to build two-piece cartons that elevate every reveal.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Explore wrap, insert, and closure combinations in a collaborative workshop.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, mockups, and pricing aligned to your rollout.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate with Two Piece Cartons?',
    ctaDescription: 'Tell us about your assortment and we’ll craft cardboard boxes that customers keep.',
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
    specifications: [
      { label: 'Material Type', value: 'High-density SBS with optional foil or moisture barrier liners' },
      { label: 'Structure', value: 'Hinge-lid flip-top with inner frame and crush-resistant sides' },
      { label: 'Finish', value: 'Soft-touch, matte, gloss, or specialty metallic coatings' },
      { label: 'Printing', value: 'High-fidelity CMYK, metallic inks, security microtext, or emboss' },
      { label: 'Dimensions', value: 'Custom pack depth and height for king, slim, or bespoke formats' },
      { label: 'Compliance', value: 'Warning panels, UPC, tax stamp windows, and serialization zones' },
      { label: 'MOQ', value: 'Starts at 25K units with multi-region regulatory support' }
    ],
    sizes: [
      { name: 'King Size', dimensions: '3.5 × 2.2 × 0.9 in', price: 'Quote on request' },
      { name: 'Slim Pack', dimensions: '3.9 × 2 × 0.75 in', price: 'Quote on request' },
      { name: 'Limited Edition', dimensions: 'Custom collector profile', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored to stick count, insert style, and overwrap', price: 'Coordinate with compliance team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add foil crests, embossing, or tactile varnish for premium tiers',
      'Integrate QR or NFC tags for authentication and loyalty programs',
      'Offer perforated promo panels or collectible sleeves',
      'Develop duty-free slipcases and gift-ready outer wraps',
      'Bundle with display cartons or carton shippers for retail execution'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Cigarette Boxes',
      description: 'Meet regulatory obligations while delivering brand distinction in every pack.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Regulatory Layout', value: 'Panel engineering for local warnings, pictograms, and tax stamps' },
        { label: 'Barrier Planning', value: 'Moisture and aroma barriers, foil inner liners, or sealed tear tape' },
        { label: 'Security Features', value: 'Serialized labels, holograms, tamper stripes, or UV inks' },
        { label: 'Premium Upgrades', value: 'Soft-touch, high-build varnish, foil, or duplex wraps' },
        { label: 'Accessories', value: 'Carton outers, display trays, and travel sleeves' },
        { label: 'Sustainability', value: 'FSC-certified board and recyclable finishes upon request' },
        { label: 'Compliance Support', value: 'Artwork proofing, regulatory reviews, and documentation packs' }
      ],
      footerNote: 'We streamline design, compliance, and production so your packs stay consistent across markets.',
      supportTitle: 'Balancing compliance with brand storytelling?',
      supportDescription: 'Collaborate with our regulatory packaging team to align warnings, finishes, and supply chain.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review panel layouts, security options, and finishing techniques with our specialists.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, compliance checklists, and pricing for multi-market deployments.'
        }
      ]
    },
    ctaTitle: 'Ready to Refresh Your Cigarette Packaging?',
    ctaDescription: 'Share your regulatory landscape and brand goals—we’ll craft cartons that deliver both.',
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
    specifications: [
      { label: 'Material Type', value: '18–24PT SBS with optional wrapped boards for added rigidity' },
      { label: 'Structure', value: 'Bookend wrap with side closures and tray or platform interior' },
      { label: 'Finish', value: 'Soft-touch, linen, gloss, matte, or textured laminations' },
      { label: 'Printing', value: 'Full-color litho, foil, emboss/deboss, or spot UV' },
      { label: 'Dimensions', value: 'Custom spine depth and panel width built to your content' },
      { label: 'Inserts', value: 'Foam, pulp, SBS, or fabric trays to stage products and literature' },
      { label: 'MOQ', value: 'Starts at 500 kits with hand-assembly and drop-ship support' }
    ],
    sizes: [
      { name: 'Accessory Book', dimensions: '8 × 6 × 2 in', price: 'Quote on request' },
      { name: 'Wellness Journal', dimensions: '10 × 7 × 2.5 in', price: 'Quote on request' },
      { name: 'Launch Compendium', dimensions: '12 × 9 × 3.5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to your narrative flow and component mix', price: 'Plan with our experience team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add magnetic closures, ribbon pulls, or elastic loops',
      'Integrate compartments for literature, devices, or samples',
      'Include augmented reality markers or NFC tags for digital content',
      'Design split-color exteriors or foil titles for spine impact',
      'Bundle with protective slipcases or retail display stands'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Cardboard Bookend Boxes',
      description: 'Deliver immersive storytelling with book-style packaging engineered around your content.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Narrative Flow', value: 'Panels sequenced for onboarding, education, or product showcase' },
        { label: 'Interior Design', value: 'Tiered trays, hidden compartments, or removable inserts' },
        { label: 'Interactivity', value: 'QR, NFC, lighting, or audio triggers embedded in the cover' },
        { label: 'Finishing Touches', value: 'Foil titles, linen textures, or spot gloss details' },
        { label: 'Fulfillment', value: 'Hand assembly, collateral loading, and drop-ship logistics' },
        { label: 'Sustainability', value: 'Recycled boards, water-based adhesives, and mono-material design' },
        { label: 'Launch Support', value: 'Storyboards, mockups, and production scheduling assistance' }
      ],
      footerNote: 'We orchestrate materials, inserts, and finishing so every page-turn moment feels intentional.',
      supportTitle: 'Planning an onboarding or influencer kit?',
      supportDescription: 'Collaborate with our creative team to bring your narrative to life in bookend packaging.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype inserts, closures, and storytelling panels with our specialists.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, storyboards, and pricing for your full experience.'
        }
      ]
    },
    ctaTitle: 'Ready to Tell Your Story in Cardboard?',
    ctaDescription: 'Share your content plan—we’ll craft bookend boxes that engage from the first touch.',
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
    specifications: [
      { label: 'Material Type', value: 'Laminated SBS/corrugate hybrids or heavy-gauge folding carton' },
      { label: 'Structure', value: 'Double-wall frame tray with reinforced corners and walls' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, anti-scuff, or moisture-resistant coatings' },
      { label: 'Printing', value: 'High-impact exterior and interior graphics with optional foil' },
      { label: 'Dimensions', value: 'Custom base, wall height, and frame width tuned to product weight' },
      { label: 'Accessories', value: 'Lids, partitions, bottle guards, or protective liners' },
      { label: 'MOQ', value: 'Starts at 500 units with palletization and logistics planning' }
    ],
    sizes: [
      { name: 'Bakery Display', dimensions: '14 × 10 × 3 in', price: 'Quote on request' },
      { name: 'Produce Carrier', dimensions: '16 × 12 × 4 in', price: 'Quote on request' },
      { name: 'Premium Gift', dimensions: '18 × 14 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to stacking, weight, and environmental requirements', price: 'Work with our engineering team' }
    ],
    galleryImages: [
      'Mailer-Box_1_ujqhhx',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add die-cut handles, finger notches, or reinforced grip areas',
      'Integrate moisture-resistant liners or absorbent pads',
      'Include partitions, bottle braces, or molded pulp inserts',
      'Bundle with matching lids, sleeves, or shrink films',
      'Coordinate master shippers and pallet patterns for national rollout'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Double Wall Trays',
      description: 'Deliver heavyweight performance and elevated presentation with frame trays tuned to your program.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Reinforcement', value: 'Dual walls, corner locks, and frame widths tailored to load' },
        { label: 'Protection', value: 'Barrier coatings, liners, and insert solutions for delicate goods' },
        { label: 'Branding', value: 'Edge-to-edge graphics, foil logos, or minimalist kraft aesthetics' },
        { label: 'Handling', value: 'Grip cut-outs, ergonomic edges, or reinforced handles' },
        { label: 'Logistics', value: 'Stack testing, pallet layouts, and cold-chain compatibility' },
        { label: 'Sustainability', value: 'Recyclable materials and water-based finishes' },
        { label: 'Support', value: 'On-site trials, packaging guides, and replenishment programs' }
      ],
      footerNote: 'We engineer trays that perform in the warehouse, cooler, and on display.',
      supportTitle: 'Need rugged trays for premium assortments?',
      supportDescription: 'Partner with our structural engineers to design trays that balance strength, sustainability, and shelf appeal.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Evaluate load requirements, inserts, and finishing options with our team.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive structural data, dielines, and logistics plans for your rollout.'
        }
      ]
    },
    ctaTitle: 'Ready for Heavy-Duty Frame Trays?',
    ctaDescription: 'Tell us about your product mix—we’ll build double-wall trays that stay strong and on-brand.',
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
    specifications: [
      { label: 'Material Type', value: 'E, B, or EB-flute corrugate with premium litho wraps' },
      { label: 'Structure', value: 'Roll end tuck top (RETT) or roll end front tuck (REFT)' },
      { label: 'Finish', value: 'Matte AQ, gloss UV, soft-touch, or kraft exterior' },
      { label: 'Printing', value: 'Full-color litho-laminate, direct flexo, or digital short runs' },
      { label: 'Dimensions', value: 'Engineered to SKU set and carrier dimensional weight tiers' },
      { label: 'Inserts', value: 'Corrugate, SBS, foam, or molded pulp trays for secure staging' },
      { label: 'MOQ', value: 'Starts at 250 units with scale to 100K+ for national programs' }
    ],
    sizes: [
      { name: 'Starter Kit', dimensions: '10 × 7 × 3 in', price: 'Quote on request' },
      { name: 'DTC Standard', dimensions: '12 × 9 × 4 in', price: 'Quote on request' },
      { name: 'Premium Drop', dimensions: '15 × 10 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored to SKU arrangement and fulfillment flow', price: 'Review with packaging engineer' }
    ],
    galleryImages: [
      'Mailer-Box-3_oct2ws',
      'products-box-img_x8vu4b',
      'Box-5_pdb8xw',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add magnetic closures, peel-and-seal tape, or reinforced tear strips',
      'Integrate branded tissue, sleeves, or layered inserts for story-driven reveals',
      'Embed QR codes, AR triggers, or NFC tags for post-unboxing engagement',
      'Bundle with master shippers or fulfillment-ready kitting solutions',
      'Offer personalization via variable-data sleeves or sticker packs'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Mailer Boxes',
      description: 'Deliver durable mailers that keep products safe, on brand, and ready for social sharing.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Box Strength', value: 'Flute selection, board grade, and compression testing aligned to your products' },
        { label: 'Brand Reveal', value: 'Full interior graphics, layered inserts, and branded sealing moments' },
        { label: 'Fulfillment Speed', value: 'Auto-locking closures, peel-and-seal tape, and pre-fold options' },
        { label: 'Sustainability', value: 'FSC-certified board, water-based inks, and recyclable coatings' },
        { label: 'Automation', value: 'Carton tolerances tuned for auto-erectors and pack stations' },
        { label: 'Personalization', value: 'Edition-specific sleeves, printed dust covers, or gift notes' },
        { label: 'Logistics', value: 'Inventory staging, drop shipping, and replenishment planning' }
      ],
      footerNote: 'We align structure, storytelling, and operations so every mailer arrives flawless.',
      supportTitle: 'Launching a new subscription or influencer kit?',
      supportDescription: 'Partner with our DTC specialists to synchronize mailer specs with your fulfillment roadmap.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review dielines, inserts, and automation compatibility in a working session.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive packaging roadmaps, cost tiers, and rollout schedules tailored to your growth plan.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate Your Corrugated Mailers?',
    ctaDescription: 'Share your SKU mix and unboxing vision—we’ll engineer corrugated mailers that wow from doorstep to reveal.',
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
    specifications: [
      { label: 'Material Type', value: 'E or EB-flute corrugate with food-safe barrier options' },
      { label: 'Structure', value: 'Auto-lock or snap-lock base with reinforced die-cut handle' },
      { label: 'Finish', value: 'Kraft, matte AQ, gloss UV, or soft-touch film' },
      { label: 'Printing', value: 'Full-color litho, spot Pantone, or direct flexo' },
      { label: 'Dimensions', value: 'Custom width, depth, and roof pitch tailored to contents' },
      { label: 'Accessories', value: 'Dividers, beverage cradles, utensil pockets, or menu sleeves' },
      { label: 'MOQ', value: 'Starts at 500 units with multi-location fulfillment support' }
    ],
    sizes: [
      { name: 'Food Carrier', dimensions: '9 × 6 × 7 in', price: 'Quote on request' },
      { name: 'Corporate Gift', dimensions: '12 × 8 × 9 in', price: 'Quote on request' },
      { name: 'Experiential Kit', dimensions: '14 × 10 × 10 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to weight, product mix, and delivery method', price: 'Plan with packaging strategist' }
    ],
    galleryImages: [
      'Box-6_vm3fmh',
      'Mailer-Box-3_oct2ws',
      'products-box-img_x8vu4b',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add ribbon closures, belly bands, or branded tape',
      'Integrate venting or window panels for culinary applications',
      'Include reusable keepsake trays or nested accessory boxes',
      'Bundle with shipper cartons for direct-to-customer delivery',
      'Provide assembly guides and kitting solutions for event rollouts'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Gable Boxes',
      description: 'Design corrugated carriers that balance durability, aesthetics, and operational efficiency.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Handle Comfort', value: 'Reinforced grips, rounded die-cuts, or wrapped handles' },
        { label: 'Food Readiness', value: 'Grease-resistant linings, vents, and moisture guards' },
        { label: 'Brand Experience', value: 'Interior storytelling, QR activations, or personalized inserts' },
        { label: 'Protection', value: 'Rigid dividers, bottle guards, or foam supports' },
        { label: 'Fulfillment', value: 'Flat-pack supply, pre-assembly, or fully kitted delivery' },
        { label: 'Sustainability', value: 'Compostable liners, recyclable coatings, and FSC-certified board' },
        { label: 'Deployment', value: 'Drop shipping, regional staging, and replenishment programs' }
      ],
      footerNote: 'We orchestrate design, manufacturing, and logistics so every gable box arrives service-ready.',
      supportTitle: 'Planning a tasting, event, or corporate program?',
      supportDescription: 'Work with our packaging engineers to craft gable boxes tailored to your experience.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype handle strength, inserts, and finishes in a collaborative session.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish decks, and cost modeling for your rollout.'
        }
      ]
    },
    ctaTitle: 'Ready to Carry Your Brand in Corrugate?',
    ctaDescription: 'Share your service or gifting plans—we’ll build corrugated gable boxes that travel beautifully.',
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
    specifications: [
      { label: 'Material Type', value: 'Double-wall corrugate with premium printed wraps' },
      { label: 'Structure', value: 'Interlocking lid and base with reinforced walls' },
      { label: 'Finish', value: 'Matte, gloss, soft-touch, kraft, or luxury textured films' },
      { label: 'Printing', value: 'Litho-lam, foil, emboss/deboss, or spot UV hits' },
      { label: 'Dimensions', value: 'Custom width, depth, and wall thickness tailored to payload' },
      { label: 'Inserts', value: 'Foam, molded pulp, SBS trays, or fabric-wrapped platforms' },
      { label: 'MOQ', value: 'Starts at 500 units with specialty finishing available' }
    ],
    sizes: [
      { name: 'Premium Keepsake', dimensions: '10 × 8 × 4 in', price: 'Quote on request' },
      { name: 'Gourmet Hamper', dimensions: '14 × 12 × 5 in', price: 'Quote on request' },
      { name: 'Luxury Electronics', dimensions: '16 × 12 × 6 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to product weight and presentation goals', price: 'Consult luxury packaging team' }
    ],
    galleryImages: [
      'shipping-box_jyysru',
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'Mailer-Box-3_oct2ws'
    ],
    customizationOptions: [
      'Add interior mirrors, accessory drawers, or hidden compartments',
      'Integrate magnetic straps, ribbon pulls, or snap closures',
      'Use contrasting lid/base wraps or duplex color schemes',
      'Bundle with protective shippers, foam cradles, or presentation trays',
      'Provide pre-assembly, kitting, and white-glove fulfillment programs'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Lid Boxes',
      description: 'Deliver keepsake packaging that blends corrugated strength with premium finishing.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Integrity', value: 'Double-wall engineering, reinforced corners, and precision scoring' },
        { label: 'Luxurious Touches', value: 'Soft-touch wraps, foil crests, or embossed emblems' },
        { label: 'Interior Architecture', value: 'Tiered inserts, product platforms, or accessory drawers' },
        { label: 'Personalization', value: 'Variable data sleeves, engraved plaques, or numbered editions' },
        { label: 'Sustainability', value: 'Recycled board, recyclable finishes, and mono-material insert strategies' },
        { label: 'Fulfillment', value: 'Hand assembly, QC checks, and drop-ship logistics' },
        { label: 'Launch Support', value: 'Sampling, production scheduling, and inventory staging' }
      ],
      footerNote: 'We turn corrugated into an elevated portfolio piece that protects and impresses.',
      supportTitle: 'Building a premium gifting or launch program?',
      supportDescription: 'Collaborate with our luxury packaging team to orchestrate every detail from structure to delivery.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Explore wrap, insert, and closure combinations with our structural designers.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive mood boards, dielines, and pricing ladders aligned to your rollout.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate Heavyweight Packaging?',
    ctaDescription: 'Share your product details—we’ll engineer corrugated lid boxes that feel as premium as they perform.',
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
    specifications: [
      { label: 'Material Type', value: 'E or B-flute corrugate with liner options for barrier performance' },
      { label: 'Structure', value: 'Seal-end top with auto-lock bottom and reinforced sidewalls' },
      { label: 'Finish', value: 'Kraft, matte AQ, gloss UV, or laminated wraps' },
      { label: 'Printing', value: 'High-fidelity litho, direct flexo, or hybrid digital' },
      { label: 'Dimensions', value: 'Engineered to product weight and machinery tolerances' },
      { label: 'Security', value: 'Glue seals, shrink wraps, void labels, and serialized codes' },
      { label: 'MOQ', value: 'Starts at 5K units with compliance documentation support' }
    ],
    sizes: [
      { name: 'Pantry SKU', dimensions: '5 × 3 × 7 in', price: 'Quote on request' },
      { name: 'Household Tall', dimensions: '7 × 3 × 9 in', price: 'Quote on request' },
      { name: 'Industrial Pack', dimensions: '9 × 4 × 11 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored to production equipment and freight requirements', price: 'Review with automation team' }
    ],
    galleryImages: [
      'Box-5_pdb8xw',
      'shipping-box_jyysru',
      'Box-6_vm3fmh',
      'Mailer-Box-3_oct2ws'
    ],
    customizationOptions: [
      'Integrate tear strips, recloseable zippers, or spout inserts',
      'Add holographic or UV security elements for authentication',
      'Include folded inserts, sachet channels, or blister retainers',
      'Pair cartons with shelf-ready displays or master cases',
      'Offer pallet pattern planning and regional warehousing programs'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Seal-End Cartons',
      description: 'Engineer cartons that keep pace with automation while safeguarding brand reputation.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Automation Alignment', value: 'Cartons tuned to erectors, fillers, sealers, and case packers' },
        { label: 'Barrier Engineering', value: 'Grease, moisture, or UV protection layered into board selection' },
        { label: 'Security & Compliance', value: 'Glue profiles, tear evidence, regulatory panel layouts, and serialization' },
        { label: 'Brand Expression', value: 'High-impact graphics, foil, or tactile varnishes on corrugate' },
        { label: 'Fulfillment', value: 'Kitting, palletization plans, and JIT inventory management' },
        { label: 'Sustainability', value: 'Recycled liners, soy inks, and recyclable coatings' },
        { label: 'Testing', value: 'Line trials, drop tests, and climate conditioning documented' }
      ],
      footerNote: 'We keep your seal-end cartons running fast, staying compliant, and looking premium.',
      supportTitle: 'Scaling a corrugated seal-end program?',
      supportDescription: 'Partner with our engineers to align specifications, testing, and rollout schedules.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Audit current packaging, review glue patterns, and optimize carton design together.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive die drawings, validation reports, and logistics recommendations.'
        }
      ]
    },
    ctaTitle: 'Ready for High-Speed Corrugated Cartons?',
    ctaDescription: 'Send your line specs and let us craft seal-end packaging that performs under pressure.',
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
    specifications: [
      { label: 'Material Type', value: 'E or B-flute corrugate with optional barrier coatings' },
      { label: 'Structure', value: 'Auto-bottom tray with open top or optional locking lid' },
      { label: 'Finish', value: 'Natural kraft, matte AQ, gloss UV, or printed wraps' },
      { label: 'Printing', value: 'Full-color litho, direct flexo, or hybrid digital' },
      { label: 'Dimensions', value: 'Custom footprint, wall height, and flare tuned to product' },
      { label: 'Accessories', value: 'Partitions, risers, product wells, or collateral slots' },
      { label: 'MOQ', value: 'Starts at 500 trays with fulfillment services available' }
    ],
    sizes: [
      { name: 'Meal Kit', dimensions: '11 × 8 × 3 in', price: 'Quote on request' },
      { name: 'Retail Display', dimensions: '13 × 9 × 4 in', price: 'Quote on request' },
      { name: 'Warehouse Tray', dimensions: '15 × 10 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to workflow, weight, and branding needs', price: 'Consult fulfillment team' }
    ],
    galleryImages: [
      'shipping-box_jyysru',
      'Box-6_vm3fmh',
      'Mailer-Box-3_oct2ws',
      'products-box-img_x8vu4b'
    ],
    customizationOptions: [
      'Add grease-resistant liners, PE-free films, or absorbent pads',
      'Design nested trays or modular inserts for multi-component kits',
      'Include belly bands, sleeves, or lids for premium presentation',
      'Pre-fold trays for immediate use on production lines',
      'Bundle with master shippers or pallet programs for distribution'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Auto-Bottom Trays',
      description: 'Keep operations moving with trays built for speed, stability, and on-brand presentation.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Geometry', value: 'Flare angles, wall height, and reinforcement tuned to product weights' },
        { label: 'Insert Strategy', value: 'Partitions, utensil channels, or accessory compartments' },
        { label: 'Branding', value: 'Bold exterior graphics, interior storytelling, or QR engagement' },
        { label: 'Protection', value: 'Barrier coatings, liners, or moisture guards for culinary programs' },
        { label: 'Fulfillment', value: 'Pre-folding, kitting, and drop-ship arrangements' },
        { label: 'Sustainability', value: 'Recyclable corrugate and water-based inks as standard' },
        { label: 'Deployment', value: 'Pallet planning, replenishment, and co-packer coordination' }
      ],
      footerNote: 'We make sure your trays pop open fast and stand strong through fulfillment and display.',
      supportTitle: 'Launching a kit or merchandising refresh?',
      supportDescription: 'Work with our operations team to tailor corrugated trays that keep pace with your workflow.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype tray structures and inserts alongside our engineers.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish suggestions, and production timelines aligned to your launch.'
        }
      ]
    },
    ctaTitle: 'Ready for Corrugated Trays that Fly?',
    ctaDescription: 'Share your throughput targets—we’ll craft auto-bottom trays that keep operations humming.',
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
    specifications: [
      { label: 'Material Type', value: 'E or B-flute corrugate with litho-laminated wraps' },
      { label: 'Structure', value: 'Two-piece lid and base with optional neck, shoulder, or locking tabs' },
      { label: 'Finish', value: 'Matte, gloss, soft-touch, kraft, or specialty textured laminations' },
      { label: 'Printing', value: 'Full-color litho, foil, emboss/deboss, or spot UV' },
      { label: 'Dimensions', value: 'Custom lid depth and base clearance tuned to product presentation' },
      { label: 'Inserts', value: 'Foam, molded pulp, corrugate platforms, or fabric-wrapped trays' },
      { label: 'MOQ', value: 'Starts at 500 sets with premium finishing available' }
    ],
    sizes: [
      { name: 'Premium Kit', dimensions: '12 × 9 × 4 in', price: 'Quote on request' },
      { name: 'Luxury Hamper', dimensions: '15 × 11 × 5 in', price: 'Quote on request' },
      { name: 'Collector Edition', dimensions: '18 × 12 × 6 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Tailored to assortment, weight, and unboxing narrative', price: 'Coordinate with creative studio' }
    ],
    galleryImages: [
      'Box-5_pdb8xw',
      'Box-6_vm3fmh',
      'Mailer-Box-3_oct2ws',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add ribbon pulls, magnetic straps, or belly bands',
      'Integrate split-color wraps, foil crests, or textured papers',
      'Include interior story panels, product guides, or tasting notes',
      'Bundle with outer shippers, slipcovers, or dust covers',
      'Offer kitting, tissue wrapping, and drop-ship fulfillment services'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Two Piece Boxes',
      description: 'Deliver premium unboxing moments backed by corrugated durability.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Exterior Finish', value: 'Soft-touch, linen, kraft, or high-gloss wraps with specialty accents' },
        { label: 'Interior Stage', value: 'Custom inserts, platforms, and storytelling panels for each SKU' },
        { label: 'Closure Enhancements', value: 'Ribbons, magnets, belly bands, or tamper seals' },
        { label: 'Personalization', value: 'Variable sleeves, foiled initials, or edition numbering' },
        { label: 'Fulfillment', value: 'Pre-assembly, pack-out, and drop-ship logistics across regions' },
        { label: 'Sustainability', value: 'Recycled corrugate, water-based inks, and recyclable inserts' },
        { label: 'Launch Planning', value: 'Sample approvals, production scheduling, and inventory staging' }
      ],
      footerNote: 'We deliver corrugated keepsake boxes that feel luxurious and arrive in perfect condition.',
      supportTitle: 'Launching a premium kit or subscription?',
      supportDescription: 'Collaborate with our creative and operations teams to build corrugated two-piece packaging that scales.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Review wrap options, insert concepts, and fulfillment workflows together.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish mockups, and pricing ladders tailored to your rollout.'
        }
      ]
    },
    ctaTitle: 'Ready to Elevate with Corrugated Lids?',
    ctaDescription: 'Share your product story—we’ll craft two-piece boxes that customers keep long after unboxing.',
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
    specifications: [
      { label: 'Material Type', value: 'EB or double-wall corrugate with premium wraps' },
      { label: 'Structure', value: 'Briefcase form factor with reinforced handle and locking front flap' },
      { label: 'Finish', value: 'Matte, gloss, soft-touch, or textured laminations' },
      { label: 'Printing', value: 'Full-color litho, foil, spot UV, or duplex color schemes' },
      { label: 'Dimensions', value: 'Custom width, depth, and spine width to suit contents' },
      { label: 'Inserts', value: 'Foam, EVA, molded pulp, or SBS trays for kit organization' },
      { label: 'MOQ', value: 'Starts at 250 kits with kitting and fulfillment available' }
    ],
    sizes: [
      { name: 'Sales Kit', dimensions: '14 × 10 × 3 in', price: 'Quote on request' },
      { name: 'Demo Case', dimensions: '16 × 12 × 4 in', price: 'Quote on request' },
      { name: 'Executive Edition', dimensions: '18 × 13 × 5 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to component layout and travel requirements', price: 'Collaborate with kit designer' }
    ],
    galleryImages: [
      'Box-6_vm3fmh',
      'Mailer-Box-3_oct2ws',
      'Box-5_pdb8xw',
      'shipping-box_jyysru'
    ],
    customizationOptions: [
      'Add magnetic locks, snap closures, or tamper-evident seals',
      'Integrate interior pockets, literature holders, or card slots',
      'Include LED lighting, sound modules, or digital screens',
      'Bundle with outer shippers, palettes, or stands for event staging',
      'Offer personalized nameplates, foil monograms, or serialized badges'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Corrugated Briefcase Kits',
      description: 'Deliver a professional-grade presentation case that travels safely and leaves a lasting impression.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Exterior Styling', value: 'Soft-touch wraps, duplex color blocking, or metallic finishes' },
        { label: 'Interior Layout', value: 'Foam cradles, removable trays, or modular compartments' },
        { label: 'Security', value: 'Magnetic locks, tamper seals, or coded closures' },
        { label: 'Interactive Elements', value: 'LED reveals, audio modules, or QR journeys' },
        { label: 'Fulfillment', value: 'Hand assembly, collateral loading, and direct shipment to recipients' },
        { label: 'Sustainability', value: 'Recyclable corrugate, soy inks, and reusable insert strategies' },
        { label: 'Launch Support', value: 'Storyboards, mockups, and production scheduling aligned to events' }
      ],
      footerNote: 'We build corrugated briefcases that carry your brand message with confidence.',
      supportTitle: 'Planning a sales or influencer tour?',
      supportDescription: 'Work with our experiential packaging team to choreograph every element of your briefcase kit.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Prototype insert layouts, closures, and experiential touches together.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive dielines, finish inspiration, and cost scenarios tailored to your route.'
        }
      ]
    },
    ctaTitle: 'Ready to Deploy Your Brand Briefcase?',
    ctaDescription: 'Tell us about your activation—we’ll craft corrugated briefcase kits built to travel and impress.',
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
    specifications: [
      { label: 'Material Type', value: 'Single, double, or triple-wall corrugate certified for heavy loads' },
      { label: 'Structure', value: 'Full overlap (FOL) or full over-flap (FOF) shipping carton' },
      { label: 'Finish', value: 'Kraft, direct flexo print, or laminated labels' },
      { label: 'Printing', value: '1-4 color flexo, digital print, or large-format labeling' },
      { label: 'Dimensions', value: 'Custom footprints tuned to equipment, pallets, and trailer specs' },
      { label: 'Reinforcement', value: 'Corner posts, edge guards, foam, or molded pulp blocking' },
      { label: 'MOQ', value: 'Starts at 250 cartons with ongoing replenishment programs' }
    ],
    sizes: [
      { name: 'Industrial Small', dimensions: '16 × 12 × 10 in', price: 'Quote on request' },
      { name: 'Bulk Medium', dimensions: '24 × 18 × 14 in', price: 'Quote on request' },
      { name: 'Oversize Freight', dimensions: '30 × 24 × 20 in', price: 'Quote on request' },
      { name: 'Custom', dimensions: 'Engineered to product, pallet, and freight requirements', price: 'Consult logistics engineer' }
    ],
    galleryImages: [
      'shipping-box_jyysru',
      'Box-6_vm3fmh',
      'Mailer-Box-3_oct2ws',
      'Box-5_pdb8xw'
    ],
    customizationOptions: [
      'Add foam blocking, honeycomb pads, or corrugate inserts',
      'Include pallet skirts, slip sheets, or stretch-film programs',
      'Apply branding via direct print, decals, or laminated panels',
      'Integrate barcode, QR, or RFID labeling for inventory tracking',
      'Offer custom linerboard grades for moisture or corrosion resistance'
    ],
    customization: {
      eyebrow: 'Customization',
      heading: 'Customize Your Full Flap Shipping Boxes',
      description: 'Keep heavy, oversized shipments safe with corrugated solutions engineered for demanding supply chains.',
      detailsHeading: 'Tailor Every Detail',
      details: [
        { label: 'Structural Strength', value: 'Board grades, flute combinations, and reinforcements matched to load requirements' },
        { label: 'Product Protection', value: 'Blocking, foam, or hybrid solutions for fragile or high-value contents' },
        { label: 'Brand Visibility', value: 'Large-format printing, decals, or color-coding for easy identification' },
        { label: 'Logistics', value: 'Pallet utilization strategies, strap slots, and freight optimization' },
        { label: 'Compliance', value: 'ISTA, ASTM, and carrier compliance testing documented' },
        { label: 'Sustainability', value: 'Recycled liners, reusable blocking, and recycle-ready specs' },
        { label: 'Fulfillment', value: 'On-demand production, regional warehouses, and replenishment programs' }
      ],
      footerNote: 'We engineer full flap cartons that thrive in the toughest shipping environments.',
      supportTitle: 'Need heavy-duty corrugated solutions?',
      supportDescription: 'Work with our logistics packaging engineers to optimize carton strength, cost, and supply chain performance.',
      supportActions: [
        {
          label: 'Live Assistance',
          description: 'Evaluate load specs, reinforcements, and pallet plans with our engineering team.'
        },
        {
          label: 'Email Consultation',
          description: 'Receive structural proposals, testing data, and replenishment strategies.'
        }
      ]
    },
    ctaTitle: 'Ready to Ship with Confidence?',
    ctaDescription: 'Share your freight profile—we’ll build corrugated full flap cartons that arrive ready for the job.',
    overview: {
      heading: 'Product Overview',
      title: 'Corrugated Full Flap Cartons Built for Rugged Logistics',
      paragraphs: [
        'Full flap corrugated cartons deliver maximum stacking strength and edge protection for heavy or oversized loads.',
        'We integrate reinforcements, blocking, and packaging logistics to keep shipments secure from dock to destination.',
        'From industrial components to retail replenishment, your packaging performs reliably and efficiently.'
      ]
    }
  }
};

const enrichProductEntry = (slug: string, entry: any) => {
  const name = entry?.name || sentenceCase(slug.replace(/-/g, ' '));
  const enriched = {
    slug,
    ...entry
  } as any;

  enriched.features = ensureArray(enriched.features, createDefaultFeatures(name));
  enriched.keyFeatures = ensureArray(enriched.keyFeatures, createDefaultKeyFeatures(name));
  enriched.specifications = ensureArray(enriched.specifications, createDefaultSpecifications(name));
  enriched.sizes = ensureArray(enriched.sizes, createDefaultSizes());
  enriched.galleryImages = ensureArray(enriched.galleryImages, createDefaultGallery());
  enriched.customizationOptions = ensureArray(enriched.customizationOptions, createDefaultCustomizationOptions(name));

  const defaultCustomization = createDefaultCustomization(name);
  enriched.customization = {
    ...defaultCustomization,
    ...(enriched.customization || {})
  };
  enriched.customization.details = ensureArray(
    enriched.customization.details,
    defaultCustomization.details
  );
  enriched.customization.supportActions = ensureArray(
    enriched.customization.supportActions,
    defaultCustomization.supportActions
  );

  enriched.overview = enriched.overview || createDefaultOverview(name, enriched.description);
  const defaultWhyChooseUs = createDefaultWhyChooseUs(name);
  enriched.whyChooseUs = {
    ...defaultWhyChooseUs,
    ...(enriched.whyChooseUs || {})
  };
  enriched.whyChooseUs.features = ensureArray(
    enriched.whyChooseUs.features,
    defaultWhyChooseUs.features
  );

  const defaultFaq = createDefaultFaq(name);
  enriched.faq = {
    ...defaultFaq,
    ...(enriched.faq || {})
  };
  enriched.faq.items = ensureArray(enriched.faq.items, defaultFaq.items);

  const defaultContact = createDefaultContactSection(name);
  enriched.contactSection = {
    ...defaultContact,
    ...(enriched.contactSection || {})
  };
  enriched.contactSection.channels = ensureArray(
    enriched.contactSection.channels,
    defaultContact.channels
  );

  const defaultCTA = createDefaultCTA(name);
  enriched.ctaTitle = enriched.ctaTitle || defaultCTA.ctaTitle;
  enriched.ctaDescription = enriched.ctaDescription || defaultCTA.ctaDescription;

  enriched.subcategoryCards = enriched.subcategoryCards || buildSubcategoryCards(slug);

  return enriched;
};

const buildProductData = () =>
  Object.entries(rawProductData).reduce((acc, [slug, entry]) => {
    acc[slug] = enrichProductEntry(slug, entry);
    return acc;
  }, {} as Record<string, any>);

const buildCompleteProductData = () => {
  return buildProductData();
};

export const productData = buildCompleteProductData();

// Helper function to get product data by slug exclusively from static data
export const getProductDataBySlug = async (slug: string) => {
  if (productData[slug]) {
    return productData[slug];
  }

  return undefined;
};

// Helper function to get all products exclusively from static data
export const getAllProducts = async () =>
  Object.entries(productData).map(([slug, product]) => ({
    slug,
    ...product
  }));

export default productData;

