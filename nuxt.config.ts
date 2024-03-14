// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  components: [
    {
      /**
       * Prefix for all the imported component
       */
      path: "./layoute",
      extensions: ["vue"],
      prefix: "",
      /**
       * Directory that the component lives in.
       */
    },
  ],
  supabase: {
    // Options
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: ["/"],
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  runtimeConfig: {
    public: {
      URL: process.env.SUPABASE_URL,
      KEY: process.env.SUPABASE_KEY,
    },
  },
});
