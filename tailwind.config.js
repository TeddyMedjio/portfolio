/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    colors: {
      darkBlue: "#012857",
      lightBlue: "#43BECA",
      bluegray: "#475769",
      lightgreen: "#43BECA",
      yellow: "#F6BB42",
      white: "#f8fafc",
      gray: {
        900: "#0f172a",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
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
        "hero-color": "url('../public/img/bgcolor.png')",
      },
    },
    plugins: [],
  },
};
