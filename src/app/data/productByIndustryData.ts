export interface IndustrySubCategory {
  name: string;
  slug: string;
  description?: string;
  modelPath?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
  heroImage?: string; // Separate hero image for hero section only
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product’s needs, offering style, strength, and perfect presentation.",
    image: "Bakery_Boxes_klh8y6",
    subcategoriesCount: 14,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Custom Donut Box",
        slug: "custom-donut-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Pink-Donut-Boxes_vadc29",
          "Custom-Donut-Boxes-2_u8p8yt",
          "Custom-Donut-Boxes-3_xbgzfn",
        ],
      },
      {
        name: "Custom Pastry Box",
        slug: "custom-pastry-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Pastery-Boxes_tidnmg",
          "Custom-Pastery-Boxes-2_iypxuu",
          "Custom-Pastery-Boxes-1_rvriqm",
        ],
      },
      {
        name: "Custom Cake Box",
        slug: "custom-cake-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Cake-Boxes_r5fvaq",
          "Custom-Cake-Boxes-2_ft4dsr",
          "Custom-Cake-Boxes-2_ft4dsr",
        ],
      },
      {
        name: "Custom Cookie Box",
        slug: "custom-cookie-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Cookies-Boxes_g2luqm",
          "Custom-Cookies-Boxes-1_cdfbrr",
          "Custom-Cookies-Boxes-2_wdiict",
        ],
      },
      {
        name: "Custom Gable Box",
        slug: "custom-gable-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Gable-Boxes_tfjjqt",
          "Custom-Gable-Boxes-2_h4ragc",
          "Custom-Gable-Boxes-3_tbc0f3",
        ],
      },
      {
        name: "Custom Candy Box",
        slug: "custom-candy-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Candy-Boxes_dyhfbb",
          "Custom-Candy-Boxes-2_umzwww",
          "Custom-Candy-Boxes-3_abnfuf",
        ],
      },
      {
        name: "Pink Donut Box",
        slug: "pink-donut-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Pink-Donut-Boxes_vadc29",
          "Pink-Donut-Boxes-2_ltiufw",
          "Pink-Donut-Boxes-3_vo4cpt",
        ],
      },
      {
        name: "Window Bakery Box",
        slug: "window-bakery-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Window-Bakery-Boxes_fh57xq",
          "Window-Bakery-Boxes-2_xx5swh",
          "Window-Bakery-Boxes-3_gazrye",
        ],
      },
      {
        name: "Bakery Gift Box",
        slug: "bakery-gift-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Bakery-Gift-Boxes_m9obxk",
          "Bakery-Gift-Boxes-2_t3kwx8",
          "Bakery-Gift-Boxes-3_enypsh",
        ],
      },
      {
        name: "Custom Cupcake Box",
        slug: "custom-cupcake-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Cupcake-Boxes_r2nlgw",
          "Custom-Cupcake-Boxes-2_lhirzg",
          "Custom-Cupcake-Boxes-3_o0xhpd",
        ],
      },
      {
        name: "Custom Truffle Box",
        slug: "custom-truffle-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Custom-Truffle-Boxes_bwzzre",
          "Custom-Truffle-Boxes-2_dznjjn",
          "Custom-Truffle-Boxes-3_omyri7",
        ],
      },
      {
        name: "Sweet Gift Box",
        slug: "sweet-gift-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Sweet-Gift-Boxes_pwqizx",
          "Sweet-Gift-Boxes-2_mctoex",
          "Sweet-Gift-Boxes-3_tfmxok",
        ],
      },
    ],
  },
  {
    name: "Cosmetic Boxes",
    slug: "cosmetic-boxes",
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product’s needs, offering style, strength, and perfect presentation.",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 20,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cosmetic Display Box",
        slug: "cosmetic-display-boxes",
        heroImage: "Display-Cosmetic-Boxes_qxwdok",
        images: [
          "Display-Cosmetic-Boxes-1_qorgwe",
          "Display-Cosmetic-Boxes-2_rvpoth",
          "Display-Cosmetic-Boxes-3_ohh9io",
        ],
      },
      {
        name: "Custom Perfume Box",
        slug: "custom-perfume-boxes",
        heroImage: "Custom-Perfume-Boxes_dsekz6",
        images: [
          "Custom-Perfume-Boxes-1_jdpqpt",
          "Custom-Perfume-Boxes-2_wkxcqo",
          "Custom-Perfume-Boxes-3_cwxpsh",
        ],
      },
      {
        name: "Custom Makeup Box",
        slug: "custom-makeup-boxes",
        heroImage: "Custom-Makeup-Boxes_g9x0ga",
        images: [
          "Custom-Makeup-Boxes-1_dxsdrp",
          "Custom-Makeup-Boxes-2_vnsndw",
          "Custom-Makeup-Boxes-3_kz674s",
        ],
      },
      {
        name: "Hair Extension Box",
        slug: "hair-extension-boxes",
        heroImage: "Hair-Extension-Boxes_koirow",
        images: [
          "Hair-Extension-Boxes-1_cpgbkn",
          "Hair-Extension-Boxes-2_qtklom",
          "Hair-Extension-Boxes-3_dmjr7z",
        ],
      },
      {
        name: "Custom Lipstick Box",
        slug: "custom-lipstick-boxes",
        heroImage: "Custom-Lipstick-Boxes_ye9jwo",
        images: [
          "Custom-Lipstick-Boxes-1_pusut1",
          "Custom-Lipstick-Boxes-2_gx8b9b",
          "Custom-Lipstick-Boxes-3_cvybzj",
        ],
      },
      {
        name: "Custom Lip Gloss Box",
        slug: "custom-lip-gloss-boxes",
        heroImage: "Custom-LipGloss-Boxes_t4osho",
        images: [
          "Custom-LipGloss-Boxes-1_haojcb",
          "Custom-LipGloss-Boxes-2_bj7uha",
          "Custom-LipGloss-Boxes-3_mvchgu",
        ],
      },
      {
        name: "Custom Eye Shadow Box",
        slug: "custom-eye-shadow-boxes",
        heroImage: "Custom-Eye-Shadow-Boxes_uofwwc",
        images: [
          "Custom-Eye-Shadow-Boxes-1_zktyid",
          "Custom-Eye-Shadow-Boxes-2_ohc5hq",
          "Custom-Eye-Shadow-Boxes-3_olee8e",
        ],
      },
      {
        name: "Custom Cream Box",
        slug: "custom-cream-boxes",
        heroImage: "Custom-Cream-Boxes_izanae",
        images: [
          "Custom-Cream-Boxes-1_mugaz9",
          "Custom-Cream-Boxes-2_ogkq65",
          "Custom-Cream-Boxes-3_ilprax",
        ],
      },
      {
        name: "Custom Mascara Box",
        slug: "custom-mascara-boxes",
        heroImage: "Custom-Mascara-Boxes_isxe9x",
        images: [
          "Custom-Mascara-Boxes-1_z6ff9f",
          "Custom-Mascara-Boxes-2_qm5m9u",
          "Custom-Mascara-Boxes-3_iefs6d",
        ],
      },
      {
        name: "Custom Nail Polish Box",
        slug: "custom-nail-polish-boxes",
        heroImage: "Custom-Nail-Polish-Boxes_mnqghy",
        images: [
          "Custom-Nail-Polish-Boxes-1_mzi5dl",
          "Custom-Nail-Polish-Boxes-2_k8jobv",
          "Custom-Nail-Polish-Boxes-3_o7ustx",
        ],
      },
      {
        name: "Custom Lip Balm Box",
        slug: "custom-lip-balm-boxes",
        heroImage: "Custom-Lip-Balm-Boxes_dxamvj",
        images: [
          "Custom-Lip-Balm-Boxes-1_f7srpq",
          "Custom-Lip-Balm-Boxes-2_j2gd6r",
          "Custom-Lip-Balm-Boxes-3_sdo9bz",
        ],
      },
      {
        name: "Custom Eyeliner Box",
        slug: "custom-eyeliner-boxes",
        heroImage: "Custom-Eyeliner-Boxes_sdj4sh",
        images: [
          "Custom-Eyeliner-Boxes-1_mtbd9m",
          "Custom-Eyeliner-Boxes-2_klvdjv",
          "Custom-Eyeliner-Boxes-3_w48dem",
        ],
      },
      {
        name: "Foundation Box",
        slug: "foundation-boxes",
        heroImage: "Foundation-Boxes_vnzlu7",
        images: [
          "Foundation-Boxes-1_tdnab3",
          "Foundation-Boxes-2_zigtnm",
          "Foundation-Boxes-3_jn8zl7",
        ],
      },
      {
        name: "Lotion Box",
        slug: "lotion-boxes",
        heroImage: "Lotion-Boxes_k0nron",
        images: [
          "Lotion-Boxes-1_kalp8h",
          "Lotion-Boxes-2_f6gjrs",
          "Lotion-Boxes-3_ozpm6y",
        ],
      },
      {
        name: "Eye Lash Box",
        slug: "eye-lash-boxes",
        heroImage: "Eye-Lash-Boxes_mjsiop",
        images: [
          "Eye-Lash-Boxes-1_fsm4f5",
          "Eye-Lash-Boxes-2_qtzltu",
          "Eye-Lash-Boxes-3_c7m1h0",
        ],
      },
      {
        name: "Cosmetic Gift Box",
        slug: "cosmetic-gift-boxes",
        heroImage: "Cosmetic-Gift-Boxes_xkiefj",
        images: [
          "Cosmetic-Gift-Boxes-1_kah8ky",
          "Cosmetic-Gift-Boxes-2_zefjya",
          "Cosmetic-Gift-Boxes-3_sdkzsn",
        ],
      },
      {
        name: "Olive Oil Box",
        slug: "olive-oil-boxes",
        heroImage: "Olive-Oil-Boxes_hjrpxe",
        images: [
          "Olive-Oil-Boxes-1_hxctib",
          "Olive-Oil-Boxes-2_hisfot",
          "Olive-Oil-Boxes-3_yggfkm",
        ],
      },
      {
        name: "Essential Oil Box",
        slug: "essential-oil-boxes",
        heroImage: "Essential-Oil-Boxes_g5gyac",
        images: [
          "Essential-Oil-Boxes-1_mjiyz9",
          "Essential-Oil-Boxes-2_i7ciko",
          "Essential-Oil-Boxes-3_oqmkyj",
        ],
      },
      {
        name: "Beard Oil Box",
        slug: "beard-oil-boxes",
        heroImage: "Beard-Oil-Boxes_tniis2",
        images: [
          "Beard-Oil-Boxes-1_skwzue",
          "Beard-Oil-Boxes-2_eprv2j",
          "Beard-Oil-Boxes-3_clyxl8",
        ],
      },
      {
        name: "Serum Box",
        slug: "serum-boxes",
        heroImage: "Serum-Boxes_sl4mkq",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Custom-Noodles-Boxes_mxpz3e",
    subcategoriesCount: 10,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Custom French Fry Box",
        slug: "custom-french-fry-boxes",
        heroImage: "Custom-French-Fry-Boxes_szgiyf",
        images: [
          "Custom-French-Fry-Boxes-1_ycl2sa",
          "Custom-French-Fry-Boxes-2_xtfrpb",
          "Custom-French-Fry-Boxes-3_mopz2w",
        ],
      },
      {
        name: "Custom Coffee Box",
        slug: "custom-coffee-boxes",
        heroImage: "Custom-Coffee-Boxes_e1fobn",
        images: [
          "Custom-Coffee-Boxes-1_ri4q7w",
          "Custom-Coffee-Boxes-2_j45kpg",
          "Custom-Coffee-Boxes-3_ivaq2z",
        ],
      },
      {
        name: "Custom Coffee Cups",
        slug: "custom-coffee-cups",
        heroImage: "Custom-Coffee-Cups_vo7g9l",
        images: [
          "Custom-Coffee-Cups-1_ccsv5j",
          "Custom-Coffee-Cups-2_ecmbxm",
          "Custom-Coffee-Cups-3_jhczsd",
        ],
      },
      {
        name: "Custom Coffee Cup Sleeves",
        slug: "custom-coffee-cup-sleeves",
        heroImage: "Custom-Coffee-Cup-Sleeves_nmliwc",
        images: [
          "Custom-Coffee-Cup-Sleeves-1_iezt7i",
          "Custom-Coffee-Cup-Sleeves-2_g2ccap",
          "Custom-Coffee-Cup-Sleeves-3_xyt9dv",
        ],
      },
      {
        name: "Custom Chinese Takeout Box",
        slug: "custom-chinese-takeout-boxes",
        heroImage: "Custom-Chinese-Takeout-Boxes_kufbec",
        images: [
          "Custom-Chinese-Takeout-Boxes-1_akvurx",
          "Custom-Chinese-Takeout-Boxes-2_jecohn",
          "Custom-Chinese-Takeout-Boxes-3_hihoh1",
        ],
      },
      {
        name: "Custom Popcorn Box",
        slug: "custom-popcorn-boxes",
        heroImage: "Custom-Popcorn-Boxes_gpacm8",
        images: [
          "Custom-Popcorn-Boxes-1_hlnhzn",
          "Custom-Popcorn-Boxes-2_xxmoah",
          "Custom-Popcorn-Boxes-3_ovvxhf",
        ],
      },
      {
        name: "Custom Snack Box",
        slug: "custom-snack-boxes",
        heroImage: "Custom-Snack-Boxes_yfagyu",
        images: [
          "Custom-Snack-Boxes-1_u9wvqu",
          "Custom-Snack-Boxes-2_yrgho8",
          "Custom-Snack-Boxes-3_upyjv7",
        ],
      },
      {
        name: "Custom Tea Box",
        slug: "custom-tea-boxes",
        heroImage: "Custom-Tea-Boxes_oarez1",
        images: [
          "Custom-Tea-Boxes-1_oc5gp0",
          "Custom-Tea-Boxes-2_skjsmy",
          "Custom-Tea-Boxes-3_mtn1z9",
        ],
      },
      {
        name: "Custom Burger Box",
        slug: "custom-burger-boxes",
        heroImage: "Custom-Burger-Boxes_iwrgyq",
        images: [
          "Custom-Burger-Boxes-1_k09ujk",
          "Custom-Burger-Boxes-2_f1dvgy",
          "Custom-Burger-Boxes-3_g1xyky",
        ],
      },
      {
        name: "Sandwich Box",
        slug: "sandwich-boxes",
        heroImage: "Custom-Sandwich-Boxes_evi9t6",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Deluxe-Gift-Boxes_mygamd",
    subcategoriesCount: 10,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Gift Pillow Box",
        slug: "gift-pillow-boxes",
        heroImage: "Pillow-Gift-Boxes_peeh1e",
        images: [
          "Pillow-Gift-Boxes-1_xjpfbo",
          "Pillow-Gift-Boxes-2_kb6ord",
          "Pillow-Gift-Boxes-3_qneqc7",
        ],
      },
      {
        name: "Birthday Gift Box",
        slug: "birthday-gift-boxes",
        heroImage: "Birthday-Gift-Boxes_vug0ke",
        images: [
          "Birthday-Gift-Boxes-1_hzo3ug",
          "Birthday-Gift-Boxes-2_vf5mic",
          "Birthday-Gift-Boxes-3_u9i9qs",
        ],
      },
      {
        name: "Sweet Gift Box",
        slug: "sweet-gift-boxes-industry",
        heroImage: "Sweet-Gift-Boxes_hx5whj",
        images: [
          "Sweet-Gift-Boxes-1_sykffe",
          "Sweet-Gift-Boxes-2_nb7lsr",
          "Sweet-Gift-Boxes-1_sykffe",
        ],
      },
      {
        name: "Party Favor Box",
        slug: "party-favor-boxes",
        heroImage: "Party-Favor-Boxes_gnqbhm",
        images: [
          "Party-Favor-Boxes-1_titesd",
          "Party-Favor-Boxes-2_vyw3s3",
          "Party-Favor-Boxes-3_w91swb",
        ],
      },
      {
        name: "Round Gift Box",
        slug: "round-gift-boxes",
        heroImage: "Round-Gift-Boxes_ybuudj",
        images: [
          "Round-Gift-Boxes-1_z85jd8",
          "Round-Gift-Boxes-2_htaipj",
          "Round-Gift-Boxes-3_bwz3mb",
        ],
      },
      {
        name: "Gift Box with Lid",
        slug: "gift-boxes-with-lid",
        heroImage: "Gift-Boxes-With-Lid_tdp3ok",
        images: [
          "Gift-Boxes-With-Lid-1_i1umga",
          "Gift-Boxes-With-Lid-2_nhueho",
          "Gift-Boxes-With-Lid-3_br1nbk",
        ],
      },
      {
        name: "Custom Deluxe Gift Box",
        slug: "custom-deluxe-gift-boxes",
        heroImage: "Deluxe-Gift-Boxes_mygamd",
        images: [
          "Deluxe-Gift-Boxes-1_yxhvus",
          "Deluxe-Gift-Boxes-2_kypqzv",
          "Deluxe-Gift-Boxes-2_kypqzv",
        ],
      },
      {
        name: "Custom Square Gift Box",
        slug: "custom-square-gift-boxes",
        heroImage: "Squre-Gift-Boxes_abscqz",
        images: [
          "Squre-Gift-Boxes-1_y0tmh9",
          "Squre-Gift-Boxes-2_gmidjx",
          "Squre-Gift-Boxes-3_iwghpl",
        ],
      },
      {
        name: "Small Gift Box",
        slug: "small-gift-boxes",
        heroImage: "Small-Gift-Boxes_lwt7zv",
        images: [
          "Small-Gift-Boxes-1_qdsxu7",
          "Small-Gift-Boxes-2_wccej4",
          "Small-Gift-Boxes-2_wccej4",
        ],
      },
      {
        name: "Large Gift Box",
        slug: "large-gift-boxes",
        heroImage: "Large-Gift-Boxes_giboj4",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Ring-Boxes_ppidrs",
    subcategoriesCount: 15,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Anklet Box",
        slug: "anklet-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Anklet-Boxes_qpx9ng",
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
        heroImage: "Velvet-Bags_tpw1p6",
        images: [
          "Velvet-Bags-1_ngwiar",
          "Velvet-Bags-2_y3szxp",
          "Velvet-Bags-3_z5pe1a",
        ],
      },
      {
        name: "Jewelry Subscription Box",
        slug: "jewelry-subscription-box",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Jewelry-Subsciption-Boxes_l3dvh5",
        images: [
          "Jewelry-Subsciption-Boxes-1_sjdvux",
          "Jewelry-Subsciption-Boxes-2_ms7ese",
          "Jewelry-Subsciption-Boxes-3_izpwwg",
        ],
      },
      {
        name: "Pendant Box",
        slug: "pendant-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Pendant-Boxes_uactzx",
        images: [
          "Pendant-Boxes-1_yvedvy",
          "Pendant-Boxes-2_exjntx",
          "Pendant-Boxes-2_exjntx",
        ],
      },
      {
        name: "Bracelet Box",
        slug: "bracelet-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Bracelet-Boxes_olm1lp",
        images: [
          "Bracelet-Boxes-1_dvpgmf",
          "Bracelet-Boxes-1_dvpgmf",
          "Bracelet-Boxes-2_p8mxcl",
        ],
      },
      {
        name: "Ring Box",
        slug: "ring-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Ring-Boxes_ppidrs",
        images: [
          "Ring-Boxes-1_jtxaap",
          "Ring-Boxes-2_nmkoka",
          "Ring-Boxes-3_gaktn8",
        ],
      },
      {
        name: "Earring Box",
        slug: "earring-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Earring-Boxes_e3rsqz",
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
        heroImage: "Luxury-Jewelry-Box_mxuzed",
        images: [
          "Luxury-Jewelry-Box-1_y9dzqv",
          "Luxury-Jewelry-Box-2_md80hw",
          "Luxury-Jewelry-Box-3_xvaroq",
        ],
      },
      {
        name: "Necklace Box",
        slug: "necklace-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Necklace-Boxes_hxe1mj",
        images: [
          "Necklace-Boxes-1_fuwcyk",
          "Necklace-Boxes-2_j7n2hk",
          "Necklace-Boxes-3_hlrzyc",
        ],
      },
      {
        name: "Small Jewelry Box",
        slug: "small-jewelry-boxes",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Small-Jewelry-Boxes_gnee8c",
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
        heroImage: "Necklace-Card_rhiyca",
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
        heroImage: "Jewelry-Bag_cavqru",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Retail-Boxes_t01rgx",
    subcategoriesCount: 4,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      // { name: "Custom Die Cut Boxes", slug: "custom-die-cut-boxes" }, // Hidden - content not available
      {
        name: "Custom Toy Box",
        slug: "custom-toy-boxes",
        heroImage: "Custom-Toy-Boxes_ct6ogj",
        images: [
          "Custom-Toy-Boxes-1_wlbneb",
          "Custom-Toy-Boxes-2_wnnm3g",
          "Custom-Toy-Boxes-3_c3xug0",
        ],
      },
      {
        name: "Business Card Box",
        slug: "business-card-boxes",
        heroImage: "Business-Card-Boxes_el6kp4",
        images: [
          "Business-Card-Boxes-1_nwnmxa",
          "Business-Card-Boxes-2_tlbxzd",
          "Business-Card-Boxes-3_t2gs7x",
        ],
      },
      {
        name: "Custom Dispenser Box",
        slug: "custom-dispenser-boxes",
        heroImage: "Custom-Dispenser-Boxes_rsxmi1",
        images: [
          "Custom-Dispenser-Boxes-1_vcqqvo",
          "Custom-Dispenser-Boxes-2_xtdfw1",
          "Custom-Dispenser-Boxes-3_nqdnaf",
        ],
      },
      { 
        name: "Custom Mailer Box", 
        slug: "custom-mailer-boxes",
        heroImage: "Custom-Mailer-Boxes_niy6ah",
        images: [
          "Custom-Mailer-Boxes-1_jfnuhy",
          "Custom-Mailer-Boxes-2_hdwhqd",
          "Custom-Mailer-Boxes-3_cab0ct",
        ],
      },
    ],
  },
  {
    name: "Candle Boxes",
    slug: "candle-boxes",
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Candle-Boxes_bm4ri2",
    subcategoriesCount: 9,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { 
        name: "Candle Gift Box", 
        slug: "candle-gift-boxes",
        heroImage: "Candle-Boxes_bm4ri2"
      },
      {
        name: "Luxury Candle Box",
        slug: "luxury-candle-boxes",
        heroImage: "Luxury-Candle-Boxes_n5jxlg",
        images: [
          "Luxury-Candle-Boxes-1_yeh29e",
          "Luxury-Candle-Boxes-2_a9bqma",
          "Luxury-Candle-Boxes-3_otbfa4",
        ],
      },
      {
        name: "Candle Boxes with Inserts",
        slug: "candle-boxes-with-inserts",
        heroImage: "Candle-Boxes-With-Inserts_nlpgdc",
        images: [
          "Candle-Boxes-With-Inserts-1_igb23j",
          "Candle-Boxes-With-Inserts-1_igb23j",
          "Candle-Boxes-With-Inserts-1_igb23j",
        ],
      },
      {
        name: "Candle Shipping Box",
        slug: "candle-shipping-boxes",
        heroImage: "Candle-Shipping-Boxes_rmwypc",
        images: [
          "Candle-Shipping-Boxes-1_oayuxc",
          "Candle-Shipping-Boxes-2_syrimg",
          "Candle-Shipping-Boxes-1_oayuxc",
        ],
      },
      { 
        name: "Taper Candle Box", 
        slug: "taper-candle-boxes",
        heroImage: "Candle-Boxes_bm4ri2"
      },
      {
        name: "Custom Jar Candle Box",
        slug: "custom-jar-candle-boxes",
        heroImage: "Custom-Jar-Candle-Boxes_dq2ow2",
        images: [
          "Custom-Jar-Candle-Boxes-1_nzcgt9",
          "Custom-Jar-Candle-Boxes-2_qxjgge",
          "Custom-Jar-Candle-Boxes-3_tw6bnk",
        ],
      },
      { 
        name: "Wax Melt Box", 
        slug: "wax-melt-boxes",
        heroImage: "Candle-Boxes_bm4ri2"
      },
      {
        name: "Kraft Candle Box",
        slug: "kraft-candle-boxes",
        heroImage: "Kraft-Candle-Boxes_wdg4zs",
        images: [
          "Kraft-Candle-Boxes-1_vldkvr",
          "Kraft-Candle-Boxes-2_vygqyp",
          "Kraft-Candle-Boxes-3_qpvevc",
        ],
      },
      { 
        name: "Candle Subscription Box", 
        slug: "candle-subscription-boxes",
        heroImage: "Candle-Boxes_bm4ri2"
      },
    ],
  },
  {
    name: "Shipping Boxes",
    slug: "shipping-boxes-industry",
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "shipping-box_jyysru",
    subcategoriesCount: 4,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Black Shipping Box",
        slug: "black-shipping-boxes",
        heroImage: "Black-Shipping-Boxes_lclcdl",
        images: [
          "Black-Shipping-Boxes-1_hhg2nb",
          "Black-Shipping-Boxes-2_qxrrap",
          "Black-Shipping-Boxes-3_dbd5uc",
        ],
      },
      {
        name: "Candle Shipping Box",
        slug: "candle-shipping-boxes-industry",
        heroImage: "Candle-Shipping-Boxes_zglcia",
        images: [
          "Candle-Shipping-Boxes-1_pjwtlo",
          "Candle-Shipping-Boxes-2_wx99sp",
          "Candle-Shipping-Boxes-1_pjwtlo",
        ],
      },
      {
        name: "Corrugated Shipping Box",
        slug: "corrugated-shipping-boxes",
        heroImage: "Corrugated-Shipping-Boxes_iybsof",
        images: [
          "Corrugated-Shipping-Boxes-1_jgz3o8",
          "Corrugated-Shipping-Boxes-2_nmvrag",
          "Corrugated-Shipping-Boxes-3_psrsyp",
        ],
      },
      {
        name: "Custom Shipping Box",
        slug: "custom-shipping-boxes",
        heroImage: "Custom-Shipping-Boxes_zkxmdu",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-4_lztqi7",
    subcategoriesCount: 10,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Soap Sleeve Packaging",
        slug: "soap-sleeve-packaging",
        heroImage: "Sleeve-Soap-Packaging_ncrop4",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Sleeve-Soap-Packaging-1_iywhz6",
          "Sleeve-Soap-Packaging-2_jn6hdo",
          "Sleeve-Soap-Packaging-3_c46zle",
        ],
      },
      {
        name: "Custom Bath Bomb Box",
        slug: "custom-bath-bomb-boxes",
        heroImage: "Custom-Bath-Bomb-Boxes_xurto9",
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
        heroImage: "Soap-Wrapping-Paper_kyhryu",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Soap-Wrapping-Paper-1_dc69r2",
          "Soap-Wrapping-Paper-2_bxoyeg",
          "Soap-Wrapping-Paper-3_ct3oet",
        ],
      },
      {
        name: "Handmade Soap Box",
        slug: "handmade-soap-boxes",
        heroImage: "Handmade-Soap-Boxes_yhu3se",
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
        heroImage: "Luxury-Soap-Packaging_omph2f",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Luxury-Soap-Packaging-1_r8qsmo",
          "Luxury-Soap-Packaging-2_bec6oc",
          "Luxury-Soap-Packaging-3_kzkhna",
        ],
      },
      {
        name: "Square Soap Box",
        slug: "square-soap-boxes",
        heroImage: "Square-Soap-Boxes_nhphnf",
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
        heroImage: "Soap-Bar-Boxes_egmeip",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Soap-Bar-Boxes-1_xk9r2d",
          "Soap-Bar-Boxes-2_qrcsvw",
          "Soap-Bar-Boxes-3_npidpe",
        ],
      },
      {
        name: "Paper Soap Box",
        slug: "paper-soap-boxes",
        heroImage: "Paper-Soap-Boxes_mcbkrb",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Paper-Soap-Boxes-1_uwidvu",
          "Paper-Soap-Boxes-2_eoaop8",
          "Paper-Soap-Boxes-3_eulzjw",
        ],
      },
      {
        name: "Kraft Soap Box",
        slug: "kraft-soap-boxes",
        heroImage: "Kraft-Soap-Boxes_uxcqj4",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Soap-Boxes-1_cqobeh",
          "Kraft-Soap-Boxes-2_hnskyc",
          "Kraft-Soap-Boxes-3_xzse7x",
        ],
      },
      {
        name: "Kraft Pillow Soap Box",
        slug: "kraft-pillow-soap-boxes-industry",
        heroImage: "Pillow-Soap-Boxes_vrirs7",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cufflink Box",
        slug: "cufflink-boxes",
        heroImage: "Cufflink-Boxes_nz4k0d",
        images: [
          "Cufflink-Boxes-1_rz2wcf",
          "Cufflink-Boxes-2_f55tgq",
          "Cufflink-Boxes-3_nppvwy",
        ],
      },
      {
        name: "Tie Box",
        slug: "tie-boxes",
        heroImage: "Tie-Boxes_ae5do1",
        images: [
          "Tie-Boxes-1_t8zvuk",
          "Tie-Boxes-2_j26x06",
          "Tie-Boxes-3_zmp4vi",
        ],
      },
      {
        name: "Belt Box",
        slug: "belt-boxes",
        heroImage: "Belt-Boxes_w0r74w",
        images: [
          "Belt-Boxes-1_px70gk",
          "Belt-Boxes-2_wirvg5",
          "Belt-Boxes-3_aj08pm",
        ],
      },
      {
        name: "Clothing Box",
        slug: "clothing-boxes",
        heroImage: "Clothing-Boxes_jczzwx",
        images: [
          "Clothing-Boxes-1_ygtjdo",
          "Clothing-Boxes-2_gytu8n",
          "Clothing-Boxes-3_pvbpno",
        ],
      },
      {
        name: "Lingerie Box",
        slug: "lingerie-boxes",
        heroImage: "Lingerie-Boxes_fb0pqj",
        images: [
          "Lingerie-Boxes-1_bq2nfw",
          "Lingerie-Boxes-2_jsjglj",
          "Lingerie-Boxes-3_syday7",
        ],
      },
      {
        name: "Underwear Box",
        slug: "underwear-boxes",
        heroImage: "Underwear-Boxes_zmc68h",
        images: [
          "Underwear-Boxes-1_ou16f4",
          "Underwear-Boxes-2_qfi8ft",
          "Underwear-Boxes-3_pyzny2",
        ],
      },
      {
        name: "T-Shirt Box",
        slug: "tshirt-boxes",
        heroImage: "T-Shirt-Boxes_atrin0",
        images: [
          "T-Shirt-Boxes-1_lqopuq",
          "T-Shirt-Boxes-2_zwzm3i",
          "T-Shirt-Boxes-3_th84gq",
        ],
      },
      {
        name: "Socks Box",
        slug: "socks-boxes",
        heroImage: "Socks-Boxes_hvsczm",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cardboard Shoe Box",
        slug: "cardboard-shoe-boxes",
        heroImage: "Cardboard-Shoe-Boxes_aceuor",
        images: [
          "Cardboard-Shoe-Boxes-1_bmgptg",
          "Cardboard-Shoe-Boxes-2_yfsmt4",
          "Cardboard-Shoe-Boxes-3_bxecvk",
        ],
      },
      {
        name: "Shoe Shipping Box",
        slug: "shoe-shipping-boxes",
        heroImage: "Shoe-Shipping-Boxes_fcblsb",
        images: [
          "Shoe-Shipping-Boxes-1_fltdr4",
          "Shoe-Shipping-Boxes-2_fqqwa0",
          "Shoe-Shipping-Boxes-3_w1jmxg",
        ],
      },
      {
        name: "Custom Shoe Box",
        slug: "custom-shoe-boxes",
        heroImage: "Custom-Shoe-Boxes_jw2ycm",
        images: [
          "Custom-Shoe-Boxes-1_ujniht",
          "Custom-Shoe-Boxes-2_s1rzhj",
          "Custom-Shoe-Boxes-3_bpnxxb",
        ],
      },
      {
        name: "Shoe Box with Lid",
        slug: "shoe-boxes-with-lid",
        heroImage: "Shoe-Boxes-With-Lid_bgpkw8",
        images: [
          "Shoe-Boxes-With-Lid-1_fxn9tx",
          "Shoe-Boxes-With-Lid-2_fk3jt1",
          "Shoe-Boxes-With-Lid-3_upegeh",
        ],
      },
      {
        name: "Golf Ball Box",
        slug: "golf-ball-boxes",
        heroImage: "Golf-Ball-Boxes_jz6mlf",
        images: [
          "Golf-Ball-Boxes-1_kaxgvt",
          "Golf-Ball-Boxes-2_hyeiff",
          "Golf-Ball-Boxes-3_y5wiqn",
        ],
      },
      {
        name: "Football Box",
        slug: "football-boxes",
        heroImage: "Football-Boxes_b9r2zb",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "shipping-box_jyysru",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Custom Cigarette Box",
        slug: "custom-cigarette-boxes",
        heroImage: "Custom-Cigarette-Boxes_yjtvvv",
        images: [
          "Custom-Cigarette-Boxes-1_f0abbv",
          "Custom-Cigarette-Boxes-2_r0ywev",
          "Custom-Cigarette-Boxes-3_ftlaow",
        ],
      },
      {
        name: "Cardboard Cigarette Box",
        slug: "cardboard-cigarette-boxes",
        heroImage: "Cardboard-Cigarette-Boxes_mowea8",
        images: [
          "Cardboard-Cigarette-Boxes-1_b7xr8l",
          "Cardboard-Cigarette-Boxes-2_hfnzvm",
          "Cardboard-Cigarette-Boxes-3_vryuig",
        ],
      },
      {
        name: "Flip Top Cigarette Box",
        slug: "flip-top-cigarette-boxes",
        heroImage: "Flip-Top-Cigarette-Boxes_bgm3ra",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-4_lztqi7",
    subcategoriesCount: 7,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "CBD Gift Box",
        slug: "cbd-gift-boxes",
        heroImage: "CBD-Gift-Boxes_yxw8gy",
        images: [
          "CBD-Gift-Boxes-1_k9295s",
          "CBD-Gift-Boxes-2_qi65ks",
          "CBD-Gift-Boxes-3_tcvuva",
        ],
      },
      {
        name: "CBD Gummies Box",
        slug: "cbd-gummies-boxes",
        heroImage: "CBD-Gummies-Boxes_vqp0nx",
        images: [
          "CBD-Gummies-Boxes-1_wd25va",
          "CBD-Gummies-Boxes-2_o1bk7c",
          "CBD-Gummies-Boxes-3_f6coos",
        ],
      },
      {
        name: "Custom Cannabis Box",
        slug: "custom-cannabis-boxes",
        heroImage: "Cusotm-Cannabis-Boxes_c8p5nu",
        images: [
          "Cusotm-Cannabis-Boxes-1_idflye",
          "Cusotm-Cannabis-Boxes-2_go3nc3",
          "Cusotm-Cannabis-Boxes-3_qpaksl",
        ],
      },
      {
        name: "CBD Oil Box",
        slug: "cbd-oil-boxes",
        heroImage: "CBD-Oil-Boxes_cnhehq",
        images: [
          "CBD-Oil-Boxes-1_qgrbrh",
          "CBD-Oil-Boxes-2_asnbzp",
          "CBD-Oil-Boxes-3_o9hvx6",
        ],
      },
      {
        name: "Hemp Oil Box",
        slug: "hemp-oil-boxes",
        images: [
          "Hemp-Oil-Boxes-1_q7mzbh",
          "Hemp-Oil-Boxes-2_qwlw6w",
          "Hemp-Oil-Boxes-3_nzq3jo",
        ],
      },
      {
        name: "Pre Roll Box",
        slug: "pre-roll-boxes",
        heroImage: "Pre-Roll-Boxes_xrivpk",
        images: [
          "Pre-Roll-Boxes-1_fvwba7",
          "Pre-Roll-Boxes-2_gevxu5",
          "Pre-Roll-Boxes-3_akskaw",
        ],
      },
      {
        name: "CBD Tincture Box",
        slug: "cbd-tincture-boxes",
        heroImage: "CBD-Tincture-Boxes_qyy0uj",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 3,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { 
        name: "Vape Cartridge Packaging", 
        slug: "vape-cartridge-packaging",
        heroImage: "Vape-Cartridge-Packaging_idrdpk",
        images: [
          "Vape-Cartridge-Packaging_idrdpk",
        ],
      },
      {
        name: "Custom Vape Box",
        slug: "custom-vape-boxes",
        heroImage: "Custom-Vape-Boxes_buyp9b",
        images: [
          "Custom-Vape-Boxes-1_lolxjr",
          "Custom-Vape-Boxes-2_ya2agr",
          "Custom-Vape-Boxes-3_kotist",
        ],
      },
      {
        name: "Disposable Vape Packaging",
        slug: "disposable-vape-packaging",
        heroImage: "Disposable-Vape-Packaging_rwkfjv",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 3,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "E-liquid Bottle Box",
        slug: "e-liquid-bottle-boxes",
        heroImage: "E-Liquid-Bottle-Boxes_qflm5g",
        images: [
          "E-Liquid-Bottle-Boxes-1_ynwnxe",
          "E-Liquid-Bottle-Boxes-2_qjrkus",
          "E-Liquid-Bottle-Boxes-3_k0ezfn",
        ],
      },
      {
        name: "E-liquid Display Box",
        slug: "e-liquid-display-boxes",
        heroImage: "E-Liquid-Display-Boxes_c6gqkt",
        images: [
          "E-Liquid-Display-Boxes-1_oiahgl",
          "E-Liquid-Display-Boxes-2_ilrhu8",
          "E-Liquid-Display-Boxes-3_qg2ov0",
        ],
      },
      {
        name: "E-liquid Gift Box",
        slug: "e-liquid-gift-boxes",
        heroImage: "E-Liquid-Gift-Boxes_xxu2sa",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "shipping-box_jyysru",
    subcategoriesCount: 7,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Custom Pencil Box",
        slug: "custom-pencil-boxes",
        heroImage: "Custom-Pencil-Boxes-1_o7o7op",
        images: [
          "Custom_Pencil_Boxes_1_a31je0",
          "Custom_Pencil_Boxes_2_e5ebry",
          "Custom_Pencil_Boxes_3_pimhms",
        ],
      },
      {
        name: "Custom Book Box",
        slug: "custom-book-boxes",
        heroImage: "Custom-Book-Boxes-1_fzhjlw",
        images: [
          "Custom_Book_Boxes_1_xwftmw",
          "Custom_Book_Boxes_2_haeezk",
          "Custom_Book_Boxes_3_yagq4d",
        ],
      },
      {
        name: "Custom Presentation Folders",
        slug: "custom-presentation-folders",
        heroImage: "Custom-Presentation-Folders-2_evjdwh",
        images: [
          "Custom_Presentation_Folders_1_miqqki",
          "Custom_Presentation_Folders_2_k3auuo",
          "Custom_Presentation_Folders_3_s4g6xe",
        ],
      },
      {
        name: "Pen Gift Box",
        slug: "pen-gift-boxes",
        heroImage: "Pen-Gift-Boxes1_toi152",
        images: [
          "Pen_Gift_Boxes1_cgtogq",
          "Pen_Gift_Boxes_2_t5ygyy",
          "Pen_Gift_Boxes_3_qwiztx",
        ],
      },
      {
        name: "Custom Pen Box",
        slug: "custom-pen-boxes",
        heroImage: "Custom-Pen-Boxes-2_fgjeoi",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-4_lztqi7",
    subcategoriesCount: 12,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Christmas Box with Lid",
        slug: "christmas-boxes-with-lids",
        heroImage: "Christmas-Boxes-with-Lids-1_dv0zgh",
        images: [
          "Christmas_Boxes_with_Lids_1_onvhfa",
          "Christmas_Boxes_with_Lids_2_sz6gc0",
          "Christmas_Boxes_with_Lids_3_yzmrko",
        ],
      },
      { 
        name: "Christmas Cupcake Box", 
        slug: "christmas-cupcake-boxes",
        heroImage: "Custom-Cupcake-Boxes_r2nlgw",
        images: [
          "Custom-Cupcake-Boxes_r2nlgw",
          "Custom-Cupcake-Boxes-2_lhirzg",
          "Custom-Cupcake-Boxes-3_o0xhpd",
        ],
      },
      { 
        name: "Christmas Candy Box", 
        slug: "christmas-candy-boxes",
        heroImage: "Christmas-Treat-Boxes-2_caf11d",
        images: [
          "Christmas-Treat-Boxes-2_caf11d",
          "Christmas-Treat-Boxes-1_jnscxi",
          "Christmas-Treat-Boxes-3_ii9m9m",
        ],
      },
      {
        name: "Christmas Gift Box",
        slug: "christmas-gift-boxes",
        heroImage: "Christmas-Gift-Boxes-3_nks4wa",
        images: [
          "Christmas_Gift_Boxes_1_p4c4dz",
          "Christmas_Gift_Boxes_2_ulnzc8",
          "Christmas_Gift_Boxes_3_jtnzim",
        ],
      },
      { 
        name: "Christmas Eve Box", 
        slug: "christmas-eve-boxes",
        heroImage: "Christmas-Gift-Boxes-3_nks4wa",
        images: [
          "Christmas_Gift_Boxes_1_p4c4dz",
          "Christmas_Gift_Boxes_2_ulnzc8",
          "Christmas_Gift_Boxes_3_jtnzim",
        ],
      },
      {
        name: "Christmas Present Box",
        slug: "christmas-present-boxes",
        heroImage: "Christmas-Present-Boxes-2_sjmob0",
        images: [
          "Christmas_Present_Boxes_1_p6mvbw",
          "Christmas_Present_Boxes_2_bx6mlk",
          "Christmas_Present_Boxes_1_p6mvbw",
        ],
      },
      {
        name: "Christmas Cookie Box",
        slug: "christmas-cookie-boxes",
        heroImage: "Christmas-Cookie-Boxes-1_o0umpo",
        images: [
          "Christmas_Cookie_Boxes_1_lvdlg2",
          "Christmas_Cookie_Boxes_2_adel7w",
          "Christmas_Cookie_Boxes_1_lvdlg2",
        ],
      },
      {
        name: "Christmas Treat Box",
        slug: "christmas-treat-boxes",
        heroImage: "Christmas-Treat-Boxes-2_caf11d",
        images: [
          "Christmas_Treat_Boxes_1_jnscxi",
          "Christmas_Treat_Boxes_2_s0b0ts",
          "Christmas_Treat_Boxes_3_ii9m9m",
        ],
      },
      {
        name: "Christmas Paper Bags",
        slug: "christmas-paper-bags",
        heroImage: "Christmas-Paper-Bags-1_fxy7tb",
        images: [
          "Christmas_Paper_Bags_1_mb9gjq",
          "Christmas_Paper_Bags_2_cpcahk",
          "Christmas_Paper_Bags_2_cpcahk",
        ],
      },
      {
        name: "Christmas Gift Bags",
        slug: "christmas-gift-bags",
        heroImage: "Christmas-Gift-Bags-1_whuvxy",
        images: [
          "Christmas_Gift_Bags_1_gthneu",
          "Christmas_Gift_Bags_2_xhfsvm",
          "Christmas_Gift_Bags_2_xhfsvm",
        ],
      },
      {
        name: "Christmas Favor Box",
        slug: "christmas-favor-boxes",
        heroImage: "Christmas-Favor-Boxes-1_mpkbbh",
        images: [
          "Christmas_Favor_Boxes_1_a5o0ox",
          "Christmas_Favor_Boxes_2_vonyon",
          "Christmas_Favor_Boxes_2_vonyon",
        ],
      },
      {
        name: "Christmas Mailer Box",
        slug: "christmas-mailer-boxes",
        heroImage: "Christmas-Mailer-Boxes-2_nqyiae",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-5_pdb8xw",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Custom Chocolate Box",
        slug: "custom-chocolate-boxes",
        heroImage: "Chocolate-box-1_jagzxa",
        images: [
          "Chocolate_box_1_yrg5y0",
          "Chocolate_box_2_kfnskd",
          "Chocolate_box_3_z6yolj",
          "mini_Chocolate_box_1_bfeu9h",
          "Chocolate_milk_box_1_fedk3q",
          "Chocolate_candy_box_1_iwrdpu",
        ],
      },
      {
        name: "Luxury Chocolate Box",
        slug: "luxury-chocolate-boxes",
        heroImage: "luxury-Chocolate-box-1_gm94ap",
        images: [
          "luxury_Chocolate_box_1_ysszvo",
          "luxury_Chocolate_box_2_ut1mcd",
          "luxury_Chocolate_box_1_ysszvo",
        ],
      },
      {
        name: "Chocolate Bomb Box",
        slug: "chocolate-bomb-boxes",
        heroImage: "Chocolate-BOmb-box-1_fzxtzn",
        images: [
          "Chocolate_BOmb_box_1_ws3eqt",
          "Chocolate_BOmb_box_2_btpqj8",
          "Chocolate_BOmb_box_2_btpqj8",
        ],
      },
      {
        name: "Chocolate Gift Box",
        slug: "chocolate-gift-boxes",
        heroImage: "chocolate-gift-box-2_eg1rik",
        images: [
          "chocolate_gift_box_dzxvct",
          "chocolate_gift_box_2_wpo8dj",
          "chocolate_gift_box_dzxvct",
        ],
      },
      {
        name: "Christmas Chocolate Box",
        slug: "christmas-chocolate-boxes",
        heroImage: "cheristmas-Chocolate-box-1_fm2mse",
        images: [
          "cheristmas_Chocolate_box_1_gqamgk",
          "cheristmas_Chocolate_box_2_kmzssv",
          "cheristmas_Chocolate_box_2_kmzssv",
        ],
      },
      {
        name: "Chocolate Bar Box",
        slug: "chocolate-bar-boxes",
        heroImage: "Chocolate-bar-box-2_rdvsg1",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-6_vm3fmh",
    subcategoriesCount: 11,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cereal Box Wholesale",
        slug: "cereal-boxes-wholesale",
        heroImage: "cereal-box-3_luczhd",
        images: [
          "cereal_box_1_xqw5si",
          "cereal_box_2_vdyw1h",
          "cereal_box_3_bdi3jq",
        ],
      },
      {
        name: "Custom Cereal Box",
        slug: "custom-cereal-boxes",
        heroImage: "cereal-box-3_luczhd",
        images: [
          "mini_cereal_box1_zdgvky",
          "mini_cereal_box2_ajjjux",
          "Cardboard_cereal_box_1_dnvfxe",
          "Cardboard_cereal_box_2_b8mtju",
          "Cardboard_cereal_box_3_osbidx",
        ],
      },
      { 
        name: "Corn Flakes Box", 
        slug: "corn-flakes-boxes",
        heroImage: "cereal-box-3_luczhd",
      },
      {
        name: "Unique Cereal Box",
        slug: "unique-cereal-boxes",
        heroImage: "cereal-box-3_luczhd",
        images: [
          "unique_cereal_box_1_wd3uiv",
          "unique_cereal_box_2_imcnhg",
          "unique_cereal_box_2_imcnhg",
        ],
      },
      { 
        name: "Breakfast Cereal Box", 
        slug: "breakfast-cereal-boxes",
        heroImage: "cereal-box-3_luczhd",
      },
      { 
        name: "Colorful Cereal Box", 
        slug: "colorful-cereal-boxes",
        heroImage: "Colorful-Cereal-Boxes-3_az1snc",
        images: [
          "Colorful-Cereal-Boxes-3_az1snc",
          "Colorful-Cereal-Boxes-3_az1snc",
          "Colorful-Cereal-Boxes-3_az1snc",
        ],
      },
      { 
        name: "Vintage Cereal Box", 
        slug: "vintage-cereal-boxes",
        heroImage: "Vintage-Cereal-Boxes-3_igkin6",
        images: [
          "Vintage-Cereal-Boxes-3_igkin6",
          "Vintage-Cereal-Boxes-3_igkin6",
          "Vintage-Cereal-Boxes-3_igkin6",
        ],
      },
      { 
        name: "Retro Cereal Box", 
        slug: "retro-cereal-boxes",
        heroImage: "Retro-Cereal-Boxes1_vxi2jh",
        images: [
          "Retro-Cereal-Boxes1_vxi2jh",
          "Retro-Cereal-Boxes1_vxi2jh",
          "Retro-Cereal-Boxes1_vxi2jh",
        ],
      },
      { 
        name: "90s Cereal Box", 
        slug: "90s-cereal-boxes",
        heroImage: "90s-cereal-box_thxwlw",
        images: [
          "90s-cereal-box_thxwlw",
          "90s-cereal-box_thxwlw",
          "90s-cereal-box_thxwlw",
        ],
      },
      { 
        name: "80s Cereal Box", 
        slug: "80s-cereal-boxes",
        heroImage: "80s-cereal-box_dpluxh",
        images: [
          "80s-cereal-box_dpluxh",
          "80s-cereal-box_dpluxh",
          "80s-cereal-box_dpluxh",
        ],
      },
      { 
        name: "Funny Cereal Box", 
        slug: "funny-cereal-boxes",
        heroImage: "Funny-cereal-box_ynsyyg",
        images: [
          "Funny-cereal-box_ynsyyg",
          "Funny-cereal-box_ynsyyg",
          "Funny-cereal-box_ynsyyg",
        ],
      },
    ],
  },
  {
    name: "Pre Roll Boxes",
    slug: "pre-roll-boxes-industry",
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "shipping-box_jyysru",
    subcategoriesCount: 5,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cannabis Pre Roll Packaging",
        slug: "cannabis-pre-roll-packaging",
        heroImage: "Cannabis-Pre-Roll-Packaging_w1dm9t",
        images: [
          "Cannabis-Pre-Roll-Packaging-1_iwxbqt",
          "Cannabis-Pre-Roll-Packaging-2_vlnqpu",
          "Cannabis_Pre_Roll_Packaging_fzmkfa",
        ],
      },
      {
        name: "Pre Roll Display Box",
        slug: "pre-roll-display-boxes",
        heroImage: "Pre-Roll-Display-Boxes_mkfej7",
        images: [
          "Pre-Roll-Display-Boxes-1_qf9sgg",
          "Pre-Roll-Display-Boxes-2_bswtk9",
          "Pre_Roll_Display_Boxes_niltfg",
        ],
      },
      {
        name: "Custom Delta 8 Box",
        slug: "custom-delta-8-boxes",
        heroImage: "Custom-Delta-8-Boxes_zmdrpu",
        images: [
          "Custom-Delta-8-Boxes-1_iieydw",
          "Custom-Delta-8-Boxes-2_cyzw04",
          "Custom-Delta-8-Boxes-2_cyzw04",
        ],
      },
      {
        name: "Pre Roll Packaging Labels",
        slug: "pre-roll-packaging-labels",
        heroImage: "Pre-Roll-Packaging-Labels_tsao4v",
        images: [
          "Pre-Roll-Packaging-Labels-1_p1slxf",
          "Pre-Roll-Packaging-Labels-2_cdbzeo",
          "Pre_Roll_Packaging_Labels_x5wguw",
        ],
      },
      {
        name: "Luxury Pre Roll Packaging",
        slug: "luxury-pre-roll-packaging",
        heroImage: "Luxury-Pre-Roll-Packaging_xxqtdu",
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
    description: "Explore custom packaging boxes designed for every type of industry. Each box is crafted to match your product's needs, offering style, strength, and perfect presentation.",
    image: "Box-4_lztqi7",
    subcategoriesCount: 6,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "White Pizza Box",
        slug: "white-pizza-boxes",
        heroImage: "White-pizza-box-2_powwla",
        images: [
          "White_pizza_box1_j9xiwv",
          "White_pizza_box_2_eaprps",
          "White_pizza_box3_watoz1",
        ],
      },
      {
        name: "Pizza Slice Box",
        slug: "pizza-slice-boxes",
        heroImage: "pizza-slice-box-2_vgldo5",
        images: [
          "pizza_slice_box_1_arltc8",
          "pizza_slice_box_2_ns01zp",
          "pizza_slice_box_3_xitide",
        ],
      },
      {
        name: "Round Pizza Box",
        slug: "round-pizza-boxes",
        heroImage: "Round-pizza-box-1_cykuw4",
        images: [
          "Round_pizza_box_1_zph3s4",
          "Round_pizza_box_2_hzilly",
          "Round_pizza_box_3_tf8xj9",
        ],
      },
      {
        name: "Rectangle Pizza Box",
        slug: "rectangle-pizza-boxes",
        heroImage: "Rectangle-pizza-box-1_wlhasi",
        images: [
          "Rectangle_pizza_box_1_cxt3xt",
          "Rectangle_pizza_box_2_arhd6f",
          "Rectangle_pizza_box_3_i88r0u",
        ],
      },
      {
        name: "Flatbread Pizza Box",
        slug: "flatbread-pizza-boxes",
        heroImage: "flatbread-pizza-box-3_uu3ocb",
        images: [
          "flatbread_pizza_box_1_hnnim5",
          "flatbread_pizza_box_2_gibmxc",
          "flatbread_pizza_box_3_nuevbk",
        ],
      },
      {
        name: "Blank Pizza Box",
        slug: "blank-pizza-boxes",
        heroImage: "16-inch-pizza-box-1_xedomr",
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
