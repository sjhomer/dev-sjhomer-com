import * as React from 'react'
import MuiTimeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'

interface TimelineIcon {
  icon?: JSX.Element
  color?: "primary" | "secondary" | "inherit"
  variant?: 'filled' | 'outlined'
}

export type TimelineData = {
  supporting?: string|JSX.Element
  title: string
  caption?: string|JSX.Element
  icon?: TimelineIcon
  align?: 'left' | 'right'
}

interface TimelineProps {
  data: TimelineData[]
}

export default function Timeline({data}: TimelineProps) {
  const [list, setList] = React.useState([])

  React.useEffect(() => {
    // @ts-ignore
    setList(data.map((item: TimelineData, i) => ({
      ...item,
      align: item.align || i % 2 === 0 ? 'left' : 'right',
    })))
  }, [data])

  // console.log('Timeline', list)

  return (
    <MuiTimeline position="alternate">
      {list.map((item: TimelineData, i) => {
        return (
          <TimelineItem key={i}>
            <TimelineOppositeContent sx={{m: 'auto 0'}} align={item.align} variant="body2" color="textSecondary">
              {item.supporting}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={item?.icon?.color} variant={item?.icon?.variant}>
                {item?.icon?.icon || null}
              </TimelineDot>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
              <Typography variant="h6" component="span">
                {item.title}
              </Typography>
              {item.caption}
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </MuiTimeline>
  )
}
