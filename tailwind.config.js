/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/@UI/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000",
        gray: {
          100: "#B5B5C3",
        },
        tahiti: {
          light: "#efe9e1",
          DEFAULT: "#EFE9E1",
          dark: "#eadfd0",
        },
        primary: {
          light: "#22d3ee",
          DEFAULT: "#8bbee8",
          dark: "#0891b2",
        },
        secondary: {
          light: "#22d3ee",
          DEFAULT: "#d7a9d3",
          dark: "#0891b2",
        },
        success: {
          light: "#22d3ee",
          DEFAULT: "#a8d5ba",
          dark: "#0891b2",
        },
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0px 2px 8px 1px rgba(22, 22, 22, 0.04)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },

    fontFamily: {
      dana: "dana",
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: theme("colors.blue-500"),
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "4px",
          width: "5px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#eadfd0",
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: "#efe9e1",
        },
      });
    }),
  ],
};
