/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#3EC4FF",
        secondary: "#000D83",
        accent: "#F8FBFE",
        neutral: "#E4F3FD",
        "base-100": "#ffffff",
      }
    },
   
  },
  plugins: [require("daisyui")],
}