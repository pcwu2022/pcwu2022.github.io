/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Cabinet Grotesk"', '"Clash Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

