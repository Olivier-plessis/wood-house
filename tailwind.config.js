/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          dark: '#8B4513',
          medium: '#DEB887',
          light: '#F5DEB3',
        },
        leaf: {
          dark: '#2F4F4F',
          medium: '#556B2F',
          light: '#8FBC8F',
        }
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'solar-panel': 'solar-panel 6s ease-in-out infinite',
        'wind-turbine': 'wind-turbine 5s linear infinite',
      },
      keyframes: {
        'solar-panel': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'wind-turbine': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    }
  },
  variants: {},
  plugins: []
}
