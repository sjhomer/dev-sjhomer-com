const pluginConfig = [{
  resolve: 'gatsby-source-filesystem', options: {
    "name": "images", "path": "./src/assets/images/"
  },
}, {
  resolve: 'gatsby-source-filesystem', options: {
    "name": "pages", "path": "./src/pages/"
  },
}, {
  resolve: `gatsby-source-filesystem`, options: {
    path: `./content/articles`, name: `blog`,
  },
}]

export default pluginConfig