import type { FeatureItem, ProductItem, IndustryItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'OM Enterprise',
  tagline: 'Premium Peeled Garlic',
  slogan: 'Quality You Can Trust',
  subSlogan: 'Pure Garlic for a Healthier Tomorrow • Premium Quality Freshness Always',
  phones: {
    primary: '+91 76005 01356',
    secondary: '+91 96382 35153',
    adhrav: '+91 92270 99525',
    yash: '+91 98982 77782',
    sagar: '+91 96382 35153',
  },
  whatsapp: '917600501356',
  email: 'omenterprise.garlic@gmail.com',
  mapUrl: 'https://maps.app.goo.gl/HuoBAppyrvFdwHH98',
  address: {
    plant: '79 VR Industrial Park-2, Kathwada Singarwa Road, Kathwada, Ahmedabad, Gujarat - 382430',
    hub: 'Kathwada, Ahmedabad, Gujarat',
  },
  operatingHours: '9:00 AM to 5:00 PM',
  openingEvent: {
    date: '20-10-2026',
    day: 'Tuesday',
    time: '9:00 AM to 5:00 PM',
    venue: '79 VR Industrial park-2, kathwada singarwa road, kathwada ahmedabad, gujrat-382430',
  },
};

export const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: 'spotless-peeling',
    icon: 'Sparkles',
    title: 'Spotless Machine Peeling',
    desc: 'Our advanced food-grade peeling technology gently removes outer skin with zero damage to the garlic cloves, ensuring pristine, intact and 99.9% skin-free garlic.',
    color: '#C59B27',
    highlights: [
      'Zero manual skin contamination',
      'Intact cloves with high natural essential oils',
      'Double optical and manual quality inspection',
      'Hygienic stainless-steel processing line',
      'Consistent size and spotless appearance for high-volume cooking',
    ],
    stats: [
      { icon: 'CheckCircle2', value: '99.9%', label: 'Skin-free purity' },
      { icon: 'ShieldCheck', value: '100%', label: 'Food-grade hygiene' },
      { icon: 'Award', value: '0%', label: 'Clove bruising' },
    ],
  },
  {
    id: 'zero-chemicals',
    icon: 'Leaf',
    title: '100% Natural & Chemical Free',
    desc: 'We never use bleach, chemical preservatives, or water-soaking techniques. Every clove retains its authentic sharp aroma, pungent flavor, and rich culinary qualities.',
    color: '#2D4A22',
    highlights: [
      'Zero chemical wash or bleaching agents',
      'Zero artificial preservatives added',
      'Natural moisture and high allicin content preserved',
      'Direct farm-sourced premium garlic bulbs',
      'Compliant with commercial food-safety standards',
    ],
    stats: [
      { icon: 'Leaf', value: '100%', label: 'Natural & Pure' },
      { icon: 'Ban', value: '0%', label: 'Preservatives' },
      { icon: 'Sparkles', value: 'High', label: 'Natural Allicin' },
    ],
  },
  {
    id: 'labor-savings',
    icon: 'Clock',
    title: 'Saves 70% Kitchen Prep Time',
    desc: 'Eliminate hours of messy manual garlic peeling, sticky residue, burning eyes, and kitchen helper wages. Your master chefs can pour, crush, and cook immediately.',
    color: '#C59B27',
    highlights: [
      'Eliminates 2-4 hours of daily manual prep work',
      'Saves ₹10,000 to ₹40,000/month on kitchen helper labor',
      'Zero kitchen counter mess or peel disposal hassle',
      'Instant readiness during peak lunch & dinner rush hours',
      'Guaranteed 100% usable weight with zero skin wastage',
    ],
    stats: [
      { icon: 'Timer', value: '70%', label: 'Time saved' },
      { icon: 'TrendingDown', value: '25%', label: 'Prep cost reduced' },
      { icon: 'Zap', value: 'Instant', label: 'Cooking readiness' },
    ],
  },
  {
    id: 'hygienic-packaging',
    icon: 'PackageCheck',
    title: 'Bulk Vacuum & Commercial Packaging',
    desc: 'Packed in high-barrier food-grade vacuum sacks and heavy-duty poly containers to lock in freshness, prevent oxidation, and extend chilled cold-room shelf life.',
    color: '#2D4A22',
    highlights: [
      'Heavy-duty food-grade certified vacuum packaging',
      'Oxygen-barrier sealed to retain natural pungent aroma',
      'Standard 5kg, 10kg, 20kg, and 50kg bulk master bags',
      'Tamper-evident heat-sealed commercial sacks',
      'Temperature-monitored cold storage and dispatch',
    ],
    stats: [
      { icon: 'Package', value: '15+ Days', label: 'Chilled shelf life' },
      { icon: 'Shield', value: '100%', label: 'Air-tight sealed' },
      { icon: 'Box', value: 'Bulk', label: '5kg to 50kg bags' },
    ],
  },
  {
    id: 'daily-delivery',
    icon: 'Truck',
    title: 'Daily Ahmedabad Morning Delivery',
    desc: 'Dependable daily morning supply directly to your commercial hotel, restaurant, cloud kitchen, or processing plant in Nikol, Kathwada, Naroda, Vastral, SG Highway, and throughout Ahmedabad.',
    color: '#C59B27',
    highlights: [
      'Early morning scheduled dispatch before 7:30 AM',
      'Doorstep commercial drops across Ahmedabad & Gandhinagar',
      'Recurring monthly B2B supply agreements',
      'Same-day emergency volume top-ups supported',
      'Clean insulated crates for transport hygiene',
    ],
    stats: [
      { icon: 'Clock', value: '7:00 AM', label: 'Early dispatch' },
      { icon: 'MapPin', value: '100%', label: 'Ahmedabad coverage' },
      { icon: 'Repeat', value: 'Daily', label: 'Reliable route' },
    ],
  },
  {
    id: 'wholesale-pricing',
    icon: 'BadgePercent',
    title: 'Direct Processor Wholesale Pricing',
    desc: 'Direct factory pricing straight from our Kathwada processing unit with zero middleman or market broker markups, delivering unmatched food cost margins for your business.',
    color: '#2D4A22',
    highlights: [
      'Direct processor wholesale price advantage',
      'Tiered bulk discounts for high-tonnage monthly consumers',
      'GST tax invoices with full commercial compliance',
      'Zero hidden freight charges within standard routes',
      'Price stability contracts for institutional buyers',
    ],
    stats: [
      { icon: 'DollarSign', value: 'Direct', label: 'Factory rates' },
      { icon: 'TrendingUp', value: '15-22%', label: 'Food cost saving' },
      { icon: 'FileText', value: '100%', label: 'GST Invoices' },
    ],
  },
];

export const INDUSTRIES_ITEMS: IndustryItem[] = [
  {
    id: 'hotels',
    title: 'Hotels, Banquets & Resorts',
    subtitle: 'High Volume & High Culinary Aesthetics',
    icon: 'Hotel',
    desc: 'Buffets, banquets, and 3-to-5 star hotel kitchens require consistent, spotless garlic cloves that maintain pristine presentation and rich taste across large culinary spreads.',
    benefits: [
      'Uniform Jumbo cloves for presentation & master gravies',
      'Bulk 5kg, 10kg & 20kg vacuum-sealed master packs',
      'Standardized aroma profile for large batch cooking',
      'Priority early-morning doorstep delivery before 7:30 AM',
    ],
    typicalVolume: '20kg - 150kg / day',
    packagingRecommendation: '5kg & 10kg Vacuum Bags',
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Multi-Outlet Chains',
    subtitle: 'Speed, Consistency & Massive Prep Labor Savings',
    icon: 'UtensilsCrossed',
    desc: 'From Punjabi, Chinese, Mughlai to South Indian cuisines, garlic is the flavor backbone. Save your kitchen staff hundreds of prep hours and speed up peak hour orders.',
    benefits: [
      'Immediate readiness for garlic pastes, tadka & gravies',
      'Cuts 2 to 3 hours of daily morning helper prep time',
      'Zero peeling mess, smelly hands, or rotting cloves',
      'Reliable scheduled daily morning dispatch',
    ],
    typicalVolume: '10kg - 60kg / day',
    packagingRecommendation: '5kg & 10kg Pouches',
  },
  {
    id: 'caterers',
    title: 'Catering Services & Event Organizers',
    subtitle: 'Large Wedding Feasts & High-Guest Event Supply',
    icon: 'ChefHat',
    desc: 'Outdoor wedding caterers, institutional kitchens, and corporate dining services that require massive volumes of spotless garlic on tight event deadlines.',
    benefits: [
      'Eliminates last-minute labor shortages for high-guest events',
      'Heavy-duty 10kg & 20kg bulk vacuum master crates',
      'Consistent pungency ensures uniform large-batch seasoning',
      'Direct dispatch to event venue or central base kitchen',
    ],
    typicalVolume: '25kg - 300kg / event',
    packagingRecommendation: '10kg & 20kg Vacuum Bags',
  },
  {
    id: 'food-industries',
    title: 'Food Processing & Paste Factories',
    subtitle: 'Industrial Scale, Tonnage Capacity & Quality Compliance',
    icon: 'Factory',
    desc: 'Commercial garlic paste manufacturers, namkeen factories, pickle makers, frozen food processors, and cloud kitchen clusters that require high-tonnage raw materials.',
    benefits: [
      'Strict moisture control & zero stone/skin impurities',
      'Consistent supply even during off-season market spikes',
      'Custom processing: whole cloves or crushed mash',
      'Bulk batch certificates and wholesale GST contracts',
    ],
    typicalVolume: '100kg - 1,000kg+ / day',
    packagingRecommendation: '20kg & 50kg Sacks',
  },
];

export const PRODUCTS_ITEMS: ProductItem[] = [
  {
    id: 'jumbo-peeled',
    title: 'Premium Jumbo Peeled Garlic',
    subtitle: 'Grade A+ Selected Large Cloves',
    desc: 'Hand-inspected, large-size peeled garlic cloves with high pungency and pristine ivory finish. Engineered for fine dining, banquets, and high-volume commercial kitchens.',
    tag: 'Bestseller',
    minOrder: '5 Kg',
    shelfLife: '15-20 Days (at 2-4°C)',
    packaging: '5kg, 10kg & 20kg Vacuum Sealed Sacks',
    bestFor: ['Hotels & Resorts', 'Fine Dining Restaurants', 'Catering Events'],
    specs: {
      purity: '99.9%',
      moisture: 'Standard Natural (60-65%)',
      cloveSize: 'Large Jumbo (25mm - 35mm)',
      preservatives: '0% (Nil)',
    },
  },
  {
    id: 'standard-peeled',
    title: 'Commercial Standard Peeled Garlic',
    subtitle: 'High-Yield Restaurant & Kitchen Grade',
    desc: 'High-yield, medium-size fresh peeled garlic cloves offering unbeatable value for busy restaurants, dhabas, cloud kitchens, and catering units.',
    tag: 'Best Commercial Value',
    minOrder: '5 Kg',
    shelfLife: '15 Days (at 2-4°C)',
    packaging: '5kg, 10kg & 20kg Food-Grade Pouches',
    bestFor: ['Commercial Restaurants', 'Dhabas', 'Cloud Kitchens', 'Catering Units'],
    specs: {
      purity: '99.5%',
      moisture: 'Standard Natural (60-65%)',
      cloveSize: 'Medium (18mm - 25mm)',
      preservatives: '0% (Nil)',
    },
  },
  {
    id: 'crushed-garlic',
    title: 'Fresh Coarsely Crushed Garlic',
    subtitle: 'Zero Additive Commercial Mash',
    desc: 'Coarsely ground fresh peeled garlic without water dilution, chemical vinegar, or starch binders. Gives real tadka flavor in seconds for commercial kitchens.',
    tag: 'Ready to Cook',
    minOrder: '10 Kg',
    shelfLife: '10-12 Days (Chilled)',
    packaging: '5kg & 10kg Food-Grade Pails / Pouches',
    bestFor: ['Sauce & Gravy Bases', 'Fast Food Central Kitchens', 'Bulk Catering'],
    specs: {
      purity: '100% Pure Garlic',
      moisture: 'Natural Garlic Juice Only',
      cloveSize: 'Crushed Coarse Mash',
      preservatives: '0% (Nil)',
    },
  },
  {
    id: 'bulk-industrial',
    title: 'Bulk Industrial Master Sacks',
    subtitle: 'High Tonnage Food Processing Grade',
    desc: 'Heavy-duty 20kg and 50kg master sacks tailored for namkeen makers, garlic paste factories, pickle manufacturers, and wholesale distributors.',
    tag: 'Wholesale Master Sacks',
    minOrder: '50 Kg',
    shelfLife: '20+ Days (Cold Chain)',
    packaging: '20kg & 50kg Sealed Heavy Sacks',
    bestFor: ['Food Processing Plants', 'Paste Manufacturers', 'Bulk Wholesalers'],
    specs: {
      purity: '99.8%',
      moisture: 'Moisture Tested',
      cloveSize: 'Mixed Grade Sorted',
      preservatives: '0% (Nil)',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Freshness & Storage',
    question: 'How long does OM Enterprise peeled garlic remain fresh in commercial storage?',
    answer:
      'When stored in your commercial chiller or walk-in cooler (between 2°C to 4°C) inside our sealed food-grade packaging or airtight containers, our peeled garlic stays crisp, aromatic, and fresh for 15 to 20 days.',
  },
  {
    category: 'Quality & Processing',
    question: 'Are there any chemical preservatives, chlorine, or bleach used?',
    answer:
      'Absolutely NOT! We take immense pride in 100% natural processing. We use only specialized food-grade mechanical peeling followed by chilled air drying and manual optical sorting. No bleach, sulfur, vinegar, or artificial preservatives are ever used.',
  },
  {
    category: 'Orders & Deliveries',
    question: 'What commercial delivery areas do you cover in Ahmedabad?',
    answer:
      'We operate daily morning commercial supply routes across Nikol, Kathwada, Naroda, Vastral, Odhav, Bapunagar, Maninagar, SG Highway, Prahlad Nagar, Bopal, Gota, and throughout Ahmedabad & Gandhinagar. Outstation bulk shipments across Gujarat are dispatched via refrigerated freight.',
  },
  {
    category: 'Orders & Deliveries',
    question: 'What is the minimum order quantity for commercial businesses?',
    answer:
      'We cater to commercial food businesses with orders starting from 1 kg (1kg, 2kg, 5kg, 10kg, 15kg, 20kg, 25kg, 30kg, 50kg, 100kg+). We provide scheduled daily morning delivery across Kathwada and throughout Ahmedabad.',
  },
  {
    category: 'Samples & Pricing',
    question: 'Can our executive chef get a free sample batch before committing?',
    answer:
      'Yes! We provide a free sample batch to verified commercial restaurants, caterers, and hotels in Ahmedabad so your head chef can test aroma, clove texture, pungency, and shelf-life before starting regular bulk supply.',
  },
  {
    category: 'Orders & Deliveries',
    question: 'How do we schedule a daily recurring wholesale supply contract?',
    answer:
      'You can call or WhatsApp our partners directly at +91 76005 01356 or +91 96382 35153, or use the quick order form on this website. We will set up your recurring morning delivery route with direct factory pricing.',
  },
];
