import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {Separators} from '@web/components/grids'
import Box from '@mui/material/Box'
import {ScrollingTabs} from '@web/components/content'
import useHomepageBio from './useHomepageBio'

export default function HomepageBio() {
  const theme = useTheme()

  const {
    tabs,
    portrait,
  } = useHomepageBio()

  return (
    <Box className={'homepage-bio'}>
      <Grid
        container sx={{
        mb: 4,
      }}
      >
        <Grid item xs={12} sx={{mb: 2}}>
          <Separators.PortraitSeparator />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container sx={{
            textAlign: 'justify',
            mb: 4,
          }} spacing={{
            xs: 3,
            md: 8,
          }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="div" gutterBottom>
                {`Hi, I’m Homer. Being in Web Development for almost two decades, I’ve specialized in Frontend for over half my career, and transitioned into leading teams for the past four years.`}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                marginTop={2}
                dangerouslySetInnerHTML={{__html: `<strong>Over the past six years</strong>, I have been fully remote, working with distributed teams across Canada, Europe, and India. 🌎 It has been a privilege to work with such a diverse group on many client projects, both large and small across many industries, leveraging a wide range of technologies.`}}
              />
              <Typography variant="body1" gutterBottom>
                {`While I've mastered JS, the Web never sleeps; if you blink, you might miss the mark and be playing catch up. Thankfully, I was fortunate enough to be immersed in the rising tide of Jamstack (even before it was called such), and having recently led the builds of three enterprise sites, and an application, with Gatsby.`}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {`I’ve seen how freeing and flexible tools like this allow for radical approaches to consuming data and produce solutions in new and exciting ways. With my out of the box approach to data architecting, I help guide teams to get the most out of what these systems can do.`}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} alignSelf={'center'}>
              {portrait}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" component="h3" gutterBottom>
                Key Development Skills
              </Typography>
            </Grid>
            <Grid
              item xs={12} sx={{
              i: {
                flex: '0 0 64px',
                m: `0 22px ${theme.spacing(3)}`,
                fontSize: 64,
              },
              '.homepage-bio-tab-icons': {
                width: '100%',
                display: 'inline-flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
            }}
            >
              <ScrollingTabs ariaLabel={`List of dev skills`} tabs={tabs} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3" gutterBottom>
                Career Journey
              </Typography>
              <Typography variant="body1">
                {`Before getting ahead of where I am in my career today, how one has grown to where they are is just as important as what they’ve achieved. The challenges and struggles that I’ve overcome show why rising to the occasion and pushing beyond have kept me moving always upwards in my journey through development.`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}