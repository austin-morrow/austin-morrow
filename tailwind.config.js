/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gold': '#FDD427',
        'primary-black': '#1F1F1F'
      }
    },
  },
  plugins: [],
}