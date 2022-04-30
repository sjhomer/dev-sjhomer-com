import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import HomepageTimeline from './HomepageTimeline'
import {Separators} from '@web/components/grids'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import Grow from '@mui/material/Grow'

export default function HomepageIntro() {
  const theme = useTheme()
  return (<>
    <Grid
      container
      sx={{mb: 2}}
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography variant="h2" component="h1" textAlign={'center'} gutterBottom>SJ Homer, Code Wizard
          🧙🏼‍️</Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{
        textAlign: 'justify',
        h1: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          lineHeight: '1.2',
          mb: 2,
          // color: 'text.primary',
        }
      }}>
        <Typography variant="h5" component="div" fontWeight={'bold'} gutterBottom>Welcome, thanks for stopping by!
          👋🏻</Typography>
        <Typography variant="subtitle1" gutterBottom marginTop={2}>
          {`It's always amazed me how the Web continues to grow. Macromeida Flash was an interesting time. 😅 And, can you recall when JavaScript used to get a bad rep during the jQuery era?`}
        </Typography>
        <Grow in timeout={1500} easing={theme.transitions.easing.easeOut}>
          <Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              marginTop={2}
              dangerouslySetInnerHTML={{__html: `Now, JS/TS have become the herald of most modern frontends and applications, with libraries like React and Vuejs, and frameworks like Gatsby and Nextjs, and the many <em>many</em> other flavours that keep appearing almost daily.`}}
            />
          </Box>
        </Grow>
        <Grow in timeout={800} easing={theme.transitions.easing.easeOut}>
          <Box>
            <Typography variant="h5" component="div" gutterBottom>
              {`I’m Homer. I've been in Web Development for almost two decades, specializing in Frontend for over half my career, and, transitioned into leading teams for the past four years.`}
            </Typography>
          </Box>
        </Grow>

      </Grid>
      <Grid item xs={12} md={7} sx={{
        width: '100%',
      }}>
        <Slide direction="left" in mountOnEnter timeout={500} easing={theme.transitions.easing.easeOut}>
          <Box>
            <HomepageTimeline/>
          </Box>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <Separators.BookSeparator/>
      </Grid>
    </Grid>
    <Grid container sx={{
      textAlign: 'justify',
    }} spacing={{
      xs: 3,
      md: 8
    }}>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
          {`Every evolving, ever changing, and ever improving. I’ve been fortunate to be immersed in the rising tide of Jamstack, having led and built three enterprise level sites and an application with Gatsby. I’ve seen how freeing and flexible novel approaches to consuming data can produce solutions in new and exciting ways.`}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
          {`Before getting ahead of where I am in my career today, how one has grown to where they are is just as important as what they’ve achieved. The challenges and struggles that I’ve overcome show why rising to the occasion and pushing beyond have kept me moving always upwards in my journey through development.`}
        </Typography>
      </Grid>
      <Grid className={'homepage-intro__separator'} item xs={12} sx={{
        pt: '2rem !important',
      }}>
        <Separators.ArrowSeparator/>
      </Grid>
    </Grid>
  </>)
}