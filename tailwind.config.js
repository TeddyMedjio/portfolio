/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    fontFamily: {
      title: ["Anton", "poppins"],
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
      },
    },
    plugins: [],
  },
};
