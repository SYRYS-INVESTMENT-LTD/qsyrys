/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': {min: '576px'},
      'sm': {min: '640px'},
      'md': {max: '768px'},
      'md2': {min: '992px'},
      'lg': {min: '1024px'},
      'xl': {min: '1200px'}
    },
    extend: {
      backgroundImage: {
        'flags': "url('../img/circular_flag.png')",
        'flagsEN': 'url("../img/gb.svg")',
        'card': "url('../img/WhatsApp-Image-2022-07-06-at-11.07.30-PM.jpeg')",
      },
      backgroundPosition: {
        'bgunset': 'unset'
      }
    },
  },
  plugins: [],
}