const pluginConfig = [{
  resolve: 'gatsby-source-filesystem', options: {
    'name': 'images', 'path': './src/assets/images/'
  },
}, {
  resolve: 'gatsby-source-filesystem', options: {
    'name': 'pages', 'path': './src/pages/'
  },
}]

export default pluginConfig