/** @type {import('tailwindcss').Config} */
export default {
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
<<<<<<< HEAD
        'primary':'#ffff00'
=======
        'primary':'#38dbdb'
>>>>>>> 907a241fca83f24c83b917a40bbf10a43315e30a
      }
    },
  },
  plugins: [],
}