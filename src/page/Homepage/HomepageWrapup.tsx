import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function HomepageWrapup() {
  return (
    <>
      <Box
        data-sal="slide-up"
        data-sal-duration="1000" //// changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="10" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="easeOut" // sets easing for the animation (see easings.net for reference)
        sx={{
          my: 4,
          textAlign: 'justify',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          That’s a wrap, for now.
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`If you made it this far, I’m eternally grateful, and hope my path had some insights worthwhile. I could talk endlessly about topics around development from my journey, and where I hope to keep moving in the future, but everything must come to an end. So until next time, cheers!`}
        </Typography>
      </Box>
    </>
  )
}