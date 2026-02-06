import { IconType } from "react-icons";

export type SkillCategory =
  | "Languages & Frameworks"
  | "Databases & Caching"
  | "Cloud & DevOps"
  | "Testing & Security"
  | "AI Tools";

export interface Skill {
  name: string;
  level?: number;
  category: SkillCategory;
  icon: IconType;
}

export interface ProjectDetail {
  name: string;
  period: string;
  highlights: string[];
  techStack: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  projects: ProjectDetail[];
}

export interface Project {
  id: string;
  name: string;
  client?: string;
  company: string;
  description: string;
  techStack: string[];
  highlights: string[];
  category: "enterprise" | "mobile";
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
