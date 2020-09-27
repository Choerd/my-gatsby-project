module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg`
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          'components': './components',
          'stylesheet': './components/stylesheet',
          'images': './assets/images',
          'svg': './assets/svg',
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
