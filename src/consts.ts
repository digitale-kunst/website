import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Digitale Kunst 🌐",
  EMAIL: "digitalekunst@uni-ak.ac.at",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "💿",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "work & education",
  DESCRIPTION: "where I have worked and what education i've received",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "collection of my projects, ranging from development, design to arts",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter",
    HREF: "https://twitter.com/ripplandreas",
  },
  {
    NAME: "github",
    HREF: "https://github.com/andreasrippl",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/rippl",
  },
];
