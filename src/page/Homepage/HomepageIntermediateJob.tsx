import * as React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import {List, Separators} from "@web/components/grids"
import Grid from "@mui/material/Grid"
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'

export default function HomepageIntermediateJob() {
  let techAndSkill = [
    {
      label: 'Tech',
      caption: 'PHP, MySQL, JS, MVC CMS & ORM, jQuery, NodeJs, Less/Sass, WordPress, Bootstrap',
      icon: <ImportantDevicesTwoToneIcon/>
    },
    {
      label: 'Skills & Services',
      caption: 'GoDaddy, Linode, DigitalOcean, DNS Management, Google Analytics, Git',
      icon: <MilitaryTechTwoToneIcon/>
    }
  ]

  return (<>
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
        Cementing my Foundation
      </Typography>
      <Grid container marginBottom={2} spacing={{xs: 1, md: 8}}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            {`Entering my first agency position, I saw different take on web development moving away from product focused sales and tools. Supporting many diverse clients, all with specialized and nuanced needs through CMSs and other data layers, as a welcome change. Through these efforts, my skill and business sense was forged and solidified further.`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <List items={techAndSkill}/>
        </Grid>
      </Grid>
      <Typography variant="h5" component="h3" gutterBottom>
        Why “done done” matters for UAT
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`Early on, still have little experience working directly with clients where projects and requirements are driven primarily by them, I again came across a career defining failure. The first big project I produced was a complex Fintech website. Not having a well-rounded understanding of that field, and lacking guidelines and business requirements, I made some quick assumptions on presentation and UX while working fast, rather than smart. This cause features to have buggy result, and displaying poorly without perfect happy path use cases. As you can imagine, when I presented my updates before the winter holidays to the client, they were hoping to launch in the new year, and we were far from ready. Yet from another spectacular failure was a great lesson to be learned that working fast never wins out. While I was still acting professionally, the calibre of my work was lacking.`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`I resolved to do my due diligence, validating requirements are clear before beginning, or pausing to gain clarity if blockers present themselves, finally triple check releases even when you think “things are good” to give clients the best possible results at all times. Least to say, while this specific client was immensely unhappy initially, they became quite fond of me. Through my dedication in supporting their services for my entire tenure at the firm, they were dearly saddened to see me move on.`}
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        Laying brick after brick
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`I helped to establish and mature the in-house CMS, crafted PHP and MySQL, which we improved upon for continuously with it serving us well. We found an avenue to transition to working with WordPress, but only after it was stabilized in years later.`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`As with other early CMSs of the era, they were not always the most dependable in of themselves, and why our in-house solution continued to be maintained and improved. I worked routinely to set and improve code standards and patterns of using the system, improving aspects of the framework as new relevant libraries became available, around the JS layer with jQuery, extending to Less/Sass styling, and the importance of moving away from FTP to git management and version control on all things.`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`Most developers nowadays take a lot of modern dev practices for granted, having not worked through and surpassed the legacy methods that many firms once used regularly. Seeing tools and tech to reduce risk, add stability, and improve our overall development workflows, I jumped at any chance I could to raise the bar on how we could operate more dependably.`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`During my growth, I led projects and supported other developers through code reviews, began supporting the RPF process, defining estimations on projects/bids to quantify the efforts, and generating tasks needed to execute our solutions successfully.`}
      </Typography>
      <Typography variant="h5" component="h3" gutterBottom>
        Looking to the Future
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`After the advent release of Meteor JS, the future of the web being JavaScript was crystallized in my mind. The possibilities with real time delivery, hot reloading local dev, and socket connections blew my mind. I didn’t get the chance to fully leverage my growing JS capabilities through work at the time. Still, I began introducing better tooling and code generation to improve our development experience.`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`We began seeking more managed services to help unburden the DevOps of running direct hosting and problems that could ensue. Also, the growing complexity and maintenance of the in-house CMS was becoming more apparent. Thankfully, with the improved stability around WordPress, it became attractive along with easier ways to run the CMS via SaaS provides. Transitioning towards this meant the team could focus more on doing good work and less time managing deployments.`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`Because of my continued self-directed learning and growing competences, it once again opened the door for my advancement to another agency. They were seeking a talented JS developer in an early decoupled solution, and I was ready.`}
      </Typography>
    </Box>
    <Separators.MountainSeparator/>
  </>)
}