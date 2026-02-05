import { z } from "astro:content";

export const aboutSchema = z.array(z.string());

export const experienceSchema = z.object({
  id: z.number(),
  date: z.string(),
  title: z.string(),
  role: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
});

export const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  techStack: z.array(z.string()),
  link: z.string(),
});

export const portfolioSchema = z.object({
  about: aboutSchema,
  experiences: z.array(experienceSchema),
  projects: z.array(projectSchema),
});

export type About = z.infer<typeof aboutSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Portfolio = z.infer<typeof portfolioSchema>;
