/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': { 'max': '885px' },
        'custom-sm': { 'max': '740px' },
        'custom-xs': { 'max': '630px' }
      }
    },
  },
  plugins: [],
}