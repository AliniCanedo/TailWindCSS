const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.html'
    ],
    defaultExtractor: content => content.match(/[w-/:]+(?<!:)/g) || []
})

// postcss.config.js
module.exports = {
    plugins: [
        require('tailwindcss'),
        purgecss,
        require('cssnano'),
        require('autoprefixer')
    ]
}