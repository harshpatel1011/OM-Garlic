export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
  highlights: string[];
  stats: {
    icon: string;
    value: string;
    label: string;
  }[];
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
  minOrder: string;
  shelfLife: string;
  packaging: string;
  image?: string;
  bestFor: string[];
  specs: {
    purity: string;
    moisture: string;
    cloveSize: string;
    preservatives: string;
  };
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  desc: string;
  benefits: string[];
  typicalVolume: string;
  packagingRecommendation: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
