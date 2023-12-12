import * as React from 'react'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import {Timeline} from '@/components/web/grids'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import InfoIcon from '@mui/icons-material/Info'
import {links} from '@/config'

const linkedInLink = <Link
  href={links.linkedin}
  target="_blank"
  sx={{
    display: 'inline-flex',
    alignItems: 'center',
    '.MuiSvgIcon-root': {
      marginRight: '0.5rem',
    },
  }}
>
  <LinkedInIcon /> Let&lsquo;s Connect!
</Link>

const timelineData = [
  {
    supporting: <span>Jun 2022 &mdash;&gt; Present</span>,
    title: 'Battlefy, Inc.',
    caption:
      <span>
        Senior Staff Engineer<br />
      </span>,
    icon: {
      icon: <DeveloperBoardIcon />,
    },
    iconColor: 'secondary',
  },
  {
    supporting: <span>Dec 2014 &mdash;&gt; May 2022</span>,
    title: 'Therefore Interactive',
    caption:
      <span>
        Frontend Development Lead, 3y 1m<br />
        Technical Architect, 1y<br />
        Senior Developer, 3y 6m
      </span>,
    icon: {
      icon: <DeveloperBoardIcon />,
    },
  },
  {
    supporting: <span>Oct 2009 &mdash;&gt; Dec 2014</span>,
    title: 'RC Design',
    caption:
      <span>
        Web Developer, 5y 3m
      </span>,
    icon: {
      icon: <DeveloperBoardIcon />,
    },
  },
  {
    supporting: <span>Apr 2005 &mdash;&gt; Sep 2009</span>,
    title: <span style={{display: 'inline-flex', alignItems: 'center'}}>
      SteelSeries
      &nbsp;
      <Tooltip title="And formerly, Ideazon">
        <InfoIcon />
    </Tooltip>
    </span>,
    caption:
      <span>
        Web Developer, 1y 11m<br />
        Intranet Web Developer, 1y 6m<br />
        QA Engineer, 1y 3m
      </span>,
    icon: {
      icon: <DeveloperBoardIcon />,
    },
  },
]

const HomepageTimeline = () => <Timeline data={timelineData} />

export default HomepageTimeline
