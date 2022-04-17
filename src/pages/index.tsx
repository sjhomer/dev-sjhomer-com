import * as React from "react"
import {graphql, PageProps} from "gatsby"
import {Link} from "gatsby-theme-material-ui"
import {Layout} from "@web/components/layout"

// markup
export default function IndexPage({data, location}: PageProps) {
  // @ts-ignore
  const posts = data?.allMarkdownRemark?.nodes || []

  console.log('posts', posts)

  return (<Layout title={"Home"}>
    <>
      <h1>
        Congratulations
        <br/>
        <span>— you just made a Gatsby site! </span>
        🎉🎉🎉
      </h1>
      <p>
        Edit <code>src/pages/index.tsx</code> to see this page
        update in real-time. 😎
      </p>
      <ol style={{listStyle: `none`}}>
        {// @ts-ignore
          posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (<li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>)
          })}
      </ol>
    </>
  </Layout>)
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
