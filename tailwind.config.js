/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#0047AB',
          dark: '#003380',
          light: '#3373BE',
        },
        secondary: {
          DEFAULT: '#008080',
          dark: '#006666',
          light: '#33A3A3',
        },
      },
    },
  },
  plugins: [],
}