/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-left-out": "0.4s ease-in forwards slide-left-out",
        "slide-left-in": "0.4s ease-out slide-left-in",
        "slide-right-out": "0.4s ease-in forwards slide-right-out",
        "slide-right-in": "0.4s ease-out slide-right-in",
      },
      keyframes: {
        "slide-left-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-left-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "slide-right-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      yellow: "#FCB400",
      blue: "#095AB8",
      "hover-blue": "#074d9f",
      "cpt-black": "#081B18",
      "light-grey": "#F1F1F1",
      "light-grey-2": "#F3F3F3",
      "mid-grey": "#081A181C",
      "dark-grey-2": "#3C3B3C",
      "dark-grey": "#333333",
      "powder-blue": "#B7D9FF",
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
