export default {
  meta: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  app: {
    baseURL: '/countr',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  css: ["@/assets/css/main.css"],
  nitro: {
    preset: 'github_pages'
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", ["@nuxtjs/google-fonts"]],
  googleFonts: {
    families: {
      'Montserrat Alternates': [500, 600, 700],
    },
    download: true,
  }                                                                            
};
