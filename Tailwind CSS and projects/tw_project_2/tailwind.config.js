/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      mobile:'480px',
      tablet:'770px',
      desktop:'1440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing:{
        13:'3.25rem'
      }
    },
  },
  plugins: [],
}

