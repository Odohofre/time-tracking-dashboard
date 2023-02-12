/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        attribute: "#3e52a3",
        primary: {
          blue: "#5847eb",
        },
        secondary: {
          work: "#ff8c66",
          play: "#56c2e6",
          study: "#ff5c7c",
          exercise: "#4acf81",
          social: "#7536d3",
          care: "#f1c65b",
        },
        "neutral-blue": {
          50: "#fcffff",
          100: "#bdc1ff",
          200: "#6f76c8",
          700: "#1c1f4a",
          800: "#0f1424",
        },
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"], // font-weights: 300, 400, 500
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
