module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
		"gatsby-plugin-sass",
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
