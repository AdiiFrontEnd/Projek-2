export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'SaaS / AI' | 'E-Commerce' | 'Design System' | 'Web3';
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  colorTheme: string;
  featured?: boolean;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillItem {
  name: string;
  category: 'Core' | 'Framework' | 'Styling' | 'Tooling';
  level: number; // 1-100
  iconName: string;
  highlight?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
  statValue: string;
  statLabel: string;
  iconName: string;
  bgClass: string;
  textClass: string;
  badgeText?: string;
}

export interface ActivityScheduleItem {
  id: string;
  time: string;
  title: string;
  status: 'completed' | 'in-progress' | 'cancelled';
  bgClass: string;
  textClass: string;
}

export interface DeveloperProfile {
  name: string;
  role: string;
  headline: string;
  bio: string;
  location: string;
  statusText: string;
  yearsExperience: string;
  projectsCompleted: string;
  githubStars: string;
  avatarUrl: string;
  email: string;
}

export type ColorPalette = 'acid-navy' | 'cyberpunk' | 'monochrome';
