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
      caption: 'JS, CoffeeScript, NodeJs, MongoDB, Drupal, PHP, Sass, Material UI, React, Gatsby, Shell Scripting/CLIs',
      icon: <ImportantDevicesTwoToneIcon />,
    },
    {
      label: 'Skills & Services',
      caption: 'Agile Project Management, Pantheon, Platform.sh, Netlify, ASW Amplify, Jenkins, Bitbucket w/Pipelines, Github w/Actions',
      icon: <MilitaryTechTwoToneIcon />,
    },
  ]

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
          Honing my Craft and Leading
        </Typography>
        <Grid container marginBottom={2} spacing={{xs: 1, md: 8}}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              {`In my recent firm of over 7 years, I solidified my skills in Frontend and the shifting JS ecosystem, cozied up with Agile project management, and elevated into the Frontend Lead.`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <List items={techAndSkill} />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h3" gutterBottom>
          Node, the Crazy but Fun Wild West
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`The early days of NPM were not for the faint of heart. While, arguably, it can be a source of frustration from time to time today, many newer developers don’t appreciate the monumental advancements and stability the ecosystem has evolved too. And decoupled solutions may be the norm today, yet these solutions were still up and coming a decade ago.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Being Senior Development now, I took these challenges head on when jumping into things are full speed at my new agency. Eventually I found my stride on my first decoupled project supporting an ecommerce ticket purchasing system. We were leveraging Angular JS on the front and a NodeJs/MongoDB backend, integrating to a custom REST API which the client team was developing to manged accounts and order data, while finally tying in Stripe for payment handling. Phew! It was a giant leap forward from my PHP work. Moving from “take your time” cart based ecomm to expiring carts with finite quantities without back-orders, was quite a mountain to conquer. But of course, we prevailed in the end.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Blessed with an incredibly talented and patient mentor who was a DevOps wizard, he helped me to improve and respect the importance of foundational data architecture. Knowing all the data points, how each layer and endpoint of the system communicates and validates that data so things can run smoothly was immensely enlightening. Without a CMS monolithic structure, we could do things with more dynamic data layering, and every piece of the pie could do something unique to support the overall solution.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Following launching the project, the next would give us a spin on the fringes of the earlier days of Node frameworks. We had a project which began blending an early era static site generator to support a series of sites with a shared theme leveraging DocPad based in CoffeeScript/NodeJs, while connecting to a Drupal CMS backend. The aim was that content didn’t change that often, but at determined set intervals, and they had some concerns from previous experiences with CMSs being flakey at keeping their sites online. The team having a strong background in Drupal, foreign to me then, I realized really stood out with its integrations for this solution.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`CoffeeScript, well, that was a wild ride for sure! With its harsh opinionated syntax enforced, coupled with the complicated templating of DocPad, but hey at least we have arrow functions in JS now. We leveraged NodeJs to connect to Drupal, which fed data to DocPad and, through the data architecture, would dynamically generate components. Like the decoupled solution prior, we were doing headless CMS here before it was common practice. This too was before “componentize all the things” became the norm, so, it took some real magic to get the stars to align around these technologies. And just like modern static site builders, unsurprisingly build times and hiccups needed to be surpassed, finding a reasonably happy path. T sites could generate and build their specific content and themes, while shared components and assets across the sub-brands allowed for a more maintainable solution.`}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Durpalizing the Componentizing
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Between the former project and those that came next, I was extremely fortunate to have a couple months of R&D focused research. It was the advent of the Web Component spec, and components were becoming more and more the norm as a way of development for more reusable frontend elements. Looking into tooling and how to generate components of different base types, naming and structure, as well as assisting some in how DevOps wise where we considered leverage Docker (up and coming at the time) into a new ecosystem for building our websites.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`As things progressed with later projects, I moved into the more traditional Drupal theming space, and pushed the boundaries into what it could do in the vein of componentization. Studying designs and similarities from pages to page, I recognized if things were just data, many UI elements are just the same component with unique styling or variations. It wasn’t too long before I helped define and build, with a talented partner, an internal component system for Drupal. It’s stood the test of time as its still being using successfully. Based on PatternLab and Atomic Design, it was born from Main Spring and an earlier iteration of Emulsify. We put own spin and standards to streamline what worked best for our team, added tooling, and a micro JS framework to pair component behaviours alongside Drupal.`}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Stepping up to the TA Plate
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`As things progressed, my aptitude for architecting and senses in breaking down components, aspects of good product design and UX, it was natural I transitioned into a Technical Architect role. Supporting developers while still primarily developing myself, I moving again to manage code reviews, helping define and flush out data and component architecture, and distilling these into technical tasks for the team beyond user stories.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`From this, I became involved once more in project planning and estimations from the RFP stage, albeit at a higher level than at my former firm. It was now my responsibility to formulate to the best of my ability with that research and known variables options and an ideal approach for solutions. At a high level, I had to know the scope of all the technical aspects and risks to help flesh out those elements for the bid. Advancing to this role, I became more prominent with clients. Helping deliver and clarify the technical proposals, I had to instil confidence in our understanding of their problems we’d planned to solve.`}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          The Shifting Frontend Landscape
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Before long, we would once again take a step forward in the JS space with newer approaches to websites. Through my continued expanding expertises in JS, it allowed me to advance to my role as the Frontend Development Lead. In this, I would take on the responsibility to help guide, lead, and mentor the frontend efforts across the company.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Frontend has become to encompass so many elements now. Long gone are the days of just using a bit of HTML, CSS, and JavaScript on pages. Now we have Frontend UI components to design and craft, UX and State management flows to plan and implement, “Backend” Frontend through Integration or serverless to support interactions with APIs and resiliency, and DevOps with the growing complexity of CI/CD services and tools, the field has expanded incredibly in recent years, with no signs of slowing down either.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`As we moved into headless Jamstack space, we settled on the pair of Gatsby and React as our primary tools, as the possibilities of data from any conceivable source was astounding. From my exploration, however, I was admittedly learning we’d move us towards Vuejs 2.x, with its separation of concerns that I felt React lacked at the time… until React 16.8 dropped! With its functional components, hook architecture, and component level state (for when you shouldn’t be using heavier libraries), it was a game changer. It helped move us into a direction that the broader community has continued to embrace around React’s success and growth, and was clear that we made the right choice.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`It’s kind of funny that as JS classes in ES2015 release was a huge step forward, they lacked a finesse that frontend components required to be maintainable and readable patterns, coupled with the lack of shared state which React’s release ushered in.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`With a new and shine static site generator tool like Gatsby, old became new again, with reinvigorated the essence of why static sites were a critical concept that needed a comeback. Our first enterprise Gatsby site launched just before the pandemic, and proved the right choice. While our client’s competitors sites got hammered and run down from SSR traffic, out right breaking some of their services, our clients site was online and running without a blip. That’s the beauty of these solutions with having at most degradation of only isolated services when you build smartly in Jamstack. It gives end users a peace of mind while doing most of their needed operations nearly always.`}
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          Leading a Team Successfully
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`Continuing to respect the efforts in leading, I learned it takes more than assigning tickets or reviewing Pull Requests to mentor and inspire team members. Often project timelines and budget are limited, and while we always strive to do our very best, you also don’t have the luxury to take your time and build whatever you desire. Finding the balance of simplicity and maintainability instead is what I strive to lead the team towards, through constructive feedback and compassion so they know they’re safe to learn from their mistakes. I’m just a part of their journey through the field, and do everything within my power to guard them so they can stay focused and be productive. And of course, learning to challenging them so they can move deeper into the areas that interest them.`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {`A key lesson I’ve learned about fostering good Developers too is that they should not need to know everything. The better they can unpack knowledge and jump back into library/frameworks API docs when they know they need to use again, means they can always solve problems without a lead looking over their shoulder. I urge my team to keep a site like DevDocs pinned at all times to look up how to reuse methods and refresh core concepts as a healthy practice. And, not only to they write better code for it, they continue learning about extra flags/options or other tidbits they may have missed previously when they review it. This helps them to keep expanding their knowledge and improve. It’s truly a marvelous thing.`}
        </Typography>
      </Box>
      <Separators.FinishSeparator />
    </>
  )
}