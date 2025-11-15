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
      description: "Self-standing mylar packaging with excellent product visibility",
      images: ["Stand-Up-Pouch_x47atr", "Stand-Up-Pouch-2_g4acia", "Stand-Up-Pouch-3_dn7xbf"]
    },
    { 
      name: "Zipper Bag", 
      slug: "zipper-bag",
      description: "Resealable mylar closure packaging for convenient access and storage",
      images: ["Zipper-Bag_axp0tt", "Zipper-Bag-2_uq8r92", "Zipper-Bag-3_ytkq7g"]
    },
    { 
      name: "Window Bag", 
      slug: "window-bag",
      description: "Transparent mylar window packaging for product display and protection",
      images: ["Window-Bag_fcbmmg", "Window-Bag-2_iq37ax", "Window-Bag-3_fvjij4"]
    }
  ]
};

export default mylarBoxesData;
