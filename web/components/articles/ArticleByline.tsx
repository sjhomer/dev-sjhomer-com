import * as React from 'react'
import useSiteQuery from '@src/queries/useSiteQuery'
import {GatsbyImage} from '../media'

const ArticleByline = () => {
  const site = useSiteQuery()

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = site.siteMetadata?.author
  const social = site.siteMetadata?.social

  return (
    <div className="bio">
      <GatsbyImage src={'/images/logo-sjhomer-code-wizard-medium.png'} alt={'SJHomer Code Wizard'} />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default ArticleByline
