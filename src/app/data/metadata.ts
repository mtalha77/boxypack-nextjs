import { Metadata } from 'next';

export interface PageMetadata {
  title: string;
  description: string;
}

export const siteMetadata: Record<string, PageMetadata> = {
  // Home
  home: {
    title: 'Premium Custom Packaging Boxes & Printing by BoxyPack',
    description: 'Boxy Pack offers premium custom packaging boxes with fast turnaround, free shipping, and low minimums to elevate your brand beautifully. Order Now.',
  },
  // How It Works
  'how-it-works': {
    title: 'How Custom Packaging Works | Easy Order & Fast Delivery',
    description: 'Discover how Boxy Pack delivers high-quality custom packaging with quick turnaround and free shipping through a simple, seamless process. Get Started Today.',
  },
  // About Us
  'about-us': {
    title: 'About Our Custom Packaging Experts | Trusted Box Makers',
    description: 'Boxy Pack crafts premium custom packaging with fast delivery, top-quality printing, and trusted service to help brands stand out. Get Started Today.',
  },
  // Contact Us
  'contact-us': {
    title: 'Contact Us for Custom Packaging Help | Fast Support',
    description: 'Connect with Boxy Pack for custom packaging quotes, expert guidance, and fast order support. Enjoy premium printing and free shipping. Contact Today.',
  },
  // Blogs
  blogs: {
    title: 'Packaging Tips & Branding Guides | Custom Box Blogs',
    description: 'Explore Boxy Pack\'s expert packaging tips, design inspiration, and branding guides to enhance your product presentation. Read More Today.',
  },
  // Privacy Policy
  'privacy-policy': {
    title: 'Privacy Policy | Secure Custom Packaging Services',
    description: 'Boxy Pack protects your data while offering fast, premium custom packaging and a secure online ordering experience. Review Our Policy Today.',
  },
  // Terms of Use
  'terms-of-use': {
    title: 'Terms of Use | Custom Packaging Services & Policies',
    description: 'Review Boxy Pack\'s terms for using our custom packaging services, ensuring a smooth, secure, and trusted ordering experience. View Terms Today.',
  },
  // PRODUCT BY MATERIALS - Main Page
  'product-by-material': {
    title: 'Custom Packaging by Material | Premium Box Solutions',
    description: 'Boxy Pack offers premium custom packaging boxes by material with fast turnaround, free shipping, and pro-quality printing for all industries. Shop Today.',
  },
  // RIGID BOXES - Category Page
  'rigid-boxes': {
    title: 'Luxury Custom Rigid Boxes Printing | Premium Packaging',
    description: 'Boxy Pack delivers luxury rigid boxes with premium quality, fast turnaround, and free shipping for elegant product packaging. Get a Free Quote.',
  },
  // Magnetic Closure Rigid Box
  'magnetic-closure-rigid-box': {
    title: 'Custom Magnetic Closure Rigid Boxes | Premium Quality',
    description: 'Boxy Pack creates premium magnetic rigid boxes with luxury finishes, fast turnaround, and free shipping for elegant branding. Order Now.',
  },
  // Two Piece Rigid Boxes
  'two-piece-rigid-boxes': {
    title: 'Luxury Two Piece Rigid Boxes | Custom Printed Packaging',
    description: 'Boxy Pack offers high-quality two piece rigid boxes with premium printing, free shipping, and fast delivery for standout branding. Customize Now.',
  },
  // Rigid Slide Drawer Box
  'sliding-sleeve-rigid-boxes-match-style-boxes': {
    title: 'Custom Sleeve Rigid Boxes | Premium Sliding Packaging',
    description: 'Boxy Pack designs elegant sliding rigid boxes with premium finishes, free shipping, and fast turnaround to elevate product presentation. Order Now.',
  },
  // Brief Case Style Rigid Boxes
  'brief-case-style': {
    title: 'Custom Briefcase Rigid Boxes | Luxury Carry Packaging',
    description: 'Boxy Pack crafts stylish briefcase rigid boxes with premium durability, free shipping, and fast turnaround for luxury products. Request Pricing.',
  },
  // Book Style Rigid Boxes
  'book-style-rigid-boxes': {
    title: 'Custom Book Style Rigid Boxes | Luxury Printed Boxes',
    description: 'Boxy Pack produces premium book style rigid boxes with elegant printing, free shipping, and fast delivery for high-end branding. Customize Now.',
  },
  // KRAFT BOXES - Category Page
  'kraft-boxes': {
    title: 'Custom Kraft Boxes | Eco-Friendly Packaging Solutions',
    description: 'Boxy Pack offers premium kraft boxes with eco-friendly materials, fast turnaround, and free shipping to elevate your brand\'s packaging. Shop Today.',
  },
  // Kraft Mailer Box
  'kraft-mailer-box': {
    title: 'Custom Kraft Mailer Boxes | Fast Shipping & Premium',
    description: 'Boxy Pack crafts high-quality kraft mailer boxes with fast delivery, free shipping, and low minimums for safe and stylish product packaging. Order Now.',
  },
  // Kraft Box with Lid
  'kraft-box-with-lid': {
    title: 'Premium Kraft Boxes with Lid | Custom Packaging',
    description: 'Boxy Pack produces custom kraft boxes with lid, offering premium quality, free shipping, and fast turnaround for elegant product presentation. Customize Now.',
  },
  // Kraft Pillow Box
  'kraft-pillow-box': {
    title: 'Custom Kraft Pillow Boxes | Eco-Friendly Packaging',
    description: 'Boxy Pack delivers eco-friendly kraft pillow boxes with premium printing, fast turnaround, and free shipping to enhance your brand packaging. Get a Free Quote.',
  },
  // Kraft Gable Box
  'kraft-gable-box': {
    title: 'Custom Kraft Gable Boxes | Premium Product Packaging',
    description: 'Boxy Pack creates premium kraft gable boxes with fast turnaround, free shipping, and professional finishes for standout product presentation. Order Now.',
  },
  // Kraft Bakery / Cake Box
  'kraft-bakery-cake-box': {
    title: 'Custom Kraft Bakery Boxes | Elegant Cake Packaging',
    description: 'Boxy Pack offers premium kraft bakery boxes with fast turnaround, free shipping, and low minimums to make your baked goods look irresistible. Shop Today.',
  },
  // Kraft Sleeve Box
  'kraft-sleeve-box': {
    title: 'Custom Kraft Sleeve Boxes | Premium Printed Packaging',
    description: 'Boxy Pack produces high-quality kraft sleeve boxes with fast turnaround, free shipping, and premium finishes for stylish product packaging. Customize Now.',
  },
  // Kraft TUCK End BOX
  'kraft-tuck-end-box': {
    title: 'Custom Kraft Tuck End Boxes | Fast & Premium',
    description: 'Boxy Pack designs premium kraft tuck end boxes with free shipping, fast turnaround, and elegant finishes to elevate your product packaging. Order Now.',
  },
  // Kraft Five Panel Hanger Box
  'kraft-five-panel-hanger-box': {
    title: 'Custom Kraft Five Panel Hanger Boxes | Durable Packaging',
    description: 'Boxy Pack crafts premium five panel hanger boxes with fast delivery, free shipping, and top-quality kraft materials for professional packaging. Request Pricing.',
  },
  // Kraft Side Lock Six Corner Box
  'kraft-side-lock-six-corner-box': {
    title: 'Custom Kraft Side Lock Six Corner Boxes | Premium',
    description: 'Boxy Pack delivers high-quality kraft side lock six corner boxes with fast turnaround, free shipping, and durable construction for superior packaging. Order Now.',
  },
  // Kraft Regular Six Corner Box
  'kraft-regular-six-corner-box': {
    title: 'Premium Kraft Regular Six Corner Boxes | Custom Packaging',
    description: 'Boxy Pack produces kraft regular six corner boxes with fast turnaround, free shipping, and premium printing to enhance your product presentation. Customize Now.',
  },
  // Kraft Seal End Auto Bottom Box
  'kraft-seal-end-auto-bottom-box': {
    title: 'Custom Kraft Seal End Auto Bottom Boxes | Fast Delivery',
    description: 'Boxy Pack designs kraft seal end auto bottom boxes with fast turnaround, free shipping, and premium quality for professional-grade packaging. Order Now.',
  },
  // Kraft Single Wall Auto Bottom Tray
  'kraft-single-wall-auto-bottom-tray': {
    title: 'Custom Kraft Single Wall Auto Bottom Tray Boxes | Premium',
    description: 'Boxy Pack produces high-quality single wall auto bottom trays with fast turnaround, free shipping, and premium kraft materials. Get a Free Quote.',
  },
  // Kraft Two Piece Box
  'kraft-two-piece-box': {
    title: 'Custom Kraft Two Piece Boxes | Premium Packaging',
    description: 'Boxy Pack creates premium two piece kraft boxes with fast turnaround, free shipping, and top-quality printing for elegant product packaging. Customize Now.',
  },
  // Kraft Cigarette Box
  'kraft-cigarette-box': {
    title: 'Custom Kraft Cigarette Boxes | Premium Printed Packaging',
    description: 'Boxy Pack offers premium kraft cigarette boxes with fast turnaround, free shipping, and low minimums for professional branding. Order Now.',
  },
  // Kraft Bookend Box
  'kraft-bookend-box': {
    title: 'Custom Kraft Bookend Boxes | Durable & Premium',
    description: 'Boxy Pack delivers high-quality kraft bookend boxes with fast turnaround, free shipping, and premium finishes for elegant product packaging. Customize Now.',
  },
  // Kraft Dispenser Box
  'kraft-dispenser-box': {
    title: 'Custom Kraft Dispenser Boxes | Premium Packaging',
    description: 'Boxy Pack produces premium kraft dispenser boxes with fast turnaround, free shipping, and professional finishes for stylish product packaging. Order Now.',
  },
  // Kraft Double Wall Frame Tray
  'kraft-double-wall-frame-tray': {
    title: 'Custom Kraft Double Wall Frame Tray Boxes | Premium',
    description: 'Boxy Pack delivers high-quality double wall frame tray boxes with fast turnaround, free shipping, and premium kraft materials for durable packaging. Get a Free Quote.',
  },
  // CARDBOARD BOXES - Category Page
  'cardboard-boxes': {
    title: 'Custom Cardboard Boxes | Durable & Premium Packaging',
    description: 'Boxy Pack offers premium cardboard boxes with fast turnaround, free shipping, and eco-friendly durable materials for all your packaging needs. Shop Today.',
  },
  // Cardboard Display Box
  'cardboard-display-box': {
    title: 'Custom Cardboard Display Boxes | Premium Packaging',
    description: 'Boxy Pack delivers high-quality cardboard display boxes with fast turnaround, free shipping, and premium printing to showcase your products. Order Now.',
  },
  // Cardboard Tuck End Box
  'cardboard-tuck-end-box': {
    title: 'Custom Cardboard Tuck End Boxes | Durable Packaging',
    description: 'Boxy Pack produces premium cardboard tuck end boxes with fast delivery, free shipping, and low minimums for professional product packaging. Customize Now.',
  },
  // Cardboard Box with Lid
  'cardboard-box-with-lid': {
    title: 'Custom Cardboard Boxes with Lid | Premium Packaging',
    description: 'Boxy Pack creates high-quality cardboard boxes with lids, fast turnaround, free shipping, and premium printing for elegant product presentation. Shop Today.',
  },
  // Cardboard Gable Box
  'cardboard-gable-box': {
    title: 'Custom Cardboard Gable Boxes | Premium Packaging',
    description: 'Boxy Pack delivers cardboard gable boxes with fast turnaround, free shipping, and premium finishes to elevate your product presentation. Order Now.',
  },
  // Cardboard Cake / Bakery Box
  'cardboard-cake-bakery-box': {
    title: 'Custom Cardboard Bakery Boxes | Elegant Cake Packaging',
    description: 'Boxy Pack produces premium cardboard bakery boxes for cakes and pastries with fast delivery, free shipping, and low minimums. Customize Now.',
  },
  // Cardboard Sleeve Box
  'cardboard-sleeve-box': {
    title: 'Custom Cardboard Sleeve Boxes | Premium Printed Packaging',
    description: 'Boxy Pack delivers high-quality cardboard sleeve boxes with fast turnaround, free shipping, and professional printing for stylish packaging. Order Now.',
  },
  // Cardboard Dispenser Box
  'cardboard-dispenser-box': {
    title: 'Custom Cardboard Dispenser Boxes | Durable Packaging',
    description: 'Boxy Pack produces premium cardboard dispenser boxes with fast turnaround, free shipping, and high-quality printing for professional branding. Get a Free Quote.',
  },
  // Cardboard Five Panel Hanger Box
  'cardboard-five-panel-hanger-box': {
    title: 'Custom Cardboard Five Panel Hanger Boxes | Premium',
    description: 'Boxy Pack delivers high-quality cardboard five panel hanger boxes with fast turnaround, free shipping, and premium durability for product packaging. Order Now.',
  },
  // Cardboard Mailer Boxes
  'cardboard-mailer-boxes': {
    title: 'Custom Cardboard Mailer Boxes | Fast & Durable',
    description: 'Boxy Pack offers premium cardboard mailer boxes with fast turnaround, free shipping, and durable construction for safe and stylish shipping. Shop Today.',
  },
  // Cardboard Double Wall Locked Lid Box
  'cardboard-double-locked-wall-lid-box': {
    title: 'Custom Cardboard Double Wall Locked Lid Box | Premium',
    description: 'Boxy Pack produces high-quality cardboard double locked wall lid boxes with fast delivery, free shipping, and premium finishes for professional packaging. Order Now.',
  },
  // Cardboard Side Lock Six Corner Box
  'cardboard-side-lock-six-corner-box': {
    title: 'Custom Cardboard Side Lock Six Corner Boxes | Premium',
    description: 'Boxy Pack delivers cardboard side lock six corner boxes with fast turnaround, free shipping, and premium printing for elegant product packaging. Customize Now.',
  },
  // Cardboard Regular Six Corner Box
  'cardboard-regular-six-corner-box': {
    title: 'Custom Cardboard Regular Six Corner Boxes | Durable',
    description: 'Boxy Pack produces premium cardboard regular six corner boxes with fast delivery, free shipping, and low minimums for professional packaging. Order Now.',
  },
  // Cardboard Seal End Auto Bottom Box
  'cardboard-seal-end-auto-bottom-box': {
    title: 'Custom Cardboard Seal End Auto Bottom Boxes | Premium',
    description: 'Boxy Pack delivers high-quality cardboard seal end auto bottom boxes with fast turnaround, free shipping, and premium printing for elegant product packaging. Order Now.',
  },
  // Cardboard Auto Bottom Tray
  'cardboard-auto-bottom-tray': {
    title: 'Custom Cardboard Auto Bottom Tray Boxes | Durable',
    description: 'Boxy Pack produces premium cardboard auto bottom trays with fast turnaround, free shipping, and professional finishes for safe packaging. Customize Now.',
  },
  // Cardboard Two Piece Box
  'cardboard-two-piece-box': {
    title: 'Custom Cardboard Two Piece Boxes | Premium Packaging',
    description: 'Boxy Pack delivers premium cardboard two piece boxes with fast turnaround, free shipping, and top-quality printing for elegant product presentation. Order Now.',
  },
  // Cardboard Cigarette Box
  'cardboard-cigarette-box': {
    title: 'Custom Cardboard Cigarette Boxes | Premium Packaging',
    description: 'Boxy Pack produces high-quality cardboard cigarette boxes with fast turnaround, free shipping, and premium printing for professional branding. Shop Today.',
  },
  // Cardboard Bookend Box
  'cardboard-bookend-box': {
    title: 'Custom Cardboard Bookend Boxes | Durable & Premium',
    description: 'Boxy Pack delivers premium cardboard bookend boxes with fast turnaround, free shipping, and professional finishes for elegant product packaging. Customize Now.',
  },
  // Cardboard Double Wall Frame Tray
  'cardboard-double-wall-frame-tray': {
    title: 'Custom Cardboard Double Wall Frame Tray Boxes | Premium',
    description: 'Boxy Pack produces high-quality cardboard double wall frame trays with fast turnaround, free shipping, and premium materials for durable packaging. Order Now.',
  },
  // CORRUGATED BOXES - Category Page
  'corrugated-boxes': {
    title: 'Custom Corrugated Boxes | Strong & Durable Packaging',
    description: 'Boxy Pack delivers premium corrugated boxes with fast turnaround, free shipping, and durable construction to protect and elevate your products. Shop Today.',
  },
  // Corrugated Mailer Box
  'corrugated-mailer-box': {
    title: 'Custom Corrugated Mailer Boxes | Premium Packaging',
    description: 'Boxy Pack produces high-quality corrugated mailer boxes with fast delivery, free shipping, and sturdy design for safe shipping and elegant presentation. Order Now.',
  },
  // Corrugated Gable Box
  'corrugated-gable-box': {
    title: 'Custom Corrugated Gable Boxes | Durable & Premium',
    description: 'Boxy Pack offers premium corrugated gable boxes with fast turnaround, free shipping, and high-quality materials for stylish and strong packaging. Customize Now.',
  },
  // Cardboard Double Wall Locked Lid Box
  'corrugated-double-locked-wall-lid-box': {
    title: 'Custom Cardboard Double Wall Locked Lid Box | Strong',
    description: 'Boxy Pack delivers durable corrugated double locked wall lid boxes with fast turnaround, free shipping, and premium quality for professional packaging. Order Now.',
  },
  // Corrugated Seal End Auto Bottom Box
  'corrugated-seal-end-auto-bottom-box': {
    title: 'Custom Corrugated Seal End Auto Bottom Boxes | Premium',
    description: 'Boxy Pack produces high-quality corrugated seal end auto bottom boxes with fast turnaround, free shipping, and premium construction for elegant packaging. Shop Today.',
  },
  // Corrugated Auto Bottom Tray
  'corrugated-auto-bottom-tray': {
    title: 'Custom Corrugated Auto Bottom Tray Boxes | Durable',
    description: 'Boxy Pack delivers strong corrugated auto bottom tray boxes with fast turnaround, free shipping, and premium materials for safe and professional packaging. Order Now.',
  },
  // Corrugated Two Piece Box
  'corrugated-two-piece-box': {
    title: 'Custom Corrugated Two Piece Boxes | Premium Packaging',
    description: 'Boxy Pack produces high-quality corrugated two piece boxes with fast turnaround, free shipping, and sturdy construction for professional-grade packaging. Customize Now.',
  },
  // Corrugated Brief Case Style Box
  'corrugated-brief-case-style-box': {
    title: 'Custom Corrugated Briefcase Boxes | Premium Packaging',
    description: 'Boxy Pack delivers premium corrugated briefcase style boxes with fast turnaround, free shipping, and durable materials for stylish product presentation. Order Now.',
  },
  // Corrugated Full Flap Shipping Box
  'corrugated-full-flap-shipping-box': {
    title: 'Custom Corrugated Full Flap Shipping Boxes | Strong',
    description: 'Boxy Pack produces high-quality corrugated full flap shipping boxes with fast turnaround, free shipping, and premium strength for safe shipping. Shop Today.',
  },
  // MAILER POUCHES - Category Page
  'mailer-pouches': {
    title: 'Custom Mailer Pouches | Premium Durable Packaging by Boxy',
    description: 'Boxy Pack delivers premium custom mailer pouches with fast turnaround, eco-friendly materials, and free shipping for standout product packaging. Order Now.',
  },
  // Stand Up Pouch
  'stand-up-pouch': {
    title: 'Stand Up Pouches | Premium Custom Packaging by Boxy Pack',
    description: 'Boxy Pack crafts high-quality stand up pouches with premium finishes, fast turnaround, and free shipping for stylish and safe product packaging. Customize Now.',
  },
  // Mylar Ziplock Bag
  'zipper-bag': {
    title: 'Custom Mylar Ziplock Bags | Durable & Premium Packaging',
    description: 'Boxy Pack delivers durable custom zipper bags with fast turnaround, premium materials, and free shipping for secure, professional product packaging. Order Now.',
  },
  // Mylar Window Bag
  'window-bag': {
    title: 'Mylar Window Bags | Premium Custom Packaging by Boxy Pack',
    description: 'Boxy Pack creates premium custom window bags with fast turnaround, free shipping, and transparent panels to showcase products beautifully. Shop Today.',
  },
  // SHOPPING BAGS - Category Page
  'shopping-bags': {
    title: 'Custom Shopping Bags | Premium Durable Packaging',
    description: 'Boxy Pack delivers premium custom shopping bags with fast turnaround, durable materials, and free shipping to enhance your brand packaging. Order Now.',
  },
  // Kraft Shopping Bag
  'kraft-shopping-bag': {
    title: 'Kraft Shopping Bags | Eco-Friendly Custom Packaging',
    description: 'Boxy Pack produces eco-friendly kraft shopping bags with premium quality, fast turnaround, and free shipping for stylish, sustainable packaging. Customize Now.',
  },
  // Paper Bag
  'paper-bag': {
    title: 'Custom Paper Bags | Durable & Premium Packaging',
    description: 'Boxy Pack delivers high-quality paper bags with fast turnaround, premium materials, and free shipping to elevate your brand\'s packaging presentation. Order Now.',
  },
  // PVC Bag
  'pvc-bag': {
    title: 'Custom PVC Bags | Premium Durable Packaging',
    description: 'Boxy Pack creates durable PVC bags with premium printing, fast turnaround, and free shipping for professional, high-quality product packaging. Shop Today.',
  },
  // PRODUCT BY INDUSTRY - Bakery Boxes Category
  'bakery-boxes': {
    title: 'Custom Bakery Boxes | Premium Packaging for Pastries',
    description: 'Boxy Pack offers premium bakery boxes with fast turnaround, free shipping, and durable design for stunning presentation. Order Now.',
  },
  // Custom Donut Boxes
  'custom-donut-boxes': {
    title: 'Deluxe Donut Boxes | Premium Custom Packaging',
    description: 'Boxy Pack creates premium donut boxes with fast turnaround, free shipping, and eye-catching designs for irresistible bakery packaging. Customize Now.',
  },
  // Custom Pastry Boxes
  'custom-pastry-boxes': {
    title: 'Elegant Pastry Boxes | Premium Bakery Packaging',
    description: 'Boxy Pack delivers elegant custom pastry boxes with fast turnaround, free shipping, and premium quality to make your pastries stand out. Order Now.',
  },
  // Custom Cake Boxes
  'custom-cake-boxes': {
    title: 'Luxury Cake Boxes | Premium Custom Bakery Packaging',
    description: 'Boxy Pack produces high-quality cake boxes with fast turnaround, free shipping, and durable design to protect and showcase your cakes beautifully. Shop Today.',
  },
  // Custom Cookie Boxes
  'custom-cookie-boxes': {
    title: 'Premium Cookie Boxes | Stylish Custom Packaging',
    description: 'Boxy Pack delivers premium custom cookie boxes with fast turnaround, free shipping, and attractive designs for perfect bakery presentation. Customize Now.',
  },
  // Custom Gable Boxes
  'custom-gable-boxes': {
    title: 'Custom Gable Boxes | Premium Bakery & Gift Packaging',
    description: 'Boxy Pack produces high-quality gable boxes with fast turnaround, free shipping, and premium design for bakery treats and gift-ready packaging. Order Now.',
  },
  // Custom Candy Boxes
  'custom-candy-boxes': {
    title: 'Deluxe Candy Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium custom candy boxes with fast turnaround, free shipping, and vibrant designs for standout product presentation. Shop Today.',
  },
  // Pink Donut Boxes
  'pink-donut-boxes': {
    title: 'Pink Donut Boxes | Stylish Custom Bakery Packaging',
    description: 'Boxy Pack delivers high-quality pink donut boxes with fast turnaround, free shipping, and premium printing to make your bakery treats irresistible. Order Now.',
  },
  // Window Bakery Boxes
  'window-bakery-boxes': {
    title: 'Window Bakery Boxes | Premium Custom Packaging',
    description: 'Boxy Pack creates window bakery boxes with fast turnaround, free shipping, and premium design to showcase baked goods beautifully. Shop Today.',
  },
  // Bakery Gift Boxes
  'bakery-gift-boxes': {
    title: 'Premium Bakery Gift Boxes | Custom Elegant Packaging',
    description: 'Boxy Pack delivers premium bakery gift boxes with fast turnaround, free shipping, and stylish designs for bakery products and gifts. Customize Now.',
  },
  // Custom Cupcake Boxes
  'custom-cupcake-boxes': {
    title: 'Custom Cupcake Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack produces premium custom cupcake boxes with fast turnaround, free shipping, and durable, elegant design for standout bakery packaging. Order Now.',
  },
  // Custom Truffle Boxes
  'custom-truffle-boxes': {
    title: 'Custom Truffle Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack creates high-quality truffle boxes with fast turnaround, free shipping, and premium design for stylish bakery presentation. Customize Now.',
  },
  // COSMETIC BOXES - Category Page
  'cosmetic-boxes': {
    title: 'Custom Cosmetic Boxes | Premium Packaging for Beauty',
    description: 'Boxy Pack delivers premium custom cosmetic boxes with fast turnaround, free shipping, and elegant designs for standout beauty product packaging. Order Now.',
  },
  // Cosmetic Display Boxes
  'cosmetic-display-boxes': {
    title: 'Premium Cosmetic Display Boxes | Stylish Packaging',
    description: 'Boxy Pack creates premium cosmetic display boxes with fast turnaround, free shipping, and professional design to showcase beauty products. Customize Now.',
  },
  // Custom Perfume Boxes
  'custom-perfume-boxes': {
    title: 'Luxury Perfume Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium custom perfume boxes with fast turnaround, free shipping, and elegant finishes for high-end beauty product presentation. Order Now.',
  },
  // Custom Makeup Boxes
  'custom-makeup-boxes': {
    title: 'Custom Makeup Boxes | Stylish Premium Packaging',
    description: 'Boxy Pack produces high-quality custom makeup boxes with fast turnaround, free shipping, and premium designs to enhance beauty product appeal. Shop Today.',
  },
  // Hair Extension Boxes
  'hair-extension-boxes': {
    title: 'Hair Extension Boxes | Premium Packaging for Salons',
    description: 'Boxy Pack delivers premium hair extension boxes with fast turnaround, free shipping, and high-quality packaging to elevate your beauty brand. Customize Now.',
  },
  // Custom Lipstick Boxes
  'custom-lipstick-boxes': {
    title: 'Custom Lipstick Boxes | Luxury Cosmetic Packaging',
    description: 'Boxy Pack creates premium custom lipstick boxes with fast turnaround, free shipping, and elegant designs for standout cosmetic packaging. Order Now.',
  },
  // Custom Lip Gloss Boxes
  'custom-lip-gloss-boxes': {
    title: 'Custom Lip Gloss Boxes | Premium Makeup Packaging',
    description: 'Boxy Pack delivers high-quality custom lip gloss boxes with fast turnaround, free shipping, and stylish designs for professional cosmetic presentation. Shop Today.',
  },
  // Custom Eye Shadow Boxes
  'custom-eye-shadow-boxes': {
    title: 'Custom Eye Shadow Boxes | Elegant Cosmetic Packaging',
    description: 'Boxy Pack produces premium custom eye shadow boxes with fast turnaround, free shipping, and luxurious finishes to enhance your makeup brand. Customize Now.',
  },
  // Custom Cream Boxes
  'custom-cream-boxes': {
    title: 'Custom Cream Boxes | Premium Cosmetic Packaging',
    description: 'Boxy Pack delivers premium custom cream boxes with fast turnaround, free shipping, and professional design for standout skincare packaging. Order Now.',
  },
  // Custom Mascara Boxes
  'custom-mascara-boxes': {
    title: 'Custom Mascara Boxes | Luxury Cosmetic Packaging',
    description: 'Boxy Pack produces high-quality mascara boxes with fast turnaround, free shipping, and premium design to enhance cosmetic product appeal. Shop Today.',
  },
  // Custom Nail Polish Boxes
  'custom-nail-polish-boxes': {
    title: 'Custom Nail Polish Boxes | Stylish Premium Packaging',
    description: 'Boxy Pack delivers premium nail polish boxes with fast turnaround, free shipping, and professional designs for standout beauty product packaging. Customize Now.',
  },
  // Custom Lip Balm Boxes
  'custom-lip-balm-boxes': {
    title: 'Custom Lip Balm Boxes | Premium Cosmetic Packaging',
    description: 'Boxy Pack creates high-quality custom lip balm boxes with fast turnaround, free shipping, and stylish packaging to elevate your beauty brand. Order Now.',
  },
  // Custom Eyeliner Boxes
  'custom-eyeliner-boxes': {
    title: 'Custom Eyeliner Boxes | Luxury Cosmetic Packaging',
    description: 'Boxy Pack delivers premium eyeliner boxes with fast turnaround, free shipping, and elegant design to enhance your cosmetic product presentation. Shop Today.',
  },
  // Foundation Boxes
  'foundation-boxes': {
    title: 'Custom Foundation Boxes | Premium Makeup Packaging',
    description: 'Boxy Pack produces premium foundation boxes with fast turnaround, free shipping, and stylish designs to showcase your cosmetic products beautifully. Customize Now.',
  },
  // Lotion Boxes
  'lotion-boxes': {
    title: 'Custom Lotion Boxes | Premium Skincare Packaging',
    description: 'Boxy Pack delivers high-quality lotion boxes with fast turnaround, free shipping, and elegant design to enhance your skincare product presentation. Order Now.',
  },
  // Eye Lash Boxes
  'eye-lash-boxes': {
    title: 'Custom Eyelash Boxes | Luxury Cosmetic Packaging',
    description: 'Boxy Pack delivers premium eyelash boxes with fast turnaround, free shipping, and elegant packaging to elevate your beauty products. Customize Now.',
  },
  // Cosmetic Gift Boxes
  'cosmetic-gift-boxes': {
    title: 'Cosmetic Gift Boxes | Premium Luxury Packaging',
    description: 'Boxy Pack produces premium cosmetic gift boxes with fast turnaround, free shipping, and stylish design to make your beauty products irresistible. Order Now.',
  },
  // Olive Oil Boxes
  'olive-oil-boxes': {
    title: 'Custom Olive Oil Boxes | Premium Cosmetic Packaging',
    description: 'Boxy Pack delivers premium olive oil boxes with fast turnaround, free shipping, and elegant design for cosmetic and beauty product presentation. Shop Today.',
  },
  // Essential Oil Boxes
  'essential-oil-boxes': {
    title: 'Custom Essential Oil Boxes | Premium Luxury Packaging',
    description: 'Boxy Pack creates high-quality essential oil boxes with fast turnaround, free shipping, and stylish design for premium cosmetic product packaging. Customize Now.',
  },
  // Beard Oil Boxes
  'beard-oil-boxes': {
    title: 'Custom Beard Oil Boxes | Premium Cosmetic Packaging',
    description: 'Boxy Pack delivers premium beard oil boxes with fast turnaround, free shipping, and stylish design to enhance your grooming product presentation. Order Now.',
  },
  // Serum Boxes
  'serum-boxes': {
    title: 'Custom Serum Boxes | Luxury Cosmetic Packaging',
    description: 'Boxy Pack produces high-quality serum boxes with fast turnaround, free shipping, and elegant designs for standout cosmetic product packaging. Shop Today.',
  },
  // FOOD BOXES - Category Page
  'food-boxes': {
    title: 'Custom Food Boxes | Premium Packaging for Your Products',
    description: 'Boxy Pack delivers premium custom food boxes with fast turnaround, free shipping, and durable, hygienic design for standout product presentation. Order Now.',
  },
  // Custom French Fry Boxes
  'custom-french-fry-boxes': {
    title: 'Premium French Fry Boxes | Custom Fast Food Packaging',
    description: 'Boxy Pack produces high-quality French fry boxes with fast turnaround, free shipping, and durable design to keep your food fresh and appealing. Customize Now.',
  },
  // Custom Coffee Boxes
  'custom-coffee-boxes': {
    title: 'Custom Coffee Boxes | Premium Packaging for Cafes',
    description: 'Boxy Pack delivers premium coffee boxes with fast turnaround, free shipping, and elegant designs to showcase your coffee products. Order Now.',
  },
  // Custom Coffee Cups
  'custom-coffee-cups': {
    title: 'Custom Coffee Cups | Premium Beverage Packaging',
    description: 'Boxy Pack produces high-quality custom coffee cups with fast turnaround, free shipping, and durable materials for a professional cafe presentation. Shop Today.',
  },
  // Custom Coffee Cup Sleeves
  'custom-coffee-cup-sleeves': {
    title: 'Custom Coffee Cup Sleeves | Premium Hot Drink Packaging',
    description: 'Boxy Pack delivers premium coffee cup sleeves with fast turnaround, free shipping, and stylish design for safe and attractive beverage packaging. Customize Now.',
  },
  // Custom Chinese Takeout Boxes
  'custom-chinese-takeout-boxes': {
    title: 'Chinese Takeout Boxes | Premium Custom Food Packaging',
    description: 'Boxy Pack delivers premium Chinese takeout boxes with fast turnaround, free shipping, and professional design for stylish and secure food delivery. Shop Today.',
  },
  // Custom Popcorn Boxes
  'custom-popcorn-boxes': {
    title: 'Custom Popcorn Boxes | Premium Snack Packaging',
    description: 'Boxy Pack produces premium popcorn boxes with fast turnaround, free shipping, and fun, attractive designs for movie nights, parties, and promotions. Customize Now.',
  },
  // Custom Snack Boxes
  'custom-snack-boxes': {
    title: 'Custom Snack Boxes | Premium Food Packaging Solutions',
    description: 'Boxy Pack delivers premium snack boxes with fast turnaround, free shipping, and durable design for professional and appealing food packaging. Order Now.',
  },
  // Custom Tea Boxes
  'custom-tea-boxes': {
    title: 'Custom Tea Boxes | Premium Packaging for Loose & Bags',
    description: 'Boxy Pack produces high-quality custom tea boxes with fast turnaround, free shipping, and elegant designs for premium beverage presentation. Shop Today.',
  },
  // Custom Burger Boxes
  'custom-burger-boxes': {
    title: 'Custom Burger Boxes | Premium Fast Food Packaging',
    description: 'Boxy Pack delivers high-quality custom burger boxes with fast turnaround, free shipping, and durable design to keep your food fresh and professional. Customize Now.',
  },
  // Sandwich Boxes
  'sandwich-boxes': {
    title: 'Custom Sandwich Boxes | Premium Food Packaging',
    description: 'Boxy Pack produces premium sandwich boxes with fast turnaround, free shipping, and sturdy design for attractive and hygienic food packaging. Order Now.',
  },
  // GIFT BOXES - Category Page
  'gift-boxes': {
    title: 'Custom Gift Boxes | Premium Packaging for Every Occasion',
    description: 'Boxy Pack delivers premium custom gift boxes with fast turnaround, free shipping, and stylish designs to elevate any gift presentation. Order Now.',
  },
  // Gift Pillow Boxes
  'gift-pillow-boxes': {
    title: 'Custom Pillow Gift Boxes | Elegant Premium Packaging',
    description: 'Boxy Pack produces premium pillow gift boxes with fast turnaround, free shipping, and stylish designs to make gifts look luxurious and memorable. Customize Now.',
  },
  // Birthday Gift Boxes
  'birthday-gift-boxes': {
    title: 'Birthday Gift Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium birthday gift boxes with fast turnaround, free shipping, and elegant designs for a memorable unboxing experience. Order Now.',
  },
  // Sweet Gift Boxes
  'sweet-gift-boxes': {
    title: 'Custom Sweet Gift Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack produces premium sweet gift boxes with fast turnaround, free shipping, and stylish designs to present chocolates, candies, and treats beautifully. Customize Now.',
  },
  // Party Favor Boxes
  'party-favor-boxes': {
    title: 'Party Favor Boxes | Premium Custom Gift Packaging',
    description: 'Boxy Pack delivers high-quality party favor boxes with fast turnaround, free shipping, and stylish designs to delight guests with elegant gifts. Order Now.',
  },
  // Round Gift Boxes
  'round-gift-boxes': {
    title: 'Round Gift Boxes | Premium Stylish Custom Packaging',
    description: 'Boxy Pack produces premium round gift boxes with fast turnaround, free shipping, and luxurious designs for an unforgettable gift presentation. Customize Now.',
  },
  // Gift Boxes with Lid
  'gift-boxes-with-lid': {
    title: 'Gift Boxes with Lid | Premium Custom Packaging',
    description: 'Boxy Pack delivers high-quality gift boxes with lid, fast turnaround, free shipping, and elegant designs to elevate gift presentation. Shop Today.',
  },
  // Custom Deluxe Gift Boxes
  'custom-deluxe-gift-boxes': {
    title: 'Deluxe Gift Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack produces premium deluxe gift boxes with fast turnaround, free shipping, and stylish designs for luxurious and professional gift presentation. Order Now.',
  },
  // Custom Square Gift Boxes
  'custom-square-gift-boxes': {
    title: 'Square Gift Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack delivers premium square gift boxes with fast turnaround, free shipping, and elegant designs for standout gift presentation. Customize Now.',
  },
  // Small Gift Boxes
  'small-gift-boxes': {
    title: 'Small Gift Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces high-quality small gift boxes with fast turnaround, free shipping, and stylish designs to make every gift special and memorable. Order Now.',
  },
  // JEWELRY BOXES - Category Page
  'jewelry-boxes': {
    title: 'Custom Jewelry Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack delivers premium jewelry boxes with fast turnaround, free shipping, and stylish designs to enhance the presentation of all jewelry items. Order Now.',
  },
  // RETAIL BOXES - Category Page
  'retail-boxes': {
    title: 'Custom Retail Boxes | Premium Packaging for Products',
    description: 'Boxy Pack delivers premium retail boxes with fast turnaround, free shipping, and stylish designs to enhance the presentation of your products. Order Now.',
  },
  // Custom Toy Boxes
  'custom-toy-boxes': {
    title: 'Custom Toy Boxes | Premium Playful Packaging',
    description: 'Boxy Pack produces high-quality custom toy boxes with fast turnaround, free shipping, and durable design for safe and attractive toy packaging. Customize Now.',
  },
  // Business Card Boxes
  'business-card-boxes': {
    title: 'Business Card Boxes | Premium Professional Packaging',
    description: 'Boxy Pack delivers premium business card boxes with fast turnaround, free shipping, and stylish design to showcase your brand professionally. Order Now.',
  },
  // Custom Dispenser Boxes
  'custom-dispenser-boxes': {
    title: 'Custom Dispenser Boxes | Premium Retail Packaging',
    description: 'Boxy Pack produces premium custom dispenser boxes with fast turnaround, free shipping, and elegant design for practical and attractive product display. Shop Today.',
  },
  // CANDLE BOXES - Category Page
  'candle-boxes': {
    title: 'Custom Candle Boxes | Premium Packaging for Candles',
    description: 'Boxy Pack delivers premium candle boxes with fast turnaround, free shipping, and elegant designs to enhance candle presentation and branding. Order Now.',
  },
  // Candle Gift Boxes
  'candle-gift-boxes': {
    title: 'Luxury Candle Gift Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces premium candle gift boxes with fast turnaround, free shipping, and stylish design for luxurious candle presentation. Customize Now.',
  },
  // Luxury Candle Boxes
  'luxury-candle-boxes': {
    title: 'Luxury Candle Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack delivers high-quality luxury candle boxes with fast turnaround, free shipping, and sophisticated design to elevate your candle brand. Order Now.',
  },
  // Candle Boxes with Inserts
  'candle-boxes-with-inserts': {
    title: 'Candle Boxes with Inserts | Premium Secure Packaging',
    description: 'Boxy Pack produces premium candle boxes with inserts for safe packaging, fast turnaround, free shipping, and elegant design. Shop Today.',
  },
  // Candle Shipping Boxes
  'candle-shipping-boxes': {
    title: 'Candle Shipping Boxes | Durable Premium Packaging',
    description: 'Boxy Pack delivers durable candle shipping boxes with fast turnaround, free shipping, and secure, premium packaging to protect your products. Order Now.',
  },
  // Taper Candle Boxes
  'taper-candle-boxes': {
    title: 'Taper Candle Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces premium taper candle boxes with fast turnaround, free shipping, and stylish design for elegant candle presentation. Customize Now.',
  },
  // Custom Jar Candle Boxes
  'custom-jar-candle-boxes': {
    title: 'Custom Jar Candle Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack delivers high-quality jar candle boxes with fast turnaround, free shipping, and premium design to showcase candles professionally. Order Now.',
  },
  // Wax Melt Boxes
  'wax-melt-boxes': {
    title: 'Wax Melt Boxes | Premium Custom Candle Packaging',
    description: 'Boxy Pack produces premium wax melt boxes with fast turnaround, free shipping, and stylish design for safe and attractive candle packaging. Customize Now.',
  },
  // Kraft Candle Boxes
  'kraft-candle-boxes': {
    title: 'Kraft Candle Boxes | Eco-Friendly Premium Packaging',
    description: 'Boxy Pack delivers premium kraft candle boxes with fast turnaround, free shipping, and eco-friendly design for sustainable and stylish candle presentation. Order Now.',
  },
  // Candle Subscription Boxes
  'candle-subscription-boxes': {
    title: 'Candle Subscription Boxes | Premium Packaging',
    description: 'Boxy Pack produces premium candle subscription boxes with fast turnaround, free shipping, and elegant design for high-end candle delivery experience. Shop Today.',
  },
  // SHIPPING BOXES - Category Page
  'shipping-boxes': {
    title: 'Custom Shipping Boxes | Premium Durable Packaging',
    description: 'Boxy Pack delivers premium custom shipping boxes with fast turnaround, free shipping, and strong design to protect your products during transit. Order Now.',
  },
  // Black Shipping Boxes
  'black-shipping-boxes': {
    title: 'Black Shipping Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack produces premium black shipping boxes with fast turnaround, free shipping, and durable design for secure and professional product delivery. Customize Now.',
  },
  // Corrugated Shipping Boxes
  'corrugated-shipping-boxes': {
    title: 'Corrugated Shipping Boxes | Strong Premium Packaging',
    description: 'Boxy Pack produces durable corrugated shipping boxes with fast turnaround, free shipping, and sturdy construction for safe product transit. Shop Today.',
  },
  // SOAP BOXES - Category Page
  'soap-boxes': {
    title: 'Custom Soap Boxes | Premium Packaging for Soap Products',
    description: 'Boxy Pack delivers premium custom soap boxes with fast turnaround, free shipping, and stylish design to showcase and protect soap products. Order Now.',
  },
  // Soap Sleeve Packaging
  'soap-sleeve-packaging': {
    title: 'Soap Sleeve Packaging | Premium Custom Boxes',
    description: 'Boxy Pack produces high-quality soap sleeve packaging with fast turnaround, free shipping, and durable design for professional soap presentation. Customize Now.',
  },
  // Custom Bath Bomb Boxes
  'custom-bath-bomb-boxes': {
    title: 'Custom Bath Bomb Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack delivers premium bath bomb boxes with fast turnaround, free shipping, and stylish design to enhance your bath product presentation. Order Now.',
  },
  // Soap Wrapping Paper
  'soap-wrapping-paper': {
    title: 'Soap Wrapping Paper | Premium Custom Packaging',
    description: 'Boxy Pack produces high-quality soap wrapping paper with fast turnaround, free shipping, and attractive design for professional soap packaging. Shop Today.',
  },
  // Handmade Soap Boxes
  'handmade-soap-boxes': {
    title: 'Handmade Soap Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium handmade soap boxes with fast turnaround, free shipping, and elegant design to showcase artisanal soaps beautifully. Customize Now.',
  },
  // Luxury Soap Packaging
  'luxury-soap-packaging': {
    title: 'Luxury Soap Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack produces high-quality luxury soap boxes with fast turnaround, free shipping, and stylish design to elevate your soap brand. Order Now.',
  },
  // Square Soap Boxes
  'square-soap-boxes': {
    title: 'Square Soap Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium square soap boxes with fast turnaround, free shipping, and elegant design for professional soap presentation. Customize Now.',
  },
  // Soap Bar Box
  'soap-bar-box': {
    title: 'Soap Bar Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces high-quality soap bar boxes with fast turnaround, free shipping, and stylish design to protect and present your soap professionally. Order Now.',
  },
  // Paper Soap Boxes
  'paper-soap-boxes': {
    title: 'Paper Soap Boxes | Eco-Friendly Premium Packaging',
    description: 'Boxy Pack delivers premium paper soap boxes with fast turnaround, free shipping, and eco-friendly design for sustainable and elegant soap packaging. Shop Today.',
  },
  // Kraft Soap Boxes
  'kraft-soap-boxes': {
    title: 'Kraft Soap Boxes | Eco-Friendly Premium Packaging',
    description: 'Boxy Pack produces premium kraft soap boxes with fast turnaround, free shipping, and durable, eco-friendly design to enhance your soap presentation. Customize Now.',
  },
  // APPAREL BOXES - Category Page
  'apparel-boxes': {
    title: 'Custom Apparel Boxes | Premium Packaging for Clothing',
    description: 'Boxy Pack delivers premium custom apparel boxes with fast turnaround, free shipping, and stylish design to enhance your clothing product presentation. Order Now.',
  },
  // Cufflink Boxes
  'cufflink-boxes': {
    title: 'Custom Cufflink Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack produces high-quality cufflink boxes with fast turnaround, free shipping, and stylish design to showcase jewelry and accessories professionally. Customize Now.',
  },
  // Tie Boxes
  'tie-boxes': {
    title: 'Custom Tie Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack delivers premium tie boxes with fast turnaround, free shipping, and elegant design to enhance your clothing accessory presentation. Order Now.',
  },
  // Belt Boxes
  'belt-boxes': {
    title: 'Custom Belt Boxes | Premium Apparel Packaging',
    description: 'Boxy Pack produces high-quality belt boxes with fast turnaround, free shipping, and stylish design for professional and attractive apparel packaging. Customize Now.',
  },
  // Clothing Boxes
  'clothing-boxes': {
    title: 'Custom Clothing Boxes | Premium Packaging Solutions',
    description: 'Boxy Pack delivers premium clothing boxes with fast turnaround, free shipping, and durable design to elevate your apparel brand presentation. Order Now.',
  },
  // Lingerie Boxes
  'lingerie-boxes': {
    title: 'Custom Lingerie Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack produces premium lingerie boxes with fast turnaround, free shipping, and stylish design to enhance intimate apparel presentation. Customize Now.',
  },
  // Underwear Boxes
  'underwear-boxes': {
    title: 'Custom Underwear Boxes | Premium Packaging Solutions',
    description: 'Boxy Pack delivers premium underwear boxes with fast turnaround, free shipping, and durable design to showcase apparel elegantly and professionally. Order Now.',
  },
  // T-Shirt Boxes
  't-shirt-boxes': {
    title: 'Custom T-Shirt Boxes | Premium Apparel Packaging',
    description: 'Boxy Pack produces high-quality T-shirt boxes with fast turnaround, free shipping, and stylish design to elevate clothing presentation and brand appeal. Customize Now.',
  },
  // SPORTS BOXES - Category Page
  'sports-boxes': {
    title: 'Custom Sports Boxes | Premium Packaging for Gear',
    description: 'Boxy Pack delivers premium sports boxes with fast turnaround, free shipping, and durable design to protect and present sports products professionally. Order Now.',
  },
  // Cardboard Shoe Boxes
  'cardboard-shoe-boxes': {
    title: 'Cardboard Shoe Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces high-quality cardboard shoe boxes with fast turnaround, free shipping, and durable design to showcase and protect footwear. Customize Now.',
  },
  // Shoe Shipping Boxes
  'shoe-shipping-boxes': {
    title: 'Shoe Shipping Boxes | Premium Durable Packaging',
    description: 'Boxy Pack delivers premium shoe shipping boxes with fast turnaround, free shipping, and sturdy design to ensure safe delivery and professional presentation. Order Now.',
  },
  // Custom Shoe Boxes
  'custom-shoe-boxes': {
    title: 'Custom Shoe Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack produces high-quality custom shoe boxes with fast turnaround, free shipping, and elegant design for retail-ready and gift packaging. Customize Now.',
  },
  // Shoe Boxes with Lid
  'shoe-boxes-with-lid': {
    title: 'Shoe Boxes with Lid | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium shoe boxes with lid, fast turnaround, free shipping, and stylish design for secure and attractive footwear packaging. Order Now.',
  },
  // Golf Ball Boxes
  'golf-ball-boxes': {
    title: 'Golf Ball Boxes | Premium Custom Sports Packaging',
    description: 'Boxy Pack produces high-quality golf ball boxes with fast turnaround, free shipping, and stylish design to present and protect golf accessories. Customize Now.',
  },
  // CIGARETTE BOXES - Category Page
  'cigarette-boxes': {
    title: 'Custom Cigarette Boxes | Premium Tobacco Packaging',
    description: 'Boxy Pack delivers premium custom cigarette boxes with fast turnaround, free shipping, and durable design for stylish and secure tobacco product packaging. Order Now.',
  },
  // CBD BOXES - Category Page
  'cbd-boxes': {
    title: 'Custom CBD Boxes | Premium Packaging for Cannabis',
    description: 'Boxy Pack delivers premium custom CBD boxes with fast turnaround, free shipping, and stylish design to enhance cannabis product presentation. Order Now.',
  },
  // CBD Gift Boxes
  'cbd-gift-boxes': {
    title: 'CBD Gift Boxes | Premium Elegant Cannabis Packaging',
    description: 'Boxy Pack produces premium CBD gift boxes with fast turnaround, free shipping, and stylish design for professional and attractive cannabis gifting. Customize Now.',
  },
  // CBD Gummies Boxes
  'cbd-gummies-boxes': {
    title: 'CBD Gummies Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers high-quality CBD gummies boxes with fast turnaround, free shipping, and durable design for safe and appealing product packaging. Order Now.',
  },
  // Custom Cannabis Boxes
  'custom-cannabis-boxes': {
    title: 'Custom Cannabis Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack produces premium custom cannabis boxes with fast turnaround, free shipping, and elegant design for professional CBD product presentation. Customize Now.',
  },
  // CBD Oil Boxes
  'cbd-oil-boxes': {
    title: 'CBD Oil Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium CBD oil boxes with fast turnaround, free shipping, and stylish design to showcase and protect your cannabis products. Order Now.',
  },
  // Hemp Oil Boxes
  'hemp-oil-boxes': {
    title: 'Hemp Oil Boxes | Premium Custom CBD Packaging',
    description: 'Boxy Pack produces premium hemp oil boxes with fast turnaround, free shipping, and stylish design for safe and professional CBD product packaging. Customize Now.',
  },
  // Pre Roll Boxes
  'pre-roll-boxes': {
    title: 'CBD Pre Roll Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium CBD pre roll boxes with fast turnaround, free shipping, and elegant design for professional cannabis product packaging. Order Now.',
  },
  // CBD Tincture Boxes
  'cbd-tincture-boxes': {
    title: 'CBD Tincture Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack produces high-quality CBD tincture boxes with fast turnaround, free shipping, and stylish design for safe and attractive cannabis packaging. Customize Now.',
  },
  // VAPE AND E-CIGARETTE BOXES - Category Page
  'vape-and-e-cigarette-boxes': {
    title: 'Custom Vape And E-Cigarette Boxes | Premium Packaging',
    description: 'Boxy Pack delivers premium custom vape and e-cigarette boxes with fast turnaround, free shipping, and stylish design to enhance your e-cigarette product presentation. Order Now.',
  },
  // Vape Cartridge Packaging
  'vape-cartridge-packaging': {
    title: 'Vape Cartridge Boxes | Premium Stylish Packaging',
    description: 'Boxy Pack delivers premium vape cartridge boxes with fast turnaround, free shipping, and elegant design for safe and attractive e-cigarette product display. Order Now.',
  },
  // Disposable Vape Packaging
  'disposable-vape-packaging': {
    title: 'Disposable Vape Boxes | Premium Packaging Solutions',
    description: 'Boxy Pack delivers premium disposable vape boxes with fast turnaround, free shipping, and sturdy design for safe and attractive e-cigarette packaging. Order Now.',
  },
  // E-Liquid Boxes
  'e-liquid-bottle-boxes': {
    title: 'E-Liquid Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces high-quality E-Liquid boxes with fast turnaround, free shipping, and durable design for professional vape product display. Customize Now.',
  },
  // E-liquid Display Boxes
  'e-liquid-display-boxes': {
    title: 'E-liquid Display Boxes | Premium Vape Packaging',
    description: 'Boxy Pack delivers premium e-liquid display boxes with fast turnaround, free shipping, and stylish design for attractive and secure vape product presentation. Order Now.',
  },
  // E-liquid Gift Boxes
  'e-liquid-gift-boxes': {
    title: 'E-liquid Gift Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces premium e-liquid gift boxes with fast turnaround, free shipping, and elegant design to present vape products professionally. Customize Now.',
  },
  // STATIONERY BOXES - Category Page
  'stationery-boxes': {
    title: 'Custom Stationery Boxes | Premium Packaging for Office',
    description: 'Boxy Pack delivers premium custom stationery boxes with fast turnaround, free shipping, and stylish design to enhance professional and school supplies presentation. Order Now.',
  },
  // Custom Pencil Boxes
  'custom-pencil-boxes': {
    title: 'Custom Pencil Boxes | Premium School & Office Packaging',
    description: 'Boxy Pack produces high-quality custom pencil boxes with fast turnaround, free shipping, and durable design to organize and present stationery professionally. Customize Now.',
  },
  // Custom Book Boxes
  'custom-book-boxes': {
    title: 'Custom Book Boxes | Premium Stationery Packaging',
    description: 'Boxy Pack delivers premium custom book boxes with fast turnaround, free shipping, and stylish design for professional stationery and gift presentation. Order Now.',
  },
  // Custom Presentation Folders
  'custom-presentation-folders': {
    title: 'Custom Presentation Folders | Premium Stationery Boxes',
    description: 'Boxy Pack produces premium presentation folders with fast turnaround, free shipping, and stylish design to showcase documents professionally. Customize Now.',
  },
  // Pen Gift Boxes
  'pen-gift-boxes': {
    title: 'Pen Gift Boxes | Premium Custom Stationery Packaging',
    description: 'Boxy Pack delivers high-quality pen gift boxes with fast turnaround, free shipping, and elegant design for professional stationery gifting. Order Now.',
  },
  // Custom Pen Boxes
  'custom-pen-boxes': {
    title: 'Custom Pen Boxes | Premium Stationery Packaging',
    description: 'Boxy Pack produces premium custom pen boxes with fast turnaround, free shipping, and stylish design to showcase pens professionally. Customize Now.',
  },
  // CHRISTMAS BOXES - Category Page
  'christmas-boxes': {
    title: 'Custom Christmas Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack delivers premium custom Christmas boxes with fast turnaround, free shipping, and stylish designs to make holiday gifts memorable. Order Now.',
  },
  // Christmas Boxes with Lids
  'christmas-boxes-with-lids': {
    title: 'Christmas Boxes with Lids | Premium Holiday Packaging',
    description: 'Boxy Pack produces high-quality Christmas boxes with lids with fast turnaround, free shipping, and elegant designs for festive gift presentation. Customize Now.',
  },
  // Christmas Cupcake Boxes
  'christmas-cupcake-boxes': {
    title: 'Christmas Cupcake Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack delivers premium Christmas cupcake boxes with fast turnaround, free shipping, and stylish design to make your holiday treats irresistible. Order Now.',
  },
  // Christmas Candy Boxes
  'christmas-candy-boxes': {
    title: 'Christmas Candy Boxes | Premium Festive Packaging',
    description: 'Boxy Pack produces premium Christmas candy boxes with fast turnaround, free shipping, and vibrant designs for delightful holiday gifting. Customize Now.',
  },
  // Christmas Gift Boxes
  'christmas-gift-boxes': {
    title: 'Christmas Gift Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack delivers high-quality Christmas gift boxes with fast turnaround, free shipping, and elegant design for festive presents and memorable gifting. Order Now.',
  },
  // Christmas Eve Boxes
  'christmas-eve-boxes': {
    title: 'Christmas Eve Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack produces premium Christmas Eve boxes with fast turnaround, free shipping, and stylish designs for special festive gift presentation. Customize Now.',
  },
  // Christmas Present Boxes
  'christmas-present-boxes': {
    title: 'Christmas Present Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack delivers premium Christmas present boxes with fast turnaround, free shipping, and festive designs to make gifts look magical and elegant. Order Now.',
  },
  // Christmas Cookie Boxes
  'christmas-cookie-boxes': {
    title: 'Christmas Cookie Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack produces high-quality Christmas cookie boxes with fast turnaround, free shipping, and festive designs for beautiful and secure treat presentation. Customize Now.',
  },
  // Christmas Treat Boxes
  'christmas-treat-boxes': {
    title: 'Christmas Treat Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack delivers premium Christmas treat boxes with fast turnaround, free shipping, and stylish design for festive and attractive snack presentation. Order Now.',
  },
  // Christmas Paper Bags
  'christmas-paper-bags': {
    title: 'Christmas Paper Bags | Premium Holiday Packaging',
    description: 'Boxy Pack produces premium Christmas paper bags with fast turnaround, free shipping, and festive design for attractive and professional gift packaging. Customize Now.',
  },
  // Christmas Gift Bags
  'christmas-gift-bags': {
    title: 'Christmas Gift Bags | Premium Holiday Packaging',
    description: 'Boxy Pack delivers high-quality Christmas gift bags with fast turnaround, free shipping, and stylish design to make holiday presents look elegant. Order Now.',
  },
  // Christmas Favor Boxes
  'christmas-favor-boxes': {
    title: 'Christmas Favor Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack produces premium Christmas favor boxes with fast turnaround, free shipping, and festive design to impress guests and make gifts memorable. Customize Now.',
  },
  // CHOCOLATE BOXES - Category Page
  'chocolate-boxes': {
    title: 'Custom Chocolate Boxes | Premium Sweet Packaging',
    description: 'Boxy Pack delivers premium custom chocolate boxes with fast turnaround, free shipping, and stylish designs to make chocolates look irresistible. Order Now.',
  },
  // Custom Chocolate Boxes
  'custom-chocolate-boxes': {
    title: 'Custom Chocolate Boxes | Premium Sweet Packaging',
    description: 'Boxy Pack delivers premium custom chocolate boxes with fast turnaround, free shipping, and stylish designs to make chocolates look irresistible. Order Now.',
  },
  // Luxury Chocolate Boxes
  'luxury-chocolate-boxes': {
    title: 'Luxury Chocolate Boxes | Premium Elegant Packaging',
    description: 'Boxy Pack produces premium luxury chocolate boxes with fast turnaround, free shipping, and elegant design for high-end chocolate presentation. Customize Now.',
  },
  // Chocolate Bomb Boxes
  'chocolate-bomb-boxes': {
    title: 'Chocolate Bomb Boxes | Premium Sweet Packaging',
    description: 'Boxy Pack delivers premium chocolate bomb boxes with fast turnaround, free shipping, and stylish design to make your chocolates look fun and gift-ready. Order Now.',
  },
  // Chocolate Gift Boxes
  'chocolate-gift-boxes': {
    title: 'Chocolate Gift Boxes | Premium Sweet Packaging',
    description: 'Boxy Pack produces high-quality chocolate gift boxes with fast turnaround, free shipping, and elegant design for professional and festive chocolate gifting. Customize Now.',
  },
  // Christmas Chocolate Boxes
  'christmas-chocolate-boxes': {
    title: 'Christmas Chocolate Boxes | Premium Holiday Packaging',
    description: 'Boxy Pack delivers premium Christmas chocolate boxes with fast turnaround, free shipping, and festive design to make chocolates look magical for holidays. Order Now.',
  },
  // Chocolate Bar Boxes
  'chocolate-bar-boxes': {
    title: 'Chocolate Bar Boxes | Premium Sweet Packaging',
    description: 'Boxy Pack produces premium chocolate bar boxes with fast turnaround, free shipping, and stylish design to present and protect chocolate bars professionally. Customize Now.',
  },
  // CEREAL BOXES - Category Page
  'cereal-boxes': {
    title: 'Custom Cereal Boxes | Premium Breakfast Packaging',
    description: 'Boxy Pack delivers premium custom cereal boxes with fast turnaround, free shipping, and stylish design to showcase cereals attractively. Order Now.',
  },
  // Cereal Boxes Wholesale
  'cereal-boxes-wholesale': {
    title: 'Wholesale Cereal Boxes | Premium Bulk Packaging',
    description: 'Boxy Pack produces premium wholesale cereal boxes with fast turnaround, free shipping, and durable design for bulk cereal product packaging. Customize Now.',
  },
  // Custom Cereal Boxes
  'custom-cereal-boxes': {
    title: 'Custom Cereal Boxes | Premium Breakfast Packaging',
    description: 'Boxy Pack delivers premium custom cereal boxes with fast turnaround, free shipping, and stylish design to showcase cereals attractively. Order Now.',
  },
  // Corn Flakes Boxes
  'corn-flakes-boxes': {
    title: 'Corn Flakes Boxes | Premium Breakfast Packaging',
    description: 'Boxy Pack delivers premium corn flakes boxes with fast turnaround, free shipping, and stylish design for attractive cereal presentation. Order Now.',
  },
  // Unique Cereal Boxes
  'unique-cereal-boxes': {
    title: 'Unique Cereal Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces high-quality unique cereal boxes with fast turnaround, free shipping, and creative design for standout breakfast cereal presentation. Customize Now.',
  },
  // Breakfast Cereal Boxes
  'breakfast-cereal-boxes': {
    title: 'Breakfast Cereal Boxes | Premium Custom Packaging',
    description: 'Boxy Pack delivers premium breakfast cereal boxes with fast turnaround, free shipping, and stylish design for professional cereal packaging. Order Now.',
  },
  // Colorful Cereal Boxes
  'colorful-cereal-boxes': {
    title: 'Colorful Cereal Boxes | Premium Eye-Catching Packaging',
    description: 'Boxy Pack produces vibrant colorful cereal boxes with fast turnaround, free shipping, and stylish design to attract customers and boost breakfast sales. Customize Now.',
  },
  // Vintage Cereal Boxes
  'vintage-cereal-boxes': {
    title: 'Vintage Cereal Boxes | Premium Retro Packaging',
    description: 'Boxy Pack delivers premium vintage cereal boxes with fast turnaround, free shipping, and classic design for unique and stylish breakfast packaging. Order Now.',
  },
  // Retro Cereal Boxes
  'retro-cereal-boxes': {
    title: 'Retro Cereal Boxes | Premium Custom Packaging',
    description: 'Boxy Pack produces retro cereal boxes with fast turnaround, free shipping, and stylish design to present breakfast cereals with a nostalgic twist. Customize Now.',
  },
  // 90s Cereal Boxes
  '90s-cereal-boxes': {
    title: '90s Cereal Boxes | Premium Nostalgic Packaging',
    description: 'Boxy Pack delivers premium 90s cereal boxes with fast turnaround, free shipping, and vintage design for unique and eye-catching breakfast packaging. Order Now.',
  },
  // 80s Cereal Boxes
  '80s-cereal-boxes': {
    title: '80s Cereal Boxes | Premium Retro Breakfast Packaging',
    description: 'Boxy Pack produces 80s cereal boxes with fast turnaround, free shipping, and stylish design to showcase cereals in nostalgic and attractive packaging. Customize Now.',
  },
  // PRE ROLL BOXES - Category Page
  'pre-roll-boxes-industry': {
    title: 'Custom Pre Roll Boxes | Premium Cannabis Packaging',
    description: 'Boxy Pack delivers premium custom pre roll boxes with fast turnaround, free shipping, and stylish design for professional and secure cannabis product packaging. Order Now.',
  },
};