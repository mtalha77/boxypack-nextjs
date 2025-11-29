export interface ShoppingBagSubCategory {
  name: string;
  slug: string;
  description?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
}

export interface ShoppingBagCategory {
  name: string;
  slug: string;
  description: string;
  subcategories: ShoppingBagSubCategory[];
  image: string;
  subcategoriesCount: number;
  modelPath: string;
}

export const shoppingBagsData: ShoppingBagCategory = {
  name: "Shopping Bags",
  slug: "shopping-bags",
  description: "Eco-friendly and branded shopping bag solutions for retail and promotional use",
  image: "products-box-img_x8vu4b",
  subcategoriesCount: 3,
  modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
  subcategories: [
    { 
      name: "Kraft Shopping Bag", 
      slug: "kraft-shopping-bag",
      description: "Eco-friendly kraft paper bags with handles, perfect for retail and promotional use",
      images: ["Kraft-Shopping-Bag-2_toxpso", "Kraft-Shopping-Bag_xsxhwa", "Kraft-Shopping-Bag-3_bk6ap1"]
    },
    { 
      name: "Paper Bag", 
      slug: "paper-bag",
      description: "Durable paper bags with custom printing for branding and marketing",
      images: ["Paper-Bag_cajhzx", "Paper-Bag-2_woe07z", "Paper-Bag-3_ek1s3k"]
    },
    { 
      name: "PVC Bag", 
      slug: "pvc-bag",
      description: "Reusable PVC bags with custom designs for sustainable retail solutions",
      images: ["PVC-Bag-2_tl35ls", "PVC-Bag_pagxtd", "PVC-Bag-3_eym0yw"]
    }
  ]
};

export default shoppingBagsData;
