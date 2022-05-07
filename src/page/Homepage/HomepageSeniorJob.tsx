import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {List, Separators} from '@web/components/grids'
import Grid from '@mui/material/Grid'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'

export default function HomepageSeniorJob() {
  let techAndSkill = [
    {
      label: 'Tech',
      caption: 'JS, CoffeeScript, NodeJs, MongoDB, Drupal, PHP, Twig, Sass, Material UI, React, Gatsby, Shell Scripting/CLIs',
      icon: <ImportantDevicesTwoToneIcon />,
    },
    {
      label: 'Skills & Services',
      caption: 'Agile Project Management, Product Strategy, UX, Technical Strategy, Technical Architecture, Mentorship, Development Lead, DevOps, Pantheon, Platform.sh, Gatsby Cloud, Netlify, ASW Amplify, Jenkins, Bitbucket w/Pipelines, Github w/Actions',
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
          Honing my Craft and Leading
        </Typography>
        <Grid container marginBottom={2} spacing={{xs: 1, md: 8}}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              {`In my recent firm of over 7 years, I solidified my skills in Frontend and the shifting ecosystem, cozied up with Agile project management, and elevated into the Frontend Lead. From my nature to learn from mistakes, it helped me grow into a position where I’m adamantly committed to elevating and protecting the development team, so they can always strive to give their best.`}
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
          {`The early days of NPM were not for the faint of heart. While, arguably, it can be a source of frustration from time to time even today, newer developers won’t appreciate the monumental advancements and stability the ecosystem has evolved too. And while decoupled solutions may be the norm now as well, these solutions were still up and coming a decade ago.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Being Senior Development then, I took these challenges head on when jumping into things are full speed at my new agency. I found my stride on my first decoupled project supporting an ecommerce ticket purchasing system. We were leveraging Angular JS on the front and a NodeJs/MongoDB backend, while integrating to a custom REST API which the client team was developing to manged accounts and order data. We tied this finally into Stripe for payment handling. Phew! It was a giant leap forward from my former development. Also, moving from “take your time” cart based ecomm to expiring carts with finite quantities without back-orders… it was quite a mountain to conquer. But of course, we prevailed in the end.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Blessed with an incredibly talented and patient mentor who was a DevOps wizard, he helped me to improve, and to respect the importance of foundational data architecture. Knowing all the data points, how each layer and endpoints of the system communicate and validate that data so things run smoothly was immensely enlightening. Without a CMS monolithic structure, we could do things with more dynamic data layering, and every piece of the pie could do something unique to support the overall solution.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Following the project launch, the next would give us a spin on the fringes of the earlier days of static site frameworks. We had a project which began blending an early era static site generator to support a series of sites with a shared theme leveraging DocPad based in CoffeeScript/NodeJs, while connecting to a Drupal CMS backend. As their content didn't change that often, only at set intervals, coupled with their concerns from previous experiences with CMSs being flaky at keeping their sites online, a static generated site was ideal. With the team having a strong background in Drupal, foreign to me then, I realized it really stood out with its integrations for this solution in the CMS space, even to this day.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`CoffeeScript, well, that was a wild ride for sure. With its harsh opinionated syntax enforced, coupled with its complicated templating of DocPad, but hey, at least we have arrow functions in JS now! Leveraging a NodeJs server as a middleman to connect to Drupal, it fed data to DocPad and, through our data architecture, dynamically generate components. We were doing headless CMS here before it was common practice, and this too was before “componentize all the things” became the norm, so, it took some real magic to get the stars to align around these technologies. And just like modern static site frameworks, unsurprisingly, build times and hiccups needed to be surpassed to find a reasonably happy path. The sites could generate and build their specific content and themes, deploy to separate servers, all while utilizing shared components and assets across the sub-brands allowed for a more maintainable solution.`}
        </Typography>
        <Typography variant="h5" component="h3" textAlign={'left'} gutterBottom>
          Durpalizing the Componentizing
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Between the former project and those that came next, I was extremely fortunate to have a couple months of R&D focused research. It was the dawn of the Web Component spec, and components were becoming more and more the norm as a way of development for more reusable frontend elements. I was exploring NodeJs tooling and how to generate components of different base types, naming and file structure, as well as assisting in how our DevOps could consider leveraging Docker (up and coming at the time) into a new ecosystem for building our websites.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`As things progressed with later projects, I moved into the more traditional Drupal theming space, and pushed the boundaries into what it could do in the vein of componentization. Studying designs and similarities from page to page, I recognized if things were just data, many UI elements are just the same component with unique styling or variations. It wasn't too long before I helped define and build, with a talented partner, an internal component system for Drupal. It’s stood the test of time as its still being using successfully today. Based on PatternLab and Atomic Design, it was born from Main Spring and an earlier iteration of Emulsify. We put own spin and standards to streamline what worked best for our team, added tooling, and a micro JS framework to pair component behaviours alongside Drupal with ease.`}
        </Typography>
        <Typography variant="h5" component="h3" textAlign={'left'} gutterBottom>
          Stepping up to the TA Plate
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`As things progressed, my aptitude for architecting and senses in breaking down components and aspects of good product design or UX continued to expand. It was natural I transitioned then to a Technical Architect role. Supporting developers while still primarily developing myself, I moving again to manage code reviews, helping define and flush out data and component architecture, and distilling these into technical tasks for the team beyond user stories.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`From this, I became involved once more in project planning and estimations from the RFP stage, albeit at a higher level than at my former firm. It was now my responsibility to formulate to the best of my ability with what research and known variable options were available, forming an ideal approach for solutions. I had to know the scope of all the technical aspects and risks to help flesh out those elements for the bid. Advancing to this role, I became more prominent with clients. Helping deliver and clarify technical proposals, I had to instill confidence in our understanding of their problems we’d planned to solve.`}
        </Typography>
        <Typography variant="h5" component="h3" textAlign={'left'} gutterBottom>
          The Shifting Frontend Landscape
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Before long, we would once again took a step forward in the JS space with newer approaches to websites. Through my continued expanding expertises in JS, it allowed me to advance to my role as the Frontend Development Lead. In this role, I would take on the responsibility to help guide, lead, and mentor the frontend efforts across the company.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Frontend had began to encompass so many elements. Long gone were the days of just using a bit of HTML, CSS, and JS on pages. Now we had Frontend UI components to design and craft, UX and State management flows to plan and implement, “Backend” Frontend through Integration or serverless to support interactions with APIs and resiliency, and Frontend DevOps with the growing complexity of CI/CD services and tools. The field has expanded incredibly in recent years, and still has no signs of slowing down.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`As we moved into headless Jamstack space, we settled on the pair of Gatsby and React as our primary frameworks, with their possibilities of data from any source being astounding. From my exploration, however, I was admittedly considering we’d move towards Vuejs 2.x, with its separation of concerns that I felt React lacked at the time… until React 16.8 dropped, that is! With its functional components, hook architecture, and component level state (for when you shouldn’t be using heavier libraries), it was a game changer. It helped point us into a direction that the broader community has continued to embrace around React’s success and growth, and it was soon clear that we made the right choice.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`It was kind of funny too, that while JS classes improvements in ES2015 release were a huge step forward (no more ‘this’ madness), they lacked a finesse that frontend components required to be maintainable and reusable patterns. That, coupled with the lacking potential of easily component level shared state, which React’s release ushered in.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`With a new and shine static site generator tool like Gatsby, old became new again, which reinvigorated the essence of why static sites were a critical concept that needed a comeback. Our first enterprise Gatsby site launched just before the pandemic, and proved the right choice. While our client’s competitors sites got hammered and run down from SSR traffic, out right breaking some of their services, our clients site was online and running without a blip. That’s the beauty of these solutions, having at most a degradation of isolated services should issues occur when you build smartly in Jamstack. It gives end users a peace of mind while doing most of their needed operations practically always.`}
        </Typography>
        <Typography variant="h5" component="h3" textAlign={'left'} gutterBottom>
          Leading a Team Successfully
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Continuing to respect the efforts in leading, I learned it takes more than assigning tickets or reviewing Pull Requests to mentor and inspire team members. Often project timelines and budget are limited, and while we always strive to do our very best, we also don’t have the luxury to take our time and build whatever we desire. Finding the balance of simplicity and maintainability instead is what I strive to lead the team towards, through constructive feedback and compassion so they know they’re safe to learn from their mistakes. I’m just a part of their journey through the field, and do everything within my power to guard them so they can stay focused and be productive. And of course, learning to challenging them so they can move deeper into the areas that interest them.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`A key lesson I’ve learned about fostering good developers is that they should not need to know everything. The better they can unpack knowledge and jump back into library/frameworks API docs when they need to use again, means they can always solve problems without a lead looking over their shoulder. I urge my team to keep a site like DevDocs pinned at all times to look up how to reuse methods and refresh core concepts as a healthy practice. And, not only to they write better code for it, they continue learning about extra flags/options or other tidbits they may have missed previously when they review it. This helps them to keep expanding their knowledge and improve. It’s truly a marvelous thing.`}
        </Typography>
      </Box>
      <Separators.FinishSeparator />
    </>
  )
}