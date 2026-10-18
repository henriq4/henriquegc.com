import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://henriquegc.com",
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
