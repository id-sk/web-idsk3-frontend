/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#0B4199',
        'my-blue': '#126DFF',
      },
      fontFamily: {
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
      },
      fontSize: {
        'headline-3': ['40px'],
      },
      spacing: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [
  ],
}