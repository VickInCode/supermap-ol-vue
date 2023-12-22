/** @type {import('tailwindcss').Config} */
module.exports = {
   purge:    ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content:  ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],           
  theme: {
    extend: {
      boxShadow:{
        'button'      : '5px 5px 1px 0 rgb(0, 0, 0, 0.1)',
        'button-focus': '2px 2px 1px 0 rgb(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
}
