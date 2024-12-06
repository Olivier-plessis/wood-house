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
      }
    },
  },
  plugins: [],
}
