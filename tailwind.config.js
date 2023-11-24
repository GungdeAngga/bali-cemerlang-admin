/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'VividRed': '#EB1D36',
        'VividRed2' : '#F90505',
        'Gray65': '#A6A6A6',
        'LightGrayishViolet': '#F8F7F9',
        'DarkGray': '#8D8D8D',
        'LightShadeofGray': '#EEEEEE',
        'DarkBlue': '#0057FF',
      },
      fontFamily: {
        poppins: 'Poppins',
        neue: 'Bebas Neue',
      },
    },
  },
  plugins: [],
}

