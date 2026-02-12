import Label from "./src/Components/Ui/Label";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F36D36",
        secondary: "#2E2E2E",
        backColor: "#f7f7f7",
        gray: "#6D6D6D",
        darkGray: "#4A4A4A",
        lightGray: "#DEDEDE",
        btnSecondary: '#CBEAEE',
        secondaryBtnText: '#257F91',
      },
      fontFamily: {
        avenir: ["Avenir"],
        glamour: ["Glamour Absolute"],
      },
    },
  },
  plugins: [],
};
