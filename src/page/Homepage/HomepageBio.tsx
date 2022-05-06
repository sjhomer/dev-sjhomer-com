import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {Separators} from '@web/components/grids'
import Box from '@mui/material/Box'
import {Tabs} from '@web/components/content'
import useHomepageBio from './useHomepageBio'
import {GatsbyImage} from '@web/components/media'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function HomepageBio() {
  const theme = useTheme()
  // Because you can't conditionally render hooks, obtain booleans and check OR after.
  const [screenSize1, screenSize2] = [
    useMediaQuery('(min-width:900px) and (max-width:1010px)'),
    useMediaQuery('(max-width:511px)'),
  ]
  const transientGridSize = screenSize1 || screenSize2

  const {
    tabs,
  } = useHomepageBio()

  return (
    <Box
      className={'homepage-bio'} sx={{
      '.gatsby-image-wrapper': {
        width: 544,
        maxWidth: '100%',
      },
    }}
    >
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
            <Grid
              item xs={12} md={6} order={{
              xs: 2,
              md: 1,
            }}
            >
              <Typography variant="h5" component="div" gutterBottom>
                {`Hi, I’m Homer. Being in Web Development for almost two decades, I’ve specialized in Frontend for over half my career, and transitioned into leading teams for the past four years.`}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                marginTop={2}
                dangerouslySetInnerHTML={{__html: `<strong>Over the past six years</strong>, I have been fully remote, working with distributed teams across the Americas, Europe, and India. 🌎 It has been a privilege to work with such a diverse group on many client projects, both large and small across many industries, leveraging a wide range of technologies.`}}
              />
              <Typography variant="body1" gutterBottom>
                {`The Web never sleeps; if you blink, you might miss the mark and be playing catch up.🙃Thankfully, I was fortunate enough to be immersed in the rising tide of Jamstack (even before it was called such), and grateful to of led the builds on three enterprise sites, and an application, with Gatsby. 💪🏻`}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {`I’ve seen how freeing and flexible tools like this allow for radical approaches to consuming data and produce solutions in new and exciting ways. With my out of the box approach to data architecting, I help guide teams to get the most out of what these systems can do. 🤘🏻`}
              </Typography>
            </Grid>
            <Grid
              item xs={12} md={6} alignSelf={'center'} textAlign={'center'} order={{
              xs: 1,
              md: 2,
            }}
            >
              <GatsbyImage src={'/assets/images/sjhomer-portrait.jpg'} alt={'Portrait of SJ Homer'} />
            </Grid>
          </Grid>
          <Grid
            container spacing={{
            xs: 3,
            md: 8,
          }}
          >
            <Grid item xs={12} md={6} alignSelf={'center'} textAlign={'center'}>
              <GatsbyImage src={'/assets/images/bio-code-view.png'} alt={'Portrait of SJ Homer'} />
            </Grid>
            <Grid
              item xs={12} md={6}
              sx={{
                '.scrolling-tabs': {
                  m: '0 auto',
                },
                i: transientGridSize ? {
                  flex: '0 0 48px',
                  my: 1,
                  mx: 1.5,
                  fontSize: 48,
                } : {
                  flex: '0 0 64px',
                  my: 1,
                  mx: 3,
                  fontSize: 64,
                },
                '.MuiTabPanel-root': {
                  alignSelf: 'center',
                  p: 1,
                },
                '.homepage-bio-tab-icons': {
                  width: '100%',
                  display: 'inline-flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: 224,
                },
              }}
            >
              <Typography variant="h5" component="h3" textAlign={'center'} gutterBottom>
                Key Technical Skills
              </Typography>
              <Tabs
                tabs={tabs}
                ariaLabel={`List of dev skills`}
                orientation={'vertical'}
                sx={{
                  borderRight: 1,
                  borderColor: 'divider',
                  width: {
                    xs: 240,
                    md: 'auto',
                  },
                  '.MuiTab-root': {
                    textTransform: 'none',
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}