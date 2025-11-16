export interface Project {
  slug: string;
  title: string;
  summary: string;
  type: "Website" | "Ecommerce" | "MVP" | "AI Agent" | "Landing Page" | "Full Package";
  servicesUsed: string[];
  stack: string[];
  status: "live" | "concept" | "in-progress";
  featured: boolean;
  content: {
    problem: string;
    approach: string;
    solution: string;
    result: string;
  };
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "founder-saas-platform",
    title: "Founder SaaS Platform",
    summary: "A modern SaaS dashboard for early-stage founders to manage their startup operations",
    type: "MVP",
    servicesUsed: ["Dev + Design (Full Package)"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    status: "live",
    featured: true,
    content: {
      problem:
        "Early-stage founders needed a simple, affordable tool to track metrics, manage tasks, and visualize their startup's progress without the complexity of enterprise solutions.",
      approach:
        "We designed a clean, intuitive dashboard focused on the core workflows founders actually use daily. Built with Next.js for fast performance and easy deployment.",
      solution:
        "A streamlined SaaS platform with customizable dashboards, task management, metric tracking, and integrations with popular tools. The UI emphasizes clarity and speed over feature bloat.",
      result:
        "Launched in 6 weeks. Users report 40% time savings on daily operations. The platform now serves 50+ active founders with plans to scale.",
    },
  },
  {
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    summary: "An intelligent chatbot that handles customer inquiries with human-like understanding",
    type: "AI Agent",
    servicesUsed: ["AI Product & Agent Design"],
    stack: ["Next.js", "OpenAI API", "TypeScript", "Framer Motion"],
    status: "live",
    featured: true,
    content: {
      problem:
        "A growing ecommerce brand was overwhelmed by customer support requests, leading to slow response times and frustrated customers.",
      approach:
        "We designed a conversational AI agent that could understand context, access product information, and handle common inquiries while escalating complex issues to humans.",
      solution:
        "Built a beautiful chat interface with a custom-trained AI model that integrates with the company's product database and order system. The agent can answer questions, process returns, and track orders.",
      result:
        "Reduced support ticket volume by 60%. Average response time dropped from 4 hours to under 30 seconds. Customer satisfaction scores increased significantly.",
    },
  },
  {
    slug: "creative-agency-portfolio",
    title: "Creative Agency Portfolio",
    summary: "A cinematic portfolio website showcasing the agency's work and creative process",
    type: "Website",
    servicesUsed: ["Cinematic Web Design"],
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    status: "live",
    featured: true,
    content: {
      problem:
        "A creative agency needed a portfolio that stood out in a crowded market and truly represented their innovative approach to design.",
      approach:
        "We created a scroll-based narrative that takes visitors through the agency's story, process, and best work. Each section feels like a scene in a film.",
      solution:
        "A fully responsive website with smooth animations, immersive visuals, and a CMS for easy content updates. The design emphasizes motion, depth, and storytelling.",
      result:
        "The portfolio generated 3x more qualified leads. Clients specifically mentioned the website as a reason for choosing the agency. Featured in design galleries.",
    },
  },
  {
    slug: "founder-landing-page",
    title: "Founder Landing Page",
    summary: "A high-converting landing page for a B2B SaaS startup launch",
    type: "Landing Page",
    servicesUsed: ["Branding & Landing Pages"],
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "live",
    featured: false,
    content: {
      problem:
        "A founder needed to launch their SaaS product quickly with a landing page that could convert visitors into early adopters.",
      approach:
        "We focused on clear value proposition, social proof, and a frictionless signup process. The design balances professionalism with approachability.",
      solution:
        "A single-page site with hero section, features, testimonials, pricing, and a simple signup form. Built for speed and conversion optimization.",
      result:
        "Achieved 12% conversion rate in the first month. Generated 200+ signups before product launch. The page continues to perform well.",
    },
  },
  {
    slug: "ecommerce-fashion-brand",
    title: "Ecommerce Fashion Brand",
    summary: "A modern ecommerce platform for an independent fashion brand",
    type: "Ecommerce",
    servicesUsed: ["Cinematic Web Design", "Dev + Design (Full Package)"],
    stack: ["Next.js", "Shopify", "Tailwind CSS", "Framer Motion"],
    status: "live",
    featured: true,
    content: {
      problem:
        "An independent fashion brand needed an online store that reflected their aesthetic and provided a smooth shopping experience.",
      approach:
        "We integrated with Shopify for commerce functionality while building a custom frontend that showcases the brand's visual identity and products beautifully.",
      solution:
        "A fully custom storefront with product galleries, size guides, checkout flow, and inventory management. The design emphasizes the brand's minimalist, high-end aesthetic.",
      result:
        "Online sales increased by 150% in the first quarter. The site has become the brand's primary sales channel. Customers love the shopping experience.",
    },
  },
  {
    slug: "automation-tool-mvp",
    title: "Automation Tool MVP",
    summary: "An AI-powered automation tool that helps teams streamline repetitive tasks",
    type: "MVP",
    servicesUsed: ["AI Product & Agent Design", "Dev + Design (Full Package)"],
    stack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL"],
    status: "in-progress",
    featured: false,
    content: {
      problem:
        "Teams waste hours on repetitive tasks that could be automated, but existing tools are either too complex or too expensive for small teams.",
      approach:
        "We're building an intuitive tool that uses AI to understand workflows and automate them with minimal setup. Focus on simplicity and power.",
      solution:
        "A web-based platform where users can describe their workflow in natural language, and the AI creates automation scripts. Visual builder for complex flows.",
      result:
        "Currently in beta with 20+ teams. Early feedback is very positive. Planning full launch in Q2.",
    },
  },
];

