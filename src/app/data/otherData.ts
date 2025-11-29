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
      description: "Custom booklets and brochures for product information and marketing",
      images: ["Booklets_rk9jxn", "Booklets-2_t7ifqc", "Booklets-3_e7bsfm"]
    },
    { 
      name: "Brochures", 
      slug: "brochures",
      description: "Professional brochures with custom design and printing",
      images: ["Brochures_ihvotd", "Brochures-2_rxbt0j", "Brochures-3_sp6wpv"]
    },
    { 
      name: "Tags Printing", 
      slug: "tags-printing",
      description: "Custom tags and labels for product identification and branding",
      images: ["Tags-Printing_gheoix", "Tags-Printing-2_b84ncb", "Tags-Printing-3_kcjrzf"]
    },
    { 
      name: "Business Cards", 
      slug: "business-cards",
      description: "Professional business cards with custom design and premium materials",
      images: ["Business-Cards_nba3uj", "Business-Cards-2_pnkida", "Business-Cards-3_mehmvi"]
    },
    { 
      name: "Custom Tissue Paper", 
      slug: "custom-tissue-paper",
      description: "Branded tissue paper for elegant product wrapping and protection",
      heroImage: "Custom-Tissue-Paper_pa1tut", // Keep the original hero image
      images: ["Custom-Tissue-Paper-1_qdtevx", "Custom-Tissue-Paper-2_toxgdp", "Custom-Tissue-Paper-3_ffdrzw"]
    },
    { 
      name: "Butter Paper", 
      slug: "butter-paper",
      description: "Food-safe butter paper for bakery and food packaging",
      images: ["Butter-Paper_iuecc9", "Butter-Paper-2_lc0qxj", "Butter-Paper-3_vywz02"]
    },
    { 
      name: "Product Labels & Bottle Labels", 
      slug: "product-labels-bottle-labels",
      description: "Custom labels for bottles and products with various materials and finishes",
      images: ["Product-Bottle-Label_fwz686", "Product-Bottle-Label-2_vhwbzc", "Product-Bottle-Label-3_ivtxhz"]
    },
    { 
      name: "Table Tents", 
      slug: "table-tents",
      description: "Table tent displays for restaurants and promotional events",
      images: ["Table-Tent_pdkiib", "Table-Tent-2_rulauz", "Table-Tent-3_mstat3"]
    },
    { 
      name: "Packing Tape", 
      slug: "packing-tape",
      description: "Custom printed packing tape for secure box sealing and branding",
      images: ["Packing-Tape_ms9tyh", "Packing-Tape-2_zwedrr", "Packing-Tape-3_hgqlnx"]
    }
  ]
};

export default otherData;
