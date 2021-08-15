module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'primary': '#A2E3C4',
      'secondary': '#7E8D85',
      'tertiory' : '#3C493F',
      'white': '#F0F7F4'
      }),
      textColor:{
        'primary': '#3C493F',
        'secondary': '#7E8D85',
        'tertiory' : '#3C493F',
        'white': '#F0F7F4'
      },

      fontFamily:{
        'andadaPro': ['"Andada Pro"']
      }
    },
    extend: {
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
