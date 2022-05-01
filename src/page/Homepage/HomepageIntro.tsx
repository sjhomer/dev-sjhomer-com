import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import HomepageTimeline from './HomepageTimeline'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'

export default function HomepageIntro() {
  const theme = useTheme()

  return (
    <Box className={'homepage-intro'}>
      <Grid
        container
        sx={{mb: 4}}
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography variant="h2" component="h1" textAlign={'center'} gutterBottom>SJ Homer, Code Wizard
            🧙🏼‍️</Typography>
        </Grid>
        <Grid
          item xs={12} md={5} sx={{
          textAlign: 'justify',
          h1: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            lineHeight: '1.2',
            mb: 2,
            // color: 'text.primary',
          },
          a: {
            color: 'primary.dark',
          },
        }}
        >
          <Typography variant="h5" component="div" fontWeight={'bold'} gutterBottom>Welcome, thanks for stopping by!
            👋🏻</Typography>
          <Typography
            variant="subtitle1" gutterBottom marginTop={2}
            dangerouslySetInnerHTML={{__html: `It's always amazed me how the <strong>Web continues to grow</strong>. Macromeida Flash was an interesting time. 😅 And, can you recall when JavaScript used to get a bad rep during the jQuery era? 😕`}}
          />
          <Grow in timeout={800} easing={theme.transitions.easing.easeOut}>
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                marginTop={2}
                dangerouslySetInnerHTML={{__html: `Now, JS/TS have become the herald of <strong>most modern frontends and applications</strong>, with libraries like <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://vuejs.org/" target="_blank">Vuejs</a>, and frameworks like <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> and <a href="https://nextjs.org/" target="_blank">Next.js</a>, and the many <em>many</em> other flavours that keep appearing almost daily. 😎`}}
              />
            </Box>
          </Grow>
          <Grow in timeout={1600} easing={theme.transitions.easing.easeOut}>
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                marginTop={2}
              >
                {`I dedicated this page to my journey and growth throughout my career, with the lessons and insights that have helped shape it. Peppered in are some tidbits about who I am and passions beyond development. So grab yourself a warm cuppa and let’s dive in! ☕️`}
              </Typography>
            </Box>
          </Grow>
        </Grid>
        <Grid
          item xs={12} md={7} sx={{
          width: '100%',
        }}
        >
          <Slide direction="left" in mountOnEnter timeout={500} easing={theme.transitions.easing.easeOut}>
            <Box>
              <HomepageTimeline />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  )
}