// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const site =
  import.meta.env.PUBLIC_SITE_URL ??
  import.meta.env.SITE_URL ??
  "https://www.academos.com.ve/";

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
});