/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // If you want custom fonts, e.g. 'Inter'
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          // Example brand colors (replace with your screenshot’s exact values)
          brandBlue: '#5b6af7',
          brandGray: '#f5f7fa',
          textDark: '#1f2b4c',
        },
      },
    },
    plugins: [],
  }