import Typography from '@mui/material/Typography'
import {List} from '@/components/web/grids'
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone'
import * as React from 'react'

const projectRecoveryGPT = {
  title: '🛟 Recovery GPT',
  description: <>
    <Typography gutterBottom>
      {`I build this tool to revitalize the user experience on your exported ChatGPT conversations with a focus on elegance and privacy. It's a tool designed for intuitive navigation of your past chats, featuring a ChatGPT-inspired UI that operates offline with complete user privacy. With RecoveryGPT, users gain seamless access to their conversations, organized and formatted for easy review, and can effortlessly recover text or code with a single click.`}
    </Typography>
    <List
      items={[
        {
          label: 'Tech',
          caption: 'React, TypeScript, NextJS, Tailwind, File API, ChatGPT Data Model',
          icon: <ImportantDevicesTwoToneIcon />,
        },
        {
          label: 'Skills & Services',
          caption: 'Lead Development & UX, Vercel',
          icon: <MilitaryTechTwoToneIcon />,
        },
      ]}
    />
  </>,
  links: [
    {
      label: 'Learn more',
      href: 'https://recovery-gpt.vercel.app',
    },
  ],
}

export default projectRecoveryGPT
