const fs = require('fs');
const path = require('path');

// Read extracted content
const extractedContent = JSON.parse(
  fs.readFileSync('/tmp/all-why-choose-us.json', 'utf8')
);

// Function to convert product name to slug
function productNameToSlug(productName) {
  // Mapping of content file product names to data file slugs
  const slugMapping = {
    'Rigid Boxes': 'rigid-boxes',
    'Magnetic Rigid Boxes': 'magnetic-closure-rigid-box',
    'Two-Piece Rigid Boxes': 'two-piece-rigid-boxes',
    'Foldable Rigid Boxes': 'foldable-rigid-boxes',
    'Sliding Rigid Boxes': 'sliding-sleeve-rigid-boxes-match-style-boxes',
    'Child-Resistant Rigid Boxes': 'child-resistant-rigid-boxes',
    'Rigid Paper Tubes': 'rigid-paper-tubes',
    'Briefcase Style Rigid Boxes': 'brief-case-style',
    'Book Style Rigid Boxes': 'book-style-rigid-boxes',
    'Hexagon Rigid Boxes': 'hexagon-rigid-boxes',
    'Round Rigid Boxes': 'round-rigid-boxes',
    'Rigid Book Sleeves': 'rigid-book-sleeves',
    'Shoulder Rigid Boxes': 'shoulder-rigid-boxes',
    'Kraft Boxes': 'kraft-boxes',
    'Kraft Mailer Boxes': 'kraft-mailer-box',
    'Kraft Boxes with Lids': 'kraft-box-with-lid',
    'Kraft Pillow Boxes': 'kraft-pillow-box',
    'Kraft Gable Boxes': 'kraft-gable-box',
    'Kraft Bakery Boxes': 'kraft-bakery-cake-box',
    'Kraft Sleeve Boxes': 'kraft-sleeve-box',
    'Kraft Tuck End Boxes': 'kraft-tuck-end-box',
    'Kraft Five Panel Hanger Boxes': 'kraft-five-panel-hanger-box',
    'Kraft Six-Corner Boxes': 'kraft-side-lock-six-corner-box', // Might need to handle both
    'Kraft Seal End Auto Bottom Boxes': 'kraft-seal-end-auto-bottom-box',
    'Kraft Auto Bottom Trays': 'kraft-single-wall-auto-bottom-tray',
    'Kraft Two Piece Boxes': 'kraft-two-piece-box',
    'Kraft Cigarette Boxes': 'kraft-cigarette-box',
    'Kraft Bookend Boxes': 'kraft-bookend-box',
    'Kraft Dispenser Boxes': 'kraft-dispenser-box',
    'Kraft Double Wall Trays': 'kraft-double-wall-frame-tray',
    'Cardboard Boxes': 'cardboard-boxes',
    'Cardboard Display Boxes': 'cardboard-display-box',
    'Cardboard Tuck-End Boxes': 'cardboard-tuck-end-box',
    'Cardboard Boxes with Lids': 'cardboard-box-with-lid',
    'Cardboard Gable Boxes': 'cardboard-gable-box',
    'Cardboard Cake Boxes': 'cardboard-cake-bakery-box',
    'Cardboard Sleeve Boxes': 'cardboard-sleeve-box',
    'Cardboard Dispenser Boxes': 'cardboard-dispenser-box',
    'Cardboard Five Panel Hanger Boxes': 'cardboard-five-panel-hanger',
    'Cardboard Mailer Boxes': 'cardboard-mailer-boxes',
    'Cardboard Double-Locked Wall Lid Boxes': 'cardboard-double-locked-wall-lid-box',
    'Cardboard Side Lock Six-Corner Boxes': 'cardboard-side-lock-six-corner-box',
    'Cardboard Regular Six-Corner Boxes': 'cardboard-regular-six-corner-box',
    'Cardboard Seal End Auto Bottom Boxes': 'cardboard-seal-end-auto-bottom-box',
    'Cardboard Auto Bottom Trays': 'cardboard-auto-bottom-tray',
    'Cardboard Two-Piece Boxes': 'cardboard-two-piece-box',
    'Cardboard Cigarette Boxes': 'cardboard-cigarette-box',
    'Cardboard Bookend Boxes': 'cardboard-bookend-box',
    'Cardboard Double-Wall Frame Trays': 'cardboard-double-wall-frame-tray',
    'Corrugated Boxes': 'corrugated-boxes',
    'Corrugated Gable Boxes': 'corrugated-gable-box',
    'Corrugated Double-Locked Wall Lid Boxes': 'corrugated-double-locked-wall-lid-box',
    'Corrugated Seal End Auto Bottom Boxes': 'corrugated-seal-end-auto-bottom-box',
    'Corrugated Auto Bottom Trays': 'corrugated-auto-bottom-tray',
    'Corrugated Two-Piece Boxes': 'corrugated-two-piece-box',
    'Corrugated Brief Case Style Boxes': 'corrugated-brief-case-style-box',
    'Corrugated Full Flap Shipping Boxes': 'corrugated-full-flap-shipping-box',
    'Bakery Boxes': 'bakery-boxes',
    'Custom Donut Boxes': 'custom-donut-boxes',
    'Custom Pastry Boxes': 'custom-pastry-boxes',
    'Custom Cake Boxes': 'custom-cake-boxes',
    'Custom Cookie Boxes': 'custom-cookie-boxes',
    'Custom Gable Boxes': 'custom-gable-boxes',
    'Custom Candy Boxes': 'custom-candy-boxes',
    'Mini Cupcake Boxes': 'mini-cupcake-boxes',
    'Pink Donut Boxes': 'pink-donut-boxes',
    'Window Bakery Boxes': 'window-bakery-boxes',
    'Bakery Gift Boxes': 'bakery-gift-boxes',
    'Custom Cupcake Boxes': 'custom-cupcake-boxes',
    'Small Cake Boxes': 'small-cake-boxes',
    'Sweet Gift Boxes': 'sweet-gift-boxes',
    'Custom Truffle Boxes': 'custom-truffle-boxes',
    'Jewelry Boxes': 'jewelry-boxes',
    'Anklet Boxes': 'anklet-boxes',
    'Velvet Bags': 'velvet-bags',
    'Kraft Jewelry Boxes': 'kraft-jewelry-boxes',
    'Cardboard Jewelry Boxes': 'cardboard-jewelry-boxes',
    'Jewelry Subscription Boxes': 'jewelry-subscription-box',
    'Pendant Boxes': 'pendant-boxes',
    'Bracelet Boxes': 'bracelet-boxes',
    'Ring Boxes': 'ring-boxes',
    'Earring Boxes': 'earring-boxes',
    'Luxury Jewelry Packaging': 'luxury-jewelry-packaging',
    'Necklace Boxes': 'necklace-boxes',
    'Small Jewelry Boxes': 'small-jewelry-boxes',
    'Necklace Cards': 'necklace-cards',
    'Jewelry Bags': 'jewelry-bags',
    'Soap Boxes': 'soap-boxes-industry',
    'Sports Boxes': 'sports-boxes',
    'Mylar Pouches': 'mylar-boxes'
  };

  // Check if we have a direct mapping
  if (slugMapping[productName]) {
    return slugMapping[productName];
  }

  // Fallback: convert to slug format
  return productName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Read the whyChooseUsData.ts file
const dataFile = path.join(__dirname, '../src/app/data/whyChooseUsData.ts');
let dataContent = fs.readFileSync(dataFile, 'utf8');

// Update each entry
let updateCount = 0;
extractedContent.forEach(section => {
  const slug = productNameToSlug(section.productName);
  
  if (!slug) {
    console.log(`⚠️  No slug mapping for: ${section.productName}`);
    return;
  }

  // Create the eyebrow from product name
  const eyebrow = `Why Choose Our ${section.productName}`;

  // Format features array
  const featuresStr = section.features.map(f => 
    `      {\n        icon: "${f.icon}",\n        title: "${f.title}",\n        description: "${f.description}",\n      }`
  ).join(',\n');

  // Create the new entry
  const newEntry = `  "${slug}": {
    eyebrow: "${eyebrow}",
    heading: "${section.heading.replace(/"/g, '\\"')}",
    description: "",
    features: [
${featuresStr},
    ],
    closingDescription:
      "${section.closingDescription.replace(/"/g, '\\"')}",
  },`;

  // Find and replace the existing entry
  const entryRegex = new RegExp(
    `  "${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}": \\{[^}]*\\{[^}]*\\}[^}]*\\}[^}]*\\}`,
    's'
  );

  // Try to find the entry with a more flexible regex
  const flexibleRegex = new RegExp(
    `("${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}": \\{[\\s\\S]*?)(?=,\\s*"|\\s*\\};\\s*\\/\\/)`,
    's'
  );

  if (flexibleRegex.test(dataContent)) {
    dataContent = dataContent.replace(flexibleRegex, newEntry);
    updateCount++;
    console.log(`✅ Updated: ${section.productName} (${slug})`);
  } else {
    console.log(`❌ Could not find entry for: ${section.productName} (${slug})`);
  }
});

// Write updated content
fs.writeFileSync(dataFile, dataContent, 'utf8');
console.log(`\n✨ Updated ${updateCount} entries in whyChooseUsData.ts`);

