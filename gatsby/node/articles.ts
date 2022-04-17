const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

/**
 * @typedef {import('@src/templates/Article').ArticleProps} ArticleProps
 */

// @ts-ignore
const createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  // Define a template for blog post
  const template = path.resolve(`./src/templates/Article.tsx`)

  // Get all markdown blog nodes sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  /** @type {ArticleProps[]} */
  const nodes = result.data.allMarkdownRemark.nodes

  // Create blog nodes pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (nodes.length > 0) {
    // @ts-ignore
    nodes.forEach((post, index) => {
      const previousPostId = index === 0 ? null : nodes[index - 1].id
      const nextPostId = index === nodes.length - 1 ? null : nodes[index + 1].id

      createPage({
        path: post.fields.slug,
        component: template,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

// @ts-ignore
const createNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// @ts-ignore
const createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also, explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

export {
  createPages,
  createNode,
  createSchemaCustomization,
}