export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string | null;
  visualType: "vermithor" | "namma" | "detexa" | "tether" | "manan" | "watchman" | "dali";
  logoUrl?: string;
  highlights: string[];
  architectureSummary?: string;
  metrics?: { label: string; value: string }[];
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  category: string;
}

export interface SkillCategoryGroup {
  id: string;
  category: string;
  code: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  metric: string;
  metricNumber: number;
  suffix: string;
  title: string;
  subtitle: string;
  description: string;
  category: "DSA" | "HACKATHONS" | "ACADEMICS";
  badge: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: "Oracle University" | "LinkedIn Learning";
  completedDate?: string;
  issuedDate?: string;
  validUntil?: string;
  credentialCode?: string;
  category: string;
  description: string;
  badgeText: string;
  verificationUrl?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  score: string;
  highlights: string[];
}
