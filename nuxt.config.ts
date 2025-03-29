import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    "nuxt-icons",
    "nuxt-lodash",
    "@nuxt/eslint",
    "vue3-carousel-nuxt",
  ],

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      apiUrl: process.env.API_URL,
    },
  },

  ssr: false,

  imports: {
    dirs: ["store/.ts", "types/**/.ts", "types/*.ts"],
  },

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
