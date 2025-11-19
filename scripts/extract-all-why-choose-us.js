const fs = require('fs');
const path = require('path');

// Read all content files
const contentFiles = [
  '../public/content/BoxyPack Content File 1.md',
  '../public/content/BoxyPack Content File 2.md',
  '../public/content/BoxyPack Content File 3.md'
];

const allSections = [];

contentFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return;
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  
  // Find all "Why Choose Our" sections
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^## \*\*Why Choose Our (.+?)\*\*$/)) {
      const productName = line.match(/^## \*\*Why Choose Our (.+?)\*\*$/)[1].trim();
      
      // Extract heading (next non-empty line after title)
      let heading = '';
      let j = i + 1;
      while (j < lines.length && !heading.trim()) {
        if (lines[j].trim() && !lines[j].match(/^\*/) && !lines[j].match(/^##/)) {
          heading = lines[j].trim();
          break;
        }
        j++;
      }
      
      // Extract features
      const features = [];
      j = i + 1;
      while (j < lines.length && !lines[j].match(/^## \*\*FAQs\*\*/)) {
        const featureMatch = lines[j].match(/^\* \*\*(.+?):\*\* (.+)$/);
        if (featureMatch) {
          features.push({
            title: featureMatch[1].trim(),
            description: featureMatch[2].trim()
          });
        }
        j++;
      }
      
      // Extract closing description (paragraph after last feature, before FAQs)
      let closingDescription = '';
      let foundLastFeature = false;
      let paragraphLines = [];
      j = i + 1;
      
      while (j < lines.length && !lines[j].match(/^## \*\*FAQs\*\*/)) {
        const isFeatureLine = lines[j].match(/^\* \*\*/);
        const isEmptyLine = !lines[j].trim();
        const isParagraphLine = lines[j].trim() && !isFeatureLine && !lines[j].match(/^##/);
        
        if (isFeatureLine) {
          foundLastFeature = true;
          paragraphLines = []; // Reset paragraph when we see a new feature
        } else if (foundLastFeature && isParagraphLine) {
          paragraphLines.push(lines[j].trim());
        } else if (foundLastFeature && isEmptyLine && paragraphLines.length > 0) {
          // We've finished collecting the paragraph
          closingDescription = paragraphLines.join(' ');
          break;
        }
        j++;
      }
      
      // If we didn't find closing description before FAQs, check if there's text after last feature
      if (!closingDescription && paragraphLines.length > 0) {
        closingDescription = paragraphLines.join(' ');
      }
      
      // Map icon based on feature title
      const iconMap = {
        'Strong Material': 'shield',
        'Maximum Durability': 'shield',
        'Maximum Protection': 'shield',
        'Superior Barrier': 'shield',
        'Heavy-Duty Strength': 'shield',
        'Durable Construction': 'shield',
        'Premium Protection': 'shield',
        'Sustainable Options': 'check',
        'Eco-Friendly Design': 'check',
        'Eco-Friendly Choices': 'check',
        'Complete Customization': 'palette',
        'Full Customization': 'palette',
        'Custom Flexibility': 'palette',
        'Luxury Finish': 'star',
        'Fair Pricing': 'star',
        'Competitive Pricing': 'star'
      };
      
      // Assign icons to features
      const featuresWithIcons = features.map(feature => {
        let icon = 'shield'; // default
        for (const [key, value] of Object.entries(iconMap)) {
          if (feature.title.includes(key) || feature.title === key) {
            icon = value;
            break;
          }
        }
        // Fallback logic
        if (!iconMap[feature.title]) {
          if (feature.title.toLowerCase().includes('eco') || feature.title.toLowerCase().includes('sustainable')) {
            icon = 'check';
          } else if (feature.title.toLowerCase().includes('custom') || feature.title.toLowerCase().includes('flexibility')) {
            icon = 'palette';
          } else if (feature.title.toLowerCase().includes('luxury') || feature.title.toLowerCase().includes('finish') || feature.title.toLowerCase().includes('pricing')) {
            icon = 'star';
          }
        }
        return {
          icon,
          title: feature.title,
          description: feature.description
        };
      });
      
      allSections.push({
        productName,
        heading,
        features: featuresWithIcons,
        closingDescription: closingDescription.trim()
      });
    }
  }
});

// Output JSON
console.log(JSON.stringify(allSections, null, 2));

