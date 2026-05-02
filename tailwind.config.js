/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14452F', // Deep Forest Green
          light: '#1B5B3E',
          dark: '#0D2E1F',
        },
        accent: {
          DEFAULT: '#F4C430', // Saffron / Gold
          light: '#F7D468',
        },
        background: {
          DEFAULT: '#FAF9F6', // Off-White / Cream
        },
        charcoal: {
          DEFAULT: '#333333',
          light: '#4A4A4A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
