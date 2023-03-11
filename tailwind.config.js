const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*{.js,.jsx}", "./components/**/*{.js,.jsx}"],
  theme: {
    colors: {
      brand: {
        'dark-blue': "#012857",
        'light-blue': "#43BECA",
        'blue-gray': "#475769",
        yellow: "#F6BB42",
        white: "#f8fafc",
      },
      darkBlue: "#012857",
      lightBlue: "#43BECA",
      bluegray: "#475769",
      lightgreen: "#43BECA",
      yellow: "#F6BB42",
      white: "#f8fafc",
      gray: {
        ...colors.slate,
        900: "#0f172a",
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      anton: ["Anton", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/img/bg.png')",
        "hero-musique": "url('../public/img/background.jpg')",
        "hero-rendez": "url('../public/img/backgroung-two.png')",
        "hero-color": "url('../public/img/bgcolor.png')",
      },
      borderRadius: {
        ssm: "4px",
      },
      zIndex: {
        100: "100",
      }
    },
    plugins: [],
  },
};
