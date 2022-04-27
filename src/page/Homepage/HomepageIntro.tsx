import * as React from 'react'
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import HomepageTimeline from "./HomepageTimeline"

export default function HomepageIntro() {
  return <Grid container sx={{mb: 2}} spacing={3}>
    <Grid item xs={12} md={5}>
      <Typography variant="h3" component="h1" sx={{mb: 2}}>Welcome, and thanks for stopping by!</Typography>
      <Typography variant="h5" component="div" sx={{mb: 2}}>I’m Homer. I’ve been in Web Development for almost two
        decades,
        specializing in Frontend for the past ten years, having transitioned into leading teams for over four
        years.
      </Typography>
      <Typography variant={'body1'} sx={{mb: 2}}>
        It always amazing me how the Web has continued to grow. I’ve recall when JavaScript used to get a bad rep during
        the
        jQuery era. Now it’s becoming the herald of most modern web applications and sites today, with libraries like
        React
        and Vuejs, frameworks like Gatsby and Nextjs. And many other flavours keep popping up almost daily.
      </Typography>
    </Grid>
    <Grid item xs={12} md={7}>
      <HomepageTimeline/>
    </Grid>
  </Grid>
}