import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), mdx()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  image: {
    service: passthroughImageService()
  }
});