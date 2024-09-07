import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Henrique GC",
  DESCRIPTION: "Henrique GC portfolio.",
  EMAIL: "henriq4net@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Henrique GC home portfolio.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About me.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/henriq4",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/henriq4",
  },
];
