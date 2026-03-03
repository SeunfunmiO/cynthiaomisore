export interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

export interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  comingSoon?: boolean;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  enquiryType: string;
  message: string;
}
