/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
 darkMode: ["class"],
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   screens: {
    xs: "480px",
   },
   borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
   },
   colors: {
    "primary-foreground": "#242429",
    "muted-light": "#F1F1F1",
    "muted-dark": "#A1A1A1",
    accent: "#43A2E2",
   },
   fontFamily: {
    "mona-sans": ['"Mona Sans"', "sans-serif"],
   },
  },
 },
 plugins: [
  require("tailwindcss-animate"),
  plugin(function ({ addUtilities }) {
   addUtilities({
    ".h1": {
     fontSize: "42px",
     letterSpacing: "-0.04em",
    },
    ".h2": {
     fontSize: "32px",
     letterSpacing: "-0.04em",
    },
    ".h3": {
     fontSize: "22px",
    },
    ".h4": {
     fontSize: "20px",
    },
    ".h5": {
     fontSize: "18px",
    },
    ".h6": {
     fontSize: "16px",
    },
   });
  }),
 ],
};
