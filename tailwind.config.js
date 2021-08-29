module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        '404-background': "url('~/static/404.jpg')",
      }),

      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
