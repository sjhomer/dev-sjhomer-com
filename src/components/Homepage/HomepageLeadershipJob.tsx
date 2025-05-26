import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {List, Separators} from '@/components/web/grids'
import Grid from '@mui/material/Grid'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'

export default function HomepageLeadershipJob() {
  let techAndSkill = [
    {
      label: 'Tech',
      caption: 'TypeScript, React, NodeJs, MongoDB, Tailwind, Shadcn, Shell Scripting/CLIs, Cursor',
      icon: <ImportantDevicesTwoToneIcon />,
    },
    {
      label: 'Skills & Services',
      caption: 'Agile Project Management, Product Strategy, UX, Technical Strategy, Technical Architecture, Mentorship, Development Lead, DevOps, ASW Services, Jenkins, Github w/Actions',
      icon: <MilitaryTechTwoToneIcon />,
    },
  ]

  return (
    <>
      <Box
        // data-sal="slide-up"
        // data-sal-duration="1000" //// changes duration of the animation (from 200 to 2000 ms)
        // data-sal-delay="10" // adds delay to the animation (from 5 to 1000 ms)
        // data-sal-easing="easeOut" // sets easing for the animation (see easings.net for reference)
        sx={{
          my: 4,
          textAlign: 'justify',
          mx: 'auto',
          maxWidth: {
            md: '80%',
          },
        }}
      >
        <Typography variant="h4" component="h2" textAlign={'left'} gutterBottom>
          Battlefy: Making the Touch Calls
        </Typography>
        <Grid container marginBottom={2} spacing={{xs: 1, md: 8}}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              {`Enter a position posed as having to 'drink from the firehose' is one way to know and expect a level of chaos walking into it. Trying to make sense of the amount of knowledge and lacking processes, like sailing on the rough seas is what owning leadership it all about, and this position has certainly tested my mettle.`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <List items={techAndSkill} />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h3" textAlign={'left'} gutterBottom>
          Node, the Crazy but Fun Wild West
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`In my recent firm of over 7 years, I solidified my skills in Frontend and the shifting ecosystem, cozied up with Agile project management, and elevated into the Frontend Lead. From my nature to learn from mistakes, it helped me grow into a position where I’m adamantly committed to elevating and protecting the development team, so they can always strive to give their best.`}
        </Typography>
      </Box>
      <Separators.FinishSeparator />
    </>
  )
}
