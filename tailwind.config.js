/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1b2d5e',
        'navy-dark': '#111d3e',
        'jds-blue': '#2e4ea3',
        'jds-orange': '#d4651a',
        'jds-gray': '#f4f6fa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        progressFill: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
      animation: {
        progressFill: 'progressFill linear forwards',
      },
    },
  },
  plugins: [],
};
