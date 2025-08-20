

export interface LocalizedText {
  en: string;
  es: string;
}

export interface ContentBlockType {
  id: string;
  title: LocalizedText;
  text: LocalizedText;
  imageUrl: string;
  imageAlt: string;
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
}


export interface PageContent {
  hero: {
    title: LocalizedText;
    subtitle: LocalizedText;
  };
  home: ContentBlockType[];
  about: {
    title: LocalizedText;
    mainText: LocalizedText;
    mission: ContentBlockType;
  };
  projects: Project[];
  team: TeamMember[];
  blog: BlogPost[];
  contact: ContactContent;
}
