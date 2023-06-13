/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "576px" },
        sm: { min: "576px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1339px" },
        xl: { min: "1200px" },
        tx: { min: "640px" },
        tx2: { min: "768px" },
      },
    },
  },
  plugins: [],
};
