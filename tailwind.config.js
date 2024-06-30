/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '885px': '885px'
      },
      screens: {
        'custom-md': { 'max': '885px' }
      }
    },
  },
  plugins: [],
}