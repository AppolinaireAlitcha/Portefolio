/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: "#1b1b1b",
        light: "#ffffff",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularBackground: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)',
        circularBackgroundLight: 'repeating-radial-gradient(rgba(225, 225, 255, 0.5) 2px, #1b1b1b 5px, #1b1b1b 100px)',
        circularBackgroundLg: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #f5f5f5 5px, #f5f5f5 80px)',
        circularBackgroundLightLg: 'repeating-radial-gradient(rgba(225, 225, 255, 0.5) 2px, #1b1b1b 5px, #1b1b1b 80px)',

        circularBackgroundMd: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px,  #f5f5f5 5px,  #f5f5f5 60px)',
        circularBackgroundLightMd: 'repeating-radial-gradient(rgba(225, 225, 255, 0.5) 2px, #1b1b1b 5px, #1b1b1b 60px)',

        circularBackgroundSm: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px,  #f5f5f5 4px,  #f5f5f5 40px)',
        circularBackgroundLightSm: 'repeating-radial-gradient(rgba(225, 225, 255, 0.5) 2px, #1b1b1b 4px, #1b1b1b 40px)',
      }
    },

    screens: {
      "2xl": {max: "1535px"} ,
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: {max: "767px"},
      sm: {max: "639px"},
      xs: {max: "479px"},
    } 
  },
  plugins: [],
}

