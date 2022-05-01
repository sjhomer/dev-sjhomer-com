import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {Separators} from '@web/components/grids'
import {CtaLinkCard} from '@web/components/cards'
import siteConfig from '@src/config'
import Box from '@mui/material/Box'

export default function HomepageIntro() {
  const theme = useTheme()
  return (
    <Box className={'homepage-creative'}>
      <Grid container>
        <Grid
          className={'homepage-intro__separator'} item xs={12} sx={{
          pt: '3rem !important',
          mb: 3,
        }}
        >
          <Separators.AudioSeparator />
        </Grid>
      </Grid>
      <Grid
        container sx={{
        textAlign: 'justify',
        mb: 4,
      }} spacing={{
        xs: 3,
        md: 8,
      }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h5" component="h2" sx={{
            textAlign: 'center',
            mb: 2,
          }}
          >
            {`Creative Projects outside of Development`}
          </Typography>
          <Typography
            variant="body1" sx={{
            // textAlign: 'center',
            pt: 1,
            pb: {
              xs: 3,
              md: 5,
            },
            mx: 'auto',
            maxWidth: '100%',
            width: 675,
          }}
          >
            {`Every team member I’ve encountered has many passions away from development, and I’m no exception. Writing, music, singing, voice acting, to name a few, and through these, sometimes magic happens and creative projects are born. Check out some of my recent successes below.`}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={'homepage-creative__cards'} container spacing={10} sx={{
        '.MuiCard-root': {
          mx: 'auto',
        },
      }}
      >
        <Grid item xs={0} md={2} />
        <Grid
          item xs={12} md={4} sx={{
          pt: {
            xs: '0 !important',
            md: `${theme.spacing(8)} !important`,
          },
        }}
        >
          <CtaLinkCard
            description={'A leadership and personal development mastermind I co-founded and lead form 2017-2021, with over a years worth recorded in a talk show.'}
            imageData={{
              src: '/assets/images/evergrowth-mastermind-logo.png',
              alt: 'Homer On Olympus logo',
            }}
            links={[
              {
                label: 'Have a Listen',
                href: siteConfig.links.evergrowthMastermind,
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CtaLinkCard
            description={'An fun audio drama which I wrote, performed, and produced over the course of 2021, voicing a total of 9 unique characters across 23 episodes.'}
            imageData={{
              src: '/assets/images/homer-on-olympus-logo.png',
              alt: 'Homer On Olympus logo',
            }}
            links={[
              {
                label: 'Have a Listen',
                href: siteConfig.links.homerOnOlympus,
              },
            ]}
          />
        </Grid>
        <Grid item xs={0} md={2} />
      </Grid>
    </Box>
  )
}