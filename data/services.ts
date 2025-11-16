export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  tags: string[];
  icon?: string;
}

export const services: Service[] = [
  {
    id: "cinematic-web-design",
    slug: "cinematic-web-design",
    title: "Cinematic Web Design",
    shortDescription: "Portfolio and ecommerce experiences that tell your story",
    description:
      "Transform your brand into a cinematic web experience. We design and build portfolio sites and ecommerce platforms that don't just showcase your work—they tell your story through scroll-based narratives, immersive visuals, and thoughtful interactions.",
    deliverables: [
      "Responsive, mobile-first website",
      "Scroll-based storytelling sections",
      "CMS-ready structure (WordPress/Headless)",
      "Ecommerce integration (if needed)",
      "Performance optimization",
      "SEO foundation",
    ],
    tags: ["0 → 1 MVP", "Conversion-focused", "Story-driven"],
    icon: "globe",
  },
  {
    id: "ai-product-design",
    slug: "ai-product-design",
    title: "AI Product & Agent Design",
    shortDescription: "Chatbot, automation, and AI-native tools",
    description:
      "Build AI-powered products that feel human. From conversational agents to automation tools, we design and develop AI-native experiences that solve real problems for your users while maintaining a warm, approachable interface.",
    deliverables: [
      "AI agent/chatbot interface design",
      "Conversation flow architecture",
      "Automation tool UI/UX",
      "Integration with AI APIs (OpenAI, Anthropic, etc.)",
      "User testing and iteration",
      "Documentation and training",
    ],
    tags: ["AI-native", "User-centered", "Automation"],
    icon: "sparkles",
  },
  {
    id: "branding-landing",
    slug: "branding-landing",
    title: "Branding & Landing Pages",
    shortDescription: "Founder-focused brand identity and conversion",
    description:
      "Launch your startup with a brand that converts. We create landing pages and brand identities specifically for founders who need to communicate their vision clearly, build trust quickly, and turn visitors into customers.",
    deliverables: [
      "Brand identity (logo, colors, typography)",
      "High-converting landing page",
      "Email capture and lead magnets",
      "Social media asset templates",
      "Brand guidelines document",
      "A/B testing setup",
    ],
    tags: ["Founder-focused", "Conversion-optimized", "Fast turnaround"],
    icon: "palette",
  },
  {
    id: "dev-design",
    slug: "dev-design",
    title: "Dev + Design (Full Package)",
    shortDescription: "Complete design and development from concept to launch",
    description:
      "The full package: design thinking meets technical execution. From initial concept to deployment, we handle everything—user research, wireframes, visual design, frontend and backend development, and launch support.",
    deliverables: [
      "Full design system and UI/UX",
      "Frontend development (Next.js/React)",
      "Backend/API development",
      "Database design and setup",
      "Deployment and hosting setup",
      "Post-launch support and iteration",
    ],
    tags: ["Full-stack", "0 → 1 MVP", "End-to-end"],
    icon: "code",
  },
];

