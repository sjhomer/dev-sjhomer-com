import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {Separators} from '@web/components/grids'
import Grid from '@mui/material/Grid'

export default function HomepageCollege() {
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
          mx: 'auto',
          maxWidth: '80%',
        }}
      >
        <Grid container sx={{mb: 5}}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h2" gutterBottom>
              Career Journey
            </Typography>
            <Typography variant="body1">
              {`How one has grown to where they are is just as important as what they’ve achieved. The challenges and struggles that I’ve overcome show why rising to the occasion and pushing beyond have kept me moving always upwards in my journey through development.`}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h4" component="h2" gutterBottom>
          How Post-secondary Changed Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`My time at college was a rewarding experience as it helped prepare me for my future as a self-driven learner, and respecting the consequences of failure.`}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          What you’re not Taught, is the Lesson
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`My first lesson at college came early from the disconnect from what the curriculum offers, verse what the world is evolving to use. In a field like web development, which changes on a dime, I got confused and questioned why some courses I was studying were with legacy languages. While I wholeheartedly believe understanding where modern languages come from, it shouldn’t be at the expense of essential modern learning. PHP was beginning its meteoric rise in the web space, and we were being forced to learn Perl, and other similar learnings away from where the web was moving to.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`I began to realize that in the real world, no one is ever going to force you to learn what you knew you needed to know. You just have to teach yourself. That might seem cynical, but it’s quite the opposite, actually. I decided learning PHP was going to help place me in the field, so I took what teachings I could from my courses and apply it to the new tools myself. By the time I’d finished post-secondary, PHP had yet to be included in any of the course offerings. Yet, I had already built my graduation project in it, had a decent competency of it, and this helped me excel in the workplace.`}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          A Pivotal Lesson in Failure
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`My biggest lesson during college, however, wasn’t that I should teach myself things, and it was a lesson borne from my biggest failure. Thinking I could finish and enter the workforce earlier going into my program nonstop, I did semesters back to back to back with no breaks. Classes went well my first three semesters until I failed out of my forth when the pressure caught up to me. Almost being put on academic probation, I pleading a strong case that I could prove I’d do better, if given a second chance. They accepted, and I immediately began a new semester and aced all my classes! Afterwards, I finally took a break before continuing again at a reasonable pace through till graduation.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Had I not put myself through doing too much and failing, I may never of realized the resolve I can summon and foster. The experience helped transformed my view of what it meant to be and act professionally, and I attribute this event to my dedication to endeavor to perform my best. It also allows me to recognize that when others may make a mistake, even a substantial one, they can be the very best chances to learn and grow from.`}
        </Typography>
      </Box>
      <Separators.ForestSeparator />
    </>
  )
}