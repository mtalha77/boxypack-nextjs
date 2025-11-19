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
        images: [
          "Custom-Donut-Boxes-1_dmj5t9",
          "Custom-Donut-Boxes-2_u8p8yt",
          "Custom-Donut-Boxes-3_xbgzfn",
        ],
      },
      {
        name: "Custom Pastry Boxes",
        slug: "custom-pastry-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Pastery-Boxes-1_rvriqm",
          "Custom-Pastery-Boxes-2_iypxuu",
          "Custom-Pastery-Boxes-1_rvriqm",
        ],
      },
      {
        name: "Custom Cake Boxes",
        slug: "custom-cake-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Cake-Boxes-1_keqqir",
          "Custom-Cake-Boxes-2_ft4dsr",
          "Custom-Cake-Boxes-2_ft4dsr",
        ],
      },
      {
        name: "Custom Cookie Boxes",
        slug: "custom-cookie-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Cookies-Boxes-1_cdfbrr",
          "Custom-Cookies-Boxes-1_cdfbrr",
          "Custom-Cookies-Boxes-2_wdiict",
        ],
      },
      {
        name: "Custom Gable Boxes",
        slug: "custom-gable-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Gable-Boxes-1_qxlget",
          "Custom-Gable-Boxes-2_h4ragc",
          "Custom-Gable-Boxes-3_tbc0f3",
        ],
      },
      {
        name: "Custom Candy Boxes",
        slug: "custom-candy-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Candy-Boxes-1_ghf8o8",
          "Custom-Candy-Boxes-2_umzwww",
          "Custom-Candy-Boxes-3_abnfuf",
        ],
      },
      {
        name: "Mini Cupcake Boxes",
        slug: "mini-cupcake-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Mini-Cupcake-Boxes-1_gk2oxp",
          "Mini-Cupcake-Boxes-1_gk2oxp",
          "Mini-Cupcake-Boxes-2_b7tsvq",
        ],
      },
      {
        name: "Pink Donut Boxes",
        slug: "pink-donut-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Pink-Donut-Boxes-1_marj9f",
          "Pink-Donut-Boxes-2_ltiufw",
          "Pink-Donut-Boxes-3_vo4cpt",
        ],
      },
      {
        name: "Window Bakery Boxes",
        slug: "window-bakery-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Window-Bakery-Boxes-1_rbhg0r",
          "Window-Bakery-Boxes-2_xx5swh",
          "Window-Bakery-Boxes-3_gazrye",
        ],
      },
      {
        name: "Bakery Gift Boxes",
        slug: "bakery-gift-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Bakery-Gift-Boxes-1_aorpnn",
          "Bakery-Gift-Boxes-2_t3kwx8",
          "Bakery-Gift-Boxes-3_enypsh",
        ],
      },
      {
        name: "Custom Cupcake Boxes",
        slug: "custom-cupcake-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Cupcake-Boxes-1_ak1dkc",
          "Custom-Cupcake-Boxes-2_lhirzg",
          "Custom-Cupcake-Boxes-3_o0xhpd",
        ],
      },
      {
        name: "Small Cake Boxes",
        slug: "small-cake-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Small-Cake-Boxes-1_th13oz",
          "Small-Cake-Boxes-2_pzmikh",
          "Small-Cake-Boxes-3_dampkl",
        ],
      },
      {
        name: "Custom Truffle Boxes",
        slug: "custom-truffle-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Truffle-Boxes-1_imolco",
          "Custom-Truffle-Boxes-2_dznjjn",
          "Custom-Truffle-Boxes-3_omyri7",
        ],
      },
      {
        name: "Sweet Gift Boxes",
        slug: "sweet-gift-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Sweet-Gift-Boxes-1_hc5cct",
          "Sweet-Gift-Boxes-2_mctoex",
          "Sweet-Gift-Boxes-3_tfmxok",
        ],
      },
    ],
  },
  {
    name: "Cosmetic Boxes",
    slug: "cosmetic-boxes",
    description: "Stylish Packaging for Beauty Products",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 20,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cosmetic Display Boxes",
        slug: "cosmetic-display-boxes",
        images: [
          "Display-Cosmetic-Boxes-1_qorgwe",
          "Display-Cosmetic-Boxes-2_rvpoth",
          "Display-Cosmetic-Boxes-3_ohh9io",
        ],
      },
      {
        name: "Custom Perfume Boxes",
        slug: "custom-perfume-boxes",
        images: [
          "Custom-Perfume-Boxes-1_jdpqpt",
          "Custom-Perfume-Boxes-2_wkxcqo",
          "Custom-Perfume-Boxes-3_cwxpsh",
        ],
      },
      {
        name: "Custom Makeup Boxes",
        slug: "custom-makeup-boxes",
        images: [
          "Custom-Makeup-Boxes-1_dxsdrp",
          "Custom-Makeup-Boxes-2_vnsndw",
          "Custom-Makeup-Boxes-3_kz674s",
        ],
      },
      {
        name: "Hair Extension Boxes",
        slug: "hair-extension-boxes",
        images: [
          "Hair-Extension-Boxes-1_cpgbkn",
          "Hair-Extension-Boxes-2_qtklom",
          "Hair-Extension-Boxes-3_dmjr7z",
        ],
      },
      {
        name: "Custom Lipstick Boxes",
        slug: "custom-lipstick-boxes",
        images: [
          "Custom-Lipstick-Boxes-1_pusut1",
          "Custom-Lipstick-Boxes-2_gx8b9b",
          "Custom-Lipstick-Boxes-3_cvybzj",
        ],
      },
      {
        name: "Custom Lip Gloss Boxes",
        slug: "custom-lip-gloss-boxes",
        images: [
          "Custom-LipGloss-Boxes-1_haojcb",
          "Custom-LipGloss-Boxes-2_bj7uha",
          "Custom-LipGloss-Boxes-3_mvchgu",
        ],
      },
      {
        name: "Custom Eye Shadow Boxes",
        slug: "custom-eye-shadow-boxes",
        images: [
          "Custom-Eye-Shadow-Boxes-1_zktyid",
          "Custom-Eye-Shadow-Boxes-2_ohc5hq",
          "Custom-Eye-Shadow-Boxes-3_olee8e",
        ],
      },
      {
        name: "Custom Cream Boxes",
        slug: "custom-cream-boxes",
        images: [
          "Custom-Cream-Boxes-1_mugaz9",
          "Custom-Cream-Boxes-2_ogkq65",
          "Custom-Cream-Boxes-3_ilprax",
        ],
      },
      {
        name: "Custom Mascara Boxes",
        slug: "custom-mascara-boxes",
        images: [
          "Custom-Mascara-Boxes-1_z6ff9f",
          "Custom-Mascara-Boxes-2_qm5m9u",
          "Custom-Mascara-Boxes-3_iefs6d",
        ],
      },
      {
        name: "Custom Nail Polish Boxes",
        slug: "custom-nail-polish-boxes",
        images: [
          "Custom-Nail-Polish-Boxes-1_mzi5dl",
          "Custom-Nail-Polish-Boxes-2_k8jobv",
          "Custom-Nail-Polish-Boxes-3_o7ustx",
        ],
      },
      {
        name: "Custom Lip Balm Boxes",
        slug: "custom-lip-balm-boxes",
        images: [
          "Custom-Lip-Balm-Boxes-1_f7srpq",
          "Custom-Lip-Balm-Boxes-2_j2gd6r",
          "Custom-Lip-Balm-Boxes-3_sdo9bz",
        ],
      },
      {
        name: "Custom Eyeliner Boxes",
        slug: "custom-eyeliner-boxes",
        images: [
          "Custom-Eyeliner-Boxes-1_mtbd9m",
          "Custom-Eyeliner-Boxes-2_klvdjv",
          "Custom-Eyeliner-Boxes-3_w48dem",
        ],
      },
      {
        name: "Foundation Boxes",
        slug: "foundation-boxes",
        images: [
          "Foundation-Boxes-1_tdnab3",
          "Foundation-Boxes-2_zigtnm",
          "Foundation-Boxes-3_jn8zl7",
        ],
      },
      {
        name: "Lotion Boxes",
        slug: "lotion-boxes",
        images: [
          "Lotion-Boxes-1_kalp8h",
          "Lotion-Boxes-2_f6gjrs",
          "Lotion-Boxes-3_ozpm6y",
        ],
      },
      {
        name: "Lip Balm Display Boxes",
        slug: "lip-balm-display-boxes",
        images: [
          "Lip-Balm-Boxes-1_amsrpr",
          "Lip-Balm-Boxes-2_qtskj2",
          "Lip-Balm-Boxes-3_eqoimi",
        ],
      },
      {
        name: "Eye Lash Boxes",
        slug: "eye-lash-boxes",
        images: [
          "Eye-Lash-Boxes-1_fsm4f5",
          "Eye-Lash-Boxes-2_qtzltu",
          "Eye-Lash-Boxes-3_c7m1h0",
        ],
      },
      {
        name: "Cosmetic Gift Boxes",
        slug: "cosmetic-gift-boxes",
        images: [
          "Cosmetic-Gift-Boxes-1_kah8ky",
          "Cosmetic-Gift-Boxes-2_zefjya",
          "Cosmetic-Gift-Boxes-3_sdkzsn",
        ],
      },
      {
        name: "Olive Oil Boxes",
        slug: "olive-oil-boxes",
        images: [
          "Olive-Oil-Boxes-1_hxctib",
          "Olive-Oil-Boxes-2_hisfot",
          "Olive-Oil-Boxes-3_yggfkm",
        ],
      },
      {
        name: "Essential Oil Boxes",
        slug: "essential-oil-boxes",
        images: [
          "Essential-Oil-Boxes-1_mjiyz9",
          "Essential-Oil-Boxes-2_i7ciko",
          "Essential-Oil-Boxes-3_oqmkyj",
        ],
      },
      {
        name: "Beard Oil Boxes",
        slug: "beard-oil-boxes",
        images: [
          "Beard-Oil-Boxes-1_skwzue",
          "Beard-Oil-Boxes-2_eprv2j",
          "Beard-Oil-Boxes-3_clyxl8",
        ],
      },
      {
        name: "Serum Boxes",
        slug: "serum-boxes",
        images: [
          "Serum-Boxes-1_nptujg",
          "Serum-Boxes-2_znvuon",
          "Serum-Boxes-3_wv3ppx",
        ],
      },
    ],
  },
  {
    name: "Food Boxes",
    slug: "food-boxes",
    description: "Safe, Smart, and Sustainable Food Packaging",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 11,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Custom French Fry Boxes",
        slug: "custom-french-fry-boxes",
        images: [
          "Custom-French-Fry-Boxes-1_ycl2sa",
          "Custom-French-Fry-Boxes-2_xtfrpb",
          "Custom-French-Fry-Boxes-3_mopz2w",
        ],
      },
      {
        name: "Custom Coffee Boxes",
        slug: "custom-coffee-boxes",
        images: [
          "Custom-Coffee-Boxes-1_ri4q7w",
          "Custom-Coffee-Boxes-2_j45kpg",
          "Custom-Coffee-Boxes-3_ivaq2z",
        ],
      },
      {
        name: "Custom Coffee Cups",
        slug: "custom-coffee-cups",
        images: [
          "Custom-Coffee-Cups-1_ccsv5j",
          "Custom-Coffee-Cups-2_ecmbxm",
          "Custom-Coffee-Cups-3_jhczsd",
        ],
      },
      {
        name: "Custom Coffee Cup Sleeves",
        slug: "custom-coffee-cup-sleeves",
        images: [
          "Custom-Coffee-Cup-Sleeves-1_iezt7i",
          "Custom-Coffee-Cup-Sleeves-2_g2ccap",
          "Custom-Coffee-Cup-Sleeves-3_xyt9dv",
        ],
      },
      {
        name: "Custom Noodle Boxes",
        slug: "custom-noodle-boxes",
        images: [
          "Custom-Noodles-Boxes-1_twipbc",
          "Custom-Noodles-Boxes-2_fyq0jy",
          "Custom-Noodles-Boxes-3_zltsu0",
        ],
      },
      {
        name: "Custom Chinese Takeout Boxes",
        slug: "custom-chinese-takeout-boxes",
        images: [
          "Custom-Chinese-Takeout-Boxes-1_akvurx",
          "Custom-Chinese-Takeout-Boxes-2_jecohn",
          "Custom-Chinese-Takeout-Boxes-3_hihoh1",
        ],
      },
      {
        name: "Custom Popcorn Boxes",
        slug: "custom-popcorn-boxes",
        images: [
          "Custom-Popcorn-Boxes-1_hlnhzn",
          "Custom-Popcorn-Boxes-2_xxmoah",
          "Custom-Popcorn-Boxes-3_ovvxhf",
        ],
      },
      {
        name: "Custom Snack Boxes",
        slug: "custom-snack-boxes",
        images: [
          "Custom-Snack-Boxes-1_u9wvqu",
          "Custom-Snack-Boxes-2_yrgho8",
          "Custom-Snack-Boxes-3_upyjv7",
        ],
      },
      {
        name: "Custom Tea Boxes",
        slug: "custom-tea-boxes",
        images: [
          "Custom-Tea-Boxes-1_oc5gp0",
          "Custom-Tea-Boxes-2_skjsmy",
          "Custom-Tea-Boxes-3_mtn1z9",
        ],
      },
      {
        name: "Custom Burger Boxes",
        slug: "custom-burger-boxes",
        images: [
          "Custom-Burger-Boxes-1_k09ujk",
          "Custom-Burger-Boxes-2_f1dvgy",
          "Custom-Burger-Boxes-3_g1xyky",
        ],
      },
      {
        name: "Sandwich Boxes",
        slug: "sandwich-boxes",
        images: [
          "Custom-Sandwich-Boxes-1_ivk3et",
          "Custom-Sandwich-Boxes-2_dc20ti",
          "Custom-Sandwich-Boxes-3_attl38",
        ],
      },
    ],
  },
  {
    name: "Gift Boxes",
    slug: "gift-boxes",
    description: "Elegant Boxes for Memorable Gifting Moments",
    image: "shipping-box_jyysru",
    subcategoriesCount: 10,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Gift Pillow Boxes",
        slug: "gift-pillow-boxes",
        images: [
          "Pillow-Gift-Boxes-1_xjpfbo",
          "Pillow-Gift-Boxes-2_kb6ord",
          "Pillow-Gift-Boxes-3_qneqc7",
        ],
      },
      {
        name: "Birthday Gift Boxes",
        slug: "birthday-gift-boxes",
        images: [
          "Birthday-Gift-Boxes-1_hzo3ug",
          "Birthday-Gift-Boxes-2_vf5mic",
          "Birthday-Gift-Boxes-3_u9i9qs",
        ],
      },
      {
        name: "Sweet Gift Boxes",
        slug: "sweet-gift-boxes-industry",
        images: [
          "Sweet-Gift-Boxes-1_sykffe",
          "Sweet-Gift-Boxes-2_nb7lsr",
          "Sweet-Gift-Boxes-1_sykffe",
        ],
      },
      {
        name: "Party Favor Boxes",
        slug: "party-favor-boxes",
        images: [
          "Party-Favor-Boxes-1_titesd",
          "Party-Favor-Boxes-2_vyw3s3",
          "Party-Favor-Boxes-3_w91swb",
        ],
      },
      {
        name: "Round Gift Boxes",
        slug: "round-gift-boxes",
        images: [
          "Round-Gift-Boxes-1_z85jd8",
          "Round-Gift-Boxes-2_htaipj",
          "Round-Gift-Boxes-3_bwz3mb",
        ],
      },
      {
        name: "Gift Boxes with Lid",
        slug: "gift-boxes-with-lid",
        images: [
          "Gift-Boxes-With-Lid-1_i1umga",
          "Gift-Boxes-With-Lid-2_nhueho",
          "Gift-Boxes-With-Lid-3_br1nbk",
        ],
      },
      {
        name: "Custom Deluxe Gift Boxes",
        slug: "custom-deluxe-gift-boxes",
        images: [
          "Deluxe-Gift-Boxes-1_yxhvus",
          "Deluxe-Gift-Boxes-2_kypqzv",
          "Deluxe-Gift-Boxes-2_kypqzv",
        ],
      },
      {
        name: "Custom Square Gift Boxes",
        slug: "custom-square-gift-boxes",
        images: [
          "Squre-Gift-Boxes-1_y0tmh9",
          "Squre-Gift-Boxes-2_gmidjx",
          "Squre-Gift-Boxes-3_iwghpl",
        ],
      },
      {
        name: "Small Gift Boxes",
        slug: "small-gift-boxes",
        images: [
          "Small-Gift-Boxes-1_qdsxu7",
          "Small-Gift-Boxes-2_wccej4",
          "Small-Gift-Boxes-2_wccej4",
        ],
      },
      {
        name: "Large Gift Boxes",
        slug: "large-gift-boxes",
        images: [
          "Large-Gift-Boxes-1_l0xevf",
          "Large-Gift-Boxes-2_tlo55s",
          "Large-Gift-Boxes-3_lcwfxa",
        ],
      },
    ],
  },
  {
    name: "Jewelry Boxes",
    slug: "jewelry-boxes",
    description: "Luxury Packaging for Timeless Jewelry Pieces",
    image: "Box-4_lztqi7",
    subcategoriesCount: 15,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Anklet Boxes",
        slug: "anklet-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Anklet-Boxes-1_gyudbb",
          "Anklet-Boxes-2_egsudf",
          "Anklet-Boxes-3_mfldff",
        ],
      },
      {
        name: "Velvet Bags",
        slug: "velvet-bags",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Velvet-Bags-1_ngwiar",
          "Velvet-Bags-2_y3szxp",
          "Velvet-Bags-3_z5pe1a",
        ],
      },
      {
        name: "Kraft Jewelry Boxes",
        slug: "kraft-jewelry-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Jewelry-Boxes-1_h7kkxi",
          "Kraft-Jewelry-Boxes-2_tiddus",
          "Kraft-Jewelry-Boxes-3_xpciol",
        ],
      },
      {
        name: "Cardboard Jewelry Boxes",
        slug: "cardboard-jewelry-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Jewelry-Boxes-1_jabvfd",
          "Cardboard-Jewelry-Boxes-2_ac6eyr",
          "Cardboard-Jewelry-Boxes-3_avdwpf",
        ],
      },
      {
        name: "Jewelry Subscription Box",
        slug: "jewelry-subscription-box",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Jewelry-Subsciption-Boxes-1_sjdvux",
          "Jewelry-Subsciption-Boxes-2_ms7ese",
          "Jewelry-Subsciption-Boxes-3_izpwwg",
        ],
      },
      {
        name: "Pendant Boxes",
        slug: "pendant-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Pendant-Boxes-1_yvedvy",
          "Pendant-Boxes-2_exjntx",
          "Pendant-Boxes-2_exjntx",
        ],
      },
      {
        name: "Bracelet Boxes",
        slug: "bracelet-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Bracelet-Boxes-1_dvpgmf",
          "Bracelet-Boxes-1_dvpgmf",
          "Bracelet-Boxes-2_p8mxcl",
        ],
      },
      {
        name: "Ring Boxes",
        slug: "ring-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Ring-Boxes-1_jtxaap",
          "Ring-Boxes-2_nmkoka",
          "Ring-Boxes-3_gaktn8",
        ],
      },
      {
        name: "Earring Boxes",
        slug: "earring-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Earring-Boxes-1_wukhzh",
          "Earring-Boxes-2_yhn4ze",
          "Earring-Boxes-3_mgvtbu",
        ],
      },
      {
        name: "Luxury Jewelry Packaging",
        slug: "luxury-jewelry-packaging",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Luxury-Jewelry-Box-1_y9dzqv",
          "Luxury-Jewelry-Box-2_md80hw",
          "Luxury-Jewelry-Box-3_xvaroq",
        ],
      },
      {
        name: "Necklace Boxes",
        slug: "necklace-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Necklace-Boxes-1_fuwcyk",
          "Necklace-Boxes-2_j7n2hk",
          "Necklace-Boxes-3_hlrzyc",
        ],
      },
      {
        name: "Small Jewelry Boxes",
        slug: "small-jewelry-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Small-Jewelry-Boxes-1_nmu722",
          "Small-Jewelry-Boxes-2_ndwodv",
          "Small-Jewelry-Boxes-3_lstkmh",
        ],
      },
      {
        name: "Necklace Cards",
        slug: "necklace-cards",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Necklace-Card-1_n2alyw",
          "Necklace-Card-2_tmg4cx",
          "Necklace-Card-3_m5kfm8",
        ],
      },
      {
        name: "Jewelry Bags",
        slug: "jewelry-bags",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Jewelry-Bag-1_g4qqob",
          "Jewelry-Bag-2_xcep4w",
          "Jewelry-Bag-3_bg3ovo",
        ],
      },
    ],
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
      {
        name: "Custom Toy Boxes",
        slug: "custom-toy-boxes",
        images: [
          "Custom-Toy-Boxes-1_wlbneb",
          "Custom-Toy-Boxes-2_wnnm3g",
          "Custom-Toy-Boxes-3_c3xug0",
        ],
      },
      {
        name: "Business Card Boxes",
        slug: "business-card-boxes",
        images: [
          "Business-Card-Boxes-1_nwnmxa",
          "Business-Card-Boxes-2_tlbxzd",
          "Business-Card-Boxes-3_t2gs7x",
        ],
      },
      {
        name: "Custom Dispenser Boxes",
        slug: "custom-dispenser-boxes",
        images: [
          "Custom-Dispenser-Boxes-1_vcqqvo",
          "Custom-Dispenser-Boxes-2_xtdfw1",
          "Custom-Dispenser-Boxes-3_nqdnaf",
        ],
      },
      { name: "Custom Mailer Boxes", slug: "custom-mailer-boxes" },
    ],
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
      {
        name: "Luxury Candle Boxes",
        slug: "luxury-candle-boxes",
        images: [
          "Luxury-Candle-Boxes-1_yeh29e",
          "Luxury-Candle-Boxes-2_a9bqma",
          "Luxury-Candle-Boxes-3_otbfa4",
        ],
      },
      {
        name: "Candle Boxes with Inserts",
        slug: "candle-boxes-with-inserts",
        images: [
          "Candle-Boxes-With-Inserts-1_igb23j",
          "Candle-Boxes-With-Inserts-1_igb23j",
          "Candle-Boxes-With-Inserts-1_igb23j",
        ],
      },
      {
        name: "Candle Shipping Boxes",
        slug: "candle-shipping-boxes",
        images: [
          "Candle-Shipping-Boxes-1_oayuxc",
          "Candle-Shipping-Boxes-2_syrimg",
          "Candle-Shipping-Boxes-1_oayuxc",
        ],
      },
      { name: "Taper Candle Boxes", slug: "taper-candle-boxes" },
      {
        name: "Custom Jar Candle Boxes",
        slug: "custom-jar-candle-boxes",
        images: [
          "Custom-Jar-Candle-Boxes-1_nzcgt9",
          "Custom-Jar-Candle-Boxes-2_qxjgge",
          "Custom-Jar-Candle-Boxes-3_tw6bnk",
        ],
      },
      { name: "Wax Melt Boxes", slug: "wax-melt-boxes" },
      {
        name: "Kraft Candle Boxes",
        slug: "kraft-candle-boxes",
        images: [
          "Kraft-Candle-Boxes-1_vldkvr",
          "Kraft-Candle-Boxes-2_vygqyp",
          "Kraft-Candle-Boxes-3_qpvevc",
        ],
      },
      { name: "Candle Subscription Boxes", slug: "candle-subscription-boxes" },
    ],
  },
  {
    name: "Shipping Boxes",
    slug: "shipping-boxes-industry",
    description: "Strong, Reliable Boxes for Every Delivery",
    image: "shipping-box_jyysru",
    subcategoriesCount: 4,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Black Shipping Boxes",
        slug: "black-shipping-boxes",
        images: [
          "Black-Shipping-Boxes-1_hhg2nb",
          "Black-Shipping-Boxes-2_qxrrap",
          "Black-Shipping-Boxes-3_dbd5uc",
        ],
      },
      {
        name: "Candle Shipping Boxes",
        slug: "candle-shipping-boxes-industry",
        images: [
          "Candle-Shipping-Boxes-1_pjwtlo",
          "Candle-Shipping-Boxes-2_wx99sp",
          "Candle-Shipping-Boxes-1_pjwtlo",
        ],
      },
      {
        name: "Corrugated Shipping Boxes",
        slug: "corrugated-shipping-boxes",
        images: [
          "Corrugated-Shipping-Boxes-1_jgz3o8",
          "Corrugated-Shipping-Boxes-2_nmvrag",
          "Corrugated-Shipping-Boxes-3_psrsyp",
        ],
      },
      {
        name: "Custom Shipping Boxes",
        slug: "custom-shipping-boxes",
        images: [
          "Custom-Shipping-Boxes-1_w7iebg",
          "Custom-Shipping-Boxes-2_bce2uv",
          "Custom-Shipping-Boxes-3_mff8np",
        ],
      },
    ],
  },
  {
    name: "Soap Boxes",
    slug: "soap-boxes-industry",
    description: "Natural Packaging for Handmade Soap Bars",
    image: "Box-4_lztqi7",
    subcategoriesCount: 10,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Soap Sleeve Packaging",
        slug: "soap-sleeve-packaging",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Sleeve-Soap-Packaging-1_iywhz6",
          "Sleeve-Soap-Packaging-2_jn6hdo",
          "Sleeve-Soap-Packaging-3_c46zle",
        ],
      },
      {
        name: "Custom Bath Bomb Boxes",
        slug: "custom-bath-bomb-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Bath-Bomb-Boxes-1_lo9ugk",
          "Custom-Bath-Bomb-Boxes-2_cilnwx",
          "Custom-Bath-Bomb-Boxes-3_ekaikb",
        ],
      },
      {
        name: "Soap Wrapping Paper",
        slug: "soap-wrapping-paper",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Soap-Wrapping-Paper-1_dc69r2",
          "Soap-Wrapping-Paper-2_bxoyeg",
          "Soap-Wrapping-Paper-3_ct3oet",
        ],
      },
      {
        name: "Handmade Soap Boxes",
        slug: "handmade-soap-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Handmade-Soap-Boxes-1_bhxor2",
          "Handmade-Soap-Boxes-2_jzfzmd",
          "Handmade-Soap-Boxes-3_fuoicn",
        ],
      },
      {
        name: "Luxury Soap Packaging",
        slug: "luxury-soap-packaging",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Luxury-Soap-Packaging-1_r8qsmo",
          "Luxury-Soap-Packaging-2_bec6oc",
          "Luxury-Soap-Packaging-3_kzkhna",
        ],
      },
      {
        name: "Square Soap Boxes",
        slug: "square-soap-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Square-Soap-Boxes-1_mourkd",
          "Square-Soap-Boxes-2_epdi7m",
          "Square-Soap-Boxes-3_bpogyr",
        ],
      },
      {
        name: "Soap Bar Box",
        slug: "soap-bar-box",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Soap-Bar-Boxes-1_xk9r2d",
          "Soap-Bar-Boxes-2_qrcsvw",
          "Soap-Bar-Boxes-3_npidpe",
        ],
      },
      {
        name: "Paper Soap Boxes",
        slug: "paper-soap-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Paper-Soap-Boxes-1_uwidvu",
          "Paper-Soap-Boxes-2_eoaop8",
          "Paper-Soap-Boxes-3_eulzjw",
        ],
      },
      {
        name: "Kraft Soap Boxes",
        slug: "kraft-soap-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Soap-Boxes-1_cqobeh",
          "Kraft-Soap-Boxes-2_hnskyc",
          "Kraft-Soap-Boxes-3_xzse7x",
        ],
      },
      {
        name: "Kraft Pillow Soap Boxes",
        slug: "kraft-pillow-soap-boxes-industry",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Pillow-Soap-Boxes-1_kw6rxk",
          "Pillow-Soap-Boxes-2_ojetko",
          "Pillow-Soap-Boxes-3_ofqolm",
        ],
      },
    ],
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
        images: [
          "Cufflink-Boxes-1_rz2wcf",
          "Cufflink-Boxes-2_f55tgq",
          "Cufflink-Boxes-3_nppvwy",
        ],
      },
      {
        name: "Tie Boxes",
        slug: "tie-boxes",
        images: [
          "Tie-Boxes-1_t8zvuk",
          "Tie-Boxes-2_j26x06",
          "Tie-Boxes-3_zmp4vi",
        ],
      },
      {
        name: "Belt Boxes",
        slug: "belt-boxes",
        images: [
          "Belt-Boxes-1_px70gk",
          "Belt-Boxes-2_wirvg5",
          "Belt-Boxes-3_aj08pm",
        ],
      },
      {
        name: "Clothing Boxes",
        slug: "clothing-boxes",
        images: [
          "Clothing-Boxes-1_ygtjdo",
          "Clothing-Boxes-2_gytu8n",
          "Clothing-Boxes-3_pvbpno",
        ],
      },
      {
        name: "Lingerie Boxes",
        slug: "lingerie-boxes",
        images: [
          "Lingerie-Boxes-1_bq2nfw",
          "Lingerie-Boxes-2_jsjglj",
          "Lingerie-Boxes-3_syday7",
        ],
      },
      {
        name: "Underwear Boxes",
        slug: "underwear-boxes",
        images: [
          "Underwear-Boxes-1_ou16f4",
          "Underwear-Boxes-2_qfi8ft",
          "Underwear-Boxes-3_pyzny2",
        ],
      },
      {
        name: "T-Shirt Boxes",
        slug: "tshirt-boxes",
        images: [
          "T-Shirt-Boxes-1_lqopuq",
          "T-Shirt-Boxes-2_zwzm3i",
          "T-Shirt-Boxes-3_th84gq",
        ],
      },
      {
        name: "Socks Boxes",
        slug: "socks-boxes",
        images: [
          "Socks-Boxes-1_lbh2hf",
          "Socks-Boxes-2_zpmm81",
          "Socks-Boxes-3_oh0wgo",
        ],
      },
    ],
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
        images: [
          "Cardboard-Shoe-Boxes-1_bmgptg",
          "Cardboard-Shoe-Boxes-2_yfsmt4",
          "Cardboard-Shoe-Boxes-3_bxecvk",
        ],
      },
      {
        name: "Shoe Shipping Boxes",
        slug: "shoe-shipping-boxes",
        images: [
          "Shoe-Shipping-Boxes-1_fltdr4",
          "Shoe-Shipping-Boxes-2_fqqwa0",
          "Shoe-Shipping-Boxes-3_w1jmxg",
        ],
      },
      {
        name: "Custom Shoe Boxes",
        slug: "custom-shoe-boxes",
        images: [
          "Custom-Shoe-Boxes-1_ujniht",
          "Custom-Shoe-Boxes-2_s1rzhj",
          "Custom-Shoe-Boxes-3_bpnxxb",
        ],
      },
      {
        name: "Shoe Boxes with Lid",
        slug: "shoe-boxes-with-lid",
        images: [
          "Shoe-Boxes-With-Lid-1_fxn9tx",
          "Shoe-Boxes-With-Lid-2_fk3jt1",
          "Shoe-Boxes-With-Lid-3_upegeh",
        ],
      },
      {
        name: "Golf Ball Boxes",
        slug: "golf-ball-boxes",
        images: [
          "Golf-Ball-Boxes-1_kaxgvt",
          "Golf-Ball-Boxes-2_hyeiff",
          "Golf-Ball-Boxes-3_y5wiqn",
        ],
      },
      {
        name: "Football Boxes",
        slug: "football-boxes",
        images: [
          "Football-Boxes-1_ehlokr",
          "Football-Boxes-2_gqln0i",
          "Football-Boxes-3_wmzpfc",
        ],
      },
    ],
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
        images: [
          "Paper-Cigarette-Boxes-1_wtiu7e",
          "Paper-Cigarette-Boxes-2_rnnux2",
          "Paper-Cigarette-Boxes-3_pa6wa9",
        ],
      },
      {
        name: "Custom Cigarette Boxes",
        slug: "custom-cigarette-boxes",
        images: [
          "Custom-Cigarette-Boxes-1_f0abbv",
          "Custom-Cigarette-Boxes-2_r0ywev",
          "Custom-Cigarette-Boxes-3_ftlaow",
        ],
      },
      {
        name: "Empty Cigarette Boxes",
        slug: "empty-cigarette-boxes",
        images: [
          "Empty-Cigarette-Boxes-1_t4kzi9",
          "Empty-Cigarette-Boxes-2_vszvgt",
          "Empty-Cigarette-Boxes-2_vszvgt",
        ],
      },
      {
        name: "Cardboard Cigarette Boxes",
        slug: "cardboard-cigarette-boxes",
        images: [
          "Cardboard-Cigarette-Boxes-1_b7xr8l",
          "Cardboard-Cigarette-Boxes-2_hfnzvm",
          "Cardboard-Cigarette-Boxes-3_vryuig",
        ],
      },
      {
        name: "Blank Cigarette Boxes",
        slug: "blank-cigarette-boxes",
        images: [
          "Blank-Cigarette-Boxes-1_evdnrk",
          "Blank-Cigarette-Boxes-2_zsjo5n",
          "Blank-Cigarette-Boxes-3_zekskp",
        ],
      },
      {
        name: "Flip Top Cigarette Boxes",
        slug: "flip-top-cigarette-boxes",
        images: [
          "Flip-Top-Cigarette-Boxes-1_se8s4v",
          "Flip-Top-Cigarette-Boxes-2_k632a9",
          "Flip-Top-Cigarette-Boxes-3_v8cy7g",
        ],
      },
    ],
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
        images: [
          "CBD-Gift-Boxes-1_k9295s",
          "CBD-Gift-Boxes-2_qi65ks",
          "CBD-Gift-Boxes-3_tcvuva",
        ],
      },
      {
        name: "CBD Gummies Boxes",
        slug: "cbd-gummies-boxes",
        images: [
          "CBD-Gummies-Boxes-1_wd25va",
          "CBD-Gummies-Boxes-2_o1bk7c",
          "CBD-Gummies-Boxes-3_f6coos",
        ],
      },
      {
        name: "Custom Cannabis Boxes",
        slug: "custom-cannabis-boxes",
        images: [
          "Cusotm-Cannabis-Boxes-1_idflye",
          "Cusotm-Cannabis-Boxes-2_go3nc3",
          "Cusotm-Cannabis-Boxes-3_qpaksl",
        ],
      },
      {
        name: "CBD Oil Boxes",
        slug: "cbd-oil-boxes",
        images: [
          "CBD-Oil-Boxes-1_qgrbrh",
          "CBD-Oil-Boxes-2_asnbzp",
          "CBD-Oil-Boxes-3_o9hvx6",
        ],
      },
      {
        name: "Hemp Oil Boxes",
        slug: "hemp-oil-boxes",
        images: [
          "Hemp-Oil-Boxes-1_q7mzbh",
          "Hemp-Oil-Boxes-2_qwlw6w",
          "Hemp-Oil-Boxes-3_nzq3jo",
        ],
      },
      {
        name: "Pre Roll Boxes",
        slug: "pre-roll-boxes",
        images: [
          "Pre-Roll-Boxes-1_fvwba7",
          "Pre-Roll-Boxes-2_gevxu5",
          "Pre-Roll-Boxes-3_akskaw",
        ],
      },
      {
        name: "CBD Tincture Boxes",
        slug: "cbd-tincture-boxes",
        images: [
          "CBD-Tincture-Boxes-1_daue3r",
          "CBD-Tincture-Boxes-2_xcrq3q",
          "CBD-Tincture-Boxes-3_esviaz",
        ],
      },
    ],
  },
  {
    name: "Vape Boxes",
    slug: "vape-boxes",
    description: "Custom Vape Packaging for Modern Brands",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 5,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Vape Boxes",
        slug: "vape-boxes",
        images: [
          "Vape-Boxes-1_ns2pdn",
          "Vape-Boxes-2_npdki3",
          "Vape-Boxes-3_cbyg2e",
        ],
      },
      {
        name: "Empty Vape Cartridge Packaging",
        slug: "empty-vape-cartridge-packaging",
        images: [
          "Empty-Vape-Cartridge-Packaging-1_ogbesm",
          "Empty-Vape-Cartridge-Packaging-2_g3jia9",
          "Empty-Vape-Cartridge-Packaging-3_swilm9",
        ],
      },
      { name: "Vape Cartridge Packaging", slug: "vape-cartridge-packaging" },
      {
        name: "Custom Vape Boxes",
        slug: "custom-vape-boxes",
        images: [
          "Custom-Vape-Boxes-1_lolxjr",
          "Custom-Vape-Boxes-2_ya2agr",
          "Custom-Vape-Boxes-3_kotist",
        ],
      },
      {
        name: "Disposable Vape Packaging",
        slug: "disposable-vape-packaging",
        images: [
          "Disposable-Vape-Packaging-1_ahukzb",
          "Disposable-Vape-Packaging-2_tkdwuo",
          "Disposable-Vape-Packaging-3_jkkmh6",
        ],
      },
    ],
  },
  {
    name: "E-liquid Boxes",
    slug: "e-liquid-boxes",
    description: "Trendy Boxes for E-Juice Collections",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 3,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "E-liquid Bottle Boxes",
        slug: "e-liquid-bottle-boxes",
        images: [
          "E-Liquid-Bottle-Boxes-1_ynwnxe",
          "E-Liquid-Bottle-Boxes-2_qjrkus",
          "E-Liquid-Bottle-Boxes-3_k0ezfn",
        ],
      },
      {
        name: "E-liquid Display Boxes",
        slug: "e-liquid-display-boxes",
        images: [
          "E-Liquid-Display-Boxes-1_oiahgl",
          "E-Liquid-Display-Boxes-2_ilrhu8",
          "E-Liquid-Display-Boxes-3_qg2ov0",
        ],
      },
      {
        name: "E-liquid Gift Boxes",
        slug: "e-liquid-gift-boxes",
        images: [
          "E-Liquid-Gift-Boxes-1_ld51tu",
          "E-Liquid-Gift-Boxes-2_wlecre",
          "E-Liquid-Gift-Boxes-3_aoagkj",
        ],
      },
    ],
  },
  {
    name: "Stationery Boxes",
    slug: "stationery-boxes",
    description: "Creative Packaging for Office Essentials",
    image: "shipping-box_jyysru",
    subcategoriesCount: 7,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Custom Pencil Boxes",
        slug: "custom-pencil-boxes",
        images: [
          "Custom_Pencil_Boxes_1_a31je0",
          "Custom_Pencil_Boxes_2_e5ebry",
          "Custom_Pencil_Boxes_3_pimhms",
        ],
      },
      {
        name: "Cardboard Pen Boxes",
        slug: "cardboard-pen-boxes",
        images: [
          "Cardboard_Pen_Boxes_1_xuyc43",
          "Cardboard_Pen_Boxes_2_jgc5zy",
          "Cardboard_Pen_Boxes_2_jgc5zy",
        ],
      },
      {
        name: "Cardboard Pencil Boxes",
        slug: "cardboard-pencil-boxes",
        images: [
          "Cardboard_Pencil_Boxes_1_lud7ix",
          "Cardboard_Pencil_Boxes_2_v8bn19",
          "Cardboard_Pencil_Boxes_3_n8qath",
        ],
      },
      {
        name: "Custom Book Boxes",
        slug: "custom-book-boxes",
        images: [
          "Custom_Book_Boxes_1_xwftmw",
          "Custom_Book_Boxes_2_haeezk",
          "Custom_Book_Boxes_3_yagq4d",
        ],
      },
      {
        name: "Custom Presentation Folders",
        slug: "custom-presentation-folders",
        images: [
          "Custom_Presentation_Folders_1_miqqki",
          "Custom_Presentation_Folders_2_k3auuo",
          "Custom_Presentation_Folders_3_s4g6xe",
        ],
      },
      {
        name: "Pen Gift Boxes",
        slug: "pen-gift-boxes",
        images: [
          "Pen_Gift_Boxes1_cgtogq",
          "Pen_Gift_Boxes_2_t5ygyy",
          "Pen_Gift_Boxes_3_qwiztx",
        ],
      },
      {
        name: "Custom Pen Boxes",
        slug: "custom-pen-boxes",
        images: [
          "Custom_Pen_Boxes_1_eabi7j",
          "Custom_Pen_Boxes_2_pfqmnc",
          "Custom_Pen_Boxes_1_eabi7j",
        ],
      },
    ],
  },
  {
    name: "Christmas Boxes",
    slug: "christmas-boxes",
    description: "Festive Boxes for Joyful Holiday Gifts",
    image: "Box-4_lztqi7",
    subcategoriesCount: 12,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Christmas Boxes with Lids",
        slug: "christmas-boxes-with-lids",
        images: [
          "Christmas_Boxes_with_Lids_1_onvhfa",
          "Christmas_Boxes_with_Lids_2_sz6gc0",
          "Christmas_Boxes_with_Lids_3_yzmrko",
        ],
      },
      { name: "Christmas Cupcake Boxes", slug: "christmas-cupcake-boxes" },
      { name: "Christmas Candy Boxes", slug: "christmas-candy-boxes" },
      {
        name: "Christmas Gift Boxes",
        slug: "christmas-gift-boxes",
        images: [
          "Christmas_Gift_Boxes_1_p4c4dz",
          "Christmas_Gift_Boxes_2_ulnzc8",
          "Christmas_Gift_Boxes_3_jtnzim",
        ],
      },
      { name: "Christmas Eve Boxes", slug: "christmas-eve-boxes" },
      {
        name: "Christmas Present Boxes",
        slug: "christmas-present-boxes",
        images: [
          "Christmas_Present_Boxes_1_p6mvbw",
          "Christmas_Present_Boxes_2_bx6mlk",
          "Christmas_Present_Boxes_1_p6mvbw",
        ],
      },
      {
        name: "Christmas Cookie Boxes",
        slug: "christmas-cookie-boxes",
        images: [
          "Christmas_Cookie_Boxes_1_lvdlg2",
          "Christmas_Cookie_Boxes_2_adel7w",
          "Christmas_Cookie_Boxes_1_lvdlg2",
        ],
      },
      {
        name: "Christmas Treat Boxes",
        slug: "christmas-treat-boxes",
        images: [
          "Christmas_Treat_Boxes_1_jnscxi",
          "Christmas_Treat_Boxes_2_s0b0ts",
          "Christmas_Treat_Boxes_3_ii9m9m",
        ],
      },
      {
        name: "Christmas Paper Bags",
        slug: "christmas-paper-bags",
        images: [
          "Christmas_Paper_Bags_1_mb9gjq",
          "Christmas_Paper_Bags_2_cpcahk",
          "Christmas_Paper_Bags_2_cpcahk",
        ],
      },
      {
        name: "Christmas Gift Bags",
        slug: "christmas-gift-bags",
        images: [
          "Christmas_Gift_Bags_1_gthneu",
          "Christmas_Gift_Bags_2_xhfsvm",
          "Christmas_Gift_Bags_2_xhfsvm",
        ],
      },
      {
        name: "Christmas Favor Boxes",
        slug: "christmas-favor-boxes",
        images: [
          "Christmas_Favor_Boxes_1_a5o0ox",
          "Christmas_Favor_Boxes_2_vonyon",
          "Christmas_Favor_Boxes_2_vonyon",
        ],
      },
      {
        name: "Christmas Mailer Boxes",
        slug: "christmas-mailer-boxes",
        images: [
          "Christmas_Mailer_Boxes_1_k7nho6",
          "Christmas_Mailer_Boxes_2_gepk2j",
          "Christmas_Mailer_Boxes_3_hhsjex",
        ],
      },
    ],
  },
  {
    name: "Chocolate Boxes",
    slug: "chocolate-boxes",
    description: "Elegant Packaging for Gourmet Chocolates",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 9,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Chocolate Packaging",
        slug: "chocolate-packaging",
        images: [
          "Chocolate_box_1_yrg5y0",
          "Chocolate_box_2_kfnskd",
          "Chocolate_box_3_z6yolj",
        ],
      },
      {
        name: "Small Chocolate Boxes",
        slug: "small-chocolate-boxes",
        images: [
          "mini_Chocolate_box_1_bfeu9h",
          "mini_Chocolate_box_2_hqstuw",
          "mini_Chocolate_box_1_bfeu9h",
        ],
      },
      {
        name: "Chocolate Milk Boxes",
        slug: "chocolate-milk-boxes",
        images: [
          "Chocolate_milk_box_1_fedk3q",
          "Chocolate_milk_box_2_mdk9ig",
          "Chocolate_milk_box_3_aj4898",
        ],
      },
      {
        name: "Chocolate Candy Boxes",
        slug: "chocolate-candy-boxes",
        images: [
          "Chocolate_candy_box_1_iwrdpu",
          "Chocolate_candy_box_2_un7iaf",
          "Chocolate_candy_box_1_iwrdpu",
        ],
      },
      {
        name: "Luxury Chocolate Boxes",
        slug: "luxury-chocolate-boxes",
        images: [
          "luxury_Chocolate_box_1_ysszvo",
          "luxury_Chocolate_box_2_ut1mcd",
          "luxury_Chocolate_box_1_ysszvo",
        ],
      },
      {
        name: "Chocolate Bomb Boxes",
        slug: "chocolate-bomb-boxes",
        images: [
          "Chocolate_BOmb_box_1_ws3eqt",
          "Chocolate_BOmb_box_2_btpqj8",
          "Chocolate_BOmb_box_2_btpqj8",
        ],
      },
      {
        name: "Chocolate Gift Boxes",
        slug: "chocolate-gift-boxes",
        images: [
          "chocolate_gift_box_dzxvct",
          "chocolate_gift_box_2_wpo8dj",
          "chocolate_gift_box_dzxvct",
        ],
      },
      {
        name: "Christmas Chocolate Boxes",
        slug: "christmas-chocolate-boxes",
        images: [
          "cheristmas_Chocolate_box_1_gqamgk",
          "cheristmas_Chocolate_box_2_kmzssv",
          "cheristmas_Chocolate_box_2_kmzssv",
        ],
      },
      {
        name: "Chocolate Bar Boxes",
        slug: "chocolate-bar-boxes",
        images: [
          "Chocolate_bar_box_1_k4nznm",
          "Chocolate_bar_box_2_qvivss",
          "Chocolate_bar_box_2_qvivss",
        ],
      },
    ],
  },
  {
    name: "Cereal Boxes",
    slug: "cereal-boxes",
    description: "Vibrant Boxes for Breakfast Cereal Brands",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 12,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cereal Boxes Wholesale",
        slug: "cereal-boxes-wholesale",
        images: [
          "cereal_box_1_xqw5si",
          "cereal_box_2_vdyw1h",
          "cereal_box_3_bdi3jq",
        ],
      },
      {
        name: "Mini Cereal Boxes",
        slug: "mini-cereal-boxes",
        images: [
          "mini_cereal_box1_zdgvky",
          "mini_cereal_box2_ajjjux",
          "mini_cereal_box3_iwsqgw",
        ],
      },
      {
        name: "Cardboard Cereal Boxes",
        slug: "cardboard-cereal-boxes",
        images: [
          "Cardboard_cereal_box_1_dnvfxe",
          "Cardboard_cereal_box_2_b8mtju",
          "Cardboard_cereal_box_3_osbidx",
        ],
      },
      { name: "Corn Flakes Boxes", slug: "corn-flakes-boxes" },
      {
        name: "Unique Cereal Boxes",
        slug: "unique-cereal-boxes",
        images: [
          "unique_cereal_box_1_wd3uiv",
          "unique_cereal_box_2_imcnhg",
          "unique_cereal_box_2_imcnhg",
        ],
      },
      { name: "Breakfast Cereal Boxes", slug: "breakfast-cereal-boxes" },
      { name: "Colorful Cereal Boxes", slug: "colorful-cereal-boxes" },
      { name: "Vintage Cereal Boxes", slug: "vintage-cereal-boxes" },
      { name: "Retro Cereal Boxes", slug: "retro-cereal-boxes" },
      { name: "90s Cereal Boxes", slug: "90s-cereal-boxes" },
      { name: "80s Cereal Boxes", slug: "80s-cereal-boxes" },
      { name: "Funny Cereal Boxes", slug: "funny-cereal-boxes" },
    ],
  },
  {
    name: "Pre Roll Boxes",
    slug: "pre-roll-boxes-industry",
    description: "Secure Packaging for Pre-Roll Products",
    image: "shipping-box_jyysru",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cannabis Pre Roll Packaging",
        slug: "cannabis-pre-roll-packaging",
        images: [
          "Cannabis-Pre-Roll-Packaging-1_iwxbqt",
          "Cannabis-Pre-Roll-Packaging-2_vlnqpu",
          "Cannabis_Pre_Roll_Packaging_fzmkfa",
        ],
      },
      {
        name: "Pre Roll Display Boxes",
        slug: "pre-roll-display-boxes",
        images: [
          "Pre-Roll-Display-Boxes-1_qf9sgg",
          "Pre-Roll-Display-Boxes-2_bswtk9",
          "Pre_Roll_Display_Boxes_niltfg",
        ],
      },
      {
        name: "Pre Roll Packaging",
        slug: "pre-roll-packaging",
        images: [
          "Pre_Roll_Packaging_ybpvdj",
          "Pre_Roll_Packaging_ybpvdj",
          "Pre_Roll_Packaging_ybpvdj",
        ],
      },
      {
        name: "Custom Delta 8 Boxes",
        slug: "custom-delta-8-boxes",
        images: [
          "Custom-Delta-8-Boxes-1_iieydw",
          "Custom-Delta-8-Boxes-2_cyzw04",
          "Custom-Delta-8-Boxes-2_cyzw04",
        ],
      },
      {
        name: "Pre Roll Packaging Labels",
        slug: "pre-roll-packaging-labels",
        images: [
          "Pre-Roll-Packaging-Labels-1_p1slxf",
          "Pre-Roll-Packaging-Labels-2_cdbzeo",
          "Pre_Roll_Packaging_Labels_x5wguw",
        ],
      },
      {
        name: "Luxury Pre Roll Packaging",
        slug: "luxury-pre-roll-packaging",
        images: [
          "Luxury-Pre-Roll-Packaging-1_vijzrn",
          "Luxury-Pre-Roll-Packaging-2_cwnmlg",
          "Luxury_Pre_Roll_Packaging_ylx6je",
        ],
      },
    ],
  },
  {
    name: "Pizza Boxes",
    slug: "pizza-boxes",
    description: "Sturdy Boxes for Hot and Fresh Pizza",
    image: "Box-4_lztqi7",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "White Pizza Boxes",
        slug: "white-pizza-boxes",
        images: [
          "White_pizza_box1_j9xiwv",
          "White_pizza_box_2_eaprps",
          "White_pizza_box3_watoz1",
        ],
      },
      {
        name: "Pizza Slice Boxes",
        slug: "pizza-slice-boxes",
        images: [
          "pizza_slice_box_1_arltc8",
          "pizza_slice_box_2_ns01zp",
          "pizza_slice_box_3_xitide",
        ],
      },
      {
        name: "Round Pizza Boxes",
        slug: "round-pizza-boxes",
        images: [
          "Round_pizza_box_1_zph3s4",
          "Round_pizza_box_2_hzilly",
          "Round_pizza_box_3_tf8xj9",
        ],
      },
      {
        name: "Rectangle Pizza Boxes",
        slug: "rectangle-pizza-boxes",
        images: [
          "Rectangle_pizza_box_1_cxt3xt",
          "Rectangle_pizza_box_2_arhd6f",
          "Rectangle_pizza_box_3_i88r0u",
        ],
      },
      {
        name: "Flatbread Pizza Boxes",
        slug: "flatbread-pizza-boxes",
        images: [
          "flatbread_pizza_box_1_hnnim5",
          "flatbread_pizza_box_2_gibmxc",
          "flatbread_pizza_box_3_nuevbk",
        ],
      },
      {
        name: "16 Inch Pizza Boxes",
        slug: "16-inch-pizza-boxes",
        images: [
          "16_inch_pizza_box_1_jibz0d",
          "16_inch_pizza_box_2_c4dkdz",
          "16_inch_pizza_box_3_cstpng",
        ],
      },
      {
        name: "14 Inch Pizza Boxes",
        slug: "14-inch-pizza-boxes",
        images: [
          "14_inch_pizza_box_1_egqkcw",
          "14_inch_pizza_box_2_ala5yl",
          "14_inch_pizza_box_3_spbgcr",
        ],
      },
      {
        name: "Blank Pizza Boxes",
        slug: "blank-pizza-boxes",
        images: [
          "16_inch_pizza_box_1_jibz0d",
          "16_inch_pizza_box_2_c4dkdz",
          "16_inch_pizza_box_3_cstpng",
        ],
      },
    ],
  },
];

export default productByIndustryData;
