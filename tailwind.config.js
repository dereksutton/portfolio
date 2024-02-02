/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCoral: '#E2725B',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active', 'focus'],
    },
  },
  plugins: [],
}

