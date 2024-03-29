import * as React from "react"
import {Helmet} from "react-helmet"
import {siteMetadata} from "@/config"

export interface metaData {
  property: string,
  content: string
}

export interface HeadProps {
  title: string
  description?: string
  lang?: string
  meta?: metaData[]
  image?: { url: string }
}

export default function Head({title, description, lang = 'en-CA', meta, image}: HeadProps) {
  const metaDescription = description || siteMetadata.description
  const defaultTitle = siteMetadata?.title

  /** @type metaData[] */
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
      content: siteMetadata?.social?.twitter || ``,
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
