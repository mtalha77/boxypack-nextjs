export interface MaterialSubCategory {
  name: string;
  slug: string;
  description?: string;
  modelPath?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
  heroImage?: string; // Separate hero image for hero section only
}

export interface MaterialCategory {
  name: string;
  slug: string;
  description: string;
  subcategories: MaterialSubCategory[];
  image: string;
  subcategoriesCount: number;
  modelPath: string;
}

export const productByMaterialData: MaterialCategory[] = [
  {
    name: "Rigid Boxes",
    slug: "rigid-boxes",
    description:
      "Rigid boxes are designed that add luxury and strength to every product.",
    image: "Mailer-Box-3_oct2ws",
    subcategoriesCount: 5,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Magnetic Closure Rigid Box",
        slug: "magnetic-closure-rigid-box",
        description: "We offer magnetic closure rigid boxes wholesale in various shapes, finishes, and closure types. Our range includes collapsible magnetic boxes, luxury foldable designs, and rigid magnetic gift boxes for every purpose. Each box is made with sustainable materials, sharp edges, and clean alignment, perfect for retail, e-commerce, or gifting.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Magnetic-Closure-Rigid-Box_bqpmlh",
          "Magnetic-Closure-Rigid-Box-2_qinyd2",
          "Magnetic-Closure-Rigid-Box-3_f4sxvc",
        ],
      },
      {
        name: "Two Piece Rigid Boxes",
        slug: "two-piece-rigid-boxes",
        description: "We offer two-piece rigid boxes wholesale for retail, luxury, and gifting needs. Choose from square, rectangular, or deep-lid versions in multiple finishes and colors. Each box is designed for secure fit, clean appearance, and timeless style — perfect for jewelry, electronics, and fashion packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Rigid-Two-Piece-Box-3_z3smid",
          "Rigid-Two-Piece-Box-2_dkn69d",
          "Rigid-Two-Piece-Box-3_skfi7y",
        ],
      },
      {
        name: "Sliding / sleeve Rigid Boxes (Match Style Boxes)",
        slug: "sliding-sleeve-rigid-boxes-match-style-boxes",
        description: "We provide rigid sleeve boxes wholesale in multiple designs, such as pull-out drawer boxes, side sliding cases, and luxury gift sleeves. Each style features a secure fit, elegant finish, and easy-slide functionality that makes unboxing both simple and memorable.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Rigid-Sleeve-Box_lmwuru",
          "Rigid-Sleeve-Box-2_rc58va",
          "Rigid-Sleeve-Box_zjauff",
        ],
      },
      {
        name: "Brief Case Style",
        slug: "brief-case-style",
        description: "We offer rigid briefcase boxes in bulk for all types of luxury packaging needs. Options include magnetic-lock briefcases, ribbon-handle boxes, and foldable styles for easy storage. Each design combines sturdiness, style, and practicality to give your products a premium finish.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Rigid-Briefcase-Box-6_nt8pdn",
          "Rigid-Briefcase-Box-5_nfw98g",
          "Rigid-Briefcase-Box-4_ayv0rk",
        ],
      },
      {
        name: "Book Style Rigid Boxes",
        slug: "book-style-rigid-boxes",
        description: "We offer book-style rigid boxes wholesale in various sizes and finishes to match every brand's style. Choose from ribbon-tie closures, magnetic lids, or foam inserts for added product security. Each box provides an elegant book-like opening experience, perfect for luxury and corporate packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Book-Style-Rigid-Box-4_tcxfx5",
          "Book-Style-Rigid-Box-5_czatkn",
          "Book-Style-Rigid-Box-6_emwmjk",
        ],
      },
    ],
  },
  {
    name: "Kraft Boxes",
    slug: "kraft-boxes",
    description:
      "Simple kraft boxes designed for recyclable and eco-friendly brands with purpose.",
    image: "Mailer-Box-2_ysut1i",
    subcategoriesCount: 18,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Kraft Mailer Box",
        slug: "kraft-mailer-box",
        description: "We offer kraft mailer boxes wholesale in multiple sizes and styles, including tuck-top, self-locking, and foldable mailers. Each design is ideal for shipping small to medium products securely while maintaining a clean, professional appearance. Perfect for e-commerce, retail, and subscription brands that care about eco-friendly packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Mailer-Box-3_fsjn1v",
          "Mailer-Box-2_sdcq5v",
          "Mailer-Box-3_xvwc3h",
        ],
      },
      {
        name: "Kraft Box with Lid",
        slug: "kraft-box-with-lid",
        description: "We offer kraft packaging boxes with covers wholesale in a wide range of sizes and styles. Choose from flat-lid boxes, deep-lid storage boxes, or decorative printed boxes for retail and gifting. Every design features sturdy kraft board, sustainable material, and professional printing. Perfect for bakeries, boutiques, and eco-conscious brands that want clean, simple packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Boxes-With-Lid-2_wie1hk",
          "Kraft-Boxes-With-Lid-2_nht4ru",
          "Kraft-Boxes-With-Lid-3_bbjahp",
        ],
      },
      {
        name: "Kraft Pillow Box",
        slug: "kraft-pillow-box",
        description: "Premium kraft pillow boxes designed for eco-friendly packaging solutions.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Pillow-Soap-Box_xbqtmz",
          "Kraft-Pillow-Soap-Box-2_fxvtv9",
          "Kraft-Pillow-Soap-Box-3_ehvr1d",
        ],
      },
      {
        name: "Kraft Gable Box",
        slug: "kraft-gable-box",
        description: "We offer kraft gable favor boxes wholesale in multiple sizes and finishes. From small favor boxes for weddings to large gable boxes for bakeries and retail packaging, each piece is crafted for durability and presentation. You can also choose natural brown, white, or full-color printed versions for an enhanced brand look.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Gable-Box-3_b5lql7",
          "Kraft-Gable-Box-2_skatu5",
          "Kraft-Gable-Box-3_dduloq",
        ],
      },
      {
        name: "Kraft Bakery / Cake Box",
        slug: "kraft-bakery-cake-box",
        description: "We offer kraft cake packaging boxes bulk in multiple sizes and styles to suit cakes, pastries, donuts, or cupcakes. Choose from standard lid boxes, window display boxes, or printed branding options. Every box is built to keep your treats fresh while enhancing shelf appeal for bakeries, cafes, and dessert businesses.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Bakery-Cake-Box-2_sfslom",
          "Kraft-Bakery-Cake-Box-2_pubkwi",
          "Kraft-Bakery-Cake-Box-3_hykgm5",
        ],
      },
      {
        name: "Kraft Sleeve Box",
        slug: "kraft-sleeve-box",
        description: "We offer kraft sleeve boxes wholesale in a variety of designs including sliding, drawer, and two-piece styles. Choose from plain natural brown sleeves for a rustic look or printed versions for a professional finish. Every sleeve is crafted with precision and eco-friendly materials to protect your products and elevate presentation.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Sleeve-Box-3_dmtnnt",
          "Kraft-Sleeve-Box-2_tcarov",
          "Kraft-Sleeve-Box-3_fzzo68",
        ],
      },
      {
        name: "Kraft TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box",
        slug: "kraft-tuck-end-box",
        description: "We offer custom kraft tuck end boxes wholesale in both straight and reverse tuck styles. These versatile boxes are great for cosmetics, food items, retail accessories, and shipping goods. Choose from plain kraft designs for a rustic feel or printed versions for branded elegance every option is sustainable, secure, and stylish.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Tuck-End-Box-3_qffcmq",
          "Kraft-Tuck-End-Box-2_fqtnjo",
          "Kraft-Tuck-End-Box-3_alj9hw",
        ],
      },
      {
        name: "Kraft Five Panel Hanger Box",
        slug: "kraft-five-panel-hanger-box",
        description: "We offer eco kraft hanger boxes wholesale in a variety of styles, including window display boxes, reverse tuck hanger boxes, and straight tuck-end designs. Each box combines strength with simplicity, making it ideal for cosmetics, gadgets, small tools, or healthcare products. Our boxes are lightweight, easy to assemble, and built for maximum shelf appeal.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Five-Panel-Hanger-Box_epppdd",
          "Kraft-Five-Panel-Hanger-Box-2_z2kzej",
          "Kraft-Five-Panel-Hanger-Box-3_uthtgn",
        ],
      },
      {
        name: "Kraft Side Lock Six Corner Box",
        slug: "kraft-side-lock-six-corner-box",
        description: "We offer Kraft six-corner box wholesale options in multiple sizes and structural variations. These include foldable bakery-style boxes, shipping boxes, and product display packaging. Designed for durability and elegance, each box provides reliable product protection and a clean, professional look. Perfect for bakeries, clothing brands, and shipping-based businesses that need eco-friendly and easy-to-handle packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Side-Lock-Six-Corners-3_mqzjcy",
          "Kraft-Side-Lock-Six-Corners-2_wupuaa",
          "Kraft-Side-Lock-Six-Corners-3_ymwf5d",
        ],
      },
      {
        name: "Kraft Regular Six Corner Box",
        slug: "kraft-regular-six-corner-box",
        description: "We offer wholesale kraft six-corner packaging in several variants, including standard, side-lock, and collapsible designs. Each box ensures firm product protection and smooth structure for easy setup. These boxes are perfect for bakeries, restaurants, clothing brands, and eco-conscious retailers that need affordable yet durable packaging options.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Regular-Six-Corner-Box-2_pt6dfm",
          "Kraft-Regular-Six-Corner-Box-2_ojhutw",
          "Kraft-Regular-Six-Corner-Box-3_y9bu3j",
        ],
      },
      {
        name: "Kraft Seal End Auto Bottom Box",
        slug: "kraft-seal-end-auto-bottom-box",
        description: "We provide Kraft seal-end auto bottom packaging in multiple variations, including full-seal ends, semi-auto bottoms, and custom-sized models. Each design is engineered for easy packing, fast folding, and reliable closure. These boxes are commonly used in the food, pharmaceutical, and e-commerce industries where packaging time and stability matter most.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Seal-End-Auto-Bottom-Box-3_duhyn6",
          "Kraft-Seal-End-Auto-Bottom-Box-2_xrhibj",
          "Kraft-Seal-End-Auto-Bottom-Box-3_az42hj",
        ],
      },
      {
        name: "Kraft single wall Auto Bottom Tray",
        slug: "kraft-single-wall-auto-bottom-tray",
        description: "We offer brown kraft wall tray packaging wholesale in various styles, from shallow display trays to deep retail boxes. Each tray combines premium craftsmanship and functionality for modern businesses. Ideal for bakeries, gift shops, and eco-focused brands, our designs balance clean presentation with fast usability.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Single-Wall-Auto-Bottom-Tray-2_ld0add",
          "Kraft-Single-Wall-Auto-Bottom-Tray-2_rd54qx",
          "Kraft-Single-Wall-Auto-Bottom-Tray-3_zgcisf",
        ],
      },
      {
        name: "Kraft Two Piece Box",
        slug: "kraft-two-piece-box",
        description: "We offer brown kraft gift boxes in 2-piece style options in various shapes and sizes. From square jewelry boxes to rectangular retail packages, every design offers strong protection and minimalist beauty. These boxes are ideal for apparel, bakery items, or product kits that need elegant yet eco-friendly packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Two-Piece-Box-3_jgfh1p",
          "Kraft-Two-Piece-Box-2_utl6ru",
          "Kraft-Two-Piece-Box-3_dpm4f9",
        ],
      },
      {
        name: "Kraft Ciggeret Box",
        slug: "kraft-cigarette-box",
        description: "We offer recyclable kraft tobacco packaging in multiple formats, including flip-top, slide, and sleeve styles. Each box is made with care to ensure airtight storage, long-lasting durability, and visual consistency. Our boxes are perfect for organic, herbal, or traditional cigarette brands that want natural, eco-friendly packaging to match their identity.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Cigarette-Box-3_raxvw2",
          "Kraft-Cigarette-Box-2_gzm2wx",
          "Kraft-Cigarette-Box-3_nbh68t",
        ],
      },
      {
        name: "Kraft Bookend Box",
        slug: "kraft-bookend-box",
        description: "We offer eco-friendly kraft bookend packaging in various shapes and finishes, including single or double-flap designs. These boxes are widely used for gift packaging, promotional kits, and retail display items. Their smooth closure and flat surface make them ideal for detailed logo printing or artistic product branding.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Bookend-Box_iliytf",
          "Kraft-Bookend-Box-2_jyspg3",
          "Kraft-Bookend-Box-3_ikjeez",
        ],
      },
      {
        name: "Kraft Dispenser Box",
        slug: "kraft-dispenser-box",
        description: "We offer Kraft retail dispenser boxes wholesale in multiple configurations, including tuck-top, slide-open, and front-cut window styles. Each box is designed to keep your products organized, visible, and accessible while maintaining neat presentation. These are commonly used for snacks, tea sachets, gum packs, cosmetics, or medical supplies that require easy dispensing and organized storage.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Dispenser-Box-2_r7fjwi",
          "Kraft-Dispenser-Box-2_i0xyix",
          "Kraft-Dispenser-Box-3_y48ynq",
        ],
      },
      {
        name: "Kraft Double Wall Frame Tray",
        slug: "kraft-double-wall-frame-tray",
        description: "We offer eco-friendly kraft tray box packaging in various depths and styles, including shallow display trays and deep serving options. Each tray ensures sturdiness and smooth edges, making it perfect for bakeries, cafés, or retailers who value quality and visual appeal. Our trays maintain shape under weight, providing strong protection for delicate or premium products.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Kraft-Double-Wall-Frame-Tray_icm4sx",
          "Kraft-Double-Wall-Frame-Tray-2_navrvz",
          "Kraft-Double-Wall-Frame-Tray-3_utgimb",
        ],
      },
    ],
  },
  {
    name: "Cardboard Boxes",
    slug: "cardboard-boxes",
    description:
      "Cardboard boxes are made for printing, fold, and brand for daily use.",
    image: "Mailer-Box_1_ujqhhx",
    subcategoriesCount: 20,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Cardboard DISPLAY BOX",
        slug: "cardboard-display-box",
        description: "We offer wholesale cardboard display boxes for every retail environment. Our collection includes counter display boxes, floor-standing units, and foldable shelf-ready packaging. Each display box provides maximum visibility and easy access, ensuring customers can interact with your product naturally. Whether for cosmetics, food, or promotional items, every design is customizable and ready for branding.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Display-Box-3_cxzebx",
          "Cardboard-Display-Box-2_j5zdky",
          "Cardboard-Display-Box-3_pjfxws",
        ],
      },
      {
        name: "Cardboard TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box",
        slug: "cardboard-tuck-end-box",
        description: "We offer wholesale cardboard tuck-end boxes in various styles: straight tuck-end, reverse tuck-end, and auto-bottom configurations. Each design is made for different packaging needs, from lightweight retail products to heavier goods that require stronger base support. The boxes fold easily, making them ideal for fast packing and efficient storage.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Tuck-End-Box-2_whvfvq",
          "Cardboard-Tuck-End-Box-3_n7j5xn",
          "Cardboard-Tuck-End-Box-4_ynawkz",
        ],
      },
      {
        name: "Cardboard Box with Lid",
        slug: "cardboard-box-with-lid",
        description: "We offer wholesale cardboard boxes with lids in a variety of styles, from sturdy storage boxes to decorative retail packaging. Choose between rigid lid boxes, collapsible versions, or eco kraft options to suit your brand's needs. Each design provides strong protection, elegant looks, and an enjoyable unboxing experience that enhances your product's value.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Boxes-With-Lid-5_hppga9",
          "Cardboard-Boxes-With-Lid-6_q1pczw",
          "Cardboard-Boxes-With-Lid-7_x4oayb",
        ],
      },
      {
        name: "Cardboard Gable Box",
        slug: "cardboard-gable-box",
        description: "We offer wholesale cardboard gable boxes in multiple configurations, from small favor boxes to large catering containers. Choose eco kraft gable packaging for bakery goods, printed boxes for branding, or laminated finishes for premium gifts. Each gable box is easy to assemble, lightweight to carry, and durable enough for transportation and display.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Gable-Box_fszsgj",
          "Cardboard-Gable-Box-2_jdvkon",
          "Cardboard-Gable-Box-3_qsrz2w",
        ],
      },
      {
        name: "Cardboard Cake / Bakery Box",
        slug: "cardboard-cake-bakery-box",
        description: "We provide wholesale cardboard bakery boxes in a wide selection of shapes and designs, including single-cake boxes, cupcake holders, and dessert trays. Optional windows allow customers to see your products clearly, while food-safe coatings keep baked goods fresh. Our boxes are ideal for bakeries, cafes, restaurants, and event caterers who want professional, hygienic, and beautiful packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Bakery-Box-2_qmehj6",
          "Cardboard-Bakery-Box-2_kmm11c",
          "Cardboard-Bakery-Box-3_laq1ub",
        ],
      },
      {
        name: "Cardboard Sleeve Box",
        slug: "cardboard-sleeve-box",
        description: "We offer wholesale cardboard sleeve boxes in multiple variations, including kraft sleeve packaging, printed retail sleeves, and two-piece drawer sleeves. Available in different sizes and finishes, our sleeves fit everything from perfume boxes to bakery trays. Whether used for branding, protection, or gifting, each sleeve is designed for elegance and efficiency.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Sleeve-Box-2_f8vgks",
          "Cardboard-Sleeve-Box-2_bdtbh6",
          "Cardboard-Sleeve-Box-3_vdeo0y",
        ],
      },
      {
        name: "Cardboard Dispenser Box",
        slug: "cardboard-dispenser-box",
        description: "Premium cardboard dispenser boxes designed for organized product display and easy access.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Dispenser-Box-6_kkywm0",
          "Cardboard-Dispenser-Box-4_e8u5sg",
          "Cardboard-Dispenser-Box-5_xlwpq6",
        ],
      },
      {
        name: "Cardboard Five Panel Hanger",
        slug: "cardboard-five-panel-hanger",
        description: "We offer wholesale five panel hanger boxes in multiple variations, including windowed, sealed-end, and tuck-end styles. Whether used for hanging electronics, small toys, skincare products, or retail accessories, our range delivers strength, precision, and brand visibility. Every design is crafted to hang easily while ensuring your product stays secure and visible from every angle.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Fiver-Panel-Hanger-3_ci5geu",
          "Cardboard-Fiver-Panel-Hanger-2_xyltfq",
          "Cardboard-Fiver-Panel-Hanger-3_rl2s9r",
        ],
      },
      {
        name: "Cardboard Mailer Boxes",
        slug: "cardboard-mailer-boxes",
        description: "We offer wholesale cardboard mailer boxes in multiple types, including corrugated e-commerce mailers, kraft subscription boxes, and retail mailer packaging. Each style is designed for easy shipping, unboxing, and branding. From small cosmetic deliveries to large apparel shipments, BoxyPack delivers sturdy mailers that look sharp and ship smart.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Mailer-Box-4_asfsgu",
          "Cardboard-Mailer-Box-4-2_vevgmw",
          "Cardboard-Mailer-Box-4-3_a9tmlk",
        ],
      },
      {
        name: "Cardboard Double Locked Wall Lid Box",
        slug: "cardboard-double-locked-wall-lid-box",
        description: "We offer wholesale double-lock wall lid boxes for various industries, including retail, beauty, tech, and gift packaging. Available in both custom-printed and plain kraft versions, our range includes strong, reusable structures that deliver a luxurious unboxing experience. Each design focuses on durability, precise locking, and smooth surface finishes for a flawless look.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Double-Locked-Wall-Lid-Box-2_e7kzof",
          "Cardboard-Double-Locked-Wall-Lid-Box-2_duwprm",
          "Cardboard-Double-Locked-Wall-Lid-Box-3_jhk6fx",
        ],
      },
      {
        name: "Cardboard Side Lock Six Corner Box",
        slug: "cardboard-side-lock-six-corner-box",
        description: "We offer wholesale six-corner boxes in a wide range of sizes and styles. Choose from kraft, white, or printed options to suit your brand. Perfect for bakeries, apparel brands, and gift packaging, our range includes collapsible and reusable variants. Every box combines durability with a premium finish, giving your products a stylish presentation and reliable protection.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Side-Lock-Six-Corners-5_uosf0a",
          "Cardboard-Side-Lock-Six-Corners-4_fty3sp",
          "Cardboard-Side-Lock-Six-Corners-5_uosf0a",
        ],
      },
      {
        name: "Cardboard Regular Six Corner Box",
        slug: "cardboard-regular-six-corner-box",
        description: "We offer wholesale regular six-corner boxes in multiple designs, including plain kraft styles for eco packaging and fully printed versions for retail branding. Perfect for food, clothing, cosmetics, and gift packaging, these boxes combine functionality with elegance. Every design is made to fold quickly, stack neatly, and hold products securely.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Regular-Six-Corner-Box-5_c0lco6",
          "Cardboard-Regular-Six-Corner-Box-4_zjdxp8",
          "Cardboard-Regular-Six-Corner-Box-6_szsrxg",
        ],
      },
      {
        name: "Cardboard Seal End Auto Bottom Box",
        slug: "cardboard-seal-end-auto-bottom-box",
        description: "We offer wholesale seal-end auto bottom boxes in multiple sizes and finishes to fit different industries. From retail cartons and food packaging to beauty and medicine boxes, our range ensures durability and functionality. Each design is built to assemble instantly and stay locked during storage, transport, and display.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Seal-End-Auto-Bottom-Box-2_x613gi",
          "Cardboard-Seal-End-Auto-Bottom-Box-2_vbr7ey",
          "Cardboard-Seal-End-Auto-Bottom-Box-3_eclhpy",
        ],
      },
      {
        name: "Cardboard Auto Bottom Tray",
        slug: "cardboard-auto-bottom-tray",
        description: "We offer wholesale auto bottom trays for different industries and products. Choose from kraft trays for eco brands, printed trays for retail presentation, or sturdy corrugated options for food and bakery packaging. Each tray design is built for speed, strength, and aesthetic value, helping your business package products efficiently and professionally.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        heroImage: "Cardboard-Auto-Bottom-Tray-Box_pz8uqc",
        images: [
          "Cardboard-Auto-Bottom-Tray-Box_w6twmi",
          "Cardboard-Auto-Bottom-Tray-Box-2_bijpv3",
          "Cardboard-Auto-Bottom-Tray-Box-3_s9pof8",
        ],
      },
      {
        name: "Cardboard Two Piece Box",
        slug: "cardboard-two-piece-box",
        description: "We offer wholesale two-piece boxes in various shapes, sizes, and finishes. Choose from plain kraft for eco-friendly appeal or printed designs for a luxurious touch. These boxes are widely used in gift packaging, apparel, and retail display. Every piece combines durability, smooth texture, and refined detail to enhance your brand's packaging experience.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Two-Piece-Box-2_lsmwlw",
          "Cardboard-Two-Piece-Box-2_extr0a",
          "Cardboard-Two-Piece-Box-3_rdik18",
        ],
      },
      {
        name: "Cardboard Ciggeret Box",
        slug: "cardboard-cigarette-box",
        description: "We provide wholesale cigarette boxes in multiple sizes and finishes to suit every brand type. From classic flip-top designs to innovative slider packs, our collection offers style and strength. Choose from full-color printed designs for retail packaging or simple kraft finishes for eco-conscious brands. Every box is crafted to maintain product freshness while promoting a professional image.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Cigarette-Box-3_mzrl5t",
          "Cardboard-Cigarette-Box-2_u8kwgd",
          "Cardboard-Cigarette-Box-3_pstdkr",
        ],
      },
      {
        name: "Cardboard Bookend Box",
        slug: "cardboard-bookend-box",
        description: "We offer wholesale bookend boxes in multiple finishes, colors, and configurations. From rigid luxury bookend packaging to foldable eco variants, our range fits products of every size and purpose. Whether used for retail shelves or e-commerce deliveries, each box ensures strong protection and a premium presentation experience.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Bookend-Box-4_icshcy",
          "Cardboard-Bookend-Box-5_n18paf",
          "Cardboard-Bookend-Box-4_icshcy",
        ],
      },
      {
        name: "Cardboard Double Wall Frame Tray",
        slug: "cardboard-double-wall-frame-tray",
        description: "We provide wholesale double-wall frame trays in multiple sizes, shapes, and finishes. Choose from natural kraft trays for eco branding, printed trays for retail display, or rigid options for luxury packaging. Perfect for apparel, food, accessories, or stationery, each design offers strength, precision, and premium visual balance that suits any market.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Double-Wall-Frame-Tray-2_wewlf5",
          "Cardboard-Double-Wall-Frame-Tray-2_yd79q0",
          "Cardboard-Double-Wall-Frame-Tray-3_o5ngo8",
        ],
      },
    ],
  },
  {
    name: "Corrugated Boxes",
    slug: "corrugated-boxes",
    description:
      "Heavy-duty custom boxes are built to protect during every shipment.",
    image: "Mailer-Box-3_oct2ws",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      {
        name: "Corrugated Mailer Box",
        slug: "corrugated-mailer-box",
        description: "We supply corrugated mailer boxes in multiple sizes, finishes, and colors. Choose from kraft mailers for natural branding, white mailers for minimal packaging, or printed corrugated mailers for full-color impact. Each option is crafted to offer premium protection, smooth edges, and consistent folding lines for effortless packing and elegant unboxing.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Corrugated-Mailer-Box_l76kbu",
          "Corrugated-Mailer-Box-2_e8qndt",
          "Corrugated-Mailer-Box-3_o6iwa9",
        ],
      },
      {
        name: "Corrugated Gable Box",
        slug: "corrugated-gable-box",
        description: "We manufacture corrugated gable boxes in a wide variety of shapes, sizes, and finishes. From natural kraft gable boxes for eco-friendly brands to printed corrugated gable boxes for food packaging, every design delivers easy handling, reliable structure, and strong shelf appeal. Perfect for bakeries, takeaway meals, party favors, and product packaging that demands both form and function.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Corrugated-Gable-Box_bgw1d2",
          "Corrugated-Gable-Box-2_pvwa1v",
          "Corrugated-Gable-Box-3_tkqkvz",
        ],
      },
      {
        name: "Corrugated Double Locked Wall Lid Box",
        slug: "corrugated-double-locked-wall-lid-box",
        description: "We supply corrugated double locked wall lid boxes in multiple sizes, finishes, and color variations. Choose Kraft boxes for a natural texture, coated options for smooth branding, or heavy-duty corrugated styles for superior strength. Each box is engineered for easy assembly, clean appearance, and secure product holding, ideal for retail, gifting, and industrial packaging.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Corrugated-Double-Locked-Wall-Lid-Box_k0diqt",
          "Corrugated-Double-Locked-Wall-Lid-Box-2_f7clse",
          "Corrugated-Double-Locked-Wall-Lid-Box-3_agimre",
        ],
      },
      {
        name: "Corrugated Seal End Auto Bottom Box",
        slug: "corrugated-seal-end-auto-bottom-box",
        description: "We supply a diverse range of corrugated seal-end auto bottom boxes designed for multiple industries. Choose natural kraft for organic appeal, white corrugated for clean branding, or fully printed designs for high-impact retail packaging. Each box offers durability, quick assembly, and a strong base that makes it perfect for storage, shipping, and display.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Cardboard-Seal-End-Auto-Bottom-Box-2_vbr7ey",
          "Cardboard-Seal-End-Auto-Bottom-Box-3_eclhpy",
          "Cardboard-Seal-End-Auto-Bottom-Box_ira5ep",
        ],
      },
      {
        name: "Corrugated Auto Bottom Tray",
        slug: "corrugated-auto-bottom-tray",
        description: "We supply corrugated auto bottom trays in various styles, sizes, and materials. Choose Kraft trays for eco-friendly packaging, white trays for retail presentation, or printed trays for marketing appeal. Each design combines speed of setup, durable construction, and a professional look that enhances product visibility and shipping efficiency.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Corrugated-Auto-Bottom-Tray-Box-2_u5lib0",
          "Corrugated-Auto-Bottom-Tray-Box-2_tekh43",
          "Corrugated-Auto-Bottom-Tray-Box-3_nps8rt",
        ],
      },
      {
        name: "Corrugated Two Piece Box",
        slug: "corrugated-two-piece-box",
        description: "We offer corrugated two-piece boxes in multiple sizes, depths, and finish styles. Whether you need minimalist kraft boxes, glossy printed packaging, or soft-touch luxury options, each is crafted for strength, alignment, and aesthetic appeal. These boxes are perfect for apparel, bakery items, tech accessories, and branded gift sets.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Corrugated-Two-Piece-Box_yl9czl",
          "Corrugated-Two-Piece-Box-2_kffens",
          "Corrugated-Two-Piece-Box-3_nqztgz",
        ],
      },
      {
        name: "Corrugated Brief Case Style Box",
        slug: "corrugated-brief-case-style-box",
        description: "We offer corrugated briefcase boxes in multiple configurations, sizes, and print styles. From Kraft options for natural branding to printed versions for promotional kits, each is made for strength, portability, and refined display. Ideal for product samples, marketing presentations, or retail sales packaging, these boxes combine protection and style that support every professional need.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Corrugated-Briefcase-Box_sip8df",
          "Corrugated-Briefcase-Box-2_ccksdb",
          "Corrugated-Briefcase-Box-3_dmkgh3",
        ],
      },
      {
        name: "Corrugated Full Flap Shipping Box",
        slug: "corrugated-full-flap-shipping-box",
        description: "We offer corrugated full flap shipping boxes in multiple sizes, flute types, and finishes. Choose Kraft boxes for industrial shipping, printed boxes for retail deliveries, or heavy-duty options for extra strength. Each design provides a tight seal, smooth exterior, and strong corners for reliable stacking and long-distance transport.",
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: [
          "Corrugated-Full-Flap-Shipping-Box_bidumo",
          "Corrugated-Full-Flap-Shipping-Box-2_tqxirb",
          "Corrugated-Full-Flap-Shipping-Box-3_lo3cv7",
        ],
      },
    ],
  },
];

export default productByMaterialData;
