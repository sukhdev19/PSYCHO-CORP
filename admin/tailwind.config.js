/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
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
        primary: '#38dbdb', // Fixing hex format for primary color
        darkBg: '#1a1a2e', // Background color for dark mode
        darkText: '#e0e0e0', // Text color for dark mode
        darkSidebar: '#162447', // Sidebar color for dark mode
      },
    },
  },
  plugins: [],
}
