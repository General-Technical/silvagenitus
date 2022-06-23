/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#58595b",
      secondary: "#F1E7E4",
      background: "#FFFFFF",
      buttons: "#1B1F22",
      hover: "#9F3324",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        jack: ["jack", "serif"],
        jackthin: ["jackthin", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
