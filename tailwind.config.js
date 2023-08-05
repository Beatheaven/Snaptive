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
        'nav_bg' : "url('/img/BG_1.png')",
        'about_bg' : "url('/img/BG_2.png')",
        'service_bg' : "url('/img/BG_3.png')",
        'footer_bg' : "url('/img/BG_6.png')",
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
