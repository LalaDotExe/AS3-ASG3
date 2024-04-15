const purgecss = require('@fullhuman/postcss-purgecss')

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html']
    })
  ]
}