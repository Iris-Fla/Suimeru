// https://nuxt.com/docs/api/configuration/nuxt-config
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  components: true,
  experimental: {
    viewTransition: true,
  },
  modules: [
    "@vueuse/nuxt",
    "usebootstrap",
    "usebootstrap-docs",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  css: ["~/assets/css/default.css", "bootstrap/scss/bootstrap.scss"],
  app: {
    head: {
      title: "メルの図書館",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    apiKey: API_KEY,
    public: {
      baseURL: BASE_URL,
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
