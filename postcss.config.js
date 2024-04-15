const purgecss = require('@fullhuman/postcss-purgecss')

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "@fullhuman/postcss-purgecss": {
      content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
}
