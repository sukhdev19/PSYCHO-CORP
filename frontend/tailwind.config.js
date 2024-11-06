/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        'primary':'#38dbdb',
        'dark-primary' : '#1a1a1a',
        'dark-background' : '#121212',
        'dark-text' : '#e0e0e0',
      }
    },
  },
  plugins: [],
}