/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      maxWidth: { '1440': '1440px' },
      colors: {
        'regal-blue': '#0B4199',
        'my-blue': '#126DFF',
        'custom-orange': '#D96E00',
        'neutral-n600': '#757575', 
        'neutral-n400': '#BDBDBD',
      },
      fontFamily: {
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
      },
      boxShadow: {
        'lg-custom': '0px 12px 20px 0px rgba(26, 26, 26, 0.16)',
        'md-custom': '0px 6px 16px 0px rgba(26, 26, 26, 0.24)',
        'sm-custom': '0px 2px 4px 0px rgba(26, 26, 26, 0.20)',
        'dialog-custom': '0px -4px 22px -5px rgba(0, 0, 0, 0.25)',
        'header-custom': '0px 5px 10px -5px rgba(26, 26, 26, 0.20)',
      },
      borderRadius: { 'card': '10px' },
      screens: {
        'xs': '480px',  
        '3xl': '1920px', 
        '4xl': '2560px'  
      }
    },
  },
  plugins: [],
}