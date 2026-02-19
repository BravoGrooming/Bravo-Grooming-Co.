/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#010000',
        'brand-ivory': '#FDF4E9',
        'brand-bronze': '#BD9865',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        accent: ['"CS Gordon"', 'serif'], // Fallback needed
        sans: ['"Julius Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
