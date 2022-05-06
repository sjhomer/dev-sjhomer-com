import Typography from '@mui/material/Typography'
import {List} from '@web/components/grids'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'
import * as React from 'react'

const projectBitbuy = {
  title: 'Bitbuy.ca Crypto Exchange',
  description: <>
    <Typography gutterBottom>
      {`Bitbuy is a leading Canadian cryptocurrency exchange. We helped grow their web presence into a modern stack with Gatsby powered by Drupal and WordPress for content, and their internal exchange APIs requiring resiliency.`}
    </Typography>
    <List
      items={[
        {
          label: 'Tech',
          caption: 'React, Gatsby, NodeJs, Drupal, JSONAPI, WordPress, REST APIs',
          icon: <ImportantDevicesTwoToneIcon />,
        },
        {
          label: 'Skills & Services',
          caption: 'Product Strategy Lead, UX Lead, Project Management Lead, Technical Strategy Lead, API integrations, DevOps Lead, Development Lead, AWS Amplify',
          icon: <MilitaryTechTwoToneIcon />,
        },
      ]}
    />
  </>,
  links: [
    {
      label: 'Learn more',
      href: 'https://www.therefore.ca/case-studies/bitbuy',
    },
  ],
}

export default projectBitbuy