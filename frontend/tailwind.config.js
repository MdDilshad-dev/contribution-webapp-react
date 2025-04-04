/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {md: { max: "1050px"}, sm: { max: "550px" }}
  },
  darkMode:'class',
  plugins: [],
}