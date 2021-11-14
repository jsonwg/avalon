const colors = require('tailwindcss/colors');

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.blue,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      black: '#0E0E0E',
      white: '#FFFFFF',
    },
  },

  plugins: [],
};

module.exports = config;
