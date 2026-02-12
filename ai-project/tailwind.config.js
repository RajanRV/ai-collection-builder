import Label from "./src/Components/Ui/Label";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F36D36",
        secondary: "#2E2E2E",
        bg: "#f7f7f7",
        gray: "#6D6D6D",
      },
      fontFamily: {
        avenir: ["Avenir"],
        glamour: ["Glamour Absolute"],
      },
    },
  },
  plugins: [],
};
