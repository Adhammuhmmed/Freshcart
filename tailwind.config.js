/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'xl': '0px 3px 8px rgba(0, 204, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
