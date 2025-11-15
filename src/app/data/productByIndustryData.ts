export interface IndustrySubCategory {
  name: string;
  slug: string;
  description?: string;
  modelPath?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
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
      { 
        name: "Custom Donut Boxes", 
        slug: "custom-donut-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Donut-Boxes-1_dmj5t9", "Custom-Donut-Boxes-2_u8p8yt", "Custom-Donut-Boxes-3_xbgzfn"]
      },
      { 
        name: "Custom Pastry Boxes", 
        slug: "custom-pastry-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Pastery-Boxes-1_rvriqm", "Custom-Pastery-Boxes-2_iypxuu", "Custom-Pastery-Boxes-1_rvriqm"]
      },
      { 
        name: "Custom Cake Boxes", 
        slug: "custom-cake-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Cake-Boxes-1_keqqir", "Custom-Cake-Boxes-2_ft4dsr", "Custom-Cake-Boxes-2_ft4dsr"]
      },
      { 
        name: "Custom Cookie Boxes", 
        slug: "custom-cookie-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Cookies-Boxes-1_cdfbrr", "Custom-Cookies-Boxes-1_cdfbrr", "Custom-Cookies-Boxes-2_wdiict"]
      },
      { 
        name: "Custom Gable Boxes", 
        slug: "custom-gable-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Gable-Boxes-1_qxlget", "Custom-Gable-Boxes-2_h4ragc", "Custom-Gable-Boxes-3_tbc0f3"]
      },
      { 
        name: "Custom Candy Boxes", 
        slug: "custom-candy-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Candy-Boxes-1_ghf8o8", "Custom-Candy-Boxes-2_umzwww", "Custom-Candy-Boxes-3_abnfuf"]
      },
      { 
        name: "Mini Cupcake Boxes", 
        slug: "mini-cupcake-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Mini-Cupcake-Boxes-1_gk2oxp", "Mini-Cupcake-Boxes-1_gk2oxp", "Mini-Cupcake-Boxes-2_b7tsvq"]
      },
      { 
        name: "Pink Donut Boxes", 
        slug: "pink-donut-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Pink-Donut-Boxes-1_marj9f", "Pink-Donut-Boxes-2_ltiufw", "Pink-Donut-Boxes-3_vo4cpt"]
      },
      { 
        name: "Window Bakery Boxes", 
        slug: "window-bakery-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Window-Bakery-Boxes-1_rbhg0r", "Window-Bakery-Boxes-2_xx5swh", "Window-Bakery-Boxes-3_gazrye"]
      },
      { 
        name: "Bakery Gift Boxes", 
        slug: "bakery-gift-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Bakery-Gift-Boxes-1_aorpnn", "Bakery-Gift-Boxes-2_t3kwx8", "Bakery-Gift-Boxes-3_enypsh"]
      },
      { 
        name: "Custom Cupcake Boxes", 
        slug: "custom-cupcake-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Cupcake-Boxes-1_ak1dkc", "Custom-Cupcake-Boxes-2_lhirzg", "Custom-Cupcake-Boxes-3_o0xhpd"]
      },
      { 
        name: "Small Cake Boxes", 
        slug: "small-cake-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Small-Cake-Boxes-1_th13oz", "Small-Cake-Boxes-2_pzmikh", "Small-Cake-Boxes-3_dampkl"]
      },
      { 
        name: "Custom Truffle Boxes", 
        slug: "custom-truffle-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Custom-Truffle-Boxes-1_imolco", "Custom-Truffle-Boxes-2_dznjjn", "Custom-Truffle-Boxes-3_omyri7"]
      },
      { 
        name: "Sweet Gift Boxes", 
        slug: "sweet-gift-boxes", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Sweet-Gift-Boxes-1_hc5cct", "Sweet-Gift-Boxes-2_mctoex", "Sweet-Gift-Boxes-3_tfmxok"]
      }
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

  // Apparel Boxes
  {
    name: "Apparel Boxes",
    slug: "apparel-boxes",
    description: "Premium Boxes for Fashion and Clothing",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { 
        name: "Cufflink Boxes", 
        slug: "cufflink-boxes",
        images: ["Cufflink-Boxes-1_rz2wcf", "Cufflink-Boxes-2_f55tgq", "Cufflink-Boxes-3_nppvwy"]
      },
      { 
        name: "Tie Boxes", 
        slug: "tie-boxes",
        images: ["Tie-Boxes-1_t8zvuk", "Tie-Boxes-2_j26x06", "Tie-Boxes-3_zmp4vi"]
      },
      { 
        name: "Belt Boxes", 
        slug: "belt-boxes",
        images: ["Belt-Boxes-1_px70gk", "Belt-Boxes-2_wirvg5", "Belt-Boxes-3_aj08pm"]
      },
      { 
        name: "Clothing Boxes", 
        slug: "clothing-boxes",
        images: ["Clothing-Boxes-1_ygtjdo", "Clothing-Boxes-2_gytu8n", "Clothing-Boxes-3_pvbpno"]
      },
      { 
        name: "Lingerie Boxes", 
        slug: "lingerie-boxes",
        images: ["Lingerie-Boxes-1_bq2nfw", "Lingerie-Boxes-2_jsjglj", "Lingerie-Boxes-3_syday7"]
      },
      { 
        name: "Underwear Boxes", 
        slug: "underwear-boxes",
        images: ["Underwear-Boxes-1_ou16f4", "Underwear-Boxes-2_qfi8ft", "Underwear-Boxes-3_pyzny2"]
      },
      { 
        name: "T-Shirt Boxes", 
        slug: "tshirt-boxes",
        images: ["T-Shirt-Boxes-1_lqopuq", "T-Shirt-Boxes-2_zwzm3i", "T-Shirt-Boxes-3_th84gq"]
      },
      { 
        name: "Socks Boxes", 
        slug: "socks-boxes",
        images: ["Socks-Boxes-1_lbh2hf", "Socks-Boxes-2_zpmm81", "Socks-Boxes-3_oh0wgo"]
      }
    ]
  },

  // Sports Boxes
  {
    name: "Sports Boxes",
    slug: "sports-boxes",
    description: "Durable Packaging for Active Lifestyle Gear",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { 
        name: "Cardboard Shoe Boxes", 
        slug: "cardboard-shoe-boxes",
        images: ["Cardboard-Shoe-Boxes-1_bmgptg", "Cardboard-Shoe-Boxes-2_yfsmt4", "Cardboard-Shoe-Boxes-3_bxecvk"]
      },
      { 
        name: "Shoe Shipping Boxes", 
        slug: "shoe-shipping-boxes",
        images: ["Shoe-Shipping-Boxes-1_fltdr4", "Shoe-Shipping-Boxes-2_fqqwa0", "Shoe-Shipping-Boxes-3_w1jmxg"]
      },
      { 
        name: "Custom Shoe Boxes", 
        slug: "custom-shoe-boxes",
        images: ["Custom-Shoe-Boxes-1_ujniht", "Custom-Shoe-Boxes-2_s1rzhj", "Custom-Shoe-Boxes-3_bpnxxb"]
      },
      { 
        name: "Shoe Boxes with Lid", 
        slug: "shoe-boxes-with-lid",
        images: ["Shoe-Boxes-With-Lid-1_fxn9tx", "Shoe-Boxes-With-Lid-2_fk3jt1", "Shoe-Boxes-With-Lid-3_upegeh"]
      },
      { 
        name: "Golf Ball Boxes", 
        slug: "golf-ball-boxes",
        images: ["Golf-Ball-Boxes-1_kaxgvt", "Golf-Ball-Boxes-2_hyeiff", "Golf-Ball-Boxes-3_y5wiqn"]
      },
      { 
        name: "Football Boxes", 
        slug: "football-boxes",
        images: ["Football-Boxes-1_ehlokr", "Football-Boxes-2_gqln0i", "Football-Boxes-3_wmzpfc"]
      }
    ]
  },

  // Cigarette Boxes
  {
    name: "Cigarette Boxes",
    slug: "cigarette-boxes-industry",
    description: "Sleek Packaging for Tobacco Product Brands",
    image: "shipping-box_jyysru",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { 
        name: "Paper Cigarette Boxes", 
        slug: "paper-cigarette-boxes",
        images: ["Paper-Cigarette-Boxes-1_wtiu7e", "Paper-Cigarette-Boxes-2_rnnux2", "Paper-Cigarette-Boxes-3_pa6wa9"]
      },
      { 
        name: "Custom Cigarette Boxes", 
        slug: "custom-cigarette-boxes",
        images: ["Custom-Cigarette-Boxes-1_f0abbv", "Custom-Cigarette-Boxes-2_r0ywev", "Custom-Cigarette-Boxes-3_ftlaow"]
      },
      { 
        name: "Empty Cigarette Boxes", 
        slug: "empty-cigarette-boxes",
        images: ["Empty-Cigarette-Boxes-1_t4kzi9", "Empty-Cigarette-Boxes-2_vszvgt", "Empty-Cigarette-Boxes-2_vszvgt"]
      },
      { 
        name: "Cardboard Cigarette Boxes", 
        slug: "cardboard-cigarette-boxes",
        images: ["Cardboard-Cigarette-Boxes-1_b7xr8l", "Cardboard-Cigarette-Boxes-2_hfnzvm", "Cardboard-Cigarette-Boxes-3_vryuig"]
      },
      { 
        name: "Blank Cigarette Boxes", 
        slug: "blank-cigarette-boxes",
        images: ["Blank-Cigarette-Boxes-1_evdnrk", "Blank-Cigarette-Boxes-2_zsjo5n", "Blank-Cigarette-Boxes-3_zekskp"]
      },
      { 
        name: "Flip Top Cigarette Boxes", 
        slug: "flip-top-cigarette-boxes",
        images: ["Flip-Top-Cigarette-Boxes-1_se8s4v", "Flip-Top-Cigarette-Boxes-2_k632a9", "Flip-Top-Cigarette-Boxes-3_v8cy7g"]
      }
    ]
  },

  // CBD Boxes
  {
    name: "CBD Boxes",
    slug: "cbd-boxes",
    description: "Eco Boxes for CBD and Hemp Products",
    image: "Box-4_lztqi7",
    subcategoriesCount: 7,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { 
        name: "CBD Gift Boxes", 
        slug: "cbd-gift-boxes",
        images: ["CBD-Gift-Boxes-1_k9295s", "CBD-Gift-Boxes-2_qi65ks", "CBD-Gift-Boxes-3_tcvuva"]
      },
      { 
        name: "CBD Gummies Boxes", 
        slug: "cbd-gummies-boxes",
        images: ["CBD-Gummies-Boxes-1_wd25va", "CBD-Gummies-Boxes-2_o1bk7c", "CBD-Gummies-Boxes-3_f6coos"]
      },
      { 
        name: "Custom Cannabis Boxes", 
        slug: "custom-cannabis-boxes",
        images: ["Cusotm-Cannabis-Boxes-1_idflye", "Cusotm-Cannabis-Boxes-2_go3nc3", "Cusotm-Cannabis-Boxes-3_qpaksl"]
      },
      { 
        name: "CBD Oil Boxes", 
        slug: "cbd-oil-boxes",
        images: ["CBD-Oil-Boxes-1_qgrbrh", "CBD-Oil-Boxes-2_asnbzp", "CBD-Oil-Boxes-3_o9hvx6"]
      },
      { 
        name: "Hemp Oil Boxes", 
        slug: "hemp-oil-boxes",
        images: ["Hemp-Oil-Boxes-1_q7mzbh", "Hemp-Oil-Boxes-2_qwlw6w", "Hemp-Oil-Boxes-3_nzq3jo"]
      },
      { 
        name: "Pre Roll Boxes", 
        slug: "pre-roll-boxes",
        images: ["Pre-Roll-Boxes-1_fvwba7", "Pre-Roll-Boxes-2_gevxu5", "Pre-Roll-Boxes-3_akskaw"]
      },
      { 
        name: "CBD Tincture Boxes", 
        slug: "cbd-tincture-boxes",
        images: ["CBD-Tincture-Boxes-1_daue3r", "CBD-Tincture-Boxes-2_xcrq3q", "CBD-Tincture-Boxes-3_esviaz"]
      }
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
