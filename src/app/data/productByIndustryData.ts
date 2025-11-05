export interface IndustrySubCategory {
  name: string;
  slug: string;
  description?: string;
  modelPath?: string;
}

export interface IndustryCategory {
  name: string;
  slug: string;
  description: string;
  subcategories: IndustrySubCategory[];
  image: string;
  subcategoriesCount: number;
  modelPath: string;
}

export const productByIndustryData: IndustryCategory[] = [
  {
    name: "Bakery Boxes",
    slug: "bakery-boxes",
    description: "Fresh Designs for Every Sweet Treat",
    image: "Box-4_lztqi7",
    subcategoriesCount: 14,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Custom Donut Boxes", slug: "custom-donut-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Pastry Boxes", slug: "custom-pastry-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Cake Boxes", slug: "custom-cake-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Cookie Boxes", slug: "custom-cookie-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Gable Boxes", slug: "custom-gable-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Candy Boxes", slug: "custom-candy-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Mini Cupcake Boxes", slug: "mini-cupcake-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Pink Donut Boxes", slug: "pink-donut-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Window Bakery Boxes", slug: "window-bakery-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Bakery Gift Boxes", slug: "bakery-gift-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Cupcake Boxes", slug: "custom-cupcake-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Small Cake Boxes", slug: "small-cake-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Truffle Boxes", slug: "custom-truffle-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Sweet Gift Boxes", slug: "sweet-gift-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  },
  {
    name: "Cosmetic Boxes",
    slug: "cosmetic-boxes",
    description: "Stylish Packaging for Beauty Products",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 20,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Cosmetic Display Boxes", slug: "cosmetic-display-boxes" },
      { name: "Custom Perfume Boxes", slug: "custom-perfume-boxes" },
      { name: "Custom Makeup Boxes", slug: "custom-makeup-boxes" },
      { name: "Hair Extension Boxes", slug: "hair-extension-boxes" },
      { name: "Custom Lipstick Boxes", slug: "custom-lipstick-boxes" },
      { name: "Custom Lip Gloss Boxes", slug: "custom-lip-gloss-boxes" },
      { name: "Custom Eye Shadow Boxes", slug: "custom-eye-shadow-boxes" },
      { name: "Custom Cream Boxes", slug: "custom-cream-boxes" },
      { name: "Custom Mascara Boxes", slug: "custom-mascara-boxes" },
      { name: "Custom Nail Polish Boxes", slug: "custom-nail-polish-boxes" },
      { name: "Custom Lip Balm Boxes", slug: "custom-lip-balm-boxes" },
      { name: "Custom Eyeliner Boxes", slug: "custom-eyeliner-boxes" },
      { name: "Foundation Boxes", slug: "foundation-boxes" },
      { name: "Lotion Boxes", slug: "lotion-boxes" },
      { name: "Lip Balm Display Boxes", slug: "lip-balm-display-boxes" },
      { name: "Eye Lash Boxes", slug: "eye-lash-boxes" },
      { name: "Cosmetic Gift Boxes", slug: "cosmetic-gift-boxes" },
      { name: "Olive Oil Boxes", slug: "olive-oil-boxes" },
      { name: "Essential Oil Boxes", slug: "essential-oil-boxes" },
      { name: "Beard Oil Boxes", slug: "beard-oil-boxes" },
      { name: "Serum Boxes", slug: "serum-boxes" }
    ]
  },
  {
    name: "Food Boxes",
    slug: "food-boxes",
    description: "Safe, Smart, and Sustainable Food Packaging",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 11,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Custom French Fry Boxes", slug: "custom-french-fry-boxes" },
      { name: "Custom Coffee Boxes", slug: "custom-coffee-boxes" },
      { name: "Custom Coffee Cups", slug: "custom-coffee-cups" },
      { name: "Custom Coffee Cup Sleeves", slug: "custom-coffee-cup-sleeves" },
      { name: "Custom Noodle Boxes", slug: "custom-noodle-boxes" },
      { name: "Custom Chinese Takeout Boxes", slug: "custom-chinese-takeout-boxes" },
      { name: "Custom Popcorn Boxes", slug: "custom-popcorn-boxes" },
      { name: "Custom Snack Boxes", slug: "custom-snack-boxes" },
      { name: "Custom Tea Boxes", slug: "custom-tea-boxes" },
      { name: "Custom Burger Boxes", slug: "custom-burger-boxes" },
      { name: "Sandwich Boxes", slug: "sandwich-boxes" }
    ]
  },
  {
    name: "Gift Boxes",
    slug: "gift-boxes",
    description: "Elegant Boxes for Memorable Gifting Moments",
    image: "shipping-box_jyysru",
    subcategoriesCount: 10,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Gift Pillow Boxes", slug: "gift-pillow-boxes" },
      { name: "Birthday Gift Boxes", slug: "birthday-gift-boxes" },
      { name: "Sweet Gift Boxes", slug: "sweet-gift-boxes-industry" },
      { name: "Party Favor Boxes", slug: "party-favor-boxes" },
      { name: "Round Gift Boxes", slug: "round-gift-boxes" },
      { name: "Gift Boxes with Lid", slug: "gift-boxes-with-lid" },
      { name: "Custom Deluxe Gift Boxes", slug: "custom-deluxe-gift-boxes" },
      { name: "Custom Square Gift Boxes", slug: "custom-square-gift-boxes" },
      { name: "Small Gift Boxes", slug: "small-gift-boxes" },
      { name: "Large Gift Boxes", slug: "large-gift-boxes" }
    ]
  },
  {
    name: "Jewelry Boxes",
    slug: "jewelry-boxes",
    description: "Luxury Packaging for Timeless Jewelry Pieces",
    image: "Box-4_lztqi7",
    subcategoriesCount: 15,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Anklet Boxes", slug: "anklet-boxes" },
      { name: "Velvet Bags", slug: "velvet-bags" },
      { name: "Kraft Jewelry Boxes", slug: "kraft-jewelry-boxes" },
      { name: "Cardboard Jewelry Boxes", slug: "cardboard-jewelry-boxes" },
      { name: "Jewelry Subscription Box", slug: "jewelry-subscription-box" },
      { name: "Pendant Boxes", slug: "pendant-boxes" },
      { name: "Bracelet Boxes", slug: "bracelet-boxes" },
      { name: "Ring Boxes", slug: "ring-boxes" },
      { name: "Earring Boxes", slug: "earring-boxes" },
      { name: "Luxury Jewelry Packaging", slug: "luxury-jewelry-packaging" },
      { name: "Necklace Boxes", slug: "necklace-boxes" },
      { name: "Small Jewelry Boxes", slug: "small-jewelry-boxes" },
      { name: "Necklace Cards", slug: "necklace-cards" },
      { name: "Jewelry Bags", slug: "jewelry-bags" }
    ]
  },
  {
    name: "Retail Boxes",
    slug: "retail-boxes",
    description: "Smart Packaging for Modern Retail Brands",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 5,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Custom Die Cut Boxes", slug: "custom-die-cut-boxes" },
      { name: "Custom Toy Boxes", slug: "custom-toy-boxes" },
      { name: "Business Card Boxes", slug: "business-card-boxes" },
      { name: "Custom Dispenser Boxes", slug: "custom-dispenser-boxes" },
      { name: "Custom Mailer Boxes", slug: "custom-mailer-boxes" }
    ]
  },
  {
    name: "Candle Boxes",
    slug: "candle-boxes",
    description: "Warm Designs for Fragrant Candle Packaging",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 9,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Candle Gift Boxes", slug: "candle-gift-boxes" },
      { name: "Luxury Candle Boxes", slug: "luxury-candle-boxes" },
      { name: "Candle Boxes with Inserts", slug: "candle-boxes-with-inserts" },
      { name: "Candle Shipping Boxes", slug: "candle-shipping-boxes" },
      { name: "Taper Candle Boxes", slug: "taper-candle-boxes" },
      { name: "Custom Jar Candle Boxes", slug: "custom-jar-candle-boxes" },
      { name: "Wax Melt Boxes", slug: "wax-melt-boxes" },
      { name: "Kraft Candle Boxes", slug: "kraft-candle-boxes" },
      { name: "Candle Subscription Boxes", slug: "candle-subscription-boxes" }
    ]
  },
  {
    name: "Shipping Boxes",
    slug: "shipping-boxes-industry",
    description: "Strong, Reliable Boxes for Every Delivery",
    image: "shipping-box_jyysru",
    subcategoriesCount: 4,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Black Shipping Boxes", slug: "black-shipping-boxes" },
      { name: "Candle Shipping Boxes", slug: "candle-shipping-boxes-industry" },
      { name: "Corrugated Shipping Boxes", slug: "corrugated-shipping-boxes" },
      { name: "Custom Shipping Boxes", slug: "custom-shipping-boxes" }
    ]
  },
  {
    name: "Soap Boxes",
    slug: "soap-boxes-industry",
    description: "Natural Packaging for Handmade Soap Bars",
    image: "Box-4_lztqi7",
    subcategoriesCount: 10,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Soap Sleeve Packaging", slug: "soap-sleeve-packaging" },
      { name: "Custom Bath Bomb Boxes", slug: "custom-bath-bomb-boxes" },
      { name: "Soap Wrapping Paper", slug: "soap-wrapping-paper" },
      { name: "Handmade Soap Boxes", slug: "handmade-soap-boxes" },
      { name: "Luxury Soap Packaging", slug: "luxury-soap-packaging" },
      { name: "Square Soap Boxes", slug: "square-soap-boxes" },
      { name: "Soap Bar Box", slug: "soap-bar-box" },
      { name: "Paper Soap Boxes", slug: "paper-soap-boxes" },
      { name: "Kraft Soap Boxes", slug: "kraft-soap-boxes" },
      { name: "Kraft Pillow Soap Boxes", slug: "kraft-pillow-soap-boxes-industry" }
    ]
  },
  {
    name: "Apparel Boxes",
    slug: "apparel-boxes",
    description: "Premium Boxes for Fashion and Clothing",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Cufflink Boxes", slug: "cufflink-boxes" },
      { name: "Tie Boxes", slug: "tie-boxes" },
      { name: "Belt Boxes", slug: "belt-boxes" },
      { name: "Clothing Boxes", slug: "clothing-boxes" },
      { name: "Lingerie Boxes", slug: "lingerie-boxes" },
      { name: "Underwear Boxes", slug: "underwear-boxes" },
      { name: "T-Shirt Boxes", slug: "tshirt-boxes" },
      { name: "Socks Boxes", slug: "socks-boxes" }
    ]
  },
  {
    name: "Sports Boxes",
    slug: "sports-boxes",
    description: "Durable Packaging for Active Lifestyle Gear",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Cardboard Shoe Boxes", slug: "cardboard-shoe-boxes" },
      { name: "Shoe Shipping Boxes", slug: "shoe-shipping-boxes" },
      { name: "Custom Shoe Boxes", slug: "custom-shoe-boxes" },
      { name: "Shoe Boxes with Lid", slug: "shoe-boxes-with-lid" },
      { name: "Golf Ball Boxes", slug: "golf-ball-boxes" },
      { name: "Football Boxes", slug: "football-boxes" }
    ]
  },
  {
    name: "Cigarette Boxes",
    slug: "cigarette-boxes-industry",
    description: "Sleek Packaging for Tobacco Product Brands",
    image: "shipping-box_jyysru",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Paper Cigarette Boxes", slug: "paper-cigarette-boxes" },
      { name: "Custom Cigarette Boxes", slug: "custom-cigarette-boxes" },
      { name: "Empty Cigarette Boxes", slug: "empty-cigarette-boxes" },
      { name: "Cardboard Cigarette Boxes", slug: "cardboard-cigarette-boxes" },
      { name: "Blank Cigarette Boxes", slug: "blank-cigarette-boxes" },
      { name: "Flip Top Cigarette Boxes", slug: "flip-top-cigarette-boxes" }
    ]
  },
  {
    name: "CBD Boxes",
    slug: "cbd-boxes",
    description: "Eco Boxes for CBD and Hemp Products",
    image: "Box-4_lztqi7",
    subcategoriesCount: 7,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "CBD Gift Boxes", slug: "cbd-gift-boxes" },
      { name: "CBD Gummies Boxes", slug: "cbd-gummies-boxes" },
      { name: "Custom Cannabis Boxes", slug: "custom-cannabis-boxes" },
      { name: "CBD Oil Boxes", slug: "cbd-oil-boxes" },
      { name: "Hemp Oil Boxes", slug: "hemp-oil-boxes" },
      { name: "Pre Roll Boxes", slug: "pre-roll-boxes" },
      { name: "CBD Tincture Boxes", slug: "cbd-tincture-boxes" }
    ]
  },
  {
    name: "Vape Boxes",
    slug: "vape-boxes",
    description: "Custom Vape Packaging for Modern Brands",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 5,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Vape Boxes", slug: "vape-boxes" },
      { name: "Empty Vape Cartridge Packaging", slug: "empty-vape-cartridge-packaging" },
      { name: "Vape Cartridge Packaging", slug: "vape-cartridge-packaging" },
      { name: "Custom Vape Boxes", slug: "custom-vape-boxes" },
      { name: "Disposable Vape Packaging", slug: "disposable-vape-packaging" }
    ]
  },
  {
    name: "E-liquid Boxes",
    slug: "e-liquid-boxes",
    description: "Trendy Boxes for E-Juice Collections",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 3,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "E-liquid Bottle Boxes", slug: "e-liquid-bottle-boxes" },
      { name: "E-liquid Display Boxes", slug: "e-liquid-display-boxes" },
      { name: "E-liquid Gift Boxes", slug: "e-liquid-gift-boxes" }
    ]
  },
  {
    name: "Stationery Boxes",
    slug: "stationery-boxes",
    description: "Creative Packaging for Office Essentials",
    image: "shipping-box_jyysru",
    subcategoriesCount: 7,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Custom Pencil Boxes", slug: "custom-pencil-boxes" },
      { name: "Cardboard Pen Boxes", slug: "cardboard-pen-boxes" },
      { name: "Cardboard Pencil Boxes", slug: "cardboard-pencil-boxes" },
      { name: "Custom Book Boxes", slug: "custom-book-boxes" },
      { name: "Custom Presentation Folders", slug: "custom-presentation-folders" },
      { name: "Pen Gift Boxes", slug: "pen-gift-boxes" },
      { name: "Custom Pen Boxes", slug: "custom-pen-boxes" }
    ]
  },
  {
    name: "Christmas Boxes",
    slug: "christmas-boxes",
    description: "Festive Boxes for Joyful Holiday Gifts",
    image: "Box-4_lztqi7",
    subcategoriesCount: 12,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Christmas Boxes with Lids", slug: "christmas-boxes-with-lids" },
      { name: "Christmas Cupcake Boxes", slug: "christmas-cupcake-boxes" },
      { name: "Christmas Candy Boxes", slug: "christmas-candy-boxes" },
      { name: "Christmas Gift Boxes", slug: "christmas-gift-boxes" },
      { name: "Christmas Eve Boxes", slug: "christmas-eve-boxes" },
      { name: "Christmas Present Boxes", slug: "christmas-present-boxes" },
      { name: "Christmas Cookie Boxes", slug: "christmas-cookie-boxes" },
      { name: "Christmas Treat Boxes", slug: "christmas-treat-boxes" },
      { name: "Christmas Paper Bags", slug: "christmas-paper-bags" },
      { name: "Christmas Gift Bags", slug: "christmas-gift-bags" },
      { name: "Christmas Favor Boxes", slug: "christmas-favor-boxes" },
      { name: "Christmas Mailer Boxes", slug: "christmas-mailer-boxes" }
    ]
  },
  {
    name: "Chocolate Boxes",
    slug: "chocolate-boxes",
    description: "Elegant Packaging for Gourmet Chocolates",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 9,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Chocolate Packaging", slug: "chocolate-packaging" },
      { name: "Small Chocolate Boxes", slug: "small-chocolate-boxes" },
      { name: "Chocolate Milk Boxes", slug: "chocolate-milk-boxes" },
      { name: "Chocolate Candy Boxes", slug: "chocolate-candy-boxes" },
      { name: "Luxury Chocolate Boxes", slug: "luxury-chocolate-boxes" },
      { name: "Chocolate Bomb Boxes", slug: "chocolate-bomb-boxes" },
      { name: "Chocolate Gift Boxes", slug: "chocolate-gift-boxes" },
      { name: "Christmas Chocolate Boxes", slug: "christmas-chocolate-boxes" },
      { name: "Chocolate Bar Boxes", slug: "chocolate-bar-boxes" }
    ]
  },
  {
    name: "Cereal Boxes",
    slug: "cereal-boxes",
    description: "Vibrant Boxes for Breakfast Cereal Brands",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 12,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Cereal Boxes Wholesale", slug: "cereal-boxes-wholesale" },
      { name: "Mini Cereal Boxes", slug: "mini-cereal-boxes" },
      { name: "Cardboard Cereal Boxes", slug: "cardboard-cereal-boxes" },
      { name: "Corn Flakes Boxes", slug: "corn-flakes-boxes" },
      { name: "Unique Cereal Boxes", slug: "unique-cereal-boxes" },
      { name: "Breakfast Cereal Boxes", slug: "breakfast-cereal-boxes" },
      { name: "Colorful Cereal Boxes", slug: "colorful-cereal-boxes" },
      { name: "Vintage Cereal Boxes", slug: "vintage-cereal-boxes" },
      { name: "Retro Cereal Boxes", slug: "retro-cereal-boxes" },
      { name: "90s Cereal Boxes", slug: "90s-cereal-boxes" },
      { name: "80s Cereal Boxes", slug: "80s-cereal-boxes" },
      { name: "Funny Cereal Boxes", slug: "funny-cereal-boxes" }
    ]
  },
  {
    name: "Pre Roll Boxes",
    slug: "pre-roll-boxes-industry",
    description: "Secure Packaging for Pre-Roll Products",
    image: "shipping-box_jyysru",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Cannabis Pre Roll Packaging", slug: "cannabis-pre-roll-packaging" },
      { name: "Pre Roll Display Boxes", slug: "pre-roll-display-boxes" },
      { name: "Pre Roll Packaging", slug: "pre-roll-packaging" },
      { name: "Custom Delta 8 Boxes", slug: "custom-delta-8-boxes" },
      { name: "Pre Roll Packaging Labels", slug: "pre-roll-packaging-labels" },
      { name: "Luxury Pre Roll Packaging", slug: "luxury-pre-roll-packaging" }
    ]
  },
  {
    name: "Pizza Boxes",
    slug: "pizza-boxes",
    description: "Sturdy Boxes for Hot and Fresh Pizza",
    image: "Box-4_lztqi7",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "White Pizza Boxes", slug: "white-pizza-boxes" },
      { name: "Pizza Slice Boxes", slug: "pizza-slice-boxes" },
      { name: "Round Pizza Boxes", slug: "round-pizza-boxes" },
      { name: "Rectangle Pizza Boxes", slug: "rectangle-pizza-boxes" },
      { name: "Flatbread Pizza Boxes", slug: "flatbread-pizza-boxes" },
      { name: "16 Inch Pizza Boxes", slug: "16-inch-pizza-boxes" },
      { name: "14 Inch Pizza Boxes", slug: "14-inch-pizza-boxes" },
      { name: "Blank Pizza Boxes", slug: "blank-pizza-boxes" }
    ]
  }
];

export default productByIndustryData;
