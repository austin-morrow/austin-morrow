/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#1D1D1D',
        'primary-gray': '#525252',
        'primary-light-gray': '#E5E5E5',
        'primary-white': '#FFFFFF'
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    
  ],
}