import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import useSiteQuery from "@src/queries/useSiteQuery"

const Bio = () => {
  const site = useSiteQuery()

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = site.siteMetadata?.author
  const social = site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="/images/logo-sjhomer-code-wizard-medium.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
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

export default Bio
