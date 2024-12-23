/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#2a2a2a",
        customTextGrey: "#b3b3b3",
        customPurple: "#490EF3",
        baseHighlight: "hsla(0, 0%, 100%, 0.1)",
        tintedHighlight: "hsla(0, 0%, 100%, .14)",
      },
      spacing: {
        "scrollbar-thumb": "8px", // Custom width for the scrollbar thumb
      },
      fontStretch: {
        normal: "normal", // Default
        ultraCondensed: "ultra-condensed",
        extraCondensed: "extra-condensed",
        condensed: "condensed",
        semiCondensed: "semi-condensed",
        semiExpanded: "semi-expanded",
        expanded: "expanded",
        extraExpanded: "extra-expanded",
        ultraExpanded: "ultra-expanded",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Add the plugin here
  ],
};
