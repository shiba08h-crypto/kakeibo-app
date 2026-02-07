/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/lp/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0F1A2E",
          800: "#162038",
          700: "#1C2B4A",
          600: "#243558",
        },
        gold: {
          400: "#E8C94A",
          500: "#D4A843",
          600: "#BF9530",
          700: "#A67E20",
        },
        cream: {
          50: "#FFFDF7",
          100: "#FFF9E8",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
