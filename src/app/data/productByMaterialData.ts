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
    image: "Mailer-Box-3_oct2ws",
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
    image: "Mailer-Box-2_ysut1i",
    subcategoriesCount: 18,
    modelPath: "/models/Tuck End Auto Bottom1.glb",
    subcategories: [
      { name: "Kraft Mailer Box", slug: "kraft-mailer-box" },
      { name: "Kraft Box with Lid", slug: "kraft-box-with-lid" },
      { name: "Kraft Pillow Box", slug: "kraft-pillow-box" },
      { name: "Kraft Gable Box", slug: "kraft-gable-box" },
      { name: "Kraft Bakery / Cake Box", slug: "kraft-bakery-cake-box" },
      { name: "Kraft Sleeve Box", slug: "kraft-sleeve-box" },
      { name: "Kraft TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box", slug: "kraft-tuck-end-box" },
      { name: "Kraft Five Panel Hanger Box", slug: "kraft-five-panel-hanger-box" },
      { name: "Kraft Side Lock Six Corner Box", slug: "kraft-side-lock-six-corner-box" },
      { name: "Kraft Regular Six Corner Box", slug: "kraft-regular-six-corner-box" },
      { name: "Kraft Seal End Auto Bottom Box", slug: "kraft-seal-end-auto-bottom-box" },
      { name: "Kraft single wall Auto Bottom Tray", slug: "kraft-single-wall-auto-bottom-tray" },
      { name: "Kraft Two Piece Box", slug: "kraft-two-piece-box" },
      { name: "Kraft Ciggeret Box", slug: "kraft-cigarette-box" },
      { name: "Kraft Bookend Box", slug: "kraft-bookend-box" },
      { name: "Kraft Dispenser Box", slug: "kraft-dispenser-box" },
      { name: "Kraft Double Wall Frame Tray", slug: "kraft-double-wall-frame-tray" }
    ]
  },
  {
    name: "Cardboard Boxes",
    slug: "cardboard-boxes",
    description: "Versatile cardboard packaging for all industries with excellent customization options",
    image: "Mailer-Box_1_ujqhhx",
    subcategoriesCount: 20,
    modelPath: "/models/Tuck End Auto Bottom1.glb",
    subcategories: [
      { name: "Cardboard DISPLAY BOX", slug: "cardboard-display-box" },
      { name: "Cardboard TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box", slug: "cardboard-tuck-end-box" },
      { name: "Cardboard Box with Lid", slug: "cardboard-box-with-lid" },
      { name: "Cardboard Gable Box", slug: "cardboard-gable-box" },
      { name: "Cardboard Cake / Bakery Box", slug: "cardboard-cake-bakery-box" },
      { name: "Cardboard Sleeve Box", slug: "cardboard-sleeve-box" },
      { name: "Cardboard Dispenser Box", slug: "cardboard-dispenser-box" },
      { name: "Cardboard Five Panel Hanger", slug: "cardboard-five-panel-hanger" },
      { name: "Cardboard Mailer Boxes", slug: "cardboard-mailer-boxes" },
      { name: "Cardboard Double Locked Wall Lid Box", slug: "cardboard-double-locked-wall-lid-box" },
      { name: "Cardboard Side Lock Six Corner Box", slug: "cardboard-side-lock-six-corner-box" },
      { name: "Cardboard Regular Six Corner Box", slug: "cardboard-regular-six-corner-box" },
      { name: "Cardboard Seal End Auto Bottom Box", slug: "cardboard-seal-end-auto-bottom-box" },
      { name: "Cardboard Auto Bottom Tray", slug: "cardboard-auto-bottom-tray" },
      { name: "Cardboard Two Piece Box", slug: "cardboard-two-piece-box" },
      { name: "Cardboard Ciggeret Box", slug: "cardboard-cigarette-box" },
      { name: "Cardboard Bookend Box", slug: "cardboard-bookend-box" },
      { name: "Cardboard Double Wall Frame Tray", slug: "cardboard-double-wall-frame-tray" }
    ]
  },
  {
    name: "Corrugated Boxes",
    slug: "corrugated-boxes",
    description: "Strong corrugated packaging for shipping and storage with maximum protection",
    image: "Mailer-Box-3_oct2ws",
    subcategoriesCount: 8,
    modelPath: "/models/Tuck End Auto Bottom1.glb",
    subcategories: [
      { name: "Corrugated Mailer Box", slug: "corrugated-mailer-box" },
      { name: "Corrugated Gable Box", slug: "corrugated-gable-box" },
      { name: "Corrugated Double Locked Wall Lid Box", slug: "corrugated-double-locked-wall-lid-box" },
      { name: "Corrugated Seal End Auto Bottom Box", slug: "corrugated-seal-end-auto-bottom-box" },
      { name: "Corrugated Auto Bottom Tray", slug: "corrugated-auto-bottom-tray" },
      { name: "Corrugated Two Piece Box", slug: "corrugated-two-piece-box" },
      { name: "Corrugated Brief Case Style Box", slug: "corrugated-brief-case-style-box" },
      { name: "Corrugated Full Flap Shipping Box", slug: "corrugated-full-flap-shipping-box" }
    ]
  }
];

export default productByMaterialData;
