/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-in-left': 'slide-in-left 0.6s ease both',
        'count-up': 'count-up 0.5s ease both',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-1.5rem)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
