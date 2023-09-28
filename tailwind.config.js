const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontSize:{
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl' : '150px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'secondary-100': '#F5F5F5',
      'secondary-200': '#E7E7E7',
      'secondary-300': '#A3A3A3',
      'secondary-400': '#858585',
      'success': '#54BF6C',
      'success-100': '#EEF9F0',
      'dark': '#474747',
      'primary': '#0097e6',
      'warning': '#e67e22',
      'danger': '#F00'
    },
  },
  plugins: [],
}

