/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(200px,1fr))",
      },
      spacing: {
        container: `max(
            1rem,
            calc((100vw - calc(1440px - 1rem * 2)) / 2)
            )`,
        "sm-container": `max(
            1rem,
            calc((100vw - calc(550px - 1rem * 2)) / 2)
            )`,
      },
      colors: {
        yellow: "#ffda44",
      },
    },
  },
};
