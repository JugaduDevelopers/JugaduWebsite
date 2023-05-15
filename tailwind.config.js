/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-320px': 'repeat(auto-fit, 20rem)',
      },
      spacing: {
        container: `max(
            1rem,
            calc((100vw - calc(1440px - 1rem * 2)) / 2)
            )`,
        'sm-container': `max(
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
