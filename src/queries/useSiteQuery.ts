import {graphql, useStaticQuery} from "gatsby"

export type site = {
  siteMetadata: {
    title: string
    description: string
    social: {
      twitter: string
    }
    author: {
      name: string
      summary: string
    }
  }
}

/**
 * @return {site}
 */
export default function useSiteQuery() {
  const {
    /** @type {site} */
    site
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
            social {
              twitter
            }
          }
        }
      }
    `
  )

  return site
}