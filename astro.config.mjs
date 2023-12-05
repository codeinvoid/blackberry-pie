import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    svelte(),
  ],
});
