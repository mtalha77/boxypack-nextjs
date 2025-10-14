export interface MaterialSubCategory {
  name: string;
  slug: string;
  description?: string;
  modelPath?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
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
    description: "Premium luxury packaging with superior strength and durability for high-end products",
    image: "Mailer-Box-3_oct2ws",
    subcategoriesCount: 5,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Magnetic Closure Rigid Box", slug: "magnetic-closure-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Two Piece Rigid Boxes", slug: "two-piece-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Sliding / sleeve Rigid Boxes (Match Style Boxes)", slug: "sliding-sleeve-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Brief Case Style", slug: "brief-case-style", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Book Style Rigid Boxes", slug: "book-style-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  },
  {
    name: "Kraft Boxes",
    slug: "kraft-boxes",
    description: "Eco-friendly kraft paper packaging solutions with natural appeal and sustainability",
    image: "Mailer-Box-2_ysut1i",
    subcategoriesCount: 18,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { 
        name: "Kraft Mailer Box", 
        slug: "kraft-mailer-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Mailer-Box_ximzdy", "Mailer-Box-2_sdcq5v", "Mailer-Box-3_xvwc3h"]
      },
      { 
        name: "Kraft Box with Lid", 
        slug: "kraft-box-with-lid", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Boxes-With-Lid_bvvlo5", "Kraft-Boxes-With-Lid-2_nht4ru", "Kraft-Boxes-With-Lid-3_bbjahp"]
      },
      { 
        name: "Kraft Pillow Box", 
        slug: "kraft-pillow-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Pillow-Soap-Box_qgyxg3", "Kraft-Pillow-Soap-Box-2_fxvtv9", "Kraft-Pillow-Soap-Box-3_ehvr1d"]
      },
      { 
        name: "Kraft Gable Box", 
        slug: "kraft-gable-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Gable-Box_i0vbt9", "Kraft-Gable-Box-2_skatu5", "Kraft-Gable-Box-3_dduloq"]
      },
      { 
        name: "Kraft Bakery / Cake Box", 
        slug: "kraft-bakery-cake-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Bakery-Cake-Box_lbrpz8", "Kraft-Bakery-Cake-Box-2_pubkwi", "Kraft-Bakery-Cake-Box-3_hykgm5"]
      },
      { 
        name: "Kraft Sleeve Box", 
        slug: "kraft-sleeve-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Sleeve-Box_zebf6i", "Kraft-Sleeve-Box-2_tcarov", "Kraft-Sleeve-Box-3_fzzo68"]
      },
      { 
        name: "Kraft TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box", 
        slug: "kraft-tuck-end-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Tuck-End-Box_xot1ve", "Kraft-Tuck-End-Box-2_fqtnjo", "Kraft-Tuck-End-Box-3_alj9hw"]
      },
      { 
        name: "Kraft Five Panel Hanger Box", 
        slug: "kraft-five-panel-hanger-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Five-Panel-Hanger-Box_vqaq1b", "Kraft-Five-Panel-Hanger-Box-2_z2kzej", "Kraft-Five-Panel-Hanger-Box-3_uthtgn"]
      },
      { 
        name: "Kraft Side Lock Six Corner Box", 
        slug: "kraft-side-lock-six-corner-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Side-Lock-Six-Corners_xyy2gh", "Kraft-Side-Lock-Six-Corners-2_wupuaa", "Kraft-Side-Lock-Six-Corners-3_ymwf5d"]
      },
      { 
        name: "Kraft Regular Six Corner Box", 
        slug: "kraft-regular-six-corner-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Regular-Six-Corner-Box_r2wkgt", "Kraft-Regular-Six-Corner-Box-2_ojhutw", "Kraft-Regular-Six-Corner-Box-3_y9bu3j"]
      },
      { 
        name: "Kraft Seal End Auto Bottom Box", 
        slug: "kraft-seal-end-auto-bottom-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Seal-End-Auto-Bottom-Box_gddrys", "Kraft-Seal-End-Auto-Bottom-Box-2_xrhibj", "Kraft-Seal-End-Auto-Bottom-Box-3_az42hj"]
      },
      { 
        name: "Kraft single wall Auto Bottom Tray", 
        slug: "kraft-single-wall-auto-bottom-tray", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Single-Wall-Auto-Bottom-Tray_cxpl8m", "Kraft-Single-Wall-Auto-Bottom-Tray-2_rd54qx", "Kraft-Single-Wall-Auto-Bottom-Tray-3_zgcisf"]
      },
      { 
        name: "Kraft Two Piece Box", 
        slug: "kraft-two-piece-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Two-Piece-Box_i0ua2d", "Kraft-Two-Piece-Box-2_utl6ru", "Kraft-Two-Piece-Box-3_dpm4f9"]
      },
      { 
        name: "Kraft Ciggeret Box", 
        slug: "kraft-cigarette-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Cigarette-Box_gqxdr7", "Kraft-Cigarette-Box-2_gzm2wx", "Kraft-Cigarette-Box-3_nbh68t"]
      },
      { 
        name: "Kraft Bookend Box", 
        slug: "kraft-bookend-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Bookend-Box_tlixms", "Kraft-Bookend-Box-2_jyspg3", "Kraft-Bookend-Box-3_ikjeez"]
      },
      { 
        name: "Kraft Dispenser Box", 
        slug: "kraft-dispenser-box", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Dispenser-Box_mxxcxq", "Kraft-Dispenser-Box-2_i0xyix", "Kraft-Dispenser-Box-3_y48ynq"]
      },
      { 
        name: "Kraft Double Wall Frame Tray", 
        slug: "kraft-double-wall-frame-tray", 
        modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
        images: ["Kraft-Double-Wall-Frame-Tray_i8lzim", "Kraft-Double-Wall-Frame-Tray-2_navrvz", "Kraft-Double-Wall-Frame-Tray-3_utgimb"]
      }
    ]
  },
  {
    name: "Cardboard Boxes",
    slug: "cardboard-boxes",
    description: "Versatile cardboard packaging for all industries with excellent customization options",
    image: "Mailer-Box_1_ujqhhx",
    subcategoriesCount: 20,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Cardboard DISPLAY BOX", slug: "cardboard-display-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box", slug: "cardboard-tuck-end-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Box with Lid", slug: "cardboard-box-with-lid", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Gable Box", slug: "cardboard-gable-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Cake / Bakery Box", slug: "cardboard-cake-bakery-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Sleeve Box", slug: "cardboard-sleeve-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Dispenser Box", slug: "cardboard-dispenser-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Five Panel Hanger", slug: "cardboard-five-panel-hanger", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Mailer Boxes", slug: "cardboard-mailer-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Double Locked Wall Lid Box", slug: "cardboard-double-locked-wall-lid-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Side Lock Six Corner Box", slug: "cardboard-side-lock-six-corner-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Regular Six Corner Box", slug: "cardboard-regular-six-corner-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Seal End Auto Bottom Box", slug: "cardboard-seal-end-auto-bottom-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Auto Bottom Tray", slug: "cardboard-auto-bottom-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Two Piece Box", slug: "cardboard-two-piece-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Ciggeret Box", slug: "cardboard-cigarette-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Bookend Box", slug: "cardboard-bookend-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Double Wall Frame Tray", slug: "cardboard-double-wall-frame-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  },
  {
    name: "Corrugated Boxes",
    slug: "corrugated-boxes",
    description: "Strong corrugated packaging for shipping and storage with maximum protection",
    image: "Mailer-Box-3_oct2ws",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Corrugated Mailer Box", slug: "corrugated-mailer-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Gable Box", slug: "corrugated-gable-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Double Locked Wall Lid Box", slug: "corrugated-double-locked-wall-lid-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Seal End Auto Bottom Box", slug: "corrugated-seal-end-auto-bottom-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Auto Bottom Tray", slug: "corrugated-auto-bottom-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Two Piece Box", slug: "corrugated-two-piece-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Brief Case Style Box", slug: "corrugated-brief-case-style-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Full Flap Shipping Box", slug: "corrugated-full-flap-shipping-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  }
];

export default productByMaterialData;
