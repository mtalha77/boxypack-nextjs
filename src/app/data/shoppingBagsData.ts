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
      description: "We manufacture kraft shopping bags for retail outlets, die-cut handle kraft bags, bakery kraft bags, boutique-style kraft bags, reusable eco-friendly kraft bags, printed kraft gift bags, luxury kraft bags, grocery kraft bags, and wholesale unprinted kraft shopping bags. Perfect for boutiques, bakeries, beauty brands, clothing stores, and gift shops.",
      images: ["Kraft-Shopping-Bag-2_toxpso", "Kraft-Shopping-Bag_xsxhwa", "Kraft-Shopping-Bag-3_bk6ap1"]
    },
    { 
      name: "Paper Bag", 
      slug: "paper-bag",
      description: "We manufacture kraft paper bags, white paper bags, printed paper shopping bags, boutique paper bags, die-cut handle bags, bakery paper bags, grocery paper bags, laminated luxury bags, and wholesale unprinted paper bags. Ideal for retail brands, supermarkets, boutiques, bakeries, fashion stores, and event organizers.",
      images: ["Paper-Bag_cajhzx", "Paper-Bag-2_woe07z", "Paper-Bag-3_ek1s3k"]
    },
    { 
      name: "PVC Bag", 
      slug: "pvc-bag",
      description: "We manufacture cosmetic PVC bags, zipper PVC pouches, frosted PVC bags, tote-style PVC bags, apparel PVC bags, PVC travel kits, promotional PVC bags, flat PVC sleeves, and wholesale transparent PVC bags. Ideal for retail brands, beauty companies, apparel stores, and promotional product suppliers.",
      images: ["PVC-Bag-2_tl35ls", "PVC-Bag_pagxtd", "PVC-Bag-3_eym0yw"]
    }
  ]
};

export default shoppingBagsData;
