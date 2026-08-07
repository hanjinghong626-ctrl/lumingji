/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#d9ede2',
          200: '#b5dbc6',
          300: '#84c2a4',
          400: '#53a47e',
          500: '#338863',  // 青绿 - main
          600: '#236b4d',
          700: '#1b553e',
          800: '#164432',
          900: '#123829',
        },
        accent: {
          50: '#fdf8ec',
          100: '#f9edcc',
          200: '#f3d999',
          300: '#ecc366',
          400: '#e5ad33',
          500: '#c4922a',  // 金 - accent
          600: '#a37522',
          700: '#82591c',
          800: '#6b4818',
          900: '#5a3c16',
        },
        parchment: {
          50: '#faf7f2',
          100: '#f5f0e6',
          200: '#ede5d5',
          300: '#e0d3bb',
        },
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'Noto Serif', 'Georgia', 'serif'],
        sans: ['Noto Sans SC', 'Noto Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
