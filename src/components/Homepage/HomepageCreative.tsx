import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {Separators} from '@/components/web/grids'
import {CtaLinkCard} from '@/components/web/cards'
import Box from '@mui/material/Box'
import useHomepageCreative from './useHomepageCreative'

export default function HomepageCreative() {
  const theme = useTheme()
  const {ctas, modals} = useHomepageCreative()

  return (
    <Box className={'homepage-creative'}>
      <Grid container>
        <Grid
          className={'homepage-intro__separator'} item xs={12} sx={{
          pt: '3rem !important',
          mb: 5,
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
            variant="h4" component="h2" sx={{
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
        '.MuiCardActions-root': {
          justifyContent: 'space-between',
        },
      }}
      >
        <Grid item xs={0} md={2} />
        <Grid
          item xs={12} md={8} sx={{
          pt: {
            xs: '0 !important',
            md: `${theme.spacing(8)} !important`,
          },
          '.cta-link-card': {
            maxWidth: 336,
          },
        }}
        >
          <Grid container spacing={8}>
            {ctas.map((cta) => (
              <Grid item xs={12} md={6} key={encodeURI(cta.title as string)}>
                <CtaLinkCard  {...cta} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={0} md={2} />
      </Grid>
      {modals}
      <Grid container>
        <Grid
          className={'homepage-intro__separator'} item xs={12} sx={{
          pt: '4rem !important',
          mb: 2,
        }}
        >
          <Separators.SchoolSeparator />
        </Grid>
      </Grid>
    </Box>
  )
}
