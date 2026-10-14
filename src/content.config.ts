import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    image: z.string().optional(),
    categories: z.array(z.string()).default([]),
    categorySlugs: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    pinned: z.boolean().optional(),
  }),
});

export const collections = { articles };
