export interface PouchSubCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface PouchCategory {
  name: string;
  slug: string;
  description: string;
  subcategories: PouchSubCategory[];
  image: string;
  subcategoriesCount: number;
}

export const pouchesData: PouchCategory = {
  name: "Pouches",
  slug: "pouches",
  description: "Flexible packaging solutions for various products with resealable and stand-up options",
  image: "/img/products-box-img.png",
  subcategoriesCount: 2,
  subcategories: [
    { 
      name: "Stand Up Zip Lock Mylar Bags", 
      slug: "stand-up-zip-lock-mylar-bags",
      description: "Self-standing pouches with zipper closure for easy access and product visibility"
    },
    { 
      name: "Mylar Ziplock Bags", 
      slug: "mylar-ziplock-bags",
      description: "Durable mylar pouches with resealable zipper for long-term storage"
    }
  ]
};

export default pouchesData;
