export interface MaterialSubCategory {
  name: string;
  slug: string;
  description?: string;
  modelPath?: string;
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
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Magnetic Closure Rigid Boxes", slug: "magnetic-closure-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Two Piece Rigid Boxes", slug: "two-piece-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Collapsible / Foldable Rigid Boxes", slug: "collapsible-foldable-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Sliding / Sleeve Rigid Boxes", slug: "sliding-sleeve-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Child Resistant Rigid Box", slug: "child-resistant-rigid-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Custom Rigid Paper Tubes", slug: "custom-rigid-paper-tubes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Brief Case Style", slug: "brief-case-style", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Book Style Rigid Boxes", slug: "book-style-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Hexagon Rigid Boxes", slug: "hexagon-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Round Shaped Rigid Boxes", slug: "round-shaped-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Rigid Book Sleeves", slug: "rigid-book-sleeves", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Shoulder Rigid Boxes", slug: "shoulder-rigid-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  },
  {
    name: "Kraft Boxes",
    slug: "kraft-boxes",
    description: "Eco-friendly kraft paper packaging solutions with natural appeal and sustainability",
    image: "Mailer-Box-2_ysut1i",
    subcategoriesCount: 18,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Kraft Mailer Box", slug: "kraft-mailer-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Box with Lid", slug: "kraft-box-with-lid", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Pillow Box", slug: "kraft-pillow-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Gable Box", slug: "kraft-gable-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Bakery / Cake Box", slug: "kraft-bakery-cake-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Sleeve Box", slug: "kraft-sleeve-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box", slug: "kraft-tuck-end-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Five Panel Hanger Box", slug: "kraft-five-panel-hanger-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Side Lock Six Corner Box", slug: "kraft-side-lock-six-corner-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Regular Six Corner Box", slug: "kraft-regular-six-corner-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Seal End Auto Bottom Box", slug: "kraft-seal-end-auto-bottom-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft single wall Auto Bottom Tray", slug: "kraft-single-wall-auto-bottom-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Two Piece Box", slug: "kraft-two-piece-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Ciggeret Box", slug: "kraft-cigarette-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Bookend Box", slug: "kraft-bookend-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Dispenser Box", slug: "kraft-dispenser-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Kraft Double Wall Frame Tray", slug: "kraft-double-wall-frame-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  },
  {
    name: "Cardboard Boxes",
    slug: "cardboard-boxes",
    description: "Versatile cardboard packaging for all industries with excellent customization options",
    image: "Mailer-Box_1_ujqhhx",
    subcategoriesCount: 20,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Cardboard DISPLAY BOX", slug: "cardboard-display-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard TUCK End BOX - Reverse Tuck end Box ,Straight Tuck End Box, 1-2-3 lock Bottom Box, Auto Lock Bottom Box", slug: "cardboard-tuck-end-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Box with Lid", slug: "cardboard-box-with-lid", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Gable Box", slug: "cardboard-gable-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Cake / Bakery Box", slug: "cardboard-cake-bakery-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Sleeve Box", slug: "cardboard-sleeve-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Dispenser Box", slug: "cardboard-dispenser-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Five Panel Hanger", slug: "cardboard-five-panel-hanger", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Mailer Boxes", slug: "cardboard-mailer-boxes", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Double Locked Wall Lid Box", slug: "cardboard-double-locked-wall-lid-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Side Lock Six Corner Box", slug: "cardboard-side-lock-six-corner-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Regular Six Corner Box", slug: "cardboard-regular-six-corner-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Seal End Auto Bottom Box", slug: "cardboard-seal-end-auto-bottom-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Auto Bottom Tray", slug: "cardboard-auto-bottom-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Two Piece Box", slug: "cardboard-two-piece-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Ciggeret Box", slug: "cardboard-cigarette-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Bookend Box", slug: "cardboard-bookend-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Cardboard Double Wall Frame Tray", slug: "cardboard-double-wall-frame-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  },
  {
    name: "Corrugated Boxes",
    slug: "corrugated-boxes",
    description: "Strong corrugated packaging for shipping and storage with maximum protection",
    image: "Mailer-Box-3_oct2ws",
    subcategoriesCount: 8,
    modelPath: "Tuck_End_Auto_Bottom1_ttdsdf",
    subcategories: [
      { name: "Corrugated Mailer Box", slug: "corrugated-mailer-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Gable Box", slug: "corrugated-gable-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Double Locked Wall Lid Box", slug: "corrugated-double-locked-wall-lid-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Seal End Auto Bottom Box", slug: "corrugated-seal-end-auto-bottom-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Auto Bottom Tray", slug: "corrugated-auto-bottom-tray", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Two Piece Box", slug: "corrugated-two-piece-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Brief Case Style Box", slug: "corrugated-brief-case-style-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" },
      { name: "Corrugated Full Flap Shipping Box", slug: "corrugated-full-flap-shipping-box", modelPath: "Tuck_End_Auto_Bottom1_ttdsdf" }
    ]
  }
];

export default productByMaterialData;
