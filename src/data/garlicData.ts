import type { FeatureItem, ProductItem, IndustryItem, TestimonialItem, FaqItem } from '../types';

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
  address: {
    plant: '79 VR Industrial Park-2, Kathwada Singarwa Road, Kathwada, Ahmedabad, Gujarat - 382430',
    hub: 'Nikol, Ahmedabad, Gujarat',
  },
  openingEvent: {
    date: '20-10-2026',
    day: 'Tuesday',
    time: '10:00 AM Onwards',
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
      'Consistent size and spotless appearance',
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
    desc: 'We never use bleach, chemical preservatives, or water-soaking techniques. Every clove retains its authentic sharp aroma, pungent flavor, and rich medicinal qualities.',
    color: '#2D4A22',
    highlights: [
      'Zero chemical wash or bleaching agents',
      'Zero artificial preservatives added',
      'Natural moisture and high allicin content preserved',
      'Direct farm-sourced premium garlic bulbs',
      'FSSAI food safety aligned handling',
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
    desc: 'Eliminate hours of messy garlic peeling, sticky residue, burning eyes, and heavy labor wages. Your chefs can pour, chop, and cook right away.',
    color: '#C59B27',
    highlights: [
      'Eliminates 2-3 hours of daily manual prep work',
      'Saves ₹8,000 to ₹35,000/month on kitchen prep labor',
      'Zero kitchen counter mess, peels or peel disposal hassle',
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
    title: 'Vacuum & Food-Grade Packaging',
    desc: 'Packed in high-barrier food-grade vacuum pouches and breathable poly containers to lock in freshness, prevent oxidation, and extend chilled shelf life.',
    color: '#2D4A22',
    highlights: [
      'Food-grade certified BPA-free pouch packaging',
      'Vacuum-sealed options for extended shelf life',
      'Available in 500g, 1kg, 5kg, and 20kg bulk master bags',
      'Tamper-evident heat sealed packaging',
      'Temperature-monitored cold storage and dispatch',
    ],
    stats: [
      { icon: 'Package', value: '15+ Days', label: 'Chilled shelf life' },
      { icon: 'Shield', value: '100%', label: 'Air-tight sealed' },
      { icon: 'Box', value: '4 Sizes', label: 'Packaging options' },
    ],
  },
  {
    id: 'daily-delivery',
    icon: 'Truck',
    title: 'Daily Ahmedabad Morning Delivery',
    desc: 'Dependable daily morning supply directly to your restaurant, hotel, cloud kitchen, or home in Nikol, Kathwada, Naroda, Vastral, SG Highway, and across Ahmedabad.',
    color: '#C59B27',
    highlights: [
      'Early morning delivery before kitchen prep starts',
      'Direct doorstep drops across Ahmedabad & Gandhinagar',
      'Scheduled recurring subscription deliveries',
      'Emergency same-day top-up orders supported',
      'Clean insulated delivery crates',
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
    title: 'Transparent Wholesale Pricing',
    desc: 'Direct factory pricing straight from our Kathwada processing unit with no brokers or middleman markups, giving you unmatched margins and consistent rates.',
    color: '#2D4A22',
    highlights: [
      'Direct processor wholesale price advantage',
      'Volume-based tier discounts for hotels and food processors',
      'Transparent billing with full tax invoices',
      'Zero hidden charges or surprise surcharges',
      'Price lock options for monthly contract buyers',
    ],
    stats: [
      { icon: 'DollarSign', value: 'Direct', label: 'Factory rates' },
      { icon: 'TrendingUp', value: '15-20%', label: 'Margin benefit' },
      { icon: 'FileText', value: '100%', label: 'Transparent bills' },
    ],
  },
];

export const INDUSTRIES_ITEMS: IndustryItem[] = [
  {
    id: 'hotels',
    title: 'Hotels & Banquets',
    subtitle: 'High Volume & High Aesthetics',
    icon: 'Hotel',
    desc: 'Buffets, banquets, and 3-to-5 star hotel kitchens require consistent, spotless garlic cloves that maintain pristine presentation and rich taste across large culinary spreads.',
    benefits: [
      'Large uniform Jumbo cloves for presentation',
      'Bulk 5kg & 10kg vacuum-packed crates',
      'Standardized aroma profile for master gravies',
      'Priority early-morning delivery before 8:00 AM',
    ],
    typicalVolume: '20kg - 150kg / day',
    packagingRecommendation: '5kg & 10kg Vacuum Master Bags',
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Cafes',
    subtitle: 'Speed, Consistency & Labor Savings',
    icon: 'UtensilsCrossed',
    desc: 'From Punjabi, Chinese, Italian, Mughlai to South Indian cuisines, garlic is the flavor backbone. Save your chefs hundreds of prep hours and speed up table turnarounds.',
    benefits: [
      'Immediate readiness for garlic pastes, tadka & gravies',
      'Cuts 2 hours of morning staff prep time every day',
      'No peeling mess or rotting cloves in storage',
      'Flexible daily or alternate-day dispatch',
    ],
    typicalVolume: '5kg - 50kg / day',
    packagingRecommendation: '1kg & 5kg Food-grade Pouches',
  },
  {
    id: 'food-industries',
    title: 'Food Industries & Cloud Kitchens',
    subtitle: 'Industrial Scale & Quality Compliance',
    icon: 'Factory',
    desc: 'Commercial garlic paste manufacturers, namkeen factories, pickle makers, frozen food processors, and cloud kitchen clusters that require high-tonnage reliable raw materials.',
    benefits: [
      'Strict moisture control & zero stone/skin impurities',
      'Consistent supply even during off-season market spikes',
      'Custom processing: whole cloves or crushed mash',
      'Bulk batch certificates and wholesale contracts',
    ],
    typicalVolume: '100kg - 1,000kg+ / day',
    packagingRecommendation: '20kg & 50kg Heavy-duty Bags',
  },
  {
    id: 'homes',
    title: 'Homes & Domestic Kitchens',
    subtitle: 'Zero Tears, 100% Cooking Joy',
    icon: 'Home',
    desc: 'Busy modern households love the convenience of opening the fridge and grabbing spotless, ready-to-crush fresh garlic without smelly fingers, peeling knives, or peel mess.',
    benefits: [
      'Pure, fresh, preservative-free for family health',
      'Stays crunchy and fresh for 15+ days in your refrigerator',
      'Convenient 500g and 1kg resealable packs',
      'Doorstep delivery in Nikol, Kathwada & Ahmedabad',
    ],
    typicalVolume: '500g - 2kg / week',
    packagingRecommendation: '500g & 1kg Resealable Fresh Pouches',
  },
];

export const PRODUCTS_ITEMS: ProductItem[] = [
  {
    id: 'jumbo-peeled',
    title: 'Premium Jumbo Peeled Garlic',
    subtitle: 'Grade A+ Selected Large Cloves',
    desc: 'Hand-inspected, large-size peeled garlic cloves with high pungency and pristine white-to-ivory finish. Perfect for fine dining, banquets, and gourmet cooking.',
    tag: 'Bestseller',
    minOrder: '1 Kg',
    shelfLife: '15-20 Days (at 2-4°C)',
    packaging: '1kg, 5kg, 10kg Vacuum Sealed',
    image: '/images/flyer-product.jpg',
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
    subtitle: 'Everyday High-Yield Kitchen Grade',
    desc: 'High-yield, medium-size fresh peeled garlic cloves offering unbeatable value for busy restaurants, dhabas, cloud kitchens, and daily household use.',
    tag: 'Best Value',
    minOrder: '1 Kg',
    shelfLife: '15 Days (at 2-4°C)',
    packaging: '500g, 1kg, 5kg, 20kg Food-Grade Pouches',
    image: '/images/flyer-product.jpg',
    bestFor: ['Restaurants & Cafes', 'Homes', 'Cloud Kitchens', 'Dhabas'],
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
    subtitle: 'Zero Additive Instant Mash',
    desc: 'Coarsely ground fresh peeled garlic without water dilution, chemical vinegar, or starch binders. Gives real home-style tadka flavor in seconds.',
    tag: 'Ready to Cook',
    minOrder: '2 Kg',
    shelfLife: '10-12 Days (Chilled)',
    packaging: '1kg & 5kg Food-Grade Pails / Pouches',
    image: '/images/flyer-product.jpg',
    bestFor: ['Sauce & Gravy Bases', 'Fast Food Centers', 'Catering Units'],
    specs: {
      purity: '100% Pure Garlic',
      moisture: 'Natural Garlic Juice Only',
      cloveSize: 'Crushed Coarse Mash',
      preservatives: '0% (Nil)',
    },
  },
  {
    id: 'bulk-industrial',
    title: 'Bulk Industrial Master Bags',
    subtitle: 'High Volume Food Processing Grade',
    desc: 'Heavy-duty 20kg and 50kg packaging tailored for namkeen makers, garlic paste factories, pickle manufacturers, and wholesale distributors.',
    tag: 'Wholesale Master Pack',
    minOrder: '50 Kg',
    shelfLife: '20+ Days (Cold Chain)',
    packaging: '20kg & 50kg Sealed Poly Master Sacks',
    image: '/images/flyer-product.jpg',
    bestFor: ['Food Processing Plants', 'Paste Manufacturers', 'Bulk Wholesalers'],
    specs: {
      purity: '99.8%',
      moisture: 'Moisture Tested',
      cloveSize: 'Mixed Grade Sorted',
      preservatives: '0% (Nil)',
    },
  },
];

export const TESTIMONIALS_ITEMS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Chef Rajesh Sharma',
    role: 'Executive Head Chef',
    company: 'The Grand Heritage Banquet & Hotel',
    location: 'Kathwada, Ahmedabad',
    rating: 5,
    content:
      'We prepare food for 800+ guests during wedding season. OM Enterprise peeled garlic has been a lifesaver. The cloves are spotless, crisp, and smell intensely fresh. Not a single rotten clove in our bulk deliveries!',
    avatarText: 'RS',
  },
  {
    id: 't2',
    name: 'Bhavin Patel',
    role: 'Managing Partner',
    company: 'Kathiyawadi Swad Restaurant Chain',
    location: 'Nikol, Ahmedabad',
    rating: 5,
    content:
      'Our Lasaniya Bataka and garlic chutney demand authentic pungent garlic. Traditional pre-peeled garlic in market smells of chemicals, but OM Enterprise garlic is 100% natural and delivered fresh every morning at 7:30 AM.',
    avatarText: 'BP',
  },
  {
    id: 't3',
    name: 'Mehul Trivedi',
    role: 'Operations Director',
    company: 'SpicyBites Cloud Kitchens (4 Outlets)',
    location: 'Bopal & Naroda, Ahmedabad',
    rating: 5,
    content:
      'Switching to OM Enterprise saved us at least ₹18,000 monthly in helper wages and eliminated 2 hours of morning prep time per outlet. Their vacuum packaging keeps the cloves fresh for weeks.',
    avatarText: 'MT',
  },
  {
    id: 't4',
    name: 'Pooja Shah',
    role: 'Home Chef & Mother',
    company: 'Home Customer',
    location: 'Nikol, Ahmedabad',
    rating: 5,
    content:
      'I order their 1kg pouch every fortnight. No more sticky fingers, garlic smell stuck in fingernails, or throwing away dried out garlic skins. Highly recommend to all families!',
    avatarText: 'PS',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Freshness & Storage',
    question: 'How long does OM Enterprise peeled garlic remain fresh?',
    answer:
      'When stored in your refrigerator (between 2°C to 4°C) inside our sealed food-grade packaging or an airtight container, our peeled garlic stays crisp, aromatic, and fresh for 15 to 20 days. Avoid storing in humid or warm conditions.',
  },
  {
    category: 'Quality & Processing',
    question: 'Are there any chemical preservatives, chlorine, or bleach used?',
    answer:
      'Absolutely NOT! We take immense pride in 100% natural processing. We use only specialized food-grade mechanical peeling followed by chilled air drying and manual optical sorting. No bleach, sulfur, vinegar, or artificial preservatives are ever used.',
  },
  {
    category: 'Orders & Deliveries',
    question: 'What areas in Ahmedabad do you deliver to?',
    answer:
      'We deliver daily across Nikol, Kathwada, Naroda, Vastral, Odhav, Bapunagar, Maninagar, SG Highway, Prahlad Nagar, Bopal, Gota, and throughout Ahmedabad & Gandhinagar. Outstation bulk shipments across Gujarat are dispatched via reliable cold transport.',
  },
  {
    category: 'Orders & Deliveries',
    question: 'What is the minimum order quantity for restaurants and homes?',
    answer:
      'For home deliveries in Nikol and Kathwada, our minimum order is just 1 kg. For restaurants and commercial kitchens across Ahmedabad, we offer free morning delivery starting from 5 kg onwards.',
  },
  {
    category: 'Samples & Pricing',
    question: 'Can I get a sample batch to test in my restaurant kitchen?',
    answer:
      'Yes! We gladly provide a free sample batch to verified restaurants, caterers, and hotels in Ahmedabad so your head chef can test aroma, pungency, and shelf-life before committing to daily supply.',
  },
  {
    category: 'Orders & Deliveries',
    question: 'How do I place a daily order or start a subscription?',
    answer:
      'You can call or WhatsApp us directly at +91 76005 01356 or +91 96382 35153, or use the quick order form on this website. Simply mention your daily requirement, and we will schedule your morning delivery slot.',
  },
];
