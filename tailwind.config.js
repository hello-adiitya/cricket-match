/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#ff3838',
          600: '#ed1c1c',
          700: '#c80f0f',
          800: '#a61111',
          900: '#891515',
          950: '#4b0404',
        },
        green: {
          50: '#154e89',
          100: '#0f78c8',
          200: '#04304b',
          300: '#15893f',
          400: '#158915',
          500: '#044b04',
        },
        yellow: {
          50: '#c87e0f',
          100: '#a66b11',
          200: '#895815',
          300: '#4b3004',
          400: '#ed991c',
          500: '#ffb438',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};