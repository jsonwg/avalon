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
      boxShadow: {
        box: 'inset 0 1px 2px rgba(0, 0, 0, 1), 0 1px rgba(255, 255, 255, 0.08)',
        'glow-r': '0 0 0.5rem rgba(255, 0, 0, 1)',
        'glow-b': '0 0 0.5rem rgba(100, 100, 255, 1)',
        'glow-y': '0 0 0.5rem rgba(255, 200, 0, 1)',
      },
    },
    colors: {
      transparent: 'transparent',
      gray: colors.gray,
      red: colors.red,
      rose: colors.rose,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
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
