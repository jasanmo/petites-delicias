import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://petitesdelicias.com",
	integrations: [tailwind(), sitemap()],
	vite: {
		ssr: {
			noExternal: ["astro-seo-schema"],
		},
	},
	adapter: vercel({
		functionPerRoute: false,
	}),
	output: "server",
});
