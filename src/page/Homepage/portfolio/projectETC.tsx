import Typography from '@mui/material/Typography'
import {List} from '@web/components/grids'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'
import * as React from 'react'

const projectETC = {
  title: 'ETC Certification Application',
  description: <>
    <Typography gutterBottom>
      {`Engineering Technology Canada needed help to reimagine a lengthy and complex form wizard supporting applications for certifications. Through deliberation and consensus, we consolidated the application to one that present simply, while offering a stellar UX for seamless use.`}
    </Typography>
    <List
      items={[
        {
          label: 'Tech',
          caption: 'React, Gatsby, Cypress, Drupal, JSONAPI, REST APIs',
          icon: <ImportantDevicesTwoToneIcon />,
        },
        {
          label: 'Skills & Services',
          caption: 'Product Strategy, UX, Project Management, Technical Strategy Lead, DevOps Lead, Development Lead, Gatsby Cloud, Netlify',
          icon: <MilitaryTechTwoToneIcon />,
        },
      ]}
    />
  </>,
  links: [
    {
      label: 'Learn more',
      href: 'https://www.therefore.ca/case-studies/asttbc',
    },
  ],
}

export default projectETC