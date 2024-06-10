/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#E2E823",
        yellow: "#E2E823",
        secondary: "#FF3BB6",
        purple: "#FF3BB6",
        green: "#2BFF00",
        cyan: "#3EFFFF",
        orange: "#FF6400",
      },
      fontFamily: {
        sans: "Helvetica Neue, Arial, sans-serif",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
