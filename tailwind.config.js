/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/img/BG.svg')",
        'button': "url('/img/button.svg')"
      },
      screens: {
        'sm': '640px',
      },
      fontFamily:{
        'sans' : "'Poppins'"
      }
    },
  },
  plugins: [],
}
