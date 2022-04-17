const pluginConfig = {
  resolve: `gatsby-transformer-remark`, options:
    {
      plugins: [{
        resolve: `gatsby-remark-images`, options: {
          maxWidth: 630,
        },
      }, {
        resolve: `gatsby-remark-responsive-iframe`, options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      },
        `gatsby-remark-prismjs`,
        `gatsby-remark-copy-linked-files`,
        `gatsby-remark-smartypants`,
      ],
    },
}

export default pluginConfig