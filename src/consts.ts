import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Henrique GC",
  DESCRIPTION:
    "Henrique GC, software engineer who designs backends and leads the teams that build them.",
  EMAIL: "henriq4net@gmail.com",
};

export const HOME: Metadata = {
  TITLE: "Henrique GC",
  DESCRIPTION: SITE.DESCRIPTION,
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About Henrique GC, backend software engineer in Brazil.",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Writing by Henrique GC.",
};

export const PROJECTS: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Work by Henrique GC.",
};

export const SOCIALS: Socials = [
  { NAME: "email", HREF: `mailto:${SITE.EMAIL}` },
  { NAME: "linkedin", HREF: "https://www.linkedin.com/in/henriq4" },
  { NAME: "github", HREF: "https://github.com/henriq4" },
  { NAME: "résumé", HREF: "https://www.linkedin.com/in/henriq4" },
];
