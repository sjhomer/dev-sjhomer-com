import * as React from "react"
import {Helmet} from "react-helmet"
import {graphql, useStaticQuery} from "gatsby"

export interface metaData {
  property: string,
  content: string
}

export interface HeadProps {
  title: string
  description?: string
  lang?: string
  meta?: Array<metaData>
  image?: { url: string }
}

export default function Head({title, description, lang = 'en-CA', meta, image}: HeadProps) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  /** @type Array<metaData> */
  const metaData = [
    ...meta || [],
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.social?.twitter || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  if (image?.url) {
    metaData.push({
      property: `og:image`,
      content: image?.url,
    })
    metaData.push({
      property: `twitter:image`,
      content: image?.url,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : '%s'}
      meta={metaData}
    />
  )
}
