/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "mobile-md": "375px",
      "mobile-lg": "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "lg-max": { max: "1023px" },
      xl: "1280px",
      "2xl": "1536px",
    },

    // This is overridden by the chakra theme
    fontFamily: {
      sans: ["'Readex Pro'", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        "green-bluish": "#61F2E2",
        purple: {
          100: "#EBDEFF",
          300: "#F3ECFE",
          900: "#5F4DFF",
        },
        transparent: "transparent",
        "gray-peace": "#FBFBFB",
        blue: {
          dark: "#0f172a",
          gray: "#475569",
          "gray-light": "#64748B",
        },
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
      },
    },
    backgroundImage: {
      mainVertical:
        "linear-gradient(172.89deg, #5DB5EA 4.39%, #5F4DFF 51.8%, #E31792 97.28%)",
      mainHorizontal:
        "linear-gradient(90.54deg, #2C1B5E 0.42%, #2C1B5E 51.76%, #2C1B5E 100%)",
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/forms"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    function ({ addUtilities }) {
      addUtilities({
        ".inset-center": {
          top: "50%",
          left: "50%",
          "@apply -translate-x-1/2 -translate-y-1/2": {},
        },
      });
    },
  ],
};
