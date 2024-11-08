/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      colors: {
        'primary': '#23d5d5',
        // You can add more custom color shades here if needed
      },
      backgroundColor: {
        'light-bg': '#ffffff',
        'dark-bg': '#1a1a1a', // Background color for dark mode
      },
      textColor: {
        'light-text': '#000000',
        'dark-text': '#f0f0f0', // Text color for dark mode
      },
    },
  },
  plugins: [],
}
