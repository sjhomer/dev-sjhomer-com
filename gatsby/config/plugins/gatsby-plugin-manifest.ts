const pluginConfig = {
  resolve: `gatsby-plugin-manifest`, options: {
    name: `SJ Homer - Code Wizard`,
    short_name: `DevSjHomer`,
    start_url: `/`,
    background_color: '#D9E1F1', // This will impact how browsers show your PWA/website
    // https://css-tricks.com/meta-theme-color-and-trickery/
    // theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/assets/images/favicon-sjhomer-code-wizard.png`, // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  },
}

export default pluginConfig