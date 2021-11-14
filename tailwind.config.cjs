const colors = require('tailwindcss/colors');

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      keyframes: {
        'fade-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        'fade-pulse': 'fade-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
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
