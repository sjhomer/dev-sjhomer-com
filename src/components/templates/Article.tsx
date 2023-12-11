"use client"

import * as React from "react"
import {ArticleByline} from "@/components/web/articles"
import Link from "next/link"
import {Layout} from "@/components/web"

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

interface ArticleTemplateProps {
  data: {
    markdownRemark: ArticleProps,
    previous: ArticleProps,
    next: ArticleProps,
  }
}

export default function Article(props: ArticleTemplateProps) {
  const {data} = props
  const post = data?.markdownRemark
  const {previous, next} = data

  // console.log('Article props', props)

  return (
    <Layout {...props}>
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
                <Link href={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link href={next.fields.slug} rel="next">
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
