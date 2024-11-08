import type { Config } from "tailwindcss";
import { primary, contrast } from "./custom/colors";

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
        contrast: {
          50: contrast[50],
          100: contrast[100],
          200: contrast[200],
          300: contrast[300],
          400: contrast[400],
          500: contrast[500],
          600: contrast[600],
          700: contrast[700],
          800: contrast[800],
          900: contrast[900],
          950: contrast[950],
        },
      },
    },
  },
  plugins: [],
};
export default config;
