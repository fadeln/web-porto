import { defineCollection } from "astro:content";
import { portfolioSchema } from "./portfolio/schema";

const portfolioCollection = defineCollection({
  type: "data",
  schema: portfolioSchema,
});

export const collections = {
  portfolio: portfolioCollection,
};
