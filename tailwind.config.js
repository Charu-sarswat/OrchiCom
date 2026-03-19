/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      },
      screens: {
        xl: '1180px',
      },
    },
    extend: {
      colors: {
        primary: '#18A1D8',
        'primary-light': '#37B9EC',
        secondary: '#46C6CE',
        dark: '#1A1A1A',
        light: '#F3F6FF',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'scroll-ltr': 'scroll-ltr 40s linear infinite',
        'scroll-rtl': 'scroll-rtl 35s linear infinite',
        'zoom-effect': 'zoomEffect 20s linear infinite alternate',
      },
      keyframes: {
        'scroll-ltr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        zoomEffect: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
