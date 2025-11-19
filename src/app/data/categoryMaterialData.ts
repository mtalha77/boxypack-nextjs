export interface CategoryMaterialContent {
  title: string;
  paragraph1: string;
  paragraph2: string;
  features: string[];
}

export const categoryMaterialData: Record<string, CategoryMaterialContent> = {
  // Material Categories
  "rigid-boxes": {
    title: "Which Material Is Used in Rigid Boxes?",
    paragraph1:
      "Our rigid boxes are made from high-density greyboard or chipboard, wrapped with fine coated or uncoated paper stock. This material ensures superior durability, print clarity, and a polished appearance.",
    paragraph2:
      "Each rigid box undergoes precise cutting and gluing for seamless alignment and a flawless look, ensuring your brand's packaging stands out in quality and craftsmanship.",
    features: [
      "Matte, gloss, or velvet lamination for surface protection",
      "Foil stamping, embossing, or UV coating for premium detailing",
      "Eco-friendly wraps for sustainable packaging",
    ],
  },
  "kraft-boxes": {
    title: "Which Material Is Used in Kraft Boxes?",
    paragraph1:
      "Our kraft packaging boxes are made from premium-grade kraft paperboard, derived from renewable and recyclable pulp fibers. This material is known for its high tear resistance, flexibility, and sustainable quality.",
    paragraph2:
      "Each box is carefully crafted to maintain structure while offering a refined, organic presentation that aligns with eco-conscious branding.",
    features: [
      "Matte, gloss, or soft-touch lamination for professional finishes",
      "Foil stamping, embossing, or spot UV for logo detailing",
      "Eco-friendly inks for safe, sustainable printing",
    ],
  },
  "cardboard-boxes": {
    title: "Which material is used in Cardboard Boxes?",
    paragraph1:
      "All custom cardboard boxes are made from high-quality corrugated or solid paperboard. The core structure includes a fluted layer between two flat liners, which enhances shock absorption and strength without adding extra weight.",
    paragraph2:
      "Each cardboard box is engineered to meet industry standards for strength, sustainability, and print quality.",
    features: [
      "Single or Double Wall Board: For strength and stability during shipping",
      "Recycled Paperboard: For sustainable and eco-friendly packaging",
      "Coated or Uncoated Stock: For smooth or natural finish options",
      "Matte, gloss, or soft-touch lamination",
      "Foil stamping and embossing for elegant branding",
      "Spot UV printing for logo highlights",
    ],
  },
  "corrugated-boxes": {
    title: "Which material is used in Corrugated boxes?",
    paragraph1:
      "Corrugated boxes are made using fluted kraft paperboard, a durable material that provides cushioning and support. The inner fluted layer sits between two linerboards, creating a lightweight yet impact-resistant structure.",
    paragraph2:
      "Each material is chosen to balance protection, cost, and sustainability for your product needs.",
    features: [
      "Single-Wall Corrugated Board for lightweight products",
      "Double-Wall Corrugated Board for added protection",
      "Triple-Wall Corrugated Board for heavy-duty packaging",
      "Recyclable Kraft Paper Liners for eco-friendly solutions",
      "Coatings and Laminations for moisture resistance and print quality",
    ],
  },

  // Industry Categories
  "bakery-boxes": {
    title: "Which Material is Used in Bakery Boxes?",
    paragraph1:
      "Our bakery boxes are made from high-quality food-safe paperboard and kraft paper. The materials are lightweight, sturdy, and compliant with food safety standards.",
    paragraph2:
      "Each material is selected to balance freshness, aesthetics, and sustainability for your baked goods.",
    features: [
      "White Cardboard for premium presentation",
      "Kraft Paperboard for natural, rustic appeal",
      "Corrugated Board for larger or multi-layered cakes",
      "Window PVC Sheets for product visibility",
      "Recyclable Coatings for eco-friendly protection",
    ],
  },
  "cosmetic-boxes": {
    title: "Which Material Is Used in Cosmetic Boxes?",
    paragraph1:
      "Our cosmetic boxes are made from premium paperboard, rigid board, and kraft materials. Each option combines structure with elegance, offering high-quality printing and texture that matches your brand's tone.",
    paragraph2:
      "Each material is chosen to enhance both protection and presentation while supporting sustainable practices.",
    features: [
      "White Cardboard for clean, sharp printing results",
      "Rigid Chipboard for luxury cosmetic boxes",
      "Kraft Paperboard for eco-conscious packaging",
      "Corrugated Board for heavy or fragile items",
      "Protective Coatings for moisture and oil resistance",
    ],
  },
  "food-boxes": {
    title: "Which Material Is Used in Food Boxes?",
    paragraph1:
      "Our food boxes are made from premium paperboard, kraft, and corrugated materials that meet strict food safety standards. These materials protect flavors, absorb moisture, and support sharp, vibrant printing for brand presentation.",
    paragraph2:
      "Each material is selected to ensure safety, performance, and eco-friendly packaging solutions.",
    features: [
      "Kraft Paperboard for sustainable takeout packaging",
      "White Cardboard for printed food boxes wholesale",
      "Corrugated Board for heavy or multi-layer meals",
      "Grease-Proof Coatings for oily or hot foods",
      "Ventilation Features for steam release and freshness",
    ],
  },
  "gift-boxes": {
    title: "Which Material Is Used in Gift Boxes?",
    paragraph1:
      "Our gift boxes are crafted using premium paperboard, rigid chipboard, and eco-friendly kraft materials. These materials create strong structures that hold gifts securely while supporting high-quality printing and decorative finishes.",
    paragraph2:
      "Each material is selected to match your packaging style, gift type, and sustainability goals.",
    features: [
      "Rigid Board for luxury gift boxes wholesale",
      "White Cardboard for sharp, vibrant printed designs",
      "Kraft Paperboard for rustic, eco-friendly packaging",
      "Corrugated Board for heavy or multi-item gift sets",
      "Laminated Coatings for added shine and protection",
    ],
  },
  "jewelry-boxes": {
    title: "Which Material Is Used in Jewelry Boxes?",
    paragraph1:
      "Our jewelry boxes are made from high-quality rigid board and specialty papers that balance protection with beauty. Each box features a strong outer shell and a soft inner lining for premium presentation.",
    paragraph2:
      "Every material is selected to ensure your jewelry boxes deliver both durability and sophistication while remaining sustainable.",
    features: [
      "Rigid Chipboard for structure and luxury appeal",
      "Velvet and Satin Linings for elegant interiors",
      "Kraft Paperboard for eco-friendly jewelry packaging boxes",
      "Cardboard Inserts for product stability",
      "Magnetic Closures for a sleek unboxing experience",
    ],
  },
  "retail-boxes": {
    title: "Which Material Is Used in Retail Boxes?",
    paragraph1:
      "Our retail boxes are made from versatile paperboard that offers excellent print quality and structural reliability. The material is designed to withstand retail environments while showcasing your products with vibrant graphics and professional finishes.",
    paragraph2:
      "Each retail box is manufactured using materials optimized for both visual impact and functional durability, ensuring your products stand out on shelves and survive the retail journey.",
    features: [
      "High-quality paperboard in various weights for different product needs",
      "Premium printing surfaces for vibrant graphics and brand colors",
      "Protective coatings including matte, gloss, and anti-scuff finishes",
      "Custom die-cutting and window options for product visibility",
    ],
  },
  "candle-boxes": {
    title: "Which Material Is Used in Candle Boxes?",
    paragraph1:
      "Our candle boxes are made from strong, heat-tolerant materials such as rigid board, kraft paperboard, and premium white cardboard. These materials support clean printing, structural stability, and long-lasting product safety.",
    paragraph2:
      "Every material is selected to ensure your candles stay protected, presentable, and true to their scent and shape.",
    features: [
      "Rigid Chipboard for luxury candle boxes wholesale",
      "Kraft Paperboard for natural and eco-friendly packaging",
      "White Cardboard for sharp, high-quality printing",
      "Corrugated Board for heavy jar candles",
      "Protective Coatings for moisture and scuff resistance",
    ],
  },
  "shipping-boxes-industry": {
    title: "Which Material Is Used in Shipping Boxes?",
    paragraph1:
      "Our shipping boxes are made from premium corrugated board, kraft liners, and heavy-duty paperboard to ensure maximum protection. These materials are designed to resist crushing, absorb shocks, and handle long travel distances.",
    paragraph2:
      "Each material is selected to deliver strong protection while supporting clean printing and sustainable packaging goals.",
    features: [
      "Single-Wall Corrugated Board for lightweight shipping",
      "Double-Wall Corrugated Board for mid to heavy items",
      "Triple-Wall Corrugated Board for industrial shipments",
      "Kraft Paperboard for eco-friendly and natural packaging",
      "Reinforced Coatings for moisture and transit resistance",
    ],
  },
  "soap-boxes-industry": {
    title: "Which Material Is Used in Soap Boxes?",
    paragraph1:
      "Our soap boxes are made from premium paperboard and kraft materials that combine strength and sustainability. The structure keeps soaps safe, while the smooth surface supports vibrant printing for your brand designs.",
    paragraph2:
      "Every material is chosen carefully to balance presentation, durability, and environmental care.",
    features: [
      "Kraft Paperboard for rustic and eco-friendly packaging",
      "White Cardboard for clean and modern looks",
      "Corrugated Board for bulk or heavy soap bars",
      "Window PVC Sheets for visible display packaging",
      "Recyclable Coatings for moisture protection and print finish",
    ],
  },
  "apparel-boxes": {
    title: "Which Material Is Used in Apparel Boxes?",
    paragraph1:
      "Our apparel boxes are crafted from rigid board, kraft, and premium paperboard that combine durability with visual elegance. These materials protect fabrics while allowing precise printing and finishes for branding.",
    paragraph2:
      "Each material is selected to maintain fabric quality, elevate aesthetics, and ensure sustainability across every order.",
    features: [
      "Rigid Chipboard for luxury apparel packaging",
      "Kraft Paperboard for sustainable and eco-friendly designs",
      "White Cardboard for smooth and vibrant printing",
      "Corrugated Board for bulk shipping orders",
      "Protective Coatings for moisture and dust resistance",
    ],
  },
  "sports-boxes": {
    title: "Which Material Is Used in Sports Boxes?",
    paragraph1:
      "Our sports boxes are made using premium rigid board, corrugated paperboard, and high-density kraft materials designed for stability and strength. These materials support heavy items while maintaining excellent print quality for branding.",
    paragraph2:
      "Each material is selected based on durability, appearance, and product safety.",
    features: [
      "Rigid Chipboard for luxury sports boxes",
      "Corrugated Board for heavy equipment and bulk shipping",
      "Kraft Paperboard for eco-friendly packaging",
      "White Cardboard for clean and vibrant printing",
      "Protective Coatings for scuff and moisture resistance",
    ],
  },
  "cigarette-boxes-industry": {
    title: "Which Material Is Used in Cigarette Boxes?",
    paragraph1:
      "Our cigarette boxes are made from premium paperboard, rigid chipboard, and coated cardboard designed for durability and clarity in printing. These materials help maintain product freshness and resist external pressure during transport and retail handling.",
    paragraph2:
      "Each material is chosen to ensure stability, branding consistency, and long-lasting quality.",
    features: [
      "White Cardboard for sharp, clean printing",
      "Rigid Board for luxury cigarette packaging",
      "Kraft Paperboard for eco-friendly options",
      "Soft-Touch and Gloss Laminations for premium finishes",
      "Moisture-Resistant Coatings for added product protection",
    ],
  },
  "cbd-boxes": {
    title: "Which Material Is Used in CBD Boxes?",
    paragraph1:
      "Our CBD boxes are made from high-grade paperboard, corrugated board, and eco kraft paper to ensure safety and durability. Each box is tailored to product specifications while supporting vibrant printing for branding.",
    paragraph2:
      "Every material is carefully selected to ensure compliance, longevity, and premium product display.",
    features: [
      "White Cardboard for clean, professional looks",
      "Kraft Paperboard for sustainable CBD packaging",
      "Corrugated Board for bulk and shipping protection",
      "Rigid Chipboard for luxury CBD gift sets",
      "Protective Coatings for oil and moisture resistance",
    ],
  },
  "vape-boxes": {
    title: "Which Material Is Used in Vape Boxes?",
    paragraph1:
      "Our vape boxes are made from high-quality paperboard, kraft, and rigid chipboard that offer strength, print precision, and sustainability. Each material is carefully chosen to maintain product integrity while ensuring sharp, premium visuals.",
    paragraph2:
      "Each material ensures compliance, strength, and style perfect for modern vape brands aiming for premium appeal.",
    features: [
      "White Cardboard for bold and clear printing",
      "Kraft Paperboard for eco-friendly vape packaging",
      "Rigid Board for luxury vape packaging boxes",
      "Corrugated Paperboard for bulk or shipping orders",
      "Protective Coatings for oil and moisture resistance",
    ],
  },
  "e-liquid-boxes": {
    title: "Which Material Is Used in E-liquid Boxes?",
    paragraph1:
      "Our e-liquid boxes are made using premium paperboard, rigid board, and kraft materials that support fine printing and bottle protection. The materials stay strong against moisture, oil marks, and temperature changes.",
    paragraph2:
      "Each material is selected to maintain product safety, compliance, and brand quality.",
    features: [
      "White Cardboard for bright, high-resolution printing",
      "Kraft Paperboard for natural, eco-friendly packaging",
      "Rigid Board for luxury e-liquid boxes and gift sets",
      "Corrugated Paperboard for heavy or large bottle packs",
      "Protective Coatings to resist oil, moisture, and scuffs",
    ],
  },
  "stationery-boxes": {
    title: "Which Material Is Used in Stationery Boxes?",
    paragraph1:
      "Our stationery boxes are made from strong paperboard, rigid chipboard, and kraft materials that balance durability with clean visual appeal. These materials support high-resolution printing and structural stability for heavier or multi-item stationery sets.",
    paragraph2:
      "Each material is selected to keep stationery items protected while supporting beautiful branding.",
    features: [
      "Rigid Board for premium stationery gift boxes",
      "White Cardboard for sharp printed designs",
      "Kraft Paperboard for eco-friendly and natural packaging",
      "Corrugated Board for bulk or heavy supply packs",
      "Laminated Coatings for scratch and moisture resistance",
    ],
  },
  "christmas-boxes": {
    title: "Which Material Is Used in Christmas Boxes?",
    paragraph1:
      "Our Christmas boxes are crafted from premium paperboard, kraft, and rigid chipboard for long-lasting beauty and protection. The materials support detailed printing and add structure for fragile or luxury gifts.",
    paragraph2:
      "Every material is chosen to balance quality, sustainability, and festive appeal.",
    features: [
      "White Cardboard for clear and vibrant prints",
      "Kraft Paperboard for rustic, eco-friendly packaging",
      "Rigid Board for high-end Christmas gift sets",
      "Corrugated Board for bulk shipping and hampers",
      "Recyclable Coatings for extra shine and moisture resistance",
    ],
  },
  "chocolate-boxes": {
    title: "Which Material Is Used in Chocolate Boxes?",
    paragraph1:
      "Our chocolate boxes are crafted using food-safe paperboard, rigid board, and kraft materials that ensure freshness, strength, and premium presentation. Each material supports detailed printing and durable construction for confectionery products.",
    paragraph2:
      "Every material is chosen to combine beauty, safety, and brand impact.",
    features: [
      "White Cardboard for vibrant printed chocolate boxes",
      "Rigid Board for luxury chocolate boxes with logo",
      "Kraft Paperboard for eco-friendly and rustic packaging",
      "Specialty Truffle Inserts for secure product placement",
      "Protective Coatings for moisture and grease resistance",
    ],
  },
  "cereal-boxes": {
    title: "Which Material Is Used in Cereal Boxes?",
    paragraph1:
      "Our cereal boxes are made from premium food-safe paperboard and recyclable kraft materials. These materials keep cereals fresh while supporting sharp, colorful printing for branding.",
    paragraph2:
      "Every material is selected to combine freshness, safety, and strong branding.",
    features: [
      "White Cardboard for clean and vibrant printed cereal boxes",
      "Kraft Paperboard for natural and eco-friendly packaging",
      "Corrugated Board for bulk food shipments",
      "Moisture-Resistant Coatings for long-lasting freshness",
      "Protective Liners for secure interior packaging",
    ],
  },
  "pre-roll-boxes-industry": {
    title: "Which Material Is Used in Pre Roll Boxes?",
    paragraph1:
      "Our pre roll boxes are made using durable paperboard, rigid chipboard, and kraft materials that support strong structure and high-quality printing. These materials protect pre rolls from impact and help maintain freshness and aroma.",
    paragraph2:
      "Each material is chosen to meet branding demands, safety standards, and sustainability goals.",
    features: [
      "Rigid Board for luxury pre roll packaging boxes",
      "White Cardboard for bold printed pre roll packaging",
      "Kraft Paperboard for natural, eco-friendly packaging",
      "Corrugated Paperboard for heavy or multi-pack sets",
      "Protective Coatings for moisture and odor resistance",
    ],
  },
  "pizza-boxes": {
    title: "Which Material Is Used in Pizza Boxes?",
    paragraph1:
      "Our pizza boxes are made from food-grade corrugated and kraft paperboard to ensure hygiene, safety, and durability. The material keeps pizzas warm, prevents grease penetration, and supports custom printing for brand recognition.",
    paragraph2:
      "Each material is carefully selected to deliver freshness, protection, and sustainability in every order.",
    features: [
      "Corrugated Board for temperature retention and strength",
      "Kraft Paperboard for eco-friendly pizza packaging",
      "White Cardboard for premium printing and clean look",
      "Grease-Resistant Coatings for oil control",
      "Ventilated Designs for moisture release and crisp texture",
    ],
  },
};

export default categoryMaterialData;
