export default {
  meta: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  css: ["@/assets/css/main.css"],
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
