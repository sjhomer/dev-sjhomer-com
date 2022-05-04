import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {List, Separators} from '@web/components/grids'
import Grid from '@mui/material/Grid'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'

export default function HomepageEntryJob() {
  let techAndSkill = [
    {
      label: 'Tech',
      caption: 'PHP, MySQL, ERP, JS, ASP, ASP.Net, Magento',
      icon: <ImportantDevicesTwoToneIcon />,
    },
    {
      label: 'Skills & Services',
      caption: 'Quality Assurance, Customer Support, Google Analytics',
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
          maxWidth: '80%',
        }}
      >
        <Typography variant="h4" component="h3" gutterBottom>
          Learning the Ropes
        </Typography>
        <Grid container marginBottom={2} spacing={{xs: 1, md: 8}}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              {`I was fortunate to land my first position straight out of college at a fascinating product company in the gaming space, where I started, as many developers may, in QA. From this role, I got to learn how to break things, why things break, to understanding the reasons they get built a certain way to begin with, and the results of not building for resilience.`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <List items={techAndSkill} />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h4" gutterBottom>
          Putting some Notches on the Training Belt
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Eager to learn and start leveraging my tapping into development skills, they onboarded me to aid in developing a back office ERP system with PHP/MySQL. It gave me the opportunity to learn the ins and outs of inventory management and supply chain.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`There they came the opportunity to step into my first official Frontend development role in managing the company’s main website, marketing campaigns, emailers, and even some light ecommerce, all using ASP, and no, not the .Net framework, and even some Flash. Wild and crazy times when you’ve been in the field as long as I have. These were still valuable and prominent tools, and learning to develop good coding standards is never wasted.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Parallel to these efforts, as I advanced in my role, I had the opportunity as well to support some Windows Application development in ASP.Net, helping to build a modern installer suite.`}
        </Typography>
        <Typography variant="h5" component="h4" gutterBottom>
          Changing things up
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`The websites served their needs until through a merger with a parent company; we shifted gears and transition into the Magento framework, and I could move back into PHP development.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`As mergers can go, however, not everything lands well for the smaller fish some times. As differences and struggles arose, preventing me from doing my best work, I sensed the need for a change. A door into a web agency opened up, and I continued my journey onward.`}
        </Typography>
      </Box>
      <Separators.HikingSeparator />
    </>
  )
}