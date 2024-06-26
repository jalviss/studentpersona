/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '10px',
        xl: '10px',
        '2xl': '10px',
      },
    }

  },
  plugins: [],
}

