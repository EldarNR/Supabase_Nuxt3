// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  css: ["~/assets/css/tailwind.css"],
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
      URL: "https://jzkasefbtoupjkvkluyf.supabase.co",
      KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a2FzZWZidG91cGprdmtsdXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5OTQzMDIsImV4cCI6MjAyNTU3MDMwMn0.HBJ0_hh5X0bqqqb5-IC_EQg4b_vmUMuwCP3YmDlZ14I",
    },
  },
});
