import * as React from "react"
import {ArticleProps} from "@/components/templates/Article"
import Link from "next/link"

interface ArticleGridProps {
  articles: ArticleProps[]
}

// markup
export default function ArticleGrid({articles}: ArticleGridProps) {
  // console.log('articles', articles)

  return (<ol style={{listStyle: `none`}}>
    {// @ts-ignore
      articles.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (<li key={post.fields.slug}>
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <Link href={post.fields.slug} itemProp="url">
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
  </ol>)
}
