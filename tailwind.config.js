/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#230b0c',
        'gradient': 'linear-gradient(97.2deg, rgba(255, 6, 6, 0.1) -22.23%, rgba(0, 0, 0, 0.1) 107.38%)',
        'text': '#959595'
      }
    },
  },
  plugins: [],
}