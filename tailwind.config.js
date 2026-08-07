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
          500: '#338863',
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
          500: '#c4922a',
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
        ink: {
          50: '#f7f7f6',
          100: '#e5e5e3',
          200: '#c8c8c4',
          300: '#a3a39d',
          400: '#787870',
          500: '#5a5a52',
          600: '#4a4a43',
          700: '#3d3d37',
          800: '#33332e',
          900: '#2c2c28',
        },
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'Noto Serif', 'Georgia', 'serif'],
        sans: ['Noto Sans SC', 'Noto Sans', 'system-ui', 'sans-serif'],
        wenkai: ['"LXGW WenKai TC"', '"Noto Serif SC"', 'serif'],
      },
    },
  },
  plugins: [],
};
