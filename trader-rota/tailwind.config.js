/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      mobile: "350px",
      tablet: "700px",
      desktop: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
