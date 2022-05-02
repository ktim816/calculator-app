const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Spartan', ...fontFamily.sans],
      },
      fontSize: {
        md: ['1rem', '1.125rem'],
        xl: ['1.25rem', '1.375rem'],
        '2xl': ['1.75rem', '1.9375rem'],
        '3xl': ['2rem', '2.25rem'],
        '5xl': ['3rem', '3.375rem'],
      },
      maxWidth: {
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
};
