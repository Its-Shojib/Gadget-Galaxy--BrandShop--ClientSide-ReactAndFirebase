/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lobster: "'Lobster',sans-serif",
        rancho: "'Rancho', cursive",
        marker: "'Permanent Marker', cursive"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
}