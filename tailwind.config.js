/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'ui-serif', 'serif'],
        sans: ['Segoe UI', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#f0f4fb',
          100: '#dce6f5',
          200: '#b8cceb',
          500: '#3b6cb4',
          600: '#2a5298',
          700: '#1a3a6e',
          800: '#112b56',
          900: '#0b1e3e',
        },
      }
    },
  },
  plugins: [],
}
