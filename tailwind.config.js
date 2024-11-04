/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Active le mode dark avec la classe `dark`
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "serif"],
      },
    },
  },
  plugins: [],
};
