module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [
                    require('tailwindcss')
                ]
            }
        },
        "gatsby-plugin-postcss",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`
            }
        }
    ]
}
