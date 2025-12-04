export interface OtherSubCategory {
  name: string;
  slug: string;
  description?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
  heroImage?: string; // Hero image for hero section (separate from images array)
}

export interface OtherCategory {
  name: string;
  slug: string;
  description: string;
  subcategories: OtherSubCategory[];
  image: string;
  subcategoriesCount: number;
  modelPath: string;
}

export const otherData: OtherCategory = {
  name: "Other",
  slug: "other",
  description: "Additional packaging accessories and printing services for complete packaging solutions",
  image: "products-box-img_x8vu4b",
  subcategoriesCount: 9,
  modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
  subcategories: [
    { 
      name: "Booklets", 
      slug: "booklets",
      description: "We print promotional booklets, catalogs, instruction booklets, brand manuals, event programs, real estate booklets, training guides, corporate brochures, product catalogs, spiral notebooks, and wholesale booklet bundles. Ideal for agencies, brands, educational institutions, and retailers.",
      images: ["Booklets_rk9jxn", "Booklets-2_t7ifqc", "Booklets-3_e7bsfm"]
    },
    { 
      name: "Brochures", 
      slug: "brochures",
      description: "We produce tri-fold brochures, bi-fold brochures, luxury brochures, real estate brochures, product showcase brochures, corporate brochures, event guides, restaurant menus, travel brochures, and wholesale printed brochure bundles. Ideal for agencies, restaurants, real estate teams, brands, schools, and event organizers.",
      images: ["Brochures_ihvotd", "Brochures-2_rxbt0j", "Brochures-3_sp6wpv"]
    },
    { 
      name: "Tags Printing", 
      slug: "tags-printing",
      description: "We manufacture clothing hang tags, kraft tags, jewelry tags, gift tags, luxury coated tags, die-cut tags, logo-branded tags, eco-friendly tags, retail product tags, and wholesale unprinted tag bundles. Perfect for fashion brands, boutiques, retail stores, packaging suppliers, and handmade goods sellers.",
      images: ["Tags-Printing_gheoix", "Tags-Printing-2_b84ncb", "Tags-Printing-3_kcjrzf"]
    },
    { 
      name: "Business Cards", 
      slug: "business-cards",
      description: "We print matte business cards, gloss cards, luxury soft-touch cards, foil business cards, embossed cards, kraft business cards, textured cards, square business cards, metal-finish cards, and wholesale business card bundles. Ideal for entrepreneurs, executives, agencies, consultants, and creative brands.",
      images: ["Business-Cards_nba3uj", "Business-Cards-2_pnkida", "Business-Cards-3_mehmvi"]
    },
    { 
      name: "Custom Tissue Paper", 
      slug: "custom-tissue-paper",
      description: "We produce logo tissue paper, patterned tissue paper, kraft eco tissue, jewelry packaging tissue, boutique tissue paper, premium colored tissue, gift wrapping tissue, apparel tissue sheets, and wholesale custom tissue bundles. Ideal for retailers, fashion brands, gift stores, cosmetic companies, and e-commerce sellers.",
      heroImage: "Custom-Tissue-Paper_pa1tut", // Keep the original hero image
      images: ["Custom-Tissue-Paper-1_qdtevx", "Custom-Tissue-Paper-2_toxgdp", "Custom-Tissue-Paper-3_ffdrzw"]
    },
    { 
      name: "Butter Paper", 
      slug: "butter-paper",
      description: "We supply white butter paper, kraft butter paper, printed food wrapping sheets, restaurant logo paper, sandwich wrap paper, bakery butter paper, burger wrap sheets, and wholesale custom-printed butter paper bundles. Ideal for cafes, bakeries, restaurants, fast-food chains, and premium food brands.",
      images: ["Butter-Paper_iuecc9", "Butter-Paper-2_lc0qxj", "Butter-Paper-3_vywz02"]
    },
    { 
      name: "Product Labels & Bottle Labels", 
      slug: "product-labels-bottle-labels",
      description: "We manufacture waterproof bottle labels, cosmetic jar labels, candle labels, food container labels, supplement labels, skincare labels, transparent labels, eco kraft labels, wrap-around bottle labels, and wholesale unprinted label rolls. Ideal for food brands, beauty companies, beverage manufacturers, wellness brands, and retail packaging suppliers.",
      images: ["Product-Bottle-Label_fwz686", "Product-Bottle-Label-2_vhwbzc", "Product-Bottle-Label-3_ivtxhz"]
    },
    { 
      name: "Table Tents", 
      slug: "table-tents",
      description: "We manufacture menu table tents, hotel table tents, QR code tents, promotional table tents, bar and café table tents, retail display tents, luxury laminated table tents, event tents, and wholesale unprinted tent cards. Ideal for restaurants, cafes, retail stores, salons, hotels, events, and corporate marketing.",
      images: ["Table-Tent_pdkiib", "Table-Tent-2_rulauz", "Table-Tent-3_mstat3"]
    },
    { 
      name: "Packing Tape", 
      slug: "packing-tape",
      description: "We manufacture custom printed packing tape, kraft paper tape, BOPP logo tape, water-activated tape, clear sealing tape, heavy-duty shipping tape, tamper-evident tape, and wholesale branded tape rolls. Ideal for shipping centers, warehouses, retail brands, and e-commerce packaging.",
      images: ["Packing-Tape_ms9tyh", "Packing-Tape-2_zwedrr", "Packing-Tape-3_hgqlnx"]
    }
  ]
};

export default otherData;
