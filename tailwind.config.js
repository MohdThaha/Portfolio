/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        nike: ['Oswald', 'sans-serif'], // Uppercase impact font
      },
      colors: {
        background: '#050505',
        surface: '#111111',
        nike: {
          white: '#F5F5F5',
          black: '#0A0A0A',
          gray: '#E5E5E5',
          darkgray: '#333333',
          volt: '#D1FF27', // The classic Nike Volt Green accent
        }
      },
      animation: {
        'slide-up-fade': 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal': 'reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        slideUpFade: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}