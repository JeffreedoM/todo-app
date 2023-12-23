/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "#d6f2fc",
        secondary: "#f0f8fc",
        accent: "#48cae4",
        // dark mode
        dark: {
          primary: "#1c2730",
          secondary: "#313b44",
          accent: "#e8f8fd",
          500: "#787f85",
        },
      },
      colors: {
        primary: "#023e8a",
        accent: "#48cae4",
        // dark mode
        dark: {
          primary: "#92979c",
          secondary: "#313b44",
          accent: "#D6F2FC",
          500: "#787f85",
        },
      },
    },
  },
  plugins: [daisyui],
};
