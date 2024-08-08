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
      lineHeight: {  // This is the default, equivalent to 28px in most base font sizes
        'custom-28': '28px',  // Custom line-height for 24px
        'custom-19': '19px',  // Custom line-height for 32px
        'custom-24': '24px',
        'custom-26': '26px', 
        'custom-35': '35px',
        'custom-45': '45px',  
        // Add more custom line-height values as needed
      },
      fontSize: {
        'custom-19': '19px',
        'custom-24': '24px',  // Custom font size of 24px
      },
      colors: {
        'regal-blue': '#0B4199',
        'my-blue': '#126DFF',
      },
      fontFamily: {
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
      },
      spacing: {
        '15': '3.75rem',
      },
      screens: {
        'xs': '480px',  // Custom breakpoint for very small devices
        'sm': '640px',  // Small devices
        'md': '768px',  // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra-large devices
        '2xl': '1536px', // Extra-extra-large devices
        '3xl': '1920px', // Very large screens (e.g., large desktop monitors)
        '4xl': '2560px'  // Ultra-large screens (e.g., large widescreens)
    },
    },
  },
  variants: {
    extend: {
      lineHeight: ['responsive'], // Ensure responsive variants are generated
    },
  },
  plugins: [
  ],
}