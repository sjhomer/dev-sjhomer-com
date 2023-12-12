import Typography from "@mui/material/Typography"
import {List} from "@/components/web/grids"
import ImportantDevicesTwoToneIcon from "@mui/icons-material/ImportantDevicesTwoTone"
import MilitaryTechTwoToneIcon from "@mui/icons-material/MilitaryTechTwoTone"
import * as React from "react"

const projectGlobalEcommSolution = {
  title: "Trudel Medical International",
  description: <>
    <Typography gutterBottom>
      {`Through extensive planning and architecting, we’ve been working to establish a global ready decoupled ecommerce solution for Trudel. By empowering them to with flexible content controls, they can adapt content to store/languages while associating to the commerce layer separately, simplifying the editing vs product management experience immensely. Running a sleek UI, solid UX, and i18n ingrained, it offers a pleasant global commerce experience.`}
    </Typography>
    <List
      items={[
        {
          label: "Tech",
          caption: "React, Redux, Gatsby, Sass, Storybook, NodeJs, Serverless, Drupal, Graphql, REST APIs, Jest",
          icon: <ImportantDevicesTwoToneIcon/>,
        },
        {
          label: "Skills & Services",
          caption: "Product Strategy Lead, UX Lead, Project Management Lead, Technical Strategy Lead, DevOps Lead, Development Lead, Gatsby Cloud, Netlify, Locize, Sentry, CommerceLayer, Paypal, Stripe",
          icon: <MilitaryTechTwoToneIcon/>,
        },
      ]}
    />
  </>,
  links: [
    {
      label: "Learn more",
      href: "https://www.trudellmed.com/",
    },
  ],
}

export default projectGlobalEcommSolution
