import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: "https://digitalekunst.click",
  integrations: [tailwind(), react(), solid(), mdx(), sitemap(), metaTags()],
});
