export interface MylarBoxSubCategory {
  name: string;
  slug: string;
  description?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
}

export interface MylarBoxCategory {
  name: string;
  slug: string;
  description: string;
  subcategories: MylarBoxSubCategory[];
  image: string;
  subcategoriesCount: number;
  modelPath: string;
}

export const mylarBoxesData: MylarBoxCategory = {
  name: "Mylar Boxes",
  slug: "mylar-boxes",
  description: "Premium mylar packaging solutions with excellent barrier properties and durability for various products",
  image: "products-box-img_x8vu4b",
  subcategoriesCount: 3,
  modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
  subcategories: [
    { 
      name: "Stand Up Pouche", 
      slug: "stand-up-pouche",
      description: "We manufacture food-grade stand up pouches, coffee pouches with valves, matte premium pouches, kraft eco pouches, foil pouches, child-resistant cannabis pouches, window pouches, powder pouches, snack packaging bags, and wholesale stand up pouch bags. Ideal for food brands, wellness companies, coffee sellers, cannabis brands, and retail stores.",
      images: ["Stand-Up-Pouch_dhgugv", "Stand-Up-Pouch-2_g4acia", "Stand-Up-Pouch-3_dn7xbf"]
    },
    { 
      name: "Zipper Bag", 
      slug: "zipper-bag",
      description: "We manufacture food-grade zipper bags, child-resistant cannabis zipper bags, kraft zipper bags, matte zipper pouches, coffee zipper bags with valves, foil zipper bags, window zipper pouches, resealable snack bags, wellness supplement bags, and wholesale unprinted zipper bags. Ideal for food brands, cannabis lines, health products, and retail packaging suppliers.",
      images: ["Zipper-Bag-2_itxnvr", "Zipper-Bag_axp0tt", "Zipper-Bag-3_ytkq7g"]
    },
    { 
      name: "Window Bag", 
      slug: "window-bag",
      description: "We manufacture kraft window bags, snack window pouches, food-grade window bags, resealable zipper window bags, foil window pouches, eco compostable window bags, child-resistant window bags, bakery window packaging, and wholesale unprinted window bags. Ideal for food brands, wellness products, bakeries, cafes, and retail suppliers.",
      images: ["Window-Bag-2_jqsxcn", "Window-Bag_fcbmmg", "Window-Bag-3_fvjij4"]
    }
  ]
};

export default mylarBoxesData;
