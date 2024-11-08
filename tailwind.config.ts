import type { Config } from "tailwindcss";
import { primary, gray } from "./custom/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          50: primary[50],
          100: primary[100],
          200: primary[200],
          300: primary[300],
          400: primary[400],
          500: primary[500],
          600: primary[600],
          700: primary[700],
          800: primary[800],
          900: primary[900],
          950: primary[950],
        },
      },
      gray: {
        50: gray[50],
        100: gray[100],
        200: gray[200],
        300: gray[300],
        400: gray[400],
        500: gray[500],
        600: gray[600],
        700: gray[700],
        800: gray[800],
        900: gray[900],
        950: gray[950],
      },
    },
  },
  plugins: [],
};
export default config;
