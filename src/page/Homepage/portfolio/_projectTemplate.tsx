import Typography from '@mui/material/Typography'
import {List} from '@web/components/grids'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'
import * as React from 'react'

const projectGlobalEcommSolution = {
  title: '',
  description: <>
    <Typography gutterBottom>
      {``}
    </Typography>
    <List
      items={[
        {
          label: 'Tech',
          caption: 'Twig, React, Redux, NodeJs, Drupal, Storybook, JSONAPI',
          icon: <ImportantDevicesTwoToneIcon />,
        },
        {
          label: 'Skills & Services',
          caption: 'Technical Architecture, Mentorship',
          icon: <MilitaryTechTwoToneIcon />,
        },
      ]}
    />
  </>
  ,
  modalContent: <>
    <Typography gutterBottom>
      {``}
    </Typography><Typography gutterBottom>
    {``}
  </Typography>
  </>,
}

export default projectGlobalEcommSolution