/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        nike: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F6F8FC',
        surface: '#FFFFFF',
        ink: '#121826',
        muted: '#5E697D',
        accent: '#2458FF',
        sun: '#16A46B',
        rust: '#EF5B45',
        violet: '#7C5CFF',
        nike: {
          white: '#F2F7F4',
          black: '#07100F',
          gray: '#9BB0AA',
          darkgray: '#27413D',
          volt: '#2458FF',
        }
      },
      animation: {
        'slide-up-fade': 'slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal': 'reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'marquee': 'marquee 20s linear infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
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
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
