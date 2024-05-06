/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#E2E823",
        secondary: "#FF3BB6",
      },
      fontFamily: {
        sans: "Helvetica Neue, Arial, sans-serif",
      },
    },
  },
  plugins: [],
};
