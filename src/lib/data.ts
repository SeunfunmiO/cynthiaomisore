import { Project, SkillCategory, BlogPost } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Stacked & Loaded Burger",
    type: "Full Stack · E-Commerce · Food Ordering Platform",
    description:
      "A production-ready burger shop platform with end-to-end ordering — customers can place orders for delivery or pickup, track their order status in real-time, and pay securely via Paystack. The platform features a full admin dashboard for product management, order management, and status updates, plus a beautiful dark/light mode toggle.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack", "Admin Dashboard", "Order Tracking", "Dark/Light Mode"],
    liveUrl: "https://stacked-and-loaded-burger.vercel.app",
    githubUrl: "https://github.com/SeunfunmiO/Stacked_and_Loaded_Burger",
    featured: true,
  },
  {
    id: 2,
    name: "SpendWise",
    type: "Full Stack · SaaS · Finance Tracker · Budget",
    description: "Full-stack personal finance SaaS built with Next.js 14, TypeScript and MongoDB, featuring budgets, reports, recurring transactions, email alerts, Paystack payments, download your transaction history and 5-language i18n.",
    stack: ["Next.js", "Nodemailer", "TypeScript", "MongoDB", "Paystack", "Tailwind CSS", "i18n (5 langs)"],
    liveUrl: "https://spendwise-smoky.vercel.app",
    githubUrl: "https://github.com/SeunfunmiO/spendwise",
  },
  {
    id: 3,
    name: "HerCycleBloom",
    type: "Full Stack · Health Tech · Period Tracker",
    description:
      "A comprehensive period tracking app with calendar visualisation, next period prediction, follicular phase tracking, and cycle length analysis. Supports 13 languages including Chinese, French, and Spanish — making wellness accessible globally.",
    stack: ["React", "Node.js", "JavaScript", "Tailwind CSS", "i18n (13 langs)"],
    liveUrl: "https://her-cycle-bloom.vercel.app",
    githubUrl: "https://github.com/SeunfunmiO/her_cycle_bloom",
  },
  {
    id: 4,
    name: "UrbanGraphTees",
    type: "Full Stack · E-Commerce · Fashion",
    description:
      "A sleek clothing brand e-commerce platform with a complete shopping experience, admin inventory management, and Paystack payment integration. Built with a focus on performance, beautiful UI, and seamless checkout.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack", "Admin Panel"],
    liveUrl: "https://urbangraphtees.vercel.app",
    githubUrl: "https://github.com/SeunfunmiO/urbangraphtees",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    icon: "🧠",
    title: "Core Fundamentals",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "TypeScript", "Data Structures", "Algorithms"],
  },
  {
    icon: "⚛️",
    title: "Frontend Development",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "State Management", "Component Architecture"],
  },
  {
    icon: "🛠",
    title: "Backend Development",
    skills: ["Node.js", "REST APIs", "Firebase Auth", "Firestore", "Firebase Hosting"],
  },
  {
    icon: "☁️",
    title: "Deployment & Hosting",
    skills: ["Vercel", "Render", "Firebase Hosting", "Git", "GitHub"],
  },
  {
    icon: "🎯",
    title: "Engineering Practices",
    skills: ["API Integration", "Axios", "Paystack", "Performance Optimisation", "Debugging", "Refactoring"],
  },
  {
    icon: "🌍",
    title: "Specialisms",
    skills: ["i18n (13 Languages)", "Dark/Light Mode", "Admin Dashboards", "Payment Integration", "Order Tracking"],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    date: "Coming Soon · 2026",
    title: "Building Scalable Next.js Apps: Lessons from Production",
    excerpt: "What I learned shipping three full-stack applications — from folder structure to deployment strategies that actually work at scale.",
    tag: "Next.js",
    comingSoon: true,
  },
  {
    date: "Coming Soon · 2026",
    title: "Internationalisation at Scale: Supporting 13 Languages in React",
    excerpt: "How I implemented i18n in HerCycleBloom to support 13 languages — the tools, the pitfalls, and the payoff.",
    tag: "React · i18n",
    comingSoon: true,
  },
  {
    date: "Coming Soon · 2026",
    title: "Paystack Integration: A Nigerian Developer's Complete Guide",
    excerpt: "A practical, no-fluff guide to integrating Paystack into your Next.js application — from test mode to live transactions.",
    tag: "Paystack · Next.js",
    comingSoon: true,
  },
];
