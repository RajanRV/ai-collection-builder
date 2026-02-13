import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

export default config;

