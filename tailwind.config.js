/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        // Turquoise
        coderight: {
          lighter: '#91E7E7',
          DEFAULT: '#0CCCCC',
          darker: '#2EA1A4'
        }
      },
      secondary: {
        // Pink
        coderight: {
          lighter: '#FFB0CF',
          DEFAULT: '#FF4F94',
          darker: '#C6437B'
        }
      },
      'accent-primary': {
        // Grey
        coderight: {
          lighter: '#F5F5F5',
          DEFAULT: '#5C5C5C',
          darker: '#4E4F4F'
        }
      },
      'accent-secondary': {
        // Blue
        coderight: {
          lighter: '#3A32EE',
          DEFAULT: '#3600CC',
          darker: '#1700A1'
        }
      },
      black: {
        coderight: {
          lighter: '#232931',
          DEFAULT: '#191E24',
          darker: '#000000'
        }
      }
    },
    extend: {},
  },
  plugins: [],
}

