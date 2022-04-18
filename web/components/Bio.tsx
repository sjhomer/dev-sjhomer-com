import * as React from "react"
import useSiteQuery from "@src/queries/useSiteQuery"
import {GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image"

export type BioProps = {
  imageData?: IGatsbyImageData
  imageAlt?: string
};

const Bio = ({imageData, imageAlt}: BioProps) => {
  const site = useSiteQuery()

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = site.siteMetadata?.author
  const social = site.siteMetadata?.social

  return (
    <div className="bio">
      {imageData && <GatsbyImage image={imageData} alt={imageAlt || ''}/>}
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
