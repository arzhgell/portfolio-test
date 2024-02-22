/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#F9E810',
        blue: '#354852',
        orange: '#FFCC93',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, -20px)' },
        },
      },
      animation: {
        'spin-slow': 'wiggle 10s linear infinite',
      },
    },
  },
  plugins: [],
};
