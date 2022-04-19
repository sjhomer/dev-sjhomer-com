import * as React from "react"
import {graphql, PageProps} from "gatsby"
import {Layout} from "@web/components/layout"
import {ArticleGrid} from "@web/components/articles"
import {Grid} from "@mui/material"
import {Logo} from "@web/components/media"
import Typography from '@mui/material/Typography'
import {Timeline, TimelineData} from "@web/components/grids"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import PhonelinkIcon from '@mui/icons-material/Phonelink'

// markup
export default function IndexPage({data, location}: PageProps) {
  // @ts-ignore
  const posts = data?.allMarkdownRemark?.nodes || []

  /** @type {TimelineData[]} */
  const timelineData = [{
    supporting: 'June 2022',
    title: 'Seeking new opportunities',
    caption: 'Frontend Development Lead',
    icon: {
      icon: <EmojiEventsIcon/>
    },
    iconColor: "secondary"
  },
    {
      supporting: 'Abc',
      title: 'Timeline',
      caption: 'This rocks!',
      icon: {
        icon: <DeveloperBoardIcon/>
      },
    },
    {
      supporting: 'Abc',
      title: 'Timeline',
      caption: 'This rocks!',
      icon: {
        icon: <PhonelinkIcon/>
      },
    }
  ]

  // console.log('posts', posts)

  return (<Layout title={"Home"}>
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} md={'auto'}>
          <Logo/>
        </Grid>
        <Grid item xs={12} md={9} flexGrow={1} sx={{
          h1: {
            fontSize: {
              md: '3rem'
            }, mt: {
              md: 2,
            }, // fontWeight: 'bold',
            // marginBottom: '1rem',
          }
        }}>
          <Typography variant="h1" gutterBottom>
            Welcome, and thanks for stopping by!
          </Typography>
          <Timeline data={timelineData}/>
          <Typography variant="h2"></Typography>
        </Grid>
      </Grid>
      <ArticleGrid articles={posts}/>
    </>
  </Layout>)
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
