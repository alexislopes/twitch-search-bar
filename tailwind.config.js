/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#a970ff",
        surface: "#18181a",
        surface2: "#1f1e23"
      }

    },
  },
  plugins: [],
}

