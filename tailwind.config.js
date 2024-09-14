/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        menu: '#F2F4F5',
        loginBlue: '#3c9ae2',
        lightGray: '#777777',
        primary: '#0A96CC',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  important: true,
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
