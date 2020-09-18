module.exports = {
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-postcss",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`
            }
        },
        {
          resolve: 'gatsby-plugin-sass',
          options: {
              postCssPlugins: [
                  require('tailwindcss')
              ]
          }
      }
    ]
}
