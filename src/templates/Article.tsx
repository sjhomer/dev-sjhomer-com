import * as React from "react"
import type {PageProps} from "gatsby"
import {graphql, Link} from "gatsby"
import {Layout} from "@web/components"
import type {site} from '@src/queries'
import {ArticleByline} from "@web/components/articles"

export type ArticleProps = {
  id: string,
  excerpt: string,
  html: string,
  fields: { slug: string },
  frontmatter: {
    title: string,
    date: string,
    description: string,
    tags: string[],
  },
}

export interface allMarkdownRemarkProps {
  nodes: ArticleProps[]
}

interface ArticleTemplateProps extends PageProps {
  data: {
    site: site,
    markdownRemark: ArticleProps,
    previous: ArticleProps,
    next: ArticleProps,
  }
}

export default function Article(props: ArticleTemplateProps) {
  const {data, location} = props
  const post = data?.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const {previous, next} = data

  // console.log('Article props', props)

  return (
    <Layout title={siteTitle} {...props}>
      <>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{__html: post.html}}
            itemProp="articleBody"
          />
          <hr/>
          <footer>
            <ArticleByline/>
          </footer>
        </article>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </>
    </Layout>
  )
}
/*

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
*/
