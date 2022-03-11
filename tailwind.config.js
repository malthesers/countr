module.exports = {
  content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`, `plugins/**/*.{js,ts}`],
  theme: {
    extend: {
      animation: {
        secret: "fade-in 400ms linear 1",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "scale(0.7)" },
          "80%": { opacity: 1, transform: "scale(1.3)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
    fontFamily: {
      mono: ["Montserrat Alternates", "sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
