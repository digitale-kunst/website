import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    education: z.boolean().optional(),
    url: z.string().optional(),
  }),
});

const person = z.object({
  name: z.string(),
  email: z.string(),
  titel: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  bio: z.string().optional(),
  role: z.string().optional(),
  avatar: z.string().optional(),
  socials: z.array(
    z.object({
      name: z.string(),
      href: z.string(),
    })
  ),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    archived: z.boolean().optional(),
    featured: z.boolean().optional(),
    slider: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});
export const collections = {
  blog: blog,
  work: work,
  schauraum: projects,
  students: person,
  team: person,
  teachers: person,
  labs: projects,
  pages: pages,
};
