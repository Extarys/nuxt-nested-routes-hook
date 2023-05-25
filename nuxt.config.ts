// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	modules: [
		resolve("./modules/routes"),
		'@nuxtjs/i18n',
	  ],
})