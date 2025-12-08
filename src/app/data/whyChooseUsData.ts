export interface WhyChooseUsContent {
  eyebrow?: string;
  heading: string;
  description: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  closingDescription?: string;
}

export const whyChooseUsData: Record<string, WhyChooseUsContent> = {
  // Material Categories
  "rigid-boxes": {
    eyebrow: "Why Choose Our Rigid Boxes",
    heading: "With BoxyPack, you get packaging that transforms perception into value. Our printed rigid boxes manufacturer services bring your brand's identity to life through superior craftsmanship and design flexibility.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built from thick board for protection and premium strength.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made using recyclable and sustainable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Smooth textures and refined coatings add sophistication.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed for every product size, shape, and purpose.",
      },
    ],
    closingDescription:
      "Our boxes are more than containers; they are brand statements. With BoxyPack, you can create packaging that impresses customers and enhances your product presentation.",
  },
  
  // Rigid Boxes Subcategories
  "magnetic-closure-rigid-box": {
    eyebrow: "Why Choose Our Magnetic Rigid Boxes",
    heading: "Experience excellence with BoxyPack custom magnetic rigid packaging. We combine craftsmanship, sustainability, and creative design to make your brand stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built with thick, durable, rigid board to protect valuables.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made from recyclable paper and non-toxic coatings.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Smooth lamination and precision folds create a premium feel.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Fully adjustable for product size, theme, or color preference.",
      },
    ],
    closingDescription:
      "Every magnetic closure box reflects reliability and prestige. With BoxyPack, your packaging doesn't just hold products, it elevates them.",
  },
  
  "two-piece-rigid-boxes": {
    eyebrow: "Why Choose Our Two-Piece Rigid Boxes",
    heading: "With BoxyPack custom two-piece rigid boxes, your products stand out effortlessly. Our packaging combines structural strength, flawless finishing, and eco-friendly production for long-term value.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made from thick, rigid board to protect valuable items.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Built from recyclable materials for a sustainable future.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Smooth coatings and precise edges enhance visual appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Available in multiple sizes, colors, and branding options.",
      },
    ],
    closingDescription:
      "These boxes deliver more than packaging; they communicate your brand's quality and care with every unboxing experience.",
  },
  
  "sliding-sleeve-rigid-boxes-match-style-boxes": {
    eyebrow: "Why Choose Our Sliding Rigid Boxes",
    heading: "With BoxyPack, you get packaging that blends craftsmanship, beauty, and practicality. Every box is built for elegance, strength, and brand distinction.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Crafted from thick, high-grade rigid board for dependable strength.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made from recyclable, responsibly sourced paper materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Refined coatings and textures enhance visual and tactile appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Multiple finishes, colors, and structures to suit any product line.",
      },
    ],
    closingDescription:
      "These custom sliding rigid boxes are perfect for elevating product presentation while maintaining professional functionality that customers love.",
  },
  
  "brief-case-style": {
    eyebrow: "Why Choose Our Briefcase Style Rigid Boxes",
    heading: "With BoxyPack, you get luxury and strength in one smart packaging design. Every briefcase box is engineered for durability, refined presentation, and brand value.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built with thick, rigid board for long-term use.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made with recyclable and sustainable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Soft lamination and precise corners create a high-end look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed for all industries from retail to corporate gifting.",
      },
    ],
    closingDescription:
      "Our custom briefcase packaging box line turns everyday packaging into an unforgettable presentation, giving your products the professional edge they deserve.",
  },
  
  "book-style-rigid-boxes": {
    eyebrow: "Why Choose Our Book Style Rigid Boxes",
    heading: "With BoxyPack, you get packaging that blends luxury design with lasting quality. Every box is built to look sophisticated and feel premium.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made from high-quality rigid board for reliable protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Created from recyclable, sustainable paper materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Smooth surfaces and sharp edges for professional appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Available in multiple styles, colors, and textures.",
      },
    ],
    closingDescription:
      "Our custom rigid book boxes packaging adds value to your brand through thoughtful design, precision printing, and a presentation that feels unforgettable.",
  },

  // Kraft Boxes Subcategories
  "kraft-mailer-boxes": {
    eyebrow: "Why Choose Our Kraft Mailer Boxes",
    heading: "With BoxyPack, you get packaging that delivers more than durability it builds trust. Our brown kraft mailer boxes with logo combine sustainable materials with precision craftsmanship to protect your products while promoting your brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick kraft board ensures lasting strength during shipping.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable materials used.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose uncoated, matte, or printed textures for a clean look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Fully customizable in size, print, and interior finish.",
      },
    ],
    closingDescription:
      "Our kraft mailer box price options are designed for affordability without compromising quality, making them ideal for growing e-commerce and retail businesses.",
  },
  
  "kraft-boxes-with-lids": {
    eyebrow: "Why Choose Our Kraft Boxes with Lids",
    heading: "With BoxyPack, every kraft box is crafted to deliver quality and sustainability. We design custom kraft boxes with lids that combine visual appeal with functional strength, giving your products a premium unboxing experience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built from thick kraft paperboard for durability and protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made using recyclable and biodegradable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from uncoated, matte, or printed textures.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Fully customizable in size, shape, and design to fit your brand.",
      },
    ],
    closingDescription:
      "Our kraft box with lid cost is affordable and flexible for both small businesses and bulk wholesale orders, ensuring premium packaging for every need.",
  },
  
  "kraft-pillow-box": {
    eyebrow: "Why Choose Our Kraft Pillow Boxes",
    heading: "With BoxyPack, you get eco-friendly packaging that looks elegant and performs flawlessly. Every custom kraft pillow box with ribbon is designed with attention to detail, helping your products stand out on shelves or in gift sets.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Durable kraft paperboard provides secure and stable structure.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made from 100% recyclable and biodegradable paper.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from smooth matte or glossy coatings for a clean look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Fully customizable in print, size, and accessories like ribbons or tags.",
      },
    ],
    closingDescription:
      "Our eco kraft pillow style boxes bulk collection offers affordability, versatility, and premium quality ideal for small businesses, event planners, and boutique brands.",
  },
  
  "kraft-gable-boxes": {
    eyebrow: "Why Choose Our Kraft Gable Boxes",
    heading: "With BoxyPack, your packaging goes beyond protection it becomes an experience. Our custom kraft gable boxes with logo are designed for versatility, eco-friendliness, and style.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made with high-quality kraft board for reliable protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Crafted from recyclable and biodegradable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Available in matte, gloss, or uncoated surfaces for modern appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed for food, gifts, and retail products with personalized branding.",
      },
    ],
    closingDescription:
      "Every kraft gable packaging box combines quality with sustainability, helping your brand present products beautifully while supporting the environment.",
  },
  
  "kraft-bakery-cake-box": {
    eyebrow: "Why Choose Our Kraft Bakery Boxes",
    heading: "With BoxyPack, your baked goods deserve packaging that reflects their quality. Our eco kraft bakery boxes with window combine sustainable materials with refined design for premium bakery presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Crafted from food-grade kraft paper for reliable protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable kraft materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose matte or glossy coatings for professional appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Tailored sizes, shapes, and printing to match your brand identity.",
      },
    ],
    closingDescription:
      "Our brown kraft cupcake / bakery box wholesale solutions give you the balance of durability, affordability, and beauty, perfect for eco-conscious bakeries and food brands.",
  },
  
  "kraft-sleeve-box": {
    eyebrow: "Why Choose Our Kraft Sleeve Boxes",
    heading: "With BoxyPack, your packaging becomes part of your brand story. Our kraft sliding sleeve style packaging blends modern design with eco-friendly quality, ensuring your products always look their best.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built from thick kraft board for long-lasting protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable for a greener impact.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from uncoated, matte, or printed surfaces for brand appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adaptable sizes and finishes to match any product or style.",
      },
    ],
    closingDescription:
      "Our custom kraft sleeve packaging helps you present your products beautifully while supporting sustainable practices at a reasonable kraft sleeve box cost.",
  },
  
  "kraft-tuck-end-box": {
    eyebrow: "Why Choose Our Kraft Tuck End Boxes",
    heading: "With BoxyPack, you get packaging that combines durability and eco-conscious design. Our eco-friendly kraft tuck packaging supports your brand's sustainability goals without compromising on quality or appeal.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick kraft paperboard ensures lasting structure and product protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable kraft materials used.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from matte, gloss, or printed coatings for a premium look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Tailored dimensions and printing for retail, food, and shipping needs.",
      },
    ],
    closingDescription:
      "Our kraft tuck end box price options offer high value for brands that want premium packaging at competitive rates, suitable for startups or bulk manufacturers.",
  },
  
  "kraft-five-panel-hanger-box": {
    eyebrow: "Why Choose Our Kraft Five Panel Hanger Boxes",
    heading: "With BoxyPack, your brand gets retail-ready packaging that's stylish, secure, and sustainable. Our custom kraft five-panel hanger packaging ensures your products hang beautifully and catch attention.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made from high-grade kraft paperboard for lasting durability.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable and biodegradable materials are used.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from uncoated, matte, or glossy surfaces for a clean look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Tailored sizes, windows, and print options for every retail need.",
      },
    ],
    closingDescription:
      "Our boxes combine visibility, strength, and eco-conscious quality, giving your products a premium look while reducing environmental impact.",
  },
  
  "kraft-side-lock-six-corner-boxes": {
    eyebrow: "Why Choose Our Kraft Six-Corner Boxes",
    heading: "With BoxyPack, you get packaging that's designed for performance, sustainability, and brand visibility. Our kraft side lock corner packaging combines functionality with a refined design to make your products stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built from thick kraft board for excellent stability and strength.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made from recyclable and biodegradable kraft materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Available in natural brown, matte, or printed surfaces.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Perfect for food, apparel, and retail applications with branding options.",
      },
    ],
    closingDescription:
      "Our custom kraft six-corner boxes ensure cost-effective, sustainable packaging without sacrificing durability or appearance, a perfect choice for modern businesses.",
  },
  
  "kraft-regular-six-corner-boxes": {
    eyebrow: "Why Choose Our Kraft Six-Corner Boxes",
    heading: "With BoxyPack, your packaging gets the strength of kraft and the touch of craftsmanship. Our brown kraft corner boxes with logo combine functionality, aesthetics, and sustainability for unmatched value.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made from thick kraft board for durability and structure retention.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable, biodegradable, and made from renewable paper sources.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose between matte, gloss, or printed surfaces for a clean look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adaptable sizing and printing for food, fashion, and retail use.",
      },
    ],
    closingDescription:
      "Our Kraft regular six-corner box price offers premium packaging at wholesale rates, perfect for small and large businesses seeking long-term packaging solutions.",
  },
  
  "kraft-seal-end-auto-bottom-box": {
    eyebrow: "Why Choose Our Kraft Seal End Auto Bottom Boxes",
    heading: "When it comes to efficient, eco-conscious packaging, BoxyPack leads the way. Our printed kraft seal end box bulk order solutions combine automation-ready design with superior sustainability.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built with durable kraft board to hold moderate to heavy products.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable, biodegradable, and made from sustainable paper sources.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose between uncoated natural kraft, matte, or gloss finishes.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adapt structure, print, and size to your brand needs.",
      },
    ],
    closingDescription:
      "Our packaging ensures quicker assembly, cleaner sealing, and professional presentation, helping your business operate faster while keeping the planet in mind.",
  },
  
  "kraft-single-wall-auto-bottom-tray": {
    eyebrow: "Why Choose Our Kraft Auto Bottom Trays",
    heading: "When you need packaging that's efficient, strong, and eco-friendly, BoxyPack delivers the perfect solution. Our custom kraft tray boxes with logo give your brand a professional presentation while supporting sustainability goals.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Crafted from durable single-wall kraft for lasting strength.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable and biodegradable for minimal environmental impact.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from natural, matte, or gloss finishes for visual appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adjustable dimensions and print to fit any product type.",
      },
    ],
    closingDescription:
      "With BoxyPack, your packaging becomes both practical and stylish, helping you present your products beautifully while maintaining eco-conscious standards.",
  },
  
  "kraft-two-piece-box": {
    eyebrow: "Why Choose Our Kraft Two Piece Boxes",
    heading: "With BoxyPack, your brand gets sustainable packaging that feels natural and professional. Our custom kraft two-piece boxes wholesale combine strong material and elegant finishes for unmatched practicality and style.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick kraft board construction ensures durability and lasting shape.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable, biodegradable, and made from sustainable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Matte, gloss, or natural kraft texture for premium presentation.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adjustable dimensions and printing options for every product type.",
      },
    ],
    closingDescription:
      "Our kraft two-piece box cost remains affordable even for small businesses, offering luxury-grade packaging with an eco-friendly foundation.",
  },
  
  "kraft-cigarette-box": {
    eyebrow: "Why Choose Our Kraft Cigarette Boxes",
    heading: "When sustainability meets precision, the result is packaging that defines your brand. At BoxyPack, our custom kraft cigarette carton boxes blend eco-conscious materials with high-end craftsmanship.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Designed from rigid kraft paperboard for superior strength and stability.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable and biodegradable to meet sustainable packaging standards.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Natural brown or printed surfaces for modern retail presentation.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Fully customizable to include branding, health labels, and design accents.",
      },
    ],
    closingDescription:
      "Our kraft cigarette box wholesale price ensures affordability with unmatched quality, helping brands achieve a professional and compliant look while staying environmentally responsible.",
  },
  
  "kraft-bookend-box": {
    eyebrow: "Why Choose Our Kraft Bookend Boxes",
    heading: "With BoxyPack, you get more than packaging; you get a presentation with purpose. Our custom kraft bookend carton with logo options combine durability, elegance, and sustainability to elevate your product's look and feel.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Rigid kraft board ensures long-lasting strength and clean structure.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable and biodegradable, reducing environmental waste.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Available in natural brown, matte, or gloss for a premium aesthetic.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed to suit various industries, from luxury retail to electronics.",
      },
    ],
    closingDescription:
      "Our brown kraft bookend gift boxes wholesale provide high-end packaging at a reasonable price, perfect for brands that want impact without excess.",
  },
  
  "kraft-dispenser-box": {
    eyebrow: "Why Choose Our Kraft Dispenser Boxes",
    heading: "At BoxyPack, we blend eco-conscious craftsmanship with retail functionality. Our custom kraft dispenser box with logo options helps your brand stand out while maintaining sustainability and customer convenience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made from thick kraft board to support product weight and structure.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable materials reduce environmental impact.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose natural kraft texture, matte, or gloss coating for a professional look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Fully adaptable design for snacks, retail items, or promotional packaging.",
      },
    ],
    closingDescription:
      "With BoxyPack, your packaging becomes more than storage, it's a reliable display solution built for efficiency and brand consistency.",
  },
  
  "kraft-double-wall-frame-tray": {
    eyebrow: "Why Choose Our Kraft Double Wall Trays",
    heading: "At BoxyPack, we prioritize design, strength, and sustainability. Our custom kraft wall frame tray supplier solutions help brands build trust through eco-friendly and functional packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Double-layer kraft board ensures long-lasting strength and support.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made from 100% recyclable and biodegradable kraft materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Available in matte, gloss, or natural kraft texture for premium appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed to fit any retail, bakery, or food packaging requirement.",
      },
    ],
    closingDescription:
      "Our trays are reliable, stylish, and affordable, helping your brand deliver quality packaging that customers notice and appreciate.",
  },

  // Cardboard Boxes Category
  "cardboard-boxes": {
    eyebrow: "Why Choose Our Cardboard Boxes",
    heading: "At BoxyPack, we build  packaging that combines quality, reliability, and eco-awareness. Our printed cardboard boxes offer superior design flexibility while maintaining strength and sustainability.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built with durable corrugated or solid board for protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable packaging.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "High-resolution branding for a professional look.",
      },
      {
        icon: "palette",
        title: "Affordable Pricing",
        description: "Competitive cardboard box prices for bulk and custom orders.",
      },
    ],
    closingDescription:
      "With BoxyPack, your cardboard packaging delivers lasting quality and strong brand visibility every time.",
  },

  // Cardboard Boxes Subcategories
  "cardboard-display-box": {
    eyebrow: "Why Choose Our Cardboard Display Boxes",
    heading: "At BoxyPack, we know that packaging should sell your product before words do. Our custom cardboard display box solutions combine creativity, practicality, and sustainability all in one design.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made with thick corrugated or solid board for reliable strength.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable, sustainable, and biodegradable cardboard.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Matte, gloss, or natural kraft texture to match your brand tone.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adaptable design for cosmetics, snacks, or promotional items.",
      },
    ],
    closingDescription:
      "Each display box enhances visibility while maintaining brand consistency and environmental responsibility, a smart choice for both product and planet.",
  },
  
  "cardboard-tuck-end-box": {
    eyebrow: "Why Choose Our Cardboard Tuck-End Boxes",
    heading: "At BoxyPack, we create packaging that merges function with presentation. Our printed cardboard tuck-end box solutions help your brand stand out while ensuring your products stay protected and visually appealing.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made from durable cardboard for long-lasting protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable, biodegradable, and responsibly sourced materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose between matte, gloss, or soft-touch surfaces for a refined look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed for various industries, from cosmetics to electronics.",
      },
    ],
    closingDescription:
      "Our cardboard tuck-end box price stays affordable even with full customization, making it the perfect choice for small brands and bulk packaging needs.",
  },
  
  "cardboard-box-with-lid": {
    eyebrow: "Why Choose Our Cardboard Boxes with Lids",
    heading: "At BoxyPack, we build packaging that's beautiful, functional, and sustainable. Our custom cardboard box with lid options combines premium materials and eco-friendly construction for a professional finish that impresses customers.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Crafted from durable paperboard for solid structure and product safety.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable and biodegradable cardboard reduces waste.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose matte, gloss, or soft-touch lamination for a refined touch.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed to suit gifts, apparel, cosmetics, and retail packaging.",
      },
    ],
    closingDescription:
      "With an affordable cardboard box with lid price options, brands can achieve luxury presentation and practicality in one elegant packaging solution.",
  },
  
  "cardboard-gable-box": {
    eyebrow: "Why Choose Our Cardboard Gable Boxes",
    heading: "At BoxyPack, we merge creativity with reliability. Our printed cardboard gable boxes are designed to elevate your brand image while staying functional and sustainable.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made with durable board to protect and support products.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Matte, gloss, or natural kraft textures for visual appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Tailored for bakery, retail, or promotional packaging.",
      },
    ],
    closingDescription:
      "Our cardboard gable box price remains budget-friendly, even with full-color printing and customization. It's the smart packaging choice for businesses that want impact without compromise.",
  },
  
  "cardboard-cake-bakery-box": {
    eyebrow: "Why Choose Our Cardboard Cake Boxes",
    heading: "At BoxyPack, we combine quality craftsmanship with eco-friendly design to create the best packaging for your baked goods. Our custom cardboard cake boxes protect your creations while highlighting your brand's identity.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built from durable food-grade cardboard for secure handling.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable and biodegradable materials reduce waste.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Available in matte, gloss, or natural kraft for a premium look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Perfect for bakeries, patisseries, and dessert brands.",
      },
    ],
    closingDescription:
      "Our cardboard cake box price remains cost-effective for bulk orders, ensuring consistent quality at scale.",
  },
  
  "cardboard-sleeve-box": {
    eyebrow: "Why Choose Our Cardboard Sleeve Boxes",
    heading: "At BoxyPack, every box is built with purpose and precision. Our printed cardboard sleeve boxes help you present products beautifully while keeping them safe and easy to handle.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Rigid and durable board for a stable structure.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable materials with minimal environmental impact.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Matte, gloss, or soft-touch coatings for a premium look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Tailored for retail, gift, and display packaging.",
      },
    ],
    closingDescription:
      "Our cardboard sleeve box price is designed to suit every brand, offering quality craftsmanship and affordable elegance in every order.",
  },
  
  "cardboard-dispenser-box": {
    eyebrow: "Why Choose Our Cardboard Dispenser Boxes",
    heading: "At BoxyPack, we believe packaging should be functional and visually appealing. Our printed cardboard dispenser boxes make it easier for customers to interact with your product while maintaining a clean and organized look.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick cardboard ensures shape stability and durability.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable and sustainable for eco-conscious brands.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Smooth textures and premium prints enhance presentation.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adjustable for product size, brand, and quantity.",
      },
    ],
    closingDescription:
      "Each custom cardboard dispenser box is built to improve product visibility, ensure convenience, and reinforce brand quality, all within your preferred budget.",
  },
  
  "cardboard-five-panel-hanger": {
    eyebrow: "Why Choose Our Cardboard Five Panel Hanger Boxes",
    heading: "At BoxyPack, we focus on combining display functionality with premium design. Our custom printed five panel hanger boxes not only protect your products but also enhance in-store presentation and customer engagement.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Reinforced paperboard ensures lasting protection and shape retention.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made with recyclable materials to reduce waste.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from matte, gloss, or soft-touch coatings for a polished look.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Perfect for cosmetics, accessories, and electronic packaging.",
      },
    ],
    closingDescription:
      "Our five panel hanger box price is designed to balance quality, affordability, and sustainability, making them the best choice for retail-ready packaging",
  },
  
  "cardboard-mailer-boxes": {
    eyebrow: "Why Choose Our Cardboard Mailer Boxes",
    heading: "At BoxyPack, every mailer is engineered to protect, impress, and perform. Our printed cardboard mailer boxes combine clean design, reliable strength, and eco-friendly production to help your brand grow.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick corrugated board resists pressure and impact.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Fully recyclable and made from responsibly sourced paper.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "High-quality printing and smooth lamination add shelf appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Perfect for subscription, shipping, and retail packaging.",
      },
    ],
    closingDescription:
      "We balance quality and cost to give you the best cardboard mailer box price without compromising design or durability.",
  },
  
  "cardboard-double-locked-wall-lid-box": {
    eyebrow: "Why Choose Our Cardboard Double-Locked Wall Lid Boxes",
    heading: "At BoxyPack, we build packaging that's functional and refined. Our printed double-locking wall lid boxes are made to showcase quality, safeguard contents, and strengthen brand identity.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built with thick, reinforced board for superior protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable and made from sustainable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Smooth textures, crisp printing, and professional appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Adaptable for various products and industries.",
      },
    ],
    closingDescription:
      "Our custom cardboard double-locking wall lid boxes combine security, style, and sustainability, helping your brand deliver premium packaging that stands out on every shelf.",
  },
  
  "cardboard-side-lock-six-corner-box": {
    eyebrow: "Why Choose Our Cardboard Side Lock Six-Corner Boxes",
    heading: "At BoxyPack, we design packaging that's practical, aesthetic, and built to last. Our printed side lock six corner boxes are made to handle products safely while maintaining a polished retail appearance.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Reinforced cardboard ensures durability and load stability.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "100% recyclable and made from sustainable paper sources.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Options like matte, gloss, and soft-touch for premium appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Perfect for bakery, retail, and e-commerce packaging.",
      },
    ],
    closingDescription:
      "With our custom six-corner boxes, you get functionality, quality, and an affordable cardboard side lock six-corner box price that fits your packaging goals.",
  },
  
  "cardboard-regular-six-corner-box": {
    eyebrow: "Why Choose Our Cardboard Regular Six-Corner Boxes",
    heading: "At BoxyPack, we believe in packaging that performs beautifully. Our printed regular six-corner boxes balance strength, flexibility, and modern style, ensuring your products are protected and presented at their best.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick cardboard construction ensures reliable protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable materials help reduce environmental impact.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from matte, gloss, or soft-touch coatings.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Designed for bakery, fashion, and retail products.",
      },
    ],
    closingDescription:
      "Our custom cardboard regular six corner boxes bring practicality, polish, and professional finish together, all at a cost-effective regular six corner box price tailored for bulk or retail use.",
  },
  
  "cardboard-seal-end-auto-bottom-box": {
    eyebrow: "Why Choose Our Cardboard Seal End Auto Bottom Boxes",
    heading: "At BoxyPack, we design packaging that supports productivity and presentation. Our printed seal-end auto bottom boxes save time on assembly while keeping products protected and ready for display.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made from sturdy cardboard for enhanced load capacity.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable and made from sustainable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from matte, gloss, or soft-touch coatings.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Ideal for retail, food, and pharmaceutical packaging.",
      },
    ],
    closingDescription:
      "With our custom cardboard seal-end auto bottom boxes, you get efficient, attractive, and cost-effective packaging for every product line.",
  },
  
  "cardboard-auto-bottom-tray": {
    eyebrow: "Why Choose Our Cardboard Auto Bottom Trays",
    heading: "At BoxyPack, we believe packaging should save time while adding value. Our printed auto bottom trays deliver functionality and design precision that enhance product presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Made with premium cardboard for a reliable structure.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Sustainable materials reduce waste and environmental impact.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Matte, gloss, or soft-touch coating options for refined appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Perfect for bakery, retail, and cosmetic product packaging.",
      },
    ],
    closingDescription:
      "Each custom cardboard auto bottom tray is designed to deliver both performance and beauty, providing a durable solution at a fair auto bottom tray price for bulk or small orders.",
  },
  
  "cardboard-two-piece-box": {
    eyebrow: "Why Choose Our Cardboard Two-Piece Boxes",
    heading: "At BoxyPack, we craft packaging that feels as premium as the product inside. Our printed two-piece boxes blend structural strength with high-end aesthetics, making every unboxing memorable.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick cardboard ensures long-lasting strength and product safety.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable materials support sustainable branding.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose from matte, gloss, or soft-touch textures.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Suitable for jewelry, apparel, and corporate gifting.",
      },
    ],
    closingDescription:
      "Our custom cardboard two-piece boxes provide elegance, durability, and cost-effective luxury, helping your brand stand out with packaging that looks and feels exceptional.",
  },
  
  "cardboard-cigarette-box": {
    eyebrow: "Why Choose Our Cardboard Cigarette Boxes",
    heading: "At BoxyPack, we know packaging is more than protection; it's brand identity. Our printed cigarette boxes offer durability, print clarity, and elegant finishes that elevate your products on every shelf.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick cardboard ensures shape stability and lasting protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made with recyclable and biodegradable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Glossy, matte, or soft-touch coatings for visual impact.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Tailored to match your brand's tone and market needs.",
      },
    ],
    closingDescription:
      "Our custom cardboard cigarette boxes balance quality, design, and affordability, giving your brand an edge through refined, secure, and compliant packaging.",
  },
  
  "cardboard-bookend-box": {
    eyebrow: "Why Choose Our Cardboard Bookend Boxes",
    heading: "At BoxyPack, we focus on packaging that merges form with function. Our printed bookend boxes offer both sturdiness and elegance, helping your brand leave a lasting impression with every unboxing.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Built from thick cardboard for secure product protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Made using recyclable and biodegradable materials.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Matte, gloss, or soft-touch coating for premium texture.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Suitable for electronics, cosmetics, and stationery.",
      },
    ],
    closingDescription:
      "Our custom cardboard bookend boxes provide durability and visual appeal at a fair bookend box price, helping your products stand out while staying secure.",
  },
  
  "cardboard-double-wall-frame-tray": {
    eyebrow: "Why Choose Our Cardboard Double-Wall Frame Trays",
    heading: "At BoxyPack, we combine structural durability with stylish design. Our printed double-wall frame trays are ideal for brands that value both safety and aesthetics in their packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Material",
        description: "Thick double-wall build provides maximum product support.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Crafted from recyclable and sustainable paperboard.",
      },
      {
        icon: "star",
        title: "Luxury Finish",
        description: "Choose between matte, gloss, or soft-touch for polished appeal.",
      },
      {
        icon: "palette",
        title: "Custom Flexibility",
        description: "Tailored for bakery, apparel, and retail product packaging.",
      },
    ],
    closingDescription:
      "Our custom cardboard double-wall frame trays deliver a balance of protection and style, making them a smart, professional, and cost-effective packaging choice.",
  },

  // Corrugated Boxes Category
  "corrugated-boxes": {
    eyebrow: "Why Choose Our Corrugated Boxes",
    heading: "At BoxyPack, strength meets smart design. Our custom corrugated packaging ensures your products stay safe while promoting your brand's identity.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Superior Durability",
        description: "Multi-layer construction for reliable protection.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Build",
        description: "Made from recyclable kraft paper materials.",
      },
      {
        icon: "star",
        title: "Brand Customization",
        description: "Full-color printing for logos and product details.",
      },
      {
        icon: "palette",
        title: "Affordable Quality",
        description: "Competitive corrugated boxes price for bulk and custom orders.",
      },
    ],
    closingDescription:
      "We don't just supply boxes, we build confidence into every shipment.",
  },

  // Corrugated Boxes Subcategories
  "corrugated-mailer-box": {
    eyebrow: "Why Choose Our Corrugated Mailer Boxes",
    heading: "At BoxyPack, we mix utility with design excellence. Our custom corrugated mailer boxes protect products while giving them a polished retail-ready look.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Reliable Structure",
        description: "Fold-over design ensures tight closure and strength.",
      },
      {
        icon: "check",
        title: "Sustainable Choice",
        description: "Made from recyclable corrugated materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Print inside, outside, or both for unique appeal.",
      },
      {
        icon: "palette",
        title: "Professional Finish",
        description: "Choose from matte, gloss, or soft-touch coating.",
      },
    ],
    closingDescription:
      "Our corrugated mailer boxes are a practical, eco-friendly, and elegant choice for shipping, retail display, and brand storytelling.",
  },
  
  "corrugated-gable-box": {
    eyebrow: "Why Choose Our Corrugated Gable Boxes",
    heading: "At BoxyPack, we merge strength with presentation. Our custom corrugated gable boxes serve brands that need packaging both practical and professional.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Convenient Design",
        description: "Built-in handle ensures portability and comfort.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Made from fully recyclable corrugated materials.",
      },
      {
        icon: "star",
        title: "High-Quality Finish",
        description: "Matte, gloss, or soft-touch coating available.",
      },
      {
        icon: "palette",
        title: "Customizable Options",
        description: "Tailored dimensions, printing, and structure for every use.",
      },
    ],
    closingDescription:
      "Our custom corrugated gable boxes combine durability with convenience, making them perfect for food, retail, and promotional packaging needs.",
  },
  
  "corrugated-double-locked-wall-lid-box": {
    eyebrow: "Why Choose Our Corrugated Double-Locked Wall Lid Boxes",
    heading: "At BoxyPack, we balance strength, design, and affordability. Our printed corrugated wall lid boxes deliver dependable packaging solutions with premium shelf presence.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Reinforced Structure",
        description: "Double walls and tight locking lids ensure protection.",
      },
      {
        icon: "check",
        title: "Eco-Conscious Design",
        description: "Made from recyclable, sustainable corrugated materials.",
      },
      {
        icon: "star",
        title: "Premium Printing",
        description: "Add your branding with inside and outside full-color options.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available for retail, wholesale, and custom production runs.",
      },
    ],
    closingDescription:
      "Our custom corrugated double locked wall lid boxes provide both function and flair, creating reliable packaging that protects, presents, and performs.",
  },
  
  "corrugated-seal-end-auto-bottom-box": {
    eyebrow: "Why Choose Our Corrugated Seal End Auto Bottom Boxes",
    heading: "At BoxyPack, we build every box with performance and style in mind. Our printed corrugated auto bottom packaging delivers secure construction and refined looks for all business types.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Instant Setup",
        description: "Auto bottom design speeds up packing and sealing.",
      },
      {
        icon: "check",
        title: "High Strength",
        description: "Corrugated walls protect against crushing and transit damage.",
      },
      {
        icon: "star",
        title: "Sustainable Choice",
        description: "All boxes are recyclable and eco-friendly.",
      },
      {
        icon: "palette",
        title: "Custom Design",
        description: "Tailored to match your brand color, logo, and dimension needs.",
      },
    ],
    closingDescription:
      "Our custom corrugated seal end auto bottom boxes ensure quick assembly, strong protection, and professional presentation that supports your product and brand together.",
  },
  
  "corrugated-auto-bottom-tray": {
    eyebrow: "Why Choose Our Corrugated Auto Bottom Trays",
    heading: "At BoxyPack, we blend functionality with design precision. Our printed corrugated auto bottom trays deliver dependable packaging solutions for every industry.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Quick Assembly",
        description: "Auto-lock bottom saves time during production and packing.",
      },
      {
        icon: "check",
        title: "High Strength",
        description: "Corrugated layers provide solid product protection.",
      },
      {
        icon: "star",
        title: "Eco-Safe Build",
        description: "100% recyclable and sourced from sustainable materials.",
      },
      {
        icon: "palette",
        title: "Custom Options",
        description: "Fully tailored dimensions, finishes, and print styles.",
      },
    ],
    closingDescription:
      "Our custom corrugated auto bottom trays make packaging faster, safer, and smarter, offering reliability and visual appeal for modern brands.",
  },
  
  "corrugated-two-piece-box": {
    eyebrow: "Why Choose Our Corrugated Two-Piece Boxes",
    heading: "At BoxyPack, we design every box for long-term performance and presentation. Our printed corrugated two-piece boxes are a trusted choice for brands that value both form and function.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Classic Design",
        description: "Two-piece layout adds structure and elegance.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Fully recyclable corrugated material supports eco packaging goals.",
      },
      {
        icon: "star",
        title: "Premium Finish",
        description: "Gloss, matte, or soft-touch options for professional results.",
      },
      {
        icon: "palette",
        title: "Flexible Customization",
        description: "Tailored sizing and printing for any retail category.",
      },
    ],
    closingDescription:
      "Our custom corrugated two-piece boxes deliver durability and sophistication, making them ideal for luxury products, gifts, and premium retail packaging.",
  },
  
  "corrugated-brief-case-style-box": {
    eyebrow: "Why Choose Our Corrugated Brief Case Style Boxes",
    heading: "At BoxyPack, we merge durability with premium presentation. Our printed corrugated briefcase boxes are designed to stand out while providing dependable protection.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Portable Design",
        description: "Carry handle ensures comfort and convenience.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Made from recyclable corrugated board.",
      },
      {
        icon: "star",
        title: "Custom Finish",
        description: "Choose gloss, matte, or soft-touch coatings.",
      },
      {
        icon: "palette",
        title: "Flexible Production",
        description: "Tailored sizes and branding for every order.",
      },
    ],
    closingDescription:
      "Our custom corrugated briefcase packaging delivers elegance, reliability, and brand presence, creating packaging that travels as well as it protects.",
  },
  
  "corrugated-full-flap-shipping-box": {
    eyebrow: "Why Choose Our Corrugated Full Flap Shipping Boxes",
    heading: "At BoxyPack, we focus on protection, presentation, and practicality. Our heavy-duty corrugated full flap boxes provide unmatched security and professional appeal.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Build",
        description: "Overlapping flaps enhance compression resistance.",
      },
      {
        icon: "check",
        title: "Sustainable Choice",
        description: "Fully recyclable and made from eco materials.",
      },
      {
        icon: "star",
        title: "Custom Print",
        description: "Add branding or product details for shipping presentation.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available in both small and wholesale quantities.",
      },
    ],
    closingDescription:
      "Our custom corrugated shipping boxes deliver the durability and consistency required for high-volume packaging while supporting a clean, branded look.",
  },

  // Bakery Boxes Category
  "bakery-boxes": {
    eyebrow: "Why Choose Our Bakery Boxes",
    heading: "At BoxyPack, we blend charm and function. Our eco-friendly bakery packaging boxes ensure your baked goods stay fresh and your brand stays memorable.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Design",
        description: "Crafted for professional presentation and easy handling.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Choice",
        description: "Made with recyclable, biodegradable materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add your colors, logo, and designs.",
      },
      {
        icon: "palette",
        title: "Affordable Rates",
        description: "Get the best bakery boxes price for bulk orders.",
      },
    ],
    closingDescription:
      "We deliver packaging that keeps your products delightful from kitchen to counter.",
  },

  // Bakery Boxes Subcategories
  "custom-donut-boxes": {
    eyebrow: "Why Choose Our Custom Donut Boxes",
    heading: "At BoxyPack, we blend presentation with practicality. Our logo printed donut packaging boxes make your brand memorable while maintaining freshness and protection.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Build",
        description: "Sturdy food-grade material for freshness and structure.",
      },
      {
        icon: "check",
        title: "Eco-Safe Choice",
        description: "Made from recyclable and compostable paperboard.",
      },
      {
        icon: "star",
        title: "Brand Visibility",
        description: "Custom logo, colors, and artwork options.",
      },
      {
        icon: "palette",
        title: "Flexible Ordering",
        description: "Ideal for retail, wholesale, or franchise needs.",
      },
    ],
    closingDescription:
      "Our custom printed donut boxes give your bakery a professional edge, combining freshness, functionality, and beautiful design in every order.",
  },
  
  "custom-pastry-boxes": {
    eyebrow: "Why Choose Our Custom Pastry Boxes",
    heading: "At BoxyPack, we focus on combining freshness, strength, and presentation. Our pastry packaging boxes wholesale selection offers unmatched value for bakeries that care about both quality and image.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Sturdy Design",
        description: "Keeps pastries secure during display or transport.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "100% recyclable, food-safe paperboard.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "Add your logo, colors, or artwork for recognition.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available for small runs and wholesale quantities.",
      },
    ],
    closingDescription:
      "Our custom printed pastry boxes enhance your brand presentation while ensuring every pastry reaches customers in perfect condition.",
  },
  
  "custom-cake-boxes": {
    eyebrow: "Why Choose Our Custom Cake Boxes",
    heading: "At BoxyPack, we combine visual appeal with structural reliability. Our printed cake boxes for bakeries offer secure packaging that enhances your brand's image.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Build",
        description: "Reinforced base and lid prevent bending and damage.",
      },
      {
        icon: "check",
        title: "Eco-Safe Design",
        description: "Made from recyclable, food-grade paperboard.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "Add your logo, artwork, and colors for unique branding.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available in small or large wholesale quantities.",
      },
    ],
    closingDescription:
      "Our custom cake boxes are crafted to impress, ensuring your cakes arrive fresh, stable, and beautifully packaged for every celebration.",
  },
  
  "custom-cookie-boxes": {
    eyebrow: "Why Choose Our Custom Cookie Boxes",
    heading: "At BoxyPack, we combine food safety with beautiful design. Our cookie packaging boxes wholesale collection is crafted to help brands deliver quality and confidence in every order.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Structure",
        description: "Keeps cookies secure and fresh inside.",
      },
      {
        icon: "check",
        title: "Sustainable Design",
        description: "Made from recyclable and compostable paperboard.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logo, color themes, and designs for brand recall.",
      },
      {
        icon: "palette",
        title: "Bulk Efficiency",
        description: "Affordable pricing for large bakery or retail orders.",
      },
    ],
    closingDescription:
      "Our custom cookie boxes are a perfect blend of practicality and presentation made to showcase your treats while keeping them perfectly fresh.",
  },
  
  "custom-gable-boxes": {
    eyebrow: "Why Choose Our Custom Gable Boxes",
    heading: "At BoxyPack, we balance utility and presentation in every design. Our custom printed gable boxes wholesale solutions help bakeries deliver freshness and quality with style.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Convenient Carry Design",
        description: "Built-in handles make transport easy.",
      },
      {
        icon: "check",
        title: "Eco-Safe Materials",
        description: "Recyclable and sustainable packaging options.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "Add logos, colors, and patterns for branded packaging.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for food, gifts, or bakery takeaway packaging.",
      },
    ],
    closingDescription:
      "Our custom gable boxes deliver reliable protection, modern appeal, and eco-friendly design, making them an ideal choice for every bakery or retail brand.",
  },
  
  "custom-candy-boxes": {
    eyebrow: "Why Choose Our Custom Candy Boxes",
    heading: "At BoxyPack, we blend creativity, protection, and premium presentation. Our candy packaging boxes wholesale options make your products stand out while keeping them fresh and intact.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Design",
        description: "Perfect for retail shelves or gift displays.",
      },
      {
        icon: "check",
        title: "Eco-Safe Material",
        description: "Made from recyclable, food-grade cardboard.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Showcase your logo, colors, and artwork beautifully.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Ideal for small runs and large wholesale volumes.",
      },
    ],
    closingDescription:
      "Our custom candy boxes provide the perfect mix of design and durability—packaging that delights customers before they even take the first bite.",
  },
  
  "mini-cupcake-boxes": {
    eyebrow: "Why Choose Our Mini Cupcake Boxes",
    heading: "At BoxyPack, we mix creativity with quality. Our custom-printed cupcake boxes wholesale range provides practical solutions with a professional touch.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Secure Fit",
        description: "Inserts prevent movement and protect frosting.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Build",
        description: "Recyclable, biodegradable, and safe for food packaging.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Print your logo, color scheme, or seasonal artwork.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available for retail, event, or wholesale supply.",
      },
    ],
    closingDescription:
      "Our mini cupcake boxes deliver the ideal blend of beauty, structure, and freshness, designed to make every treat stand out.",
  },
  
  "pink-donut-boxes": {
    eyebrow: "Why Choose Our Pink Donut Boxes",
    heading: "At BoxyPack, we mix vibrant design with reliable protection. Our pink donut packaging boxes are made for brands that want to stand out while maintaining freshness and quality.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Attractive Design",
        description: "Pink tones create a cheerful, premium presentation.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Made from recyclable and eco-friendly paperboard.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, artwork, or tagline for identity.",
      },
      {
        icon: "palette",
        title: "Wholesale Options",
        description: "Ideal for bakeries, cafes, and large bulk orders.",
      },
    ],
    closingDescription:
      "Our custom printed pink donut boxes combine color, quality, and convenience, helping your bakery create packaging that's both practical and visually delightful.",
  },
  
  "window-bakery-boxes": {
    eyebrow: "Why Choose Our Window Bakery Boxes",
    heading: "At BoxyPack, we combine design, visibility, and performance. Our custom window packaging boxes wholesale solutions are made to showcase your products and strengthen your brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Showcase Appeal",
        description: "Transparent window highlights your baked goods.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "Eco-friendly paperboard supports green packaging.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "Add your logo, brand colors, or creative artwork.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available for small and large bakery quantities.",
      },
    ],
    closingDescription:
      "Our window bakery boxes give your packaging both functionality and beauty, turning every baked treat into a delightful visual experience.",
  },
  
  "bakery-gift-boxes": {
    eyebrow: "Why Choose Our Bakery Gift Boxes",
    heading: "At BoxyPack, we bring together style and structure. Our printed bakery gift boxes wholesale line ensures every baked creation looks as good as it tastes.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Design",
        description: "Adds value and visual appeal to bakery gifts.",
      },
      {
        icon: "check",
        title: "Eco-Conscious Build",
        description: "Fully recyclable and food-safe materials.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "Personalize with logos, artwork, and color themes.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for desserts, pastries, and mixed bakery gifts.",
      },
    ],
    closingDescription:
      "Our custom bakery gift packaging is built to impress, offering secure protection and premium presentation that strengthens your brand identity.",
  },
  
  "custom-cupcake-boxes": {
    eyebrow: "Why Choose Our Custom Cupcake Boxes",
    heading: "At BoxyPack, we blend creativity with quality construction. Our cupcake packaging boxes wholesale solutions are built to protect your products while showcasing your brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Secure Design",
        description: "Inserts and locks prevent movement and damage.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Recyclable, biodegradable, and food-safe materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logos, patterns, and color themes.",
      },
      {
        icon: "palette",
        title: "Flexible Quantities",
        description: "Ideal for small bakeries or large bulk orders.",
      },
    ],
    closingDescription:
      "Our custom cupcake boxes deliver beauty, strength, and eco-friendly quality, perfect for bakeries that value detail in every box.",
  },
  
  "small-cake-boxes": {
    eyebrow: "Why Choose Our Small Cake Boxes",
    heading: "At BoxyPack, we focus on making every box as premium as your product. Our custom-printed small cake boxes wholesale line combines durability with sophisticated design.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Build",
        description: "Keeps cakes fresh and secure in transit.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "100% recyclable and eco-friendly paperboard.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "Add your logo, color scheme, or artwork.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available for small runs and large wholesale needs.",
      },
    ],
    closingDescription:
      "Our small cake packaging boxes deliver an elegant way to protect and promote your baked goods ideal for bakeries, cafés, and dessert caterers.",
  },
  
  "sweet-gift-boxes": {
    eyebrow: "Why Choose Our Sweet Gift Boxes",
    heading: "At BoxyPack, we combine premium packaging with meaningful design. Our custom sweet gift packaging boxes are ideal for brands that want to present their products with elegance and care.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Adds a professional and festive look to your sweets.",
      },
      {
        icon: "check",
        title: "Eco-Safe Build",
        description: "Made from recyclable and food-safe materials.",
      },
      {
        icon: "star",
        title: "Custom Options",
        description: "Add logo, artwork, and branding details easily.",
      },
      {
        icon: "palette",
        title: "Wholesale Flexibility",
        description: "Available for small or bulk bakery orders.",
      },
    ],
    closingDescription:
      "Our sweet gift boxes help your brand deliver a lasting impression, beautiful packaging that complements every delicious creation inside.",
  },
  
  "custom-truffle-boxes": {
    eyebrow: "Why Choose Our Custom Truffle Boxes",
    heading: "At BoxyPack, we combine elegant presentation with durable protection. Our truffle packaging boxes wholesale line ensures your chocolates stay flawless and your brand looks exceptional.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Adds elegance to gourmet chocolates and desserts.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Recyclable and eco-friendly paper materials.",
      },
      {
        icon: "star",
        title: "Custom Printing",
        description: "Add logos, foil stamping, or embossing for luxury branding.",
      },
      {
        icon: "palette",
        title: "Wholesale Advantage",
        description: "Flexible ordering for small or large businesses.",
      },
    ],
    closingDescription:
      "Our custom truffle boxes enhance every detail of your product, turning fine chocolates into unforgettable gifts that elevate your brand.",
  },

  // Jewelry Boxes Category
  "jewelry-boxes": {
    eyebrow: "Why Choose Our Jewelry Boxes",
    heading: "At BoxyPack, we turn packaging into presentation. Our eco-friendly jewelry packaging boxes are designed to reflect quality and style while keeping your items secure.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Presentation",
        description: "High-end finishes for a lasting impression.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "Designed with recyclable and biodegradable components.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add colors, logos, and unique textures.",
      },
      {
        icon: "palette",
        title: "Affordable Pricing",
        description: "Get the best jewelry box price for large or custom orders.",
      },
    ],
    closingDescription:
      "We create packaging that adds confidence and class to every jewelry collection.",
  },

  // Jewelry Boxes Subcategories
  "anklet-boxes": {
    eyebrow: "Why Choose Our Anklet Boxes",
    heading: "At BoxyPack, we combine design innovation with jewelry-grade protection. Our custom anklet packaging boxes wholesale line delivers quality that enhances your brand's identity.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Built to elevate your jewelry presentation.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "Crafted from recyclable, eco-friendly boards.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, foil embossing, or metallic accents.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available for retail, e-commerce, or wholesale supply.",
      },
    ],
    closingDescription:
      "Our anklet boxes provide the perfect mix of durability and elegance, offering jewelry packaging that looks beautiful and performs flawlessly.",
  },
  
  "velvet-bags": {
    eyebrow: "Why Choose Our Velvet Bags",
    heading: "At BoxyPack, we focus on elegance, detail, and quality. Our custom velvet jewelry bags wholesale selection ensures every product is presented beautifully and securely.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxurious Feel",
        description: "Soft velvet fabric gives a premium tactile experience.",
      },
      {
        icon: "check",
        title: "Sustainable Choice",
        description: "Made from eco-friendly, reusable materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add embroidered or foil-stamped logos.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for jewelry, cosmetics, and gift packaging.",
      },
    ],
    closingDescription:
      "Our velvet bags bring together elegance and functionality, helping brands create a timeless impression that customers remember.",
  },
  
  "kraft-jewelry-boxes": {
    eyebrow: "Why Choose Our Kraft Jewelry Boxes",
    heading: "At BoxyPack, we merge sustainability with style. Our eco friendly kraft jewelry packaging provides strength, simplicity, and brand appeal.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Safe Design",
        description: "100% recyclable, biodegradable materials.",
      },
      {
        icon: "check",
        title: "Durable Build",
        description: "Rigid kraft paperboard ensures long-lasting use.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logos, foil accents, or colored printing.",
      },
      {
        icon: "palette",
        title: "Cost-Effective",
        description: "Perfect for both retail and wholesale packaging.",
      },
    ],
    closingDescription:
      "Our kraft jewelry boxes are an ideal mix of elegance and environmental responsibility designed to protect your jewelry while showcasing your eco values.",
  },
  
  "cardboard-jewelry-boxes": {
    eyebrow: "Why Choose Our Cardboard Jewelry Boxes",
    heading: "At BoxyPack, we combine craftsmanship with creativity. Our cardboard jewelry packaging boxes wholesale line offers versatile options that balance presentation and protection.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Design",
        description: "Premium quality with a refined look.",
      },
      {
        icon: "check",
        title: "Eco-Conscious Materials",
        description: "100% recyclable and sustainable.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil logos, patterns, or textured finishes.",
      },
      {
        icon: "palette",
        title: "Wholesale Advantage",
        description: "Affordable pricing for bulk and boutique orders.",
      },
    ],
    closingDescription:
      "Our luxury cardboard jewelry packaging delivers quality your clients can see and feel helping your brand stand out with every unboxing.",
  },
  
  "jewelry-subscription-box": {
    eyebrow: "Why Choose Our Jewelry Subscription Boxes",
    heading: "At BoxyPack, we combine functionality with luxury. Our custom jewelry subscription packaging line delivers strong, elegant, and brand-focused packaging solutions.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Durable Design",
        description: "Protects every jewelry piece during shipping.",
      },
      {
        icon: "check",
        title: "Luxury Finish",
        description: "Adds value and exclusivity to each unboxing.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Build",
        description: "Recyclable materials with premium feel.",
      },
      {
        icon: "palette",
        title: "Custom Branding",
        description: "Perfect for logos, foil accents, and creative printing.",
      },
    ],
    closingDescription:
      "Our luxury jewelry subscription gift boxes help brands deliver a memorable unboxing experience while keeping each piece safe and beautifully presented.",
  },
  
  "pendant-boxes": {
    eyebrow: "Why Choose Our Pendant Boxes",
    heading: "At BoxyPack, we focus on blending protection and beauty. Our custom pendant packaging boxes wholesale line ensures your jewelry arrives safe and displayed beautifully.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Presentation",
        description: "Enhances your pendant's value and appeal.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Made from eco-friendly and recyclable materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil logos, textures, and color designs.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Perfect for small boutiques or bulk retailers.",
      },
    ],
    closingDescription:
      "Our luxury jewelry pendant boxes deliver premium quality and professional style, helping your brand stand out with every customer interaction.",
  },
  
  "bracelet-boxes": {
    eyebrow: "Why Choose Our Bracelet Boxes",
    heading: "At BoxyPack, we blend durability with visual excellence. Our bracelet packaging boxes wholesale supplier solutions are built for brands that value presentation and reliability.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Look",
        description: "Adds a touch of class to every bracelet display.",
      },
      {
        icon: "check",
        title: "Sustainable Build",
        description: "Eco-friendly and recyclable materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Foil, embossed, or printed designs available.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Suitable for small boutiques and large retailers.",
      },
    ],
    closingDescription:
      "Our luxury bracelet packaging boxes bring elegance and strength together crafted to protect your jewelry while enhancing its presentation.",
  },
  
  "ring-boxes": {
    eyebrow: "Why Choose Our Ring Boxes",
    heading: "At BoxyPack, we blend design, strength, and luxury. Our custom ring packaging boxes wholesale line is built for jewelers who value premium quality and visual appeal.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Presentation",
        description: "Highlights every ring's beauty and craftsmanship.",
      },
      {
        icon: "check",
        title: "Eco-Conscious Build",
        description: "Made from recyclable and sustainable materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil, emboss, or full-color logo printing.",
      },
      {
        icon: "palette",
        title: "Flexible Orders",
        description: "Available for boutique or wholesale jewelry packaging.",
      },
    ],
    closingDescription:
      "Our eco friendly ring packaging boxes are the perfect balance of luxury and sustainability crafted to enhance your jewelry's beauty while protecting it with care.",
  },
  
  "earring-boxes": {
    eyebrow: "Why Choose Our Earring Boxes",
    heading: "At BoxyPack, we combine elegance and durability to deliver packaging that enhances your jewelry presentation. Our custom earring packaging boxes wholesale collection gives brands reliable, eco-conscious, and attractive solutions.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Design",
        description: "Enhances product value and customer experience.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Materials",
        description: "Made from recyclable, sustainable paperboard.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logo printing, foil, or emboss finishes.",
      },
      {
        icon: "palette",
        title: "Flexible Quantities",
        description: "Suitable for boutique or wholesale needs.",
      },
    ],
    closingDescription:
      "Our printed earring packaging boxes ensure your jewelry arrives in perfect condition beautifully packaged and ready to impress.",
  },
  
  "luxury-jewelry-packaging": {
    eyebrow: "Why Choose Our Luxury Jewelry Packaging",
    heading: "At BoxyPack, we merge art and precision. Our high end jewelry packaging with logo options deliver timeless appeal and superior protection for your most valuable pieces.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Presentation",
        description: "Crafted for a refined and exclusive unboxing experience.",
      },
      {
        icon: "check",
        title: "Premium Materials",
        description: "Rigid paperboard and soft-touch finishes.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil logos, embossing, or inside printing.",
      },
      {
        icon: "palette",
        title: "Eco-Conscious Design",
        description: "Fully recyclable and responsibly produced.",
      },
    ],
    closingDescription:
      "Our custom luxury jewelry gift packaging provides a flawless balance of beauty, strength, and sustainability perfect for premium brands looking to impress.",
  },
  
  "necklace-boxes": {
    eyebrow: "Why Choose Our Necklace Boxes",
    heading: "At BoxyPack, we combine visual elegance with functional strength. Our custom necklace packaging boxes wholesale solutions are made to enhance your jewelry's beauty while keeping it safe.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxury Presentation",
        description: "Designed for a polished, premium unboxing.",
      },
      {
        icon: "check",
        title: "Sustainable Design",
        description: "Made from recyclable, eco-safe materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logos, foil stamping, or inner printing.",
      },
      {
        icon: "palette",
        title: "Wholesale Options",
        description: "Ideal for retailers and jewelry suppliers.",
      },
    ],
    closingDescription:
      "Our luxury jewelry necklace packaging is crafted to impress delivering a blend of strength, design, and style that enhances your brand identity.",
  },
  
  "small-jewelry-boxes": {
    eyebrow: "Why Choose Our Small Jewelry Boxes",
    heading: "At BoxyPack, we specialize in compact packaging that leaves a big impression. Our mini jewelry gift packaging boxes are made to protect and display jewelry with class and convenience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Presentation",
        description: "Perfect for rings, earrings, and charms.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Crafted from recyclable materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil stamping, embossing, or printed logos.",
      },
      {
        icon: "palette",
        title: "Wholesale Advantage",
        description: "Affordable bulk pricing for all jewelry brands.",
      },
    ],
    closingDescription:
      "Our custom printed small jewelry boxes combine durability, design, and detail helping your products shine from packaging to presentation.",
  },
  
  "necklace-cards": {
    eyebrow: "Why Choose Our Necklace Cards",
    heading: "At BoxyPack, we bring quality and creativity together. Our custom necklace display cards wholesale collection offers professional presentation and dependable quality at affordable rates.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Display",
        description: "Keeps necklaces tangle-free and beautifully showcased.",
      },
      {
        icon: "check",
        title: "Eco-Safe Materials",
        description: "Made from recyclable and biodegradable paper.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logos, foil stamping, or printed artwork.",
      },
      {
        icon: "palette",
        title: "Affordable Bulk Orders",
        description: "Perfect for boutiques and jewelry retailers.",
      },
    ],
    closingDescription:
      "Our printed necklace packaging cards ensure your jewelry looks professional, appealing, and ready for sale both in-store and online.",
  },
  
  "jewelry-bags": {
    eyebrow: "Why Choose Our Jewelry Bags",
    heading: "At BoxyPack, we combine premium craftsmanship with branding flexibility. Our custom jewelry packaging bags wholesale line delivers eco-friendly, reusable, and luxurious options for jewelry presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Presentation",
        description: "Enhances your product's value and unboxing experience.",
      },
      {
        icon: "check",
        title: "Sustainable Options",
        description: "Made from recyclable and reusable materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil logos, ribbon handles, or color printing.",
      },
      {
        icon: "palette",
        title: "Bulk Flexibility",
        description: "Great for small boutiques or large-scale retailers.",
      },
    ],
    closingDescription:
      "Our luxury jewelry shopping bags offer an eco-friendly yet high-end solution that protects your jewelry and strengthens your brand identity.",
  },

  // Soap Boxes Category
  "soap-boxes-industry": {
    eyebrow: "Why Choose Our Soap Boxes",
    heading: "At BoxyPack, sustainability meets style. Our eco friendly soap packaging boxes protect your soaps while elevating your product display.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Attractive Presentation",
        description: "Eye-catching prints for shelf and gifting appeal.",
      },
      {
        icon: "check",
        title: "Eco-Conscious Design",
        description: "Made with recyclable, biodegradable paper materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add brand logos, colors, and window designs.",
      },
      {
        icon: "palette",
        title: "Affordable Rates",
        description: "Competitive soap boxes price for wholesale orders.",
      },
    ],
    closingDescription:
      "We make packaging that connects your product's purity with your customer's trust.",
  },

  // Soap Boxes Subcategories
  "soap-sleeve-packaging": {
    eyebrow: "Why Choose Our Soap Sleeve Packaging",
    heading: "At BoxyPack, we combine sustainability with creativity. Our custom soap sleeve boxes wholesale collection delivers eco-friendly protection and standout branding for every soap type.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Sustainable Build",
        description: "Made from 100% recyclable paper materials.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, product name, or color palette.",
      },
      {
        icon: "star",
        title: "Professional Finish",
        description: "Clean edges and smooth surfaces for retail polish.",
      },
      {
        icon: "palette",
        title: "Bulk Advantage",
        description: "Affordable wholesale pricing for all order sizes.",
      },
    ],
    closingDescription:
      "Our eco friendly soap sleeve packaging offers clean design and solid protection—crafted to impress customers and support green packaging goals.",
  },
  
  "custom-bath-bomb-boxes": {
    eyebrow: "Why Choose Our Bath Bomb Boxes",
    heading: "At BoxyPack, we bring creativity and precision to every design. Our custom printed bath bomb gift boxes provide durability, aesthetic appeal, and sustainable quality for all packaging needs.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Enhances product visibility and retail presence.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "Made from recyclable, biodegradable paperboard.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil, embossing, or printed artwork.",
      },
      {
        icon: "palette",
        title: "Wholesale Flexibility",
        description: "Available in bulk at affordable prices.",
      },
    ],
    closingDescription:
      "Our luxury bath bomb packaging with logo ensures a lasting impression offering strong protection, eco appeal, and unmatched style for your brand.",
  },
  
  "soap-wrapping-paper": {
    eyebrow: "Why Choose Our Soap Wrapping Paper",
    heading: "At BoxyPack, we blend sustainability and presentation into every wrap. Our custom soap wrapping paper wholesale options deliver elegance and protection with minimal environmental impact.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Friendly Design",
        description: "100% recyclable and biodegradable materials.",
      },
      {
        icon: "check",
        title: "Custom Printing",
        description: "Add brand logos, patterns, or ingredient info.",
      },
      {
        icon: "star",
        title: "Professional Appearance",
        description: "Smooth finish for easy wrapping.",
      },
      {
        icon: "palette",
        title: "Bulk Advantage",
        description: "Perfect for both retail and wholesale packaging.",
      },
    ],
    closingDescription:
      "Our kraft soap wrapping sheets bulk order options give you high-quality, eco-safe wrapping that enhances your soap's shelf presence and keeps your brand memorable.",
  },
  
  "handmade-soap-boxes": {
    eyebrow: "Why Choose Our Handmade Soap Boxes",
    heading: "At BoxyPack, we understand the value of natural presentation. Our custom handmade soap packaging boxes combine eco-friendly materials with modern print quality to make your products stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Safe Build",
        description: "100% recyclable and biodegradable materials.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, colors, and ingredient details.",
      },
      {
        icon: "star",
        title: "Elegant Design",
        description: "Perfect balance of protection and aesthetic value.",
      },
      {
        icon: "palette",
        title: "Affordable Wholesale",
        description: "Ideal for small brands and bulk orders alike.",
      },
    ],
    closingDescription:
      "Our eco friendly handmade soap packaging gives your soaps a professional, sustainable look crafted to impress customers and preserve product integrity.",
  },
  
  "luxury-soap-packaging": {
    eyebrow: "Why Choose Our Luxury Soap Packaging",
    heading: "At BoxyPack, we blend artistry and durability. Our custom printed luxury soap boxes supplier collection offers the perfect combination of style, sustainability, and precision.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Built from high-strength and high-appeal materials.",
      },
      {
        icon: "check",
        title: "Elegant Branding",
        description: "Add your logo with foil, embossing, or texture.",
      },
      {
        icon: "star",
        title: "Eco-Safe Design",
        description: "Fully recyclable and sustainably made.",
      },
      {
        icon: "palette",
        title: "Wholesale Benefits",
        description: "Flexible pricing for boutique and retail brands.",
      },
    ],
    closingDescription:
      "Our high end soap packaging with logo delivers luxury and strength—crafted to represent your brand's class with every sale or gift.",
  },
  
  "square-soap-boxes": {
    eyebrow: "Why Choose Our Square Soap Boxes",
    heading: "At BoxyPack, we combine sustainable materials with premium craftsmanship. Our custom square soap packaging boxes wholesale options deliver elegance, quality, and affordability for growing and established soap brands.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Friendly Build",
        description: "Made from recyclable kraft and cardboard materials.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, artwork, or product details.",
      },
      {
        icon: "star",
        title: "Strong Design",
        description: "Protects soaps during transit and display.",
      },
      {
        icon: "palette",
        title: "Affordable Bulk Options",
        description: "Ideal for boutique and retail packaging.",
      },
    ],
    closingDescription:
      "Our eco friendly square soap packaging gives your brand the ideal blend of strength, simplicity, and sophistication.",
  },
  
  "soap-bar-box": {
    eyebrow: "Why Choose Our Soap Bar Boxes",
    heading: "At BoxyPack, we bring together strength, sustainability, and design precision. Our custom soap bar packaging boxes wholesale solutions help your brand stand out with high-quality, eco-friendly presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Safe Design",
        description: "Crafted from recyclable and biodegradable paperboard.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, artwork, or product details in full color.",
      },
      {
        icon: "star",
        title: "Strong Build",
        description: "Provides excellent protection during shipping and display.",
      },
      {
        icon: "palette",
        title: "Cost-Effective Wholesale",
        description: "Designed for small and large-scale production.",
      },
    ],
    closingDescription:
      "Our eco friendly soap bar packaging delivers premium presentation with sustainable quality ideal for every soap business.",
  },
  
  "paper-soap-boxes": {
    eyebrow: "Why Choose Our Paper Soap Boxes",
    heading: "At BoxyPack, we combine sustainability with design precision. Our custom paper soap packaging boxes wholesale range delivers reliable, attractive, and eco-safe solutions for modern brands.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Friendly Design",
        description: "Made from recyclable and biodegradable materials.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, colors, and artwork.",
      },
      {
        icon: "star",
        title: "Premium Look",
        description: "Smooth finish with high-quality printing.",
      },
      {
        icon: "palette",
        title: "Affordable Wholesale",
        description: "Bulk pricing for boutique and large-scale needs.",
      },
    ],
    closingDescription:
      "Our eco-friendly paper soap packaging ensures lasting protection and a professional retail appearance that reflects your brand's values.",
  },
  
  "kraft-soap-boxes": {
    eyebrow: "Why Choose Our Kraft Soap Boxes",
    heading: "At BoxyPack, we merge sustainability with quality craftsmanship. Our eco-friendly kraft soap packaging boxes provide durable, customizable, and affordable solutions for all soap brands.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Natural Appeal",
        description: "Showcases your soap's organic and handmade quality.",
      },
      {
        icon: "check",
        title: "Sustainable Design",
        description: "Made from 100% recyclable kraft materials.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, colors, and ingredient details.",
      },
      {
        icon: "palette",
        title: "Affordable Wholesale",
        description: "Perfect for small and large-scale soap makers.",
      },
    ],
    closingDescription:
      "Our custom-printed kraft soap packaging reflects your eco values and enhances your brand's authenticity with professional presentation.",
  },
  
  "kraft-pillow-soap-boxes-industry": {
    eyebrow: "Why Choose Our Kraft Pillow Soap Boxes",
    heading: "At BoxyPack, we combine eco-safe materials with modern design. Our custom kraft pillow soap packaging wholesale line delivers stylish, sustainable, and functional packaging for today's soap brands.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Friendly Build",
        description: "Made from 100% recyclable kraft materials.",
      },
      {
        icon: "check",
        title: "Unique Design",
        description: "Pillow shape adds visual appeal and charm.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil stamping, logos, or printed patterns.",
      },
      {
        icon: "palette",
        title: "Affordable Bulk Orders",
        description: "Ideal for small makers and large retailers.",
      },
    ],
    closingDescription:
      "Our eco-friendly kraft pillow soap packaging is lightweight, durable, and visually refined, perfect for brands that value sustainability and elegance.",
  },

  // CBD Boxes Category
  "cbd-boxes": {
    eyebrow: "Why Choose Our CBD Boxes",
    heading: "At BoxyPack, quality meets compliance. Our custom CBD boxes not only protect your products but also reflect brand trust and safety.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Sleek visuals that elevate retail presentation.",
      },
      {
        icon: "check",
        title: "Eco-Conscious Build",
        description: "100% recyclable CBD packaging materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logo, finish, and product information clearly.",
      },
      {
        icon: "palette",
        title: "Competitive Pricing",
        description: "Get the best CBD boxes price for bulk and custom orders.",
      },
    ],
    closingDescription:
      "We design packaging that meets regulations while keeping your products shelf-ready and attractive.",
  },

  // CBD Boxes Subcategories
  "cbd-gift-boxes": {
    eyebrow: "Why Choose Our CBD Gift Boxes",
    heading: "At BoxyPack, we combine style, sustainability, and structure. Our custom CBD gift boxes help brands build trust and recognition through thoughtful packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxury Appeal",
        description: "Designed for an elevated retail and gifting experience.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "Recyclable and biodegradable paper options.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add foil logos, patterns, or interior printing.",
      },
      {
        icon: "palette",
        title: "Wholesale Advantage",
        description: "Affordable bulk pricing for growing CBD brands.",
      },
    ],
    closingDescription:
      "Our CBD gift boxes with logo are crafted to balance quality, aesthetics, and sustainability making your products stand out in competitive markets.",
  },
  
  "cbd-gummies-boxes": {
    eyebrow: "Why Choose Our CBD Gummies Boxes",
    heading: "At BoxyPack, we combine packaging strength with visual elegance. Our custom CBD gummies boxes deliver long-lasting quality, sustainable materials, and bold brand visibility.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Durable Structure",
        description: "Keeps gummies safe during storage and transport.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Design",
        description: "Recyclable materials for responsible packaging.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, color theme, or printed patterns.",
      },
      {
        icon: "palette",
        title: "Bulk Benefits",
        description: "Affordable wholesale pricing for growing CBD brands.",
      },
    ],
    closingDescription:
      "Our CBD gummies packaging creates an unmatched retail presence balancing freshness, functionality, and premium aesthetics.",
  },
  
  "custom-cannabis-boxes": {
    eyebrow: "Why Choose Our Custom Cannabis Boxes",
    heading: "At BoxyPack, we combine packaging innovation with compliance expertise. Our cannabis packaging boxes help brands stand out while meeting safety and sustainability standards.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Build",
        description: "Strong structure protects freshness and form.",
      },
      {
        icon: "check",
        title: "Compliant Design",
        description: "Meets legal packaging requirements.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logo, label space, and creative artwork.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Production",
        description: "Made from recyclable and safe materials.",
      },
    ],
    closingDescription:
      "Our cannabis boxes wholesale solutions are perfect for growing dispensaries and premium cannabis brands looking for sustainable, stylish packaging.",
  },
  
  "cbd-oil-boxes": {
    eyebrow: "Why Choose Our CBD Oil Boxes",
    heading: "At BoxyPack, we blend durability with design precision. Our custom CBD oil boxes are built to protect delicate bottles while promoting your brand's premium identity.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Design",
        description: "Keeps oils safe from leaks and light exposure.",
      },
      {
        icon: "check",
        title: "Premium Look",
        description: "Smooth finishes and professional printing options.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Build",
        description: "Made from recyclable and biodegradable materials.",
      },
      {
        icon: "palette",
        title: "Affordable Bulk Orders",
        description: "Competitive pricing for small and large brands.",
      },
    ],
    closingDescription:
      "Our CBD oil packaging delivers safety, elegance, and sustainability making your brand stand out in every market.",
  },
  
  "hemp-oil-boxes": {
    eyebrow: "Why Choose Our Hemp Oil Boxes",
    heading: "At BoxyPack, we merge quality, compliance, and creativity. Our custom hemp oil boxes are tailored to ensure your brand's professional appearance while maintaining sustainability.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Durability",
        description: "Ensures your oil bottles remain safe in transit.",
      },
      {
        icon: "check",
        title: "Eco-Safe Materials",
        description: "Made from recyclable and biodegradable paperboard.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, product info, and compliance labels.",
      },
      {
        icon: "palette",
        title: "Affordable Bulk Orders",
        description: "Competitive pricing for wholesale buyers.",
      },
    ],
    closingDescription:
      "Our hemp oil packaging offers premium protection and presentation crafted to support your brand's natural and professional appeal.",
  },
  
  "pre-roll-boxes": {
    eyebrow: "Why Choose Our Pre Roll Boxes",
    heading: "At BoxyPack, we combine compliance, creativity, and craftsmanship. Our custom pre roll boxes ensure product safety, enhance brand value, and meet industry standards.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Compliant Design",
        description: "Child-resistant and labeling-ready formats.",
      },
      {
        icon: "check",
        title: "Premium Build",
        description: "Protects pre rolls from crushing and moisture.",
      },
      {
        icon: "star",
        title: "Eco-Safe Materials",
        description: "Crafted from recyclable and biodegradable paperboard.",
      },
      {
        icon: "palette",
        title: "Custom Branding",
        description: "Add your logo, pattern, or artwork for recognition.",
      },
    ],
    closingDescription:
      "Our pre roll packaging delivers professional presentation, consumer trust, and brand growth through premium-grade design.",
  },
  
  "cbd-tincture-boxes": {
    eyebrow: "Why Choose Our CBD Tincture Boxes",
    heading: "At BoxyPack, we combine craftsmanship with compliance. Our custom CBD tincture boxes are built to keep products secure, meet regulations, and boost brand trust.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Design",
        description: "Ensures glass tinctures remain safe and stable.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "Made from recyclable and eco-friendly paperboard.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, artwork, and compliance info.",
      },
      {
        icon: "palette",
        title: "Bulk Value",
        description: "Competitive rates for wholesale and retail packaging.",
      },
    ],
    closingDescription:
      "Our CBD tincture packaging delivers both elegance and efficiency crafted to represent quality and care in every box.",
  },

  // Christmas Boxes Category
  "christmas-boxes": {
    eyebrow: "Why Choose Our Christmas Boxes",
    heading: "At BoxyPack, packaging becomes celebration. Our custom Christmas boxes turn ordinary gifts into memorable experiences.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Festive Appeal",
        description: "Bright prints and cheerful holiday designs.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Choice",
        description: "Made from recyclable materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add your logo, ribbons, or foil details.",
      },
      {
        icon: "palette",
        title: "Affordable Rates",
        description: "Get the best Christmas boxes price for wholesale orders.",
      },
    ],
    closingDescription:
      "We deliver packaging that carries your brand's joy straight into every customer's hands.",
  },

  // Christmas Boxes Subcategories
  "christmas-boxes-with-lids": {
    eyebrow: "Why Choose Our Christmas Boxes with Lids",
    heading: "At BoxyPack, we combine craftsmanship, creativity, and quality. Our Christmas boxes with lids help brands celebrate the festive season with elegance and care.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Seasonal Design",
        description: "Perfectly tailored for holiday gifting and retail display.",
      },
      {
        icon: "check",
        title: "Strong Build",
        description: "Durable enough to protect gifts during shipping and handling.",
      },
      {
        icon: "star",
        title: "Eco-Conscious Materials",
        description: "Made from recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Custom Branding",
        description: "Add your logo, colors, or seasonal artwork for recognition.",
      },
    ],
    closingDescription:
      "Our Christmas packaging ensures a premium unboxing experience, spreading joy and boosting brand recall with every gift.",
  },
  
  "christmas-candy-boxes": {
    eyebrow: "Why Choose Our Christmas Candy Boxes",
    heading: "At BoxyPack, we combine quality, creativity, and festive flair to make your candies stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Protects candies from moisture and breakage.",
      },
      {
        icon: "check",
        title: "Custom Designs",
        description: "Choose prints, colors, and structures that match your holiday theme.",
      },
      {
        icon: "star",
        title: "Eco-Conscious Materials",
        description: "Made from recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Brand Enhancement",
        description: "Add your logo, pattern, or artwork for strong visual appeal.",
      },
    ],
    closingDescription:
      "Our Christmas candy packaging delivers the perfect unboxing joy while strengthening your brand's holiday presence.",
  },
  
  "christmas-gift-boxes": {
    eyebrow: "Why Choose Our Christmas Gift Boxes",
    heading: "At BoxyPack, we combine craftsmanship, design precision, and festive flair to create packaging that impresses.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Durable materials that protect and enhance every gift.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, colors, or artwork for festive recognition.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Made with recyclable and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Versatile Design",
        description: "Suitable for personal gifting or large retail displays.",
      },
    ],
    closingDescription:
      "Our Christmas gift boxes deliver memorable unboxing moments that strengthen your brand's holiday connection with customers.",
  },
  
  "christmas-eve-boxes": {
    eyebrow: "Why Choose Our Christmas Eve Boxes",
    heading: "At BoxyPack, we blend craftsmanship, creativity, and festive design to deliver premium Christmas Eve packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Build",
        description: "Protects and presents gifts with strength and elegance.",
      },
      {
        icon: "check",
        title: "Custom Designs",
        description: "Add logos, colors, and patterns for festive branding.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Sustainable and recyclable paperboard options.",
      },
      {
        icon: "palette",
        title: "Memorable Presentation",
        description: "Designed to elevate every Christmas Eve celebration.",
      },
    ],
    closingDescription:
      "Our Christmas Eve boxes create lasting impressions, making your brand part of every cherished holiday memory.",
  },
  
  "christmas-present-boxes": {
    eyebrow: "Why Choose Our Christmas Present Boxes",
    heading: "At BoxyPack, we blend creativity, precision, and quality to deliver premium Christmas packaging solutions.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Build",
        description: "Durable boxes that protect and elevate every gift.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add festive artwork, logos, and colors for strong brand presence.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Made from recyclable and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for personal, retail, or corporate gifting.",
      },
    ],
    closingDescription:
      "Our Christmas present boxes enhance your holiday brand presence and create memorable unboxing experiences for every customer.",
  },
  
  "christmas-cookie-boxes": {
    eyebrow: "Why Choose Our Christmas Cookie Boxes",
    heading: "At BoxyPack, we merge design precision, food safety, and festive creativity to deliver outstanding packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Food-Safe Quality",
        description: "Made with food-grade, non-toxic materials.",
      },
      {
        icon: "check",
        title: "Freshness Retention",
        description: "Keeps cookies crisp and flavorful during transport.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Construction",
        description: "Recyclable and biodegradable packaging materials.",
      },
      {
        icon: "palette",
        title: "Custom Branding",
        description: "Add your logo, colors, and artwork for a memorable look.",
      },
    ],
    closingDescription:
      "Our Christmas cookie boxes make your baked treats stand out, helping your brand become part of every joyful holiday moment.",
  },
  
  "christmas-treat-boxes": {
    eyebrow: "Why Choose Our Christmas Treat Boxes",
    heading: "At BoxyPack, we combine precision, creativity, and festive energy to design packaging that leaves a lasting impression.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Build",
        description: "Ensures freshness and protection for all holiday treats.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, designs, and colors to match your theme.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Recyclable and biodegradable for sustainable gifting.",
      },
      {
        icon: "palette",
        title: "Elegant Design",
        description: "Perfect for both personal and professional holiday packaging.",
      },
    ],
    closingDescription:
      "Our Christmas treat boxes bring festive flair and dependable quality to every sweet moment of the season.",
  },
  
  "christmas-paper-bags": {
    eyebrow: "Why Choose Our Christmas Paper Bags",
    heading: "At BoxyPack, we combine creativity, sustainability, and quality craftsmanship to deliver the best Christmas paper packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Friendly Build",
        description: "100% recyclable and biodegradable materials.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, artwork, and festive prints for unique presentation.",
      },
      {
        icon: "star",
        title: "Strong Construction",
        description: "Designed for comfort and carrying heavy gifts safely.",
      },
      {
        icon: "palette",
        title: "Premium Appeal",
        description: "Perfect for holiday events and high-end retail packaging.",
      },
    ],
    closingDescription:
      "Our Christmas paper bags elevate your holiday packaging with the perfect blend of quality, sustainability, and design.",
  },
  
  "christmas-gift-bags": {
    eyebrow: "Why Choose Our Christmas Gift Bags",
    heading: "At BoxyPack, we combine premium craftsmanship, creativity, and sustainability to deliver the best Christmas packaging solutions.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong and Stylish",
        description: "Designed to hold gifts securely with refined presentation.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add festive logos, patterns, and artwork for brand visibility.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Made from recyclable and biodegradable materials.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for both retail and personal holiday gifting.",
      },
    ],
    closingDescription:
      "Our Christmas gift bags bring your products to life with quality, elegance, and the spirit of the season.",
  },

  // Pizza Boxes Subcategories
  "pizza-slice-boxes": {
    eyebrow: "Why Choose Our Pizza Slice Boxes",
    heading: "At BoxyPack, we blend practicality, quality, and creativity to design packaging that elevates every pizza slice.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong and Reliable",
        description: "Built to handle heat, moisture, and transport.",
      },
      {
        icon: "check",
        title: "Food-Safe Materials",
        description: "Made from certified, grease-resistant paperboard.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable for responsible use.",
      },
      {
        icon: "palette",
        title: "Custom Branding",
        description: "Add logos or printed artwork for professional appeal.",
      },
    ],
    closingDescription:
      "Our pizza slice boxes combine durability and style, ensuring your customers enjoy every bite hot, clean, and perfectly packaged.",
  },
  
  "round-pizza-boxes": {
    eyebrow: "Why Choose Our Round Pizza Boxes",
    heading: "At BoxyPack, we combine quality materials, craftsmanship, and food-safe design to deliver top-tier pizza packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Durability",
        description: "Designed to handle heat and prevent leaks.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, slogan, or full-color design for recognition.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Made from recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Perfect Fit",
        description: "Round shape ensures snug packaging and better heat retention.",
      },
    ],
    closingDescription:
      "Our round pizza boxes guarantee freshness, strength, and professional presentation with every order.",
  },
  
  "rectangle-pizza-boxes": {
    eyebrow: "Why Choose Our Rectangle Pizza Boxes",
    heading: "At BoxyPack, we blend quality craftsmanship, practicality, and visual appeal to make your packaging stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Durable Build",
        description: "Made to resist grease, heat, and moisture.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, artwork, or design for strong visibility.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Crafted from recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Perfect Fit",
        description: "Ideal for rectangular pizzas and gourmet trays.",
      },
    ],
    closingDescription:
      "Our rectangle pizza boxes ensure your food arrives hot, crisp, and ready to impress your customers.",
  },
  
  "flatbread-pizza-boxes": {
    eyebrow: "Why Choose Our Flatbread Pizza Boxes",
    heading: "At BoxyPack, we blend design precision, sustainability, and functionality to deliver reliable packaging that complements your food quality.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Guaranteed",
        description: "Built to maintain heat and crispness.",
      },
      {
        icon: "check",
        title: "Custom Designs",
        description: "Add logos, colors, and festive prints for branding.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Made from recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Perfect Fit",
        description: "Tailored to flatbread dimensions for efficient stacking and serving.",
      },
    ],
    closingDescription:
      "Our flatbread pizza boxes help your brand deliver restaurant-quality freshness in every box.",
  },
  
  "16-inch-pizza-boxes": {
    eyebrow: "Why Choose Our 16 Inch Pizza Boxes",
    heading: "At BoxyPack, we merge quality, innovation, and sustainability to deliver high-performance pizza packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Reliable Build",
        description: "Protects pizzas from heat loss and damage.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, tagline, or artwork for recognition.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "100% recyclable and biodegradable paperboard.",
      },
      {
        icon: "palette",
        title: "Professional Presentation",
        description: "Ideal for restaurants and branded takeout.",
      },
    ],
    closingDescription:
      "Our 16 inch pizza boxes help your pizzeria deliver flavor, freshness, and a polished look that enhances every customer's experience.",
  },
  
  "14-inch-pizza-boxes": {
    eyebrow: "Why Choose Our 14 Inch Pizza Boxes",
    heading: "At BoxyPack, we combine strength, craftsmanship, and design expertise to provide premium pizza packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heat Retention",
        description: "Keeps pizzas hot and fresh for longer periods.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, patterns, or artwork to build brand identity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Design",
        description: "100% recyclable and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Professional Look",
        description: "Enhances presentation for restaurants and catering brands.",
      },
    ],
    closingDescription:
      "Our 14 inch pizza boxes help your business maintain quality, reliability, and a premium customer impression with every pizza served.",
  },
  
  "blank-pizza-boxes": {
    eyebrow: "Why Choose Our Blank Pizza Boxes",
    heading: "At BoxyPack, we combine reliability, performance, and simplicity to create the perfect pizza packaging solution.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Practical and Durable",
        description: "Designed for everyday pizza delivery and storage.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Option to print minimal logos or leave boxes fully blank.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Design",
        description: "Made from recyclable, biodegradable materials.",
      },
      {
        icon: "palette",
        title: "Professional Presentation",
        description: "Sleek and clean look for multiple food businesses.",
      },
    ],
    closingDescription:
      "Our blank pizza boxes deliver unbeatable quality and practicality for restaurants that want efficient, no-fuss pizza packaging.",
  },

  // Cosmetic Boxes Category
  "cosmetic-boxes": {
    eyebrow: "Why Choose Our Cosmetic Boxes",
    heading: "At BoxyPack, packaging meets perfection. Our luxury cosmetic boxes are built to elevate your products while keeping them secure.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Refined Presentation",
        description: "Beautifully printed finishes that highlight product quality.",
      },
      {
        icon: "check",
        title: "Sustainable Materials",
        description: "Eco-friendly builds without compromising style.",
      },
      {
        icon: "star",
        title: "Complete Customization",
        description: "Add logo, embossing, and foil details for a luxury touch.",
      },
      {
        icon: "palette",
        title: "Fair Pricing",
        description: "Get the best cosmetic boxes price for bulk or custom orders.",
      },
    ],
    closingDescription:
      "We help your products stand out on every shelf with packaging that feels premium and professional.",
  },

  // Cosmetic Boxes Subcategories
  "cosmetic-display-boxes": {
    eyebrow: "Why Choose Our Cosmetic Display Boxes",
    heading: "At BoxyPack, we combine creativity, craftsmanship, and branding expertise to create packaging that sells your products effortlessly.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Crafted for durability and high-end presentation.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, graphics, and taglines for brand visibility.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Made from recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Layouts",
        description: "Designed for easy setup and maximum display impact.",
      },
    ],
    closingDescription:
      "Our cosmetic display boxes help your products stand out in competitive retail environments with style and strength.",
  },
  
  "custom-perfume-boxes": {
    eyebrow: "Why Choose Our Custom Perfume Boxes",
    heading: "At BoxyPack, we merge creativity, precision, and craftsmanship to produce packaging that resonates with your brand's identity.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxury Design",
        description: "Built to impress with flawless structure and texture.",
      },
      {
        icon: "check",
        title: "Protective Build",
        description: "Keeps delicate perfume bottles safe during transport.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, colors, and artwork for a premium look.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Options",
        description: "Made from recyclable and sustainable materials.",
      },
    ],
    closingDescription:
      "Our perfume boxes transform packaging into a sensory experience matching the elegance of your fragrance.",
  },
  
  "custom-makeup-boxes": {
    eyebrow: "Why Choose Our Custom Makeup Boxes",
    heading: "At BoxyPack, we blend design innovation, sustainability, and craftsmanship to build packaging that sells your products beautifully.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Design",
        description: "Built for premium cosmetic presentation.",
      },
      {
        icon: "check",
        title: "Protective Build",
        description: "Ensures safe delivery and long-lasting product appeal.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add logos, artwork, and colors for maximum shelf impact.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Materials",
        description: "Made from recyclable and sustainable paperboard.",
      },
    ],
    closingDescription:
      "Our makeup boxes help brands enhance their visual identity and create memorable unboxing experiences for customers.",
  },
  
  "hair-extension-boxes": {
    eyebrow: "Why Choose Our Hair Extension Boxes",
    heading: "At BoxyPack, we combine creativity, quality, and durability to produce packaging that reflects your brand's excellence.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Protection",
        description: "Prevents damage, tangling, and moisture exposure.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, artwork, and tagline for recognition.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Design",
        description: "Made with recyclable and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Luxury Appeal",
        description: "Crafted for professional presentation and retail display.",
      },
    ],
    closingDescription:
      "Our hair extension boxes add sophistication to your product line while ensuring customers receive their extensions in perfect condition.",
  },
  
  "custom-lipstick-boxes": {
    eyebrow: "Why Choose Our Custom Lipstick Boxes",
    heading: "At BoxyPack, we merge style, precision, and sustainability to deliver packaging that enhances your brand's reputation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Keeps lipsticks protected and beautifully displayed.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, colors, and textures for unique packaging.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "100% recyclable and biodegradable.",
      },
      {
        icon: "palette",
        title: "High-End Finishes",
        description: "Designed for luxury cosmetic lines and retail presentation.",
      },
    ],
    closingDescription:
      "Our custom lipstick boxes make your brand shine on every counter and in every customer's hand.",
  },
  
  "custom-lip-gloss-boxes": {
    eyebrow: "Why Choose Our Custom Lip Gloss Boxes",
    heading: "At BoxyPack, we merge creative design, durable materials, and expert craftsmanship to help beauty brands shine.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Appearance",
        description: "Enhances your cosmetic line's retail impact.",
      },
      {
        icon: "check",
        title: "Durable Build",
        description: "Protects lip glosses from light, heat, and damage.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, artwork, or colors for instant recognition.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Options",
        description: "Made from recyclable and sustainable paperboard.",
      },
    ],
    closingDescription:
      "Our lip gloss boxes are designed to attract attention, protect your products, and elevate your beauty brand's image.",
  },
  
  "custom-eye-shadow-boxes": {
    eyebrow: "Why Choose Our Custom Eye Shadow Boxes",
    heading: "At BoxyPack, we combine design precision, material strength, and creativity to deliver the perfect packaging solution for beauty brands.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Built to protect delicate makeup products from damage.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, design, and colors for maximum impact.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Made with recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Elegant Finishes",
        description: "Perfect for luxury, retail, and promotional collections.",
      },
    ],
    closingDescription:
      "Our eye shadow boxes elevate your product's value while delivering a memorable unboxing experience.",
  },
  
  "custom-cream-boxes": {
    eyebrow: "Why Choose Our Custom Cream Boxes",
    heading: "At BoxyPack, we combine innovation, craftsmanship, and sustainability to make your skincare packaging stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxurious Appeal",
        description: "Designed for elegance and shelf presence.",
      },
      {
        icon: "check",
        title: "Protective Design",
        description: "Keeps cream containers secure and fresh.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, pattern, or artwork for recognition.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Materials",
        description: "Recyclable and sustainably sourced packaging.",
      },
    ],
    closingDescription:
      "Our cream boxes help your brand communicate quality, trust, and luxury from first look to final use.",
  },
  
  "foundation-boxes": {
    eyebrow: "Why Choose Our Foundation Boxes",
    heading: "At BoxyPack, we blend creativity, craftsmanship, and eco-conscious materials to design packaging that enhances brand value.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Build",
        description: "Designed to keep foundation bottles safe during handling.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, color scheme, and patterns.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "100% recyclable and biodegradable paperboard.",
      },
      {
        icon: "palette",
        title: "Luxury Finishes",
        description: "Perfect for professional and retail presentation.",
      },
    ],
    closingDescription:
      "Our foundation boxes create a lasting impression that reflects your product's quality and brand prestige.",
  },
  
  "lotion-boxes": {
    eyebrow: "Why Choose Our Lotion Boxes",
    heading: "At BoxyPack, we combine craftsmanship, sustainability, and branding expertise to make your skincare packaging stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Build",
        description: "Shields bottles and tubes from damage and sunlight.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, patterns, and text for unique identity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Design",
        description: "Crafted from recyclable, sustainable materials.",
      },
      {
        icon: "palette",
        title: "Premium Finishes",
        description: "Tailored for luxury and retail presentation.",
      },
    ],
    closingDescription:
      "Our lotion boxes reflect your brand's quality, helping customers connect with your product from first look to last use.",
  },
  
  "lip-balm-display-boxes": {
    eyebrow: "Why Choose Our Lip Balm Display Boxes",
    heading: "At BoxyPack, we blend design excellence, precision, and sustainable materials to help your products stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Display Design",
        description: "Built for durability and long-term retail use.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, color scheme, and graphics for attention.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Made from recyclable, biodegradable paperboard.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Layouts",
        description: "Quick to assemble and perfect for visual merchandising.",
      },
    ],
    closingDescription:
      "Our lip balm display boxes make your cosmetic line more visible, accessible, and appealing to every customer.",
  },
  
  "eye-lash-boxes": {
    eyebrow: "Why Choose Our Eyelash Boxes",
    heading: "At BoxyPack, we blend craftsmanship, branding, and sustainability to create packaging that enhances your cosmetic line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxury Design",
        description: "Built for premium presentation and long-lasting use.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, patterns, or foil prints for recognition.",
      },
      {
        icon: "star",
        title: "Protective Build",
        description: "Prevents deformation and damage to lash sets.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Materials",
        description: "Made with recyclable and sustainable paperboard.",
      },
    ],
    closingDescription:
      "Our eyelash boxes turn your product into a statement piece that reflects your brand's quality and creativity.",
  },
  
  "cosmetic-gift-boxes": {
    eyebrow: "Why Choose Our Cosmetic Gift Boxes",
    heading: "At BoxyPack, we combine creativity, craftsmanship, and sustainable materials to help brands deliver luxury through packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Design",
        description: "Crafted to impress with refined detailing and finish.",
      },
      {
        icon: "check",
        title: "Protective Structure",
        description: "Keeps delicate cosmetics safe and secure.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, artwork, or special finishes for recognition.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Build",
        description: "Made with recyclable, premium-quality materials.",
      },
    ],
    closingDescription:
      "Our cosmetic gift boxes make unboxing a moment of delight reflecting your brand's commitment to beauty and quality.",
  },
  
  "olive-oil-boxes": {
    eyebrow: "Why Choose Our Olive Oil Boxes",
    heading: "At BoxyPack, we combine quality materials, smart design, and sustainable production to help your brand shine.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Structure",
        description: "Keeps bottles safe from breakage and sunlight.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, color themes, and textures for authenticity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Build",
        description: "Crafted from recyclable, biodegradable materials.",
      },
      {
        icon: "palette",
        title: "Premium Finishes",
        description: "Designed to match luxury and organic brand aesthetics.",
      },
    ],
    closingDescription:
      "Our olive oil boxes help your brand deliver quality, freshness, and trust with every bottle.",
  },
  
  "essential-oil-boxes": {
    eyebrow: "Why Choose Our Essential Oil Boxes",
    heading: "At BoxyPack, we merge craftsmanship, sustainability, and branding expertise to create packaging that elevates your product.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Design",
        description: "Keeps glass bottles safe from shocks and light.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, scent details, and creative artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Made with recyclable and biodegradable paperboard.",
      },
      {
        icon: "palette",
        title: "Luxury Finishes",
        description: "Designed for retail, e-commerce, and gift packaging.",
      },
    ],
    closingDescription:
      "Our essential oil boxes give your brand the perfect balance of safety, style, and professionalism.",
  },
  
  "beard-oil-boxes": {
    eyebrow: "Why Choose Our Beard Oil Boxes",
    heading: "At BoxyPack, we blend craftsmanship, creativity, and sustainability to deliver top-tier packaging solutions.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Durability",
        description: "Protects beard oil bottles during shipping and display.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, designs, or finishes for distinct recognition.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Made from recyclable and sustainable paperboard.",
      },
      {
        icon: "palette",
        title: "Professional Appeal",
        description: "Perfect for premium grooming and retail branding.",
      },
    ],
    closingDescription:
      "Our beard oil boxes enhance product presentation, boost brand visibility, and deliver an unmatched unboxing experience.",
  },
  
  "serum-boxes": {
    eyebrow: "Why Choose Our Serum Boxes",
    heading: "At BoxyPack, we blend design, durability, and sustainability to make your skincare packaging shine.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxury Design",
        description: "Built for premium presentation and customer appeal.",
      },
      {
        icon: "check",
        title: "Protective Structure",
        description: "Keeps glass serum bottles safe from damage.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, pattern, or full artwork.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Materials",
        description: "Crafted from recyclable, sustainable paperboard.",
      },
    ],
    closingDescription:
      "Our serum boxes elevate your skincare products with packaging that feels as refined as the formula inside.",
  },

  // Apparel Boxes Category
  "apparel-boxes": {
    eyebrow: "Why Choose Our Apparel Boxes",
    heading: "At BoxyPack, packaging defines presentation. Our luxury apparel packaging offers strength, elegance, and a sustainable edge.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Built with sturdy materials and smooth finishes.",
      },
      {
        icon: "check",
        title: "Sustainable Design",
        description: "Eco-friendly and recyclable box options.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, colors, and signature textures.",
      },
      {
        icon: "palette",
        title: "Cost-Effective",
        description: "Competitive apparel box prices for bulk orders.",
      },
    ],
    closingDescription:
      "We deliver boxes that help your apparel stand out on shelves, in mailers, and in your customers' hands.",
  },

  // Apparel Boxes Subcategories
  "cufflink-boxes": {
    eyebrow: "Why Choose Our Cufflink Boxes",
    heading: "At BoxyPack, we merge luxury craftsmanship with modern packaging technology to create premium accessory boxes.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxury Appeal",
        description: "Built for elegant presentation and long-lasting impression.",
      },
      {
        icon: "check",
        title: "Secure Design",
        description: "Soft inserts protect cufflinks from damage or loss.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo or pattern for brand recognition.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Materials",
        description: "Made with recyclable and sustainable resources.",
      },
    ],
    closingDescription:
      "Our cufflink boxes enhance your product's value and deliver a polished, high-end experience to your customers.",
  },
  
  "tie-boxes": {
    eyebrow: "Why Choose Our Tie Boxes",
    heading: "At BoxyPack, we combine luxury aesthetics, fine materials, and expert construction to craft packaging that impresses.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Presentation",
        description: "Built for retail shelves, gifts, and brand image.",
      },
      {
        icon: "check",
        title: "Secure Design",
        description: "Protects ties from wrinkles and external damage.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo or design elements for recognition.",
      },
      {
        icon: "palette",
        title: "Sustainable Materials",
        description: "Made from recyclable and eco-friendly paperboard.",
      },
    ],
    closingDescription:
      "Our tie boxes help your brand stand out with packaging that represents quality, sophistication, and style.",
  },
  
  "belt-boxes": {
    eyebrow: "Why Choose Our Belt Boxes",
    heading: "At BoxyPack, we blend luxury design, sustainability, and expert craftsmanship to help your accessories stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Protection",
        description: "Keeps belts safe from bends and scratches.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, texture, or color palette for identity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Design",
        description: "Made from recyclable and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Elegant Finishes",
        description: "Crafted for retail display and premium gifting.",
      },
    ],
    closingDescription:
      "Our belt boxes deliver a luxurious, durable, and branded experience that reflects your product's quality and your brand's commitment to excellence.",
  },
  
  "clothing-boxes": {
    eyebrow: "Why Choose Our Clothing Boxes",
    heading: "At BoxyPack, we merge fashion, protection, and sustainability to deliver the perfect packaging for apparel brands.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Presentation",
        description: "Enhances unboxing and builds customer trust.",
      },
      {
        icon: "check",
        title: "Protective Design",
        description: "Keeps clothes neat, clean, and damage-free.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, colors, and artwork for recognition.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Build",
        description: "Made from recyclable and responsibly sourced materials.",
      },
    ],
    closingDescription:
      "Our clothing boxes represent your brand's craftsmanship, quality, and care from the first glance to the final fold.",
  },
  
  "lingerie-boxes": {
    eyebrow: "Why Choose Our Lingerie Boxes",
    heading: "At BoxyPack, we combine craftsmanship, elegance, and sustainable materials to create packaging that highlights the sophistication of your brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Luxury Appeal",
        description: "Designed to make your lingerie look as special as it feels.",
      },
      {
        icon: "check",
        title: "Protective Structure",
        description: "Keeps garments clean, folded, and fresh.",
      },
      {
        icon: "star",
        title: "Custom Branding",
        description: "Add your logo, patterns, and signature colors.",
      },
      {
        icon: "palette",
        title: "Eco-Friendly Build",
        description: "Made from recyclable and sustainable materials.",
      },
    ],
    closingDescription:
      "Our lingerie boxes turn every unboxing into a memorable and premium experience for your customers.",
  },
  
  "underwear-boxes": {
    eyebrow: "Why Choose Our Underwear Boxes",
    heading: "At BoxyPack, we merge innovation, style, and sustainability to deliver packaging that complements your apparel.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Structure",
        description: "Keeps undergarments fresh and neatly folded.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add your logo, artwork, or patterns for recognition.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Design",
        description: "Made from recyclable and biodegradable materials.",
      },
      {
        icon: "palette",
        title: "Luxury Appeal",
        description: "Designed for modern brands and professional packaging.",
      },
    ],
    closingDescription:
      "Our underwear boxes help your products stand out through presentation that defines comfort, quality, and brand trust.",
  },
  
  "socks-boxes": {
    eyebrow: "Why Choose Our Socks Boxes",
    heading: "At BoxyPack, we blend craftsmanship, sustainability, and branding expertise to create packaging that complements your apparel line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Built to protect, present, and promote your products.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add logos, colors, and patterns for brand identity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Build",
        description: "Made from recyclable and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Luxury Finishes",
        description: "Designed for gifting, retail, and subscription boxes.",
      },
    ],
    closingDescription:
      "Our sock boxes add a professional edge to your brand, ensuring every pair arrives in style and condition.",
  },

  // Vape Boxes Category
  "vape-boxes": {
    eyebrow: "Why Choose Our Vape Boxes",
    heading: "At BoxyPack, presentation meets performance. Our luxury vape packaging boxes give your products the protection they need with a design that enhances brand identity.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Durable Design",
        description: "Built for protection and long shelf life.",
      },
      {
        icon: "check",
        title: "Sustainable Choice",
        description: "Crafted from recyclable, eco-safe materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add brand colors, logos, and detailed prints.",
      },
      {
        icon: "palette",
        title: "Affordable Pricing",
        description: "Competitive vape box prices for wholesale and bulk orders.",
      },
    ],
    closingDescription:
      "We package innovation and style into every box your customers open.",
  },

  // Vape Boxes Subcategories
  "empty-vape-cartridge-packaging": {
    eyebrow: "Why Choose Our Empty Vape Cartridge Boxes",
    heading: "BoxyPack combines durability, design precision, and customization to elevate your cartridge line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Build",
        description: "Protects fragile cartridges from impact and scratches.",
      },
      {
        icon: "check",
        title: "Brand Customization",
        description: "Add logos, colors, artwork, and full graphics.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable materials available.",
      },
      {
        icon: "palette",
        title: "Premium Presentation",
        description: "Ideal for retail racks, online orders, or gift kits.",
      },
    ],
    closingDescription:
      "Our packaging enhances your product presentation and keeps every cartridge secure and display-ready.",
  },
  
  "vape-cartridge-packaging": {
    eyebrow: "Why Choose Our Vape Cartridge Packaging",
    heading: "At BoxyPack, we combine build strength, design precision, and branding flexibility to support your product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Engineered to protect delicate cartridges during transport and handling.",
      },
      {
        icon: "check",
        title: "Full Branding Control",
        description: "Add your colors, logo, artwork, and product details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "All materials are recyclable and responsibly sourced.",
      },
      {
        icon: "palette",
        title: "Luxurious Finishes",
        description: "Ideal for retail shelves, gift sets, and subscription boxes.",
      },
    ],
    closingDescription:
      "Our packaging helps you stand out while ensuring every cartridge arrives safely and looks professional.",
  },
  
  "custom-vape-boxes": {
    eyebrow: "Why Choose Our Custom Vape Boxes",
    heading: "BoxyPack focuses on durability, aesthetic precision, and branding power to support your vape product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Protection",
        description: "Built strong to keep devices safe during handling and shipping.",
      },
      {
        icon: "check",
        title: "Brand Visibility",
        description: "Add logos, graphics, colors, and custom artwork for full impact.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable materials offered for sustainable packaging.",
      },
      {
        icon: "palette",
        title: "Luxury Presentation",
        description: "Ideal for retail shelves, gift sets, and subscription packaging.",
      },
    ],
    closingDescription:
      "Our custom vape packaging helps your products stand out while ensuring safe, stylish delivery.",
  },
  
  "disposable-vape-packaging": {
    eyebrow: "Why Choose Our Disposable Vape Packaging",
    heading: "BoxyPack delivers packaging that enhances your brand while keeping devices safe and presentable.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "Strong build protects disposables from damage.",
      },
      {
        icon: "check",
        title: "Brand Customization",
        description: "Add logos, colors, artwork, and product details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Recyclable and sustainable material options.",
      },
      {
        icon: "palette",
        title: "Luxury Finishes",
        description: "Ideal for retail shelves, gift kits, and subscription packaging.",
      },
    ],
    closingDescription:
      "Our packaging ensures your disposable vapes reach customers in perfect condition with a professional appearance.",
  },

  // Chocolate Boxes Category
  "chocolate-boxes": {
    eyebrow: "Which Material Is Used in Chocolate Boxes?",
    heading: "Our chocolate boxes are crafted using food-safe paperboard, rigid board, and kraft materials that ensure freshness, strength, and premium presentation. Each material supports detailed printing and durable construction for confectionery products.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "White Cardboard",
        description: "For vibrant printed chocolate boxes.",
      },
      {
        icon: "check",
        title: "Rigid Board",
        description: "For luxury chocolate boxes with logo.",
      },
      {
        icon: "star",
        title: "Kraft Paperboard",
        description: "For eco-friendly and rustic packaging.",
      },
      {
        icon: "palette",
        title: "Protective Coatings",
        description: "For moisture and grease resistance.",
      },
    ],
    closingDescription:
      "Every material is chosen to combine beauty, safety, and brand impact.",
  },

  // Chocolate Boxes Subcategories
  "chocolate-packaging": {
    eyebrow: "Why Choose Our Chocolate Packaging",
    heading: "BoxyPack combines craftsmanship, food-safe material quality, and branding expertise to elevate your chocolate line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Protection",
        description: "Built to preserve shape, freshness, and flavor.",
      },
      {
        icon: "check",
        title: "Brand-Centric Design",
        description: "Add colors, logos, textures, and artwork for a strong identity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable, compostable, and sustainable choices available.",
      },
      {
        icon: "palette",
        title: "Gift-Ready Look",
        description: "Perfect for retail shelves, celebrations, and seasonal packaging.",
      },
    ],
    closingDescription:
      "Our chocolate packaging helps your products stand out while ensuring they remain fresh, safe, and beautifully presented.",
  },
  
  "small-chocolate-boxes": {
    eyebrow: "Why Choose Our Small Chocolate Boxes",
    heading: "BoxyPack combines craftsmanship, food-safe standards, and design expertise to enhance your chocolate packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Protection",
        description: "Keeps chocolates fresh, intact, and well-presented.",
      },
      {
        icon: "check",
        title: "Brand Customization",
        description: "Add logos, colors, patterns, and artwork for a premium identity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable materials available.",
      },
      {
        icon: "palette",
        title: "Gift-Ready Appeal",
        description: "Perfect for events, retail gifting, and boutique branding.",
      },
    ],
    closingDescription:
      "Our small chocolate boxes elevate your product's look and ensure every bite-sized treat feels special.",
  },
  
  "chocolate-milk-boxes": {
    eyebrow: "Why Choose Our Chocolate Milk Boxes",
    heading: "BoxyPack blends food-safe engineering with premium branding to elevate your chocolate milk product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Helps shield cartons from sunlight, heat, and damage.",
      },
      {
        icon: "check",
        title: "Brand Customization",
        description: "Add logos, colors, artwork, and product details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Build",
        description: "Recyclable and sustainable materials available.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Look",
        description: "Designed for stores, beverage aisles, and promotional displays.",
      },
    ],
    closingDescription:
      "Our packaging enhances your product's freshness, presentation, and brand visibility.",
  },
  
  "chocolate-candy-boxes": {
    eyebrow: "Why Choose Our Chocolate Candy Boxes",
    heading: "BoxyPack blends food-safe materials, premium craftsmanship, and branding expertise to enhance your product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Keeps candies intact and flavorful.",
      },
      {
        icon: "check",
        title: "Brand Customization",
        description: "Add logos, artwork, patterns, and colors for visibility.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable choices available.",
      },
      {
        icon: "palette",
        title: "Gift-Ready Appeal",
        description: "Ideal for festive packaging, gifting, and retail display.",
      },
    ],
    closingDescription:
      "Our chocolate candy packaging strengthens your brand and ensures every piece looks irresistible.",
  },
  
  "luxury-chocolate-boxes": {
    eyebrow: "Why Choose Our Luxury Chocolate Boxes",
    heading: "BoxyPack blends craftsmanship, branding precision, and luxury finishing to elevate your premium chocolate line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "High-End Protection",
        description: "Rigid construction keeps chocolates safe and intact.",
      },
      {
        icon: "check",
        title: "Luxury Branding",
        description: "Add foil logos, embossed textures, and custom artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Sustainably sourced, recyclable packaging options.",
      },
      {
        icon: "palette",
        title: "Gift-Ready Appeal",
        description: "Perfect for events, premium displays, and festive gifting.",
      },
    ],
    closingDescription:
      "Our luxury chocolate boxes help your brand stand out with elegance and lasting impression.",
  },
  
  "chocolate-gift-boxes": {
    eyebrow: "Why Choose Our Chocolate Gift Boxes",
    heading: "BoxyPack blends craftsmanship, branding precision, and luxury finishing to elevate your gifting experience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Protection",
        description: "Keeps chocolates secure, fresh, and perfectly shaped.",
      },
      {
        icon: "check",
        title: "Luxury Branding",
        description: "Add foil logos, embossed textures, patterns, and custom artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable materials designed with sustainability in mind.",
      },
      {
        icon: "palette",
        title: "Gift-Ready Appeal",
        description: "Perfect for celebrations, events, holidays, and premium retail sets.",
      },
    ],
    closingDescription:
      "Our chocolate gift boxes help your brand stand out with elegance, quality, and unforgettable presentation.",
  },
  
  "chocolate-bar-boxes": {
    eyebrow: "Why Choose Our Chocolate Bar Boxes",
    heading: "BoxyPack combines craftsmanship, food safety, and branding precision to support your chocolate product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness & Protection",
        description: "Keeps bars intact, fresh, and protected from breakage.",
      },
      {
        icon: "check",
        title: "Brand Impact",
        description: "Add full-color artwork, logos, textures, and foil details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable, compostable packaging available.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Appeal",
        description: "Designed for shelves, gifting, and promotional bundles.",
      },
    ],
    closingDescription:
      "Our chocolate bar boxes deliver premium quality that enhances brand visibility and product value.",
  },

  // Food Boxes Category
  "food-boxes": {
    eyebrow: "Why Choose Our Food Boxes",
    heading: "At BoxyPack, flavor meets functionality. Our custom food packaging boxes help you deliver meals that stay fresh and look professional.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Designed to preserve taste and texture.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Build",
        description: "Recyclable and sustainable material options.",
      },
      {
        icon: "star",
        title: "Complete Customization",
        description: "Add logos, colors, slogans, and brand artwork.",
      },
      {
        icon: "palette",
        title: "Fair Pricing",
        description: "Competitive food boxes price for bulk and wholesale orders.",
      },
    ],
    closingDescription:
      "We create food packaging that carries your brand's quality from kitchen to customer.",
  },

  // Food Boxes Subcategories
  "custom-coffee-cup-sleeves": {
    eyebrow: "Why Choose Our Coffee Cup Sleeves",
    heading: "BoxyPack combines heat safety, durability, and powerful branding to enhance your beverage service.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Perfect Heat Shield",
        description: "Keeps hands protected from hot beverages.",
      },
      {
        icon: "check",
        title: "Brand Impact",
        description: "Add logos, artwork, patterns, and full-wrap prints.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and compostable sleeve materials.",
      },
      {
        icon: "palette",
        title: "Comfortable Grip",
        description: "Designed for secure handling and customer comfort.",
      },
    ],
    closingDescription:
      "Our coffee cup sleeves enhance your brand presence and elevate every cup you serve.",
  },
  
  "custom-french-fry-boxes": {
    eyebrow: "Why Choose Our French Fry Boxes",
    heading: "BoxyPack combines food-safe construction, ergonomic design, and strong branding to support your food service business.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Grease-Resistant Build",
        description: "Keeps fries crisp, warm, and easy to hold.",
      },
      {
        icon: "check",
        title: "Brand Visibility",
        description: "Add logos, colors, patterns, and promotional designs.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable, compostable, and sustainable materials available.",
      },
      {
        icon: "palette",
        title: "Restaurant-Ready Durability",
        description: "Strong, spill-resistant, and comfortable for customers.",
      },
    ],
    closingDescription:
      "Our French fry boxes enhance serving efficiency while elevating your brand image.",
  },
  
  "custom-coffee-boxes": {
    eyebrow: "Why Choose Our Coffee Boxes",
    heading: "BoxyPack blends freshness protection, branding precision, and premium craftsmanship to support your coffee brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness & Aroma Protection",
        description: "Designed to protect from moisture, light, and crushing.",
      },
      {
        icon: "check",
        title: "Brand-Centric Design",
        description: "Add artwork, colors, textures, and logos for strong identity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and compostable materials available.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Look",
        description: "Ideal for supermarkets, cafés, gift packs, and online selling.",
      },
    ],
    closingDescription:
      "Our coffee boxes help your brand stand out while ensuring your coffee stays flavorful and well-presented.",
  },
  
  "custom-coffee-cups": {
    eyebrow: "Why Choose Our Custom Coffee Cups",
    heading: "BoxyPack blends safety, comfort, and branding excellence to help your beverage business stand out.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Leak-Resistant Build",
        description: "Durable construction prevents spills and cup weakness.",
      },
      {
        icon: "check",
        title: "Strong Branding",
        description: "Add bold colors, patterns, and logo placement for visibility.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose compostable and recyclable materials.",
      },
      {
        icon: "palette",
        title: "Comfort & Heat Control",
        description: "Heat-shield cup designs improve grip and experience.",
      },
    ],
    closingDescription:
      "Our custom coffee cups make your beverages look professional and keep your brand in every hand.",
  },
  
  "custom-chinese-takeout-boxes": {
    eyebrow: "Why Choose Our Chinese Takeout Boxes",
    heading: "BoxyPack blends food safety, strong construction, and premium branding to support your restaurant's packaging needs.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Leak-Resistant Build",
        description: "Safe for saucy, hot, and oily dishes.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Add full-color artwork, logos, icons, and cultural patterns.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Recyclable and compostable materials available.",
      },
      {
        icon: "palette",
        title: "Takeout & Delivery Ready",
        description: "Strong locking, heat retention, and secure bottom structure.",
      },
    ],
    closingDescription:
      "Our Chinese takeout boxes help your meals look delicious, stay fresh, and arrive without spills.",
  },
  
  "custom-popcorn-boxes": {
    eyebrow: "Why Choose Our Popcorn Boxes",
    heading: "BoxyPack blends food safety, attractive design, and brand-focused printing to enhance your popcorn experience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Perfect Serving Design",
        description: "Lightweight, durable, and comfortable to hold.",
      },
      {
        icon: "check",
        title: "Brand Visibility",
        description: "Add bold colors, logos, striped themes, or event artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and compostable materials available.",
      },
      {
        icon: "palette",
        title: "Event & Retail Ready",
        description: "Perfect for cinemas, parties, festivals, and gifting.",
      },
    ],
    closingDescription:
      "Our popcorn boxes make every serving memorable while promoting your brand effortlessly.",
  },
  
  "custom-snack-boxes": {
    eyebrow: "Why Choose Our Snack Boxes",
    heading: "BoxyPack combines food safety, durable construction, and branding excellence to support your snack product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Designed to keep snacks crisp, fresh, and secure.",
      },
      {
        icon: "check",
        title: "Brand Impact",
        description: "Add logos, patterns, images, and premium printing.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose recyclable, compostable, and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Appeal",
        description: "Built for supermarkets, cafés, delis, and online retail.",
      },
    ],
    closingDescription:
      "Our snack packaging enhances product presentation and helps your brand stand out in competitive markets.",
  },
  
  "custom-tea-boxes": {
    eyebrow: "Why Choose Our Tea Boxes",
    heading: "BoxyPack combines aroma-preserving materials, elegant design, and branding precision to support your tea brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Keeps tea fresh, aromatic, and protected from light and moisture.",
      },
      {
        icon: "check",
        title: "Brand Impact",
        description: "Add custom colors, patterns, logos, and premium printing.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and compostable materials available.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Appeal",
        description: "Ideal for wellness stores, supermarkets, cafés, and boutique brands.",
      },
    ],
    closingDescription:
      "Our tea packaging helps your product stand out and makes every sip feel premium.",
  },
  
  "custom-burger-boxes": {
    eyebrow: "Why Choose Our Burger Boxes",
    heading: "BoxyPack blends food safety, ergonomic design, and premium branding to support your food service success.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Grease-Resistant Build",
        description: "Designed to protect burgers, buns, and sauces.",
      },
      {
        icon: "check",
        title: "Brand Visibility",
        description: "Add full-color prints, logos, icons, and custom artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Recyclable and compostable materials available.",
      },
      {
        icon: "palette",
        title: "Takeout-Ready Strength",
        description: "Secure, durable, and ideal for dine-in or delivery.",
      },
    ],
    closingDescription:
      "Our burger boxes help your food look fresh, stay intact, and make your brand unforgettable.",
  },
  
  "sandwich-boxes": {
    eyebrow: "Why Choose Our Sandwich Boxes",
    heading: "BoxyPack combines food safety, structural strength, and professional branding to support your food service and retail operations.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Keeps sandwiches crisp, intact, and protected.",
      },
      {
        icon: "check",
        title: "Brand Impact",
        description: "Add logos, artwork, full-color prints, and promotional themes.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose recyclable and compostable materials.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Appeal",
        description: "Perfect for grab-and-go displays, cafés, and deli counters.",
      },
    ],
    closingDescription:
      "Our sandwich boxes ensure every meal looks fresh, appetizing, and professionally packaged.",
  },

  // Candle Boxes Category
  "candle-boxes": {
    eyebrow: "Why Choose Our Candle Boxes",
    heading: "At BoxyPack, style meets strength. Our custom candle packaging boxes turn your candles into premium, shelf-ready products.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Professional Appeal",
        description: "Beautiful finishes that match scent themes and brand personality.",
      },
      {
        icon: "check",
        title: "Sustainable Options",
        description: "Eco-friendly candle boxes made with recyclable materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, metallic foil, patterns, and fragrance details.",
      },
      {
        icon: "palette",
        title: "Fair Pricing",
        description: "Competitive candle boxes price for custom and wholesale orders.",
      },
    ],
    closingDescription:
      "We make packaging that protects your candles and elevates every unboxing moment.",
  },

  // Candle Boxes Subcategories
  "candle-gift-boxes": {
    eyebrow: "Why Choose Our Candle Gift Boxes",
    heading: "BoxyPack combines premium materials, craftsmanship, and luxury finishing to elevate your candle brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Maximum Protection",
        description: "Keeps candles secure, unbroken, and fragrance-safe.",
      },
      {
        icon: "check",
        title: "Luxury Branding",
        description: "Add foil logos, embossed artwork, and custom patterns.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable materials available.",
      },
      {
        icon: "palette",
        title: "Gift-Ready Appeal",
        description: "Designed for boutique displays, gifting, and premium retail.",
      },
    ],
    closingDescription:
      "Our candle gift boxes make your products feel special and turn every candle into a premium gifting experience.",
  },
  
  "luxury-candle-boxes": {
    eyebrow: "Why Choose Our Luxury Candle Boxes",
    heading: "BoxyPack blends craftsmanship, premium materials, and luxury finishing to elevate your candle brand to a high-end retail level.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Maximum Protection",
        description: "Strong rigid construction keeps candles secure and protected.",
      },
      {
        icon: "check",
        title: "Luxury Branding",
        description: "Add foil, embossing, linen textures, and high-definition artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Sustainable rigid packaging options available.",
      },
      {
        icon: "palette",
        title: "Premium Unboxing",
        description: "Perfect for gifting, upscale retail, and designer candle lines.",
      },
    ],
    closingDescription:
      "Our luxury candle boxes transform every candle into a sophisticated, premium product.",
  },
  
  "candle-boxes-with-inserts": {
    eyebrow: "Why Choose Our Candle Boxes with Inserts",
    heading: "BoxyPack blends protection, premium craftsmanship, and luxury presentation to elevate your candle brand.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Superior Protection",
        description: "Inserts prevent breakage, shaking, or surface damage.",
      },
      {
        icon: "check",
        title: "Luxury Presentation",
        description: "Custom inserts add elegance and a premium unboxing feel.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose kraft, cardboard, or molded pulp inserts.",
      },
      {
        icon: "palette",
        title: "Brand-Centric Design",
        description: "Add custom colors, printed patterns, and foil-stamped logos.",
      },
    ],
    closingDescription:
      "Our candle boxes with inserts help your candles stand out while staying secure during shipping and retail display.",
  },
  
  "candle-shipping-boxes": {
    eyebrow: "Why Choose Our Candle Shipping Boxes",
    heading: "BoxyPack blends durability, safety, and branding to support your candle business.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Maximum Protection",
        description: "Built to withstand drops, stacking, vibration, and pressure.",
      },
      {
        icon: "check",
        title: "Custom Fit",
        description: "Inserts hold candles securely in place during transit.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Sustainable corrugated and kraft materials available.",
      },
      {
        icon: "palette",
        title: "Strong Branding",
        description: "Add custom prints, logo placement, and brand messaging.",
      },
    ],
    closingDescription:
      "Our candle shipping boxes ensure every candle arrives safe, secure, and ready for customer delight.",
  },
  
  "taper-candle-boxes": {
    eyebrow: "Why Choose Our Taper Candle Boxes",
    heading: "BoxyPack blends protection, elegance, and branding precision to elevate your taper candle product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Protective Structure",
        description: "Designed to prevent bending, impact damage, and scratches.",
      },
      {
        icon: "check",
        title: "Luxury Branding",
        description: "Add foils, embossing, linen textures, and elegant artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose recyclable, sustainable candle packaging.",
      },
      {
        icon: "palette",
        title: "Gift-Ready Appeal",
        description: "Perfect for holiday sets, weddings, and boutique displays.",
      },
    ],
    closingDescription:
      "Our taper candle boxes deliver premium quality that enhances both presentation and product safety.",
  },
  
  "custom-jar-candle-boxes": {
    eyebrow: "Why Choose Our Jar Candle Boxes",
    heading: "BoxyPack combines durability, craftsmanship, and branding finesse to elevate your candle product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Maximum Protection",
        description: "Prevents breakage, shaking, and heat damage.",
      },
      {
        icon: "check",
        title: "Luxury Appeal",
        description: "Add foils, embossing, textured wraps, and premium printing.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Sustainable materials for conscious candle brands.",
      },
      {
        icon: "palette",
        title: "Retail & Gift-Ready",
        description: "Ideal for boutiques, event gifting, and premium shelf displays.",
      },
    ],
    closingDescription:
      "Our custom jar candle boxes help your candles stand out with elegance and premium protection.",
  },
  
  "wax-melt-boxes": {
    eyebrow: "Why Choose Our Wax Melt Boxes",
    heading: "BoxyPack blends fragrance protection, craftsmanship, and branding precision to elevate your wax melt product line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Fragrance-Safe Build",
        description: "Maintains scent profile during storage and transport.",
      },
      {
        icon: "check",
        title: "Brand-Centric Design",
        description: "Add colors, artwork, patterns, and foil accents.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose recyclable and sustainable materials.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Appeal",
        description: "Ideal for boutiques, craft markets, and gift sets.",
      },
    ],
    closingDescription:
      "Our wax melt packaging helps your products stand out and stay protected.",
  },
  
  "kraft-candle-boxes": {
    eyebrow: "Why Choose Our Kraft Candle Boxes",
    heading: "BoxyPack blends sustainability, protection, and branding clarity to support your natural candle business.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Eco-Friendly Appeal",
        description: "Recyclable, biodegradable, and renewable materials.",
      },
      {
        icon: "check",
        title: "Strong Protection",
        description: "Thick kraft structure protects jars and pillars from damage.",
      },
      {
        icon: "star",
        title: "Brand-Forward Design",
        description: "Minimalist printing, bold graphics, or natural textures.",
      },
      {
        icon: "palette",
        title: "Natural Aesthetic",
        description: "Ideal for organic, earthy, and artisanal candle lines.",
      },
    ],
    closingDescription:
      "Our kraft candle boxes elevate your eco-friendly branding while keeping candles safe and well-presented.",
  },
  
  "candle-subscription-boxes": {
    eyebrow: "Why Choose Our Candle Subscription Boxes",
    heading: "BoxyPack blends durability, presentation, and strong branding to elevate your subscription experience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Shipping-Safe Strength",
        description: "Protects candles from cracks, impact, or shifting.",
      },
      {
        icon: "check",
        title: "Premium Branding",
        description: "Add custom artwork, patterns, textures, and foil logos.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Sustainable kraft mailers and recyclable materials.",
      },
      {
        icon: "palette",
        title: "Unboxing Appeal",
        description: "Designed for memorable subscriber experiences.",
      },
    ],
    closingDescription:
      "Our candle subscription boxes offer the perfect balance of protection, beauty, and brand storytelling.",
  },

  // Sports Boxes Category
  "sports-boxes": {
    eyebrow: "Why Choose Our Sports Boxes",
    heading: "At BoxyPack, toughness meets style. Our luxury sports boxes combine protection, premium aesthetics, and brand personality.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Maximum Durability",
        description: "Reinforced materials built for heavy or rough-use items.",
      },
      {
        icon: "check",
        title: "Sustainable Options",
        description: "Eco-friendly and recyclable packaging choices.",
      },
      {
        icon: "star",
        title: "Complete Customization",
        description: "Add logos, colors, textures, and sport-themed graphics.",
      },
      {
        icon: "palette",
        title: "Fair Pricing",
        description: "Competitive sports boxes price for wholesale and bulk orders.",
      },
    ],
    closingDescription:
      "We help brands deliver athletic energy and confidence through packaging that stands out.",
  },

  // Sports Boxes Subcategories
  "cardboard-shoe-boxes": {
    eyebrow: "Why Choose Our Cardboard Shoe Boxes",
    heading: "BoxyPack blends strength, premium craftsmanship, and branding precision to elevate your footwear packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong Protection",
        description: "Keeps shoes safe during storage, shipping, and handling.",
      },
      {
        icon: "check",
        title: "Brand Visibility",
        description: "Add custom colors, logos, textures, and patterns.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose sustainable and recyclable materials.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Appeal",
        description: "Designed for stylish presentation and easy stacking.",
      },
    ],
    closingDescription:
      "Our cardboard shoe boxes deliver both durability and brand impact.",
  },
  
  "shoe-shipping-boxes": {
    eyebrow: "Why Choose Our Shoe Shipping Boxes",
    heading: "BoxyPack combines durability, structural strength, and branding precision to support your footwear business.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Superior Protection",
        description: "Resists crushing, drops, vibration, and moisture.",
      },
      {
        icon: "check",
        title: "Brand Visibility",
        description: "Add logos, artwork, color wraps, and messaging.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Choose kraft and recycled corrugated materials.",
      },
      {
        icon: "palette",
        title: "E-Commerce Ready",
        description: "Strong, stackable, and designed for courier handling.",
      },
    ],
    closingDescription:
      "Our shoe shipping boxes deliver reliability, brand presence, and customer satisfaction.",
  },
  
  "custom-shoe-boxes": {
    eyebrow: "Why Choose Our Custom Shoe Boxes",
    heading: "BoxyPack combines durability, craftsmanship, and premium branding to elevate your footwear line.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Protection",
        description: "Built to withstand pressure, stacking, and transit wear.",
      },
      {
        icon: "check",
        title: "Luxury Branding",
        description: "Add foil logos, embossing, patterns, and full-color graphics.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Sustainable materials available for modern brands.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Appeal",
        description: "Elegant design for boutique and store presentation.",
      },
    ],
    closingDescription:
      "Our custom shoe boxes enhance both product value and customer experience.",
  },
  
  "shoe-boxes-with-lid": {
    eyebrow: "Why Choose Our Shoe Boxes with a Lid",
    heading: "BoxyPack combines durability, brand aesthetics, and retail-ready presentation to elevate your footwear packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Shipping-Ready Strength",
        description: "Protects shoes from pressure, moisture, and deformation.",
      },
      {
        icon: "check",
        title: "High-End Branding",
        description: "Add custom logos, foil details, textures, and premium artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable board options available.",
      },
      {
        icon: "palette",
        title: "Premium Unboxing",
        description: "Designed for smooth lid lift, clean edges, and elegant presentation.",
      },
    ],
    closingDescription:
      "Our shoe boxes packaging with a lid brings together protection, beauty, and strong brand impact.",
  },
  
  "golf-ball-boxes": {
    eyebrow: "Why Choose Our Golf Ball Boxes",
    heading: "BoxyPack blends durability, precision, and attractive branding to enhance your golf packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Impact-Ready Strength",
        description: "Protects balls from pressure and surface damage.",
      },
      {
        icon: "check",
        title: "High-End Branding",
        description: "Add logos, foil accents, sports themes, and sharp artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Kraft and recycled options available for sustainable brands.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Presentation",
        description: "Clean structure, bright printing, and polished appearance.",
      },
    ],
    closingDescription:
      "Our golf ball packaging boxes deliver premium protection and standout branding for every sports product line.",
  },
  
  "football-boxes": {
    eyebrow: "Why Choose Our Football Boxes",
    heading: "BoxyPack blends strength, impactful visuals, and sharp craftsmanship to elevate your football packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Impact-Resistant Strength",
        description: "Prevents deformation, surface marks, and pressure damage.",
      },
      {
        icon: "check",
        title: "Premium Branding",
        description: "Add team logos, foil highlights, textures, and full-color graphics.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Display Appeal",
        description: "Designed for clean structure, visibility, and retail-ready presentation.",
      },
    ],
    closingDescription:
      "Our football packaging boxes provide the ideal mix of protection, branding, and sports-focused presentation.",
  },

  // E-liquid Boxes Category
  "e-liquid-boxes": {
    eyebrow: "Why Choose Our E-liquid Boxes",
    heading: "At BoxyPack, safety meets style. Our luxury e-liquid boxes combine protection, clean printing, and brand-ready design.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Strong and Secure",
        description: "Built to hold bottles firmly without leaks.",
      },
      {
        icon: "check",
        title: "Sustainable Options",
        description: "Recyclable and eco-friendly packaging choices.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, flavor names, warning labels, and artwork.",
      },
      {
        icon: "palette",
        title: "Affordable Rates",
        description: "Competitive e-liquid boxes price for wholesale and bulk orders.",
      },
    ],
    closingDescription:
      "We help vape brands stand out with packaging that delivers trust and quality.",
  },

  // E-liquid Boxes Subcategories
  "e-liquid-bottle-boxes": {
    eyebrow: "Why Choose Our E-liquid Bottle Boxes",
    heading: "BoxyPack blends durability, sharp design, and compliance-focused structure to elevate your vape packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Leak-Safe Protection",
        description: "Keeps bottles secure from impact, pressure, and light exposure.",
      },
      {
        icon: "check",
        title: "High-Impact Branding",
        description: "Add logos, flavor art, textures, gradients, and foil details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Sustainable kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Finish",
        description: "Clean edges, vibrant colors, and premium presentation.",
      },
    ],
    closingDescription:
      "Our e-liquid bottle packaging delivers the ideal mix of protection, branding, and elegance.",
  },
  
  "e-liquid-display-boxes": {
    eyebrow: "Why Choose Our E-liquid Display Boxes",
    heading: "BoxyPack blends durability, retail-first design, and vibrant branding to elevate your vape product presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Retail-Ready Design",
        description: "Makes your bottles stand out for easy customer viewing.",
      },
      {
        icon: "check",
        title: "Strong Branding",
        description: "Add logos, flavor themes, gradients, foil text, and high-color art.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recycled materials available on request.",
      },
      {
        icon: "palette",
        title: "Stable Structure",
        description: "Keeps bottles upright, organized, and safe from movement.",
      },
    ],
    closingDescription:
      "Our e-liquid display packaging offers the perfect combination of strength, visibility, and brand impact.",
  },
  
  "e-liquid-gift-boxes": {
    eyebrow: "Why Choose Our E-liquid Gift Boxes",
    heading: "BoxyPack delivers a powerful blend of protection, visual appeal, and a premium gifting experience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Gift-Ready Strength",
        description: "Keeps bottles secure from pressure, vibration, and leaks.",
      },
      {
        icon: "check",
        title: "High-End Branding",
        description: "Add foil logos, gradients, textures, metallic touches, and detailed artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available for sustainable gift lines.",
      },
      {
        icon: "palette",
        title: "Premium Unboxing",
        description: "Designed for a smooth, luxurious, and memorable presentation.",
      },
    ],
    closingDescription:
      "Our e-liquid gift packaging ensures your brand stands out in every gifting moment.",
  },

  // Cereal Boxes Category
  "cereal-boxes": {
    eyebrow: "Why Choose Our Cereal Boxes",
    heading: "At BoxyPack, freshness meets design. Our custom cereal packaging helps brands create memorable breakfast experiences.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Printing",
        description: "Sharp images and clear nutritional information.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Options",
        description: "Recyclable, sustainable cereal packaging.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, colors, illustrations, and product details.",
      },
      {
        icon: "palette",
        title: "Affordable Rates",
        description: "Competitive cereal box prices for bulk and wholesale orders.",
      },
    ],
    closingDescription:
      "We deliver packaging that makes your cereals stand out among breakfast favorites.",
  },

  // Cereal Boxes Subcategories
  "cereal-boxes-wholesale": {
    eyebrow: "Why Choose Our Cereal Boxes Wholesale",
    heading: "BoxyPack delivers a perfect blend of food safety, strong construction, and standout branding for cereal packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Food-Safe Protection",
        description: "Keeps cereals fresh, dry, and contamination-free.",
      },
      {
        icon: "check",
        title: "High-Quality Printing",
        description: "Add brand colors, mascots, patterns, and retail-ready artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recycled kraft and biodegradable cartons available.",
      },
      {
        icon: "palette",
        title: "Retail Impact",
        description: "Designed for strong shelf visibility and professional branding.",
      },
    ],
    closingDescription:
      "Our cereal boxes enhance product protection while elevating your brand across retail aisles.",
  },
  
  "mini-cereal-boxes": {
    eyebrow: "Why Choose Our Mini Cereal Boxes",
    heading: "BoxyPack delivers strong construction, food-safe quality, and bright branding for mini cereal packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Shields cereals from moisture, dust, and crushing.",
      },
      {
        icon: "check",
        title: "Premium Printing",
        description: "Add bold colors, mascots, fun illustrations, and retail-ready artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable options for sustainable brands.",
      },
      {
        icon: "palette",
        title: "Shelf Appeal",
        description: "Compact, colorful, and designed for strong visibility.",
      },
    ],
    closingDescription:
      "Our mini cereal packaging adds charm, convenience, and brand impact to every serving.",
  },
  
  "cardboard-cereal-boxes": {
    eyebrow: "Why Choose Our Cardboard Cereal Boxes",
    heading: "BoxyPack delivers the perfect mix of food safety, structural strength, and premium branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Shields cereals from moisture and contamination.",
      },
      {
        icon: "check",
        title: "Premium Printing",
        description: "Add mascots, patterns, vibrant colors, and full-panel branding.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable cardboard available for green brands.",
      },
      {
        icon: "palette",
        title: "Retail Shelf Presence",
        description: "Designed to stand tall, clean, and professional.",
      },
    ],
    closingDescription:
      "Our cardboard cereal packaging supports brand storytelling while keeping cereals fresh and market-ready.",
  },
  
  "corn-flakes-boxes": {
    eyebrow: "Why Choose Our Corn Flakes Boxes",
    heading: "BoxyPack blends food safety, strength, and standout design for premium cereal packaging.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Prevents moisture exposure and keeps flakes crisp.",
      },
      {
        icon: "check",
        title: "Premium Printing",
        description: "Add mascots, patterns, bright colors, and full-panel graphics.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Shelf-Ready Presentation",
        description: "Clean edges, strong structure, and high visibility.",
      },
    ],
    closingDescription:
      "Our cornflakes packaging boxes help your brand stand out while keeping cereal fresh and protected.",
  },
  
  "unique-cereal-boxes": {
    eyebrow: "Why Choose Our Unique Cereal Boxes",
    heading: "BoxyPack blends creativity, strength, and vivid presentation to turn cereal packaging into a brand experience.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Safe storage from moisture and contamination.",
      },
      {
        icon: "check",
        title: "Creative Printing",
        description: "Add characters, special shapes, fun cuts, and bold graphics.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "High Visibility",
        description: "Designed to stand out instantly in retail aisles.",
      },
    ],
    closingDescription:
      "Our unique cereal boxes help your brand differentiate itself with unmatched creativity and strong shelf impact.",
  },
  
  "breakfast-cereal-boxes": {
    eyebrow: "Why Choose Our Breakfast Cereal Boxes",
    heading: "BoxyPack delivers the ideal blend of freshness protection, premium printing, and strong retail presence.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Shields cereals from air, moisture, and contamination.",
      },
      {
        icon: "check",
        title: "High-Quality Printing",
        description: "Add characters, patterns, vibrant colors, and detailed graphics.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Retail Impact",
        description: "Strong structure and clean edges for standout shelf visibility.",
      },
    ],
    closingDescription:
      "Our breakfast cereal boxes help your brand stay competitive while keeping products fresh and visually appealing.",
  },
  
  "colorful-cereal-boxes": {
    eyebrow: "Why Choose Our Colorful Cereal Boxes",
    heading: "BoxyPack delivers the perfect mix of visual impact, food-safe durability, and premium printing.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Keeps cereal crisp and safe inside secure packaging.",
      },
      {
        icon: "check",
        title: "Brilliant Color Printing",
        description: "Add high-definition artwork, mascots, patterns, and full-color panels.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Strong Shelf Presence",
        description: "Bold designs instantly attract attention in grocery aisles.",
      },
    ],
    closingDescription:
      "Our colorful cereal boxes turn every breakfast pack into a vibrant brand moment.",
  },
  
  "vintage-cereal-boxes": {
    eyebrow: "Why Choose Our Vintage Cereal Boxes",
    heading: "BoxyPack delivers the ideal blend of vintage charm, strong structure, and food-safe protection.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Keeps cereals crisp and protected from moisture.",
      },
      {
        icon: "check",
        title: "Authentic Retro Printing",
        description: "Add aged textures, vintage illustrations, and warm color tones.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Unique Shelf Appeal",
        description: "Retro designs stand out instantly in modern market aisles.",
      },
    ],
    closingDescription:
      "Our vintage cereal packaging brings nostalgic warmth that connects with shoppers and collectors.",
  },
  
  "retro-cereal-boxes": {
    eyebrow: "Why Choose Our Retro Cereal Boxes",
    heading: "BoxyPack blends vintage aesthetics with modern packaging performance.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Protects cereals from moisture and contamination.",
      },
      {
        icon: "check",
        title: "Authentic Retro Design",
        description: "Add grainy textures, vintage artwork, warm tones, and heritage typography.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable paper materials available.",
      },
      {
        icon: "palette",
        title: "Unique Shelf Appeal",
        description: "Retro visuals stand out and attract nostalgic shoppers instantly.",
      },
    ],
    closingDescription:
      "Our retro cereal packaging gives your breakfast line a timeless, collectible personality.",
  },
  
  "90s-cereal-boxes": {
    eyebrow: "Why Choose Our 90s Cereal Boxes",
    heading: "BoxyPack blends nostalgic visuals with strong packaging quality.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Keeps cereals crisp and protected from moisture.",
      },
      {
        icon: "check",
        title: "High-Impact Retro Printing",
        description: "Add neon splashes, cartoon graphics, and 90s-inspired shapes.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Strong Shelf Presence",
        description: "Retro colors and patterns stand out instantly in breakfast aisles.",
      },
    ],
    closingDescription:
      "Our 90s cereal packaging adds fun nostalgia and bold energy to any cereal brand.",
  },
  
  "80s-cereal-boxes": {
    eyebrow: "Why Choose Our 80s Cereal Boxes",
    heading: "BoxyPack blends nostalgic visuals with strong packaging performance.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Protection",
        description: "Protects cereals from moisture and contamination.",
      },
      {
        icon: "check",
        title: "Retro-Authentic Printing",
        description: "Add neon colors, arcade graphics, geometric patterns, and vintage icons.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable material choices available.",
      },
      {
        icon: "palette",
        title: "Bold Shelf Appeal",
        description: "Instantly recognizable 80s visuals attract nostalgic shoppers and kids alike.",
      },
    ],
    closingDescription:
      "Our 80s cereal packaging adds retro personality and energetic visuals to any cereal brand.",
  },
  
  "funny-cereal-boxes": {
    eyebrow: "Why Choose Our Funny Cereal Boxes",
    heading: "BoxyPack delivers humor with high-quality packaging and standout visual energy.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Freshness Guaranteed",
        description: "Protects cereal from moisture, pressure, and contamination.",
      },
      {
        icon: "check",
        title: "Vibrant Comedy Printing",
        description: "Add jokes, goofy characters, cartoon layouts, and colorful chaos.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Kraft and recycled options available.",
      },
      {
        icon: "palette",
        title: "High Shelf Impact",
        description: "Funny visuals make shoppers stop, smile, and engage.",
      },
    ],
    closingDescription:
      "Our funny cereal packaging gives your brand a fun, playful identity that stays memorable.",
  },

  // Gift Boxes Category
  "gift-boxes": {
    eyebrow: "Why Choose Our Gift Boxes",
    heading: "At BoxyPack, presentation becomes emotion. Our custom gift packaging boxes transform your products into meaningful moments.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Designs",
        description: "Beautiful finishes that elevate the gifting experience.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Choices",
        description: "Sustainable and recyclable material options.",
      },
      {
        icon: "star",
        title: "Complete Customization",
        description: "Add logos, messages, colors, and textures.",
      },
      {
        icon: "palette",
        title: "Competitive Pricing",
        description: "Affordable gift boxes price for bulk and custom orders.",
      },
    ],
    closingDescription:
      "We help your gifts stand out with packaging that feels thoughtful, refined, and lasting.",
  },

  // Gift Boxes Subcategories
  "gift-pillow-boxes": {
    eyebrow: "Why Choose Our Gift Pillow Boxes",
    heading: "BoxyPack delivers the perfect mix of elegant design, strong structure, and expressive customization.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Gift Appeal",
        description: "Add charm and sophistication to every small gift.",
      },
      {
        icon: "check",
        title: "Custom Branding",
        description: "Personalize with logos, prints, event themes, or corporate designs.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials available.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Look",
        description: "Smooth finishes and quality printing enhance shelf appeal.",
      },
    ],
    closingDescription:
      "Our pillow gift packaging brings a refined style that elevates brand gifting and special event presentation.",
  },
  
  "birthday-gift-boxes": {
    eyebrow: "Why Choose Our Birthday Gift Boxes",
    heading: "BoxyPack delivers a joyful mix of bright design, strong structure, and premium presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Vibrant Themes",
        description: "Add celebration energy with colorful prints and fun artwork.",
      },
      {
        icon: "check",
        title: "Luxury Options",
        description: "Magnetic boxes, foiled finishes, and rigid structures available.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable materials for conscious gifting.",
      },
      {
        icon: "palette",
        title: "Retail-Ready Look",
        description: "Smooth printing and festive themes enhance shelf appeal.",
      },
    ],
    closingDescription:
      "Our birthday gift packaging brings excitement and festive charm to every celebration.",
  },
  
  "sweet-gift-boxes-industry": {
    eyebrow: "Why Choose Our Sweet Gift Boxes",
    heading: "BoxyPack blends elegant design, food-safe protection, and premium visual appeal.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Food-Safe Quality",
        description: "Protects sweets from moisture, contamination, and breakage.",
      },
      {
        icon: "check",
        title: "Premium Printing",
        description: "Add rich colors, luxury finishes, and irresistible artwork.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable choices for conscious dessert brands.",
      },
      {
        icon: "palette",
        title: "Perfect for Gifting",
        description: "Stylish designs enhance every sweet-giving moment.",
      },
    ],
    closingDescription:
      "Our sweet gift packaging helps your desserts feel premium, thoughtful, and irresistible.",
  },
  
  "party-favor-boxes": {
    eyebrow: "Why Choose Our Party Favor Boxes",
    heading: "BoxyPack blends festive visual appeal, strong structure, and custom design flexibility.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Event Ready",
        description: "Perfect for birthdays, showers, corporate events, and celebrations.",
      },
      {
        icon: "check",
        title: "Vibrant Printing",
        description: "Add bold themes, kids' patterns, or elegant luxury finishes.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable options available.",
      },
      {
        icon: "palette",
        title: "Versatile Designs",
        description: "Fits candies, toys, small gifts, cosmetics, soaps, and more.",
      },
    ],
    closingDescription:
      "Our party favor packaging brings excitement and beauty to every event experience.",
  },
  
  "round-gift-boxes": {
    eyebrow: "Why Choose Our Round Gift Boxes",
    heading: "BoxyPack blends modern luxury, strong construction, and custom design precision.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Presentation",
        description: "Smooth curves and premium finishes elevate any product.",
      },
      {
        icon: "check",
        title: "Strong Structure",
        description: "Rigid board protects delicate gifts and premium items.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Kraft and recyclable options available.",
      },
      {
        icon: "palette",
        title: "Perfect Branding",
        description: "High-end printing creates a luxury retail presence.",
      },
    ],
    closingDescription:
      "Our round gift packaging adds refinement and premium value to every product and event.",
  },
  
  "gift-boxes-with-lid": {
    eyebrow: "Why Choose Our Gift Boxes with Lid",
    heading: "BoxyPack blends luxury presentation, strong structure, and premium branding options.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Elegant Unboxing",
        description: "Premium lid design enhances any product reveal.",
      },
      {
        icon: "check",
        title: "Luxury Printing",
        description: "Add foil, soft-touch, textured finishes, and full branding.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Materials",
        description: "Kraft and recyclable board options available.",
      },
      {
        icon: "palette",
        title: "Strong Protection",
        description: "Rigid board ensures durability for premium gifts.",
      },
    ],
    closingDescription:
      "Our gift boxes with lid help brands deliver a memorable, high-end gifting experience.",
  },
  
  "custom-deluxe-gift-boxes": {
    eyebrow: "Why Choose Our Deluxe Gift Boxes",
    heading: "BoxyPack blends high-end structure, luxury finishing, and precision craftsmanship.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Ultra-Premium Appeal",
        description: "Soft-touch, textured, and foil options elevate product value.",
      },
      {
        icon: "check",
        title: "Strong Rigid Construction",
        description: "Provides unmatched protection for premium items.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft deluxe rigid options support sustainable branding.",
      },
      {
        icon: "palette",
        title: "High-End Branding",
        description: "Luxury-grade printing elevates retail impact and unboxing.",
      },
    ],
    closingDescription:
      "Our deluxe gift packaging transforms every product into a premium gifting experience.",
  },
  
  "custom-square-gift-boxes": {
    eyebrow: "Why Choose Our Square Gift Boxes",
    heading: "BoxyPack combines sharp design, durable structure, and premium printing.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Clean, Modern Look",
        description: "Square edges create a neat, luxury presentation.",
      },
      {
        icon: "check",
        title: "Strong Protection",
        description: "Rigid construction keeps premium products secure.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable board available.",
      },
      {
        icon: "palette",
        title: "Premium Branding",
        description: "High-end prints and finishes elevate product appeal.",
      },
    ],
    closingDescription:
      "Our square gift packaging adds elegance and professionalism to every gifting moment.",
  },
  
  "small-gift-boxes": {
    eyebrow: "Why Choose Our Small Gift Boxes",
    heading: "BoxyPack blends compact elegance, strong construction, and premium finishing.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Perfect for Small Gifts",
        description: "Ideal for jewelry, candles, treats, accessories, and premium minis.",
      },
      {
        icon: "check",
        title: "Premium Branding",
        description: "Add logos, foil, textures, and elegant prints for upscale appeal.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable small packaging available.",
      },
      {
        icon: "palette",
        title: "Strong Protection",
        description: "Rigid construction keeps delicate items safe and secure.",
      },
    ],
    closingDescription:
      "Our small gift packaging elevates your product's presentation with charm and premium style.",
  },
  
  "large-gift-boxes": {
    eyebrow: "Why Choose Our Large Gift Boxes",
    heading: "BoxyPack combines spacious design, high-end structure, and luxury branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Impressive Presentation",
        description: "Large, premium boxes elevate high-value gifts.",
      },
      {
        icon: "check",
        title: "Strong Protection",
        description: "Rigid build supports heavier and bulkier items.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable board choices.",
      },
      {
        icon: "palette",
        title: "Premium Branding",
        description: "High-quality prints and finishes ensure a luxury look.",
      },
    ],
    closingDescription:
      "Our large gift packaging brings a bold, premium feel to every gifting moment.",
  },

  // Shipping Boxes Category
  "shipping-boxes-industry": {
    eyebrow: "Why Choose Our Shipping Boxes",
    heading: "At BoxyPack, protection meets performance. Our custom shipping packaging boxes help brands ship confidently and professionally.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Maximum Strength",
        description: "Designed to handle long trips and heavy loads.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Build",
        description: "Recyclable materials for sustainable shipping.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, colors, and branded messaging.",
      },
      {
        icon: "palette",
        title: "Affordable Pricing",
        description: "Competitive shipping boxes price for bulk orders.",
      },
    ],
    closingDescription:
      "We deliver packaging that keeps your products safe from warehouse to doorstep.",
  },

  // Shipping Boxes Subcategories
  "black-shipping-boxes": {
    eyebrow: "Why Choose Our Black Shipping Boxes",
    heading: "BoxyPack blends bold style, reliable protection, and premium customization.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Branding",
        description: "Black packaging gives your brand a high-end, modern identity.",
      },
      {
        icon: "check",
        title: "Strong Protection",
        description: "Corrugated strength keeps products secure during transit.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable black kraft materials available.",
      },
      {
        icon: "palette",
        title: "Sharp Visual Appeal",
        description: "Black finishes create instant brand recognition.",
      },
    ],
    closingDescription:
      "Our black shipping packaging ensures your products arrive safely and leave a lasting impression.",
  },
  
  "candle-shipping-boxes-industry": {
    eyebrow: "Why Choose Our Candle Shipping Boxes",
    heading: "BoxyPack delivers strong protection, premium printing, and brand-ready presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Maximum Safety",
        description: "Anti-crush designs protect candles during transport.",
      },
      {
        icon: "check",
        title: "Premium Branding",
        description: "Printed mailers elevate your candle's unboxing appeal.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable materials support eco-conscious candle brands.",
      },
      {
        icon: "palette",
        title: "Custom Fit",
        description: "Inserts and dividers ensure candles stay secure and intact.",
      },
    ],
    closingDescription:
      "Our candle shipping packaging keeps your candles safe while reinforcing your brand's quality and aesthetic.",
  },
  
  "corrugated-shipping-boxes": {
    eyebrow: "Why Choose Our Corrugated Shipping Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer corrugated board guards products in transit.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Increase customer engagement with printed mailer designs.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft corrugated packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Suitable for small parcels, retail orders, bulk loads, and industrial shipping.",
      },
    ],
    closingDescription:
      "Our corrugated shipping packaging ensures every product arrives safely and reflects your brand's quality.",
  },
  
  "custom-shipping-boxes": {
    eyebrow: "Why Choose Our Custom Shipping Boxes",
    heading: "BoxyPack combines durability, high-end branding, and reliable protection.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Professional Branding",
        description: "Create memorable unboxing moments with custom prints.",
      },
      {
        icon: "check",
        title: "Strong Structure",
        description: "Corrugated strength ensures products arrive safely.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Choices",
        description: "Kraft and recyclable options support sustainable shipping.",
      },
      {
        icon: "palette",
        title: "Versatile Designs",
        description: "Suitable for all product types and shipping volumes.",
      },
    ],
    closingDescription:
      "Our custom shipping packaging enhances customer experience while keeping your products protected.",
  },

  // Cigarette Boxes Category
  "cigarette-boxes": {
    eyebrow: "Why Choose Our Cigarette Boxes",
    heading: "At BoxyPack, structure meets branding. Our custom cigarette packaging boxes help your brand stand out with durability and detail.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "High Brand Visibility",
        description: "Premium printing for labels and artwork.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, product details, and finishes.",
      },
      {
        icon: "palette",
        title: "Competitive Pricing",
        description: "Fair cigarette boxes price for bulk and wholesale orders.",
      },
    ],
    closingDescription:
      "We deliver packaging that matches the precision and professionalism your brand requires.",
  },

  // Cigarette Boxes Subcategories
  "paper-cigarette-boxes": {
    eyebrow: "Why Choose Our Paper Cigarette Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer paperboard guards cigarettes during transit.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Boost retail impact with rich print designs and warnings.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft paper cigarette packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Suitable for tobacco sticks, herbal cigarettes, slim packs, and minis.",
      },
    ],
    closingDescription:
      "Our paper cigarette packaging ensures every product arrives secure, fresh, and professionally branded.",
  },
  
  "custom-cigarette-boxes": {
    eyebrow: "Why Choose Our Custom Cigarette Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer paperboard guards cigarettes during transit.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "High-quality printed designs enhance retail engagement.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft cigarette packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for standard sticks, slim cigarettes, herbal rolls, and minis.",
      },
    ],
    closingDescription:
      "Our custom cigarette packaging ensures every product arrives protected, polished, and ready for retail.",
  },
  
  "empty-cigarette-boxes": {
    eyebrow: "Why Choose Our Empty Cigarette Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer paperboard guards cigarettes during handling.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Add artwork, colors, or warnings when needed.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft cigarette packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for blanks, printed shells, slim packs, and herbal sticks.",
      },
    ],
    closingDescription:
      "Our empty cigarette packaging ensures every pack is ready for filling, branding, and safe retail placement.",
  },
  
  "cardboard-cigarette-boxes": {
    eyebrow: "Why Choose Our Cardboard Cigarette Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer cardboard protects cigarettes during transit and handling.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "High-quality print options enhance shelf appeal and visibility.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft cardboard packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for premium boxes, printed packs, slim cigarettes, and herbal sticks.",
      },
    ],
    closingDescription:
      "Our cardboard cigarette packaging ensures every pack arrives safe, polished, and brand-ready.",
  },
  
  "blank-cigarette-boxes": {
    eyebrow: "Why Choose Our Blank Cigarette Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer paperboard guards cigarettes during handling and transport.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Perfect blank surface for labels, full-wrap printing, or sleeves.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft blank packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for unprinted shells, slim packs, herbal sticks, and private-label filling.",
      },
    ],
    closingDescription:
      "Our blank cigarette packaging ensures every pack is strong, versatile, and ready for branding or retail prep.",
  },
  
  "flip-top-cigarette-boxes": {
    eyebrow: "Why Choose Our Flip Top Cigarette Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer paperboard protects cigarettes during handling.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Premium print surfaces highlight your artwork and labels.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft flip top packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for standard cigarettes, slim packs, herbal rolls, and mini packs.",
      },
    ],
    closingDescription:
      "Our flip top cigarette packaging ensures every pack delivers secure closure, fresh contents, and strong brand impact.",
  },

  // Stationery Boxes Category
  "stationery-boxes": {
    eyebrow: "Why Choose Our Stationery Boxes",
    heading: "At BoxyPack, organization meets style. Our custom stationery packaging boxes help brands enhance product value through strong, attractive presentation.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Design",
        description: "Clean prints and professional finishing for retail appeal.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Options",
        description: "Sustainable materials for responsible packaging.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, colors, textures, and creative artwork.",
      },
      {
        icon: "palette",
        title: "Fair Pricing",
        description: "Competitive stationery boxes price for bulk and wholesale orders.",
      },
    ],
    closingDescription:
      "We create packaging that makes stationery products look polished and ready for work or creativity.",
  },

  // Stationery Boxes Subcategories
  "custom-pencil-boxes": {
    eyebrow: "Why Choose Our Custom Pencil Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board protects pencils during storage and shipping.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase artwork, patterns, and product details with premium clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft pencil packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for school packs, art sets, designer boxes, and retail products.",
      },
    ],
    closingDescription:
      "Our custom pencil packaging ensures every pack looks premium, protects your pencils, and enhances retail appeal.",
  },
  
  "cardboard-pen-boxes": {
    eyebrow: "Why Choose Our Cardboard Pen Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer cardboard protects pens during shipping and storage.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase artwork, brand colors, and product details with clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft pen packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for retail pen packs, gift sets, corporate kits, and luxury pens.",
      },
    ],
    closingDescription:
      "Our cardboard pen packaging ensures every box looks polished, protects your product, and strengthens your retail presence.",
  },
  
  "cardboard-pencil-boxes": {
    eyebrow: "Why Choose Our Cardboard Pencil Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer cardboard protects pencils during storage and transport.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase colors, artwork, and product info with clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft pencil packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for school packs, art sets, retail boxes, and luxury pencils.",
      },
    ],
    closingDescription:
      "Our cardboard pencil packaging ensures every unit arrives secure, professional, and ready for retail display.",
  },
  
  "custom-book-boxes": {
    eyebrow: "Why Choose Our Custom Book Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board shields books from wear, bending, and transit damage.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Display artwork, titles, and designs with high print clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft book packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Suitable for novels, planners, collectors' editions, journals, and gift sets.",
      },
    ],
    closingDescription:
      "Our custom book packaging ensures every book arrives secure, polished, and premium in appearance.",
  },
  
  "custom-presentation-folders": {
    eyebrow: "Why Choose Our Custom Presentation Folders",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board protects documents during transportation and storage.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase logos, brand colors, and corporate messaging clearly.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft presentation folder packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for business kits, conferences, school folders, real estate handovers, and corporate sets.",
      },
    ],
    closingDescription:
      "Our custom presentation folders ensure your documents look organized, professional, and presentation-ready.",
  },
  
  "pen-gift-boxes": {
    eyebrow: "Why Choose Our Pen Gift Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board protects pens during storage and gifting.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Enhance gift value with premium artwork and foil details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft pen packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for luxury pens, corporate gifts, retail sets, and special editions.",
      },
    ],
    closingDescription:
      "Our pen gift packaging ensures every set feels premium, secure, and designed to impress.",
  },
  
  "custom-pen-boxes": {
    eyebrow: "Why Choose Our Custom Pen Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board protects pens during shipping and storage.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Highlight patterns, artwork, and brand identity with clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft pen packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Suitable for corporate gifts, retail pen sets, luxury pens, and promotions.",
      },
    ],
    closingDescription:
      "Our custom pen packaging keeps every pen protected, polished, and ready for premium presentation.",
  },

  // Pre Roll Boxes Category
  "pre-roll-boxes-industry": {
    eyebrow: "Why Choose Our Pre Roll Boxes",
    heading: "At BoxyPack, compliance meets creativity. Our luxury pre roll packaging boxes help brands communicate quality, safety, and style.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "High-End Design",
        description: "Premium prints and finishes that elevate your brand.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Options",
        description: "Recyclable and earth-forward packaging materials.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, strain info, QR codes, and artwork.",
      },
      {
        icon: "palette",
        title: "Competitive Pricing",
        description: "Fair pre roll boxes price for bulk and custom orders.",
      },
    ],
    closingDescription:
      "We create packaging that protects your product and strengthens your brand image.",
  },

  // Pre Roll Boxes Subcategories
  "cannabis-pre-roll-packaging": {
    eyebrow: "Why Choose Our Cannabis Pre Roll Packaging",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board protects pre rolls during storage and delivery.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Highlight strain lines, logos, and visuals with precision.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft cannabis packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for singles, multi-packs, premium sets, and child-resistant packaging.",
      },
    ],
    closingDescription:
      "Our cannabis pre roll packaging ensures every pre roll is secure, fresh, and perfectly presented for retail.",
  },
  
  "pre-roll-display-boxes": {
    eyebrow: "Why Choose Our Pre Roll Display Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board stabilizes displays and protects pre rolls.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase logos, strains, and artwork for retail attention.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft display packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for singles, multi-packs, minis, dogwalkers, and premium pre roll sets.",
      },
    ],
    closingDescription:
      "Our pre roll display packaging ensures strong shelf presence, organized product placement, and retail-ready presentation.",
  },
  
  "pre-roll-packaging": {
    eyebrow: "Why Choose Our Pre Roll Packaging",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board protects pre rolls during storage and transport.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Highlight strains, logos, and artwork with clarity and detail.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft pre roll packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for singles, multi-packs, minis, dogwalkers, and premium sets.",
      },
    ],
    closingDescription:
      "Our pre roll packaging ensures your cannabis products stay fresh, protected, and visually appealing at retail.",
  },
  
  "custom-delta-8-boxes": {
    eyebrow: "Why Choose Our Custom Delta 8 Boxes",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer board protects Delta 8 products during storage and transport.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Highlight strain names, batch info, and branding with clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft Delta 8 packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for pre rolls, tinctures, vapes, gummies, and premium product sets.",
      },
    ],
    closingDescription:
      "Our Delta 8 packaging ensures every product stays protected, compliant, and visually striking.",
  },
  
  "pre-roll-packaging-labels": {
    eyebrow: "Why Choose Our Pre Roll Packaging Labels",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "High-adhesion labels stay secure on tubes, cartons, and jars.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Premium print clarity supports strain art and compliance text.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable kraft and paper label options available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for tubes, boxes, jars, multi-packs, strain sets, and premium lines.",
      },
    ],
    closingDescription:
      "Our pre roll packaging labels ensure every product is branded clearly, compliant, and retail-ready.",
  },
  
  "luxury-pre-roll-packaging": {
    eyebrow: "Why Choose Our Luxury Pre Roll Packaging",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer rigid board protects pre rolls during storage and delivery.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase high-end artwork, foil details, and premium design features.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft luxury packaging available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for premium singles, multi-packs, infused lines, minis, and collector editions.",
      },
    ],
    closingDescription:
      "Our luxury pre roll packaging ensures every product feels exclusive, secure, and premium on retail shelves.",
  },

  // Mylar Pouches Category
  "mylar-pouches": {
    eyebrow: "Why Choose Our Mylar Pouches",
    heading: "At BoxyPack, protection meets presentation. Our high quality Mylar pouches make your products safer, fresher, and more visually appealing.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Superior Barrier",
        description: "Blocks moisture, air, UV light, and odors.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Choices",
        description: "Recyclable and kraft-laminated pouch options.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add custom logos, graphics, colors, and finishes.",
      },
      {
        icon: "palette",
        title: "Competitive Pricing",
        description: "Affordable Mylar pouches price for wholesale orders.",
      },
    ],
    closingDescription:
      "We create Mylar packaging that keeps your products fresh and your brand memorable.",
  },

  // Mylar Pouches Subcategories
  "stand-up-pouches": {
    eyebrow: "Why Choose Our Stand Up Pouches",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer barrier films protect items from moisture and air.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Full-wrap artwork and colors enhance shelf impact.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft pouches available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for snacks, coffee, cannabis, powders, gummies, herbs, and more.",
      },
    ],
    closingDescription:
      "Our stand up pouches ensure every product remains fresh, protected, and displayed with high retail appeal.",
  },
  
  "zipper-bags": {
    eyebrow: "Why Choose Our Zipper Bags",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer films protect contents from moisture and air.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Full-wrap artwork enhances shelf presence and customer appeal.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft zipper bags available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for snacks, coffee, herbs, gummies, supplements, and cannabis.",
      },
    ],
    closingDescription:
      "Our zipper bag packaging ensures every product stays fresh, secure, and visually appealing.",
  },
  
  "window-bags": {
    eyebrow: "Why Choose Our Window Bags",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Multi-layer films protect items from moisture and air.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Full-wrap artwork and window cutouts enhance retail impact.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft window bags available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for snacks, cookies, coffee, herbs, powders, tea, and wellness goods.",
      },
    ],
    closingDescription:
      "Our window bag packaging ensures every product stays fresh, visible, and ready for display.",
  },

  // Shopping Bags Category
  "shopping-bags": {
    eyebrow: "Why Choose Our Shopping Bags",
    heading: "At BoxyPack, we combine sustainability, strength, and branding excellence to deliver the best shopping bag solutions.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Durable Construction",
        description: "Reinforced materials support retail and grocery items.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Options",
        description: "Recyclable and biodegradable materials available.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, artwork, patterns, and branding elements.",
      },
      {
        icon: "palette",
        title: "Competitive Pricing",
        description: "Affordable shopping bags price for bulk and wholesale orders.",
      },
    ],
    closingDescription:
      "We help your brand stand out with packaging that carries quality from store to customer.",
  },

  // Shopping Bags Subcategories
  "kraft-shopping-bags": {
    eyebrow: "Why Choose Our Kraft Shopping Bags",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Reinforced kraft construction supports retail and grocery items.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase logos, artwork, and store branding with clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and biodegradable kraft bags available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for retail stores, gifts, groceries, apparel, beauty products, and bakery items.",
      },
    ],
    closingDescription:
      "Our kraft shopping bags ensure your customers enjoy strong, sustainable, and stylish carry-out packaging.",
  },
  
  "paper-bags": {
    eyebrow: "Why Choose Our Paper Bags",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Reinforced paper materials support retail and grocery items.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase logos, patterns, and branding elements with clarity.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and biodegradable paper bags available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for retail stores, events, groceries, gifts, cosmetics, and apparel.",
      },
    ],
    closingDescription:
      "Our paper bag packaging ensures your customers enjoy clean, strong, and sustainable carry-out solutions.",
  },
  
  "pvc-bags": {
    eyebrow: "Why Choose Our PVC Bags",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Reinforced PVC protects items from dust, moisture, and handling.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Showcase logos and artwork clearly on transparent surfaces.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable PVC material options available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for cosmetics, apparel, travel kits, accessories, and promotional goods.",
      },
    ],
    closingDescription:
      "Our PVC bags ensure your products look premium, protected, and ready for display.",
  },

  // Other/Printing Services Category
  "other": {
    eyebrow: "Why Choose Our Printing Services",
    heading: "At BoxyPack, we combine quality printing, professional finishing, and branding expertise to deliver complete packaging solutions.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Premium Quality",
        description: "High-resolution printing and professional finishing.",
      },
      {
        icon: "check",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable materials available.",
      },
      {
        icon: "star",
        title: "Full Customization",
        description: "Add logos, artwork, colors, and custom designs.",
      },
      {
        icon: "palette",
        title: "Competitive Pricing",
        description: "Affordable printing services price for bulk and custom orders.",
      },
    ],
    closingDescription:
      "We help your brand communicate professionally with printing that matches your quality standards.",
  },

  // Other/Printing Services Subcategories
  "booklets": {
    eyebrow: "Why Choose Our Booklets",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Professional binding keeps pages secure and long-lasting.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Full-color printing enhances visuals, charts, and brand elements.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft booklet materials available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for manuals, catalogs, presentations, guides, and event booklets.",
      },
    ],
    closingDescription:
      "Our booklet printing ensures every page looks sharp, professional, and ready for distribution.",
  },
  
  "brochures": {
    eyebrow: "Why Choose Our Brochures",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Thick paper and clean folding ensure long-lasting durability.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Vivid full-color printing enhances brand messaging and visuals.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft brochure materials available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for menus, product guides, real estate handouts, and event brochures.",
      },
    ],
    closingDescription:
      "Our brochure printing ensures every piece looks clean, professional, and ready to hand out or display.",
  },
  
  "printed-tags": {
    eyebrow: "Why Choose Our Tags Printing",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Premium cardstock and reinforced punch holes increase tag life.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Vivid full-color printing highlights logos and product details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and recyclable tag materials available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for apparel, accessories, handmade goods, retail packaging, and gifts.",
      },
    ],
    closingDescription:
      "Our tags printing ensures every product looks branded, polished, and ready for retail display.",
  },
  
  "business-cards": {
    eyebrow: "Why Choose Our Business Cards",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Premium cardstock ensures long-lasting durability and a solid feel.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Full-color clarity enhances logos, text, artwork, and brand details.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable kraft and premium paper options available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for executives, agencies, freelancers, retail teams, and events.",
      },
    ],
    closingDescription:
      "Our business cards ensure every handshake feels professional, polished, and memorable.",
  },
  
  "custom-tissue-paper": {
    eyebrow: "Why Choose Our Custom Tissue Paper",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "High-quality tissue provides gentle yet reliable product protection.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Crisp logos and patterns enhance unboxing and branding.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and sustainable tissue paper available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for apparel, gifts, cosmetics, subscription boxes, and boutique packaging.",
      },
    ],
    closingDescription:
      "Our custom tissue paper ensures every unboxing feels premium, soft, and brand-led.",
  },
  
  "butter-paper": {
    eyebrow: "Why Choose Our Butter Paper",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Grease-resistant material prevents leaks and keeps food fresh.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Crisp logo printing enhances brand recognition with every order.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft butter paper available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for bakeries, burger shops, cafes, restaurants, and food packaging.",
      },
    ],
    closingDescription:
      "Our butter paper ensures food stays fresh, hygienic, and professionally presented.",
  },
  
  "products-bottle-labels": {
    eyebrow: "Why Choose Our Product Labels & Bottle Labels",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Adhesive labels stay secure on bottles, jars, boxes, and tubes.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Vivid colors enhance logos, text, artwork, and product info.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable and kraft label materials available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for cosmetics, food jars, beverages, candles, supplements, and oils.",
      },
    ],
    closingDescription:
      "Our product labels ensure your packaging looks polished, professional, and retail-ready.",
  },
  
  "table-tents": {
    eyebrow: "Why Choose Our Table Tents",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Thick, sturdy cardstock ensures stable, long-lasting displays.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "High-resolution printing boosts promotional visibility.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Recyclable paper and kraft options available.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Ideal for menus, promotions, QR codes, events, and retail marketing.",
      },
    ],
    closingDescription:
      "Our table tents ensure your messages stand out, attract attention, and increase customer engagement.",
  },
  
  "packing-tape": {
    eyebrow: "Why Choose Our Packing Tape",
    heading: "BoxyPack blends durability, reliable protection, and powerful branding.",
    description: "",
    features: [
      {
        icon: "shield",
        title: "Heavy-Duty Strength",
        description: "Strong adhesive ensures boxes stay sealed during shipping and handling.",
      },
      {
        icon: "check",
        title: "Brand-Ready Printing",
        description: "Sharp logo printing increases brand visibility on every parcel.",
      },
      {
        icon: "star",
        title: "Eco-Friendly Options",
        description: "Kraft and water-activated tape available for sustainable packaging.",
      },
      {
        icon: "palette",
        title: "Versatile Use",
        description: "Perfect for shipping boxes, storage cartons, mailers, and e-commerce packaging.",
      },
    ],
    closingDescription:
      "Our packing tape ensures every shipment stays secure while reinforcing your brand identity.",
  },

};

export default whyChooseUsData;

