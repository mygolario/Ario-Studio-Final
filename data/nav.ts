export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const megaMenuItems: MegaMenuItem[] = [
  {
    title: "Cinematic Websites",
    description: "Story-driven experiences for your brand",
    href: "/services#cinematic-web-design",
    icon: "globe",
  },
  {
    title: "AI Products & Agents",
    description: "Chatbots, automation, and AI-native tools",
    href: "/services#ai-product-design",
    icon: "sparkles",
  },
  {
    title: "Branding & Landing Pages",
    description: "Founder-focused brand identity and conversion",
    href: "/services#branding-landing",
    icon: "palette",
  },
  {
    title: "Dev + Design Package",
    description: "Full-stack development with design",
    href: "/services#dev-design",
    icon: "code",
  },
  {
    title: "View Portfolio",
    description: "See our latest work and case studies",
    href: "/portfolio",
    icon: "briefcase",
  },
  {
    title: "Start a Project",
    description: "Get in touch to discuss your vision",
    href: "/contact",
    icon: "arrow-right",
  },
];

