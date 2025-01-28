/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      yellow: "#FCB400",
      blue: "#095AB8",
      "cpt-black": "#081B18",
      "light-grey": "#F1F1F1",
      "dark-grey": "#333333",
      "powder-blue": "#B7D9FF",
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
