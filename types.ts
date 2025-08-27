

export interface LocalizedText {
  en: string;
  es: string;
}

export interface TitledText {
  title: LocalizedText;
  text: LocalizedText;
}

export interface ValueItem {
  id: string;
  title: LocalizedText;
  text: LocalizedText;
  icon: string;
}

export interface HeroSlide {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  imageUrl: string;
}

export interface ContentBlockType {
  id: string;
  title: LocalizedText;
  text: LocalizedText;
  imageUrl: string;
  imageAlt: string;
}

export interface ActionLineItem {
  id: string;
  title: LocalizedText;
  text: LocalizedText;
  icon: 'BookOpenIcon' | 'LeafIcon' | 'SustainabilityIcon' | 'MegaphoneIcon';
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  imageUrl: string;
  imageAlt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  imageUrl: string;
  imageAlt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedText;
  author: string;
  date: string; // ISO date string
  summary: LocalizedText;
  content: LocalizedText;
  imageUrl: string;
  imageAlt: string;
}

export interface ContactContent {
    title: LocalizedText;
    intro: LocalizedText;
    address: string;
    phone: string;
    email: string;
    socialLinks: {
        facebook: string;
        instagram: string;
        linkedin: string;
        twitter: string;
    };
}

export interface AlliancePartner {
    id: string;
    name: string;
    logoUrl: string;
}

export interface PageContent {
  hero: HeroSlide[];
  actionLines: {
      title: LocalizedText;
      items: ValueItem[];
  };
  home: ContentBlockType[];
  about: {
    title: LocalizedText;
    history: TitledText;
    historyImageUrl: string;
    biophiliaExplanation: TitledText;
    mission: ContentBlockType;
    vision: ContentBlockType;
    work: ContentBlockType;
    values: {
      title: LocalizedText;
      items: ValueItem[];
    };
  };
  projectsIntro: LocalizedText;
  projects: Project[];
  team: TeamMember[];
  blog: BlogPost[];
  contact: ContactContent;
  alliances: {
      title: LocalizedText;
      description: LocalizedText;
      partners: AlliancePartner[];
  };
}