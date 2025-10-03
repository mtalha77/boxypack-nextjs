export interface MylarBoxSubCategory {
  name: string;
  slug: string;
  description?: string;
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
      description: "Self-standing mylar packaging with excellent product visibility"
    },
    { 
      name: "Zipper Bag", 
      slug: "zipper-bag",
      description: "Resealable mylar closure packaging for convenient access and storage"
    },
    { 
      name: "Window Bag", 
      slug: "window-bag",
      description: "Transparent mylar window packaging for product display and protection"
    }
  ]
};

export default mylarBoxesData;
