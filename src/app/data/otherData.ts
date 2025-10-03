export interface OtherSubCategory {
  name: string;
  slug: string;
  description?: string;
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
  subcategoriesCount: 8,
  modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
  subcategories: [
    { 
      name: "Booklets", 
      slug: "booklets",
      description: "Custom booklets and brochures for product information and marketing"
    },
    { 
      name: "Brochures", 
      slug: "brochures",
      description: "Professional brochures with custom design and printing"
    },
    { 
      name: "Tags Printing", 
      slug: "tags-printing",
      description: "Custom tags and labels for product identification and branding"
    },
    { 
      name: "Business Cards", 
      slug: "business-cards",
      description: "Professional business cards with custom design and premium materials"
    },
    { 
      name: "Custom Tissue Paper", 
      slug: "custom-tissue-paper",
      description: "Branded tissue paper for elegant product wrapping and protection"
    },
    { 
      name: "Butter Paper", 
      slug: "butter-paper",
      description: "Food-safe butter paper for bakery and food packaging"
    },
    { 
      name: "Product Labels & Bottle Labels", 
      slug: "product-labels-bottle-labels",
      description: "Custom labels for bottles and products with various materials and finishes"
    },
    { 
      name: "Table Tents", 
      slug: "table-tents",
      description: "Table tent displays for restaurants and promotional events"
    },
    { 
      name: "Packing Tape", 
      slug: "packing-tape",
      description: "Custom printed packing tape for secure box sealing and branding"
    }
  ]
};

export default otherData;
