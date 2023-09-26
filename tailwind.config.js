/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          '50': '#fefce8',
          '100': '#fffbc2',
          '200': '#fff289',
          '300': '#ffe445',
          '400': '#fdd427',
          '500': '#edb605',
          '600': '#cc8d02',
          '700': '#a36305',
          '800': '#864e0d',
          '900': '#724011',
          '950': '#432105',
      },
        'primary-black': '#1F1F1F'
      }
    },
  },
  plugins: [
    
  ],
}