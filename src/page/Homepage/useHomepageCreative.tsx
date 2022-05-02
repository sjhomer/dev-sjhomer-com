import * as React from 'react'
import {useTheme} from '@mui/material/styles'
import {CtaLinkCardProps} from '@web/components/cards'
import siteConfig from '@src/config'
import useModal from '@web/components/content/useModal'
import Typography from '@mui/material/Typography'
import {List, ListItem} from '@mui/material'
import {ChevronRight} from '@mui/icons-material'
import Button from '@mui/material/Button'

interface useHomepageCreativeReturn {
  ctas: CtaLinkCardProps[]
  modals: JSX.Element
}

export default function useHomepageCreative(): useHomepageCreativeReturn {
  const theme = useTheme()

  const evergrowthModal = useModal({
    title: 'About Evergrowth Mastermind',
    content: <>
      <Typography gutterBottom>
        We strived to provide impactful insights to bring this knowledge back to our professional and personal lives.
        Engaging with a variety of guests, steaming our sessions live, and record the audio cast at our monthly sessions
        allows us to share these wonderful insights to a larger community.
      </Typography>
      <Typography gutterBottom>
        I co-found and ran a Mastermind group, focused on exploring enticing topics in an intimate yet open round table
        format. As we delved into a wide range of subjects, our talks unfold organically as they go.
      </Typography>
      <List>
        <ListItem>
          <ChevronRight />
          Planning topics, talking points, presentation slides
        </ListItem>
        <ListItem><ChevronRight /> Coordinated events with guests and speakers</ListItem>
        <ListItem><ChevronRight /> Provided audio/recording equipment and recorded talking sessions</ListItem>
        <ListItem><ChevronRight /> MC'd and led many of the sessions</ListItem>
      </List>
    </>,
    actions: <Button href={siteConfig.links.evergrowthMastermind} target="_blank">
      Have a Listen
    </Button>,
  })
  const evergrowth = {
    description: `A leadership and personal development mastermind I co-founded and lead form 2017-2021, with over a years worth recorded in a talk show.`,
    imageData: {
      src: '/assets/images/evergrowth-mastermind-logo.png',
      alt: 'Homer On Olympus logo',
    },
    links: [
      {
        label: 'Learn more',
        onClick: () => evergrowthModal.toggleModal(),
      },
      {
        label: 'Have a Listen',
        href: siteConfig.links.evergrowthMastermind,
      },
    ],
  }

  const hooModal = useModal({
    title: 'About Homer on Olympus',
    content: <>
      <Typography gutterBottom>
        An audio drama I wrote, performed, and produced, featuring 23 episodes over half a year in 2021.
      </Typography>
      <Typography gutterBottom>
        It's a satirical look at the world, through the eyes of Gods. A tale of a mortal navigating his way around
        Olympus, and the Gods, as they fight for whether humanity is worthy of survival.
      </Typography>
      <List>
        <ListItem><ChevronRight /> Script writing</ListItem>
        <ListItem><ChevronRight /> Voice acting</ListItem>
        <ListItem><ChevronRight /> Audio production and mastering</ListItem>
        <ListItem><ChevronRight /> Video production of audio episodes</ListItem>
        <ListItem><ChevronRight /> Social media content creation and scheduling for regular releases</ListItem>
      </List>
    </>,
    actions: <Button href={siteConfig.links.homerOnOlympus} target="_blank">
      Have a Listen
    </Button>,
  })
  const homerOnOlympus = {
    description: `An fun audio drama which I wrote, performed, and produced over the course of 2021, voicing a total of 9 unique characters across 23 episodes.`,
    imageData: {
      src: '/assets/images/homer-on-olympus-logo.png',
      alt: 'Homer On Olympus logo',
    },
    links: [
      {
        label: 'Learn more',
        onClick: () => hooModal.toggleModal(),
      },
      {
        label: 'Have a Listen',
        href: siteConfig.links.homerOnOlympus,
      },
    ],
  }

  const modals = <>
    {evergrowthModal.modal}
    {hooModal.modal}
  </>

  const ctas = [
    evergrowth,
    homerOnOlympus,
  ]

  return {ctas, modals}
}