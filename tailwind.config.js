/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#d6f2fc",
        secondary: "#f0f8fc",
        accent: "#48cae4",
      },
      colors: {
        primary: "#023e8a",
        accent: "#48cae4",
      },
    },
  },
  plugins: [daisyui],
};
