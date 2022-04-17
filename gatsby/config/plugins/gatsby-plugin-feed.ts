import {allMarkdownRemarkProps} from "@src/templates/Article"

interface serializeProps {
  query: {
    site: {
      siteMetadata: {
        siteUrl: string
      }
    }
    allMarkdownRemark: allMarkdownRemarkProps
  }
}

const pluginConfig = {
  resolve: `gatsby-plugin-feed`, options: {
    query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `, feeds: [{
      /**
       *
       * @param {serializeProps} props
       */
      serialize: ({query: {site, allMarkdownRemark}}: serializeProps) => {
        return allMarkdownRemark.nodes.map(node => {
          return Object.assign({}, node.frontmatter, {
            description: node.excerpt,
            date: node.frontmatter.date,
            url: site.siteMetadata.siteUrl + node.fields.slug,
            guid: site.siteMetadata.siteUrl + node.fields.slug,
            custom_elements: [{"content:encoded": node.html}],
          })
        })
      }, query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }
          `, output: "/rss.xml", title: "Gatsby Starter Blog RSS Feed",
    },],
  },
}

export default pluginConfig