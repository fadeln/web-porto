export type Experience = {
  date: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
};

export type Project = {
  name: string;
  description: string;
  techStack: string[];
  link: string;
};

export type PortfolioData = {
  experiences: Experience[];
  projects: Project[];
};
