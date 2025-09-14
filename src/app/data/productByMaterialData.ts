export interface MaterialSubCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface MaterialCategory {
  name: string;
  slug: string;
  description: string;
  subcategories: MaterialSubCategory[];
  image: string;
  subcategoriesCount: number;
  modelPath: string;
}

export const productByMaterialData: MaterialCategory[] = [
  {
    name: "Rigid Boxes",
    slug: "rigid-boxes",
    description: "Premium luxury packaging with superior strength and durability for high-end products",
    image: "/img/products-box-img.png",
    subcategoriesCount: 12,
    modelPath: "/models/Tuck End Auto Bottom1.glb",
    subcategories: [
      { name: "Magnetic Closure Rigid Boxes", slug: "magnetic-closure-rigid-boxes" },
      { name: "Two Piece Rigid Boxes", slug: "two-piece-rigid-boxes" },
      { name: "Collapsible / Foldable Rigid Boxes", slug: "collapsible-foldable-rigid-boxes" },
      { name: "Sliding / Sleeve Rigid Boxes", slug: "sliding-sleeve-rigid-boxes" },
      { name: "Child Resistant Rigid Box", slug: "child-resistant-rigid-box" },
      { name: "Custom Rigid Paper Tubes", slug: "custom-rigid-paper-tubes" },
      { name: "Brief Case Style", slug: "brief-case-style" },
      { name: "Book Style Rigid Boxes", slug: "book-style-rigid-boxes" },
      { name: "Hexagon Rigid Boxes", slug: "hexagon-rigid-boxes" },
      { name: "Round Shaped Rigid Boxes", slug: "round-shaped-rigid-boxes" },
      { name: "Rigid Book Sleeves", slug: "rigid-book-sleeves" },
      { name: "Shoulder Rigid Boxes", slug: "shoulder-rigid-boxes" }
    ]
  },
  {
    name: "Kraft Boxes",
    slug: "kraft-boxes",
    description: "Eco-friendly kraft paper packaging solutions with natural appeal and sustainability",
    image: "/img/products-box-img.png",
    subcategoriesCount: 19,
    modelPath: "/models/Tuck End Auto Bottom1.glb",
    subcategories: [
      { name: "Kraft Mailer Boxes", slug: "kraft-mailer-boxes" },
      { name: "Kraft Boxes with Lids", slug: "kraft-boxes-with-lids" },
      { name: "Kraft Pillow Soap Boxes", slug: "kraft-pillow-soap-boxes" },
      { name: "Kraft Gable Boxes", slug: "kraft-gable-boxes" },
      { name: "Kraft Bakery / Cake Box", slug: "kraft-bakery-cake-box" },
      { name: "Kraft Sleeve Boxes", slug: "kraft-sleeve-boxes" },
      { name: "Kraft Tuck Boxes (Reverse Tuck, Straight Tuck, 1-2-3 Bottom, Auto Lock)", slug: "kraft-tuck-boxes" },
      { name: "Kraft Five Panel Hanger Boxes", slug: "kraft-five-panel-hanger-boxes" },
      { name: "Kraft Boxes with Inserts", slug: "kraft-boxes-with-inserts" },
      { name: "Kraft Side Lock Six Corner Boxes", slug: "kraft-side-lock-six-corner-boxes" },
      { name: "Kraft Regular Six Corner Boxes", slug: "kraft-regular-six-corner-boxes" },
      { name: "Kraft Hexagon Boxes", slug: "kraft-hexagon-boxes" },
      { name: "Kraft Seal End Auto Bottom Boxes", slug: "kraft-seal-end-auto-bottom-boxes" },
      { name: "Kraft Auto Bottom Tray", slug: "kraft-auto-bottom-tray" },
      { name: "Two Piece Kraft Boxes", slug: "two-piece-kraft-boxes" },
      { name: "Kraft Window Boxes", slug: "kraft-window-boxes" },
      { name: "Kraft CBD Boxes", slug: "kraft-cbd-boxes" },
      { name: "Kraft Cigarette Boxes", slug: "kraft-cigarette-boxes" },
      { name: "Custom Blister Packaging", slug: "custom-blister-packaging" },
      { name: "Bookend, Perforated Dispenser Box, Triangular Tray Lid, Double Wall Frame Tray", slug: "kraft-specialty-boxes" }
    ]
  },
  {
    name: "Cardboard Boxes",
    slug: "cardboard-boxes",
    description: "Versatile cardboard packaging for all industries with excellent customization options",
    image: "/img/products-box-img.png",
    subcategoriesCount: 17,
    modelPath: "/models/Tuck End Auto Bottom1.glb",
    subcategories: [
      { name: "Display Boxes", slug: "display-boxes" },
      { name: "Tuck Boxes (Reverse Tuck, Straight Tuck, Auto Lock, 1-2-3 Bottom)", slug: "tuck-boxes" },
      { name: "Soap Boxes", slug: "soap-boxes" },
      { name: "Gable Boxes", slug: "gable-boxes" },
      { name: "Cake Boxes", slug: "cake-boxes" },
      { name: "Sleeve Boxes", slug: "sleeve-boxes" },
      { name: "Chinese Takeout Boxes", slug: "chinese-takeout-boxes" },
      { name: "Double Wall Display Lid", slug: "double-wall-display-lid" },
      { name: "Dispenser Boxes", slug: "dispenser-boxes" },
      { name: "Five Panel Hanger Boxes", slug: "five-panel-hanger-boxes" },
      { name: "Inserts / Mailer / Hexagon Boxes", slug: "inserts-mailer-hexagon-boxes" },
      { name: "Seal End Auto Bottom", slug: "seal-end-auto-bottom" },
      { name: "Auto Bottom Tray", slug: "auto-bottom-tray" },
      { name: "Two Piece Boxes", slug: "two-piece-boxes" },
      { name: "Window Boxes", slug: "window-boxes" },
      { name: "Cigarette Boxes", slug: "cigarette-boxes" },
      { name: "Header Cards, Bookend, Perforated Dispenser Box, Triangular Tray Lid, Double Wall Frame Tray", slug: "cardboard-specialty-boxes" }
    ]
  },
  {
    name: "Corrugated Boxes",
    slug: "corrugated-boxes",
    description: "Strong corrugated packaging for shipping and storage with maximum protection",
    image: "/img/products-box-img.png",
    subcategoriesCount: 12,
    modelPath: "/models/Tuck End Auto Bottom1.glb",
    subcategories: [
      { name: "Mailer Boxes", slug: "corrugated-mailer-boxes" },
      { name: "Gable Boxes", slug: "corrugated-gable-boxes" },
      { name: "Inserts / Double Locked Wall Lid", slug: "corrugated-inserts-double-locked-wall-lid" },
      { name: "Hexagon Boxes", slug: "corrugated-hexagon-boxes" },
      { name: "Seal End Auto Bottom", slug: "corrugated-seal-end-auto-bottom" },
      { name: "Auto Bottom Tray", slug: "corrugated-auto-bottom-tray" },
      { name: "Two Piece Boxes", slug: "corrugated-two-piece-boxes" },
      { name: "Window Boxes", slug: "corrugated-window-boxes" },
      { name: "Kraft CBD / Cigarette Boxes", slug: "corrugated-kraft-cbd-cigarette-boxes" },
      { name: "Brief Case Style", slug: "corrugated-brief-case-style" },
      { name: "Full Flap Shipping Box", slug: "full-flap-shipping-box" },
      { name: "Custom Blister Packaging", slug: "corrugated-custom-blister-packaging" }
    ]
  }
];

export default productByMaterialData;
