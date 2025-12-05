/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0D47A1',
          gold: '#FFC107',
          green: '#4CAF50',
          dark: '#212121',
          light: '#F5F5F5',
        }
      }
    },
  },
  plugins: [],
}