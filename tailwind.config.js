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
      lineHeight: { 
        'custom-14': '14px', // This is the default, equivalent to 28px in most base font sizes
        'custom-28': '28px',
        'custom-18': '18px',  // Custom line-height for 24px
        'custom-19': '19px',  // Custom line-height for 32px
        'custom-24': '24px',
        'custom-26': '26px', 
        'custom-35': '35px',
        'custom-45': '45px',  
        // Add more custom line-height values as needed
      },
      fontSize: {
        'custom-9.5': '9.5px',
        'custom-19': '19px',
        'custom-24': '24px',  // Custom font size of 24px
      },
      colors: {
        'regal-blue': '#0B4199',
        'my-blue': '#126DFF',
        'custom-orange': '#D96E00',
        'custom-white': '#FFF', 
      },
    outline: {
      'custom-orange': '2px solid #D96E00', // Custom outline style
      'custom-white': '2px solid #FFF',     // Custom outline style
    },
    outlineOffset: {
      '3': '3px', // Custom outline offset
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
    boxShadow: {
      'lg-custom': '0px 12px 20px 0px rgba(26, 26, 26, 0.16)',
      'md-custom': '0px 6px 16px 0px rgba(26, 26, 26, 0.24)',
      'sm-custom': '0px 2px 4px 0px rgba(26, 26, 26, 0.20)',
      'dialog-custom': '0px -4px 22px -5px rgba(0, 0, 0, 0.25)',
      'header-custom': '0px 5px 10px -5px rgba(26, 26, 26, 0.20)',
    },
    borderRadius: {
      'card': '10px',
    },
    borderColor: {
      'neutral-n400': '#BDBDBD',
    },
    backgroundColor: {
      'neutral-white': '#FFF',
    }
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