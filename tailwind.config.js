/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        londrina: ['"Londrina Shadow"', "sans-serif"],
        mynerve: ["Mynerve", "sans-serif"],
      },
    },
  },
  plugins: [],
};
