import * as React from "react"
import {Image} from "../media"
import {siteMetadata} from "@/config"

const ArticleByline = () => {
  const author = siteMetadata.author
  const social = siteMetadata.social

  return (
    <div className="bio">
      <Image
        src={"/assets/images/logo-sjhomer-code-wizard-medium.png"}
        alt={"SJHomer Code Wizard"}
      />
      <p>
        Written by <strong>{author.name}</strong> {author.summary || null}
        {` `}
        <a href={`https://twitter.com/${social.twitter || ``}`}>
          You should follow them on Twitter
        </a>
      </p>
    </div>
  )
}

export default ArticleByline
