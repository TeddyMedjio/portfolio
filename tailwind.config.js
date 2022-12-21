/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    fontFamily: {
      anton: ["Anton", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/img/bg.png')",
        "hero-musique": "url('../public/img/background.jpg')",
        "hero-rendez": "url('../public/img/backgroung-two.png')",
      },
    },
    plugins: [],
  },
};
