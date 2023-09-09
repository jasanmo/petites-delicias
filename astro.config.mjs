import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://petitesdelicias.com",
	integrations: [tailwind(), sitemap()],
	redirects: {
		"/tag/mona/": "/",
		"/tag/crepes/": "/",
		"/tag/almuerzo/": "/",
		"/tag/verduras/": "/",
		"/tag/flan/": "/",
		"/tag/guarnicion/": "/",
		"/tag/meriendas/": "/",
		"/page/2/": "/",
	},
});
