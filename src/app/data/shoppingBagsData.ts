export interface ShoppingBagSubCategory {
  name: string;
  slug: string;
  description?: string;
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
  modelPath: "/models/Tuck End Auto Bottom1.glb",
  subcategories: [
    { 
      name: "Kraft Shopping Bag", 
      slug: "kraft-shopping-bag",
      description: "Eco-friendly kraft paper bags with handles, perfect for retail and promotional use"
    },
    { 
      name: "Paper Bag", 
      slug: "paper-bag",
      description: "Durable paper bags with custom printing for branding and marketing"
    },
    { 
      name: "PVC Bag", 
      slug: "pvc-bag",
      description: "Reusable PVC bags with custom designs for sustainable retail solutions"
    }
  ]
};

export default shoppingBagsData;
