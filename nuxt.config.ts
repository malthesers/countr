export default {
  meta: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap",
      },
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
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", ["@nuxtjs/google-fonts", {
    families: {
      Inter: [500, 600, 700]
    },
  }]],
};
