module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          350: '#EEE2DF',
          450: '#C89F9C',
          550: '#B36A5E',
          650: '#C97C5D'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
