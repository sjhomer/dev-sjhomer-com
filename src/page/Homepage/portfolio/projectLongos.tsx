import Typography from '@mui/material/Typography'
import {List} from '@web/components/grids'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'
import * as React from 'react'

const projectLongos = {
  title: 'Longos Website & Ecommerce',
  description: <>
    <Typography gutterBottom>
      {`Longos is a renowned grocery chain through the Greater Toronto Area. As we guided their digital web transformation, we set a precedent for a site architecture that could be relied upon, while introducing support for their booking system for their in-person classes.`}
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
          caption: 'Product strategy, UX workflows, Project Management, Technical Strategy Lead, Lead API integrations, DevOps Lead, Development Lead, Mobile App Lead, Netlify',
          icon: <MilitaryTechTwoToneIcon />,
        },
      ]}
    />
  </>,
  links: [
    {
      label: 'Learn more',
      href: 'https://www.therefore.ca/case-studies/longos',
    },
  ],
}

export default projectLongos