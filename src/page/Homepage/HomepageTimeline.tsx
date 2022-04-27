import * as React from "react"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard"
import {Timeline} from "@web/components/grids"

const timelineData = [{
  supporting: 'Jun 2022',
  title: 'Seeking new opportunities',
  // caption: 'Frontend Development Lead',
  icon: {
    icon: <EmojiEventsIcon/>
  },
  iconColor: "secondary"
},
  {
    supporting: <span>Dec 2014 &mdash;&gt; May 2022</span>,
    title: 'Therefore Interactive',
    caption:
      <span><br/>
        Frontend Development Lead, 3y 1m<br/>
        Technical Architect, 1y<br/>
        Senior Developer, 3y 6m
      </span>,
    icon: {
      icon: <DeveloperBoardIcon/>
    },
  },
  {
    supporting: <span>Dec 2014 &mdash;&gt; Oct 2009</span>,
    title: 'RC Design',
    caption:
      <span><br/>
        Web Developer, 5y 3m
      </span>,
    icon: {
      icon: <DeveloperBoardIcon/>
    },
  },
  {
    supporting: <span>Sep 2009 &mdash;&gt; Apr 2005</span>,
    title: 'SteelSeries',
    caption:
      <span><br/>
        Web Developer, 1y 11m<br/>
        Intranet Web Developer, 1y 6m<br/>
        QA Engineer, 1y 3m
      </span>,
    icon: {
      icon: <DeveloperBoardIcon/>
    },
  },
]

const HomepageTimeline = () => <Timeline data={timelineData}/>

export default HomepageTimeline