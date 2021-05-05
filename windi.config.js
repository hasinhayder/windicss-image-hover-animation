import formsPlugin from 'windicss/plugin/forms'
module.exports = {
  extract: {
    include: ['./**/*.html'],
  },
  darkMode:'class',
  theme: {
    extend: {
      container: {
        center: true
      },
      height:[125]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [formsPlugin]
}
