import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {Separators} from '@/components/web/grids'
import {CtaLinkCard} from '@/components/web/cards'
import Box from '@mui/material/Box'
import useHomepagePortfolio from './useHomepagePortfolio'

export default function HomepagePortfolio() {
  const theme = useTheme()
  const {ctas, modals} = useHomepagePortfolio()

  return (
    <Box className={'homepage-creative'}>
      <Grid container>
        <Grid
          className={'homepage-intro__separator'} item xs={12} sx={{
          pt: '3rem !important',
          mb: 5,
        }}
        >
          <Separators.AwardSeparator />
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
            {`Noteworthy Projects`}
          </Typography>
          <Typography
            variant="body1" sx={{
            textAlign: 'center',
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
            {`Case studies on projects which I led and contributed too.`}
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
        <Grid
          item xs={12} sx={{
          pt: {
            // xs: '0 !important',
            md: `${theme.spacing(8)} !important`,
          },
        }}
        >
          <Grid container spacing={4} justifyContent={'center'}>
            {ctas.map((cta, index) => (
              <Grid item xs={12} sm={6} key={`${encodeURI(cta.title as string)}-${index}-cta`} sx={{
                '.MuiCard-root': {
                  height: '100%',
                },
              }}>
                <CtaLinkCard  {...cta} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {modals}
    </Box>
  )
}
