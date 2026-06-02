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
        amber: {
          50: '#fffbf0',
          100: '#fef3e2',
          200: '#fce7c6',
          300: '#f9d5a0',
          400: '#f5be7e',
          500: '#f4a261',
          600: '#e88b47',
          700: '#d66d3b',
          800: '#b85c35',
          900: '#9e4e30',
        },
        slate: {
          50: '#f8fafc',
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}
