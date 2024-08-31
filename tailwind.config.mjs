/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1224px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        header: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        title: "#0f172a",
        description: "#374b68",
      },
      fontSize: {
        header: ["3.75rem", "4.5rem"],
      },
    },
  },
  plugins: [],
};
