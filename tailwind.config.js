/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    darkMode: false,
    extend: {
      backgroundColor: {
        'columbia-blue': '#C9DAEA',
        'beaver': '#A18276',
        'brunswick-green': '#023C38',
        'bittersweet': '#FE5F55',

        'gunmetal': '#143642',
        'deep-back': '#001F2A',
        'very-blue': '#00CEFF',
      },
      textColor: {
        'columbia-blue': '#C9DAEA',
        'beaver': '#A18276',
        'brunswick-green': '#023C38',
        'bittersweet': '#FE5F55',

        'gunmetal': '#143642',
        'deep-back': '#001F2A',
        'very-blue': '#00CEFF',
        'bright-orange': '#F49431',
        'neutral': '#EFFBFF',
      },
      fontFamily: {
        'archivo-black': ["Archivo Black"],
        'archivo-narrow': ["Archivo Narrow"],
        'archivo-regular': ["Archivo"],
        'poppins-300': ["Poppins"]
      },
      borderRadius: {
        '4xl': '40%'
      }
    },
  },
  plugins: [],
}

