import { DeveloperProfile, Project, SkillItem, SocialLink, ActivityScheduleItem } from './types';

export const INITIAL_PROFILE: DeveloperProfile = {
  name: "Kasi Muhammad",
  role: "Senior Frontend Web Developer",
  headline: "Elevate Your Every Pixel & Interaction Count.",
  bio: "Crafting blazing-fast web applications, fluid UI animations, and scalable design systems with React, TypeScript, and modern CSS architecture.",
  location: "Jakarta, ID (Remote Available)",
  statusText: "Open for freelance & full-time roles",
  yearsExperience: "6+",
  projectsCompleted: "48+",
  githubStars: "1.4k+",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  email: "kasimuhammad120@gmail.com"
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-synth-studio",
    title: "AI Studio Workspace",
    subtitle: "Prompt-to-App Interactive IDE",
    description: "A futuristic single-page web application featuring real-time iframe previewing, AST code transformation, and Gemini 2.5 AI copilots.",
    category: "SaaS / AI",
    tags: ["React 19", "TypeScript", "TailwindCSS", "WebSockets", "Vite"],
    liveUrl: "https://ai.studio",
    githubUrl: "https://github.com/example/ai-workspace",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    colorTheme: "from-yellow-400 to-amber-500",
    featured: true,
    metrics: [
      { label: "Lighthouse Score", value: "100" },
      { label: "Bundle Size", value: "42kb gzip" }
    ]
  },
  {
    id: "hyper-cart",
    title: "Veloce E-Commerce",
    subtitle: "High-Conversion Mobile Commerce",
    description: "Ultra-responsive headless shopping experience with optimistic cart updates, instant search filtering, and Stripe 1-click checkout.",
    category: "E-Commerce",
    tags: ["Next.js", "Zustand", "Tailwind", "Framer Motion", "GraphQL"],
    liveUrl: "https://example.com/store",
    githubUrl: "https://github.com/example/veloce-store",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
    colorTheme: "from-blue-500 to-indigo-600",
    featured: true,
    metrics: [
      { label: "Conversion Rate", value: "+34%" },
      { label: "TTFB", value: "48ms" }
    ]
  },
  {
    id: "acid-ui-kit",
    title: "Acid Pop Design System",
    subtitle: "Squircles & Neo-Brutalist Components",
    description: "Comprehensive React UI component library built on Radix primitives and Tailwind v4. Downloaded over 12,000 times on npm.",
    category: "Design System",
    tags: ["Storybook", "TypeScript", "Radix UI", "npm Package", "Accessibility"],
    liveUrl: "https://example.com/design-system",
    githubUrl: "https://github.com/example/acid-ui",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
    colorTheme: "from-cyan-400 to-teal-500",
    featured: false,
    metrics: [
      { label: "Weekly Downloads", value: "2.4k" },
      { label: "A11y Score", value: "100% WCAG" }
    ]
  },
  {
    id: "crypto-vault",
    title: "Aura DeFi Analytics",
    subtitle: "Real-Time Web3 Yield Monitor",
    description: "Interactive financial dashboard rendering live candlestick charts with WebGL and WebSockets.",
    category: "Web3",
    tags: ["React", "Ethers.js", "D3.js", "Tailwind", "WebSockets"],
    liveUrl: "https://example.com/defi",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
    colorTheme: "from-purple-500 to-pink-600",
    featured: false
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: "React / Next.js", category: "Framework", level: 98, iconName: "Atom", highlight: "Server Components & Hooks" },
  { name: "TypeScript", category: "Core", level: 95, iconName: "Code2", highlight: "Strict Type Safety" },
  { name: "Tailwind CSS v4", category: "Styling", level: 96, iconName: "Palette", highlight: "Design Token Architecture" },
  { name: "JavaScript (ES2024)", category: "Core", level: 95, iconName: "FileCode", highlight: "Async Generators & Performance" },
  { name: "Vue 3 / Nuxt", category: "Framework", level: 88, iconName: "Layers", highlight: "Composition API" },
  { name: "Vite & Tooling", category: "Tooling", level: 92, iconName: "Zap", highlight: "AST & Plugin Authoring" },
  { name: "Motion Animations", category: "Styling", level: 94, iconName: "Sparkles", highlight: "Fluid Layout Transitions" },
  { name: "Web Accessibility", category: "Core", level: 90, iconName: "CheckCircle2", highlight: "ARIA & Keyboard Nav" }
];

export const SOCIALS_DATA: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    handle: "@kasimuhammad",
    url: "https://github.com",
    statValue: "1,420 Stars",
    statLabel: "Across 32 Repos",
    iconName: "Github",
    bgClass: "bg-[#1E222B] hover:bg-[#282E3A]",
    textClass: "text-white",
    badgeText: "Active Commits"
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "in/kasi-muhammad",
    url: "https://linkedin.com",
    statValue: "3,800+",
    statLabel: "Tech Network",
    iconName: "Linkedin",
    bgClass: "bg-[#0A66C2] hover:bg-[#084e96]",
    textClass: "text-white",
    badgeText: "Open to Connect"
  },
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@dev.kasi",
    url: "https://instagram.com",
    statValue: "8.2k",
    statLabel: "UI Showcase Feed",
    iconName: "Instagram",
    bgClass: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90",
    textClass: "text-white",
    badgeText: "Design Tips"
  },
  {
    id: "twitter",
    platform: "X / Twitter",
    handle: "@kasi_codes",
    url: "https://x.com",
    statValue: "4.5k",
    statLabel: "Frontend Thoughts",
    iconName: "Twitter",
    bgClass: "bg-[#000000] border border-gray-800 hover:bg-[#111]",
    textClass: "text-white",
    badgeText: "Daily Tweets"
  }
];

// Inspired exactly by the bottom right list widget in the reference image!
export const SCHEDULE_DATA: ActivityScheduleItem[] = [
  {
    id: "s1",
    time: "Today 9:00 AM",
    title: "UI Architecture Review",
    status: "completed",
    bgClass: "bg-[#A2EAFF] text-[#0B0E14]",
    textClass: "font-semibold"
  },
  {
    id: "s2",
    time: "Today 1:30 PM",
    title: "Client MVP Sprint",
    status: "completed",
    bgClass: "bg-[#FAFF00] text-[#0B0E14]",
    textClass: "font-semibold"
  },
  {
    id: "s3",
    time: "Today 4:00 PM",
    title: "Open Source Contrib",
    status: "in-progress",
    bgClass: "bg-[#6084FF] text-white",
    textClass: "font-semibold"
  },
  {
    id: "s4",
    time: "Tomorrow 10:00 AM",
    title: "Available for New Chat",
    status: "completed",
    bgClass: "bg-white text-[#0B0E14]",
    textClass: "font-semibold"
  }
];
