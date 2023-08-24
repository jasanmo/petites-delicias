import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	output: "server",
	site: "https://petitesdelicias.com",
	integrations: [tailwind(), sitemap()],
	vite: {
		ssr: {
			noExternal: ["astro-seo-schema"],
		},
	},
});
