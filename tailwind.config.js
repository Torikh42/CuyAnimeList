/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: "#eeeeee",
        accent: "#ffc639",
        secondary: "#393e46",
        dark: "#222831",
      },
    },
  },
  plugins: [],
};
