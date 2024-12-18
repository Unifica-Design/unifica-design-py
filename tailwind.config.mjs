/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle farthest-corner at 42% 40%, #EFDC7D 0%, #E7C30B 36.0321044921875%, #A1572B 75.677490234375%)",
      },
      colors: {
        primary: {
          DEFAULT: "#ff9a02",
        },
        secondary: {
          DEFAULT: "#0e3f68",
        },
      },
    },
  },
  plugins: [],
};
