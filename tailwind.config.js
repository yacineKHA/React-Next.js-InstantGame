/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      backgroundImage:{
        'spider-man':"url('/public/spiderman.webp')"
      },

      colors:{
        darkblack: "#272727",
      }
    },
  },
  plugins: [],
}
