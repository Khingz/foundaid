/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('')",
      },
      height: {
        '20p': '20%',
        '80p': '80%',
      },
      fontFamily: {
        'primary-font': ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        '10xl': '9rem',
        '11xl': '10rem', 
      },
      colors: {
        customBlue: '#1355A9',
        customGreen: '#94C83F',
      }
    }
  },
  plugins: [],
}

