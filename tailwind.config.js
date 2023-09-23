/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "linear-radial": "linear-gradient(270deg, #903aff 0%, #fe34b9 100%)",
      },
      colors: {
        primary: "#150E28",
        secondary: "#903AFF",
        tertiary: "#D434FE",
      },
      width: {
        fullscreen: "1512px",
      },
      fontFamily: {
        Montserat: "'Montserrat', sans-serif",
        "Clash-Display": "'Clash Display', sans-serif",
        "Unica-One": "'Unica One', cursive",
      },
      animation: {
        spin: "spin 6s infinite normal",
      },
    },
  },
  plugins: [],
};
