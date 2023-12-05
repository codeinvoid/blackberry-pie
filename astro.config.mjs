import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    svelte(),
  ],
  adapter: vercel(),
});
